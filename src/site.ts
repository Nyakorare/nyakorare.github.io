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
  /** UptimeRobot public status page (linked from Projects — cannot be iframed) */
  uptimeStatusUrl: "https://stats.uptimerobot.com/JyYATn0Zv8",
  /** Paths under public/ — served at /images/... */
  images: {
    profile: "/images/myPicture.png",
  },
  about: {
    roles: [
      "QA Software Specialist",
      "QA Automation Specialist",
      "Roblox game developer",
      "AI developer",
      "Power Tools developer",
    ],
    intro:
      "I focus on quality engineering, test automation, and reliable delivery across web and business apps. I work with Microsoft Power Platform, modern JavaScript stacks, and Roblox Studio — from exploratory testing to scripted automation and shipped experiences.",
    skills: [
      "C",
      "C++",
      "Python",
      "HTML",
      "CSS (Vannila & Libraries)",
      "JavaScript",
      "TypeScript",
      "MySQL",
      "Lua",
      "Network (Troubleshoot, Security, and Config)",
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "PyCharm",
      "Cisco Packet Tracer",
      "Microsoft 365",
      "DaVinci Resolve",
      "Supabase",
      "Vercel",
      "Netlify",
      "Render",
      "Figma",
      "Canva",
      "Pop!_OS & Fedora Linux",
      "Excel",
      "Google Colab",
      "Kaggle Notebook",
    ],
    frameworks: [
      "React",
      "React Native",
      "Ionic React",
      "Vite (React, TypeScript)",
      "Flask",
      "Robot Framework",
      "Selenium",
    ],
    powerPlatform: ["Power Apps", "Power Automate", "Power BI"],
  },
  /** Work history — newest first */
  experience: [
    {
      company: "Meralco",
      role: "Intern",
      dateRange: "Jan 12, 2026 – Present",
      duration: "2 months",
      image: "/images/meralco.webp",
    },
    {
      company: "Sandman Software Systems Inc.",
      role: "Jr Quality Assurance Specialist Intern",
      dateRange: "Aug 26, 2025 – Nov 2025",
      duration: "2 months",
      image: "/images/sandmanSoftware.png",
    },
    {
      company: "TUP GEAR",
      role: "Developer Associate Officer",
      dateRange: "Sep 2024 – 2025",
      duration: "4 months",
      image: "/images/TUPGear.jpg",
    },
  ],
  /** Featured work — edit titles, links, and tags anytime */
  projects: [
    {
      title: "GuestGo",
      description:
        "Thesis system integration for a custom trained Face Detection AI",
      meta: "Web · 2025",
      href: "https://guest-go.vercel.app/",
      secondaryHref: "https://guestgo-ai.onrender.com/",
      label: "GuestGo web app (opens in new tab)",
      secondaryLabel: "GuestGo API backend (opens in new tab)",
      tags: ["Vite", "Tailwind", "Python", "YOLOv8", "AI", "API"],
    },
    {
      title: "ScorpBot AI",
      description:
        "AI CHATBOT for CEU-Manila",
      meta: "Code",
      href: "https://scorpbot.onrender.com/",
      label: "CEU ScorpBot AI (opens in new tab)",
      tags: ["GEMINI", "AI"],
    },
    {
      title: "PH MANGO AI",
      description:
        "Replace with a real project: link the live demo or repo and update this copy.",
      meta: "App · 2024",
      href: "#projects",
      label: "Placeholder project",
      tags: ["UI", "Product"],
    },
    {
      title: "SmaRM",
      description:
        "Example slot for a second internal or client project — swap title, link, and tags.",
      meta: "Design · 2024",
      href: "#projects",
      label: "Design system notes",
      tags: ["Design", "Docs"],
    },
    {
      title: "ADOMee$",
      description:
        "Placeholder for a backend or API-focused project (REST, GraphQL, serverless).",
      meta: "Backend · 2024",
      href: "#projects",
      label: "API experiment",
      tags: ["Node", "API"],
    },
    {
      title: "ROBLOX GAMES",
      description:
        "Placeholder for a mobile or responsive PWA — link a store listing or demo when ready.",
      meta: "Mobile · 2023",
      href: "#projects",
      label: "Mobile concept",
      tags: ["PWA", "UI"],
    },
  ],
} as const;
