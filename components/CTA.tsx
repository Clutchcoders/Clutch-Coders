"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden py-32" ref={ref}>
      {/* Neural network background */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(123,47,247,0.15) 0%, rgba(5,5,16,0) 70%)",
          }}
        />

        {/* Animated particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              background: i % 3 === 0 ? "#7B2FF7" : i % 3 === 1 ? "#4CC9F0" : "#9D4EDD",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* SVG Neural network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 400">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.line
              key={i}
              x1={Math.random() * 1000}
              y1={Math.random() * 400}
              x2={Math.random() * 1000}
              y2={Math.random() * 400}
              stroke="#7B2FF7"
              strokeWidth="0.5"
              animate={{ opacity: [0.1, 0.5, 0.1] }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </svg>

        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 border border-neon-purple/20 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Sparkles size={14} className="text-neon-purple" />
          <span className="text-xs font-mono text-white/60 tracking-widest">
            THE FUTURE IS NOW
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-heading font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="text-white">Ready to Build</span>
          <br />
          <span className="gradient-text">the Future?</span>
        </motion.h2>

        <motion.p
          className="text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join 50+ visionary companies who chose Clutch Coders to build their
          next breakthrough. Your transformation starts with a single conversation.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary group relative px-10 py-5 rounded-2xl font-bold text-lg text-white inline-flex items-center gap-3 animate-pulse-glow"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <span>Let's Build Together</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { label: "Response Time", value: "< 24 hours" },
            { label: "Free Consultation", value: "No commitment" },
            { label: "NDA", value: "Signed upfront" },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="font-heading font-bold text-lg gradient-text">{value}</span>
              <span className="text-white/30 text-xs font-mono">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
