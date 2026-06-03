import React, { useState } from "react";
import {
  Briefcase,
  Calendar,
  ChevronDown,
  ChevronUp,
  MapPin,
  Milestone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: "full-time" | "internship";
  tags: string[];
  responsibilities: string[];
}

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const experiences: ExperienceItem[] = [
    {
      role: "Junior Software Developer",
      company: "DocChain.io by Print2Block",
      location: "Chennai, India ",
      period: "November 2022 – Present",
      type: "full-time",
      tags: [
        "ReactJS",
        "Svelte",
        "SvelteKit",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "Redis",
        "AWS",
        "Nginx",
        "PM2",
        "JWT",
      ],
      responsibilities: [
        "Developing and enhancing scalable web applications as a Full Stack Junior Software Developer with focus on new feature implementation, performance optimization, and system improvements.",
        "Leading feature development and enhancements in scalable web applications with focus on architecture, performance optimization, and code quality.",
        "Developing and enhancing scalable full stack web applications using React.js, Svelte JS, SvelteKit, Node.js, TypeScript, and MongoDB.",
        "Building responsive and reusable frontend components using React.js, Svelte JS, SvelteKit, Hooks, Tailwind CSS, and Bootstrap.",
        "Designing and implementing secure backend services using Node.js, Express.js, RESTful APIs, and JWT authentication.",
        "Integrating frontend applications with backend APIs and optimizing application performance using Redis caching and efficient database queries.",
        "Collaborating with cross-functional teams in Agile/Scrum environments and participating in peer code reviews.",
        "Managing end-to-end deployments on AWS, including Nginx, PM2, SSL certificates, and application monitoring.",
      ],
    },
    {
      role: "Full Stack Software Developer Intern",
      company: "DocChain.io by Print2Block",
      location: "Chennai, India",
      period: "July 2022 – November 2022",
      type: "internship",
      tags: [
        "Full Stack",
        "JavaScript",
        "HTML5",
        "CSS3",
        "REST APIs",
        "ReactJS",
        "NodeJS",
        "Web Tech",
      ],
      responsibilities: [
        "Gained hands-on experience in Full Stack development using modern web technologies.",
        "Contributed to various internal projects and learned industry best practices.",
        "Collaborated with senior engineers to implement UI flows and integrate REST APIs.",
      ],
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
      className="py-20 relative overflow-hidden"
      style={{
        background: "var(--bg-subtle)",
        borderTop: "1px solid var(--border-base)",
        borderBottom: "1px solid var(--border-base)",
      }}
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
            <Milestone className="w-3.5 h-3.5" /> Career Journey
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-4" style={{ color: "var(--text-secondary)" }}>
            My career history and roles building real-world software
            applications and blockchain-oriented solutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          className="relative md:ml-32 pl-6 sm:pl-8 space-y-12"
          style={{ borderLeft: "1px solid var(--border-base)" }}
        >
          {experiences.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div key={idx} className="relative group text-left">
                {/* Timeline Node Marker */}
                <span
                  className="absolute left-[-40px] sm:left-[-48px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full border border-brand-purple text-brand-purple group-hover:scale-110 group-hover:bg-brand-purple group-hover:text-white transition-all shadow-lg shadow-brand-purple/20"
                  style={{ background: "var(--bg-elevated)" }}
                >
                  <Briefcase className="w-4 h-4" />
                </span>

                {/* Date Label (Desktop) */}
                <div className="hidden md:block absolute -left-42 top-2 text-right w-28">
                  <span
                    className="text-xs font-bold uppercase tracking-wider block"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {exp.period.split("–")[0]}
                  </span>
                  <span className="text-xs text-brand-cyan font-semibold block">
                    {exp.period.split("–")[1] || ""}
                  </span>
                </div>

                {/* Card */}
                <div className="glass-card p-6 sm:p-8 rounded-2xl transition-all hover:border-brand-purple/30">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <span className="md:hidden inline-flex items-center gap-1.5 text-xs font-semibold text-brand-cyan mb-1.5">
                        <Calendar className="w-3.5 h-3.5" /> {exp.period}
                      </span>
                      <h3
                        className="text-xl sm:text-2xl font-extrabold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-brand-cyan font-bold text-md">
                          {exp.company}
                        </span>
                        <span style={{ color: "var(--text-muted)" }}>•</span>
                        <span
                          className="text-sm flex items-center gap-1"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <MapPin className="w-3.5 h-3.5" /> {exp.location}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        exp.type === "full-time"
                          ? "bg-brand-purple/10 text-brand-purple border border-brand-purple/20"
                          : "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-1 text-xs rounded hover:text-brand-cyan hover:border-brand-cyan/25 transition-colors"
                        style={{
                          background: "var(--bg-elevated)",
                          border: "1px solid var(--border-subtle)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Toggle Button */}
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="flex items-center text-sm font-semibold text-brand-purple hover:text-brand-cyan transition-colors gap-1 mb-4 focus:outline-none"
                  >
                    {isExpanded ? (
                      <>
                        <span>Hide Responsibilities</span>
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        <span>
                          View Key Responsibilities (
                          {exp.responsibilities.length})
                        </span>
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Responsibilities */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-3 ml-2  mt-2">
                          {exp.responsibilities.map((resp, respIdx) => (
                            <motion.li
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: respIdx * 0.05 }}
                              key={respIdx}
                              className="text-sm flex items-start space-x-3.5 leading-relaxed"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                              <span>{resp}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
