export type ModuleKey = "statistics" | "engineering" | "evaluation" | "life";

export type IdentityModule = {
  key: ModuleKey;
  index: string;
  title: string;
  verb: string;
  description: string;
  themes: readonly string[];
  href: string;
};

export type Project = {
  slug: string;
  primaryCategory: Exclude<ModuleKey, "life">;
  crossTags: readonly ModuleKey[];
  title: string;
  shortDescription: string;
  longDescription: string;
  problem: string;
  artifact: string;
  repoUrl: string;
  paperUrl?: string;
  demoUrl?: string;
  technologies: readonly string[];
  status: "Open source" | "Research" | "Hackathon" | "In progress";
  featured: boolean;
};

export const moduleLabels: Record<ModuleKey, string> = {
  statistics: "Statistical Reasoning",
  engineering: "Engineering",
  evaluation: "AI Evaluation",
  life: "Life",
};

export const siteConfig = {
  name: "Olivia Liu",
  fullName: "Jiaping (Olivia) Liu",
  handle: "@jiapivialiu",
  url: "https://jiapivialiu.com",
  email: "jiaping.liu@stat.ubc.ca",
  github: "https://github.com/jiapivialiu",
  linkedin: "https://www.linkedin.com/in/jiaping9",
  location: "Vancouver, Canada",
  role: "Statistics PhD · ML Systems Builder · AI Evaluation Researcher",
  description:
    "Olivia Liu builds intelligent systems and evaluates how well they work across statistics, recommender systems, machine learning engineering, and AI evaluation.",
  navigation: [
    { label: "Work", href: "/work" },
    { label: "Notes", href: "/notes" },
    { label: "About", href: "/about" },
  ],
} as const;

export const identityModules: readonly IdentityModule[] = [
  {
    key: "statistics",
    index: "01",
    title: "Statistical Reasoning",
    verb: "Reason carefully",
    description: "Reasoning about uncertainty before turning data into decisions.",
    themes: ["Uncertainty", "Estimation", "Optimization", "Scientific software"],
    href: "/work?module=statistics",
  },
  {
    key: "engineering",
    index: "02",
    title: "Engineering",
    verb: "Build systems",
    description: "Building models, pipelines, and systems that survive contact with the real world.",
    themes: ["Recommendation", "Ranking & retrieval", "ML systems", "Multimodal AI"],
    href: "/work?module=engineering",
  },
  {
    key: "evaluation",
    index: "03",
    title: "AI Evaluation",
    verb: "Evaluate intelligence",
    description: "Turning model behavior into evidence we can inspect, compare, and trust.",
    themes: ["LLM & agent evals", "Judge calibration", "Failure analysis", "Release decisions"],
    href: "/work?module=evaluation",
  },
  {
    key: "life",
    index: "04",
    title: "Life",
    verb: "Live curiously",
    description: "A life shaped by mountains, Main Mall, movement, food, and small discoveries.",
    themes: ["UBC", "Vancouver", "Hiking", "Photography"],
    href: "/about#life",
  },
] as const;

export const projects: readonly Project[] = [
  {
    slug: "rtestim",
    primaryCategory: "statistics",
    crossTags: ["engineering"],
    title: "Estimating a changing reproduction number",
    shortDescription: "Locally adaptive epidemic tracking with Poisson trend filtering.",
    longDescription:
      "A collaborative R package and research implementation for estimating time-varying effective reproduction numbers using a Poisson likelihood, trend-filtering regularization, and cross-validation.",
    problem: "How can epidemic growth be estimated without forcing the underlying trajectory to be globally smooth?",
    artifact: "Inspect the public R package, examples, and linked research implementation.",
    repoUrl: "https://github.com/jiapivialiu/rtestim",
    paperUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11329163/",
    technologies: ["R", "Trend filtering", "Poisson models", "Optimization"],
    status: "Research",
    featured: true,
  },
  {
    slug: "trendfilter",
    primaryCategory: "statistics",
    crossTags: ["engineering"],
    title: "Trend filtering, built for use",
    shortDescription: "Fast nonparametric regression in R and Python with compiled solvers.",
    longDescription:
      "Open-source implementations of locally adaptive nonparametric regression, including a Python interface with a C++ backend, cross-validation, and structured linear-system solvers.",
    problem: "How do we make flexible statistical estimation computationally practical and reusable?",
    artifact: "Explore the public R and Python implementations.",
    repoUrl: "https://github.com/jiapivialiu/trendfilter-py",
    technologies: ["Python", "C++", "pybind11", "Numerical methods"],
    status: "Open source",
    featured: false,
  },
  {
    slug: "recforge",
    primaryCategory: "engineering",
    crossTags: ["statistics", "evaluation"],
    title: "RecForge",
    shortDescription: "An industrial-style recommendation playground for user growth.",
    longDescription:
      "A local, synthetic-data recommender pipeline that separates multi-channel retrieval, FM + DCN v2 ranking, a Transformer sequence tower, business reranking, and offline evaluation.",
    problem: "What does a recommender look like when recall, ranking, policy, and cohort evaluation are treated as one system?",
    artifact: "Inspect the implemented local pipeline and its explicitly documented roadmap.",
    repoUrl: "https://github.com/jiapivialiu/RecForge-for-user-growth",
    technologies: ["PyTorch", "Hydra", "Parquet", "DCN v2", "Transformers"],
    status: "Open source",
    featured: true,
  },
  {
    slug: "vela-ai",
    primaryCategory: "engineering",
    crossTags: ["evaluation"],
    title: "Vela AI",
    shortDescription: "A multimodal workflow for localized ecommerce product imagery.",
    longDescription:
      "A hackathon prototype that removes text from product images, interprets visual content, generates Canadian English and French listings, and runs copy and language quality checks through a Streamlit workflow.",
    problem: "How can a product-image workflow combine visual understanding, localization, generation, and quality control?",
    artifact: "Run the public Streamlit demo in mock mode or connect the documented inference workflow.",
    repoUrl: "https://github.com/jiapivialiu/vela-ai-demo",
    technologies: ["Python", "Streamlit", "Multimodal models", "LLMs"],
    status: "Hackathon",
    featured: true,
  },
  {
    slug: "ai-text-detector",
    primaryCategory: "evaluation",
    crossTags: ["engineering"],
    title: "Machine-generated text detector",
    shortDescription: "A LoRA-tuned E5-small detector tested on the RAID benchmark.",
    longDescription:
      "A collaborative Microsoft Fabric hackathon project for classifying human and machine-generated language, with evaluation notebooks and documented robustness testing against adversarial transformations.",
    problem: "Where does an efficient text detector generalize, and what happens when the input distribution is deliberately perturbed?",
    artifact: "Review the public model workflow, evaluation notebook, collaborators, and benchmark notes.",
    repoUrl: "https://github.com/jiapivialiu/microsoft-hackathon-24",
    demoUrl: "https://devpost.com/software/lora-fine-tuned-ai-generated-detector",
    technologies: ["Python", "Transformers", "LoRA", "E5-small", "RAID"],
    status: "Hackathon",
    featured: true,
  },
  {
    slug: "agent-evaluation",
    primaryCategory: "evaluation",
    crossTags: ["engineering", "statistics"],
    title: "Evaluating agentic systems",
    shortDescription: "A developing practice around trajectories, judges, regressions, and human review.",
    longDescription:
      "An emerging research direction for evaluating tool-using systems through observable trajectories, calibrated judges, regression suites, failure taxonomies, and human-in-the-loop release decisions.",
    problem: "How should reliability be measured when a system acts across multiple steps rather than returning one answer?",
    artifact: "Public artifacts will be linked as the work becomes documented and reproducible.",
    repoUrl: "",
    technologies: ["Evaluation design", "LLM-as-a-judge", "Regression testing", "HITL"],
    status: "In progress",
    featured: false,
  },
] as const;

export const experiences = [
  {
    organization: "JD.com",
    label: "Recommender systems",
    detail: "Ranking, user modeling, experimentation, TensorFlow workflows, and online/offline metric analysis.",
  },
  {
    organization: "RBC",
    label: "Risk modeling",
    detail: "Large-scale PySpark workflows, survival modeling, class imbalance, and performance optimization.",
  },
  {
    organization: "UBC",
    label: "Statistics PhD",
    detail: "Methodology, computational optimization, open-source research software, writing, and teaching.",
  },
] as const;

export const notes = [
  {
    category: "Statistical reasoning",
    title: "What does it mean to reason from data?",
    description: "Distribution, uncertainty, assumptions, and the discipline of interpretation.",
  },
  {
    category: "ML systems",
    title: "Recommendation is a system, not a model",
    description: "Feedback loops, long-term value, and the gap between offline scores and product behavior.",
  },
  {
    category: "AI evaluation",
    title: "How do we know it is actually good?",
    description: "Judges, trajectories, regressions, and the failure modes hidden by a single metric.",
  },
] as const;
