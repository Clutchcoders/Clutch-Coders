"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Search, Map, Palette, Code2, Brain, TestTube, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    desc: "Deep-dive analysis of your business goals, user needs, competitive landscape, and technical requirements.",
    color: "#7B2FF7",
    duration: "1-2 weeks",
  },
  {
    icon: Map,
    number: "02",
    title: "Strategy",
    desc: "We architect a comprehensive roadmap: technology stack, milestones, success metrics, and scaling plan.",
    color: "#9D4EDD",
    duration: "1 week",
  },
  {
    icon: Palette,
    number: "03",
    title: "Design",
    desc: "World-class UI/UX design with interactive prototypes, design systems, and motion specifications.",
    color: "#4CC9F0",
    duration: "2-3 weeks",
  },
  {
    icon: Code2,
    number: "04",
    title: "Development",
    desc: "Agile engineering sprints delivering production-ready, tested, and documented code every two weeks.",
    color: "#7B2FF7",
    duration: "4-12 weeks",
  },
  {
    icon: Brain,
    number: "05",
    title: "AI Integration",
    desc: "Embedding intelligent capabilities — from recommendation engines to predictive analytics and LLMs.",
    color: "#F72585",
    duration: "2-4 weeks",
  },
  {
    icon: TestTube,
    number: "06",
    title: "Testing",
    desc: "Rigorous QA: unit, integration, E2E, performance, security, and accessibility testing at every layer.",
    color: "#9D4EDD",
    duration: "1-2 weeks",
  },
  {
    icon: Rocket,
    number: "07",
    title: "Launch",
    desc: "Zero-downtime deployment with monitoring, rollback protocols, and a global CDN for instant delivery.",
    color: "#4CC9F0",
    duration: "1 week",
  },
  {
    icon: TrendingUp,
    number: "08",
    title: "Growth",
    desc: "Ongoing optimization, feature evolution, A/B testing, and technical scaling to match your ambition.",
    color: "#7B2FF7",
    duration: "Ongoing",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-neon-purple/6 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-mono text-xs tracking-[0.3em] text-neon-purple/70 mb-4 uppercase">
            How We Work
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-white">A Process Built for </span>
            <span className="gradient-text">Perfection</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Eight battle-tested phases. Zero guesswork. Maximum impact.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-neon-purple to-cosmic-blue"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  className={`relative flex items-center lg:gap-16 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                >
                  {/* Card */}
                  <div className={`flex-1 ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
                    <motion.div
                      className="glass-card rounded-2xl p-6 inline-block w-full lg:max-w-sm group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          isLeft ? "lg:flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: step.color + "20" }}
                        >
                          <Icon size={20} style={{ color: step.color }} />
                        </div>
                        <span
                          className="font-mono text-3xl font-black"
                          style={{ color: step.color + "40" }}
                        >
                          {step.number}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-xl text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed mb-3">{step.desc}</p>
                      <span
                        className="text-xs font-mono px-3 py-1 rounded-full"
                        style={{ background: step.color + "15", color: step.color }}
                      >
                        {step.duration}
                      </span>
                    </motion.div>
                  </div>

                  {/* Center node */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full items-center justify-center z-10"
                    style={{ background: "#050510", border: `2px solid ${step.color}` }}
                  >
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{
                        background: step.color,
                        boxShadow: `0 0 20px ${step.color}`,
                      }}
                    />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
        >
          <p className="text-white/40 text-lg mb-6">
            Ready to start your journey?
          </p>
          <motion.button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary px-10 py-4 rounded-xl font-semibold text-white text-base"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Let's Start with Discovery
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
