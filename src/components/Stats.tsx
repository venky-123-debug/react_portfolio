import React, { useEffect, useState, useRef } from "react";
import { Award, Code, CheckCircle, ExternalLink, Activity } from "lucide-react";
import { motion, useInView } from "framer-motion";
import resumeData from "../data/resumeData.json";
import { calculateExperience } from "../utils/date";

const AnimatedCounter: React.FC<{
  value: number;
  suffix?: string;
  duration?: number;
}> = ({ value, suffix = "", duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    if (start === end) return;
    const totalMs = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMs / end), 15);
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMs / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else setCount(start);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span
      ref={ref}
      className="font-extrabold text-5xl sm:text-6xl tracking-tight"
      style={{ color: "var(--text-primary)" }}
    >
      {count}
      {suffix}
    </span>
  );
};

interface StatsProps {
  setActiveTab: (tab: string) => void;
}

export const Stats: React.FC<StatsProps> = ({ setActiveTab }) => {
  const expVal = parseFloat(calculateExperience(resumeData.stats.fullTimeStartDate));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 },
    },
  };

  const statItems = [
    {
      title: "LeetCode",
      count: resumeData.stats.leetcodeSolved,
      suffix: "+",
      description: "Problems Solved",
      detail:
        "Strengthening Core Data Structures & Algorithms expertise. Solving problems in Arrays, Trees, Dynamic Programming, and Graphs.",
      icon: Code,
      colorClass: "from-amber-500 to-orange-600",
      shadowColor: "",
      badgeColor: "bg-orange-500/10 text-orange-400",
      link: resumeData.personal.socials.leetcode,
    },
    {
      title: "HackerRank",
      count: resumeData.stats.hackerrankSolved,
      suffix: "+",
      description: "Problems Solved",
      detail:
        "Focusing on algorithmic problem solving, SQL databases, and general programming efficiency metrics.",
      icon: Award,
      colorClass: "from-emerald-400 to-teal-600",
      shadowColor: "",
      badgeColor: "bg-emerald-500/10 text-emerald-400",
      link: resumeData.personal.socials.hackerrank,
    },
    {
      title: "Experience",
      count: expVal,
      suffix: "+ Years",
      description: "Full Stack Journey",
      detail:
        "Building scalable, secure, and production-ready applications with React, Svelte, Node.js, and AWS cloud configurations.",
      icon: Activity,
      colorClass: "from-violet-500 to-indigo-600",
      shadowColor: "",
      badgeColor: "bg-violet-500/10 text-violet-400",
      link: "#experience",
    },
  ];

  return (
    <section
      id="stats"
      className="py-20 relative overflow-hidden"
      style={{
        background: "var(--bg-subtle)",
        borderTop: "1px solid var(--border-base)",
        borderBottom: "1px solid var(--border-base)",
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-orange/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Activity className="w-3.5 h-3.5" /> Problem Solving & Competence
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Proven <span className="gradient-text">Problem-Solving</span> Record
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4"
            style={{ color: "var(--text-secondary)" }}
          >
            Developing critical thinking and structural efficiency through
            continuous algorithms practice and architectural deployments.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {statItems.map((stat, idx) => {
            const Icon = stat.icon;
            const isFloat = stat.count % 1 !== 0;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-brand-orange/5 to-transparent rounded-bl-full pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-3 rounded-xl bg-linear-to-br ${stat.colorClass} text-white shadow-lg`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-md text-xs font-bold ${stat.badgeColor}`}
                    >
                      {stat.title}
                    </span>
                  </div>

                  <div className="flex items-baseline space-x-1 mb-2">
                    {isFloat ? (
                      <span
                        className="font-extrabold text-5xl sm:text-6xl tracking-tight"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {stat.count}
                        {stat.suffix}
                      </span>
                    ) : (
                      <AnimatedCounter
                        value={stat.count}
                        suffix={stat.suffix}
                      />
                    )}
                  </div>

                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {stat.description}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {stat.detail}
                  </p>
                </div>

                {stat.link.startsWith("http") ? (
                  <a
                    href={stat.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-semibold text-brand-cyan hover:text-brand-orange transition-colors gap-1.5 mt-auto group-hover:underline"
                  >
                    {`Verify on ${stat.title}`}
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <button
                    onClick={() => setActiveTab("experience")}
                    className="flex items-center text-sm font-semibold text-brand-cyan hover:text-brand-orange transition-colors gap-1.5 mt-auto group-hover:underline cursor-pointer"
                  >
                    View Work Timeline
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Callout Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 rounded-2xl glass-card flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-brand-orange/40 transition-all"
          style={{ border: "1px solid var(--border-base)" }}
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h4
                className="font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Rigorous Algorithm & Logic Foundations
              </h4>
              <p
                className="text-sm mt-0.5"
                style={{ color: "var(--text-secondary)" }}
              >
                Active practice ensures optimized code, memory efficiency, and
                robust backend logic systems.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Data Structures",
              "Time Complexity O(log n)",
              "System Optimization",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs"
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-base)",
                  color: "var(--text-secondary)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
