"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { Role } from "@/content/site";

export function ExperienceTabs({ roles }: { roles: Role[] }) {
  const [active, setActive] = useState(0);
  const base = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent) => {
    const last = roles.length - 1;
    let next = active;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  };

  const role = roles[active];

  return (
    <div className="grid gap-8 md:grid-cols-[260px_1fr] md:gap-12">
      <div
        role="tablist"
        aria-orientation="vertical"
        aria-label="Companies"
        onKeyDown={onKey}
        className="-mx-4 flex gap-1 overflow-x-auto px-4 md:mx-0 md:flex-col md:overflow-visible md:border-l md:border-line md:px-0"
      >
        {roles.map((r, k) => (
          <button
            key={r.company}
            ref={(el) => {
              refs.current[k] = el;
            }}
            role="tab"
            id={`${base}-tab-${k}`}
            aria-selected={k === active}
            aria-controls={`${base}-panel`}
            tabIndex={k === active ? 0 : -1}
            onClick={() => setActive(k)}
            className={`shrink-0 rounded-lg px-4 py-3 text-left transition-colors md:-ml-px md:rounded-none md:border-l-2 ${
              k === active
                ? "bg-accent-soft text-fg md:border-accent md:bg-transparent"
                : "text-muted hover:text-fg md:border-transparent"
            }`}
          >
            <span className="block text-sm font-medium">{r.company}</span>
            <span className="mt-0.5 block font-mono text-[11px] text-subtle">{r.period}</span>
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`${base}-panel`} aria-labelledby={`${base}-tab-${active}`} tabIndex={0} className="min-h-[320px]">
        <h3 className="font-display text-2xl font-semibold tracking-tight">
          {role.title} <span className="text-accent">· {role.company}</span>
        </h3>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-subtle">
          {role.period} · {role.location}
        </p>
        <ul className="mt-6 space-y-4">
          {role.points.map((p) => (
            <li key={p} className="flex gap-3 leading-relaxed text-muted">
              <span aria-hidden className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-accent" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technologies">
          {role.tags.map((t) => (
            <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
