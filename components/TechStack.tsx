"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const techStack = [
  { name: "React", color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", color: "#FFFFFF", category: "Frontend" },
  { name: "Node.js", color: "#68A063", category: "Backend" },
  { name: "Python", color: "#FFD43B", category: "Backend" },
  { name: "TensorFlow", color: "#FF6F00", category: "AI/ML" },
  { name: "OpenAI", color: "#74AA9C", category: "AI/ML" },
  { name: "AWS", color: "#FF9900", category: "Cloud" },
  { name: "Docker", color: "#2496ED", category: "DevOps" },
  { name: "Kubernetes", color: "#326CE5", category: "DevOps" },
  { name: "MongoDB", color: "#47A248", category: "Database" },
  { name: "PostgreSQL", color: "#336791", category: "Database" },
  { name: "TypeScript", color: "#3178C6", category: "Language" },
  { name: "GraphQL", color: "#E10098", category: "API" },
  { name: "Redis", color: "#DC382D", category: "Database" },
  { name: "Figma", color: "#F24E1E", category: "Design" },
  { name: "Vercel", color: "#FFFFFF", category: "Deploy" },
];

const techIcons: Record<string, string> = {
  React: "⚛",
  "Next.js": "▲",
  "Node.js": "🟢",
  Python: "🐍",
  TensorFlow: "🧠",
  OpenAI: "◉",
  AWS: "☁",
  Docker: "🐳",
  Kubernetes: "⎈",
  MongoDB: "🍃",
  PostgreSQL: "🐘",
  TypeScript: "TS",
  GraphQL: "◈",
  Redis: "⬡",
  Figma: "✦",
  Vercel: "△",
};

function TechOrbit({ inView }: { inView: boolean }) {
  const orbitTechs = techStack.slice(0, 8);

  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {/* Center */}
      <motion.div
        className="relative z-10 w-24 h-24 rounded-2xl glass flex flex-col items-center justify-center gap-1"
        style={{ border: "1px solid rgba(123,47,247,0.4)", boxShadow: "0 0 40px rgba(123,47,247,0.3)" }}
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <span className="text-2xl">⚡</span>
        <span className="text-xs font-mono text-neon-purple/70">CLUTCH</span>
      </motion.div>

      {/* Orbit rings */}
      {[100, 140].map((r, ri) => (
        <motion.div
          key={r}
          className="absolute rounded-full border border-neon-purple/10"
          style={{ width: r * 2, height: r * 2 }}
          animate={{ rotate: ri % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 20 + ri * 8, repeat: Infinity, ease: "linear" }}
        >
          {orbitTechs.slice(ri * 4, ri * 4 + 4).map((tech, i) => {
            const angle = (i * 90 * Math.PI) / 180;
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;
            return (
              <motion.div
                key={tech.name}
                className="absolute w-10 h-10 rounded-full glass flex items-center justify-center text-xs font-bold"
                style={{
                  left: r + x - 20,
                  top: r + y - 20,
                  color: tech.color,
                  border: `1px solid ${tech.color}30`,
                }}
                animate={{ rotate: ri % 2 === 0 ? -360 : 360 }}
                transition={{ duration: 20 + ri * 8, repeat: Infinity, ease: "linear" }}
                title={tech.name}
              >
                <span>{techIcons[tech.name]}</span>
              </motion.div>
            );
          })}
        </motion.div>
      ))}
    </div>
  );
}

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tech" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-neon-purple/10 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-mono text-xs tracking-[0.3em] text-neon-purple/70 mb-4 uppercase">
            Our Arsenal
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-white">Powered by the </span>
            <span className="gradient-text">Best Technology</span>
            <br />
            <span className="text-white">on Earth</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            We wield a world-class technology arsenal — chosen for speed, reliability,
            and the ability to build anything imaginable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Orbit visualization */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <TechOrbit inView={inView} />
          </motion.div>

          {/* Tech grid */}
          <div>
            {/* Category breakdown */}
            {["Frontend", "Backend", "AI/ML", "Cloud", "Database", "DevOps"].map((cat, ci) => {
              const techs = techStack.filter((t) => t.category === cat);
              return (
                <motion.div
                  key={cat}
                  className="mb-5"
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + ci * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-white/30 w-16">{cat}</span>
                    <div className="flex-1 h-px bg-white/5" />
                  </div>
                  <div className="flex flex-wrap gap-2 ml-20">
                    {techs.map((tech) => (
                      <motion.span
                        key={tech.name}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium glass"
                        style={{
                          color: tech.color,
                          border: `1px solid ${tech.color}25`,
                          background: tech.color + "10",
                        }}
                        whileHover={{
                          scale: 1.08,
                          boxShadow: `0 0 20px ${tech.color}40`,
                        }}
                      >
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Scrolling marquee */}
        <motion.div
          className="mt-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-space-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-space-black to-transparent z-10" />
            <div className="marquee-wrapper">
              <div className="marquee-content">
                {[...techStack, ...techStack].map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 mx-8 text-white/20 font-mono text-sm whitespace-nowrap"
                    style={{ color: tech.color + "60" }}
                  >
                    <span>{techIcons[tech.name]}</span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
