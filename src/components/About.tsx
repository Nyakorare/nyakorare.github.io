import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { site } from "../site";
import { AboutThreeBackgroundAlt } from "./AboutThreeBackgroundAlt";

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

function AboutAccordionItem({
  title,
  children,
  defaultOpen,
}: {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <div className="elev-panel-soft collapse collapse-plus rounded-2xl border border-base-300/80 bg-base-100/70 backdrop-blur-sm">
      <input type="checkbox" defaultChecked={defaultOpen} />
      <div className="collapse-title">
        <SectionTitle>{title}</SectionTitle>
      </div>
      <div className="collapse-content pt-0">
        <div className="pt-1">{children}</div>
      </div>
    </div>
  );
}

export function About() {
  const { about } = site;

  return (
    <section
      id="about"
      className="full-bleed viewport-section relative isolate overflow-hidden border-y border-base-300 bg-gradient-to-b from-base-100 via-base-100 to-base-200/40 px-6 py-12 lg:px-10 sm:py-16 lg:py-24"
      aria-labelledby="about-heading"
    >
      <AboutThreeBackgroundAlt />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-0">
        <Reveal>
          <header className="mb-10 text-center sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Profile
            </p>
            <h2
              id="about-heading"
              className="section-heading-3d mt-2 font-display text-3xl font-medium tracking-[-0.02em] sm:text-4xl"
            >
              About
            </h2>
            <p className="text-align-justify mt-3 text-base text-base-content/70">
              Skills, tools, and platforms I use day to day.
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-2">
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

        <div className="grid gap-5 lg:grid-cols-12 lg:items-start">
          <Reveal delayMs={60} className="lg:col-span-5">
            <div className="elev-panel relative overflow-hidden rounded-3xl border border-base-300/80 bg-base-100/70 p-5 backdrop-blur-md sm:p-6">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-transparent" />
              <div className="relative">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        {site.name}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.02em] text-base-content sm:text-3xl">
                        Quality-first builder
                      </h3>
                      <p className="text-align-justify mt-3 text-base leading-relaxed text-base-content/80">
                        {about.intro}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-base-300/80 bg-base-100/75 p-3">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-base-content/60">
                        Focus
                      </p>
                      <p className="mt-1 font-display text-sm font-semibold text-base-content">
                        QA · Automation · Delivery
                      </p>
                    </div>
                    <div className="rounded-2xl border border-base-300/80 bg-base-100/75 p-3">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-base-content/60">
                        Stack
                      </p>
                      <p className="mt-1 font-display text-sm font-semibold text-base-content">
                        Web · Power Platform · Automation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-2">
                  <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                    {about.roles.slice(0, 3).map((role) => (
                      <span
                        key={role}
                        className="inline-flex items-center rounded-full border border-base-300/80 bg-base-100/80 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wide text-base-content/75"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  {about.roles.length > 3 ? (
                    <p className="text-xs text-base-content/55">
                      +{about.roles.length - 3} more roles listed above
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 lg:col-span-7">
            <Reveal delayMs={90}>
              <AboutAccordionItem title="Skills" defaultOpen>
                <ChipList items={about.skills} delayOffset={0} />
              </AboutAccordionItem>
            </Reveal>

            <Reveal delayMs={120}>
              <AboutAccordionItem title="Tools">
                <ChipList items={about.tools} delayOffset={about.skills.length * 0.035} />
              </AboutAccordionItem>
            </Reveal>

            <Reveal delayMs={150}>
              <AboutAccordionItem title="Frameworks">
                <ChipList
                  items={about.frameworks}
                  delayOffset={(about.skills.length + about.tools.length) * 0.035}
                />
              </AboutAccordionItem>
            </Reveal>

            <Reveal delayMs={180}>
              <AboutAccordionItem title="Microsoft Power Platform">
                <ChipList
                  items={about.powerPlatform}
                  delayOffset={
                    (about.skills.length + about.tools.length + about.frameworks.length) *
                    0.035
                  }
                />
              </AboutAccordionItem>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
