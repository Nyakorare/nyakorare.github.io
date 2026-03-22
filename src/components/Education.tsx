import { Reveal } from "./Reveal";
import { site } from "../site";

export function Education() {
  const { education } = site;

  return (
    <section
      id="education"
      className="border-b border-base-300 py-8 sm:py-10"
      aria-labelledby="education-heading"
    >
      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <div className="elev-panel-soft rounded-2xl border border-base-300/80 bg-base-100/70 p-4 backdrop-blur-sm sm:p-5">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <h2
                id="education-heading"
                className="m-0 inline-flex rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 font-display text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary sm:text-xs"
              >
                Education
              </h2>
            </div>
            <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <div className="exp-logo-ring flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-base-300 bg-gradient-to-b from-base-200 to-base-300/40 p-2 shadow-inner sm:h-[4.25rem] sm:w-[4.25rem]">
                <img
                  src={education.logo}
                  alt={`${education.school} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <p className="font-display text-base font-medium leading-snug text-base-content sm:text-lg">
                  {education.school}
                </p>
                <p className="mt-1 text-sm font-medium text-primary sm:text-base">
                  {education.program}
                </p>
                <p className="mt-1 text-sm text-base-content/65">
                  {education.dateLabel}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
