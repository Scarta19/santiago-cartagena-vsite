import {
  about,
  engagements,
  experience,
  honors,
  moat,
  professionalWork,
  projects,
  services,
  site,
  stack,
  type Status,
} from "@/content/site";
import { ExperienceTabs } from "./experience-tabs";
import { Reveal } from "./reveal";
import { Section } from "./section";
import { TrackedLink } from "./tracked-link";

export function About() {
  return (
    <Section id="about" index="03" label="Why me" title={about.title}>
      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {about.paragraphs.map((p) => (
            <Reveal key={p}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <aside className="rounded-2xl border border-line bg-elev p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">At a glance</p>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-subtle">Based in</dt>
                <dd className="text-fg">{site.location}</dd>
              </div>
              <div>
                <dt className="text-subtle">Time zone</dt>
                <dd className="text-fg">{site.timezone}</dd>
              </div>
              <div>
                <dt className="text-subtle">Languages</dt>
                <dd className="text-fg">English (advanced) · Spanish (native) · Portuguese (intermediate)</dd>
              </div>
              <div>
                <dt className="text-subtle">Recognition</dt>
                <dd className="space-y-1 text-fg">
                  {honors.map((h) => (
                    <span key={h} className="block">
                      {h}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}

export function Services() {
  return (
    <Section
      id="services"
      index="01"
      label="Outcomes"
      title="Fewer losses. Fewer false declines. Decisions you can explain."
      intro="Four focused services for companies where an automated decision carries real cost. Each one starts from the business result and works back to the model. Independent work, separate from any employer."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((s, k) => (
          <Reveal key={s.id} delay={k * 0.05}>
            <article className="group h-full rounded-2xl border border-line bg-elev p-7 transition-colors hover:border-line-strong">
              <p className="font-mono text-[11px] text-accent">0{k + 1}</p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-fg">{s.outcome}</h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">{s.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                <span className="text-fg/80">The problem: </span>
                {s.problem}
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-fg/90">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex gap-2.5">
                    <span aria-hidden className="text-accent">
                      ›
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-subtle">
                <span className="font-mono uppercase tracking-[0.14em]">Best for · </span>
                {s.forWho}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Engagement() {
  return (
    <Section
      id="engagement"
      index="02"
      label="How we work"
      title="Start small, prove value, then scale."
      intro="Every engagement starts with a clear outcome and a fixed scope, so you know what you get before you commit to more."
    >
      <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {engagements.map((e, k) => (
          <Reveal key={e.step} delay={k * 0.05}>
            <li className="relative flex h-full flex-col rounded-2xl border border-line bg-elev p-6">
              <span className="font-mono text-[11px] text-accent">{e.step}</span>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">{e.name}</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-fg">{e.outcome}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{e.detail}</p>
            </li>
          </Reveal>
        ))}
      </ol>
      <Reveal>
        <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-accent/40 bg-accent-soft p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-fg sm:text-base">Not sure where to start? The discovery call is free and you leave with a clear answer.</p>
          <TrackedLink
            event="cta_engagement_call"
            href="#contact"
            className="shrink-0 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#0b0b10]"
          >
            Book a 30-min call
          </TrackedLink>
        </div>
      </Reveal>
    </Section>
  );
}

export function Moat() {
  return (
    <Section id="approach" index="04" label="What makes it different" title={moat.title} intro={moat.intro}>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {moat.points.map((p, k) => (
          <Reveal key={p.title} delay={k * 0.05} className="bg-bg">
            <div className="h-full p-7">
              <h3 className="font-display text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" index="05" label="Experience" title="Fraud, risk and ad-tech ML, shipped inside companies that operate at scale.">
      <Reveal>
        <ExperienceTabs roles={experience} />
      </Reveal>
    </Section>
  );
}

const statusTone: Record<Status, string> = {
  Shipped: "border-good/40 text-good",
  "In development": "border-accent/50 text-accent",
  "In design": "border-warn/40 text-warn",
  Planned: "border-line-strong text-muted",
};

export function Work() {
  return (
    <Section
      id="work"
      index="06"
      label="Work"
      title="Proof you can open and run, not just read about."
      intro="Open-source systems that show exactly how I approach fraud and risk. Each one shows its real status and uses public or synthetic data only."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((p, k) => (
          <Reveal key={p.slug} delay={k * 0.06}>
            <article className="flex h-full flex-col rounded-2xl border border-line bg-elev p-7">
              <div className="flex items-center justify-between gap-3">
                <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${statusTone[p.status]}`}>{p.status}</span>
                <span className="font-mono text-[11px] text-subtle">0{k + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm font-medium text-fg">
                <span className="text-accent">Proves: </span>
                {p.proves}
              </p>
              <p className="mt-1 text-sm text-subtle">{p.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{p.summary}</p>
              <ul className="mt-5 space-y-2 text-sm text-fg/90">
                {p.scope.map((s) => (
                  <li key={s} className="flex gap-2.5">
                    <span aria-hidden className="text-subtle">
                      –
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <ul className="flex flex-wrap gap-1.5" aria-label="Stack">
                  {p.stack.map((t) => (
                    <li key={t} className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[11px] text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
                {p.href ? (
                  <TrackedLink
                    event={`project_${p.slug}`}
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-block text-sm font-medium text-fg underline decoration-line-strong underline-offset-4 hover:decoration-accent"
                  >
                    {p.status === "Shipped" ? "View code and results →" : "Follow on GitHub →"}
                  </TrackedLink>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="mt-20 font-mono text-xs uppercase tracking-[0.2em] text-subtle">Selected professional work</h3>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Described at a high level. No proprietary code, data, rules or architecture is shared, and no employer endorsement is implied.
        </p>
      </Reveal>
      <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
        {professionalWork.map((w) => (
          <Reveal key={w.title} className="bg-bg">
            <div className="h-full p-7">
              <p className="font-mono text-[11px] text-subtle">{w.context}</p>
              <h4 className="mt-3 font-medium text-fg">{w.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{w.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Stack() {
  return (
    <Section id="stack" index="07" label="Stack" title="Production tooling across GCP, AWS and modern AI.">
      <div className="divide-y divide-line border-y border-line">
        {stack.map((g) => (
          <Reveal key={g.group}>
            <div className="grid gap-4 py-6 md:grid-cols-[220px_1fr]">
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">{g.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li key={i} className="rounded-full border border-line px-3 py-1 text-sm text-fg/90">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  const project = `mailto:${site.contact.email}?subject=${encodeURIComponent("AI project inquiry")}&body=${encodeURIComponent(
    "Company:\nWhat you're trying to solve:\nTimeline:\n",
  )}`;
  const hire = `mailto:${site.contact.email}?subject=${encodeURIComponent("Role opportunity")}&body=${encodeURIComponent(
    "Company:\nRole:\nLink to the job description:\n",
  )}`;
  return (
    <Section
      id="contact"
      index="08"
      label="Contact"
      title="Tell me the decision you need to automate, and what a wrong one costs."
      intro="I reply within two business days with a straight answer on whether I can help. Two ways to work together:"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col rounded-2xl border border-accent/40 bg-accent-soft p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">For companies</p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">Discuss an AI project</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Fraud and risk models, production ML, or AI agents for operations. Tell me the problem and what a wrong decision costs you.
            </p>
            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <TrackedLink event="cta_contact_project" href={project} className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#0b0b10]">
                Email about a project
              </TrackedLink>
              {site.contact.scheduling ? (
                <TrackedLink
                  event="cta_contact_schedule"
                  href={site.contact.scheduling}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium"
                >
                  Book a 30-min call
                </TrackedLink>
              ) : null}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="flex h-full flex-col rounded-2xl border border-line bg-elev p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">For hiring teams</p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">Hire me</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Open to senior and lead roles in AI/ML engineering, applied AI and MLOps with international, remote-friendly teams.
            </p>
            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <TrackedLink event="cta_contact_hire" href={hire} className="rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-bg">
                Email about a role
              </TrackedLink>
              {site.contact.resume ? (
                <TrackedLink
                  event="resume_download"
                  href={site.contact.resume}
                  className="rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium"
                >
                  Download resume
                </TrackedLink>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>

      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
        <li>
          <TrackedLink event="social_email" href={`mailto:${site.contact.email}`} className="hover:text-fg">
            {site.contact.email}
          </TrackedLink>
        </li>
        <li>
          <TrackedLink event="social_linkedin" href={site.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-fg">
            LinkedIn
          </TrackedLink>
        </li>
        <li>
          <TrackedLink event="social_github" href={site.contact.github} target="_blank" rel="noreferrer" className="hover:text-fg">
            github.com/Scarta19
          </TrackedLink>
        </li>
      </ul>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© 2026 Santiago Cartagena · Medellín, Colombia</p>
        <p>Independent work. Not affiliated with or endorsed by current or past employers.</p>
      </div>
    </footer>
  );
}
