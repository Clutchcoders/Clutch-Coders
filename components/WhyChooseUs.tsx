"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const advantages = [
  {
    title: "Scalable Architecture",
    desc: "Built to grow with your business from MVP to enterprise scale.",
    stat: "∞",
    statLabel: "Scale",
  },
  {
    title: "AI-Driven Solutions",
    desc: "Machine intelligence baked in — not bolted on as an afterthought.",
    stat: "GPT-4",
    statLabel: "Powered",
  },
  {
    title: "Fast Delivery",
    desc: "Sprint-based delivery cycles that ship value every 2 weeks.",
    stat: "2wk",
    statLabel: "Sprints",
  },
  {
    title: "Modern Tech Stack",
    desc: "Only the latest, battle-tested technologies that stand the test of time.",
    stat: "2025",
    statLabel: "Stack",
  },
  {
    title: "Enterprise Security",
    desc: "SOC2-aligned practices, end-to-end encryption, zero-trust architecture.",
    stat: "A+",
    statLabel: "Security",
  },
  {
    title: "Global Standards",
    desc: "WCAG AA accessibility, international compliance, multi-region readiness.",
    stat: "99.99%",
    statLabel: "Uptime",
  },
  {
    title: "Performance First",
    desc: "Sub-second load times. 100/100 Lighthouse scores. Zero compromises.",
    stat: "100",
    statLabel: "Score",
  },
  {
    title: "Dedicated Support",
    desc: "24/7 on-call engineering support with <1hr response SLAs.",
    stat: "<1hr",
    statLabel: "Response",
  },
];

const comparison = [
  { feature: "AI-powered solutions", us: true, others: false },
  { feature: "Dedicated project team", us: true, others: false },
  { feature: "Code ownership", us: true, others: false },
  { feature: "Post-launch support", us: true, others: true },
  { feature: "No hidden fees", us: true, others: false },
  { feature: "Agile delivery", us: true, others: true },
  { feature: "24/7 monitoring", us: true, others: false },
  { feature: "Innovation roadmap", us: true, others: false },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-neon-purple/30" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-neon-purple/6 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-mono text-xs tracking-[0.3em] text-neon-purple/70 mb-4 uppercase">
            Why Clutch Coders
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-white">The </span>
            <span className="gradient-text">Unfair Advantage</span>
            <br />
            <span className="text-white">Your Business Deserves</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            We don't just build software. We build competitive moats.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Advantages grid */}
          <div className="grid grid-cols-2 gap-4">
            {advantages.map(({ title, desc, stat, statLabel }, i) => (
              <motion.div
                key={title}
                className="glass-card rounded-xl p-5 group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="font-heading font-black text-2xl gradient-text leading-none"
                    aria-label={stat}
                  >
                    {stat}
                  </div>
                  <div className="text-xs text-white/30 font-mono">{statLabel}</div>
                </div>
                <h4 className="font-semibold text-sm text-white mb-1.5">{title}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Comparison table */}
          <motion.div
            className="glass-card rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Table header */}
            <div className="grid grid-cols-3 items-center p-5 border-b border-white/5">
              <span className="text-white/40 text-sm">Feature</span>
              <div className="text-center">
                <span className="font-heading font-bold text-sm gradient-text">Clutch Coders</span>
              </div>
              <div className="text-center">
                <span className="text-white/30 text-sm">Others</span>
              </div>
            </div>

            {comparison.map(({ feature, us, others }, i) => (
              <motion.div
                key={feature}
                className="grid grid-cols-3 items-center px-5 py-4 border-b border-white/5 last:border-0 hover:bg-neon-purple/5 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.07 }}
              >
                <span className="text-white/60 text-sm">{feature}</span>
                <div className="flex justify-center">
                  {us ? (
                    <CheckCircle2 className="text-neon-purple" size={20} />
                  ) : (
                    <XCircle className="text-white/20" size={20} />
                  )}
                </div>
                <div className="flex justify-center">
                  {others ? (
                    <CheckCircle2 className="text-white/30" size={20} />
                  ) : (
                    <XCircle className="text-red-500/50" size={20} />
                  )}
                </div>
              </motion.div>
            ))}

            {/* Footer CTA */}
            <div className="p-5 bg-neon-purple/5">
              <motion.button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full btn-primary py-3 rounded-xl font-semibold text-white text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join 50+ Winning Brands
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
