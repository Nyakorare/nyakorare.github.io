import { Reveal } from "./Reveal";
import { site } from "../site";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-y border-base-300 py-12 sm:py-16 lg:py-24"
      aria-labelledby="experience-heading"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 translate-x-1/4 rounded-full bg-primary/10 blur-3xl motion-safe:animate-about-blob"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <div className="mb-10 max-w-lg sm:mb-12">
            <h2
              id="experience-heading"
              className="section-heading-3d font-display text-3xl font-medium tracking-[-0.02em] sm:text-4xl"
            >
              Experience
            </h2>
            <p className="mt-2 text-base text-base-content/70">
              Roles and internships — most recent first.
            </p>
          </div>
        </Reveal>

        <ol className="m-0 flex list-none flex-col gap-6 p-0 sm:gap-7">
          {site.experience.map((job, i) => (
            <li key={`${job.company}-${i}`}>
              <Reveal delayMs={i * 75}>
                <article className="experience-card elev-panel-soft elev-panel-glass elev-panel-lift group relative overflow-hidden rounded-2xl border border-base-300/90 p-5 sm:p-6">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
                    <div className="exp-logo-ring flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-base-300 bg-gradient-to-b from-base-200 to-base-300/40 p-2 shadow-inner motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.04] sm:h-[4.75rem] sm:w-[4.75rem]">
                      <img
                        src={job.image}
                        alt={`${job.company} logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                        <div>
                          <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-base-content sm:text-2xl">
                            {job.company}
                          </h3>
                          <p className="mt-1.5 text-sm text-base-content/75 sm:text-base">
                            {job.role}
                          </p>
                        </div>
                        <div className="flex shrink-0 flex-col gap-1.5 sm:items-end sm:text-right">
                          <p className="text-sm font-medium text-base-content/80">
                            {job.dateRange}
                          </p>
                          <span className="inline-flex w-fit rounded-full bg-primary/12 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                            {job.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
