export interface WorkflowStep {
  step: string;
  title: string;
  summary: string;
  deliverables: string[];
}

export const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: "Understand",
    summary: "Understand business requirements, users, and project goals.",
    deliverables: [
      "Target audience & user intent mapping",
      "Conversion & business objectives clarification",
      "Scope and technical feasibility review",
    ],
  },
  {
    step: "02",
    title: "Design",
    summary: "Create responsive interfaces and intuitive user experiences.",
    deliverables: [
      "Mobile-first responsive wireframing",
      "Component hierarchy & design tokens",
      "Accessible typography and spacing system",
    ],
  },
  {
    step: "03",
    title: "Develop",
    summary: "Build clean frontend, backend, CMS, and API functionality.",
    deliverables: [
      "Modular, reusable component architecture",
      "Custom WordPress templates and Elementor widgets",
      "Secure backend endpoints & schema validation",
    ],
  },
  {
    step: "04",
    title: "Integrate",
    summary: "Connect APIs, databases, forms, services, and third-party systems.",
    deliverables: [
      "Database modeling and queries",
      "Third-party webhook & REST API integrations",
      "Form validation, lead pipelines & notification triggers",
    ],
  },
  {
    step: "05",
    title: "Deploy",
    summary: "Deploy, configure hosting, domains, DNS, and production environments.",
    deliverables: [
      "Production cloud/cPanel hosting setup",
      "SSL, DNS record configuration & CDN routing",
      "Zero-downtime cutover and environment hardening",
    ],
  },
  {
    step: "06",
    title: "Improve",
    summary: "Optimize responsiveness, usability, SEO fundamentals, and performance.",
    deliverables: [
      "Core Web Vitals & asset minification",
      "Semantic HTML & on-page SEO meta tags",
      "Cross-browser regression testing & iterative polish",
    ],
  },
];

export interface PhilosophyPillar {
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export const philosophyPillars: PhilosophyPillar[] = [
  {
    title: "User First",
    tagline: "Intuitive & Accessible",
    description: "Build interfaces that are intuitive, accessible, and responsive across every device and network condition.",
    iconName: "UserCheck",
  },
  {
    title: "Clean Architecture",
    tagline: "Modular & Scalable",
    description: "Keep components reusable, maintainable, and easy to scale without accumulating technical debt.",
    iconName: "Layers",
  },
  {
    title: "Business Focused",
    tagline: "Results & Conversion",
    description: "Technology should solve real business problems and support measurable goals like lead generation and conversions.",
    iconName: "Target",
  },
  {
    title: "Continuous Improvement",
    tagline: "Evolve & Optimize",
    description: "Continuously improve performance, usability, and development practices through benchmark testing and feedback.",
    iconName: "TrendingUp",
  },
];
