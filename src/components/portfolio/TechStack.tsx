import { useMemo, useState, ElementType } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Layers,
  Brain,
  Cloud,
  MonitorSmartphone,
  Server,
  Database,
  Palette,
  Wrench,
  Grid3x3, // FIXED: Changed to Grid3x3 (lowercase 'x') to fix VS Code Lucide error
  Code2,
  Sparkles,
} from "lucide-react";
import { techGroups, learning, techSlugs } from "@/data/portfolio";
import { SectionBadge, SectionHeading, Reveal } from "./Section";

// FIXED: Changed `any` to `ElementType` for strict TypeScript compliance
const groupIcons: Record<string, ElementType> = {
  Languages: Code2,
  "AI & Data": Brain,
  "Cloud & DevOps": Cloud,
  Frontend: MonitorSmartphone,
  Backend: Server,
  Database: Database,
  Design: Palette,
  Tools: Wrench,
};

// Original Brand Colors from SimpleIcons
const iconUrl = (name: string) => {
  const slug = techSlugs[name] ?? name.toLowerCase().replace(/[^a-z0-9]/g, "");
  return `https://cdn.simpleicons.org/${slug}`;
};

// --- Framer Motion Variants for Smooth Staggered Animations ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.02, staggerDirection: -1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 350, damping: 25 }
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

function TechCard({ name }: { name: string }) {
  return (
    <motion.div
      variants={cardVariants}
      layout
      className="group relative flex h-[64px] items-center gap-3.5 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] px-4 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-lime/40 hover:bg-white/[0.04] hover:shadow-[0_10px_30px_-10px_rgba(163,230,53,0.2)]"
    >
      {/* Subtle Hover Glow behind the card */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(120px circle at 50% 50%, color-mix(in oklab, var(--lime) 15%, transparent), transparent 100%)",
        }}
      />
      
      {/* ENHANCED LOGO CONTAINER: Added a soft frosted glass background so dark logos pop out brightly */}
      <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/10 shadow-inner transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3 group-hover:border-lime/50 group-hover:bg-white/20 group-hover:shadow-[0_0_20px_rgba(163,230,53,0.3)]">
        
        {/* Soft light burst to ensure contrast for dark original logos */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 to-transparent opacity-50 mix-blend-overlay" />
        
        <img
          src={iconUrl(name)}
          alt={`${name} icon`}
          aria-hidden="true"
          loading="lazy"
          width={22}
          height={22}
          // BRIGHTNESS ENHANCEMENT: Added brightness-110 & contrast-125
          className="relative z-10 h-[22px] w-[22px] object-contain brightness-110 contrast-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.25)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
          onError={(e) => {
            // FIXED: Safe TypeScript event casting
            const target = e.target as HTMLImageElement;
            target.style.visibility = "hidden";
          }}
        />
      </span>
      
      <span className="relative z-10 min-w-0 truncate text-sm font-semibold tracking-wide text-foreground/80 transition-colors duration-300 group-hover:text-lime">
        {name}
      </span>
    </motion.div>
  );
}

export function TechStack() {
  const [active, setActive] = useState<string>("All");

  const tabs = useMemo(() => ["All", ...techGroups.map((g) => g.group)], []);
  const total = useMemo(() => techGroups.reduce((n, g) => n + g.items.length, 0), []);

  return (
    <section id="tech" className="relative py-24 overflow-hidden">
      {/* Ambient Background Glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/4 h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, color-mix(in oklab, var(--lime) 5%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 lg:px-8">
        <SectionBadge icon={Layers}>Technology Stack</SectionBadge>
        <SectionHeading
          lead="Tools &"
          accent="Technologies"
          sub="Organised by discipline — the languages, frameworks and tools I reach for when building and shipping products."
        />

        {/* Fluid Filter Tabs */}
        <Reveal>
          <div className="mt-14 flex min-h-[44px] flex-wrap items-center justify-center gap-2.5">
            {tabs.map((t) => {
              const Icon = t === "All" ? Grid3x3 : (groupIcons[t] ?? Layers);
              const count =
                t === "All" ? total : (techGroups.find((g) => g.group === t)?.items.length ?? 0);
              const isActive = active === t;
              
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setActive(t)}
                  aria-pressed={isActive}
                  className="relative flex h-11 items-center gap-2.5 rounded-full px-5 text-sm outline-none transition-transform duration-300 hover:-translate-y-0.5 active:scale-95"
                >
                  {isActive ? (
                    <motion.div
                      layoutId="activeTechTabIndicator"
                      className="absolute inset-0 rounded-full bg-lime shadow-[0_0_20px_rgba(163,230,53,0.4)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  ) : (
                    <div className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.03] transition-colors hover:border-lime/30 hover:bg-white/[0.06]" />
                  )}

                  <span
                    className={`relative z-10 flex items-center gap-2 font-semibold tracking-wide ${
                      isActive ? "text-[#0a0f1e]" : "text-muted-foreground hover:text-lime"
                    }`}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                    {t}
                    <span
                      className={`ml-1 rounded-full px-2 py-0.5 font-mono text-[10px] tabular-nums ${
                        isActive 
                          ? "bg-[#0a0f1e]/20 text-[#0a0f1e]" 
                          : "bg-white/5 text-muted-foreground"
                      }`}
                    >
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Staggered Grid Rendering */}
        <motion.div layout className="mt-16 space-y-16">
          <AnimatePresence mode="popLayout">
            {techGroups
              .filter((g) => active === "All" || active === g.group)
              .map((g) => {
                const Icon = groupIcons[g.group] ?? Layers;
                return (
                  <motion.section
                    key={g.group}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-lime/30 bg-lime/10 text-lime shadow-[0_0_15px_rgba(163,230,53,0.15)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-2xl font-bold tracking-tight text-foreground/90">
                        {g.group}
                      </h3>
                      <span className="h-[2px] flex-1 rounded-full bg-gradient-to-r from-border to-transparent" />
                    </div>
                    
                    <p className="mt-4 max-w-2xl text-[15px] text-muted-foreground/80 leading-relaxed">
                      {g.note}
                    </p>
                    
                    {/* The Staggered Cards Grid */}
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="mt-8 grid auto-rows-[64px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
                    >
                      {g.items.map((name) => (
                        <TechCard key={name} name={name} />
                      ))}
                    </motion.div>
                  </motion.section>
                );
              })}
          </AnimatePresence>
        </motion.div>

        {/* Currently exploring Section - Premium Glow Card */}
        <Reveal>
          <div className="relative mt-24 overflow-hidden rounded-3xl border border-lime/20 bg-[#0a0f1e]/50 p-8 shadow-[0_0_40px_rgba(163,230,53,0.06)] backdrop-blur-xl sm:flex sm:items-center sm:justify-between sm:p-10">
            {/* Inner subtle gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-lime/5 to-transparent opacity-50" />
            
            <div className="relative z-10 min-w-0">
              <p className="flex items-center gap-2.5 font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-lime">
                <Sparkles className="h-4 w-4 shrink-0 animate-pulse" /> 
                Currently exploring
              </p>
              <p className="mt-3 text-[15px] text-muted-foreground/90">
                Levelling up beyond the frontend — backend systems, cloud, and AI tooling.
              </p>
            </div>
            
            <div className="relative z-10 mt-6 flex flex-wrap gap-2.5 sm:mt-0">
              {learning.map((l) => (
                <span
                  key={l}
                  className="cursor-default rounded-full border border-lime/30 bg-lime/10 px-4 py-2 text-sm font-semibold tracking-wide text-lime transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-lime/80 hover:bg-lime/20 hover:shadow-[0_0_20px_rgba(163,230,53,0.25)]"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}