import { motion } from "framer-motion";
import { Wrench, Code2, Users, Globe, Award, Trophy, Github, ArrowUpRight } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { SectionBadge, SectionHeading, Reveal } from "./Section";

const icons = { code: Code2, users: Users, globe: Globe, award: Award, trophy: Trophy, github: Github };

const stats = [
  { value: "8.73", label: "CGPA · B.Tech IT" },
  { value: "500+", label: "ECWoC community" },
  { value: "30h", label: "Django training" },
  { value: "5×", label: "Hackathon runs" },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-10 sm:py-12">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/3 h-[350px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 50% 50%, color-mix(in oklab, var(--lime) 7%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 lg:px-8">
        <SectionBadge icon={Wrench}>Craft &amp; Experience</SectionBadge>
        <SectionHeading
          lead="My"
          accent="Works & Experience"
          sub="A journey through the projects I've built, the communities I've contributed to, and the experiences that shaped my growth as a developer."
        />

        <div className="mt-6 sm:mt-8 grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-8">
          {/* Left: sticky summary */}
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <div className="card-surface rounded-2xl p-5 sm:p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-lime">
                Timeline · 2024 → now
              </p>
              <h3 className="mt-2.5 font-display text-xl font-semibold leading-snug">
                Learning by building,
                <br />
                shipping in public.
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                From classrooms to hackathon war-rooms and open-source issue threads — every step
                below added a tool, a habit or a teammate.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2.5">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-border bg-background/50 p-2.5 sm:p-3 transition-[border-color,transform] duration-200 will-change-transform hover:-translate-y-0.5 hover:border-lime/50"
                  >
                    <p className="font-display text-lg font-bold text-lime sm:text-xl">{s.value}</p>
                    <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: rail of entries */}
          <div className="relative pl-7 sm:pl-9">
            <span className="absolute left-[10px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-lime via-lime/40 to-transparent sm:left-[14px]" />

            <div className="space-y-3.5">
              {experiences.map((e, idx) => {
                const Icon = icons[e.icon];
                return (
                  <motion.article
                    key={e.role}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative"
                  >
                    {/* node */}
                    <span className="absolute -left-7 top-5 grid h-5 w-5 place-items-center rounded-full border border-lime/40 bg-background sm:-left-9 sm:h-7 sm:w-7">
                      <span className="h-1.5 w-1.5 rounded-full bg-lime glow-lime animate-pulse-glow" />
                    </span>

                    <div className="card-surface relative overflow-hidden rounded-xl p-4 sm:p-5 transition-[border-color,transform] duration-300 will-change-transform group-hover:-translate-y-0.5 group-hover:border-lime/50">
                      <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-lime/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="pointer-events-none absolute right-4 top-3 font-display text-3xl font-bold text-foreground/[0.04] sm:text-4xl">
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      <div className="relative flex flex-wrap items-center gap-2.5">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-lime/30 bg-lime/10 text-lime">
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <span className="rounded-full border border-lime/40 bg-lime/10 px-2.5 py-0.5 font-mono text-[10px] tracking-wide text-lime">
                          {e.period}
                        </span>
                      </div>

                      <h3 className="relative mt-2.5 font-display text-base font-semibold leading-snug sm:text-lg">
                        {e.role}
                      </h3>
                      <p className="relative mt-0.5 flex items-center gap-1 text-xs sm:text-sm text-lime">
                        {e.org}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                      </p>
                      <p className="relative mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {e.desc}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
