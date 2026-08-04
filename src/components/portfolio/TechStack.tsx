import { useMemo, useState } from "react";
import {
  Layers,
  Brain,
  Cloud,
  MonitorSmartphone,
  Server,
  Database,
  Palette,
  Wrench,
  Grid3X3,
  Code2,
  Sparkles,
} from "lucide-react";
import { techGroups, learning, techSlugs } from "@/data/portfolio";
import { SectionBadge, SectionHeading, Reveal } from "./Section";

const groupIcons: Record<string, any> = {
  Languages: Code2,
  "AI & Data": Brain,
  "Cloud & DevOps": Cloud,
  Frontend: MonitorSmartphone,
  Backend: Server,
  Database: Database,
  Design: Palette,
  Tools: Wrench,
};

const iconUrl = (name: string) =>
  `https://cdn.simpleicons.org/${techSlugs[name] ?? name.toLowerCase()}/A3E635`;

function TechCard({ name }: { name: string }) {
  return (
    <div className="card-surface group relative flex h-[60px] items-center gap-3 overflow-hidden rounded-xl px-3.5 shadow-md transition-[border-color,transform,box-shadow] duration-300 will-change-transform hover:-translate-y-1 hover:border-lime/70 hover:shadow-xl">
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at center, color-mix(in oklab, var(--lime) 15%, transparent), transparent 70%)",
        }}
      />
      <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-background/60 transition-colors duration-200 group-hover:border-lime/50 group-hover:bg-lime/10">
        <img
          src={iconUrl(name)}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={18}
          height={18}
          className="h-[18px] w-[18px] object-contain"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
          }}
        />
      </span>
      <span className="relative min-w-0 truncate text-sm font-medium">{name}</span>
    </div>
  );
}

export function TechStack() {
  const [active, setActive] = useState<string>("All");

  const tabs = useMemo(() => ["All", ...techGroups.map((g) => g.group)], []);
  const total = useMemo(() => techGroups.reduce((n, g) => n + g.items.length, 0), []);

  return (
    <section id="tech" className="relative py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/4 h-[420px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, color-mix(in oklab, var(--lime) 8%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 lg:px-8">
        <SectionBadge icon={Layers}>Technology Stack</SectionBadge>
        <SectionHeading
          lead="Tools &"
          accent="Technologies"
          sub="Organised by discipline — the languages, frameworks and tools I reach for when building and shipping products."
        />

        {/* Filter rail — fixed height so switching never reflows the page */}
        <Reveal>
          <div className="mt-12 flex min-h-[44px] flex-wrap items-center justify-center gap-2">
            {tabs.map((t) => {
              const Icon = t === "All" ? Grid3X3 : (groupIcons[t] ?? Layers);
              const count =
                t === "All" ? total : (techGroups.find((g) => g.group === t)?.items.length ?? 0);
              const isActive = active === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setActive(t)}
                  aria-pressed={isActive}
                  className={`flex h-10 items-center gap-2 rounded-full border px-4 text-sm transition-[background-color,border-color,color,transform] duration-200 will-change-transform hover:-translate-y-0.5 ${
                    isActive
                      ? "border-lime bg-lime text-primary-foreground"
                      : "border-border bg-secondary/40 text-muted-foreground hover:border-lime/40 hover:text-lime"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{t}</span>
                  <span
                    className={`font-mono text-[10px] tabular-nums ${isActive ? "opacity-70" : "opacity-60"}`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grouped stack — all groups stay mounted; filtering only toggles
            display so cards never re-mount, re-measure or animate layout. */}
        <div className="mt-12 space-y-10">
          {techGroups.map((g) => {
            const Icon = groupIcons[g.group] ?? Layers;
            const shown = active === "All" || active === g.group;
            return (
              <section
                key={g.group}
                hidden={!shown}
                className="transition-opacity duration-200"
                style={{ opacity: shown ? 1 : 0 }}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-lime/30 bg-lime/10 text-lime">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{g.group}</h3>
                  <span className="h-px flex-1 bg-border" />
                  <span className="shrink-0 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {g.items.length} tools
                  </span>
                </div>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{g.note}</p>
                <div className="mt-5 grid auto-rows-[60px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {g.items.map((name) => (
                    <TechCard key={name} name={name} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Currently exploring */}
        <Reveal>
          <div className="card-surface mt-16 flex flex-col gap-5 rounded-2xl p-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-lime">
                <Sparkles className="h-3.5 w-3.5 shrink-0" /> Currently exploring
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Levelling up beyond the frontend — backend systems, cloud and AI tooling.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {learning.map((l) => (
                <span
                  key={l} // Changed styling for learning items to be more prominent
                  className="rounded-full border border-lime/30 bg-lime/10 px-3 py-1.5 text-xs text-lime transition-[border-color,background-color,transform,box-shadow] duration-200 will-change-transform hover:-translate-y-0.5 hover:border-lime/50 hover:bg-lime/20 hover:shadow-sm"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
