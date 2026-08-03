import { useEffect, useRef, useState } from "react";
import { Github, ArrowUpRight, Activity, Code2 } from "lucide-react";
import { SectionBadge, SectionHeading, Reveal } from "./Section";

const USERNAME = "Snehasish-tech";
const CONTRIBUTION_CHART_URL = `https://ghchart.rshah.org/40916c/${USERNAME}`;

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
};

type Stats = { repos: number; stars: number; followers: number };
type LanguageStat = { name: string; count: number; percent: number };

export function GithubActivity() {
  const [languages, setLanguages] = useState<LanguageStat[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  // Only fetch once the section is close to the viewport.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const ac = new AbortController();
    (async () => {
      try {
        const [uRes, rRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`, { signal: ac.signal }),
          fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`, {
            signal: ac.signal,
          }),
        ]);
        if (!uRes.ok || !rRes.ok) return;
        const user = await uRes.json();
        const list: Repo[] = await rRes.json();
        const own = list.filter((r) => !r.fork);
        const languageCounts = own.reduce<Record<string, number>>((acc, repo) => {
          const language = repo.language ?? "Other";
          acc[language] = (acc[language] ?? 0) + 1;
          return acc;
        }, {});
        const languageEntries = Object.entries(languageCounts)
          .map(([name, count]) => ({
            name,
            count,
            percent: own.length ? Math.round((count / own.length) * 100) : 0,
          }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 6);
        setStats({
          repos: user.public_repos ?? own.length,
          stars: own.reduce((n, r) => n + (r.stargazers_count || 0), 0),
          followers: user.followers ?? 0,
        });
        setLanguages(languageEntries);
      } catch {
        /* offline / rate-limited — placeholders stay */
      }
    })();
    return () => ac.abort();
  }, [inView]);

  const cards = [
    { label: "Public repos", value: stats ? String(stats.repos) : "25+" },
    { label: "Stars earned", value: stats ? String(stats.stars) : "—" },
    { label: "Followers", value: stats ? String(stats.followers) : "—" },
    { label: "Primary language", value: languages[0]?.name ?? "TypeScript" },
  ];

  return (
    <section ref={ref} id="github" className="relative py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <SectionBadge icon={Github}>Open Source</SectionBadge>
        <SectionHeading
          lead="My"
          accent="GitHub Activity"
          sub="Commits, repositories and the day-to-day rhythm of building in public."
        />

        <Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => (
              <div
                key={c.label}
                className="card-surface rounded-2xl p-5 transition-[border-color,transform] duration-200 will-change-transform hover:-translate-y-0.5 hover:border-lime/50"
              >
                <p className="font-display text-2xl font-bold text-lime tabular-nums">{c.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <Reveal delay={0.05}>
            <div className="card-surface h-full rounded-2xl p-6">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                <p className="flex min-w-0 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-lime">
                  <Activity className="h-3.5 w-3.5 shrink-0" /> Contribution rhythm
                </p>
                <a
                  href={`https://github.com/${USERNAME}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-lime"
                >
                  View profile <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-background/35 p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-lime">
                    <span className="h-2 w-2 animate-pulse-glow rounded-full bg-lime" />
                    Live
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    GitHub activity
                  </span>
                </div>

                <div className="mt-4 overflow-x-auto pb-1">
                  <img
                    src={CONTRIBUTION_CHART_URL}
                    alt={`${USERNAME} GitHub contribution chart`}
                    loading="lazy"
                    className="min-w-[640px] rounded-xl border border-border bg-background/40"
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[11px] text-muted-foreground">
                <span>Less</span>
                {[
                  "bg-secondary/50",
                  "bg-lime/25",
                  "bg-lime/45",
                  "bg-lime/70",
                  "bg-lime",
                ].map((c, i) => (
                  <span key={i} className={`h-[11px] w-[11px] rounded-[3px] ${c}`} />
                ))}
                <span>More</span>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { v: "Daily", l: "Commit habit" },
                  { v: "26w", l: "Window shown" },
                  { v: "Public", l: "Building in the open" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-xl border border-border bg-background/50 p-3.5 transition-[border-color,transform] duration-200 will-change-transform hover:-translate-y-0.5 hover:border-lime/50"
                  >
                    <p className="font-display text-base font-bold text-lime">{s.v}</p>
                    <p className="mt-1 text-[11px] leading-tight text-muted-foreground">{s.l}</p>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-surface h-full rounded-2xl p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-lime">
                  <Code2 className="h-3.5 w-3.5 shrink-0" /> Language share
                </p>
                <span className="rounded-full border border-lime/30 bg-lime/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-lime">
                  Live
                </span>
              </div>

              <div className="mt-5 rounded-2xl border border-border bg-background/35 p-4">
                <div className="flex items-center justify-between gap-3 text-[11px] text-muted-foreground">
                  <span>Based on public repos</span>
                  <span>{stats ? `${stats.repos} repos` : "live loading"}</span>
                </div>

                <div className="mt-4 space-y-4">
                  {(languages.length ? languages : placeholderLanguages).map((lang) => (
                    <div key={lang.name} className="space-y-1.5">
                      <div className="flex items-center justify-between gap-3 text-sm">
                        <span className="font-medium text-foreground">{lang.name}</span>
                        <span className="font-mono text-xs text-lime">{lang.percent}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-secondary/70">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-lime via-lime/80 to-lime-soft transition-all duration-700"
                          style={{ width: `${Math.max(lang.percent, 6)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  { v: `${languages.length || 0}`, l: "Languages tracked" },
                  { v: `${languages[0]?.name ?? "TypeScript"}`, l: "Top language" },
                  { v: `${languages[0]?.percent ?? 0}%`, l: "Share" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-xl border border-border bg-background/50 p-3.5 transition-[border-color,transform] duration-200 will-change-transform hover:-translate-y-0.5 hover:border-lime/50"
                  >
                    <p className="font-display text-base font-bold text-lime">{s.v}</p>
                    <p className="mt-1 text-[11px] leading-tight text-muted-foreground">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const placeholderLanguages: LanguageStat[] = [
  { name: "TypeScript", count: 0, percent: 72 },
  { name: "JavaScript", count: 0, percent: 16 },
  { name: "CSS", count: 0, percent: 7 },
  { name: "HTML", count: 0, percent: 5 },
];
