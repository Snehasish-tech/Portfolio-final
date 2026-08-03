import { GraduationCap, MapPin, CalendarDays, BadgeCheck } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionBadge, SectionHeading, Reveal } from "./Section";

export function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <SectionBadge icon={GraduationCap}>Academics</SectionBadge>
        <SectionHeading
          lead="Education &"
          accent="Qualifications"
          sub="The academic foundation behind the engineering — from school fundamentals to an IT degree in progress."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.06} className="h-full">
              <article className="card-surface group flex h-full flex-col rounded-2xl p-6 transition-[border-color,transform] duration-300 will-change-transform hover:-translate-y-1 hover:border-lime/50">
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-lime/30 bg-lime/10 text-lime">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <span
                    className={`justify-self-end rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest ${
                      e.status === "In Progress"
                        ? "border border-lime/40 bg-lime/10 text-lime"
                        : "border border-border bg-secondary/50 text-muted-foreground"
                    }`}
                  >
                    {e.status}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{e.degree}</h3>
                <p className="mt-1.5 text-sm text-lime">{e.institution}</p>

                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5 shrink-0" /> {e.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 shrink-0" /> {e.location}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>

                <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-border bg-background/50 px-3 py-2 text-sm">
                  <BadgeCheck className="h-4 w-4 shrink-0 text-lime" />
                  <span className="font-medium">{e.grade}</span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2 pt-1">
                  {e.coursework.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-[11px] text-foreground/80"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
