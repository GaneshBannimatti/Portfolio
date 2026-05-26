import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowRight, Terminal, Shield, Activity, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Hackathon Winner",
    "Software Engineer",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [hudLoad, setHudLoad] = useState(72);
  const [coreSpeed, setCoreSpeed] = useState(2.8);
  
  const typingSpeed = 90;
  const deletingSpeed = 40;
  const pauseDuration = 1800;

  useEffect(() => {
    let timer;
    const fullRole = roles[currentRoleIndex];

    if (!isDeleting) {
      if (currentText !== fullRole) {
        timer = setTimeout(() => {
          setCurrentText(fullRole.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (currentText !== "") {
        timer = setTimeout(() => {
          setCurrentText(fullRole.substring(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-[100svh] pt-32 pb-16 flex items-center relative overflow-hidden px-6 max-w-7xl mx-auto"
    >
      {/* Visual background HUD layers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Cyber mesh overlays */}
      <div className="absolute inset-0 tech-grid-mesh opacity-10 pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Side: Developer Info */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Cyberpunk Greeting Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-lg bg-cyber-cyan/5 border border-cyber-cyan/15 text-cyber-cyan text-[10px] font-mono font-bold tracking-widest uppercase mb-6 relative overflow-hidden">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-emerald animate-ping" />
            <span className="relative z-10">&lt; PROTOCOL: CONNECTED // SESSION_02 &gt;</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent animate-scanline" />
          </div>

          {/* Name in Cyber Brackets */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black tracking-tighter mb-4 text-slate-100 dark:text-slate-100 light:text-slate-900 leading-tight">
            <span className="text-slate-500 font-light mr-2 font-sans">[</span>
            GANESH M B
            <span className="text-slate-500 font-light ml-2 font-sans">]</span>
          </h1>

          {/* Typewriter details */}
          <div className="h-10 flex items-center mb-6 font-mono">
            <span className="text-sm sm:text-md uppercase tracking-wider text-slate-450 dark:text-slate-400 light:text-slate-650 flex items-center gap-1.5">
              <Terminal size={14} className="text-cyber-cyan" />
              SYSTEM_ROLE:{" "}
              <span className="text-cyber-cyan text-glow-cyber-cyan font-bold border-b border-cyber-cyan/40 pb-0.5">
                {currentText}
              </span>
              <span className="w-1.5 h-4 bg-cyber-cyan animate-pulse" />
            </span>
          </div>

          {/* Elevator Bio */}
          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl mb-8 leading-relaxed font-sans">
            Computer Science Engineering undergraduate crafting scalable full-stack web architectures, capturing high-velocity data using automated scrapers, and leading tech squads to victories at national-level hackathons.
          </p>

          {/* Glowing CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              onClick={() => handleScrollTo("projects")}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyber-cyan to-blue-600 text-slate-950 font-bold font-heading text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-105 hover:shadow-[0_0_25px_#00f0ff] active:scale-95 transition-all duration-300 cursor-pointer"
            >
              LAUNCH PROJECTS <ArrowRight size={14} />
            </button>

            <button
              onClick={() => handleScrollTo("contact")}
              className="px-6 py-3 rounded-lg bg-cyber-slate border border-white/5 text-slate-200 font-bold font-heading text-xs uppercase tracking-widest hover:border-cyber-purple/40 hover:text-cyber-purple hover:scale-105 active:scale-95 transition-all duration-300 dark:bg-cyber-slate dark:border-white/5 light:bg-white light:border-black/5 light:text-slate-800 cursor-pointer"
            >
              TRANSMIT LOGS
            </button>
          </div>

          {/* Social connections */}
          <div className="flex items-center gap-4 border-t border-white/5 pt-6 w-full max-w-sm">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mr-2">
              NETWORKS:
            </span>
            <a
              href="https://github.com/GaneshBannimatti"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-cyber-slate border border-white/5 text-slate-450 hover:text-cyber-cyan hover:scale-110 active:scale-95 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/ganesh-b-bannimatti-80415a287"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-cyber-slate border border-white/5 text-slate-450 hover:text-cyber-cyan hover:scale-110 active:scale-95 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:ganeshbannimatti36@gmail.com"
              className="p-2.5 rounded-lg bg-cyber-slate border border-white/5 text-slate-450 hover:text-cyber-cyan hover:scale-110 active:scale-95 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Interactive HUD Cockpit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 w-full flex items-center justify-center"
        >
          {/* Main HUD Frame */}
          <div className="w-full max-w-[460px] rounded-xl hud-panel border border-white/10 overflow-hidden p-6 text-left font-mono scanline-effect">
            {/* Cyber Corner Brackets */}
            <div className="cyber-corner inset-0 absolute" />
            <div className="cyber-corner-bottom inset-0 absolute" />

            {/* Frame Top Indicators */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <span className="text-[10px] text-cyber-cyan font-bold tracking-widest flex items-center gap-1">
                <Shield size={12} className="animate-pulse" /> SYSTEM COCKPIT v2
              </span>
              <span className="text-[9px] text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Activity size={10} className="text-cyber-emerald animate-pulse" /> ONLINE
              </span>
            </div>

            {/* Visual diagnostic telemetry blocks */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-lg">
                <span className="text-[8px] text-slate-500 uppercase tracking-widest block">HUD_LOAD</span>
                <span className="text-md font-bold text-cyber-emerald">{hudLoad}%</span>
                <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden mt-1.5">
                  <div className="h-full bg-cyber-emerald transition-all duration-300" style={{ width: `${hudLoad}%` }} />
                </div>
              </div>
              
              <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-lg">
                <span className="text-[8px] text-slate-500 uppercase tracking-widest block">CORE_SPEED</span>
                <span className="text-md font-bold text-cyber-cyan">{coreSpeed.toFixed(1)} GHz</span>
                <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden mt-1.5">
                  <div className="h-full bg-cyber-cyan transition-all duration-300" style={{ width: `${(coreSpeed / 4) * 100}%` }} />
                </div>
              </div>
            </div>

            {/* Interactive sliders to modulate cockpit parameters! */}
            <div className="flex flex-col gap-4 border-t border-white/5 pt-5 mb-5 text-[9px]">
              <div>
                <div className="flex justify-between text-slate-400 mb-1.5 font-bold">
                  <span>MODULATE COCKPIT LOAD</span>
                  <span className="text-cyber-emerald">{hudLoad}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="98"
                  value={hudLoad}
                  onChange={(e) => setHudLoad(parseInt(e.target.value))}
                  className="w-full custom-range"
                />
              </div>

              <div>
                <div className="flex justify-between text-slate-400 mb-1.5 font-bold">
                  <span>COCKPIT OVERCLOCK SPEED</span>
                  <span className="text-cyber-cyan">{coreSpeed.toFixed(1)} GHz</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="0.1"
                  value={coreSpeed}
                  onChange={(e) => setCoreSpeed(parseFloat(e.target.value))}
                  className="w-full custom-range"
                />
              </div>
            </div>

            {/* Console Log status readout */}
            <div className="p-4 bg-slate-950/80 border border-white/5 rounded-lg text-[9px] leading-relaxed text-slate-400">
              <span className="text-cyber-cyan font-bold block mb-1">&gt; telemetry_readout.sh</span>
              <p>&gt; MEMORY: OK // CACHE_SECTORS: MOUNTED</p>
              <p>&gt; BANDWIDTH_LINK: 100Gbps FIBER_GRID</p>
              <p className="text-cyber-emerald animate-pulse">&gt; GANESH: STACK_MERN_READY_FOR_COMMUNICATIONS</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
