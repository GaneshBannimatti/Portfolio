import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Code, Cpu, Award } from "lucide-react";

// Robust scroll-triggered counter
function StatCounter({ targetValue, duration = 1.2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(targetValue.toString().replace(/\D/g, ""), 10);
    if (isNaN(end)) {
      setCount(targetValue);
      return;
    }

    const increment = end / (duration * 60); // 60fps
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      const val = Math.min(Math.floor(increment * currentFrame), end);
      setCount(val);

      if (val >= end) {
        clearInterval(timer);
        setCount(targetValue);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, targetValue, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const stats = [
    {
      icon: <Trophy className="text-amber-400" size={24} />,
      title: "GIT Belagavi Winner",
      value: "1",
      suffix: "st Place",
      desc: "Secured top place in national hackathon",
      color: "rgba(245, 158, 11, 0.15)",
      border: "rgba(245, 158, 11, 0.3)",
    },
    {
      icon: <Code className="text-cyan-400" size={24} />,
      title: "National Hackathons",
      value: "10",
      suffix: "+",
      desc: "Participated and solved complex engineering problems",
      color: "rgba(6, 182, 212, 0.15)",
      border: "rgba(6, 182, 212, 0.3)",
    },
    {
      icon: <Cpu className="text-purple-400" size={24} />,
      title: "Top 5 Finishes",
      value: "6",
      suffix: " hackathons",
      desc: "Consistently ranked among final top contenders",
      color: "rgba(168, 85, 247, 0.15)",
      border: "rgba(168, 85, 247, 0.3)",
    },
    {
      icon: <Award className="text-emerald-400" size={24} />,
      title: "Technical Sponsorship",
      value: "15000",
      suffix: "",
      desc: "Received ₹15,000 as Best Technical Student",
      color: "rgba(16, 185, 129, 0.15)",
      border: "rgba(16, 185, 129, 0.3)",
    },
  ];

  const floatingTechs = ["React", "Node.js", "Express", "MongoDB", "Python", "JavaScript"];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Decorative Orbits */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 rounded-full border border-slate-900/40 pointer-events-none -z-10 dark:border-slate-800/20" />
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full border border-slate-900/40 pointer-events-none -z-10 dark:border-slate-800/20 animate-spin-slow" />

      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900"
        >
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Me
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Bio Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 text-left flex flex-col gap-6"
        >
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 leading-snug">
            Engineering High-Performance Digital Solutions
          </h3>
          
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
            I am a passionate Computer Science Engineering student currently pursuing my Bachelor's degree. My primary expertise revolves around full-stack development, with a specific focus on the **MERN (MongoDB, Express, React, Node.js) stack**.
          </p>

          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
            I thrive on crafting robust backend automation tools, OCR scrapers, registration portals, and scalable administration panels. Beyond writing standard clean code, I love solving time-critical tasks in collaborative environments, leading to my active involvement in college committees and national-level hackathons.
          </p>

          {/* Floating Orbiting Badge / Tech Chips Mockup */}
          <div className="mt-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-500 light:text-slate-400 mb-3">
              Frequent Frameworks:
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {floatingTechs.map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 dark:bg-slate-900/60 dark:border-slate-805 dark:text-slate-300 light:bg-white light:border-slate-200 light:text-slate-700 hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Impact counters in Glassmorphic Cards */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl glass-panel border border-slate-850 hover:border-glow-hover transition-all duration-300 relative group overflow-hidden"
            >
              {/* Radial gradient background hover reveal */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${stat.color} 0%, transparent 80%)`,
                }}
              />

              {/* Icon / Top row */}
              <div className="flex items-center justify-between mb-4">
                <div 
                  className="p-2.5 rounded-xl border flex items-center justify-center"
                  style={{ backgroundColor: stat.color, borderColor: stat.border }}
                >
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold font-mono tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-850">
                  {stat.value === "15000" && "₹"}
                  <StatCounter targetValue={stat.value} suffix={stat.suffix} />
                </div>
              </div>

              {/* Title / Description */}
              <h4 className="text-sm font-heading font-semibold text-slate-200 dark:text-slate-200 light:text-slate-850 mb-1 leading-tight group-hover:text-cyan-400 transition-colors">
                {stat.title}
              </h4>
              <p className="text-xs text-slate-450 dark:text-slate-500 light:text-slate-550 leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
