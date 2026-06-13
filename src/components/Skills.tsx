import React from "react";
import {
  Code,
  Monitor,
  Cpu,
  Database,
  Cloud,
  Terminal,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import resumeData from "../data/resumeData.json";

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  skills: string[];
  color: string;
  span?: string;
}

export const Skills: React.FC = () => {
  const visualMeta: Record<string, { icon: React.ComponentType<any>; color: string; span?: string }> = {
    "Frontend Development": {
      icon: Monitor,
      color: "from-cyan-500/20 to-blue-500/20",
      span: "lg:col-span-2",
    },
    "Backend & APIs": {
      icon: Cpu,
      color: "from-purple-500/20 to-pink-500/20",
    },
    "Databases": {
      icon: Database,
      color: "from-emerald-500/20 to-green-500/20",
    },
    "Cloud & DevOps": {
      icon: Cloud,
      color: "from-pink-500/20 to-rose-500/20",
      span: "lg:col-span-2",
    },
    "Programming": {
      icon: Code,
      color: "from-indigo-500/20 to-violet-500/20",
    },
    "Tools & Testing": {
      icon: Terminal,
      color: "from-amber-500/20 to-orange-500/20",
    },
  };

  const categories: SkillCategory[] = resumeData.skills.map((cat) => ({
    title: cat.title,
    description: cat.description,
    skills: cat.skills,
    icon: visualMeta[cat.title]?.icon || Code,
    color: visualMeta[cat.title]?.color || "from-cyan-500/20 to-blue-500/20",
    span: visualMeta[cat.title]?.span,
  }));

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Technical Expertise
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills &
            <span className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Technologies
            </span>
          </h2>

          <p className="text-zinc-400 text-lg">
            Technologies and tools I use to design, develop and deploy modern
            web applications.
          </p>
        </motion.div>

        {/* Highlight Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { value: "20+", label: "Technologies" },
            { value: "30+", label: "Projects" },
            { value: "5+", label: "Core Domains" },
            { value: "100%", label: "Passion" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center"
            >
              <h3 className="text-3xl font-bold text-white">{item.value}</h3>
              <p className="text-sm text-zinc-400 mt-1">{item.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className={`
                  ${category.span || ""}
                  group
                `}
              >
                <div
                  className="
                    h-full
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/3
                    backdrop-blur-xl
                    p-8
                    hover:border-cyan-500/30
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    relative
                    overflow-hidden
                  "
                >
                  {/* Gradient Glow */}
                  <div
                    className={`
                      absolute inset-0 opacity-0 group-hover:opacity-100
                      transition-opacity duration-500
                      bg-linear-to-br ${category.color}
                    `}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-cyan-400" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {category.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="
                            px-3 py-2
                            rounded-xl
                            text-sm
                            font-medium
                            bg-white/5
                            border border-white/10
                            text-zinc-300
                            hover:border-cyan-500/30
                            hover:text-white
                            transition-all
                          "
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
