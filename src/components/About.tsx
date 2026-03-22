import { Reveal } from "./Reveal";

const tags = ["Frontend", "UI design", "Systems", "Performance"] as const;

export function About() {
  return (
    <section
      id="about"
      className="grid gap-10 border-y border-base-300 py-16 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:py-24"
    >
      <Reveal>
        <h2 className="font-display text-3xl font-medium tracking-[-0.02em] sm:text-4xl">
          About
        </h2>
      </Reveal>
      <Reveal delayMs={80}>
        <div className="max-w-xl space-y-4 text-base text-base-content/70">
          <p>
            I’m <strong className="font-semibold text-base-content">nyakorare</strong>{" "}
            — this site is hosted on GitHub Pages. Swap this copy for your story:
            what you build, what you care about, and how you like to work with
            others.
          </p>
          <p>
            This layout stays intentionally quiet so your work and words can stand
            forward.
          </p>
          <ul
            className="flex flex-wrap gap-2 pt-2"
            aria-label="Focus areas"
          >
            {tags.map((t) => (
              <li
                key={t}
                className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-base-content"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
