import { motion } from "framer-motion";
import { Sparkles, Code2, MapPin, Zap, ArrowRight } from "lucide-react";
import { miniProjects, profile } from "@/data/portfolio";
import { SectionBadge, SectionHeading, Reveal } from "./Section";
import { Earth3D } from "./Earth3D";

export function Ideas() {
  return (
    <section id="about" className="relative overflow-hidden py-24 bg-black">
      {/* Background Ambient Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <SectionBadge icon={Sparkles}>Building Intelligent Systems</SectionBadge>
        <SectionHeading
          lead="Ideas"
          accent="Into Reality"
          sub="Crafting scalable AI tools, interactive web apps, and experimental digital systems where performance meets creativity."
        />

        {/* Bento Grid Layout - Dark Tech Edition */}
        <div className="mt-14 grid auto-rows-[minmax(220px,auto)] gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          
          {/* 1. Welcome Card */}
          <Reveal className="md:col-span-2 xl:col-span-2">
            <div className="group relative flex h-full min-h-[220px] items-center justify-center overflow-hidden rounded-[2rem] bg-zinc-950 border border-zinc-800/60 p-6 text-center transition-all duration-500 hover:border-lime/40 hover:shadow-[0_0_40px_-10px_rgba(163,230,53,0.15)] sm:min-h-[260px] sm:p-10">
              {/* Tech Grid Pattern */}
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />
              <div className="absolute inset-0 bg-gradient-to-br from-lime/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10 text-center">
                <motion.p
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="font-script text-6xl tracking-tight text-white sm:text-7xl md:text-8xl"
                >
                  Welcome
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-3 font-display text-xl text-zinc-400 sm:text-3xl"
                >
                  to my <span className="text-lime font-medium drop-shadow-[0_0_10px_rgba(163,230,53,0.3)]">Portfolio!</span>
                </motion.p>
              </div>
            </div>
          </Reveal>

          {/* 2. Innovations Card */}
          <Reveal delay={0.1} className="md:col-span-1 xl:col-span-1 xl:row-span-2">
            <div className="group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[2rem] bg-zinc-950 border border-zinc-800/60 p-6 transition-all duration-500 hover:border-lime/40 hover:shadow-[0_0_40px_-10px_rgba(163,230,53,0.15)] sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-t from-lime/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex flex-1 items-center justify-center">
                <motion.img
                  whileHover={{ y: -10, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  src={profile.octocat}
                  alt="Developer mascot"
                  loading="lazy"
                  className="animate-float size-32 object-contain drop-shadow-xl transition-transform duration-500 sm:size-44"
                />
              </div>
              <div className="relative z-10 mt-6 border-t border-zinc-800/50 pt-5">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-zinc-900 border border-zinc-800 text-lime transition-transform group-hover:scale-110 group-hover:bg-lime/10 group-hover:border-lime/30">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-white">Digital Innovations</h3>
                    <p className="mt-1 text-sm text-zinc-400">
                      Full-stack expertise across the modern JS ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 3. Timezone Card — Live 3D Globe */}
          <Reveal delay={0.15} className="md:col-span-1 xl:col-span-1 xl:row-span-2">
            <div className="group relative flex h-full min-h-[360px] flex-col justify-between overflow-hidden rounded-[2rem] bg-zinc-950 border border-zinc-800/60 p-6 transition-all duration-500 hover:border-lime/40 hover:shadow-[0_0_40px_-10px_rgba(163,230,53,0.15)] sm:min-h-[420px] sm:p-8">
              <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />
              
              <div className="relative z-10 flex flex-col items-start justify-between gap-3 sm:flex-row sm:gap-4">
                <p className="font-display text-lg leading-snug tracking-tight text-white">
                  Highly adaptable <br />
                  <span className="text-zinc-500">across global timezones</span>
                </p>
                <span className="flex shrink-0 items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-lime">
                  <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-lime" />
                  Live
                </span>
              </div>

              <div className="relative my-6 grid flex-1 place-items-center">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative size-[180px] sm:size-[220px]"
                >
                  <div className="absolute inset-4 rounded-full bg-lime/20 blur-2xl transition-opacity group-hover:opacity-80" />
                  <Earth3D className="relative h-full w-full transition-transform duration-700 group-hover:scale-110" />
                </motion.div>
                
                {/* Minimalist Orbit Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="pointer-events-none absolute size-[240px] rounded-full border border-zinc-800 sm:size-[280px]"
                >
                  <span className="absolute left-1/2 top-0 h-1 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime shadow-[0_0_15px_var(--lime)]" />
                </motion.div>
              </div>

              <div className="relative z-10 flex flex-col items-start gap-2 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <p className="flex items-center gap-2 font-mono text-sm font-medium text-white">
                  <MapPin className="h-4 w-4 text-lime" /> {profile.location}
                </p>
                <p className="font-mono text-xs font-semibold text-zinc-400 bg-zinc-800/50 px-2 py-1 rounded-md">
                  UTC +05:30
                </p>
              </div>
            </div>
          </Reveal>

          {/* 4. Orbit Card */}
          <Reveal delay={0.2} className="md:col-span-1 xl:col-span-1">
            <div className="group relative grid h-full min-h-[260px] place-items-center overflow-hidden rounded-[2rem] bg-zinc-950 border border-zinc-800/60 p-6 transition-all duration-500 hover:border-lime/40 hover:shadow-[0_0_40px_-10px_rgba(163,230,53,0.15)] sm:min-h-[300px] sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.05)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative size-48 sm:size-56">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-zinc-800 group-hover:border-zinc-700 transition-colors"
                >
                  {["⚛", "◆", "🐍", "TS", "▲"].map((t, i) => (
                    <span
                      key={i}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{ transform: `rotate(${i * 72}deg)` }}
                    >
                      <div
                        className="grid size-10 -translate-y-[96px] place-items-center rounded-full border border-zinc-700 bg-zinc-900 text-sm text-zinc-300 shadow-xl transition-all duration-300 hover:scale-125 hover:border-lime/50 hover:text-lime hover:bg-zinc-950 sm:-translate-y-[112px]"
                        style={{ transform: `rotate(-${i * 72}deg)` }}
                      >
                        {t}
                      </div>
                    </span>
                  ))}
                </motion.div>
                <div className="absolute inset-[30%] grid place-items-center rounded-full border border-zinc-800 bg-zinc-900 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:border-lime/30">
                  <img src={profile.octocat} alt="Stack" className="size-10 object-contain" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* 5. Selected Works Marquee */}
          <Reveal delay={0.25} className="md:col-span-2 xl:col-start-2 xl:col-span-2 xl:row-start-3">
            <div className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[2rem] bg-zinc-950 border border-zinc-800/60 transition-all duration-500 hover:border-lime/40 hover:shadow-[0_0_40px_-10px_rgba(163,230,53,0.15)] sm:min-h-[340px]">
              <div className="flex items-center justify-between px-6 pt-6 sm:px-8 sm:pt-8">
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white">Selected Works</h3>
                  <p className="mt-1.5 text-sm text-zinc-400">
                    SaaS products, AI tools & full-stack builds
                  </p>
                </div>
                <a
                  href="#projects"
                  className="hidden items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-lime/10 hover:border-lime/30 hover:text-lime sm:flex"
                >
                  View All <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Scrollable / Marquee Section */}
              <div className="flex flex-1 items-center overflow-x-auto overflow-y-hidden px-6 pb-6 pt-4 scrollbar-hide lg:overflow-hidden sm:px-8 sm:pb-8">
                <div className="flex w-max gap-4 lg:animate-marquee-left lg:will-change-transform lg:group-hover:[animation-play-state:paused]">
                  {[...miniProjects, ...miniProjects].map((p, i) => (
                    <article
                      key={i}
                      className="w-[260px] shrink-0 snap-start rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 transition-all hover:-translate-y-1 hover:border-lime/30 hover:bg-zinc-900 sm:w-[280px]"
                    >
                      <div className="flex items-center justify-between">
                        <div className="grid h-10 w-10 place-items-center rounded-xl bg-zinc-800 border border-zinc-700 text-lime">
                          <Code2 className="h-5 w-5" />
                        </div>
                      </div>
                      <h4 className="mt-4 text-base font-semibold text-white">{p.title}</h4>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-400">
                        {p.desc}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-zinc-800/50 px-2 py-1 font-mono text-[11px] text-zinc-400"
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