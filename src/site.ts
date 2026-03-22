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
  /** Work history — newest first */
  experience: [
    {
      company: "Meralco",
      role: "Intern",
      dateRange: "Jan 12, 2026 – Present",
      duration: "2 months",
    },
    {
      company: "Sandman Software Systems Inc.",
      role: "Jr Quality Assurance Specialist Intern",
      dateRange: "Aug 26, 2025 – Nov 2025",
      duration: "2 months",
    },
    {
      company: "TUP GEAR",
      role: "Developer Associate Officer",
      dateRange: "Sep 2024 – 2025",
      duration: "4 months",
    },
  ],
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
    {
      title: "Design system notes",
      description:
        "Example slot for a second internal or client project — swap title, link, and tags.",
      meta: "Design · 2024",
      href: "#projects",
      label: "Design system notes",
      tags: ["Design", "Docs"],
    },
    {
      title: "API experiment",
      description:
        "Placeholder for a backend or API-focused project (REST, GraphQL, serverless).",
      meta: "Backend · 2024",
      href: "#projects",
      label: "API experiment",
      tags: ["Node", "API"],
    },
    {
      title: "Mobile concept",
      description:
        "Placeholder for a mobile or responsive PWA — link a store listing or demo when ready.",
      meta: "Mobile · 2023",
      href: "#projects",
      label: "Mobile concept",
      tags: ["PWA", "UI"],
    },
  ],
} as const;
