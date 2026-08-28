export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "AI / ML",
    items: [
      "RAG / LLM agents",
      "Vector search",
      "Graph neural networks",
      "PyTorch",
      "PyTorch Geometric",
      "LSTMs",
    ],
  },
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C++", "Go"],
  },
  {
    label: "Graphics / XR",
    items: ["Unreal Engine 5", "C++ gameplay", "Niagara", "3D meshes"],
  },
  {
    label: "Web / Software",
    items: ["Next.js", "React", "Tailwind CSS", "FastAPI", "PostgreSQL"],
  },
  {
    label: "Cloud / Infra",
    items: ["AWS", "S3", "Docker", "MCP", "REST APIs"],
  },
  {
    label: "Signals / Research",
    items: ["EEG / EKG", "VR experiments", "Model evaluation"],
  },
];

export const education = {
  school: "UC San Diego",
  degree: "B.S. Cognitive Science (HCI)",
  minor: "Minor in Computer Science",
  dates: "September 2022 — June 2026",
  honors: [
    "McNair Scholar",
    "HSF Scholar",
    "Early Research Scholars Program",
  ],
};
