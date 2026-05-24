"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, NeuralBase",
    company: "NeuralBase",
    avatar: "SC",
    rating: 5,
    text: "Clutch Coders built our entire AI infrastructure from scratch. What would have taken our team 18 months, they delivered in 5. The quality is absolutely elite — our competitors can't match it.",
    color: "#7B2FF7",
  },
  {
    name: "Marcus Thompson",
    role: "Founder & CEO, LaunchFast",
    company: "LaunchFast",
    avatar: "MT",
    rating: 5,
    text: "I've worked with 12 development agencies. None came close to Clutch Coders. Their AI-integrated dashboard became the product that raised our Series A. They're not developers — they're architects of the future.",
    color: "#4CC9F0",
  },
  {
    name: "Aisha Okonkwo",
    role: "VP Product, ScaleCloud",
    company: "ScaleCloud",
    avatar: "AO",
    rating: 5,
    text: "Our SaaS platform went from concept to $2M ARR in 8 months, largely due to the exceptional engineering Clutch Coders brought. Every micro-interaction, every API response — pure craft.",
    color: "#9D4EDD",
  },
  {
    name: "David Rodriguez",
    role: "Head of Digital, LuxeBrand",
    company: "LuxeBrand",
    avatar: "DR",
    rating: 5,
    text: "The e-commerce platform they built for us generates 3x more revenue than our old system. The AI recommendations engine alone increased average order value by 47%. Outstanding ROI.",
    color: "#F72585",
  },
  {
    name: "Emma Larsson",
    role: "COO, FinTechPro",
    company: "FinTechPro",
    avatar: "EL",
    rating: 5,
    text: "Security, compliance, and performance — Clutch Coders delivered all three without compromise. Our banking app now serves 100K+ users with zero critical incidents. Truly world-class.",
    color: "#7B2FF7",
  },
  {
    name: "James Osei",
    role: "Director of Engineering, DataCore",
    company: "DataCore",
    avatar: "JO",
    rating: 5,
    text: "We hired them to modernize a 15-year-old legacy system. They didn't just modernize it — they completely transformed our competitive position with AI capabilities we didn't know were possible.",
    color: "#4CC9F0",
  },
];

function TestimonialCard({
  testimonial,
  active,
  onClick,
}: {
  testimonial: typeof testimonials[0];
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      className={`glass-card rounded-2xl p-6 cursor-pointer transition-all duration-500 ${
        active ? "ring-1 ring-neon-purple/50" : ""
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      animate={active ? { y: -4 } : { y: 0 }}
    >
      {active && (
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${testimonial.color}10 0%, transparent 70%)`,
          }}
          layoutId="activeGlow"
        />
      )}

      {/* Quote icon */}
      <Quote
        size={24}
        className="mb-4 opacity-40"
        style={{ color: testimonial.color }}
      />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-4">
        "{testimonial.text}"
      </p>

      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm"
          style={{ background: testimonial.color + "30", color: testimonial.color }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-semibold text-sm text-white">{testimonial.name}</div>
          <div className="text-xs text-white/40">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-electric-violet/6 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-mono text-xs tracking-[0.3em] text-neon-purple/70 mb-4 uppercase">
            Client Stories
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-white">Trusted by </span>
            <span className="gradient-text">Builders</span>
            <br />
            <span className="text-white">Who Mean Business</span>
          </h2>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: `radial-gradient(circle at 20% 50%, ${testimonials[active].color}08 0%, transparent 60%)`,
            }}
          />

          <div className="flex items-start gap-4 mb-6">
            <Quote size={48} style={{ color: testimonials[active].color, opacity: 0.3 }} />
            <div className="flex gap-1 pt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              className="text-xl md:text-2xl text-white/80 leading-relaxed font-light mb-8 max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              "{testimonials[active].text}"
            </motion.blockquote>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={active + "author"}
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center font-heading font-bold text-lg"
                style={{
                  background: `linear-gradient(135deg, ${testimonials[active].color}40, ${testimonials[active].color}20)`,
                  color: testimonials[active].color,
                  border: `1px solid ${testimonials[active].color}30`,
                }}
              >
                {testimonials[active].avatar}
              </div>
              <div>
                <div className="font-semibold text-lg text-white">{testimonials[active].name}</div>
                <div className="text-white/40 text-sm">{testimonials[active].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress dots */}
          <div className="flex gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="h-1 rounded-full transition-all duration-300"
                style={{
                  width: active === i ? "32px" : "8px",
                  background: active === i ? testimonials[i].color : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.08 }}
            >
              <TestimonialCard
                testimonial={t}
                active={active === i}
                onClick={() => setActive(i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
