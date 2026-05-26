import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CanvasParticles from "./components/CanvasParticles";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initialize theme mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      localStorage.setItem("theme", "light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="relative min-h-screen text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors duration-500 overflow-x-hidden select-none bg-slate-950 dark:bg-slate-950 light:bg-slate-50">
          {/* Custom Trailing Cursor */}
          <CustomCursor />

          {/* Canvas Interactive Particle Background */}
          <CanvasParticles isDarkMode={isDarkMode} />

          {/* Sticky Navbar */}
          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

          {/* Main Portfolio Sections */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <Education />
            <Contact />
          </main>

          {/* Footer Component */}
          <Footer />
        </div>
      )}
    </>
  );
}
