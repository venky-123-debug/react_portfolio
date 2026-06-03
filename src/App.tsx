import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300" style={{ color: "var(--text-primary)", background: "var(--bg-base)" }}>
        
        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="w-full">
          {/* About / Hero Section */}
          <Hero />

          {/* Problem Solving / Counter Stats Section */}
          <Stats />

          {/* Tech Skills Section */}
          <Skills />

          {/* Career Work Experience Section */}
          <Experience />

          {/* Educational Qualifications Section */}
          <Education />

          {/* Contact Details & Form Section */}
          <Contact />
        </main>

        {/* Footer Navigation */}
        <Footer />
        
      </div>
    </ThemeProvider>
  );
};

export default App;
