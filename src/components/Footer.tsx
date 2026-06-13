import React from "react";
import { ArrowUp, Github, Linkedin, Code2, Terminal } from "lucide-react";
import resumeData from "../data/resumeData.json";

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="py-12 relative overflow-hidden"
      style={{
        background: "var(--bg-elevated)",
        borderTop: "1px solid var(--border-base)",
      }}
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-32 rounded-full blur-[80px]"
        style={{ background: "rgba(233, 84, 32, 0.04)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1.5">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-brand-purple to-brand-cyan flex items-center justify-center">
              <span className="text-white font-extrabold text-sm">V</span>
            </div>
            <span
              className="font-bold tracking-wide text-md"
              style={{ color: "var(--text-primary)" }}
            >
              {resumeData.personal.name}
            </span>
          </div>
          <p
            className="text-xs max-w-xs mt-1"
            style={{ color: "var(--text-muted)" }}
          >
            Results-driven Full Stack Developer passionate about crafting
            responsive, secure, and performant web apps.
          </p>
        </div>

        {/* Social Links + Copyright */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            {[
              {
                icon: Linkedin,
                href: resumeData.personal.socials.linkedin,
                label: "LinkedIn",
              },
              {
                icon: Github,
                href: resumeData.personal.socials.github,
                label: "GitHub",
              },
              {
                icon: Code2,
                href: resumeData.personal.socials.leetcode,
                label: "LeetCode",
              },
              {
                icon: Terminal,
                href: resumeData.personal.socials.hackerrank,
                label: "HackerRank",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg hover:bg-brand-purple/10 hover:text-brand-purple transition-all"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-base)",
                  color: "var(--text-muted)",
                }}
                title={label}
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Venkatesh C. All rights reserved.
          </span>
        </div>

        {/* Scroll Top Button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-xl hover:bg-brand-cyan/10 hover:text-brand-cyan transition-all flex items-center justify-center cursor-pointer group"
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border-base)",
            color: "var(--text-muted)",
          }}
          title="Back to Top"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
