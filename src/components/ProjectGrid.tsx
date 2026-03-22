import { Reveal } from "./Reveal";

const projects = [
  {
    href: "#",
    meta: "Web · 2025",
    title: "Project Alpha",
    desc: "Product landing with focus on typography and conversion.",
    label: "Project Alpha (placeholder)",
  },
  {
    href: "#",
    meta: "App · 2024",
    title: "Project Beta",
    desc: "Dashboard UI with calm color and predictable interactions.",
    label: "Project Beta (placeholder)",
  },
  {
    href: "#",
    meta: "Brand · 2024",
    title: "Project Gamma",
    desc: "Identity system and site for a small creative studio.",
    label: "Project Gamma (placeholder)",
  },
] as const;

export function ProjectGrid() {
  return (
    <section id="work" className="py-16 lg:py-24">
      <Reveal>
        <div className="mb-10 max-w-lg">
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-2 text-base text-base-content/70">
            A few projects — replace with your own links and descriptions.
          </p>
        </div>
      </Reveal>
      <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <li key={p.title}>
            <Reveal delayMs={i * 60}>
              <a
                href={p.href}
                aria-label={p.label}
                className="card group relative block h-full overflow-hidden border border-base-300 bg-base-100 p-6 pb-8 shadow-none transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <span className="relative z-[1] text-xs font-medium uppercase tracking-wider text-base-content/60">
                  {p.meta}
                </span>
                <h3 className="relative z-[1] mt-2 font-display text-xl font-medium tracking-[-0.02em] transition-colors group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="relative z-[1] mt-2 flex-1 text-sm text-base-content/70">
                  {p.desc}
                </p>
                <span
                  className="relative z-[1] mt-6 inline-block text-xl text-primary transition-transform duration-300 group-hover:translate-x-1.5"
                  aria-hidden
                >
                  →
                </span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
