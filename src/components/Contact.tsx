import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { site } from "../site";

function LinkRow({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="group relative w-fit text-lg font-medium text-primary"
    >
      {children}
      <span className="absolute bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
    </a>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24">
      <Reveal>
        <div className="card max-w-xl border border-base-300 bg-base-100 p-8 shadow-lg transition-shadow duration-300 hover:shadow-2xl lg:p-10">
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] sm:text-4xl">
            Contact
          </h2>
          <p className="mt-3 text-base text-base-content/70">
            Open to collaborations and interesting problems.
          </p>
          <div className="mt-6 flex flex-col gap-4">
            {site.emails.map((email) => (
              <LinkRow key={email} href={`mailto:${email}`}>
                {email}
              </LinkRow>
            ))}
            <LinkRow href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</LinkRow>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-fit text-lg font-medium text-primary"
            >
              GitHub
              <span className="absolute bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
