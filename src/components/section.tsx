import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function Section({
  id,
  index,
  label,
  title,
  intro,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {index}. {label}
          </p>
          <h2 id={`${id}-title`} className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
            {title}
          </h2>
          {intro ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{intro}</p> : null}
        </Reveal>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
