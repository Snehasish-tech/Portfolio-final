import { socials, profile, navLinks } from "@/data/portfolio";
import { Reveal } from "./Section";

export function Connect() {
  return (
    <footer id="connect" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="bg-gradient-to-b from-foreground/90 to-foreground/20 bg-clip-text text-6xl font-bold text-transparent sm:text-7xl">
              Let&apos;s Connect
            </h2>

            <div className="mt-10 inline-flex flex-wrap gap-1 rounded-2xl border border-border bg-secondary/40 p-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-xl text-foreground/75 transition-all duration-200 hover:-translate-y-1 hover:bg-lime/10 hover:text-lime"
                >
                  <s.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <h3 className="text-3xl font-semibold leading-snug text-lime sm:text-4xl">
              Have an idea or want to collaborate? I&apos;d love to hear from you.
            </h3>
            <p className="mt-6 text-lg text-muted-foreground">
              Looking for a contact form? Skip the traditional way, just reach out directly at{" "}
              <a href={`mailto:${profile.email}`} className="font-semibold text-lime hover:underline">
                {profile.email}
              </a>{" "}
              and I&apos;ll handle everything for you.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-5">
            {navLinks.slice(0, 5).map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-lime"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
