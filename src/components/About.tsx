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
            className="chip-animate chip-hover inline-flex max-w-full rounded-full border border-base-300/80 bg-base-100/90 px-3 py-1.5 text-xs font-medium leading-snug text-base-content shadow-sm backdrop-blur-sm hover:shadow-md sm:text-sm"
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

export function About() {
  const { about } = site;

  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-base-300 py-16 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div
        className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl motion-safe:animate-about-blob"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-10 h-56 w-56 rounded-full bg-secondary/10 blur-3xl motion-safe:animate-about-blob-alt"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-10 max-w-2xl">
            <h2
              id="about-heading"
              className="font-display text-3xl font-medium tracking-[-0.02em] sm:text-4xl"
            >
              About
            </h2>
            <p className="mt-3 text-base text-base-content/70">
              Skills, tools, and platforms I use day to day.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-12 xl:grid-cols-[minmax(0,19rem)_1fr]">
          <Reveal delayMs={60}>
            <div className="relative overflow-hidden rounded-3xl border border-base-300 bg-gradient-to-b from-base-100 to-base-200/40 p-1 shadow-lg ring-1 ring-base-300/50 transition-shadow duration-300 motion-safe:hover:shadow-2xl">
              <div className="overflow-hidden rounded-[1.35rem] bg-base-200/50">
                <img
                  src={site.images.profile}
                  alt={`${site.name}`}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <div className="px-3 pb-4 pt-4">
                <p className="text-center font-display text-lg font-medium text-base-content">
                  {site.name}
                </p>
                <ul className="mt-3 flex flex-wrap justify-center gap-2">
                  {about.roles.map((role, i) => (
                    <li key={role}>
                      <span
                        className="role-pill inline-block rounded-full bg-primary/15 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-primary motion-safe:animate-role-fade"
                        style={{ animationDelay: `${0.15 + i * 0.12}s` }}
                      >
                        {role}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <div className="min-w-0 space-y-10">
            <Reveal delayMs={100}>
              <p className="text-base leading-relaxed text-base-content/80 sm:text-lg">
                {about.intro}
              </p>
            </Reveal>

            <Reveal delayMs={140}>
              <div className="space-y-3 rounded-2xl border border-base-300/80 bg-base-100/60 p-5 shadow-sm backdrop-blur-md sm:p-6">
                <SectionTitle>Skills</SectionTitle>
                <ChipList items={about.skills} delayOffset={0} />
              </div>
            </Reveal>

            <Reveal delayMs={180}>
              <div className="space-y-3 rounded-2xl border border-base-300/80 bg-base-100/60 p-5 shadow-sm backdrop-blur-md sm:p-6">
                <SectionTitle>Tools</SectionTitle>
                <ChipList
                  items={about.tools}
                  delayOffset={about.skills.length * 0.035}
                />
              </div>
            </Reveal>

            <Reveal delayMs={220}>
              <div className="space-y-3 rounded-2xl border border-base-300/80 bg-base-100/60 p-5 shadow-sm backdrop-blur-md sm:p-6">
                <SectionTitle>Frameworks</SectionTitle>
                <ChipList
                  items={about.frameworks}
                  delayOffset={
                    (about.skills.length + about.tools.length) * 0.035
                  }
                />
              </div>
            </Reveal>

            <Reveal delayMs={260}>
              <div className="space-y-3 rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/10 via-base-100/80 to-base-100/60 p-5 shadow-sm backdrop-blur-md sm:p-6">
                <SectionTitle>Microsoft Power Platform</SectionTitle>
                <ChipList
                  items={about.powerPlatform}
                  delayOffset={
                    (about.skills.length +
                      about.tools.length +
                      about.frameworks.length) *
                    0.035
                  }
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
