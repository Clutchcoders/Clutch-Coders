"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MessageSquare, User, Building2, CheckCircle } from "lucide-react";

const services = [
  "Website Development",
  "AI & Machine Learning",
  "SaaS Development",
  "Mobile App",
  "Digital Marketing",
  "UI/UX Design",
  "Other",
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-72 bg-neon-purple/8 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-mono text-xs tracking-[0.3em] text-neon-purple/70 mb-4 uppercase">
            Get In Touch
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-white">Start Your </span>
            <span className="gradient-text">Project</span>
            <br />
            <span className="text-white">Today</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Tell us about your vision. We'll respond within 24 hours with a tailored strategy.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              {
                icon: Mail,
                title: "Email Us",
                value: "hello@clutchcoders.com",
                color: "#7B2FF7",
              },
              {
                icon: MessageSquare,
                title: "WhatsApp",
                value: "+1 (555) CLUTCH-1",
                color: "#4CC9F0",
              },
              {
                icon: Building2,
                title: "Headquarters",
                value: "Global — Remote First",
                color: "#9D4EDD",
              },
            ].map(({ icon: Icon, title, value, color }) => (
              <div key={title} className="glass-card rounded-xl p-5 flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: color + "20" }}
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <div>
                  <div className="text-white/40 text-xs mb-1">{title}</div>
                  <div className="text-white font-medium">{value}</div>
                </div>
              </div>
            ))}

            {/* What to expect */}
            <div className="glass-card rounded-xl p-5 space-y-3">
              <h4 className="font-semibold text-white text-sm mb-4">What happens next?</h4>
              {[
                "We review your project brief",
                "Schedule a discovery call within 24h",
                "Receive a detailed proposal",
                "Kick off your project",
              ].map((item, i) => (
                <div key={item} className="flex items-center gap-3 text-sm text-white/50">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: "rgba(123,47,247,0.2)", color: "#7B2FF7" }}
                  >
                    {i + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                className="glass-card rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle size={64} className="text-neon-purple mx-auto mb-6" />
                </motion.div>
                <h3 className="font-heading font-bold text-2xl text-white mb-4">
                  Message Received!
                </h3>
                <p className="text-white/50 text-base max-w-sm">
                  We'll review your project and reach out within 24 hours with next steps.
                  Exciting things are coming.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-8 space-y-5"
              >
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/40 mb-2 font-mono">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                      />
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-neon-purple/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-2 font-mono">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                      />
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-neon-purple/50 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-xs text-white/40 mb-2 font-mono">
                    Company / Startup
                  </label>
                  <div className="relative">
                    <Building2
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                    />
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Your company name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-neon-purple/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-xs text-white/40 mb-2 font-mono">
                    Service Interested In
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedService(s)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                          selectedService === s
                            ? "bg-neon-purple text-white"
                            : "bg-white/5 text-white/40 border border-white/10 hover:border-neon-purple/30"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs text-white/40 mb-2 font-mono">
                    Project Brief *
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project, goals, and timeline..."
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-neon-purple/50 transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Project Brief</span>
                  <Send size={18} />
                </motion.button>

                <p className="text-xs text-white/20 text-center">
                  By submitting, you agree to our Privacy Policy. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
