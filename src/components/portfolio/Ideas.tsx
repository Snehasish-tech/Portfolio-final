import { motion } from "framer-motion";
import { Sparkles, Code2, MapPin, Zap } from "lucide-react";
import { miniProjects, profile } from "@/data/portfolio";
import { SectionBadge, SectionHeading, Reveal } from "./Section";
import { Earth3D } from "./Earth3D";


export function Ideas() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <SectionBadge icon={Sparkles}>Building Intelligent Systems</SectionBadge>
        <SectionHeading
          lead="Ideas"
          accent="Into Reality"
          sub="Crafting scalable AI tools, interactive web apps, and experimental digital systems where performance meets creativity."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {/* Welcome card */}
          <Reveal className="sm:col-span-2 xl:col-span-2">
            <div className="card-surface flex h-full min-h-[220px] items-center justify-center rounded-3xl p-6 text-center sm:min-h-[260px] sm:p-10">
              <div className="text-center">
                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="font-script text-5xl text-lime text-glow sm:text-7xl md:text-8xl"
                >
                  Welcome
                </motion.p>
                <p className="mt-2 font-display text-2xl text-lime sm:text-4xl">to my Portfolio!</p>
              </div>
            </div>
          </Reveal>

          {/* Innovations card */}
          <Reveal delay={0.1} className="sm:col-start-2 xl:col-start-3 xl:row-span-2">
            <div className="card-surface flex h-full min-h-[260px] flex-col justify-between rounded-3xl p-6 sm:p-8">
              <div className="flex flex-1 items-center justify-center">
                <motion.img
                  src={profile.octocat}
                  alt="Developer mascot"
                  loading="lazy" // Changed h-28 w-28 to size-28, sm:h-40 sm:w-40 to sm:size-40
                  className="animate-float size-28 object-contain sm:size-40"
                />
              </div>
              <div>
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-lime/15 text-lime">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">Focused on latest digital innovations</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Full-stack expertise across the modern JS ecosystem.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Timezone card — live 3D globe */}
          <Reveal delay={0.05} className="sm:col-start-1 sm:row-start-2 sm:row-span-2 xl:col-start-1 xl:row-span-2">
            <div className="card-surface group relative flex h-full min-h-[360px] flex-col justify-between overflow-hidden rounded-3xl p-5 sm:min-h-[420px] sm:p-8">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at 50% 55%, color-mix(in oklab, var(--lime) 14%, transparent), transparent 62%)",
                }}
              />
              <div className="relative z-10 flex flex-col items-start justify-between gap-3 sm:flex-row sm:gap-4">
                <p className="font-display text-base leading-snug sm:text-lg">
                  I&rsquo;m highly adaptable
                  <br />
                  across global time zones
                </p>
                <span className="flex items-center gap-1.5 rounded-full border border-lime/30 bg-lime/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-lime">
                  <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-lime" />
                  Live
                </span>
              </div>

              <div className="relative my-4 grid flex-1 place-items-center sm:my-6">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="relative size-[180px] max-w-full aspect-square sm:size-[220px] lg:size-[260px]" // Made globe container responsive
                >
                  <div className="absolute inset-6 rounded-full glow-lime-strong" />
                  <Earth3D className="relative h-full w-full transition-transform duration-700 group-hover:scale-105" />
                </motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                  className="pointer-events-none absolute rounded-full border border-dashed border-lime/25 size-[220px] max-w-full aspect-square sm:size-[260px] lg:size-[300px]"
                >
                  <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime glow-lime" />
                </motion.div>
              </div>
              <div className="relative z-10 flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
                <p className="flex items-center gap-2 font-mono text-sm text-lime">
                  <MapPin className="h-4 w-4" /> {profile.location}
                </p>
                <p className="font-mono text-xs text-muted-foreground">UTC +05:30</p>
              </div>
            </div>
          </Reveal>


          {/* Orbit card */}
          <Reveal delay={0.12} className="sm:col-start-2 sm:row-start-2 xl:col-start-2 xl:row-start-2">
            <div className="card-surface relative grid h-full min-h-[260px] place-items-center overflow-hidden rounded-3xl p-6 sm:min-h-[300px] sm:p-8">
              <div className="relative size-44 max-w-full aspect-square sm:size-56">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-lime/25"
                >
                  {["⚛", "◆", "🐍", "TS", "▲"].map((t, i) => (
                    <span // Use nested divs to apply responsive translate and rotation for the orbit
                      key={i}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{ transform: `rotate(${i * 72}deg)` }}
                    >
                      <div
                        className="grid size-8 -translate-y-[88px] place-items-center rounded-lg border border-border bg-secondary text-xs sm:-translate-y-[112px]"
                        style={{ transform: `rotate(-${i * 72}deg)` }}
                      >
                        {t}
                      </div>
                    </span>
                  ))}
                </motion.div>
                <div className="absolute inset-[26%] grid place-items-center rounded-full border border-lime/50 bg-lime/5 glow-lime">
                  <img src={profile.octocat} alt="" className="size-14 object-contain" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Selected works marquee */}
          <Reveal delay={0.18} className="sm:col-span-2 xl:col-start-2 xl:col-span-2 xl:row-start-3">
            <div className="card-surface relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-3xl sm:min-h-[340px]">
              <div className="px-6 pt-6">
                <h3 className="font-display text-xl font-semibold">Selected Works</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  SaaS products, AI tools &amp; full-stack builds — scroll to explore →
                </p>
                <a
                  href="#projects"
                  className="mt-2 inline-block text-sm font-medium text-lime hover:underline"
                >
                  View all projects
                </a>
              </div>
              <div className="flex flex-1 items-start gap-4 overflow-x-auto overflow-y-hidden p-5 pb-6 lg:overflow-hidden lg:pb-5">

                <div className="flex w-max gap-4 lg:animate-marquee-left lg:will-change-transform">
                  {[...miniProjects, ...miniProjects].map((p, i) => (
                    <article
                      key={i} // Adjusted width to be responsive on small screens, capped by max-w
                      className="w-[calc(100vw-8rem)] max-w-[230px] shrink-0 snap-start rounded-2xl border border-border bg-background/60 p-4 sm:w-[230px]"
                    >
                      <div className="grid h-7 w-7 place-items-center rounded-md bg-lime/15 text-lime">
                        <Code2 className="h-4 w-4" />
                      </div>
                      <h4 className="mt-3 text-sm font-semibold">{p.title}</h4>
                      <p className="mt-2 line-clamp-5 text-xs leading-relaxed text-muted-foreground">
                        {p.desc}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded border border-lime/30 bg-lime/10 px-1.5 py-0.5 font-mono text-[10px] text-lime"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

          </Reveal>
        </div>
      </div>
    </section>
  );
}
