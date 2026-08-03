import { FileText, Download, ArrowUpRight, CheckCircle2, Clock } from "lucide-react";
import { resume, profile } from "@/data/portfolio";
import { SectionBadge, SectionHeading, Reveal } from "./Section";

const resumeFile = resume.pdf ?? resume.href;

export function ResumeSection() {
  return (
    <section id="resume" className="relative py-24">
      <div className="mx-auto max-w-[1100px] px-5 lg:px-8">
        <SectionBadge icon={FileText}>Resume</SectionBadge>
        <SectionHeading
          lead="Grab my"
          accent="Full Resume"
          sub="A one-page snapshot of my education, projects, stack and achievements — always kept current."
        />

        <Reveal>
          <div className="card-surface mt-12 overflow-hidden rounded-3xl p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div className="min-w-0">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-lime">
                  <Clock className="h-3.5 w-3.5 shrink-0" /> {resume.updated}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-snug sm:text-3xl">
                  {profile.name} — {profile.role}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {resume.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col">
                <a
                  href={resumeFile}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 will-change-transform hover:-translate-y-0.5"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </a>
                <a
                  href={resumeFile}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 px-7 py-3.5 text-sm font-medium transition-colors duration-200 hover:border-lime/50 hover:text-lime"
                >
                  View online <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
