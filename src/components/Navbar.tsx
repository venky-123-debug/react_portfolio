import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import {
  Sun,
  Moon,
  Menu,
  X,
  Terminal,
  Code,
  Briefcase,
  GraduationCap,
  Mail,
  Award,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isLight = theme === "light";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about", icon: Terminal },
    { label: "Stats", href: "#stats", icon: Award },
    { label: "Skills", href: "#skills", icon: Code },
    { label: "Experience", href: "#experience", icon: Briefcase },
    { label: "Education", href: "#education", icon: GraduationCap },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          padding: scrolled ? "12px 0" : "20px 0",
          background: scrolled
            ? isLight
              ? "rgba(240,244,255,0.88)"
              : "rgba(11,15,25,0.82)"
            : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: scrolled
            ? `1px solid var(--border-base)`
            : "1px solid transparent",
          boxShadow: scrolled
            ? isLight
              ? "0 2px 20px rgba(99,102,241,0.08)"
              : "0 2px 20px rgba(0,0,0,0.35)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#about" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-brand-purple to-brand-cyan flex items-center justify-center shadow-lg shadow-brand-purple/20 group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-extrabold text-lg tracking-wider">
                  V
                </span>
              </div>
              <div className="flex flex-col">
                <span
                  className="font-bold leading-tight tracking-tight text-md"
                  style={{ color: "var(--text-primary)" }}
                >
                  Venkatesh C
                </span>
                <span className="text-brand-cyan text-xs font-semibold tracking-wider uppercase leading-none">
                  Full Stack Dev
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-1 lg:space-x-2 rounded-full px-4 py-1.5 backdrop-blur-sm"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-base)",
              }}
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-brand-purple/10 relative group"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <Icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl transition-all relative overflow-hidden"
                style={{
                  border: "1px solid var(--border-base)",
                  background: "var(--bg-subtle)",
                }}
                aria-label="Toggle Theme"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: theme === "dark" ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-amber-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-indigo-600" />
                  )}
                </motion.div>
              </button>

              <a
                href="#contact"
                className="px-5 py-2 rounded-xl bg-linear-to-r from-brand-purple to-brand-cyan text-white font-bold text-sm shadow-lg shadow-brand-purple/20 hover:opacity-90 transition-opacity"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center space-x-3">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl transition-colors"
                style={{
                  border: "1px solid var(--border-base)",
                  background: "var(--bg-subtle)",
                }}
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                  <Moon className="w-5 h-5 text-indigo-600" />
                )}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl transition-colors"
                style={{
                  border: "1px solid var(--border-base)",
                  background: "var(--bg-subtle)",
                  color: "var(--text-secondary)",
                }}
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-[64px] left-0 right-0 z-40 backdrop-blur-xl py-6 px-4"
            style={{
              background: "var(--bg-surface)",
              borderBottom: "1px solid var(--border-base)",
              boxShadow: "var(--card-shadow)",
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 hover:bg-brand-purple/10"
                    style={{
                      border: "1px solid var(--border-base)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <Icon className="w-5 h-5 text-brand-cyan" />
                    <span className="text-sm font-semibold">{item.label}</span>
                  </a>
                );
              })}
            </div>

            <div
              className="mt-6 pt-6"
              style={{ borderTop: "1px solid var(--border-base)" }}
            >
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 rounded-xl bg-linear-to-r from-brand-purple to-brand-cyan text-white font-bold flex items-center justify-center shadow-lg shadow-brand-purple/20 hover:opacity-90 transition-opacity"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
