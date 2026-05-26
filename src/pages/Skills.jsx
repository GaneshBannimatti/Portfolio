import React from "react";
import { motion } from "framer-motion";
import { Code, Monitor, Server, Database, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={20} className="text-cyan-400" />,
      glowColor: "rgba(6, 182, 212, 0.4)",
      skills: [
        { name: "C", level: 75 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 90 },
      ],
    },
    {
      title: "Frontend Development",
      icon: <Monitor size={20} className="text-purple-400" />,
      glowColor: "rgba(168, 85, 247, 0.4)",
      skills: [
        { name: "HTML5 & CSS3", level: 95 },
        { name: "React.js", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vite", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server size={20} className="text-blue-400" />,
      glowColor: "rgba(59, 130, 246, 0.4)",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 88 },
      ],
    },
    {
      title: "Databases",
      icon: <Database size={20} className="text-emerald-400" />,
      glowColor: "rgba(16, 185, 129, 0.4)",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
      ],
    },
    {
      title: "Developer Tools",
      icon: <Wrench size={20} className="text-amber-400" />,
      glowColor: "rgba(245, 158, 11, 0.4)",
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "XAMPP", level: 70 },
        { name: "Canva", level: 85 },
        { name: "VMware", level: 75 },
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Decorative blurred dot in background */}
      <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute left-0 top-1/4 w-72 h-72 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900"
        >
          Technical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Skills
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

      {/* Grid wrapper */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="p-6 rounded-2xl glass-panel border border-slate-850 transition-all duration-300 relative group overflow-hidden"
          >
            {/* Hover subtle glowing background */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${category.glowColor.replace("0.4", "0.08")} 0%, transparent 80%)`,
              }}
            />

            {/* Category header */}
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-900/60 dark:border-slate-900/60 light:border-slate-150">
              <div 
                className="p-2 rounded-lg border flex items-center justify-center"
                style={{
                  backgroundColor: category.glowColor.replace("0.4", "0.1"),
                  borderColor: category.glowColor.replace("0.4", "0.2"),
                }}
              >
                {category.icon}
              </div>
              <h3 className="text-md font-heading font-bold text-slate-100 dark:text-slate-100 light:text-slate-850 group-hover:text-cyan-450 transition-colors duration-300">
                {category.title}
              </h3>
            </div>

            {/* Skill list */}
            <div className="flex flex-col gap-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col">
                  {/* Skill text row */}
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-350 dark:text-slate-400 light:text-slate-650 mb-1.5">
                    <span>{skill.name}</span>
                    <span className="font-mono text-slate-500 dark:text-slate-500 light:text-slate-500">{skill.level}%</span>
                  </div>

                  {/* Outer progress bar */}
                  <div className="w-full h-1.5 bg-slate-900 dark:bg-slate-950 light:bg-slate-200/80 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, #06b6d4 0%, #3b82f6 50%, #a855f7 100%)`,
                        boxShadow: `0 0 10px ${category.glowColor.replace("0.4", "0.2")}`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
