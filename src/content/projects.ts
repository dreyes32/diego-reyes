export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: "AI Systems" | "Research" | "Machine Learning" | "3D / XR" | "Software Engineering";
  featured: boolean;
  problem?: string;
  role?: string;
  built?: string;
  architecture?: string;
  challenges?: string;
  outcome?: string;
  confidential?: string;
  technologies: string[];
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "walt",
    title: "WALT",
    summary:
      "A RAG Marketing Agent inside WALT, Werfen’s multi-agent platform — document-grounded answers, routing, and escalation for technical product inquiries.",
    category: "AI Systems",
    featured: true,
    problem:
      "Global affiliates sent high-volume technical product questions that often took multiple days of manual research to resolve, and answers had to stay inside validated documentation.",
    role: "AI Engineer Intern, Marketing & Digital Innovation. I built and tested the Marketing Agent inside WALT.",
    built:
      "I developed document-grounded retrieval, intent classification, clarification, and escalation across five product lines so responses were generated from validated technical documentation and unsupported answers were blocked. I added document-family matching and routing from normalized SAP metadata — identifiers, language, revisions, file variants — plus multilingual query handling, automated email generation, and AWS S3 part-number image retrieval. I worked with Marketing and Digital Innovation stakeholders to turn those requirements into production-ready workflows, configure instrument-specific knowledge connectors, and check model behavior, API payloads, filters, and fallbacks with regression tests and Postman.",
    architecture:
      "WALT is Werfen’s multi-agent AI platform. The Marketing Agent retrieves from instrument-specific knowledge connectors, generates only from those documents, and clarifies or escalates when the evidence cannot support an answer. Internal service names, customer data, and proprietary diagrams are omitted here.",
    challenges:
      "The hard part is keeping generation inside the evidence, routing to the correct document family, and handling multilingual queries without mixing unrelated manuals.",
    outcome:
      "The agent was prepared for validation and deployment as a production workflow, replacing a multi-day manual research loop. Specific launch metrics stay internal.",
    confidential:
      "Customer information, internal architectures, private URLs, credentials, and proprietary documents are not shown.",
    technologies: [
      "RAG",
      "LLM agents",
      "Vector search",
      "AWS S3",
      "MCP",
      "Postman",
      "Python",
    ],
  },
  {
    slug: "gnn-mesh-optimization",
    title: "GNN Mesh Optimization",
    summary:
      "Graph neural networks that score mesh vertices so XR scenes keep the geometry that matters and discard the rest.",
    category: "Research",
    featured: true,
    problem:
      "Real-time XR cannot afford uniformly dense meshes. Naive decimation erases the silhouettes and contact surfaces that make an environment readable.",
    role: "McNair Scholar, 3D machine learning research. Faculty-mentored project in geometric deep learning.",
    built:
      "I designed a learning-based framework that represents meshes as graphs and uses a GNN to predict vertex-level importance for dynamic refinement and simplification. Geometric features include curvature, normals, and visibility. The pipeline is built to run with PyTorch Geometric and Unreal Engine.",
    architecture:
      "Meshes become graphs. A graph network estimates per-vertex importance; that signal drives simplification while holding onto features that matter for rendering and interaction.",
    challenges:
      "Importance is not the same as curvature. A vertex can be locally smooth and still load-bearing for silhouette or collision. The research problem is a signal that matches those XR constraints under runtime budgets.",
    outcome:
      "A real-time research pipeline for adaptive mesh optimization. Public results and posters will be added when they are available to share.",
    technologies: [
      "Graph neural networks",
      "PyTorch Geometric",
      "Geometric deep learning",
      "Unreal Engine",
      "3D meshes",
    ],
  },
  {
    slug: "climate-games",
    title: "The Climate Games",
    summary:
      "Unreal Engine simulation systems for a Qualcomm Institute climate-education game — fire spread, C++ gameplay, and GPU particle effects.",
    category: "3D / XR",
    featured: true,
    problem:
      "The Climate Games needed interactive climate scenarios that behave like systems: fire has to ignite, spread, damage, and extinguish in real time.",
    role: "Software Engineer Intern, Game Systems & VR Development at the Qualcomm Institute Serious Games Lab.",
    built:
      "I built gameplay logic and visualization pipelines in Unreal Engine and C++. The fire system models ignition, propagation, extinguishing, and damage over time. I refactored Blueprint-heavy gameplay into reusable components backed by native C++ and integrated Niagara fire and smoke VFX with GPU particles and parameter-driven emitters.",
    challenges:
      "Runtime cost mattered. Moving logic out of Blueprints and making VFX scale through parameters kept the simulation usable as environments grew.",
    outcome:
      "A modular fire and visualization toolkit used inside The Climate Games.",
    technologies: ["Unreal Engine", "C++", "Blueprints", "Niagara", "VR"],
    links: [
      {
        label: "UC San Diego Today",
        href: "https://today.ucsd.edu/story/the-climate-games",
      },
    ],
  },
  {
    slug: "violin-performance-rendering",
    title: "Violin Performance Rendering",
    summary:
      "An LSTM sequence model, trained in the McAuley Lab, that predicts expressive violin timing from symbolic scores.",
    category: "Machine Learning",
    featured: true,
    problem:
      "Literal score playback misses the onset and offset variation that makes a violin line sound performed rather than quantized.",
    role: "Undergraduate ML Researcher, McAuley Lab, through UCSD’s Early Research Scholars Program.",
    built:
      "I implemented an LSTM that predicts expressive onset and offset timing from symbolic violin features on a Bach-aligned MIDI-performance dataset. Preprocessing encoded sheet music as onset, duration, and pitch tuples. I wrote a custom PyTorch loss minimizing Euclidean distance between generated and real note boundaries, benchmarked linear regression, MLP, and LSTM models, and synthesized playable MIDI with MusPy.",
    challenges:
      "Expressive timing is a sequence problem. The useful result was the architecture comparison and a loss that directly penalized boundary error, not a single headline metric.",
    outcome:
      "Predicted timings rendered to MIDI for qualitative comparison against human performances. ERSP certificate of completion, June 2024.",
    technologies: ["PyTorch", "LSTM", "MLP", "Python", "MusPy"],
  },
  {
    slug: "sdsc-workload",
    title: "SDSC Workload",
    summary:
      "A Next.js Kanban app that pulls GitLab, Zendesk, and Trello work into one board for SDSC Research Data Services.",
    category: "Software Engineering",
    featured: true,
    problem:
      "Research Data Services tracked work across GitLab, Zendesk, and Trello. Priority and ownership were hard to see in one place.",
    role: "Software Engineer Intern. I redesigned the application and the local Docker development path.",
    built:
      "I rebuilt Workload in Next.js, React, TypeScript, and Tailwind with member selection, project views, issue filtering, and five status columns: active, blocked, pending, completed, and uncategorized, excluding closed items. The frontend, Go backend, and PostgreSQL database run under Docker Compose.",
    challenges:
      "Each card still needed provenance — which tool it came from — while living on one board.",
    outcome:
      "A single workflow surface for RDS task intake, with containerized local development.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Go",
      "PostgreSQL",
      "Docker Compose",
    ],
  },
  {
    slug: "bloom-book",
    title: "Bloom Book",
    summary:
      "An Android app for plant growth tracking — Kotlin UI, a local database, and Figma-first interaction design.",
    category: "Software Engineering",
    featured: true,
    role: "Android Developer Intern, San Diego Supercomputer Center.",
    built:
      "I built Bloom Book in Android Studio and Kotlin with a responsive, data-driven UI and interactive features for logging plant growth. A database stores growth records. I designed wireframes and interactive prototypes in Figma to settle user flows before implementation.",
    technologies: ["Kotlin", "Android Studio", "Figma"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
