import { proof } from "@/content/site";

export function ProofBar() {
  return (
    <div className="border-t border-line">
      <dl className="mx-auto grid max-w-6xl grid-cols-1 gap-px px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {proof.map((p) => (
          <div key={p.label} className="py-8 sm:pr-6">
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">{p.label}</dt>
            <dd className="mt-2 font-display text-lg font-semibold tracking-tight text-fg">{p.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
