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
  repoLabel?: string;
  additionalLinks?: readonly {
    label: string;
    url: string;
  }[];
  paperUrl?: string;
  demoUrl?: string;
  technologies: readonly string[];
  status: "Open source" | "Research" | "Hackathon" | "In progress";
  indexLabel?: string;
  featured: boolean;
};

export type Note = {
  category: string;
  title: string;
  description: string;
  destination: "academics" | "ml-systems";
  href: string;
};

export const moduleLabels: Record<ModuleKey, string> = {
  statistics: "Statistical Reasoning",
  engineering: "Engineering",
  evaluation: "AI Evaluation",
  life: "Life",
};

export const siteConfig = {
  name: "Jiaping (Olivia) Liu",
  fullName: "Jiaping (Olivia) Liu",
  handle: "@jiapivialiu",
  url: "https://jiapivialiu.com",
  email: "jiapivialiu@gmail.com",
  github: "https://github.com/jiapivialiu",
  linkedin: "https://www.linkedin.com/in/jiaping9",
  scholar: "https://scholar.google.ca/citations?user=hbZmyugAAAAJ&hl=en",
  location: "Vancouver, Canada",
  role: "Statistics PhD · ML Systems Builder · AI Evaluation Researcher",
  description:
    "Jiaping (Olivia) Liu builds intelligent systems and evaluates how well they work across statistics, recommender systems, machine learning engineering, and AI evaluation.",
} as const;

export const identityModules: readonly IdentityModule[] = [
  {
    key: "engineering",
    index: "01",
    title: "ML Systems",
    verb: "Build & evaluate",
    description: "Building intelligent systems and evaluating how they behave in the real world.",
    themes: ["Recommendation", "Agent workflows", "AI evaluation", "ML systems"],
    href: "/ml-systems#projects",
  },
  {
    key: "statistics",
    index: "02",
    title: "Statistical Reasoning",
    verb: "Reason carefully",
    description: "Reasoning about uncertainty before turning data into decisions.",
    themes: ["Uncertainty", "Estimation", "Optimization", "Scientific software"],
    href: "/academics",
  },
  {
    key: "life",
    index: "03",
    title: "Life",
    verb: "Live curiously",
    description: "A life shaped by mountains, Main Mall, movement, food, and small discoveries.",
    themes: ["UBC", "Vancouver", "Hiking", "Photography"],
    href: "/life",
  },
] as const;

export const projects: readonly Project[] = [
  {
    slug: "ai-native-research-workflow",
    primaryCategory: "evaluation",
    crossTags: ["engineering", "statistics"],
    title: "AI-native research workflow",
    shortDescription: "Skills and MCP tooling for rigorous dissertation and defence workflows.",
    longDescription:
      "A growing suite of reusable skills and MCP tools for coordinating evidence, document production, review, and evaluation across a high-stakes statistical research workflow.",
    problem: "How can agentic workflows support complex academic work while keeping sources, decisions, and human judgment inspectable?",
    artifact: "Completed components include reusable skills for styling statistical papers and evaluating presentation rehearsals; additional workflow and evaluation artifacts are in development.",
    repoUrl: "https://github.com/jiapivialiu/stat-paper-styling-skill",
    repoLabel: "stat-paper-styling-skill",
    additionalLinks: [
      {
        label: "presentation-rehearsal-feedback-skill",
        url: "https://github.com/jiapivialiu/presentation-rehearsal-feedback-skill",
      },
    ],
    technologies: ["Codex skills", "MCP", "Agent workflows", "Evaluation design"],
    status: "In progress",
    featured: true,
  },
  {
    slug: "rtestim",
    primaryCategory: "statistics",
    crossTags: ["engineering"],
    title: "Estimating a time-varying reproduction number",
    shortDescription: "Locally adaptive epidemic tracking with Poisson trend filtering.",
    longDescription:
      "A collaborative R package and research implementation for estimating time-varying effective reproduction numbers using a Poisson likelihood, trend-filtering regularization, and cross-validation.",
    problem: "How can epidemic growth be estimated without forcing the underlying trajectory to be globally smooth?",
    artifact: "Inspect the public R package, examples, and linked research implementation.",
    repoUrl: "https://dajmcdon.github.io/rtestim/",
    repoLabel: "Package site",
    additionalLinks: [
      { label: "Source code", url: "https://github.com/jiapivialiu/rt-est-manuscript" },
    ],
    paperUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11329163/",
    technologies: ["R", "C++", "Convex Optimization", "Nonparametric regression", "Poisson model", "Computational biology"],
    status: "Research",
    indexLabel: "Methodology",
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
    repoLabel: "Python package",
    additionalLinks: [
      { label: "R package", url: "https://github.com/glmgen/trendfilter" },
      { label: "Source code", url: "https://github.com/jiapivialiu/kf-tf-linear" },
    ],
    technologies: ["Python", "R", "C++", "Convex optimization", "Large-scale linear system"],
    status: "Open source",
    indexLabel: "Algorithm",
    featured: false,
  },
  {
    slug: "ten-years-of-statistics",
    primaryCategory: "statistics",
    crossTags: [],
    title: "Ten years of thinking statistically",
    shortDescription: "A personal reflection on a decade shaped by statistics.",
    longDescription:
      "A long-form reflection on how ten years of studying and practicing statistics changed the way I approach evidence, uncertainty, computation, and the limits of what data can tell us.",
    problem: "What remains after a decade of learning how to reason with data?",
    artifact: "A personal essay connecting statistical training, research practice, and the habits of mind that extend beyond any single method.",
    repoUrl: "",
    repoLabel: "Essay forthcoming",
    technologies: ["Statistical reasoning", "Research practice", "Scientific writing"],
    status: "In progress",
    indexLabel: "Reflection",
    featured: false,
  },
  {
    slug: "recforge",
    primaryCategory: "engineering",
    crossTags: ["statistics", "evaluation"],
    title: "Modern Personalized Recommendation",
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
    title: "Multi-agent pipeline",
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
] as const;

export const experiences = [
  {
    organization: "JD.com",
    title: "Machine Learning Engineer (Algorithm Development Engineer)",
    industry: "E-commerce",
    label: "Personalized recommendation system",
    bullets: [
      "Improved click-through rate by ranking retrieved products for push and messaging recommendations, combining feature engineering, deep learning, joint pointwise and pairwise learning, and large language models; achieved a +0.31% relative overall pCTR increase and +0.78% among high-active customers.",
      "Built SQL monitoring panels for online and offline metrics, conducted A/B experiments, explored natural-language query understanding, and addressed online-offline inconsistency and cold start for low-active users.",
    ],
    publicExample: "An independently built, non-confidential example inspired by this internship context.",
    href: "/ml-systems#recforge",
    linkLabel: "Modern personalized recommendation",
  },
  {
    organization: "RBC",
    title: "Risk Modeling Analyst",
    industry: "Financial services",
    label: "Credit risk modeling pipeline",
    bullets: [
      "Built a credit-risk modeling pipeline on billion-level user-behavior data, using survival analysis as a baseline to predict probability of default for overdraft accounts.",
      "Resolved large-scale data-quality issues involving duplicated records, substantial missingness, and incorrect account open, reopen, and close dates.",
      "Explored LLM-derived transaction embeddings and reimplemented survival-model fitting in PyTorch, reducing training time by more than 4× on million-row data with distributed scaling support.",
    ],
  },
  {
    organization: "UBC",
    title: "PhD Candidate in Statistics",
    industry: "Higher education & research",
    label: "Computational statistics research",
    detail: "Methodology, computational optimization, open-source research software, writing, and teaching.",
  },
  {
    organization: "UBC ASDa",
    title: "Statistical Consultant",
    industry: "Research consulting",
    label: "Statistical consulting across research domains",
    detail: "Collaborated with more than 10 clients across research domains, applying statistical modeling and machine learning and independently delivering data-driven analysis reports.",
    href: "https://stat.ubc.ca/applied-statistics-and-data-science-group-asda",
    linkLabel: "Applied Statistics and Data Science Group (ASDa)",
  },
  {
    organization: "Statistics Canada",
    title: "Student Researcher",
    industry: "Government",
    label: "Machine learning for record linkage",
    detail: "Explored machine-learning approaches for reliably linking records when identifying information is incomplete or inconsistent.",
  },
] as const;

export const notes: readonly Note[] = [
  {
    category: "Statistical reasoning",
    title: "Ten years of thinking statistically",
    description: "A personal reflection on evidence, uncertainty, computation, and the limits of what data can tell us.",
    destination: "academics",
    href: "/academics#ten-years-of-statistics",
  },
  {
    category: "ML systems",
    title: "Recommendation is a system, not a model",
    description: "Feedback loops, long-term value, and the gap between offline scores and product behavior.",
    destination: "ml-systems",
    href: "/ml-systems#recforge",
  },
  {
    category: "AI evaluation",
    title: "How do we know it is actually good?",
    description: "Judges, trajectories, regressions, and the failure modes hidden by a single metric.",
    destination: "ml-systems",
    href: "/ml-systems#ai-native-research-workflow",
  },
] as const;
