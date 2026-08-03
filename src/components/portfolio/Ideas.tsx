import { motion } from "framer-motion";
import { Sparkles, Code2, MapPin, Zap } from "lucide-react";
import { miniProjects, profile } from "@/data/portfolio";
import { SectionBadge, SectionHeading, Reveal } from "./Section";
import { Earth3D } from "./Earth3D";


export function Ideas() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <SectionBadge icon={Sparkles}>Building Intelligent Systems</SectionBadge>
        <SectionHeading
          lead="Ideas"
          accent="Into Reality"
          sub="Crafting scalable AI tools, interactive web apps, and experimental digital systems where performance meets creativity."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* Welcome card */}
          <Reveal className="lg:col-span-2 lg:col-start-1 lg:row-start-1">
            <div className="card-surface flex h-full min-h-[260px] items-center justify-center rounded-3xl p-10">
              <div className="text-center">
                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="font-script text-6xl text-lime text-glow sm:text-7xl md:text-8xl"
                >
                  Welcome
                </motion.p>
                <p className="mt-2 font-display text-3xl text-lime sm:text-4xl">to my Portfolio!</p>
              </div>
            </div>
          </Reveal>

          {/* Innovations card */}
          <Reveal delay={0.1} className="lg:col-start-3 lg:row-start-1 lg:row-span-2">
            <div className="card-surface flex h-full flex-col justify-between rounded-3xl p-8">
              <div className="flex flex-1 items-center justify-center">
                <motion.img
                  src={profile.octocat}
                  alt="Developer mascot"
                  loading="lazy"
                  className="animate-float h-40 w-40 object-contain"
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
          <Reveal delay={0.05} className="lg:col-start-1 lg:row-start-2 lg:row-span-2">
            <div className="card-surface group relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl p-8">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at 50% 55%, color-mix(in oklab, var(--lime) 14%, transparent), transparent 62%)",
                }}
              />
              <div className="relative z-10 flex items-start justify-between gap-4">
                <p className="font-display text-lg leading-snug">
                  I&rsquo;m highly adaptable
                  <br />
                  across global time zones
                </p>
                <span className="flex items-center gap-1.5 rounded-full border border-lime/30 bg-lime/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-lime">
                  <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-lime" />
                  Live
                </span>
              </div>

              <div className="relative my-6 grid flex-1 place-items-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="relative h-[260px] w-[260px]"
                >
                  <div className="absolute inset-6 rounded-full glow-lime-strong" />
                  <Earth3D className="relative h-full w-full transition-transform duration-700 group-hover:scale-105" />
                </motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                  className="pointer-events-none absolute h-[300px] w-[300px] rounded-full border border-dashed border-lime/25"
                >
                  <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime glow-lime" />
                </motion.div>
              </div>

              <div className="relative z-10 flex items-end justify-between gap-3">
                <p className="flex items-center gap-2 font-mono text-sm text-lime">
                  <MapPin className="h-4 w-4" /> {profile.location}
                </p>
                <p className="font-mono text-xs text-muted-foreground">UTC +05:30</p>
              </div>
            </div>
          </Reveal>


          {/* Orbit card */}
          <Reveal delay={0.12} className="lg:col-start-2 lg:row-start-2">
            <div className="card-surface relative grid h-full min-h-[300px] place-items-center overflow-hidden rounded-3xl p-8">
              <div className="relative h-56 w-56">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-lime/25"
                >
                  {["⚛", "◆", "🐍", "TS", "▲"].map((t, i) => (
                    <span
                      key={i}
                      className="absolute left-1/2 top-1/2 -ml-4 -mt-4 grid h-8 w-8 place-items-center rounded-lg border border-border bg-secondary text-xs"
                      style={{
                        transform: `rotate(${i * 72}deg) translateY(-112px) rotate(-${i * 72}deg)`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </motion.div>
                <div className="absolute inset-[26%] grid place-items-center rounded-full border border-lime/50 bg-lime/5 glow-lime">
                  <img src={profile.octocat} alt="" className="h-14 w-14 object-contain" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Selected works marquee */}
          <Reveal delay={0.18} className="lg:col-start-2 lg:col-span-2 lg:row-start-3">
            <div className="card-surface relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-3xl">
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
              <div className="marquee-mask flex flex-1 items-start gap-4 overflow-hidden p-5">

                <div className="animate-marquee-left flex w-max gap-4">
                  {[...miniProjects, ...miniProjects].map((p, i) => (
                    <article
                      key={i}
                      className="w-[230px] shrink-0 rounded-2xl border border-border bg-background/60 p-4"
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
