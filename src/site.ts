/** Public site / contact details */

/** Hero certifications modal — optional `href` for credential links */
export type SiteCertification = {
  readonly title: string;
  readonly issuer?: string;
  readonly year?: string;
  readonly href?: string;
};

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
  /** Roblox profile — games, favorites, and creations */
  robloxProfileUrl: "https://www.roblox.com/users/86242661/profile",
  /** UptimeRobot public status page (linked from Projects — cannot be iframed) */
  uptimeStatusUrl: "https://stats.uptimerobot.com/JyYATn0Zv8",
  /** Paths under public/ — served at /images/... */
  images: {
    profile: "/images/myPicture.png",
  },
  /** Education — school and milestone */
  education: {
    school: "Technological University of the Philippines – Manila",
    program: "Computer Science",
    dateLabel: "August 2026",
    logo: "/images/tup.png",
  } as const,
  /**
   * Shown in the hero “Certifications” modal.
   * Optional `href` links to a credential or issuer page.
   */
  certifications: [
    { title: "CSC – Professional", issuer: "CSC" },
    {
      title:
        "Business Intelligence with Power BI Querying Fundamentals with MySQL",
      issuer: "Data Analytics Philippines",
    },
    {
      title:
        "Building Generative AI-Powered Applications in Java TESDA [AI900] - Microsoft Azure AI Fundamentals",
      issuer: "TESDA · Microsoft",
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "IBM · TESDA",
      href: "https://www.credly.com/badges/f29597b6-fcee-443b-b430-97873e9b7a48",
    },
    {
      title: "Cloud Computing Fundamentals",
      issuer: "IBM · TESDA",
      href: "https://www.credly.com/badges/1c672da5-8157-4217-b2ce-07914db5cc46",
    },
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM · TESDA",
      href: "https://www.credly.com/badges/ee49cb18-cac3-43c8-9030-b15fea91ad28",
    },
    {
      title: "Information Technology Fundamentals",
      issuer: "IBM · TESDA",
      href: "https://www.credly.com/badges/f09efb4c-1ccf-4ef9-b1d8-ca48f0522fc1",
    },
    {
      title: "Web Development Fundamentals",
      issuer: "IBM · TESDA",
      href: "https://www.credly.com/badges/4b9c35bd-b1da-44bc-93e4-394170e5c49b",
    },
    {
      title: "Quantum Computing and Blockchain Lecture Series",
      issuer: "Quantum Computing Society of the Philippines",
      href: "https://verified.sertifier.com/en/verify/61183648067852/",
    },
  ] as const,
  about: {
    roles: [
      "QA Software Specialist",
      "QA Automation Specialist",
      "AI developer",
      "Power Tools developer",
      "Interactive experiences developer",
    ],
    intro:
      "I focus on quality engineering, test automation, and reliable delivery across web and business apps. I work with Microsoft Power Platform and modern JavaScript stacks — from exploratory testing to scripted automation and shipped experiences.",
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
      "Redmine",
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
      role: "IT Intern",
      dateRange: "Jan 12, 2026 – Present",
      duration: "2 months",
      image: "/images/meralco.png",
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
  /**
   * Featured work — optional `image` shows a cover on the card.
   * Roblox game art uses Roblox CDN URLs (may need refresh if a link expires).
   */
  projects: [
    {
      title: "GuestGo",
      description:
        "Thesis project: visitor management with a custom-trained face-detection model (YOLOv8) and a full-stack web app.",
      meta: "Web · 2025",
      href: "https://guest-go.vercel.app/",
      secondaryHref: "https://guestgo-ai.onrender.com/",
      label: "GuestGo web app (opens in new tab)",
      secondaryLabel: "GuestGo API backend (opens in new tab)",
      tags: ["Vite", "Tailwind", "Python", "YOLOv8", "AI", "API"],
      image: "/images/guestgo-logo-no_word.png",
    },
    {
      title: "ScorpBot",
      description:
        "Campus assistant chatbot for CEU Manila — conversational UI backed by Gemini.",
      meta: "Web · 2025",
      href: "https://scorpbot.onrender.com/",
      label: "ScorpBot AI (opens in new tab)",
      tags: ["Gemini", "AI"],
      image: "/images/scorpbot.png",
    },
    {
      title: "PH Mango AI",
      description:
        "Computer vision demo: Philippine mango varieties, live detection, and fresh vs rotten classification with a running counter.",
      meta: "App · 2024",
      href: "#projects",
      label: "PH Mango AI — details on this page",
      tags: ["Python", "OpenCV", "AI"],
      image: "/images/mango.jpg",
    },
    {
      title: "SmaRM",
      description:
        "Smart room reservation with role-based access — scheduling and approvals for shared spaces.",
      meta: "Web · 2024",
      href: "https://smarm.kesug.com/",
      label: "SmaRM — details on this page",
      tags: ["Open Source","PHP", "MySQL"],
      image: "/images/Smarm.png",
    },
    {
      title: "ADOMee$",
      description:
        "Role-based document management: upload, organize, and control who can view or edit files.",
      meta: "Web · 2024",
      href: "https://github.com/Nyakorare/ADOMEES",
      label: "ADOMee$ — details on this page",
      tags: ["Open Source","PHP", "MySQL"],
      image: "/images/adomees.png",
    },
    {
      title: "Roblox Projects",
      description:
        "Collection of my Roblox experiences. Open this card to browse each project one by one.",
      meta: "Roblox · Luau",
      href: "#projects",
      label: "Roblox projects — details on this page",
      tags: ["Roblox", "Luau", "Minigames"],
      image:
        "/images/Roblox.png",
      subProjects: [
        {
          title: "Ani Games",
          description:
            "Anime-inspired Roblox minigames — small experiences built in Studio with Luau.",
          meta: "Roblox · Luau",
          href: "https://www.roblox.com/games/18213261903/Ani-Games",
          label: "Ani Games on Roblox (opens in new tab)",
          tags: ["Roblox", "Luau"],
          image:
            "https://tr.rbxcdn.com/180DAY-d9d162ba0cce32e2308d022aa2de077b/512/512/Image/Png/noFilter",
        },
        {
          title: "Radix Sort visualization",
          description:
            "Interactive Roblox place that walks through a radix sort — built as a school algorithm project.",
          meta: "Roblox · Education",
          href: "https://www.roblox.com/games/17480130158/Radix-Sort-Algorithm-Visualization",
          label: "Radix Sort visualization on Roblox (opens in new tab)",
          tags: ["Roblox", "Algorithms"],
          image:
            "https://tr.rbxcdn.com/180DAY-7d1924cf5f61541e4efa073691b20ddb/512/512/Image/Png/noFilter",
        },
        {
          title: "Classic Minigames",
          description:
            "Lobby of varied minigames — older project (discontinued) with a large minigame roster and ongoing experiments.",
          meta: "Roblox · Minigames",
          href: "https://www.roblox.com/games/3103901140/Classic-Minigames",
          label: "Classic Minigames on Roblox (opens in new tab)",
          tags: ["Roblox", "Luau"],
          image:
            "https://tr.rbxcdn.com/180DAY-557f41cbc502caef57cb234096a3635e/512/512/Image/Png/noFilter",
        },
      ],
    },
  ],
} as const;
