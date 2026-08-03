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

export function Projects() {
  const [i, setI] = useState(0);
  const p = projects[i];

  const go = (dir: number) => setI((v) => (v + dir + projects.length) % projects.length);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <SectionBadge icon={Briefcase}>Featured Projects</SectionBadge>
        <SectionHeading
          lead="Selected"
          accent="Work & Experiments"
          sub="A collection of high-performance web applications and AI-driven tools built with a focus on scalability, clean architecture, and user experience."
        />

        <div className="mt-16">
          <AnimatePresence mode="wait">
            <motion.article
              key={p.name}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="card-surface grid gap-10 rounded-3xl p-8 md:p-12 lg:grid-cols-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative grid size-48 place-items-center sm:size-56">
                  <div className="absolute inset-0 rounded-full bg-lime/15 blur-3xl" />
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={`${p.name} logo`}
                      loading="lazy"
                      className="relative size-44 rounded-full object-contain"
                    />
                  ) : (
                    <div className="relative grid h-44 w-44 place-items-center rounded-full border border-lime/30 bg-background/60 text-center shadow-[0_0_50px_rgba(163,230,53,0.12)]">
                      <span className="font-display text-4xl font-bold text-lime">
                        {projectInitials(p.name)}
                      </span>
                    </div>
                  )}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{p.tagline}</p>

                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s.label}
                      style={{ backgroundColor: s.color }}
                      className="rounded px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white"
                    >
                      {s.label}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap justify-center gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                  >
                    <Github className="h-4 w-4" /> View on GitHub
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-lime/50 px-5 py-2.5 text-sm font-semibold text-lime transition-colors hover:bg-lime/10"
                  >
                    <Globe className="h-4 w-4" /> View Live
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-lime sm:text-4xl">{p.name}</h3>
                <p className="mt-5 leading-relaxed text-muted-foreground">{p.desc}</p>
                <ul className="mt-7 space-y-4">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[15px] text-foreground/85">
                      <Sparkles className="mt-1 h-4 w-4 shrink-0 text-lime" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-4">
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
