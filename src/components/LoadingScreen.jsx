import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  const logs = [
    "INITIALIZING CORE SYSTEM CONFIG...",
    "LOADING GRAPHICS ENGINE VARIABLES...",
    "BOOTSTRAPPING CYBERPUNK STYLING SHADERS...",
    "CONNECTING TO REPOSITORY SCHEMA...",
    "AUDITING FULL-STACK DEVELOPER METRICS...",
    "SYSTEM SECURE. BOOT COMPLETE.",
  ];

  useEffect(() => {
    // Progress counter speed up
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 600); // Small pause at 100%
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 2; // Increments of 2-9%
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    // Cycle terminal logs depending on progress percentage
    if (progress < 20) setLogIndex(0);
    else if (progress < 40) setLogIndex(1);
    else if (progress < 60) setLogIndex(2);
    else if (progress < 80) setLogIndex(3);
    else if (progress < 95) setLogIndex(4);
    else setLogIndex(5);
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50 p-6 select-none font-mono">
      <div className="max-w-md w-full flex flex-col items-center">
        {/* Futuristic Glowing Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [1, 1.05, 1], opacity: 1 }}
          transition={{
            scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            opacity: { duration: 0.5 }
          }}
          className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)] mb-8"
        >
          <Terminal size={32} />
        </motion.div>

        {/* Loading Title */}
        <h2 className="text-xl font-bold tracking-widest text-slate-100 mb-2 font-heading">
          GANESH<span className="text-cyan-400 font-normal">.DEV</span>
        </h2>
        <p className="text-xs text-slate-500 tracking-wider mb-8">
          PORTFOLIO OS v2.0
        </p>

        {/* Loader Body */}
        <div className="w-full bg-slate-900/60 border border-slate-850 rounded-xl p-5 mb-6 backdrop-blur-md">
          {/* Progress Bar Container */}
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-4 relative">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
              style={{ width: `${progress}%` }}
              layout
            />
          </div>

          <div className="flex items-center justify-between text-xs font-semibold mb-3">
            <span className="text-cyan-400 animate-pulse">STATUS: INITIALIZING</span>
            <span className="text-purple-400">{progress}%</span>
          </div>

          {/* Console logs */}
          <div className="h-10 text-[10px] text-slate-400 leading-relaxed overflow-hidden text-left border-t border-slate-800/50 pt-2 flex flex-col justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={logIndex}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="text-cyan-500/80 font-bold"
              >
                &gt; {logs[logIndex]}
              </motion.div>
            </AnimatePresence>
            {logIndex > 0 && (
              <div className="text-slate-600 line-clamp-1">
                &gt; {logs[logIndex - 1]}
              </div>
            )}
          </div>
        </div>
        
        <p className="text-[10px] text-slate-600 mt-2">
          PLEASE STAND BY WHILE MODULES ARE MOUNTED...
        </p>
      </div>
    </div>
  );
}
