import { site } from "@/content/site";
import { DecisionFlow } from "./decision-flow";
import { TrackedLink } from "./tracked-link";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div aria-hidden className="glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted sm:text-xs">
            {site.role} · {site.focus.split(",")[0]} &amp; risk · {site.location}
          </p>
          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.02] font-semibold tracking-tight text-fg sm:text-6xl lg:text-7xl">
            Santiago
            <br />
            Cartagena<span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl font-medium leading-snug text-fg sm:text-2xl">{site.headline}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{site.subheadline}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <TrackedLink
              event="cta_hero_project"
              href="#contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#0b0b10] transition-transform hover:-translate-y-0.5"
            >
              Discuss an AI project
            </TrackedLink>
            <TrackedLink
              event="cta_hero_hire"
              href="#contact"
              className="rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-fg transition-colors hover:bg-white/5"
            >
              Hire me
            </TrackedLink>
            <TrackedLink
              event="cta_hero_work"
              href="#work"
              className="rounded-full px-4 py-3 text-sm font-medium text-muted transition-colors hover:text-fg"
            >
              Explore my work →
            </TrackedLink>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
            <li>
              <TrackedLink event="social_github" href={site.contact.github} target="_blank" rel="noreferrer" className="hover:text-fg">
                GitHub
              </TrackedLink>
            </li>
            <li>
              <TrackedLink event="social_linkedin" href={site.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-fg">
                LinkedIn
              </TrackedLink>
            </li>
            <li>
              <TrackedLink event="social_email" href={`mailto:${site.contact.email}`} className="hover:text-fg">
                Email
              </TrackedLink>
            </li>
            {site.contact.resume ? (
              <li>
                <TrackedLink event="resume_download" href={site.contact.resume} className="hover:text-fg">
                  Resume
                </TrackedLink>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <DecisionFlow />
        </div>
      </div>
    </section>
  );
}
