import { motion, animate } from "framer-motion";
import { Sparkles, MapPin, Terminal, GitBranch, GitCommitHorizontal, Star, Coffee, Clock, FolderGit2, GitPullRequest } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionBadge, SectionHeading, Reveal } from "./Section";
import { Earth3D } from "./Earth3D";
import { useEffect, useRef, useState } from "react";

/* ── Animated counter hook ── */
function useCountUp(target: number, duration = 2, startOnView = true) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!startOnView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const mv = { v: 0 };
          const controls = animate(mv.v, target, {
            duration,
            ease: "easeOut",
            onUpdate: (latest) => {
              if (ref.current) ref.current.textContent = Math.round(latest).toLocaleString();
            },
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, startOnView]);

  return ref;
}

const devStats = [
  { icon: GitCommitHorizontal, label: "Total Commits",  value: 430,  suffix: "+", color: "text-lime",    bar: 0.82 },
  { icon: FolderGit2,          label: "Repositories",   value: 28,   suffix: "",  color: "text-sky-400", bar: 0.56 },
  { icon: GitPullRequest,      label: "Pull Requests",  value: 64,   suffix: "+", color: "text-violet-400", bar: 0.64 },
  { icon: Star,                label: "Stars Earned",   value: 17,   suffix: "",  color: "text-yellow-400", bar: 0.34 },
  { icon: Clock,               label: "Hours Coded",    value: 1200, suffix: "+", color: "text-orange-400", bar: 0.75 },
  { icon: Coffee,              label: "Coffees Downed", value: 312,  suffix: "☕", color: "text-amber-300", bar: 0.62 },
];

function StatRow({ stat, delay }: { stat: typeof devStats[0]; delay: number }) {
  const ref = useCountUp(stat.value, 1.8);
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group/row flex items-center gap-3"
    >
      <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-zinc-800 bg-zinc-900 ${stat.color} transition-colors group-hover/row:border-zinc-700`}>
        <stat.icon className="h-4 w-4" />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-baseline justify-between">
          <p className="text-xs text-zinc-500">{stat.label}</p>
          <p className="font-mono text-sm font-semibold text-white">
            <span ref={ref}>0</span>
            <span className={`ml-0.5 text-xs ${stat.color}`}>{stat.suffix}</span>
          </p>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-zinc-800">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: stat.bar }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.3, duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className={`h-full rounded-full bg-gradient-to-r ${
              stat.color === "text-lime"         ? "from-lime/70 to-lime" :
              stat.color === "text-sky-400"      ? "from-sky-600 to-sky-400" :
              stat.color === "text-violet-400"   ? "from-violet-600 to-violet-400" :
              stat.color === "text-yellow-400"   ? "from-yellow-600 to-yellow-400" :
              stat.color === "text-orange-400"   ? "from-orange-600 to-orange-400" :
                                                   "from-amber-600 to-amber-300"
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function Ideas() {
  return (
    <section id="about" className="relative overflow-hidden bg-black py-10 sm:py-12">
      {/* Background Ambient Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <SectionBadge icon={Sparkles}>Building Intelligent Systems</SectionBadge>
        <SectionHeading
          lead="Ideas"
          accent="Into Reality"
          sub="Crafting scalable AI tools, interactive web apps, and experimental digital systems where performance meets creativity."
        />

        {/* Bento Grid Layout - Dark Tech Edition */}
        <div className="mt-6 grid auto-rows-[minmax(140px,auto)] grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
          
          {/* 1. Welcome Card */}
          <Reveal className="md:col-span-2 xl:col-span-2">
            <div className="group relative flex h-full min-h-[140px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-zinc-800/60 bg-zinc-950 p-4 text-center transition-all duration-500 hover:border-lime/40 hover:shadow-[0_0_40px_-10px_rgba(163,230,53,0.15)] sm:min-h-[160px] sm:p-6">
              {/* Tech Grid Pattern */}
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />
              <div className="absolute inset-0 bg-gradient-to-br from-lime/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10 text-center">
                <motion.p
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="font-script text-4xl tracking-tight text-white sm:text-5xl md:text-6xl"
                >
                  Welcome
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-1.5 font-display text-base text-zinc-400 sm:text-xl"
                >
                  to my <span className="text-lime font-medium drop-shadow-[0_0_10px_rgba(163,230,53,0.3)]">Portfolio!</span>
                </motion.p>
              </div>
            </div>
          </Reveal>

          {/* 2. Innovations Card */}
          <Reveal delay={0.1} className="md:col-span-1 xl:col-span-1 xl:row-span-2">
            <div className="group relative flex h-full min-h-[200px] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-zinc-800/60 bg-zinc-950 p-4 sm:p-5 transition-all duration-500 hover:border-lime/40 hover:shadow-[0_0_40px_-10px_rgba(163,230,53,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-t from-lime/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                <span className="flex items-center gap-2 text-lime">
                  <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-lime" />
                  Build signal
                </span>
                <span className="flex items-center gap-1.5">
                  <Terminal className="h-3.5 w-3.5" /> v2.0
                </span>
              </div>

              <div className="relative flex flex-1 items-center justify-center py-2 sm:py-3">
                <div className="absolute h-24 w-24 sm:h-28 sm:w-28 rounded-full border border-dashed border-lime/20 transition-transform duration-700 group-hover:rotate-180" />
                <motion.img
                  whileHover={{ y: -8, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  src={profile.octocat}
                  alt="Developer mascot"
                  loading="lazy"
                  className="relative z-10 size-20 animate-float object-contain drop-shadow-xl transition-transform duration-500 sm:size-28"
                />
              </div>

              <div className="relative z-10 border-t border-zinc-800/50 pt-3">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Current mode</p>
                    <h3 className="mt-0.5 text-lg font-semibold tracking-tight text-white">Ship mode<span className="text-lime">.</span></h3>
                  </div>
                  <GitBranch className="h-4 w-4 text-lime transition-transform duration-300 group-hover:-rotate-12" />
                </div>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-zinc-400">
                  Turning curious ideas into useful, full-stack systems.
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {['AI', 'Web', 'Open source'].map((tag) => (
                    <span key={tag} className="rounded-full border border-zinc-800 bg-zinc-900 px-2.5 py-0.5 font-mono text-[10px] text-zinc-400 transition-colors group-hover:border-lime/20 group-hover:text-lime">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* 3. Timezone Card — Live 3D Globe */}
          <Reveal delay={0.15} className="md:col-span-1 xl:col-span-1 xl:row-span-2">
            <div className="group relative flex h-full min-h-[250px] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-zinc-800/60 bg-zinc-950 p-4 sm:p-5 transition-all duration-500 hover:border-lime/40 hover:shadow-[0_0_40px_-10px_rgba(163,230,53,0.15)] sm:min-h-[290px]">
              <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />
              
              <div className="relative z-10 flex flex-col items-start justify-between gap-2 sm:flex-row sm:gap-3">
                <p className="font-display text-base leading-snug tracking-tight text-white">
                  Highly adaptable <br />
                  <span className="text-zinc-500">across global timezones</span>
                </p>
                <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-lime/30 bg-lime/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-lime">
                  <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-lime" />
                  Live
                </span>
              </div>

              <div className="relative my-3 grid flex-1 place-items-center">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative size-[130px] sm:size-[160px]"
                >
                  <div className="absolute inset-3 rounded-full bg-lime/20 blur-2xl transition-opacity group-hover:opacity-80" />
                  <Earth3D className="relative h-full w-full transition-transform duration-700 group-hover:scale-110" />
                </motion.div>
                
                {/* Minimalist Orbit Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="pointer-events-none absolute size-[175px] rounded-full border border-zinc-800 sm:size-[210px]"
                >
                  <span className="absolute left-1/2 top-0 h-1 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime shadow-[0_0_15px_var(--lime)]" />
                </motion.div>
              </div>

              <div className="relative z-10 flex items-center justify-between rounded-xl border border-zinc-800/50 bg-zinc-900/50 p-2.5 sm:p-3">
                <p className="flex items-center gap-1.5 font-mono text-xs font-medium text-white">
                  <MapPin className="h-3.5 w-3.5 text-lime" /> {profile.location}
                </p>
                <p className="font-mono text-[11px] font-semibold text-zinc-400 bg-zinc-800/50 px-2 py-0.5 rounded">
                  UTC +05:30
                </p>
              </div>
            </div>
          </Reveal>

          {/* 4. Orbit Card */}
          <Reveal delay={0.2} className="md:col-span-1 xl:col-span-1">
            <div className="group relative grid h-full min-h-[190px] place-items-center overflow-hidden rounded-[1.5rem] border border-zinc-800/60 bg-zinc-950 p-4 transition-all duration-500 hover:border-lime/40 hover:shadow-[0_0_40px_-10px_rgba(163,230,53,0.15)] sm:min-h-[220px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.05)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative size-36 sm:size-42">
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
                        className="grid size-8 -translate-y-[70px] place-items-center rounded-full border border-zinc-700 bg-zinc-900 text-xs text-zinc-300 shadow-xl transition-all duration-300 hover:scale-125 hover:border-lime/50 hover:bg-zinc-950 hover:text-lime sm:-translate-y-[84px]"
                        style={{ transform: `rotate(-${i * 72}deg)` }}
                      >
                        {t}
                      </div>
                    </span>
                  ))}
                </motion.div>
                <div className="absolute inset-[30%] grid place-items-center rounded-full border border-zinc-800 bg-zinc-900 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:border-lime/30">
                  <img src={profile.octocat} alt="Stack" className="size-8 sm:size-9 object-contain" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* 5. Fun Dev Stats Card - 2-column layout to save vertical space */}
          <Reveal delay={0.25} className="md:col-span-2 xl:col-start-2 xl:col-span-2 xl:row-start-3">
            <div className="group relative flex h-full min-h-[200px] flex-col overflow-hidden rounded-[1.5rem] border border-zinc-800/60 bg-zinc-950 transition-all duration-500 hover:border-lime/40 hover:shadow-[0_0_40px_-10px_rgba(163,230,53,0.15)]">
              {/* subtle grid bg */}
              <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:18px_18px]" />
              <div className="absolute inset-0 bg-gradient-to-br from-lime/5 via-transparent to-violet-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between px-4 pt-4 sm:px-6 sm:pt-5">
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-white">Dev Stats</h3>
                  <p className="mt-0.5 text-xs text-zinc-400">Numbers that tell my story 📊</p>
                </div>
                <a
                  href="https://github.com/Snehasish-tech"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-lime/10 hover:border-lime/30 hover:text-lime sm:flex"
                >
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
                  Active Coder
                </a>
              </div>

              {/* Stats Grid - 2 columns for compact height */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-2.5 px-4 py-3 sm:px-6 sm:py-4">
                {devStats.map((stat, i) => (
                  <StatRow key={stat.label} stat={stat} delay={i * 0.05} />
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}