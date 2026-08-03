import { Zap, Code2, Rocket, Layers, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { SectionBadge, SectionHeading, Reveal } from "./Section";

const stats = [
  { value: "3+", label: "Years building" },
  { value: "25+", label: "Projects shipped" },
  { value: "15+", label: "Technologies" },
];

const highlights = [
  { icon: Code2, title: "Full-stack craft", desc: "React, Next.js, Node.js & Python end to end." },
  { icon: Layers, title: "Scalable systems", desc: "Clean architecture, typed APIs, solid data models." },
  { icon: Rocket, title: "AI-first builds", desc: "LLM tooling and automation baked into products." },
];

export function Overview() {
  return (
    <section id="overview" className="relative py-24">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <SectionBadge icon={Zap}>Introduction</SectionBadge>
        <SectionHeading
          lead="Hey! It's Me"
          accent={profile.firstName}
          sub="A full-stack developer passionate about AI, scalable architecture, and crafting interactive digital experiences."
        />

        <div className="mt-20 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-lime/60" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-lime">
                Overview
              </span>
            </div>
            <h3 className="mt-5 text-5xl font-bold leading-[1.05] sm:text-6xl">
              Building the web,
              <br />
              <span className="text-lime text-glow">one system at a time.</span>
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I&rsquo;m a <strong className="text-foreground">Full-stack Web developer</strong> with
              experience in{" "}
              <strong className="text-foreground">
                Python, Javascript &amp; TypeScript, Tailwind CSS
              </strong>
              , and expertise in frameworks like{" "}
              <strong className="text-foreground">
                React.js, Next.js, Node.js, and database systems
              </strong>
              . I love to explore new technologies to refine my skills and contribute to interactive
              projects — building efficient, scalable, and user-friendly solutions that solve
              real-world problems.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card-surface rounded-2xl p-4"
                >
                  <p className="font-display text-3xl font-bold text-lime">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-background/40 p-4 transition-colors hover:border-lime/40"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lime/15 text-lime transition-transform duration-300 group-hover:scale-110">
                    <h.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">{h.title}</h4>
                    <p className="mt-0.5 text-sm text-muted-foreground">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#projects"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-5 py-2.5 text-sm font-medium text-lime transition-all hover:bg-lime/20 hover:gap-3"
            >
              Explore my work <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>

          <Reveal delay={0.12} className="lg:sticky lg:top-28">
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -inset-6 rounded-[2.5rem] border border-dashed border-lime/20"
              />
              <div className="group relative overflow-hidden rounded-[2rem] border border-lime/25 glow-lime">
                <img
                  src={profile.avatar}
                  alt={`Portrait of ${profile.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, color-mix(in oklab, var(--background) 92%, transparent) 4%, transparent 55%)",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(115deg, transparent 40%, color-mix(in oklab, var(--lime) 22%, transparent) 50%, transparent 60%)",
                    }}
                  />
                </div>

                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
                  <div>
                    <p className="font-display text-xl font-semibold">{profile.name}</p>
                    <p className="font-mono text-xs text-lime">{profile.location}</p>
                  </div>
                  <span className="flex items-center gap-2 rounded-full border border-lime/40 bg-background/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-lime backdrop-blur">
                    <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-lime" />
                    Open to work
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="card-surface rounded-2xl p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Focus
                  </p>
                  <p className="mt-1 text-sm font-semibold">AI &amp; Full-stack</p>
                </div>
                <div className="card-surface rounded-2xl p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Availability
                  </p>
                  <p className="mt-1 text-sm font-semibold text-lime">Remote worldwide</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
