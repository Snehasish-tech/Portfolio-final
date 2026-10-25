import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Github, ArrowUpRight, Activity, Code2,
  Users, Flame, TrendingUp, Calendar, BookOpen, Star, GitFork,
} from "lucide-react";
import { SectionBadge, SectionHeading, Reveal } from "./Section";

const USERNAME = "Snehasish-tech";
const CONTRIBUTION_CHART_URL = `https://ghchart.rshah.org/40916c/${USERNAME}`;

/* ─── Language colour map ─── */
const LANG_COLORS: Record<string, string> = {
  TypeScript:  "#3178c6",
  JavaScript:  "#f7df1e",
  Python:      "#3572A5",
  HTML:        "#e34c26",
  CSS:         "#563d7c",
  "C++":       "#f34b7d",
  Java:        "#b07219",
  Rust:        "#dea584",
  Go:          "#00ADD8",
  Other:       "#6e7681",
};
const langColor = (name: string) => LANG_COLORS[name] ?? LANG_COLORS.Other;

/* ─── Types ─── */
type Repo = {
  name: string; html_url: string; description: string | null;
  language: string | null; stargazers_count: number;
  forks_count: number; updated_at: string; fork: boolean;
};
type Stats = { repos: number; stars: number; followers: number; following: number };
type LanguageStat = { name: string; count: number; percent: number };

/* ─── Animated counter ─── */
function CountUp({ target, suffix = "" }: { target: number | null; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = target / 60;
        const tick = () => {
          start = Math.min(start + step, target);
          el.textContent = Math.round(start).toLocaleString() + suffix;
          if (start < target) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, suffix]);
  return <span ref={ref}>{target === null ? "—" : "0"}</span>;
}

/* ─── Repo Card ─── */
function RepoCard({ repo, delay }: { repo: Repo; delay: number }) {
  const color = langColor(repo.language ?? "Other");
  const updated = new Date(repo.updated_at);
  const ago = (() => {
    const d = Math.floor((Date.now() - updated.getTime()) / 86400000);
    if (d === 0) return "today";
    if (d === 1) return "yesterday";
    if (d < 30) return `${d}d ago`;
    if (d < 365) return `${Math.floor(d / 30)}mo ago`;
    return `${Math.floor(d / 365)}y ago`;
  })();
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45 }}
      whileHover={{ y: -3 }}
      className="group flex flex-col gap-3 rounded-2xl border border-zinc-800/70 bg-zinc-900/60 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-zinc-700 hover:bg-zinc-900"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <BookOpen className="h-4 w-4 shrink-0 text-zinc-500 group-hover:text-lime transition-colors" />
          <span className="truncate text-sm font-semibold text-white group-hover:text-lime transition-colors">
            {repo.name}
          </span>
        </div>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <p className="line-clamp-2 text-xs leading-relaxed text-zinc-500 flex-1">
        {repo.description ?? "No description provided."}
      </p>

      <div className="flex items-center gap-4 text-[11px] text-zinc-500">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star className="h-3 w-3" /> {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork className="h-3 w-3" /> {repo.forks_count}
        </span>
        <span className="ml-auto flex items-center gap-1">
          <Calendar className="h-3 w-3" /> {ago}
        </span>
      </div>
    </motion.a>
  );
}

/* ─── Main Component ─── */
export function GithubActivity() {
  const [languages, setLanguages] = useState<LanguageStat[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [topRepos, setTopRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); io.disconnect(); }
    }, { rootMargin: "300px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const ac = new AbortController();
    setLoading(true);
    (async () => {
      try {
        const [uRes, rRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`, { signal: ac.signal }),
          fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`, { signal: ac.signal }),
        ]);
        if (!uRes.ok || !rRes.ok) return;
        const user = await uRes.json();
        const list: Repo[] = await rRes.json();
        const own = list.filter((r) => !r.fork);

        const langCounts = own.reduce<Record<string, number>>((acc, r) => {
          const l = r.language ?? "Other";
          acc[l] = (acc[l] ?? 0) + 1;
          return acc;
        }, {});
        const langEntries = Object.entries(langCounts)
          .map(([name, count]) => ({ name, count, percent: own.length ? Math.round((count / own.length) * 100) : 0 }))
          .sort((a, b) => b.count - a.count).slice(0, 6);

        setStats({ repos: user.public_repos ?? own.length, stars: own.reduce((n, r) => n + (r.stargazers_count || 0), 0), followers: user.followers ?? 0, following: user.following ?? 0 });
        setLanguages(langEntries);
        setTopRepos(own.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 4));
      } catch { /* offline / rate-limited */ }
      finally { setLoading(false); }
    })();
    return () => ac.abort();
  }, [inView]);

  const statCards = [
    { icon: BookOpen,    label: "Public Repos",  value: stats?.repos     ?? null, color: "text-lime",       glow: "from-lime/20"         },
    { icon: Star,        label: "Stars Earned",  value: stats?.stars     ?? null, color: "text-yellow-400", glow: "from-yellow-400/20"   },
    { icon: Users,       label: "Followers",     value: stats?.followers ?? null, color: "text-sky-400",    glow: "from-sky-400/20"      },
    { icon: TrendingUp,  label: "Following",     value: stats?.following ?? null, color: "text-violet-400", glow: "from-violet-400/20"   },
  ];

  return (
    <section ref={ref} id="github" className="relative py-10 sm:py-12 bg-black overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/[0.08] blur-[140px]" />

      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <SectionBadge icon={Github}>Open Source</SectionBadge>
        <SectionHeading
          lead="My"
          accent="GitHub Activity"
          sub="Commits, repositories and the day-to-day rhythm of building in public."
        />

        {/* ── Stat Cards ── */}
        <Reveal>
          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-3.5 md:grid-cols-4">
            {statCards.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ y: -3 }}
                className="group relative overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-950 p-3.5 sm:p-4 transition-colors duration-300 hover:border-zinc-700"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="relative z-10">
                  <c.icon className={`mb-2 h-4 w-4 sm:h-5 sm:w-5 ${c.color}`} />
                  <p className={`font-mono text-xl sm:text-2xl font-bold tabular-nums ${c.color}`}>
                    <CountUp target={c.value} />
                  </p>
                  <p className="mt-0.5 text-[11px] text-zinc-500">{c.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ── Main Grid ── */}
        <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">

          {/* Left: Contribution Chart */}
          <Reveal delay={0.05} className="min-w-0">
            <div className="flex h-full flex-col gap-4 rounded-xl border border-zinc-800/60 bg-zinc-950 p-4 sm:p-5">
              <div className="flex items-start justify-between gap-4">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-lime">
                  <Activity className="h-3.5 w-3.5 shrink-0" /> Contribution Rhythm
                </p>
                <a
                  href={`https://github.com/${USERNAME}`}
                  target="_blank" rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 text-xs text-zinc-500 transition-colors hover:text-lime"
                >
                  View profile <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Chart */}
              <div className="rounded-xl border border-zinc-800/60 bg-black/40 p-3 sm:p-4">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-lime">Live</span>
                  <span className="ml-auto font-mono text-[10px] text-zinc-600">GitHub activity</span>
                </div>
                <div className="overflow-x-auto pb-1">
                  <img
                    src={CONTRIBUTION_CHART_URL}
                    alt={`${USERNAME} GitHub contribution chart`}
                    loading="lazy"
                    className="min-w-[500px] rounded-xl border border-zinc-800/50 sm:min-w-[600px]"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-zinc-600">
                  <span>Less</span>
                  {["bg-zinc-800", "bg-lime/25", "bg-lime/45", "bg-lime/70", "bg-lime"].map((c, i) => (
                    <span key={i} className={`h-2.5 w-2.5 rounded-[3px] ${c}`} />
                  ))}
                  <span>More</span>
                </div>
              </div>

              {/* Mini streak stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Flame,    v: "Daily",  l: "Commit habit",        color: "text-orange-400" },
                  { icon: Calendar, v: "26w",    l: "Window shown",        color: "text-sky-400"    },
                  { icon: Github,   v: "Public", l: "Building in the open", color: "text-lime"      },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="flex flex-col gap-2 rounded-xl border border-zinc-800/60 bg-zinc-900/50 p-3.5 transition-colors hover:border-zinc-700"
                  >
                    <s.icon className={`h-4 w-4 ${s.color}`} />
                    <p className={`font-mono text-sm font-bold ${s.color}`}>{s.v}</p>
                    <p className="text-[10px] leading-tight text-zinc-600">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: Language Share */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-5 rounded-2xl border border-zinc-800/60 bg-zinc-950 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-lime">
                  <Code2 className="h-3.5 w-3.5 shrink-0" /> Language Share
                </p>
                <span className="rounded-full border border-lime/30 bg-lime/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-lime">
                  Live
                </span>
              </div>

              <div className="flex-1 rounded-xl border border-zinc-800/60 bg-black/40 p-4">
                <div className="mb-4 flex items-center justify-between text-[11px] text-zinc-600">
                  <span>Based on public repos</span>
                  <span>{loading ? "loading…" : stats ? `${stats.repos} repos` : "—"}</span>
                </div>

                <div className="space-y-4">
                  {(languages.length ? languages : placeholderLanguages).map((lang, i) => (
                    <motion.div
                      key={lang.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07, duration: 0.4 }}
                      className="space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-3 text-sm">
                        <span className="flex items-center gap-2 font-medium text-zinc-300">
                          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: langColor(lang.name) }} />
                          {lang.name}
                        </span>
                        <span className="font-mono text-xs" style={{ color: langColor(lang.name) }}>
                          {lang.percent}%
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: lang.percent / 100 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.07 + 0.2, duration: 1, ease: "easeOut" }}
                          style={{ transformOrigin: "left", backgroundColor: langColor(lang.name) }}
                          className="h-full rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* summary pills */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { v: `${languages.length || "—"}`, l: "Languages" },
                  { v: languages[0]?.name ?? "TypeScript", l: "Top lang" },
                  { v: `${languages[0]?.percent ?? "—"}%`, l: "Share" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-xl border border-zinc-800/60 bg-zinc-900/50 p-3 text-center transition-colors hover:border-zinc-700"
                  >
                    <p className="font-mono text-sm font-bold text-lime">{s.v}</p>
                    <p className="mt-0.5 text-[10px] text-zinc-600">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Profile CTA ── */}
        <Reveal delay={0.1}>
          <div className="mt-6 flex justify-center">
            <motion.a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-lime/30 bg-lime/10 px-5 py-2.5 font-mono text-xs sm:text-sm font-medium text-lime shadow-[0_0_24px_-6px_rgba(163,230,53,0.3)] transition-all duration-300 hover:bg-lime/15 hover:shadow-[0_0_36px_-4px_rgba(163,230,53,0.4)]"
            >
              <Github className="h-4 w-4" />
              View Full GitHub Profile
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const placeholderLanguages: LanguageStat[] = [
  { name: "TypeScript", count: 0, percent: 72 },
  { name: "JavaScript", count: 0, percent: 16 },
  { name: "Python",     count: 0, percent: 7  },
  { name: "CSS",        count: 0, percent: 5  },
];
