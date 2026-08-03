import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionBadge({ icon: Icon, children }: { icon: any; children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mx-auto flex w-fit items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-4 py-1.5 text-sm text-lime"
    >
      <Icon className="h-4 w-4" />
      <span>{children}</span>
    </motion.div>
  );
}

export function SectionHeading({
  lead,
  accent,
  sub,
}: {
  lead: string;
  accent: string;
  sub?: string;
}) {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-6 text-center text-4xl font-bold sm:text-5xl md:text-6xl"
      >
        {lead} <span className="text-lime">{accent}</span>
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mx-auto mt-5 max-w-2xl text-center text-base text-muted-foreground"
        >
          {sub}
        </motion.p>
      )}
    </>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
