import { useState } from "react";
import { motion } from "framer-motion";
import { Medal, Calendar, Eye, Download, Trophy, Star, Layers } from "lucide-react";
import { certificates } from "@/data/portfolio";

import { SectionBadge, SectionHeading } from "./Section";

const filters = [
  { label: "All", icon: Layers },
  { label: "Hackathon", icon: Trophy },
  { label: "Skills", icon: Medal },
  { label: "Extracurricular", icon: Star },
] as const;

export function Certificates() {
  const [active, setActive] = useState<string>("All");

  const list = active === "All" ? certificates : certificates.filter((c) => c.category === active);

  const renderCertificate = (c: (typeof certificates)[number], copy: number) => (
    <motion.article
      key={`${copy}-${c.title}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group w-[min(74vw,18rem)] shrink-0 overflow-hidden rounded-2xl border border-border bg-navy-deep/70 sm:w-[20rem] lg:w-[23rem]"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
        <img
          src={c.image}
          alt={c.imageAlt ?? `${c.title} certificate`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-lime px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-primary-foreground">
          {c.ribbon}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold leading-snug">{c.title}</h3>
        <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" /> {c.date}
        </p>
        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{c.desc}</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <a
            href={c.image}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/60 py-2 text-sm transition-colors hover:border-lime/50 hover:text-lime"
          >
            <Eye className="h-4 w-4" /> View in Full
          </a>
          <a
            href={c.asset}
            download
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/60 py-2 text-sm transition-colors hover:border-lime/50 hover:text-lime"
          >
            <Download className="h-4 w-4" /> Download
          </a>
        </div>
      </div>
    </motion.article>
  );

  return (
    <section id="certificates" className="relative py-10 sm:py-12">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <SectionBadge icon={Medal}>Achievements</SectionBadge>
        <SectionHeading
          lead="Certifications &"
          accent="Badges"
          sub="Validated expertise through recognised certifications, hackathon wins and continuous skill development."
        />

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.label}
              onClick={() => {
                setActive(f.label);
              }}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 ${
                active === f.label
                  ? "bg-lime text-primary-foreground"
                  : "border border-border bg-secondary/50 text-foreground/80 hover:border-lime/50 hover:text-lime"
              }`}
            >
              <f.icon className="h-3.5 w-3.5" />
              {f.label}
            </button>
          ))}
        </div>

        <div className="group marquee-mask relative mt-6 overflow-hidden py-2">
          <div className="flex w-max gap-4 animate-marquee-right [animation-duration:72s] will-change-transform group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
            {list.map((c) => renderCertificate(c, 0))}
            {list.map((c) => renderCertificate(c, 1))}
          </div>
        </div>
      </div>
    </section>
  );
}
