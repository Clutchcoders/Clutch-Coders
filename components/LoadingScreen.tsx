"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[99999] bg-space-black flex flex-col items-center justify-center"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Animated rings */}
          <div className="relative mb-12">
            <div className="w-32 h-32 rounded-full border border-neon-purple/20 absolute inset-0 animate-ping" />
            <div className="w-32 h-32 rounded-full border border-neon-purple/10 absolute inset-0 animate-pulse" />
            <motion.div
              className="w-32 h-32 rounded-full border-2 border-transparent"
              style={{
                background: "conic-gradient(from 0deg, #7B2FF7, #4CC9F0, #9D4EDD, transparent)",
                borderRadius: "50%",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-4 rounded-full bg-space-black flex items-center justify-center">
              <motion.span
                className="font-heading font-bold text-xl gradient-text"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                CC
              </motion.span>
            </div>
          </div>

          {/* Brand name */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-heading text-2xl font-bold tracking-[0.3em] text-white mb-2">
              CLUTCH CODERS
            </h1>
            <p className="text-xs tracking-widest text-white/30 font-mono">
              WHERE INNOVATION NEVER SLEEPS
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-64 h-px bg-white/10 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #7B2FF7, #4CC9F0)",
                width: `${Math.min(progress, 100)}%`,
                boxShadow: "0 0 10px rgba(123,47,247,0.8)",
              }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <motion.p
            className="mt-3 text-xs text-white/30 font-mono"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
