export interface ExperienceItem {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  current: boolean;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Embtel Web Solution Pvt Ltd",
    companyUrl: "https://embtelsolutions.com",
    role: "WordPress Developer",
    period: "Oct 2025 – Present",
    current: true,
    location: "Indore, India",
    description:
      "Embtel Solutions is a web design agency headquartered in Fremont, California, offering digital marketing and app development services. Building custom, responsive websites and apps that drive higher conversion and generate qualified leads for client brands.",
    achievements: [
      "Building custom, responsive websites and apps that drive higher conversion and generate qualified leads for client brands.",
      "Developing high-performance web components and custom WordPress implementations tailored to brand requirements.",
      "Implementing lead capture pipelines and third-party integration funnels.",
      "Optimizing site performance, cross-browser compatibility, and mobile user experience."
    ],
    technologies: [
      "WordPress",
      "Elementor",
      "JavaScript",
      "React",
      "REST APIs",
      "HTML5",
      "CSS3"
    ],
  },
  {
    company: "TekPlus Business Consulting and Services",
    companyUrl: "https://tekplus.com/site/",
    role: "WordPress Developer",
    period: "Oct 2024 – Oct 2025",
    current: false,
    location: "Indore, India",
    description:
      "TekPlus is a technology analyst house and corporate end-user consultancy with over twenty years of experience advising senior leadership on business transformation, digitisation, and IT & communications strategy.",
    achievements: [
      "IT & Communications Strategy — supported enterprise IT solutions, cloud computing, and cybersecurity initiatives.",
      "Business Transformation — contributed to technology adoption strategies for large-scale business improvements.",
      "SaaS & Enterprise Software — evaluated and recommended SaaS-based LMS, CRM, and ERP solutions.",
      "Data Analytics & Market Research — conducted competitive analysis and industry benchmarking.",
      "Consulting & Advisory — delivered actionable insights to executive leadership teams."
    ],
    technologies: [
      "WordPress",
      "Elementor",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "HTML5"
    ],
  },
];
