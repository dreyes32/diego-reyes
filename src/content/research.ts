export type ResearchItem = {
  slug: string;
  title: string;
  venue: string;
  status: string;
  question: string;
  motivation: string;
  approach: string;
  relatedProject?: string;
};

export const research: ResearchItem[] = [
  {
    slug: "adaptive-mesh-gnn",
    title: "Adaptive Mesh Optimization with Graph Neural Networks",
    venue: "McNair Scholars Program, UC San Diego",
    status: "November 2025 — August 2026",
    question:
      "Can a graph network learn which mesh vertices are worth keeping so real-time XR scenes stay readable after simplification?",
    motivation:
      "Uniform mesh density wastes compute on interiors and flat regions while starving silhouettes and interaction surfaces. XR needs a learned, task-aware alternative to generic decimation.",
    approach:
      "Represent the mesh as a graph. Predict per-vertex importance with a GNN using curvature, normals, and visibility. Drive refinement and simplification through PyTorch Geometric and Unreal Engine under runtime constraints.",
    relatedProject: "gnn-mesh-optimization",
  },
  {
    slug: "self-motion-trajectory",
    title: "Self-Motion and Trajectory Perception",
    venue: "Systems Neuroscience Lab, UC San Diego Cognitive Science",
    status: "June 2024 — January 2026",
    question:
      "How does self-motion in a virtual environment change the way people perceive trajectories?",
    motivation:
      "Interactive 3D systems are not only rendering problems. Perception shifts when the observer moves, which matters for XR and for models of spatial behavior.",
    approach:
      "I built Unreal Engine VR environments with controlled motion parameters, stimulus timing, and data-logging pipelines for behavioral analysis.",
  },
];
