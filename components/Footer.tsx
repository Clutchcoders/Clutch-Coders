"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Instagram, Mail, ArrowUpRight, Send } from "lucide-react";
import { useState } from "react";

const footerLinks = {
  Services: [
    "Web Development",
    "AI Solutions",
    "SaaS Development",
    "Mobile Apps",
    "UI/UX Design",
    "Digital Marketing",
  ],
  Company: ["About Us", "Our Process", "Portfolio", "Careers", "Blog", "Press Kit"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "NDA Template"],
};

const socials = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@clutchcoders.com" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8">
        {/* Main footer grid */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              onClick={scrollToTop}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-electric-violet flex items-center justify-center glow-purple">
                  <span className="font-heading font-black text-sm text-white">CC</span>
                </div>
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-neon-purple/30 to-electric-violet/30 blur-sm -z-10" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-white tracking-wide">
                  CLUTCH
                </span>
                <span className="font-heading font-bold text-xl gradient-text ml-1 tracking-wide">
                  CODERS
                </span>
              </div>
            </motion.div>

            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Elite software engineering, AI solutions, and digital marketing for
              ambitious businesses worldwide. We build what others say is impossible.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-white/40 hover:text-neon-purple border border-white/5 hover:border-neon-purple/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">
                Get the Innovation Newsletter
              </h4>
              {subscribed ? (
                <p className="text-neon-purple text-sm font-mono">✓ You're subscribed!</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-neon-purple/40"
                  />
                  <motion.button
                    type="submit"
                    className="btn-primary px-4 py-2.5 rounded-lg text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send size={16} />
                  </motion.button>
                </form>
              )}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white text-sm mb-5">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/40 text-sm hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      <span>{link}</span>
                      <ArrowUpRight
                        size={11}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 text-xs text-white/25 font-mono">
            <span>© {new Date().getFullYear()} Clutch Coders. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <span>Built with ❤️ and AI</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/30 font-mono">
              All systems operational
            </span>
          </div>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            className="w-9 h-9 glass rounded-lg flex items-center justify-center text-white/40 hover:text-neon-purple border border-white/5 hover:border-neon-purple/30 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            aria-label="Back to top"
          >
            <span className="text-xs">↑</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
