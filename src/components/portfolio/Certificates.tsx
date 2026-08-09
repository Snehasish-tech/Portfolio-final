import { useState } from "react";
import { motion } from "framer-motion";
import { Medal, Calendar, Eye, Download, ChevronDown, Trophy, Star } from "lucide-react";
import { certificates } from "@/data/portfolio";

import { SectionBadge, SectionHeading } from "./Section";

const filters = [
  { label: "Hackathon", icon: Trophy },
  { label: "Skills", icon: Medal },
  { label: "Extracurricular", icon: Star },
] as const;

export function Certificates() {
  const [active, setActive] = useState<string>("Hackathon");
  const [showAll, setShowAll] = useState(false);

  const list = certificates.filter((c) => (showAll ? true : c.category === active));

  return (
    <section id="certificates" className="relative py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <SectionBadge icon={Medal}>Achievements</SectionBadge>
        <SectionHeading
          lead="Certifications &"
          accent="Badges"
          sub="Validated expertise through recognised certifications, hackathon wins and continuous skill development."
        />


        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f.label}
              onClick={() => {
                setActive(f.label);
                setShowAll(false);
              }}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 ${
                !showAll && active === f.label
                  ? "bg-lime text-primary-foreground"
                  : "border border-border bg-secondary/50 text-foreground/80 hover:border-lime/50 hover:text-lime"
              }`}
            >
              <f.icon className="h-4 w-4" />
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group overflow-hidden rounded-2xl border border-border bg-navy-deep/70"
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
                <div className="p-5">
                  <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
                  <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" /> {c.date}
                  </p>
                  <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{c.desc}</p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
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
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-7 py-3 text-sm font-medium text-lime transition-colors hover:bg-lime/20"
          >
            {showAll ? "Show Less" : "Show All"}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
