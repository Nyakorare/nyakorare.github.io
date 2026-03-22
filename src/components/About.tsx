import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { site } from "../site";

function ChipList({
  items,
  delayOffset = 0,
}: {
  items: readonly string[];
  delayOffset?: number;
}) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <li key={item}>
          <span
            className="chip-3d chip-animate chip-hover inline-flex max-w-full rounded-full border border-base-300/80 bg-base-100/90 px-3 py-1.5 text-xs font-medium leading-snug text-base-content backdrop-blur-sm sm:text-sm"
            style={{
              animationDelay: `${delayOffset + i * 0.035}s`,
            }}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.12em] text-primary">
      <span
        className="inline-block h-px w-6 bg-gradient-to-r from-primary to-transparent"
        aria-hidden
      />
      {children}
    </h3>
  );
}

function SkillPanel({
  title,
  children,
  accent,
}: {
  title: ReactNode;
  children: ReactNode;
  accent?: "default" | "power";
}) {
  const base =
    "elev-panel-soft elev-panel-lift space-y-3 rounded-2xl border p-5 backdrop-blur-md sm:p-6";
  const variant =
    accent === "power"
      ? "border-primary/30 bg-gradient-to-br from-primary/[0.08] via-base-100/90 to-base-100/70"
      : "border-base-300/80 bg-base-100/70";

  return (
    <div className={`${base} ${variant}`}>
      {title}
      {children}
    </div>
  );
}

export function About() {
  const { about } = site;

  return (
    <section
      id="about"
      className="about-section-3d relative isolate overflow-hidden border-y border-base-300 bg-base-100 py-16 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="about-bg-3d pointer-events-none" aria-hidden>
        <div className="about-3d-perspective">
          <div className="about-3d-floor" />
          <div className="about-3d-plane about-3d-plane-a">
            <div className="about-3d-plane-inner" />
          </div>
          <div className="about-3d-plane about-3d-plane-b">
            <div className="about-3d-plane-inner" />
          </div>
          <div className="about-3d-glow" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-0">
        <Reveal>
          <header className="mb-12 max-w-3xl border-b border-base-300/60 pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Profile
            </p>
            <h2
              id="about-heading"
              className="section-heading-3d mt-2 font-display text-3xl font-medium tracking-[-0.02em] sm:text-4xl"
            >
              About
            </h2>
            <p className="mt-3 text-base text-base-content/70">
              Skills, tools, and platforms I use day to day.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {about.roles.map((role, i) => (
                <li key={role}>
                  <span
                    className="role-pill inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wide text-primary motion-safe:animate-role-fade sm:text-xs"
                    style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                  >
                    {role}
                  </span>
                </li>
              ))}
            </ul>
          </header>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="elev-panel-soft relative mb-12 max-w-3xl rounded-2xl border-l-4 border-primary bg-base-100/50 py-5 pl-6 pr-5 ring-1 ring-base-300/40 sm:py-6 sm:pl-8">
            <p className="text-base leading-relaxed text-base-content/85 sm:text-lg">
              {about.intro}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          <Reveal delayMs={120}>
            <SkillPanel
              title={<SectionTitle>Skills</SectionTitle>}
              accent="default"
            >
              <ChipList items={about.skills} delayOffset={0} />
            </SkillPanel>
          </Reveal>

          <Reveal delayMs={140}>
            <SkillPanel
              title={<SectionTitle>Tools</SectionTitle>}
              accent="default"
            >
              <ChipList
                items={about.tools}
                delayOffset={about.skills.length * 0.035}
              />
            </SkillPanel>
          </Reveal>

          <Reveal delayMs={160}>
            <SkillPanel
              title={<SectionTitle>Frameworks</SectionTitle>}
              accent="default"
            >
              <ChipList
                items={about.frameworks}
                delayOffset={
                  (about.skills.length + about.tools.length) * 0.035
                }
              />
            </SkillPanel>
          </Reveal>

          <Reveal delayMs={180}>
            <SkillPanel
              title={<SectionTitle>Microsoft Power Platform</SectionTitle>}
              accent="power"
            >
              <ChipList
                items={about.powerPlatform}
                delayOffset={
                  (about.skills.length +
                    about.tools.length +
                    about.frameworks.length) *
                  0.035
                }
              />
            </SkillPanel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
