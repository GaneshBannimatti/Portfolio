import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Terminal, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Timeline", href: "#timeline" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }

      // Check which section is in view
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = "home";
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 90; // Fixed navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-cyber-slate/90 backdrop-blur-xl border-b border-white/5 dark:bg-cyber-slate/90 light:bg-white/95 light:border-black/5"
          : "py-6 bg-transparent"
      }`}
    >
      {/* Laser Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-emerald shadow-[0_1px_8px_#00f0ff]" 
        style={{ width: `${scrollProgress * 100}%` }} 
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Futuristic Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="flex items-center gap-2.5 group font-heading font-black tracking-widest text-lg text-slate-100 dark:text-slate-100 light:text-slate-900"
        >
          <div className="relative p-1.5 rounded-lg bg-cyber-slate border border-white/10 text-cyber-cyan shadow-[0_0_15px_rgba(0,240,255,0.15)] overflow-hidden">
            {/* Scanline layer in mini box */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-scanline pointer-events-none" />
            <Terminal size={18} className="relative z-10 animate-pulse" />
          </div>
          <span className="relative">
            GANESH
            <span className="text-cyber-cyan text-glow-cyber-cyan font-light">_HUD</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-2">
            {navLinks.map((link) => {
              const active = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={`relative text-xs font-mono uppercase tracking-widest transition-all duration-300 py-2 px-4 rounded-lg flex items-center gap-1 ${
                      active
                        ? "text-cyber-cyan dark:text-cyber-cyan light:text-blue-600 font-bold"
                        : "text-slate-400 hover:text-slate-100 dark:text-slate-400 dark:hover:text-slate-100 light:text-slate-650 light:hover:text-slate-900"
                    }`}
                  >
                    {/* Visual brackets for active menu */}
                    {active && <span className="text-cyber-cyan/50">[</span>}
                    {link.name}
                    {active && <span className="text-cyber-cyan/50">]</span>}
                    
                    {active && (
                      <motion.span
                        layoutId="navTabIndicator"
                        className="absolute inset-0 border border-cyber-cyan/15 rounded-lg bg-white/[0.02] pointer-events-none"
                        transition={{ type: "spring", stiffness: 350, damping: 26 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Theme Toggler */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-lg bg-cyber-slate/85 border border-white/5 text-slate-400 hover:text-cyber-cyan hover:border-cyber-cyan/35 dark:bg-cyber-slate/85 light:bg-slate-100 light:border-black/5 light:text-slate-600 transition-all duration-300 shadow-lg cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-cyber-slate border border-white/5 text-slate-400 hover:text-cyber-cyan transition-all"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-cyber-slate border border-white/5 text-slate-300 transition-all"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden w-full bg-cyber-slate/95 border-b border-white/5 backdrop-blur-xl overflow-hidden font-mono text-xs dark:bg-cyber-slate/95 light:bg-white/95 light:border-black/5"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-6">
              <div className="flex items-center gap-2 text-cyber-cyan animate-pulse border-b border-white/5 pb-2 text-[10px]">
                <ShieldAlert size={12} /> TELEMETRY MODULE ACTIVE
              </div>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, idx) => {
                  const active = activeSection === link.href.substring(1);
                  return (
                    <motion.li
                      key={link.name}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.04 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleClick(e, link.href)}
                        className={`block py-3 px-4 rounded-lg text-left ${
                          active
                            ? "text-cyber-cyan bg-white/[0.03] border-l-2 border-cyber-cyan font-bold"
                            : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        &gt; {link.name}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
