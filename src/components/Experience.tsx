import { Reveal } from "./Reveal";
import { site } from "../site";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-base-300 py-12 sm:py-16 lg:py-24"
      aria-labelledby="experience-heading"
    >
      <Reveal>
        <div className="mb-8 max-w-lg sm:mb-10">
          <h2
            id="experience-heading"
            className="font-display text-3xl font-medium tracking-[-0.02em] sm:text-4xl"
          >
            Experience
          </h2>
          <p className="mt-2 text-base text-base-content/70">
            Recent roles and internships.
          </p>
        </div>
      </Reveal>
      <ol className="m-0 max-w-2xl list-none space-y-0 p-0">
        {site.experience.map((job, i) => (
          <li
            key={`${job.company}-${i}`}
            className="border-b border-base-300 py-6 first:pt-0 last:border-b-0 last:pb-0 sm:py-8"
          >
            <Reveal delayMs={i * 70}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-base-content sm:text-xl">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-sm text-base-content/70 sm:text-base">
                    {job.role}
                  </p>
                </div>
                <div className="shrink-0 text-left sm:text-right">
                  <p className="text-sm text-base-content/70">{job.dateRange}</p>
                  <p className="mt-0.5 text-xs text-base-content/50">
                    {job.duration}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
