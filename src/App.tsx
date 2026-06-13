import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { Navbar } from './components/Navbar';
import { Dock } from './components/Dock';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("about");

  return (
    <ThemeProvider>
      <div 
        className="min-h-screen flex flex-col transition-colors duration-300 pb-20 md:pb-0 font-sans" 
        style={{ color: "var(--text-primary)", background: "var(--bg-base)" }}
      >
        {/* Sticky Header Ubuntu Top Bar */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Left / Bottom Navigation Launcher Dock */}
        <Dock activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Desktop Workspace Main Area */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:pl-28 md:pr-10 pt-16 flex flex-col justify-start items-center">
          
          {/* Ubuntu Style Window Container */}
          <div 
            className="w-full max-w-5xl my-6 rounded-2xl glass-card overflow-hidden shadow-2xl relative"
            style={{ border: "1px solid var(--border-base)" }}
          >
            {/* Window Top Header Bar (Ubuntu Style) */}
            <div 
              className="h-10 px-4 flex items-center justify-between select-none"
              style={{
                background: "rgba(48, 10, 36, 0.4)",
                borderBottom: "1px solid var(--border-base)",
              }}
            >
              {/* Window Controls (Left) */}
              <div className="flex items-center space-x-2">
                <span className="w-3.5 h-3.5 rounded-full bg-[#E95420] opacity-80 hover:opacity-100 transition-opacity cursor-pointer" title="Close" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#5E2750] opacity-80 hover:opacity-100 transition-opacity cursor-default" title="Minimize" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#AEA79F] opacity-80 hover:opacity-100 transition-opacity cursor-default" title="Maximize" />
              </div>

              {/* Window Title (Center) */}
              <div className="text-[11px] font-mono text-zinc-400">
                {activeTab === "about" && "terminal - venkat@ubuntu:~"}
                {activeTab === "stats" && "system-monitor - competence metric logs"}
                {activeTab === "skills" && "software-center - snap store install list"}
                {activeTab === "experience" && "files - /home/venkatesh/experience"}
                {activeTab === "education" && "library - academic_degree_credentials"}
                {activeTab === "contact" && "mail-client - send_message"}
              </div>

              {/* Mock Actions spacing */}
              <div className="w-16" />
            </div>

            {/* Window Content Workspace */}
            <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-full"
                >
                  {activeTab === "about" && <Hero />}
                  {activeTab === "stats" && <Stats />}
                  {activeTab === "skills" && <Skills />}
                  {activeTab === "experience" && <Experience />}
                  {activeTab === "education" && <Education />}
                  {activeTab === "contact" && <Contact />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Footer Component */}
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
