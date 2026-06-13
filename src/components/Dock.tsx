import React from "react";
import {
  Terminal,
  Activity,
  Code,
  Briefcase,
  GraduationCap,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

interface DockProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Dock: React.FC<DockProps> = ({ activeTab, setActiveTab }) => {
  const dockItems = [
    { id: "about", label: "Terminal (About)", icon: Terminal },
    { id: "stats", label: "System Monitor (Stats)", icon: Activity },
    { id: "skills", label: "Software Center (Skills)", icon: Code },
    { id: "experience", label: "Files (Experience)", icon: Briefcase },
    { id: "education", label: "Library (Education)", icon: GraduationCap },
    { id: "contact", label: "Mail (Contact)", icon: Mail },
  ];

  return (
    <div className="fixed md:top-1/2 md:-translate-y-1/2 md:left-4 bottom-4 left-4 right-4 md:right-auto z-40 flex md:flex-col justify-center items-center">
      <div
        className="flex md:flex-col items-center justify-around md:justify-start gap-3 px-3 py-3 md:py-5 rounded-2xl md:rounded-3xl glass-card w-full md:w-auto"
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--border-base)",
        }}
      >
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <div key={item.id} className="relative group">
              <button
                onClick={() => setActiveTab(item.id)}
                className="relative p-3 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer overflow-visible"
                style={{
                  background: isActive ? "rgba(233, 84, 32, 0.15)" : "transparent",
                  color: isActive ? "var(--text-accent)" : "var(--text-secondary)",
                }}
                aria-label={item.label}
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-115 transition-transform" />

                {/* Ubuntu Launcher Active Dot */}
                {isActive && (
                  <motion.span
                    layoutId="activeDot"
                    className="absolute -left-1 md:left-auto md:-left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-linear-to-r from-brand-purple to-brand-cyan"
                    style={{ background: "var(--text-accent)" }}
                  />
                )}
              </button>

              {/* Tooltip (Desktop Only) */}
              <span
                className="hidden md:block absolute left-16 top-1/2 -translate-y-1/2 px-2.5 py-1 text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md"
                style={{
                  background: "var(--bg-elevated)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-base)",
                }}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
