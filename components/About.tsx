"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Zap, Globe, Shield } from "lucide-react";

const stats = [
  { number: "200+", label: "Projects Delivered", suffix: "" },
  { number: "50+", label: "Global Clients", suffix: "" },
  { number: "30+", label: "AI Solutions Built", suffix: "" },
  { number: "5+", label: "Years of Expertise", suffix: "" },
];

const values = [
  { icon: Brain, title: "AI-First Mindset", desc: "We infuse artificial intelligence into every solution we craft." },
  { icon: Zap, title: "Lightning Fast", desc: "Rapid delivery without compromising on quality or innovation." },
  { icon: Globe, title: "Global Reach", desc: "Serving ambitious clients across 20+ countries worldwide." },
  { icon: Shield, title: "Enterprise Grade", desc: "Security, scalability, and reliability built into every line." },
];

function AnimatedCounter({ target, duration = 2 }: { target: string; duration?: number }) {
  const displayRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(displayRef, { once: true, margin: "-50px" });
  const num = parseInt(target.replace(/\D/g, ""));
  const suffix = target.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!inView || !displayRef.current) return;
    const start = Date.now();
    const end = start + duration * 1000;
    const tick = () => {
      const now = Date.now();
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * num);
      if (displayRef.current) displayRef.current.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, num, suffix, duration]);

  return (
    <span ref={displayRef} className="font-heading font-black text-4xl md:text-5xl gradient-text">
      0{suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-purple/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-mono text-xs tracking-[0.3em] text-neon-purple/70 mb-4 uppercase">
            About Clutch Coders
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-white">We Are The </span>
            <span className="gradient-text">Future</span>
            <br />
            <span className="text-white">of Digital Innovation</span>
          </h2>
          <p className="text-white/50 text-lg max-w-3xl mx-auto leading-relaxed">
            Clutch Coders is an elite software engineering studio fusing cutting-edge AI,
            premium web development, and strategic digital marketing to help ambitious businesses
            dominate their industries.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: 3D visual */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Rotating rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-neon-purple/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute -top-2 left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-neon-purple glow-purple" />
              </motion.div>
              <motion.div
                className="absolute inset-8 rounded-full border border-electric-violet/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute -top-2 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-cosmic-blue glow-blue" />
              </motion.div>
              <motion.div
                className="absolute inset-16 rounded-full border border-cosmic-blue/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* Center element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-32 h-32 rounded-2xl glass-card flex items-center justify-center rotate-12"
                  animate={{ rotate: [12, -12, 12] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Brain className="text-neon-purple" size={48} />
                </motion.div>
              </div>

              {/* Floating badges */}
              {[
                { label: "AI", color: "#7B2FF7", pos: "top-2 right-2" },
                { label: "WEB", color: "#4CC9F0", pos: "bottom-4 left-4" },
                { label: "UX", color: "#9D4EDD", pos: "top-1/2 -right-4" },
              ].map(({ label, color, pos }) => (
                <motion.div
                  key={label}
                  className={`absolute ${pos} glass rounded-full px-3 py-1 text-xs font-mono font-bold`}
                  style={{ color, borderColor: color + "40" }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <p className="text-white/60 text-lg leading-relaxed">
              Founded on the belief that technology should be{" "}
              <span className="text-white font-medium">breathtaking</span>, we build products that
              define what's possible. From AI-powered platforms to immersive digital experiences,
              every project we touch becomes a benchmark.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              Our team of elite engineers, designers, and AI specialists work as one unit to deliver
              solutions that are not just functional — they're{" "}
              <span className="gradient-text font-semibold">legendary</span>.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {values.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  className="glass-card rounded-xl p-4 space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="w-9 h-9 rounded-lg bg-neon-purple/20 flex items-center justify-center">
                    <Icon size={18} className="text-neon-purple" />
                  </div>
                  <h4 className="font-semibold text-sm text-white">{title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map(({ number, label }, i) => (
            <motion.div
              key={label}
              className="glass-card rounded-2xl p-6 text-center"
              whileHover={{ scale: 1.04 }}
            >
              <AnimatedCounter target={number} duration={2 + i * 0.3} />
              <p className="text-white/40 text-sm mt-2 font-medium">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
