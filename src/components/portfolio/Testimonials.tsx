import { MessageSquare, Quote, Star } from "lucide-react";
import { testimonials, profile } from "@/data/portfolio";
import { SectionBadge, SectionHeading, Reveal } from "./Section";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <SectionBadge icon={MessageSquare}>Testimonials</SectionBadge>
        <SectionHeading
          lead="What People"
          accent="Thinks About Me"
          sub="Insights and feedback from peers, teammates, and mentors I've had the opportunity to collaborate with."
        />

        <Reveal>
          <div className="mt-8 flex justify-center">
            <div className="flex -space-x-3">
              {testimonials.slice(0, 6).map((t) => (
                <img
                  key={t.name}
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="h-10 w-10 rounded-full border-2 border-background object-cover"
                />
              ))}
              <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-background bg-secondary text-xs font-semibold">
                +30
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="marquee-mask mt-14 overflow-hidden">
        <div className="animate-marquee-left flex w-max gap-6 px-6">
          {[...testimonials, ...testimonials].map((t, i) => (
            <article
              key={i}
              className="card-surface relative flex w-[90vw] max-w-[380px] shrink-0 flex-col rounded-2xl p-7"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-muted-foreground/25" />
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover grayscale"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card bg-lime" />
                </div>
                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-lime">
                    {t.role}
                  </p>
                </div>
              </div>
              <p className="mt-5 flex-1 text-[15px] italic leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-lime text-lime" />
                  ))}
                </div>
                <span className="rounded-full bg-secondary px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {t.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[1400px] px-5 lg:px-8">
        <div className="flex justify-center">
          <a
            href="#connect"
            className="rounded-full bg-lime px-8 py-4 font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Share Your Experience With Me
          </a>
        </div>

        <Reveal>
          <div className="card-surface relative mt-20 flex items-center gap-6 rounded-3xl p-8 sm:p-10">
            <div className="relative shrink-0">
              <img
                src={profile.octocat}
                alt=""
                className="h-16 w-16 rounded-full border border-border object-contain p-1"
              />
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card bg-lime" />
            </div>
            <p className="text-lg italic leading-relaxed sm:text-xl">
              &ldquo;Software, art, and life are never perfect, they need to improve over
              time.&rdquo;
            </p>
            <Quote className="ml-auto hidden h-10 w-10 shrink-0 text-muted-foreground/25 sm:block" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
