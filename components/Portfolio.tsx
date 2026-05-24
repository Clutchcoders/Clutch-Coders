"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const categories = ["All", "AI Platform", "SaaS", "E-commerce", "Enterprise", "Mobile"];

const projects = [
  {
    title: "NeuralDash AI",
    category: "AI Platform",
    desc: "Real-time AI analytics platform processing 10M+ events daily with GPT-4 powered insights.",
    tech: ["Python", "TensorFlow", "Next.js", "AWS"],
    color: "#7B2FF7",
    gradient: "from-purple-900 to-indigo-900",
    metrics: { value: "10M+", label: "Events/day" },
  },
  {
    title: "CloudForge SaaS",
    category: "SaaS",
    desc: "Multi-tenant DevOps platform used by 500+ engineering teams worldwide.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "K8s"],
    color: "#4CC9F0",
    gradient: "from-blue-900 to-cyan-900",
    metrics: { value: "500+", label: "Teams" },
  },
  {
    title: "LuxeMarket",
    category: "E-commerce",
    desc: "Premium luxury e-commerce platform generating $50M+ in annual GMV.",
    tech: ["Shopify", "React", "Node.js", "Redis"],
    color: "#F72585",
    gradient: "from-pink-900 to-rose-900",
    metrics: { value: "$50M+", label: "GMV" },
  },
  {
    title: "EnterpriseOS",
    category: "Enterprise",
    desc: "Custom ERP system serving a 10,000-employee global manufacturing corporation.",
    tech: ["React", "Python", "PostgreSQL", "Docker"],
    color: "#9D4EDD",
    gradient: "from-violet-900 to-purple-900",
    metrics: { value: "10K+", label: "Users" },
  },
  {
    title: "FinanceAI Mobile",
    category: "Mobile",
    desc: "AI-powered personal finance app with predictive budgeting and investment insights.",
    tech: ["React Native", "Python", "OpenAI", "AWS"],
    color: "#7B2FF7",
    gradient: "from-purple-900 to-blue-900",
    metrics: { value: "100K+", label: "Downloads" },
  },
  {
    title: "HealthHub Platform",
    category: "AI Platform",
    desc: "HIPAA-compliant telemedicine platform with AI diagnostics used in 50+ hospitals.",
    tech: ["Next.js", "Python", "TensorFlow", "AWS"],
    color: "#4CC9F0",
    gradient: "from-teal-900 to-blue-900",
    metrics: { value: "50+", label: "Hospitals" },
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  inView: boolean;
}

function ProjectCard({ project, index, inView }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="group relative glass-card rounded-2xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.02, y: -4 }}
    >
      {/* Project visual */}
      <div
        className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-30" />

        {/* Animated dots */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 4 + Math.random() * 4,
              height: 4 + Math.random() * 4,
              background: project.color,
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
              boxShadow: `0 0 10px ${project.color}`,
            }}
            animate={{
              y: hovered ? [0, -10, 0] : 0,
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}

        {/* Metric badge */}
        <div
          className="absolute top-4 right-4 glass rounded-xl px-3 py-2 text-center"
          style={{ border: `1px solid ${project.color}30` }}
        >
          <div className="font-heading font-black text-lg" style={{ color: project.color }}>
            {project.metrics.value}
          </div>
          <div className="text-xs text-white/40">{project.metrics.label}</div>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="text-xs px-3 py-1 rounded-full font-mono"
            style={{ background: project.color + "30", color: project.color }}
          >
            {project.category}
          </span>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ background: "rgba(5,5,16,0.7)" }}
        >
          <ExternalLink size={32} className="text-white" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading font-bold text-xl text-white mb-2">{project.title}</h3>
        <p className="text-white/40 text-sm leading-relaxed mb-4">{project.desc}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-md font-mono text-white/40 bg-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom border glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        animate={{
          background: hovered
            ? `linear-gradient(90deg, transparent, ${project.color}, transparent)`
            : "transparent",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-neon-purple/6 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-mono text-xs tracking-[0.3em] text-neon-purple/70 mb-4 uppercase">
            Our Work
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-white">Projects That </span>
            <span className="gradient-text">Changed</span>
            <br />
            <span className="text-white">Industries</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Every project in our portfolio represents a breakthrough — a problem solved,
            an industry disrupted, a vision realized.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-neon-purple text-white glow-purple"
                  : "glass text-white/50 hover:text-white border border-white/5 hover:border-neon-purple/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} inView={true} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View more */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <button className="btn-secondary px-8 py-3 rounded-xl text-sm font-semibold text-white inline-flex items-center gap-2">
            View All Case Studies
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
