export interface Project {
  id: string;
  title: string;
  slug: string;
  category: "Full-Stack" | "WordPress" | "Frontend" | "Software";
  projectType: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  websiteUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights: string[];
  metricsOrOutcome?: string;
}

export const projects: Project[] = [
  {
    id: "bay-area-accounting",
    title: "Bay Area Accounting Solutions",
    slug: "bay-area-accounting-solutions",
    category: "Full-Stack",
    projectType: "Full-Stack Application",
    description:
      "Full-stack web application for an accounting firm covering frontend UI and backend API/data functionality.",
    longDescription:
      "A complete MERN stack web application built for an established accounting practice. Encompasses a clean client-facing user interface coupled with secure backend REST APIs and a structured MongoDB database to streamline service inquiries, client interactions, and data storage.",
    technologies: ["MongoDB", "React.js", "Node.js", "MERN Stack", "RESTful APIs", "CSS3"],
    imageUrl: "/projects/bayarea-accounting.jpg",
    websiteUrl: "https://bayareaaccountingsolutions.com",
    featured: true,
    highlights: [
      "End-to-end full-stack MERN architecture",
      "Robust Node.js & Express RESTful API endpoints",
      "Structured MongoDB data modeling for customer requests",
      "Dynamic, responsive React component hierarchy",
      "Optimized for cross-browser accessibility and security"
    ],
    metricsOrOutcome: "Production MERN Application",
  },
  {
    id: "tekplus",
    title: "TekPlus Business Consulting",
    slug: "tekplus",
    category: "WordPress",
    projectType: "Corporate Website",
    description:
      "Corporate website for TekPlus Business Consulting showcasing services, expertise, and thought leadership.",
    longDescription:
      "An enterprise-grade corporate platform engineered for TekPlus Business Consulting and Services. Designed with custom Elementor layouts, responsive templates, and clean semantic structure to establish thought leadership and client confidence.",
    technologies: ["WordPress", "Elementor", "JavaScript", "HTML5", "CSS3", "SEO Fundamentals"],
    imageUrl: "/projects/tekplus.jpg",
    websiteUrl: "https://tekplus.com/site/",
    featured: true,
    highlights: [
      "Bespoke WordPress theme and Elementor design customization",
      "Structured services catalog and thought leadership showcase",
      "Cross-device responsiveness across mobile, tablet, and desktop",
      "Core Web Vitals and on-page SEO optimization"
    ],
    metricsOrOutcome: "Corporate Digital Presence",
  },
  {
    id: "healthcare-direction",
    title: "Healthcare Direction",
    slug: "healthcare-direction",
    category: "Frontend",
    projectType: "Healthcare IT Platform",
    description:
      "High-performance Healthcare IT platform engineered for Tekplus, delivering HIPAA-compliant telehealth, EHR integration, and AI diagnostics.",
    longDescription:
      "A cutting-edge healthcare technology portal developed for Healthcare Direction by Tekplus. Engineered with modern responsive UI architectures, HIPAA-compliant security standards, EHR system integration, and rapid response diagnostics metrics for 500+ healthcare organizations worldwide.",
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Healthcare IT", "RESTful APIs"],
    imageUrl: "/projects/healthcare-directions.png",
    websiteUrl: "https://healthcaredirections.netlify.app/",
    featured: true,
    highlights: [
      "HIPAA-compliant telehealth and EHR integration interface",
      "Sub-2s response time architecture with 98.7% security rating",
      "Responsive modern dark UI layout with interactive system status trackers",
      "Deployed on Netlify with fast edge global delivery"
    ],
    metricsOrOutcome: "Production Healthcare Platform",
  },
  {
    id: "uso1-visa",
    title: "USO1 Visa",
    slug: "uso1-visa",
    category: "WordPress",
    projectType: "Immigration Services",
    description:
      "Modern, responsive immigration services website focused on usability and professional presentation.",
    longDescription:
      "A high-trust digital portal developed for an international immigration services consultancy. Built to guide users through complex visa pathways with intuitive navigation, clear calls-to-action, and optimized inquiry channels.",
    technologies: ["WordPress", "Elementor", "JavaScript", "CSS3", "Lead Generation"],
    imageUrl: "/projects/uso1-visa.png",
    websiteUrl: "https://uso1visa.com",
    featured: true,
    highlights: [
      "Conversion-oriented layout architecture with clear CTAs",
      "Streamlined visa assessment and consultation booking forms",
      "Mobile-first responsive UX tested across multiple screen resolutions",
      "Fast page load speeds and clean asset delivery"
    ],
    metricsOrOutcome: "High-Conversion Portal",
  },
  {
    id: "international-evaluations",
    title: "International Evaluations",
    slug: "international-evaluations",
    category: "Frontend",
    projectType: "Front-End Website",
    description:
      "Responsive front-end website for a credential evaluation service with emphasis on clean UX and cross-browser compatibility.",
    longDescription:
      "A responsive client-facing web application interface for a foreign credential evaluation authority. Engineered with semantic HTML5, modern CSS3 styling, and JavaScript ES6+ to ensure seamless document submission guidance across diverse browsers.",
    technologies: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design", "Cross-Browser Design"],
    imageUrl: "/projects/international-evaluations.png",
    websiteUrl: "https://internationalevaluations.com",
    featured: true,
    highlights: [
      "Pure semantic HTML5 and vanilla modern JavaScript (ES6+)",
      "Strict cross-browser compatibility testing (Chrome, Safari, Firefox, Edge)",
      "Structured educational document submission guidance flows",
      "Lightweight footprint with zero extraneous framework overhead"
    ],
    metricsOrOutcome: "Clean Cross-Browser UX",
  },
  {
    id: "insurance-directions",
    title: "Insurance Directions",
    slug: "insurance-directions",
    category: "WordPress",
    projectType: "Business Website",
    description:
      "Responsive and user-friendly website developed for an insurance services provider.",
    longDescription:
      "A customer-focused website for an insurance advisory firm. Delivered an accessible layout allowing prospective policyholders to explore coverage options, understand policy terms, and initiate quotes with ease.",
    technologies: ["WordPress", "Elementor", "Responsive Design", "Form Integration"],
    imageUrl: "/projects/insurance-directions.png",
    websiteUrl: "https://insurancedirections.com",
    featured: false,
    highlights: [
      "Intuitive policy category breakdown and FAQ presentation",
      "Integrated lead capture and quote inquiry forms",
      "Device-agnostic responsive design with rapid mobile rendering",
      "Secure hosting setup and DNS configuration"
    ],
    metricsOrOutcome: "Service Lead Engine",
  },
  {
    id: "library-management-system",
    title: "Library Management System",
    slug: "library-management-system",
    category: "Software",
    projectType: "Software Application",
    description:
      "Software application designed to streamline library operations including book inventory, loan tracking, user registration, cataloging, search, and reporting.",
    longDescription:
      "A database-driven administrative software solution engineered to automate end-to-end library workflows. Implements relational data schemas for collection tracking, patron account status, checkout schedules, overdue alerts, and analytical management reports.",
    technologies: ["Python", "SQL", "RESTful APIs", "Database Design"],
    imageUrl: "/projects/library-system.jpg",
    featured: false,
    highlights: [
      "Relational SQL schema for book inventory, loans, and patron memberships",
      "Loan issue and return lifecycle tracking with automated status tracking",
      "Rapid search and catalog filtering queries",
      "Administrative reporting dashboard for inventory and circulation auditing"
    ],
    metricsOrOutcome: "Operational Automation",
  },
];
