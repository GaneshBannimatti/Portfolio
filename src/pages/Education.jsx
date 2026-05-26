import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export default function Education() {
  const cgpa = 7.1;
  const maxCgpa = 10;
  const radius = 45;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  
  // Circumference fill value matching 7.1 CGPA
  const strokeDashoffset = circumference - (cgpa / maxCgpa) * circumference;

  return (
    <section id="education" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Visual glowing dots */}
      <div className="absolute right-10 top-10 w-96 h-96 rounded-full bg-blue-500/5 blur-[130px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900"
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Education
          </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded-full"
        />
      </div>

      {/* Education Showcase Layout */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -4 }}
          className="p-8 rounded-2xl glass-panel border border-slate-850 hover:border-glow-hover transition-all duration-300 relative group"
        >
          {/* Subtle gradient light flare on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Side: University details */}
            <div className="md:col-span-8 text-left flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest font-extrabold uppercase px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    B.E. Degree (CSE)
                  </span>
                  <h3 className="text-xl font-heading font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-850 mt-1 leading-snug">
                    Bachelor of Engineering – Computer Science & Engineering
                  </h3>
                </div>
              </div>

              {/* Institution Name */}
              <p className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-750">
                Smt Kamala & Sri Venkappa M. Agadi College of Engineering and Technology
              </p>

              {/* Location & Time details */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-450 dark:text-slate-500 light:text-slate-600 mt-2 border-t border-slate-900/60 pt-4 dark:border-slate-900/60 light:border-slate-150">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-cyan-400" /> Lakshmeshwar, Karnataka, India
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-purple-400" /> 2023 – Present
                </span>
              </div>

              {/* High-tech descriptions */}
              <p className="text-xs text-slate-400 dark:text-slate-450 light:text-slate-600 mt-2 leading-relaxed">
                Focusing on core engineering models including Advanced Data Structures, Relational Database Management Systems, System Automations, Algorithm Architectures, and Full-Stack Engineering methodologies. Active contributor to departmental technology networks and technical symposiums.
              </p>
            </div>

            {/* Right Side: Interactive CGPA radial dial */}
            <div className="md:col-span-4 flex flex-col items-center justify-center">
              <div className="relative w-36 h-36 flex items-center justify-center">
                {/* SVG Radial Meter */}
                <svg className="w-full h-full transform -rotate-90">
                  {/* Outer track */}
                  <circle
                    cx="72"
                    cy="72"
                    r={radius}
                    fill="transparent"
                    stroke="#0f172a"
                    strokeWidth={strokeWidth}
                    className="dark:stroke-slate-900 light:stroke-slate-200"
                  />
                  {/* Active glowing filler path */}
                  <motion.circle
                    cx="72"
                    cy="72"
                    r={radius}
                    fill="transparent"
                    stroke="url(#cgpaGradient)"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    strokeLinecap="round"
                  />
                  
                  {/* Gradient definitions */}
                  <defs>
                    <linearGradient id="cgpaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Counter Center details */}
                <div className="absolute flex flex-col items-center justify-center font-mono">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-850"
                  >
                    {cgpa}
                  </motion.span>
                  <span className="text-[9px] text-slate-500 uppercase tracking-widest mt-0.5">
                    CGPA / 10
                  </span>
                </div>
              </div>

              {/* Status details */}
              <div className="flex items-center gap-1 mt-2 text-xs font-semibold text-emerald-400">
                <Award size={14} /> Academic Standing: Good
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
