/** Public site / contact details */
export const site = {
  name: "Glenn R. Galbadores I",
  /** Shorter label for the nav bar */
  nameShort: "Glenn Galbadores",
  phoneDisplay: "+63 915 081 3134",
  phoneTel: "+639150813134",
  emails: [
    "g1galba042804@gmail.com",
    "galbag12004@gmail.com",
  ] as const,
  githubUrl: "https://github.com/nyakorare",
  /** Featured work — edit titles, links, and tags anytime */
  projects: [
    {
      title: "Portfolio site",
      description:
        "This site: React, Vite, TypeScript, Tailwind CSS, DaisyUI, and smooth scroll animations.",
      meta: "Web · 2025",
      href: "https://nyakorare.github.io/",
      label: "Portfolio site (opens in new tab)",
      tags: ["React", "Vite", "Tailwind"],
    },
    {
      title: "GitHub profile",
      description:
        "Repositories and experiments — add your own projects and pin highlights here.",
      meta: "Code",
      href: "https://github.com/nyakorare",
      label: "GitHub profile (opens in new tab)",
      tags: ["Open source"],
    },
    {
      title: "Project placeholder",
      description:
        "Replace with a real project: link the live demo or repo and update this copy.",
      meta: "App · 2024",
      href: "#projects",
      label: "Placeholder project",
      tags: ["UI", "Product"],
    },
  ],
} as const;
