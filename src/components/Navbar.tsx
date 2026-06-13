import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import {
  Sun,
  Moon,
  Wifi,
  Battery,
  Volume2,
  Terminal,
  Activity,
  Code,
  Briefcase,
  GraduationCap,
  Mail,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import resumeData from "../data/resumeData.json";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const { theme, toggleTheme } = useTheme();
  const [time, setTime] = useState(new Date());
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isLight = theme === "light";

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    return date.toLocaleString("en-US", options);
  };

  const getAppName = (id: string) => {
    switch (id) {
      case "about":
        return "Terminal";
      case "stats":
        return "System Monitor";
      case "skills":
        return "Software Center";
      case "experience":
        return "Files";
      case "education":
        return "Library";
      case "contact":
        return "Mail";
      default:
        return "Desktop";
    }
  };

  const getAppIcon = (id: string) => {
    const iconClass = "w-4 h-4 mr-1.5 text-brand-orange";
    switch (id) {
      case "about":
        return <Terminal className={iconClass} />;
      case "stats":
        return <Activity className={iconClass} />;
      case "skills":
        return <Code className={iconClass} />;
      case "experience":
        return <Briefcase className={iconClass} />;
      case "education":
        return <GraduationCap className={iconClass} />;
      case "contact":
        return <Mail className={iconClass} />;
      default:
        return null;
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 h-8 text-xs font-semibold select-none flex items-center justify-between px-4"
        style={{
          background: isLight ? "rgba(247, 247, 247, 0.95)" : "rgba(17, 17, 17, 0.95)",
          borderBottom: "1px solid var(--border-base)",
          color: "var(--text-primary)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        {/* Left Section: Activities & App Status */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setActiveTab("about")}
            className="hover:text-brand-orange transition-colors flex items-center space-x-1 cursor-pointer font-bold"
          >
            <span>Activities</span>
          </button>
          
          <span style={{ color: "var(--text-muted)" }}>|</span>

          <div className="flex items-center text-brand-orange">
            {getAppIcon(activeTab)}
            <span className="font-bold">{getAppName(activeTab)}</span>
          </div>
        </div>

        {/* Center Section: Live Date & Time */}
        <div className="absolute left-1/2 -translate-x-1/2 cursor-default hover:text-brand-orange transition-colors">
          {formatTime(time)}
        </div>

        {/* Right Section: System Settings & Utilities */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2.5 text-zinc-400">
            <span title="Connected" className="flex items-center"><Wifi className="w-4 h-4 hover:text-brand-orange cursor-pointer transition-colors" /></span>
            <span title="Volume: 80%" className="flex items-center"><Volume2 className="w-4 h-4 hover:text-brand-orange cursor-pointer transition-colors" /></span>
            <span title="Battery: Charging (100%)" className="flex items-center"><Battery className="w-4 h-4 hover:text-brand-orange cursor-pointer transition-colors" /></span>
          </div>

          <span style={{ color: "var(--text-muted)" }}>|</span>

          <button
            onClick={toggleTheme}
            className="p-1 rounded-md hover:bg-zinc-500/10 transition-all flex items-center justify-center cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-brand-blue" />
            )}
          </button>

          <span style={{ color: "var(--text-muted)" }}>|</span>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-1 px-2 py-0.5 rounded-md hover:bg-zinc-500/10 cursor-pointer transition-all"
            >
              <span>Venkatesh</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <>
                  {/* Backdrop Close Handler */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setDropdownOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute right-0 mt-2 w-48 rounded-xl border z-50 p-2 text-left"
                    style={{
                      background: "var(--bg-elevated)",
                      borderColor: "var(--border-base)",
                      boxShadow: "var(--card-shadow)",
                    }}
                  >
                    <button
                      onClick={() => {
                        setActiveTab("contact");
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs rounded-lg hover:bg-brand-orange/10 hover:text-brand-orange font-semibold transition-all cursor-pointer flex items-center justify-between"
                    >
                      <span>Hire Venkatesh</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </button>
                    <a
                      href={`mailto:${resumeData.personal.email}`}
                      className="block px-3 py-2 text-xs rounded-lg hover:bg-brand-orange/10 hover:text-brand-orange font-semibold transition-all cursor-pointer"
                    >
                      Email Me
                    </a>
                    <a
                      href={resumeData.personal.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 text-xs rounded-lg hover:bg-brand-orange/10 hover:text-brand-orange font-semibold transition-all cursor-pointer"
                    >
                      LinkedIn Profile
                    </a>
                    <div
                      className="my-1.5 border-t"
                      style={{ borderColor: "var(--border-subtle)" }}
                    />
                    <a
                      href={resumeData.personal.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 text-xs rounded-lg hover:bg-brand-orange/10 hover:text-brand-orange font-semibold transition-all cursor-pointer"
                    >
                      Github Code
                    </a>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>
    </>
  );
};
