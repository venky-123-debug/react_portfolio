import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code2,
  ShieldCheck,
  Database,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";
import devIllustration from "../assets/developer_illustration.png";

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  const badgeVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: { type: "spring" as const, stiffness: 400, damping: 10 },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden dot-grid"
    >
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-purple/10 blur-[100px] animate-drift-slow z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-brand-cyan/10 blur-[120px] animate-drift-medium z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content (Left) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Role Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2.5 mb-6"
            >
              <motion.span
                variants={badgeVariants}
                whileHover="hover"
                className="px-3.5 py-1.5 text-xs font-semibold rounded-full border border-brand-purple/25 bg-brand-purple/10 text-brand-purple flex items-center gap-1.5 cursor-default"
              >
                <Code2 className="w-3.5 h-3.5" /> Full Stack Developer
              </motion.span>
              <motion.span
                variants={badgeVariants}
                whileHover="hover"
                className="px-3.5 py-1.5 text-xs font-semibold rounded-full border border-brand-cyan/25 bg-brand-cyan/10 text-brand-cyan flex items-center gap-1.5 cursor-default"
              >
                <Database className="w-3.5 h-3.5" /> MERN Stack Specialist
              </motion.span>
              <motion.span
                variants={badgeVariants}
                whileHover="hover"
                className="px-3.5 py-1.5 text-xs font-semibold rounded-full border border-brand-emerald/25 bg-brand-emerald/10 text-brand-emerald flex items-center gap-1.5 cursor-default"
              >
                <ShieldCheck className="w-3.5 h-3.5" /> Cloud & Security
              </motion.span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Hi, I am <span className="gradient-text">Venkatesh C</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              variants={itemVariants}
              className="text-lg sm:text-xl font-semibold mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              Building High-Performance Web Applications & Solutions (3.6+ Years
              Exp)
            </motion.h2>

            {/* Professional Objective */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-2xl"
              style={{ color: "var(--text-secondary)" }}
            >
              Results-driven Full Stack Developer with 3.6+ years of experience
              building scalable, secure, and high-performance web applications
              using{" "}
              <strong style={{ color: "var(--text-primary)" }}>React.js</strong>
              ,{" "}
              <strong style={{ color: "var(--text-primary)" }}>Node.js</strong>,{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                JavaScript
              </strong>
              ,{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                TypeScript
              </strong>
              , and{" "}
              <strong style={{ color: "var(--text-primary)" }}>MongoDB</strong>.
              Experienced in developing RESTful APIs, JWT authentication, Redis
              caching, and deploying production-ready applications on AWS.
              Passionate about building responsive frontend applications,
              writing maintainable code, and delivering reliable cloud-based
              solutions.
            </motion.p>

            {/* Contact Info Mini-Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-lg"
            >
              <a
                href="mailto:venkatbe26494@gmail.com"
                className="flex items-center space-x-3 p-3.5 rounded-xl transition-all group hover:border-brand-purple/50"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-base)",
                }}
              >
                <div className="p-2 rounded-lg bg-brand-purple/10 text-brand-purple group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span
                    className="text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Email Me
                  </span>
                  <span
                    className="text-sm font-semibold break-all"
                    style={{ color: "var(--text-primary)" }}
                  >
                    venkatbe26494@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="tel:7402161837"
                className="flex items-center space-x-3 p-3.5 rounded-xl transition-all group hover:border-brand-cyan/50"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-base)",
                }}
              >
                <div className="p-2 rounded-lg bg-brand-cyan/10 text-brand-cyan group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span
                    className="text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Call Me
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    +91 7402161837
                  </span>
                </div>
              </a>
            </motion.div>

            {/* CTAs + Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="flex-1 sm:flex-none px-6 py-3.5 rounded-xl bg-linear-to-r from-brand-purple to-brand-cyan hover:opacity-95 text-white font-bold text-sm text-center shadow-lg shadow-brand-purple/20 transition-all flex items-center justify-center gap-2 group"
                >
                  Get In Touch
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="#experience"
                  className="flex-1 sm:flex-none px-6 py-3.5 rounded-xl font-semibold text-sm text-center transition-all flex items-center justify-center gap-2 hover:bg-brand-purple/10"
                  style={{
                    border: "1px solid var(--border-base)",
                    color: "var(--text-secondary)",
                    background: "var(--bg-subtle)",
                  }}
                >
                  View Experience
                </a>
              </div>

              {/* Social Icons */}
              <div
                className="flex items-center justify-center sm:justify-start gap-3 mt-4 sm:mt-0 sm:ml-4 pl-0 sm:pl-4"
                style={{ borderLeft: "1px solid var(--border-base)" }}
              >
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com",
                    label: "LinkedIn",
                  },
                  {
                    icon: Code2,
                    href: "https://leetcode.com",
                    label: "LeetCode",
                  },
                  {
                    icon: Terminal,
                    href: "https://hackerrank.com",
                    label: "HackerRank",
                  },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl hover:bg-brand-purple/10 hover:text-brand-purple transition-all"
                      style={{
                        border: "1px solid var(--border-base)",
                        color: "var(--text-muted)",
                        background: "var(--bg-subtle)",
                      }}
                      title={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Illustration (Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-brand-purple to-brand-cyan rounded-3xl blur-3xl opacity-20 animate-drift-slow" />

            <div
              className="relative p-3 rounded-3xl shadow-2xl backdrop-blur-sm max-w-sm sm:max-w-md w-full animate-float"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-base)",
              }}
            >
              <img
                src={devIllustration}
                alt="Developer Illustration"
                className="w-full h-auto object-cover rounded-2xl shadow-inner"
                style={{ background: "var(--bg-elevated)" }}
              />

              <div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl text-brand-cyan text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-md"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border-base)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Projects
              </div>

              <div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-md"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border-base)",
                  color: "var(--text-primary)",
                }}
              >
                <span>🚀 React + Svelte + Node</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
