/**
 * All site copy lives here, separate from presentation.
 * Rule: only verifiable facts. No invented metrics, clients or testimonials.
 */

export type Status = "In development" | "In design" | "Planned" | "Shipped";

export interface Service {
  id: string;
  title: string;
  problem: string;
  deliverables: string[];
  forWho: string;
}

export interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  note?: string;
  points: string[];
  tags: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  status: Status;
  summary: string;
  scope: string[];
  stack: string[];
  href?: string;
}

export interface ProfessionalWork {
  title: string;
  context: string;
  detail: string;
}

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const site = {
  url: siteUrl,
  name: "Santiago Cartagena",
  role: "AI & ML Engineer",
  focus: "Fraud, risk and high-stakes decision systems",
  location: "Medellín, Colombia",
  timezone: "UTC−5 · overlaps US Eastern and Central hours",
  title: "Santiago Cartagena — AI & ML Engineer for fraud and risk systems",
  description:
    "Production AI for fraud, risk and high-stakes decisions: ML models, data pipelines and AI agents that decide who to trust and keep working after launch. ML engineering since 2021 across fintech, ad-tech and marketplaces.",
  headline: "Production AI for decisions that cost money when they're wrong.",
  subheadline:
    "I design and ship the ML models, data pipelines and AI agents behind fraud detection, risk scoring and automated decisions, and I keep them reliable after launch.",
  contact: {
    email: "santwhm@gmail.com",
    github: "https://github.com/Scarta19",
    // TODO(santiago): confirm the exact LinkedIn handle.
    linkedin: "https://www.linkedin.com/in/scartagenaa",
    // TODO(santiago): add a Cal.com / Calendly link to enable "Book a call".
    scheduling: "" as string,
    // TODO(santiago): drop an updated English CV at public/resume.pdf and set this to "/resume.pdf".
    resume: "" as string,
  },
};

export const proof: { label: string; value: string }[] = [
  { value: "Since 2021", label: "Building ML for fraud, AML and ad-tech" },
  { value: "3", label: "International companies in production ML" },
  { value: "Mercado Libre · FreshBooks · AdAction", label: "Where I've shipped" },
  { value: "Mathematical Engineering", label: "Universidad EAFIT" },
];

export const about = {
  title: "Statistics first. Production always.",
  paragraphs: [
    "I'm a Mathematical Engineer from Universidad EAFIT who has spent his career on machine learning that has to hold up in production: fraud and phishing detection at FreshBooks, ad-tech models at Mercado Libre's scale, anti-money-laundering research at FinCrime Dynamics, and now leading the technical side of conversion-risk intelligence at AdAction.",
    "Fraud and risk problems are adversarial, heavily imbalanced, and expensive to get wrong. Labels arrive late, attackers adapt, and a model is only as good as the decision threshold and monitoring around it. That is the work I specialize in, and it is where generic AI tooling breaks down.",
    "I work with companies that need these systems built properly: from the statistics and the data pipeline to the deployed model, the AI agents that support analysts, and the monitoring that tells you when it's drifting.",
  ],
};

export const services: Service[] = [
  {
    id: "risk",
    title: "Fraud & risk intelligence",
    problem:
      "Rules written by hand stop scaling: fraud slips through, good customers get blocked, and analysts drown in alerts.",
    deliverables: [
      "Risk scoring models for transactions, sign-ups, conversions or messages",
      "Cost-based approve / review / decline thresholds, not just AUC",
      "Shadow-mode rollout alongside your current rules",
      "Anomaly detection for patterns you don't have labels for yet",
    ],
    forWho: "Fintech, payments, lending, marketplaces and performance-marketing platforms.",
  },
  {
    id: "mlops",
    title: "Production ML & MLOps",
    problem:
      "Models that work in a notebook but are slow to ship, hard to reproduce and silent when they degrade.",
    deliverables: [
      "Training, evaluation and serving pipelines on GCP (Vertex AI, BigQuery) or AWS",
      "CI/CD, versioning and reproducible ML templates",
      "Drift, score-distribution and KPI monitoring with dbt and SQL",
      "Handling for delayed labels and feedback loops",
    ],
    forWho: "Teams with models in production, or about to be, and no dedicated ML platform.",
  },
  {
    id: "agents",
    title: "AI agents for risk operations",
    problem:
      "Investigations and reviews are manual, slow and inconsistent, and a generic chatbot doesn't know your data.",
    deliverables: [
      "LLM agents that triage cases using your models, features and history",
      "Evidence summaries and recommended actions with the reasoning shown",
      "Evaluation sets, guardrails, and cost and latency budgets before launch",
      "Human-in-the-loop review, so analysts decide and the agent prepares",
    ],
    forWho: "Risk, trust & safety and operations teams with a review queue.",
  },
  {
    id: "architecture",
    title: "AI architecture & integration",
    problem:
      "You know AI should be part of a decision process but not how to design it, measure it or connect it to existing systems.",
    deliverables: [
      "Architecture review and a written technical roadmap",
      "Build-vs-buy assessment for models, vendors and LLM providers",
      "Integration with your warehouse, APIs and event streams",
      "Experiment design so you can prove the impact",
    ],
    forWho: "Founders and engineering leaders planning their first serious ML or AI system.",
  },
];

export const moat = {
  title: "Not a prompt wrapper.",
  intro:
    "Anyone can call an LLM API. Fewer people can tell you whether a risk model is calibrated, what a threshold costs you, or why last month's precision collapsed.",
  points: [
    {
      title: "Mathematical depth",
      body: "Multivariate and robust statistics, causal inference and optimization: the tools for imbalanced, adversarial data.",
    },
    {
      title: "Production track record",
      body: "Models, pipelines and ML platform templates shipped inside large, regulated and fast-moving companies.",
    },
    {
      title: "Domain expertise in risk",
      body: "Fraud, phishing, anti-money-laundering and conversion risk across fintech and ad-tech.",
    },
    {
      title: "Evaluation discipline",
      body: "Every model and agent ships with an evaluation plan, monitoring and a clear owner for when it drifts.",
    },
  ],
};

export const experience: Role[] = [
  {
    company: "AdAction",
    title: "AI/ML Technical Leader",
    period: "2026 — Present",
    location: "Remote",
    points: [
      "Leading the technical development of Conversion Risk Intelligence, a fraud and risk detection initiative.",
      "Owning ML architecture, experimentation and MLOps practices for risk-based decision systems.",
    ],
    tags: ["Fraud detection", "ML architecture", "MLOps", "AWS", "Redshift", "Python"],
  },
  {
    company: "FreshBooks",
    title: "Machine Learning Engineer",
    period: "Aug 2025 — 2026",
    location: "Remote · via Jobsity",
    points: [
      "Worked on fraud and phishing detection: feature engineering, experimentation, evaluation and monitoring.",
      "Built 4+ production-ready ML platform templates on Kubeflow and Vertex AI with standardized training, evaluation and serving.",
      "Updated CI/CD workflows and GitHub Actions for testing, reproducibility and artifact versioning across ML components.",
      "Designed daily aggregation pipelines and KPI tracking with dbt and BigQuery for model drift, score distributions and fraud metrics.",
    ],
    tags: ["Vertex AI", "Kubeflow", "BigQuery", "dbt", "GitHub Actions", "GCP"],
  },
  {
    company: "Mercado Libre",
    title: "Machine Learning Engineer · AI Advertising",
    period: "Apr 2022 — Jul 2025",
    location: "Medellín, Colombia",
    points: [
      "Designed a similarity-model architecture for lookalike audiences across Mercado Libre sites in Latin America, built with FAISS in a team of four.",
      "Iterated on a reinforcement-learning model that selects the best ad creative to maximize click-through rate on the ads bidding platform.",
      "Contributed to an uplift (causal inference) model to increase orders attributed to push-notification campaigns in the mobile app.",
      "Queried and managed feature data with SQL on GCP across Latin American sites.",
    ],
    tags: ["FAISS", "Reinforcement learning", "Causal inference", "SQL", "GCP"],
  },
  {
    company: "FinCrime Dynamics",
    title: "Data Scientist · Part-time",
    period: "Aug 2021 — Dec 2024",
    location: "Remote",
    points: [
      "Developed an ensemble anomaly-detection method for anti-money-laundering, reaching 0.5 average precision on a heavily imbalanced, labeled synthetic dataset.",
      "Proposed matrix optimizations to a Conditional Tabular GAN (CTGAN) model for synthetic financial data generation.",
      "Advised on the usability and functionality of a synthetic data generation platform from a client perspective.",
    ],
    tags: ["AML", "Anomaly detection", "Synthetic data", "CTGAN"],
  },
];

export const projects: Project[] = [
  {
    slug: "risk-decisioning-engine",
    title: "Risk Decisioning Engine",
    tagline: "Open-source fraud scoring and decision service",
    status: "In development",
    summary:
      "An end-to-end reference system for fraud decisions: from event data to a calibrated risk score and an approve / review / decline decision set by business cost, served behind an API.",
    scope: [
      "Synthetic transaction and conversion events",
      "Feature pipeline and gradient-boosted risk model",
      "Probability calibration and cost-based thresholds",
      "FastAPI service, Docker, tests and CI",
    ],
    stack: ["Python", "LightGBM", "FastAPI", "Docker", "GitHub Actions"],
    href: "https://github.com/Scarta19/risk-decisioning-engine",
  },
  {
    slug: "fraud-triage-agent",
    title: "Fraud Case Triage Agent",
    tagline: "An LLM agent that prepares the review, an analyst decides",
    status: "In design",
    summary:
      "Takes the cases a risk model sends to manual review, gathers evidence with tool calls on scores and features, and writes a summary and a recommended action, measured against labeled outcomes.",
    scope: [
      "Tool calling over the decisioning engine",
      "Evaluation set with accuracy, cost and latency per case",
      "Guardrails and documented failure modes",
    ],
    stack: ["Python", "LLM APIs", "Tool calling", "Evaluations"],
  },
  {
    slug: "delayed-label-monitoring",
    title: "Monitoring Under Delayed Labels",
    tagline: "Knowing a fraud model is drifting before the chargebacks arrive",
    status: "Planned",
    summary:
      "A small library and write-up on monitoring risk models when ground truth arrives weeks late: population stability, score drift, calibration over time and alerting.",
    scope: ["Population stability and score-drift metrics", "Calibration tracking", "Alert rules and a technical article"],
    stack: ["Python", "SQL", "dbt"],
  },
];

export const professionalWork: ProfessionalWork[] = [
  {
    title: "Anomaly detection for anti-money-laundering",
    context: "FinCrime Dynamics · research",
    detail: "Ensemble of anomaly-detection frameworks with unsupervised feature selection; 0.5 average precision on a heavily imbalanced synthetic dataset.",
  },
  {
    title: "Lookalike audiences at marketplace scale",
    context: "Mercado Libre · team of four",
    detail: "Similarity-model architecture with FAISS to find audiences across Latin American sites.",
  },
  {
    title: "Standardized ML platform templates",
    context: "FreshBooks",
    detail: "4+ production-ready templates on Kubeflow and Vertex AI so new models ship with the same training, evaluation and serving workflow.",
  },
];

export const stack: { group: string; items: string[] }[] = [
  { group: "Languages & data", items: ["Python", "SQL", "dbt", "BigQuery", "Redshift"] },
  { group: "Machine learning", items: ["scikit-learn", "LightGBM", "XGBoost", "TensorFlow", "PyTorch", "FAISS"] },
  { group: "MLOps & cloud", items: ["Vertex AI", "Kubeflow", "SageMaker", "AWS", "GCP", "MLflow", "Airflow", "Docker", "GitHub Actions"] },
  { group: "Applied AI", items: ["LLM applications", "AI agents", "Tool calling", "Evaluations", "Claude Code", "Codex"] },
  { group: "Methods", items: ["Anomaly detection", "Causal inference", "Reinforcement learning", "Synthetic data", "Experimentation"] },
];

export const honors = [
  "Winner, Microsoft Hackathon Colombia 2021",
  "Winning team, TensorFlow National Community Challenge 2021",
];
