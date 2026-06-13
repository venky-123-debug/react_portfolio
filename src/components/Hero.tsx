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
import resumeData from "../data/resumeData.json";
import { calculateExperience } from "../utils/date";

interface HeroProps {
  setActiveTab: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveTab }) => {
  const expYears = calculateExperience(resumeData.stats.fullTimeStartDate);

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
      className="relative min-h-[85vh] pt-8 pb-16 flex items-center justify-center overflow-hidden dot-grid"
    >
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-orange/10 blur-[100px] animate-drift-slow z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-brand-cyan/10 blur-[120px] animate-drift-medium z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center"
        >
          {/* Role Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2.5 mb-6"
          >
            <motion.span
              variants={badgeVariants}
              whileHover="hover"
              className="px-3.5 py-1.5 text-xs font-semibold rounded-full border border-brand-orange/25 bg-brand-orange/10 text-brand-orange flex items-center gap-1.5 cursor-default"
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
            Hi, I am <span className="gradient-text">{resumeData.personal.name}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-xl font-semibold mb-6"
            style={{ color: "var(--text-muted)" }}
          >
            Building High-Performance Web Applications & Solutions ({expYears}+ Years Exp)
          </motion.h2>

          {/* Professional Objective */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg leading-relaxed mb-8 max-w-2xl text-center"
            style={{ color: "var(--text-secondary)" }}
          >
            {resumeData.personal.objective}
          </motion.p>

          {/* Contact Info Mini-Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full max-w-lg"
          >
            <a
              href={`mailto:${resumeData.personal.email}`}
              className="flex items-center space-x-3 p-3.5 rounded-xl transition-all group hover:border-brand-orange/50 text-left"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-base)",
              }}
            >
              <div className="p-2 rounded-lg bg-brand-orange/10 text-brand-orange group-hover:scale-110 transition-transform">
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
                  className="text-sm font-semibold break-all text-ellipsis overflow-hidden"
                  style={{ color: "var(--text-primary)" }}
                >
                  {resumeData.personal.email}
                </span>
              </div>
            </a>

            <a
              href={`tel:${resumeData.personal.phone}`}
              className="flex items-center space-x-3 p-3.5 rounded-xl transition-all group hover:border-brand-cyan/50 text-left"
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
                  {resumeData.personal.phone}
                </span>
              </div>
            </a>
          </motion.div>

          {/* CTAs + Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
          >
            <div className="flex gap-4 justify-center w-full sm:w-auto">
              <button
                onClick={() => setActiveTab("contact")}
                className="flex-1 sm:flex-none px-6 py-3.5 rounded-xl bg-linear-to-r from-brand-orange to-brand-cyan hover:opacity-95 text-white font-bold text-sm text-center shadow-lg shadow-brand-orange/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                Hire Me
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => setActiveTab("experience")}
                className="flex-1 sm:flex-none px-6 py-3.5 rounded-xl font-semibold text-sm text-center transition-all flex items-center justify-center gap-2 hover:bg-brand-orange/10 cursor-pointer"
                style={{
                  border: "1px solid var(--border-base)",
                  color: "var(--text-secondary)",
                  background: "var(--bg-subtle)",
                }}
              >
                View Experience
              </button>
            </div>

            {/* Social Icons */}
            <div
              className="flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              {[
                { icon: Github, href: resumeData.personal.socials.github, label: "GitHub" },
                { icon: Linkedin, href: resumeData.personal.socials.linkedin, label: "LinkedIn" },
                { icon: Code2, href: resumeData.personal.socials.leetcode, label: "LeetCode" },
                { icon: Terminal, href: resumeData.personal.socials.hackerrank, label: "HackerRank" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl hover:bg-brand-orange/10 hover:text-brand-orange transition-all animate-none"
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
      </div>
    </section>
  );
};
