import React from "react";
import {
  Code,
  Monitor,
  Cpu,
  Database,
  Cloud,
  Terminal,
  CheckCircle2,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<any>;
  color: string;
  skills: Skill[];
}

export const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-brand-purple border-brand-purple/25 bg-brand-purple/8",
      skills: [
        { name: "JavaScript (ES6+)", level: "Expert", percentage: 92 },
        { name: "TypeScript", level: "Expert", percentage: 88 },
        { name: "Node.js", level: "Expert", percentage: 85 },
        { name: "HTML5 & CSS3", level: "Expert", percentage: 95 },
        { name: "Python", level: "Beginner", percentage: 45 },
      ],
    },
    {
      title: "Frontend Development",
      icon: Monitor,
      color: "text-brand-cyan border-brand-cyan/25 bg-brand-cyan/8",
      skills: [
        { name: "React.js & Hooks", level: "Expert", percentage: 92 },
        { name: "Svelte & SvelteKit", level: "Advanced", percentage: 80 },
        { name: "Tailwind CSS", level: "Expert", percentage: 90 },
        { name: "Bootstrap", level: "Expert", percentage: 85 },
      ],
    },
    {
      title: "Backend & APIs",
      icon: Cpu,
      color: "text-brand-blue border-brand-blue/25 bg-brand-blue/8",
      skills: [
        { name: "RESTful APIs", level: "Expert", percentage: 90 },
        { name: "JWT Authentication", level: "Advanced", percentage: 85 },
        { name: "SHA-256 Hashing", level: "Advanced", percentage: 80 },
        { name: "Express.js", level: "Expert", percentage: 88 },
      ],
    },
    {
      title: "Databases & Caching",
      icon: Database,
      color: "text-brand-emerald border-brand-emerald/25 bg-brand-emerald/8",
      skills: [
        { name: "MongoDB", level: "Advanced", percentage: 85 },
        { name: "Redis Caching", level: "Advanced", percentage: 75 },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "text-pink-500 border-pink-400/25 bg-pink-400/8",
      skills: [
        {
          name: "AWS (Amazon Web Services)",
          level: "Advanced",
          percentage: 80,
        },
        {
          name: "GCP (Google Cloud Platform)",
          level: "Advanced",
          percentage: 70,
        },
        { name: "Nginx Configuration", level: "Advanced", percentage: 78 },
        { name: "PM2 Process Management", level: "Advanced", percentage: 82 },
        { name: "SSL Certificates Setup", level: "Advanced", percentage: 85 },
      ],
    },
    {
      title: "Tools & Other Skills",
      icon: Terminal,
      color: "text-amber-500 border-amber-400/25 bg-amber-400/8",
      skills: [
        { name: "Git & Bitbucket", level: "Expert", percentage: 90 },
        { name: "Jest Unit Testing", level: "Intermediate", percentage: 60 },
        { name: "API Testing (Postman)", level: "Expert", percentage: 88 },
        { name: "Linux (Ubuntu/Debian)", level: "Advanced", percentage: 82 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 90, damping: 15 },
    },
  };

  return (
    <section id="skills" className="py-20 relative dot-grid">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" /> Core Competencies
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Technical <span className="gradient-text">Skills</span> & Expertise
          </h2>
          <p className="mt-4" style={{ color: "var(--text-secondary)" }}>
            A comprehensive overview of the programming languages, frontend
            libraries, backend databases, and DevOps tools I utilize daily.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="glass-card p-6 sm:p-8 rounded-2xl hover:-translate-y-1.5 transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3.5 mb-6">
                    <div
                      className={`p-2.5 rounded-xl border flex items-center justify-center ${category.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3
                      className="font-extrabold text-lg"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIdx) => (
                      <div key={skillIdx} className="space-y-1.5 text-left">
                        <div className="flex justify-between items-center">
                          <span
                            className="text-sm font-semibold flex items-center gap-1.5"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan/70" />
                            {skill.name}
                          </span>
                          <span
                            className="text-xs font-semibold px-2 py-0.5 rounded"
                            style={{
                              background: "var(--bg-elevated)",
                              color: "var(--text-muted)",
                              border: "1px solid var(--border-subtle)",
                            }}
                          >
                            {skill.level}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div
                          className="h-1.5 w-full rounded-full overflow-hidden"
                          style={{ background: "var(--border-base)" }}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              ease: "easeOut",
                              delay: 0.1,
                            }}
                            className="h-full bg-linear-to-r from-brand-purple to-brand-cyan rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
