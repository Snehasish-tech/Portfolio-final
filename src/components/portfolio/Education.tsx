import { GraduationCap, MapPin, CalendarDays, BadgeCheck } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionBadge, SectionHeading, Reveal } from "./Section";

export function Education() {
  return (
    <section id="education" className="relative py-10 sm:py-12">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <SectionBadge icon={GraduationCap}>Academics</SectionBadge>
        <SectionHeading
          lead="Education &"
          accent="Qualifications"
          sub="The academic foundation behind the engineering — from school fundamentals to an IT degree in progress."
        />

        <div className="mt-6 grid gap-3.5 lg:grid-cols-3">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.05} className="h-full">
              <article className="card-surface group flex h-full flex-col rounded-xl p-4 sm:p-5 transition-[border-color,transform] duration-300 will-change-transform hover:-translate-y-1 hover:border-lime/50">
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-lime/30 bg-lime/10 text-lime">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <span
                    className={`justify-self-end rounded-full px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-widest ${
                      e.status === "In Progress"
                        ? "border border-lime/40 bg-lime/10 text-lime"
                        : "border border-border bg-secondary/50 text-muted-foreground"
                    }`}
                  >
                    {e.status}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-base font-semibold leading-snug sm:text-lg">{e.degree}</h3>
                <p className="mt-1 text-xs sm:text-sm text-lime">{e.institution}</p>

                <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5 shrink-0" /> {e.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 shrink-0" /> {e.location}
                  </span>
                </div>

                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">{e.desc}</p>

                <div className="mt-3 inline-flex w-fit items-center gap-2 rounded-lg border border-border bg-background/50 px-2.5 py-1.5 text-xs sm:text-sm">
                  <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-lime" />
                  <span className="font-medium">{e.grade}</span>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5 pt-1">
                  {e.coursework.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-border bg-secondary/40 px-2 py-0.5 text-[10px] text-foreground/80"
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
