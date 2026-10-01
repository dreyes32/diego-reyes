export type Experience = {
  id: string;
  organization: string;
  role: string;
  dates?: string;
  location?: string;
  focus: string;
  summary: string;
  technologies: string[];
};

export const experience: Experience[] = [
  {
    id: "werfen",
    organization: "Werfen",
    role: "AI Engineer Intern",
    dates: "June 2026 — September 2026",
    location: "San Diego, CA",
    focus: "WALT, RAG, Marketing & Digital Innovation",
    summary:
      "I developed a RAG-based Marketing Agent inside WALT, Werfen’s multi-agent AI platform, to automate research and response generation for high-volume technical product inquiries from global affiliates — a manual workflow that often took multiple days. I built document-grounded retrieval, intent classification, clarification, and escalation across five product lines so answers stayed inside validated documentation, and engineered document-family matching from normalized SAP metadata, identifiers, language, revisions, and file variants. I also added multilingual query handling, automated email generation, and AWS S3 part-number image retrieval, then checked model behavior, API payloads, filters, and fallbacks with regression tests and Postman.",
    technologies: ["Python", "RAG", "AWS S3", "MCP", "Postman"],
  },
  {
    id: "mcnair",
    organization: "UC San Diego McNair Scholars Program",
    role: "McNair Scholar — 3D Machine Learning Research",
    dates: "November 2025 — August 2026",
    location: "La Jolla, CA",
    focus: "GNNs, mesh optimization, XR",
    summary:
      "I designed a learning-based framework for adaptive 3D mesh optimization in XR. Meshes are represented as graphs; a GNN predicts vertex-level importance for refinement and simplification. The pipeline combines geometric features — curvature, normals, visibility — with PyTorch Geometric and Unreal Engine so visual fidelity and runtime cost can be traded off under real constraints.",
    technologies: [
      "Graph neural networks",
      "PyTorch Geometric",
      "Unreal Engine",
      "3D meshes",
    ],
  },
  {
    id: "qi",
    organization: "Qualcomm Institute, UC San Diego",
    role: "Software Engineer Intern",
    dates: "September 2025 — June 2026",
    location: "La Jolla, CA",
    focus: "Unreal Engine, simulation, VR",
    summary:
      "On The Climate Games I built gameplay logic and visualization pipelines in Unreal Engine and C++. I implemented a modular fire system for ignition, propagation, extinguishing, and damage over time, moved Blueprint-heavy gameplay into reusable C++-backed components, and integrated Niagara fire and smoke effects with GPU particles and parameter-driven emitters.",
    technologies: ["Unreal Engine", "C++", "Blueprints", "Niagara"],
  },
  {
    id: "sdsc",
    organization: "San Diego Supercomputer Center",
    role: "Software Engineer Intern",
    dates: "June 2023 — June 2026",
    location: "San Diego, CA",
    focus: "Full-stack workflow software",
    summary:
      "I redesigned Workload for Research Data Services in Next.js, React, TypeScript, and Tailwind: a Kanban board over GitLab, Zendesk, and Trello with member selection, project views, filtering, and five status columns. I containerized the frontend, Go backend, and PostgreSQL database with Docker Compose and wired API endpoints for local development.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Go",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    id: "sdsc-android",
    organization: "San Diego Supercomputer Center",
    role: "Android Developer Intern",
    dates: "June 2023 — June 2026",
    location: "San Diego, CA",
    focus: "Android, Kotlin, plant-growth tracking",
    summary:
      "I built Bloom Book, an Android app for plant growth tracking, with a responsive UI and data-driven visualization. I used Android Studio and Kotlin for interactive features and a database for growth monitoring, and designed wireframes and interactive prototypes in Figma before implementation.",
    technologies: ["Kotlin", "Android Studio", "Figma"],
  },
  {
    id: "cogsci",
    organization: "UC San Diego Cognitive Science Department",
    role: "UE Developer & Research Assistant",
    dates: "June 2024 — January 2026",
    location: "San Diego, CA",
    focus: "VR experiments, systems neuroscience",
    summary:
      "In the Systems Neuroscience Lab I supported Unreal Engine development for VR experiments on self-motion and trajectory perception, including controlled motion parameters, stimulus timing, and data-logging pipelines for behavioral analysis.",
    technologies: ["Unreal Engine", "VR", "HCI", "Experimental systems"],
  },
  {
    id: "cogsci-ia",
    organization: "UC San Diego Cognitive Science Department",
    role: "Instructional Assistant & Programming Tutor",
    location: "La Jolla, CA",
    focus: "Teaching, web, Python, UX, R",
    summary:
      "I supported COGS 3 students through foundational web assignments in HTML, CSS, and JavaScript. For COGS 18 I led weekly Python labs, helped with assignments, proctored coding exams, and wrote a Google Apps Script to flag students who needed extra support. In COGS 187A I mentored students on usability, information architecture, and XR interface design in Figma, and in COGS 160 I assisted with data processing, visualization, and time-series analysis in R.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Figma", "R"],
  },
  {
    id: "cognovate",
    organization: "Cognovate Labs, UCSD Global TIES",
    role: "UX Researcher",
    dates: "September 2024 — March 2025",
    location: "San Diego, CA",
    focus: "Neural signal processing, emergency systems",
    summary:
      "I worked with EMTs and clinicians on gaps in pre-hospital stroke assessment. I designed an EEG-based neural signal processing system for first responders and researched EKG integration to improve diagnostic accuracy and reduce latency in emergency evaluation.",
    technologies: ["EEG", "EKG", "Signal processing", "System design"],
  },
  {
    id: "ersp",
    organization: "McAuley Lab, UC San Diego CSE",
    role: "Undergraduate ML Researcher",
    dates: "September 2023 — June 2024",
    location: "La Jolla, CA",
    focus: "Sequence models, expressive performance",
    summary:
      "Through ERSP I built an LSTM sequence model that predicts expressive violin onset and offset timing from symbolic score features. I engineered preprocessing pipelines, a custom PyTorch loss on note-boundary distance, and compared linear regression, MLP, and LSTM models, then synthesized predictions to MIDI with MusPy.",
    technologies: ["PyTorch", "LSTM", "Python", "MusPy"],
  },
];
