import React from "react";
import { motion } from "framer-motion";
import { Trophy, ShieldCheck, Award, Zap, Star } from "lucide-react";

export default function Achievements() {
  const milestones = [
    {
      id: 1,
      title: "1st Place – National Hackathon",
      organization: "GIT Belagavi",
      desc: "Won the top honors in a highly competitive national-level hackathon, leading a team to design and deploy a production-ready solution in a 24-hour sprint.",
      icon: <Trophy className="text-amber-400" size={20} />,
      badge: "Champion",
      glowColor: "rgba(245, 158, 11, 0.2)",
    },
    {
      id: 2,
      title: "Best Technical Student Award",
      organization: "College Committee",
      desc: "Received ₹15,000 financial sponsorship as recognition for exemplary technical prowess, academic dedication, and full-stack development contributions.",
      icon: <Award className="text-emerald-400" size={20} />,
      badge: "Sponsorship",
      glowColor: "rgba(16, 185, 129, 0.2)",
    },
    {
      id: 3,
      title: "10+ National-Level Hackathons",
      organization: "Various Institutions",
      desc: "Actively participated in over ten hackathons across diverse technological landscapes, building robust real-time software models and leading core architecture sprints.",
      icon: <Zap className="text-cyan-400" size={20} />,
      badge: "Hackathon Dev",
      glowColor: "rgba(6, 182, 212, 0.2)",
    },
    {
      id: 4,
      title: "Lead Coordinator – CodeFiesta 6.0",
      organization: "Department of CSE",
      desc: "Directed the execution, portal management, registrations, and technical infrastructure for the landmark institutional hackathon, managing a large-scale student team.",
      icon: <ShieldCheck className="text-purple-400" size={20} />,
      badge: "Lead Organizer",
      glowColor: "rgba(168, 85, 247, 0.2)",
    },
    {
      id: 5,
      title: "Top 5 Hackathon Placements",
      organization: "6 National Hackathons",
      desc: "Consistently secured top 5 rankings in six distinct national-level coding hackathons, demonstrating reliable problem solving and execution under intense constraints.",
      icon: <Star className="text-blue-400" size={20} />,
      badge: "Elite Elite",
      glowColor: "rgba(59, 130, 246, 0.2)",
    },
  ];

  return (
    <section id="achievements" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-gradient-to-br from-amber-500/5 to-cyan-500/5 blur-[120px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900"
        >
          Key{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Achievements
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

      {/* Timeline Layout */}
      <div className="relative max-w-4xl mx-auto pl-6 sm:pl-0">
        {/* Central connecting line for desktop, left line for mobile */}
        <div className="absolute left-[29px] sm:left-1/2 top-4 bottom-4 w-[2px] bg-slate-900 dark:bg-slate-900 light:bg-slate-200 transform -translate-x-1/2 -z-10" />

        {/* Milestone nodes */}
        <div className="flex flex-col gap-12">
          {milestones.map((milestone, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col sm:flex-row items-start sm:items-center relative w-full ${
                  isLeft ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Connector Dot */}
                <div className="absolute left-[3px] sm:left-1/2 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center transform -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(6,182,212,0.6)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                </div>

                {/* Timeline Card */}
                <div className={`w-full sm:w-1/2 ${isLeft ? "sm:pl-12" : "sm:pr-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.01, y: -4 }}
                    className="p-6 rounded-2xl glass-panel border border-slate-850 hover:border-glow-hover text-left transition-all duration-300 relative group overflow-hidden"
                  >
                    {/* Glowing BG effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                      style={{
                        background: `radial-gradient(circle at 30% 30%, ${milestone.glowColor} 0%, transparent 80%)`,
                      }}
                    />

                    {/* Badge & Icon row */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                        {milestone.icon}
                      </div>
                      <span className="text-[9px] font-mono tracking-widest font-extrabold uppercase px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-sm">
                        {milestone.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-md font-heading font-bold text-slate-100 dark:text-slate-100 light:text-slate-850 group-hover:text-cyan-400 transition-colors duration-300">
                      {milestone.title}
                    </h3>
                    
                    {/* Subtitle / Organisation */}
                    <span className="text-xs text-purple-400 font-semibold mb-3 block">
                      {milestone.organization}
                    </span>

                    {/* Description */}
                    <p className="text-xs text-slate-400 dark:text-slate-450 light:text-slate-605 leading-relaxed">
                      {milestone.desc}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer column for balance */}
                <div className="hidden sm:block w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
