import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { profile, socials } from "@/data/portfolio";
import { HeroTerrain } from "./HeroTerrain";


export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-16">
      {/* deep navy sky */}
      <div className="absolute inset-0 hero-gradient" />

      {/* aurora + stars */}
      <div className="pointer-events-none absolute inset-0 hero-stars opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[70%] hero-aurora" />

      {/* drifting light orbs */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-[14%] top-[24%] h-2 w-2 rounded-full bg-lime/70 blur-[1px]"
        animate={{ y: [0, -26, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute right-[18%] top-[34%] h-1.5 w-1.5 rounded-full bg-lime/60 blur-[1px]"
        animate={{ y: [0, 22, 0], opacity: [0.25, 0.9, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-[70%] top-[18%] h-1 w-1 rounded-full bg-lime/70"
        animate={{ y: [0, -18, 0], opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />

      {/* animated 3D wireframe terrain */}
      <div className="pointer-events-none absolute inset-0">
        <HeroTerrain className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/25 to-background/85" />
      </div>



      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col items-center justify-center px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-4 py-1.5 text-sm text-lime"
        >
          <Sparkles className="h-4 w-4" />
          About Me
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl"
        >
          Hi, I&rsquo;m <span className="text-lime text-glow">{profile.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.46 }}
          className="mt-7 max-w-3xl text-xl leading-relaxed text-foreground/90 md:text-[26px]"
        >
          A{" "}
          <span className="mx-1 inline-block rounded-lg bg-lime px-3 py-1 align-middle text-[0.85em] font-semibold text-primary-foreground">
            {profile.role}
          </span>{" "}
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-secondary/60 text-foreground/80 transition-all duration-200 hover:-translate-y-1 hover:border-lime/60 hover:text-lime"
            >
              <s.icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
