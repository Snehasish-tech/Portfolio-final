import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

function Logo() {
  return (
    <svg viewBox="0 0 100 100" className="h-8 w-8 text-lime" fill="none" stroke="currentColor">
      <ellipse cx="50" cy="50" rx="46" ry="20" strokeWidth="6" />
      <ellipse
        cx="50"
        cy="50"
        rx="46"
        ry="20"
        strokeWidth="6"
        transform="rotate(60 50 50)"
        opacity="0.75"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="46"
        ry="20"
        strokeWidth="6"
        transform="rotate(120 50 50)"
        opacity="0.75"
      />
      <circle cx="50" cy="50" r="8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <Logo />
          <span className="font-display text-xl font-bold">{profile.firstName}</span>
        </a>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="rounded-full px-2.5 py-2 text-[13px] text-foreground/80 transition-colors duration-200 hover:text-lime"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>


        <div className="flex items-center gap-3">
          <a
            href="#connect"
            className="hidden rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105 sm:inline-block"
          >
            Connect With Me
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-foreground xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl xl:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-foreground/85 hover:bg-secondary hover:text-lime"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <a
                href="#connect"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-lime px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Connect With Me
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
