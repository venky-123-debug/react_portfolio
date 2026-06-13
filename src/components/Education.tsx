import React from "react";
import { GraduationCap, Award, Calendar, BookOpen, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import resumeData from "../data/resumeData.json";

interface EducationItem {
  degree: string;
  major: string;
  institution: string;
  location: string;
  year: string;
  cgpa: string;
  details: string;
}

export const Education: React.FC = () => {
  const educationList = resumeData.education as EducationItem[];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
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
    <section id="education" className="py-20 relative dot-grid">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-semibold uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5" /> Qualifications
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Educational <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="mt-4" style={{ color: "var(--text-secondary)" }}>
            A solid academic foundation that trained me in computational logic,
            systematic problem solving, and analytical research.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card p-8 rounded-3xl hover:-translate-y-1 transition-all text-left flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top hover accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-brand-purple/50 to-brand-cyan/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

              <div>
                {/* Icon & Date */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-brand-purple/10 text-brand-purple group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span
                    className="flex items-center gap-1.5 text-xs font-semibold"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                    {edu.year}
                  </span>
                </div>

                {/* Degree */}
                <h3
                  className="text-xl sm:text-2xl font-extrabold mb-1 group-hover:text-brand-purple transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  {edu.degree}
                </h3>

                {/* Major */}
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan mb-4">
                  <BookOpen className="w-3.5 h-3.5" /> Major: {edu.major}
                </span>

                {/* Institution */}
                <div className="space-y-1 mb-6">
                  <p
                    className="text-md font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {edu.institution}
                  </p>
                  <p
                    className="text-xs flex items-center gap-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <MapPin className="w-3.5 h-3.5" /> {edu.location}
                  </p>
                </div>

                {/* Details */}
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {edu.details}
                </p>
              </div>

              {/* CGPA Badge */}
              <div
                className="flex items-center space-x-2.5 p-3 rounded-2xl mt-auto"
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-base)",
                }}
              >
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Award className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-[10px] uppercase tracking-wider font-semibold"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Academic Grade
                  </span>
                  <span
                    className="text-sm font-extrabold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {edu.cgpa}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
