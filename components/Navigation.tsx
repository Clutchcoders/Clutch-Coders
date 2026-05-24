"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Tech", href: "#tech" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-neon-purple/10 py-3"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-neon-purple to-electric-violet flex items-center justify-center glow-purple">
                <span className="font-heading font-black text-sm text-white">CC</span>
              </div>
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-neon-purple/30 to-electric-violet/30 blur-sm -z-10" />
            </div>
            <div>
              <span className="font-heading font-bold text-lg text-white tracking-wide">
                CLUTCH
              </span>
              <span className="font-heading font-bold text-lg gradient-text ml-1 tracking-wide">
                CODERS
              </span>
            </div>
          </motion.div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                  activeSection === link.href.replace("#", "")
                    ? "text-neon-purple"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-neon-purple to-cosmic-blue transition-all duration-300 ${
                  activeSection === link.href.replace("#", "") ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              onClick={() => scrollTo("#contact")}
              className="btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Project
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 glass"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-2xl font-heading font-semibold text-white hover:text-neon-purple transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollTo("#contact")}
                className="btn-primary px-8 py-3 rounded-lg text-base font-semibold text-white mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
              >
                Start Project
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
