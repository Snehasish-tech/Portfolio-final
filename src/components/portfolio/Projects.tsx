import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Github, Globe, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionBadge, SectionHeading } from "./Section";


function projectInitials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 3)
    .join("")
    .toUpperCase();
}

// --- NEW 100% PERFECT DESIGN: Animated Tech Orbit ---
// Replaces the clunky leaf SVG with a sleek, perfectly circular glowing tech ring
function PurpleTechOrbit() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[220px] sm:size-[260px] pointer-events-none">
      {/* Outer Dashed Orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border-[2px] border-dashed border-[#7C3AED]/60"
      />
      
      {/* Inner Glowing Orbit */}
      <motion.div
        animate={{ rotate: -360, scale: [1, 1.03, 1] }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute inset-[18px] rounded-full border border-[#8B5CF6] shadow-[0_0_25px_rgba(139,92,246,0.4)]"
      />

      {/* Glowing Orbital Nodes (Dots) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute -top-1.5 left-1/2 size-3 -translate-x-1/2 rounded-full bg-[#A78BFA] shadow-[0_0_15px_#A78BFA]" />
        <div className="absolute -bottom-1.5 left-1/2 size-3 -translate-x-1/2 rounded-full bg-[#A78BFA] shadow-[0_0_15px_#A78BFA]" />
        <div className="absolute top-1/2 -left-1.5 size-2 -translate-y-1/2 rounded-full bg-[#8B5CF6] shadow-[0_0_10px_#8B5CF6]" />
        <div className="absolute top-1/2 -right-1.5 size-2 -translate-y-1/2 rounded-full bg-[#8B5CF6] shadow-[0_0_10px_#8B5CF6]" />
      </motion.div>
    </div>
  );
}

export function Projects() {
  const [i, setI] = useState(0);
  const p = projects[i];

  const go = (dir: number) => setI((v) => (v + dir + projects.length) % projects.length);

  return (
    <section id="projects" className="relative py-10 sm:py-12">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <SectionBadge icon={Briefcase}>Featured Projects</SectionBadge>
        <SectionHeading
          lead="Selected"
          accent="Work & Experiments"
          sub="A collection of high-performance web applications and AI-driven tools built with a focus on scalability, clean architecture, and user experience."
        />

        <div className="mt-6 sm:mt-8">
          <AnimatePresence mode="wait">
            <motion.article
              key={p.name}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="card-surface grid gap-6 rounded-2xl p-5 sm:p-7 md:p-8 lg:grid-cols-2"
            >
              <div className="flex flex-col items-center text-center">
                
                {/* --- LOGO SECTION WITH ORBIT --- */}
                <div className="relative flex h-[220px] w-full items-center justify-center sm:h-[250px]">
                  
                  {/* Deep Green Background Glow */}
                  <div className="absolute top-1/2 left-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/20 blur-[70px]" />

                  {/* The Perfect Purple Tech Orbit (Z-index 0 ensures it stays perfectly behind) */}
                  <div className="absolute z-0">
                    <PurpleTechOrbit />
                  </div>

                  {/* Circular Frame for Logo (Z-index 10 keeps it crisp and on top) */}
                  <div className="relative z-10 grid size-32 place-items-center rounded-full border border-lime/40 bg-[#060913] p-1 shadow-[0_0_40px_rgba(163,230,53,0.15)] sm:size-40 backdrop-blur-md">
                    {p.logo ? (
                      <img
                        src={p.logo}
                        alt={`${p.name} logo`}
                        loading="lazy"
                        className="relative size-[110px] rounded-full object-contain sm:size-[140px]"
                      />
                    ) : (
                      <div className="relative grid size-[110px] place-items-center rounded-full border border-lime/10 bg-background/80 text-center sm:size-[140px]">
                        <span className="font-display text-3xl font-bold text-lime sm:text-4xl">
                          {projectInitials(p.name)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {/* ---------------------------------- */}

                <p className="mt-3 text-xs sm:text-sm text-muted-foreground">{p.tagline}</p>

                <div className="mt-3.5 flex flex-wrap justify-center gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s.label}
                      style={{ backgroundColor: s.color }}
                      className="rounded px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-white"
                    >
                      {s.label}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap justify-center gap-2.5">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-xs sm:text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                  >
                    <Github className="h-3.5 w-3.5" /> View on GitHub
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-lime/50 px-4 py-2 text-xs sm:text-sm font-semibold text-lime transition-colors hover:bg-lime/10"
                  >
                    <Globe className="h-3.5 w-3.5" /> View Live
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-lime sm:text-3xl">{p.name}</h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <ul className="mt-4 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-xs sm:text-sm text-foreground/85">
                      <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lime" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous project"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary/60 transition-colors hover:border-lime/50 hover:text-lime"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to project ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === i ? "w-8 bg-lime" : "w-2 bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next project"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary/60 transition-colors hover:border-lime/50 hover:text-lime"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}