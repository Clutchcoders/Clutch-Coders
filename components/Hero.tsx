"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const codeSnippets = [
  `const ai = new ClutchAI({
  model: "gpt-next",
  scale: "infinite"
});`,
  `await deploy({
  target: "production",
  regions: ["global"]
})`,
  `SELECT excellence
FROM code
WHERE quality = "elite"`,
  `import { Innovation }
from "@clutch/future"`,
];

function AIOrb() {
  const orbRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateY = useSpring(mouseX, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 20);
      mouseY.set((e.clientY / innerHeight - 0.5) * -20);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={orbRef}
      className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] flex items-center justify-center"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      {/* Outer glow rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-neon-purple/20"
          style={{
            width: `${60 + i * 25}%`,
            height: `${60 + i * 25}%`,
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: i === 1 ? "#7B2FF7" : i === 2 ? "#4CC9F0" : "#9D4EDD",
              boxShadow: `0 0 15px ${i === 1 ? "#7B2FF7" : i === 2 ? "#4CC9F0" : "#9D4EDD"}`,
            }}
          />
        </motion.div>
      ))}

      {/* Core orb */}
      <motion.div
        className="relative w-48 h-48 md:w-56 md:h-56 rounded-full"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Orb background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-purple via-electric-violet to-cosmic-blue opacity-80" />

        {/* Inner glow */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent" />

        {/* Outer glow */}
        <div className="absolute -inset-6 rounded-full bg-neon-purple/20 blur-2xl" />
        <div className="absolute -inset-12 rounded-full bg-electric-violet/10 blur-3xl" />

        {/* Neural network SVG overlay */}
        <svg className="absolute inset-0 w-full h-full rounded-full" viewBox="0 0 200 200">
          <motion.circle
            cx="100" cy="100" r="60"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          />
          {[[50, 50], [150, 50], [50, 150], [150, 150], [100, 40], [100, 160], [40, 100], [160, 100]].map(
            ([x, y], i) => (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="3"
                fill="rgba(123,47,247,0.8)"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 2,
                  delay: i * 0.25,
                  repeat: Infinity,
                }}
              />
            )
          )}
          {[[50, 50, 100, 40], [50, 50, 40, 100], [150, 50, 100, 40], [150, 50, 160, 100],
            [50, 150, 40, 100], [50, 150, 100, 160], [150, 150, 160, 100], [150, 150, 100, 160]].map(
            ([x1, y1, x2, y2], i) => (
              <motion.line
                key={i}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="rgba(76,201,240,0.3)"
                strokeWidth="0.5"
                animate={{ opacity: [0.1, 0.6, 0.1] }}
                transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
              />
            )
          )}
        </svg>

        {/* Center logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="font-heading font-black text-4xl text-white/90">CC</div>
            <div className="text-xs text-white/50 tracking-widest mt-1 font-mono">AI</div>
          </div>
        </div>
      </motion.div>

      {/* Floating code snippets */}
      {codeSnippets.slice(0, 2).map((code, i) => (
        <motion.div
          key={i}
          className="absolute glass rounded-lg p-3 text-xs font-mono text-neon-purple/80 border border-neon-purple/20 hidden md:block"
          style={{
            [i === 0 ? "right" : "left"]: "-60px",
            top: i === 0 ? "20%" : "60%",
            width: "180px",
          }}
          animate={{
            y: [0, -8, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
        >
          <pre className="whitespace-pre-wrap leading-relaxed text-[10px]">{code}</pre>
        </motion.div>
      ))}
    </motion.div>
  );
}

function Headline() {
  const words = ["Intelligent", "Digital", "Experiences", "for the Future."];
  return (
    <div className="overflow-hidden">
      <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight">
        <span className="block">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          >
            Building
          </motion.span>
        </span>
        <span className="block">
          {words.slice(0, 3).map((word, i) => (
            <motion.span
              key={word}
              className={`inline-block mr-3 ${i < 3 ? "gradient-text" : "text-white"}`}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.1 + i * 0.08,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </span>
        <span className="block text-white">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.38, ease: [0.33, 1, 0.68, 1] }}
          >
            {words[3]}
          </motion.span>
        </span>
      </h1>
    </div>
  );
}

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cosmic-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-violet/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 border border-neon-purple/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
              <span className="text-xs font-mono text-white/60 tracking-widest">
                WHERE INNOVATION NEVER SLEEPS
              </span>
            </motion.div>

            <Headline />

            <motion.p
              className="text-lg text-white/50 leading-relaxed max-w-xl font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              We create high-performance websites, AI systems, scalable software,
              and next-generation digital products for ambitious businesses worldwide.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="btn-primary group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Start Your Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("services")}
                className="btn-secondary group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Play size={14} className="fill-neon-purple text-neon-purple" />
                Explore Services
              </motion.button>
            </motion.div>

            {/* Stats mini */}
            <motion.div
              className="flex gap-8 pt-4 border-t border-white/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { num: "200+", label: "Projects" },
                { num: "50+", label: "Clients" },
                { num: "5+", label: "Years" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="font-heading font-bold text-2xl gradient-text">{num}</div>
                  <div className="text-xs text-white/40 mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — AI Orb */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <AIOrb />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-neon-purple/50" />
        <div className="text-xs text-white/30 tracking-widest font-mono">SCROLL</div>
      </motion.div>
    </section>
  );
}
