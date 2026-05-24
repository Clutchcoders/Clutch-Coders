"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe, Brain, Layers, Smartphone, Palette, ShoppingCart,
  Cloud, Zap, Building2, TrendingUp, ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Website Development",
    desc: "Award-winning websites built with cutting-edge tech for maximum impact and performance.",
    color: "#7B2FF7",
    tags: ["Next.js", "React", "Performance"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "Data-driven strategies that grow your brand, amplify reach, and convert audiences into revenue.",
    color: "#F72585",
    tags: ["SEO", "PPC", "Social Media"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Intelligent systems that learn, adapt, and deliver superhuman results for your business.",
    color: "#4CC9F0",
    tags: ["LLMs", "Computer Vision", "NLP"],
  },
  {
    icon: Layers,
    title: "SaaS Product Development",
    desc: "Scalable subscription platforms built for growth from day one, with enterprise architecture.",
    color: "#9D4EDD",
    tags: ["Multi-tenant", "Billing", "APIs"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform apps that deliver seamless experiences on any device.",
    color: "#7B2FF7",
    tags: ["iOS", "Android", "React Native"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Award-winning interfaces that balance beauty with intuitive, conversion-focused usability.",
    color: "#F72585",
    tags: ["Figma", "Motion", "Design Systems"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    desc: "High-converting storefronts with AI-powered recommendations and seamless checkout flows.",
    color: "#4CC9F0",
    tags: ["Shopify", "Custom", "Headless"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Bulletproof infrastructure that scales infinitely and maintains 99.99% uptime globally.",
    color: "#9D4EDD",
    tags: ["AWS", "Docker", "Kubernetes"],
  },
  {
    icon: Zap,
    title: "Automation Systems",
    desc: "Intelligent workflow automation that eliminates repetition and multiplies your team's output.",
    color: "#7B2FF7",
    tags: ["RPA", "Zapier", "Custom"],
  },
  {
    icon: Building2,
    title: "Enterprise Software",
    desc: "Mission-critical systems engineered for complexity, compliance, and enterprise-scale demands.",
    color: "#4CC9F0",
    tags: ["ERP", "CRM", "Integration"],
  },
];

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
  inView: boolean;
}

function ServiceCard({ service, index, inView }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      className="relative group glass-card rounded-2xl p-6 cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      {/* Glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${service.color}15 0%, transparent 70%)`,
        }}
      />

      {/* Top border glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px transition-all duration-500"
        animate={{
          width: hovered ? "80%" : "0%",
          background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
        }}
      />

      {/* Icon */}
      <div
        className="relative w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
        style={{ background: service.color + "20" }}
      >
        <Icon size={22} style={{ color: service.color }} />
        <motion.div
          className="absolute inset-0 rounded-xl"
          animate={hovered ? { boxShadow: `0 0 20px ${service.color}50` } : { boxShadow: "none" }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-white transition-colors">
        {service.title}
      </h3>
      <p className="text-white/40 text-sm leading-relaxed mb-4">{service.desc}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-full font-mono"
            style={{
              background: service.color + "15",
              color: service.color,
              border: `1px solid ${service.color}30`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <motion.div
        className="flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: service.color }}
      >
        <span>Learn more</span>
        <ArrowRight size={12} />
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-electric-violet/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cosmic-blue/8 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-mono text-xs tracking-[0.3em] text-neon-purple/70 mb-4 uppercase">
            What We Build
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-white">Services That </span>
            <span className="gradient-text">Redefine</span>
            <br />
            <span className="text-white">What's Possible</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Every service we offer is engineered to the highest standard — delivering results
            that don't just meet expectations, they shatter them.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary px-10 py-4 rounded-xl font-semibold text-white inline-flex items-center gap-2"
          >
            Discuss Your Project
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
