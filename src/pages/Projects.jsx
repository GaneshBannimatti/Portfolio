import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ShieldCheck, Database, Calendar, BarChart3 } from "lucide-react";

export default function Projects() {
  const projectsList = [
    {
      id: "vtu-xalytor",
      title: "VTU Result Xalytor",
      desc: "A scalable bulk automation system designed to scrape and aggregate university results using OCR-based captcha decryption and dynamic analytical tools.",
      features: [
        "USN-range bulk fetching",
        "Tesseract OCR automation",
        "CSV/Excel upload pipelines",
        "Statistical analytics charts",
        "Export to SQL / Excel formats",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tesseract.js", "Tailwind CSS"],
      github: "https://github.com/GaneshBannimatti/VTU-Xalytor",
      live: null,
      glowColor: "rgba(6, 182, 212, 0.3)",
      // Custom React-coded Mockup
      mockup: (
        <div className="w-full h-full bg-slate-950 p-4 font-mono text-[10px] text-slate-400 flex flex-col justify-between select-none">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-900 pb-2">
            <span className="text-cyan-400 font-bold flex items-center gap-1">
              <ShieldCheck size={12} /> VTU Xalytor CLI v1.2
            </span>
            <span className="text-slate-600">TASK: BULK_FETCH</span>
          </div>
          {/* Output logs */}
          <div className="flex-1 py-3 flex flex-col gap-1.5 leading-relaxed overflow-hidden text-left">
            <div className="text-slate-650">&gt; npm run scrape --range=2SR23CS001-2SR23CS060</div>
            <div className="text-purple-400 flex items-center justify-between">
              <span>[1] Fetching USN: 2SR23CS001...</span>
              <span className="text-green-400 font-bold">SUCCESS (CGPA 8.4)</span>
            </div>
            <div className="text-purple-400 flex items-center justify-between">
              <span>[2] Fetching USN: 2SR23CS002...</span>
              <span className="text-cyan-400 font-semibold">[OCR CAPTCHA BYPASS: "3YF8A"]</span>
            </div>
            <div className="text-slate-500 font-bold text-center border border-slate-900 rounded py-1 my-1 animate-pulse bg-slate-900/30">
              📊 AGGREGATING STATISTICS (Mean: 7.84)
            </div>
            <div className="text-green-400">&gt; Exported results to VTU_CS_Batch_2026.xlsx</div>
          </div>
          {/* Mini progress bar */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1 bg-slate-900 rounded-full overflow-hidden">
              <div className="h-full w-4/5 bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse" />
            </div>
            <span className="text-[8px] text-cyan-400">80% Scraped</span>
          </div>
        </div>
      ),
    },
    {
      id: "codefiesta",
      title: "Codefiesta 6.0 Portal",
      desc: "A high-performance full-stack event portal engineered for real-time registration workflows, coordinator dashboard analytics, and active participant scheduling.",
      features: [
        "Dynamic ticket generation",
        "Role-based control panels",
        "Live check-in verification",
        "MongoDB schema validations",
        "Scalable bulk mailing systems",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/GaneshBannimatti/codefiest6.0",
      live: "https://codefiestasksvmacet.vercel.app/",
      glowColor: "rgba(168, 85, 247, 0.3)",
      mockup: (
        <div className="w-full h-full bg-slate-950 p-4 flex flex-col justify-between select-none relative overflow-hidden">
          {/* Watermark grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />
          
          <div className="flex items-center justify-between border-b border-slate-900 pb-2 relative z-10">
            <span className="text-purple-400 font-heading font-extrabold text-[10px] tracking-widest uppercase flex items-center gap-1">
              <Calendar size={12} /> CodeFiesta 6.0
            </span>
            <span className="text-[8px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono border border-emerald-500/20 font-bold uppercase">
              Live Portal
            </span>
          </div>
          
          {/* Animated Card Mockup */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 my-2 text-left relative z-10">
            <div className="text-[10px] font-bold text-slate-200">Ganesh M B</div>
            <div className="text-[8px] text-slate-500">Lead Student Coordinator</div>
            
            <div className="mt-3 flex items-center justify-between bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-850">
              <div>
                <div className="text-[6px] text-slate-550 uppercase tracking-widest">Registrations</div>
                <div className="text-xs font-mono font-bold text-purple-400">120+ Teams</div>
              </div>
              <div className="text-right">
                <div className="text-[6px] text-slate-550 uppercase tracking-widest">Category</div>
                <div className="text-[8px] font-bold text-cyan-400">Hackathon Core</div>
              </div>
            </div>
          </div>
          
          <div className="text-[7px] text-slate-500 text-center relative z-10">
            SECURE CHECK-IN SYSTEM LOADED
          </div>
        </div>
      ),
    },
    {
      id: "melanze",
      title: "Melanze Website",
      desc: "A beautiful responsive showcase platform utilizing premium layout systems, customized glassmorphism nodes, and modular routing mechanisms.",
      features: [
        "Ultra-smooth page transitions",
        "Cyberpunk aesthetics framework",
        "SEO microdata implementations",
        "Staggered grid portfolios",
        "Performant hosting configurations",
      ],
      tech: ["React.js", "Tailwind CSS", "Vite", "Framer Motion", "CSS Grids"],
      github: "https://github.com/GaneshBannimatti/Melanze-2k26",
      live: "https://melanze-2k26.vercel.app/",
      glowColor: "rgba(59, 130, 246, 0.3)",
      mockup: (
        <div className="w-full h-full bg-slate-950 p-4 flex flex-col justify-between select-none relative overflow-hidden">
          {/* Abstract geometric background elements */}
          <div className="absolute -top-12 -left-12 w-28 h-28 rounded-full bg-blue-500/10 blur-xl" />
          <div className="absolute -bottom-12 -right-12 w-28 h-28 rounded-full bg-purple-500/10 blur-xl" />

          <div className="flex items-center justify-between relative z-10">
            <span className="text-blue-400 font-heading font-extrabold text-[10px] tracking-wider uppercase">
              ⚡ MELANZE 2K26
            </span>
            <span className="text-[7px] text-slate-500 font-mono">WEB_FRAME</span>
          </div>

          {/* Miniature Layout Mock */}
          <div className="grid grid-cols-3 gap-2 my-2 relative z-10">
            <div className="col-span-2 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-slate-800 rounded-lg p-2 flex flex-col justify-between">
              <div className="w-8 h-1 bg-blue-400 rounded-full" />
              <div className="text-[6px] text-slate-450 leading-tight line-clamp-2">
                Empowering national-level symposiums with futuristic web templates.
              </div>
            </div>
            <div className="col-span-1 h-14 bg-slate-900/80 border border-slate-800 rounded-lg p-1.5 flex flex-col justify-between items-center text-center">
              <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/20">
                <BarChart3 size={8} className="text-blue-400" />
              </div>
              <span className="text-[6px] text-slate-400 font-semibold uppercase tracking-wider">Fast UI</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[7px] text-slate-400 border-t border-slate-900 pt-2 relative z-10">
            <span>MODERN & RESPONSIVE</span>
            <span className="text-purple-400 font-semibold flex items-center gap-0.5">
              EXPLORE EVENTS <ExternalLink size={6} />
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-500/5 to-purple-500/5 blur-[120px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900"
        >
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Projects
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

      {/* Project Cards Stack */}
      <div className="flex flex-col gap-16">
        {projectsList.map((project, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Mockup Frame (Visual Representation) */}
              <div
                className={`col-span-1 lg:col-span-5 h-[230px] rounded-2xl border border-slate-800/80 bg-slate-900/40 p-2.5 backdrop-blur-md overflow-hidden relative group transform hover:scale-[1.01] hover:rotate-1 transition-all duration-500 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {/* Glow ring */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${project.glowColor} 0%, transparent 75%)`,
                  }}
                />

                {/* Outer frame borders */}
                <div className="w-full h-full rounded-xl overflow-hidden border border-slate-900 relative">
                  {project.mockup}
                </div>
              </div>

              {/* Description Content */}
              <div
                className={`col-span-1 lg:col-span-7 text-left flex flex-col gap-4 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-100 dark:text-slate-100 light:text-slate-850 hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                {/* Description Text */}
                <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  {project.desc}
                </p>

                {/* Features Checklists */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-450 light:text-slate-550">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 text-[10px] font-mono font-semibold rounded bg-slate-900 border border-slate-850 text-slate-350 dark:bg-slate-900 dark:border-slate-850 dark:text-slate-350 light:bg-slate-100 light:border-slate-200 light:text-slate-650"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:border-cyan-500 hover:text-cyan-400 dark:bg-slate-900 dark:border-slate-800 light:bg-white light:border-slate-200 light:text-slate-700 light:hover:text-blue-500 transition-all duration-300 cursor-pointer"
                  >
                    <Github size={14} /> Repository
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-pointer"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
