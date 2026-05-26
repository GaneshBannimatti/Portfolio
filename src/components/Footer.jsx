import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socials = [
    { icon: <Github size={20} />, href: "https://github.com/GaneshBannimatti", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/ganesh-b-bannimatti-80415a287", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:ganeshbannimatti36@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative w-full py-12 px-6 border-t border-slate-900/60 dark:border-slate-900/60 light:border-slate-200 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/80 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Credits */}
        <div className="text-center md:text-left">
          <p className="text-base font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Ganesh M B
          </p>
          <p className="text-xs mt-1 text-slate-500 dark:text-slate-500 light:text-slate-400">
            Computer Science Engineering Student & Full Stack Developer
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:neon-glow-cyan dark:bg-slate-900 dark:border-slate-800 light:bg-white light:border-slate-200 light:text-slate-600 light:hover:text-blue-500 light:hover:border-blue-300 light:hover:neon-glow-blue transition-all duration-300 cursor-pointer"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Right Side: Copyright */}
        <div className="text-center md:text-right">
          <p className="text-xs text-slate-500 dark:text-slate-500 light:text-slate-400">
            &copy; {new Date().getFullYear()} Ganesh M B. All rights reserved.
          </p>
          <p className="text-[10px] mt-1 text-slate-600 dark:text-slate-600 light:text-slate-400">
            Designed & Built with React & Tailwind
          </p>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-slate-900/90 border border-slate-800 text-cyan-400 backdrop-blur-md shadow-2xl hover:text-purple-400 hover:border-purple-500/30 hover:scale-110 active:scale-95 transition-all duration-300 pointer-events-auto cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
