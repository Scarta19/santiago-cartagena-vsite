/**
 * All site copy lives here, separate from presentation.
 * Rule: only verifiable facts. No invented metrics, clients or testimonials.
 */

export type Status = "In development" | "In design" | "Planned" | "Shipped";

export interface Service {
  id: string;
  title: string;
  /** Bottom line: the business result, stated first. */
  outcome: string;
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
  /** Bottom line: what this project proves to a buyer. */
  proves: string;
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
  eyebrow: "AI risk engineering · fintech, marketplaces & ad-tech",
  headline: "Stop losing money to fraud and bad automated decisions.",
  subheadline:
    "I build production AI that scores risk, catches fraud and decides who to trust, with thresholds set by what a wrong decision costs you, and monitoring that keeps it working after launch.",
  bottomLine: [
    { k: "What you get", v: "A risk model or AI agent running in production, measured in business cost, not just accuracy." },
    { k: "Best fit", v: "Companies handling payments, sign-ups or ad conversions at volume, where fraud or false declines already cost real money." },
    { k: "First step", v: "A 30-minute call. You leave with a clear yes or no on whether ML will pay off for your case." },
  ],
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
  title: "ML in production since 2021: fraud, risk and ad-tech, at international companies.",
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
    outcome: "Catch more fraud while blocking fewer good customers.",
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
    outcome: "Ship models faster and know the moment they degrade.",
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
    outcome: "Analysts review cases faster, with evidence already gathered.",
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
    outcome: "A plan you can defend before you spend on building.",
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

export const engagements: { step: string; name: string; outcome: string; detail: string }[] = [
  {
    step: "01",
    name: "Discovery call",
    outcome: "A clear yes or no on whether ML will pay off for your problem.",
    detail: "30 minutes, free. We look at the decision you want to automate, your data and what errors cost you.",
  },
  {
    step: "02",
    name: "Risk ML review",
    outcome: "A written diagnosis and a roadmap with the highest-return fixes first.",
    detail: "Fixed scope, fixed price. Data, labels, current rules, evaluation and monitoring, reviewed end to end.",
  },
  {
    step: "03",
    name: "Build sprint",
    outcome: "A working model, agent or pipeline in production, run in shadow mode before it decides.",
    detail: "Scoped deliverables with weekly demos. Your team owns the code and the documentation at handover.",
  },
  {
    step: "04",
    name: "Ongoing advisory",
    outcome: "A senior ML engineer on call without a full-time hire.",
    detail: "Monthly retainer for monitoring reviews, model updates, architecture decisions and team support.",
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
    proves: "Fraud ML from raw events to a cost-optimized decision behind an API.",
    tagline: "Open-source fraud scoring and decision service",
    status: "Shipped",
    summary:
      "An end-to-end reference system for fraud decisions: from event data to a calibrated risk score and an approve / review / decline decision set by business cost, served behind an API. On its synthetic test window, with illustrative costs, the cost policy cuts expected loss from $1,535 to $232 per 1,000 events versus approving everything. Known weaknesses are documented in the README.",
    scope: [
      "Synthetic events with four fraud patterns: card testing, account takeover, bot farms, friendly fraud",
      "Point-in-time features shared by training and the API",
      "LightGBM with a time-based split and probability calibration",
      "Cost-based approve / review / decline policy with reason codes",
      "FastAPI service, Docker, 31 tests and CI",
    ],
    stack: ["Python", "LightGBM", "FastAPI", "Docker", "GitHub Actions"],
    href: "https://github.com/Scarta19/risk-decisioning-engine",
  },
  {
    slug: "fraud-triage-agent",
    title: "Fraud Case Triage Agent",
    proves: "AI agents that are measured, bounded and tied to real risk operations.",
    tagline: "An LLM agent that prepares the review, an analyst decides",
    status: "Shipped",
    summary:
      "A Claude agent that takes the cases the risk model sends to manual review, gathers evidence with read-only tool calls and recommends approve, decline or escalate. On 60 synthetic review cases it automated 15 (all correct, no fraud approved) and escalated 45, lowering cost per case from $6.03 to $5.03 plus $0.05 of LLM cost. Letting the model decide alone cost $13.67 per case. A small sample with illustrative costs; limits are documented in the README.",
    scope: [
      "Read-only tools over the decisioning engine: case summary, entity history, similar resolved cases",
      "Fails closed: refusals, errors and invalid answers go to the analyst",
      "Evaluation against escalate-all, model-only and an oracle, with LLM cost and latency per case",
    ],
    stack: ["Python", "Claude API", "Tool calling", "Evaluations"],
    href: "https://github.com/Scarta19/risk-decisioning-engine#triage-agent-for-the-review-lane",
  },
  {
    slug: "delayed-label-monitoring",
    title: "Monitoring Under Delayed Labels",
    proves: "Keeping fraud models healthy when the truth arrives weeks later.",
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
