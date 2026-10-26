import { Zap, Code2, Rocket, Layers, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { SectionBadge, SectionHeading, Reveal } from "./Section";

const stats = [
  { value: "2+", label: "Years building" },
  { value: "10+", label: "Projects shipped" },
  { value: "15+", label: "Technologies" },
];

const highlights = [
  { icon: Code2, title: "Full-stack craft", desc: "React, Next.js, Node.js & Python end to end." },
  { icon: Layers, title: "Scalable systems", desc: "Clean architecture, typed APIs, solid data models." },
  { icon: Rocket, title: "AI-first builds", desc: "LLM tooling and automation baked into products." },
];

export function Overview() {
  return (
    <section id="overview" className="relative py-10 sm:py-12">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <SectionBadge icon={Zap}>Introduction</SectionBadge>
        <SectionHeading
          lead="Hey! It's Me"
          accent={profile.firstName}
          sub="A full-stack developer passionate about AI, scalable architecture, and crafting interactive digital experiences."
        />

        <div className="mt-6 sm:mt-8 grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-lime/60" />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-lime">
                Overview
              </span>
            </div>
            <h3 className="mt-2.5 text-2xl font-bold leading-[1.15] sm:text-3xl md:text-4xl">
              Building the web,{" "}
              <span className="text-lime text-glow">one system at a time.</span>
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
              I&rsquo;m a <strong className="text-foreground">Full-stack Web developer</strong> with
              experience in{" "}
              <strong className="text-foreground">
                Python, Javascript &amp; TypeScript, Tailwind CSS
              </strong>
              , and expertise in frameworks like{" "}
              <strong className="text-foreground">
                React.js, Next.js, Node.js, and database systems
              </strong>
              . I love to explore new technologies to build efficient, scalable, and user-friendly solutions.
            </p>

            {/* Stats: 3 columns even on mobile for compact layout */}
            <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="card-surface rounded-xl p-3 text-center sm:text-left sm:p-4"
                >
                  <p className="font-display text-2xl font-bold text-lime sm:text-3xl">{s.value}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground sm:text-xs">{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Highlights: compact grid */}
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 + i * 0.05 }}
                  className="group flex sm:flex-col items-center sm:items-start gap-3 rounded-xl border border-border bg-background/40 p-3 transition-colors hover:border-lime/40"
                >
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-lime/15 text-lime transition-transform duration-300 group-hover:scale-110">
                    <h.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold">{h.title}</h4>
                    <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground sm:text-xs">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#projects"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-4 py-2 text-xs sm:text-sm font-medium text-lime transition-all hover:bg-lime/20 hover:gap-3"
            >
              Explore my work <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Reveal>

          <Reveal delay={0.12} className="lg:sticky lg:top-24">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -inset-3 rounded-[2rem] border border-dashed border-lime/20"
              />
              <div className="group relative overflow-hidden rounded-[1.8rem] border border-lime/25 glow-lime">
                <img
                  src={profile.avatar}
                  alt={`Portrait of ${profile.name}`}
                  loading="lazy"
                  className="block aspect-square w-full object-contain"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, color-mix(in oklab, var(--background) 92%, transparent) 4%, transparent 55%)",
                  }}
                />

                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-2">
                  <div>
                    <p className="font-display text-lg font-semibold">{profile.name}</p>
                    <p className="font-mono text-[11px] text-lime">{profile.location}</p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-lime/40 bg-background/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-lime backdrop-blur">
                    <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-lime" />
                    Open to work
                  </span>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2.5">
                <div className="card-surface rounded-xl p-3">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                    Focus
                  </p>
                  <p className="mt-0.5 text-xs sm:text-sm font-semibold">AI &amp; Full-stack</p>
                </div>
                <div className="card-surface rounded-xl p-3">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                    Availability
                  </p>
                  <p className="mt-0.5 text-xs sm:text-sm font-semibold text-lime">Remote worldwide</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
