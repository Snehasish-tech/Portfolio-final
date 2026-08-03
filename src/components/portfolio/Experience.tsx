import { motion } from "framer-motion";
import { Wrench, Code2, Users, Globe, Award, ArrowUpRight } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { SectionBadge, SectionHeading, Reveal } from "./Section";

const icons = { code: Code2, users: Users, globe: Globe, award: Award };

const stats = [
  { value: "8.67", label: "CGPA · B.Tech IT" },
  { value: "5000+", label: "ECWoC community" },
  { value: "30h", label: "Django training" },
  { value: "2×", label: "Hackathon runs" },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/3 h-[420px]"
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

        <div className="mt-16 grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-14">
          {/* Left: sticky summary */}
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="card-surface rounded-2xl p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-lime">
                Timeline · 2024 → now
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-snug">
                Learning by building,
                <br />
                shipping in public.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                From classrooms to hackathon war-rooms and open-source issue threads — every step
                below added a tool, a habit or a teammate.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-border bg-background/50 p-3.5 transition-[border-color,transform] duration-200 will-change-transform hover:-translate-y-0.5 hover:border-lime/50"
                  >
                    <p className="font-display text-xl font-bold text-lime">{s.value}</p>
                    <p className="mt-1 text-[11px] leading-tight text-muted-foreground">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: rail of entries */}
          <div className="relative pl-8 sm:pl-10">
            <span className="absolute left-[11px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-lime via-lime/40 to-transparent sm:left-[15px]" />

            <div className="space-y-6">
              {experiences.map((e, idx) => {
                const Icon = icons[e.icon];
                return (
                  <motion.article
                    key={e.role}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative"
                  >
                    {/* node */}
                    <span className="absolute -left-8 top-6 grid h-6 w-6 place-items-center rounded-full border border-lime/40 bg-background sm:-left-10 sm:h-8 sm:w-8">
                      <span className="h-2 w-2 rounded-full bg-lime glow-lime animate-pulse-glow" />
                    </span>

                    <div className="card-surface relative overflow-hidden rounded-2xl p-6 transition-[border-color,transform] duration-300 will-change-transform group-hover:-translate-y-1 group-hover:border-lime/50 sm:p-7">
                      <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lime/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="pointer-events-none absolute right-5 top-4 font-display text-5xl font-bold text-foreground/[0.04]">
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      <div className="relative flex flex-wrap items-center gap-3">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-lime/30 bg-lime/10 text-lime">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="rounded-full border border-lime/40 bg-lime/10 px-3 py-1 font-mono text-[11px] tracking-wide text-lime">
                          {e.period}
                        </span>
                      </div>

                      <h3 className="relative mt-4 font-display text-lg font-semibold leading-snug sm:text-xl">
                        {e.role}
                      </h3>
                      <p className="relative mt-1 flex items-center gap-1.5 text-sm text-lime">
                        {e.org}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                      </p>
                      <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
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
