import { Reveal } from "./Reveal";
import { site } from "../site";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[min(92vh,52rem)] flex-col justify-center pb-16"
      aria-labelledby="hero-heading"
    >
      <div className="grid w-full max-w-5xl gap-10 lg:grid-cols-[1fr_minmax(0,22rem)] lg:items-center lg:gap-12 xl:grid-cols-[1fr_minmax(0,26rem)]">
        <div className="max-w-xl">
          <Reveal delayMs={50}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {site.name}
            </p>
          </Reveal>
          <Reveal delayMs={120}>
            <h1
              id="hero-heading"
              className="font-display text-[clamp(2.5rem,7vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.03em]"
            >
              <span className="block">Ideas, crafted</span>
              <span className="block font-display italic text-primary">
                with care.
              </span>
            </h1>
          </Reveal>
          <Reveal delayMs={200}>
            <p className="mt-4 max-w-xl text-lg text-base-content/70">
              I design and build thoughtful digital experiences — minimal surfaces,
              clear structure, and motion that feels natural.
            </p>
          </Reveal>
          <Reveal delayMs={280}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn rounded-full border-0 bg-base-content px-6 text-base-100 hover:bg-base-content/90">
                View projects
              </a>
              <a
                href="#contact"
                className="btn btn-outline rounded-full border-base-300 bg-transparent px-6 hover:border-base-content/40 hover:bg-primary/10"
              >
                Get in touch
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delayMs={180}>
          <div className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <img
              src={site.images.profile}
              alt={`${site.name}`}
              className="aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-xl ring-1 ring-base-300"
            />
          </div>
        </Reveal>
      </div>
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40"
        aria-hidden
      >
        <span className="hero-scroll-line block h-12 w-px bg-gradient-to-b from-base-content/50 to-transparent" />
      </div>
    </section>
  );
}
