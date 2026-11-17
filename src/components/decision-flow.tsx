"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

type Decision = "approve" | "review" | "decline";

const events: { id: string; kind: string; signal: string; score: number; decision: Decision }[] = [
  { id: "evt_7c1", kind: "payment", signal: "known device · usual hours", score: 0.04, decision: "approve" },
  { id: "evt_a90", kind: "signup", signal: "new device · VPN · fast form fill", score: 0.58, decision: "review" },
  { id: "evt_3fd", kind: "conversion", signal: "click-to-install in 2s · device farm", score: 0.93, decision: "decline" },
  { id: "evt_e42", kind: "message", signal: "lookalike domain · urgent payment ask", score: 0.71, decision: "review" },
];

const steps = ["Event", "Features", "Model", "Calibrate", "Decide"];

const tone: Record<Decision, string> = {
  approve: "text-good border-good/40 bg-good/10",
  review: "text-warn border-warn/40 bg-warn/10",
  decline: "text-bad border-bad/40 bg-bad/10",
};

/** Illustrative animation of a risk decision pipeline. Not real data. */
export function DecisionFlow() {
  const reduce = useReducedMotion();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setTick((v) => v + 1), 650);
    return () => clearInterval(t);
  }, [reduce]);

  const step = reduce ? steps.length - 1 : tick % steps.length;
  const i = reduce ? 2 : Math.floor(tick / steps.length) % events.length;

  const e = events[i];
  const done = step === steps.length - 1;

  return (
    <figure
      aria-label="Illustration: an event flows through features, a model and calibration to an approve, review or decline decision"
      className="relative w-full overflow-hidden rounded-2xl border border-line-strong bg-elev/80 p-5 shadow-[0_0_80px_-20px_rgba(139,123,255,0.35)] backdrop-blur"
    >
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
        <span>risk-engine</span>
        <span>illustrative</span>
      </div>

      <ol className="mt-5 grid grid-cols-5 gap-1.5">
        {steps.map((s, k) => (
          <li key={s} className="flex flex-col items-center gap-2">
            <span
              className={`h-1.5 w-full rounded-full transition-colors duration-300 ${k <= step ? "bg-accent" : "bg-line-strong"}`}
            />
            <span className={`font-mono text-[10px] sm:text-[11px] ${k === step ? "text-fg" : "text-subtle"}`}>{s}</span>
          </li>
        ))}
      </ol>

      <div className="mt-6 min-h-[168px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={e.id}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-mono text-sm text-fg">{e.id}</span>
              <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[11px] text-muted">{e.kind}</span>
            </div>
            <p className="font-mono text-xs text-muted">{e.signal}</p>

            <div>
              <div className="flex justify-between font-mono text-[11px] text-subtle">
                <span>risk score</span>
                <span className="text-fg">{step >= 2 ? e.score.toFixed(2) : "—"}</span>
              </div>
              <div className="relative mt-2 h-2 rounded-full bg-line">
                <span className="absolute inset-y-0 left-[30%] w-px bg-line-strong" aria-hidden />
                <span className="absolute inset-y-0 left-[80%] w-px bg-line-strong" aria-hidden />
                <motion.span
                  className="absolute inset-y-0 left-0 rounded-full bg-accent"
                  animate={{ width: step >= 2 ? `${e.score * 100}%` : "0%" }}
                  transition={{ duration: reduce ? 0 : 0.5, ease: "easeOut" }}
                />
              </div>
              <div className="mt-1.5 flex justify-between font-mono text-[10px] text-subtle">
                <span>approve</span>
                <span>review</span>
                <span>decline</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-subtle">thresholds set by cost, not AUC</span>
              <span
                className={`rounded-md border px-2.5 py-1 font-mono text-xs uppercase tracking-wider transition-opacity duration-300 ${tone[e.decision]} ${done ? "opacity-100" : "opacity-0"}`}
              >
                {e.decision}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </figure>
  );
}
