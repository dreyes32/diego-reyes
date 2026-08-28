export const site = {
  name: "Diego Gomez",
  fullName: "Diego Zidane Reyes Gomez",
  role: "AI Engineer & Researcher",
  location: "San Diego, CA",
  headline:
    "I build intelligent systems across AI engineering, machine learning, computer vision, and human-computer interaction.",
  summary:
    "My work sits at the intersection of agentic AI — including WALT at Werfen — geometric deep learning, and interactive 3D systems.",
  description:
    "Portfolio of Diego Zidane Reyes Gomez, an AI engineer and researcher working on WALT, agentic systems, machine learning, computer vision, graph neural networks, and XR.",
  url: "https://diego-reyes.vercel.app",
  resumeHref: "/Resume.pdf",
  resumeAvailable: true,
  links: {
    linkedin: "https://www.linkedin.com/in/diegozrg-dev",
    github: "https://github.com/dreyes32",
    email: "dreyesgomez@ucsd.edu",
  },
  nav: [
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Work", href: "/#work" },
    { label: "Research", href: "/#research" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
