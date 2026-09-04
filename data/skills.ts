export interface SkillItem {
  name: string;
  levelBadge?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Modern, component-driven user interfaces built for speed and responsiveness.",
    skills: [
      { name: "React.js", levelBadge: "Core Framework", highlight: true },
      { name: "JavaScript (ES6+)", levelBadge: "Proficient", highlight: true },
      { name: "HTML5 & CSS3", levelBadge: "Semantic Web", highlight: true },
      { name: "Responsive & Cross-Browser Design", levelBadge: "Cross-Platform", highlight: true },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Scalable server architectures, endpoints, and backend services.",
    skills: [
      { name: "Node.js", levelBadge: "Runtime", highlight: true },
      { name: "RESTful API Integration", levelBadge: "Integration", highlight: true },
      { name: "Python Programming", levelBadge: "Programming" },
    ],
  },
  {
    title: "Database Management",
    description: "Document stores and relational databases designed for data integrity.",
    skills: [
      { name: "MongoDB (MERN Stack)", levelBadge: "NoSQL / MERN", highlight: true },
      { name: "SQL", levelBadge: "Relational Queries" },
    ],
  },
  {
    title: "CMS & E-Commerce",
    description: "Production client platforms, customized themes, and business stores.",
    skills: [
      { name: "WordPress & Elementor", levelBadge: "Deep Expertise", highlight: true },
      { name: "Shopify", levelBadge: "Storefronts" },
    ],
  },
  {
    title: "Tools & Infrastructure",
    description: "Engineering workflows, version control, and production environments.",
    skills: [
      { name: "Git & Version Control", levelBadge: "Source Control", highlight: true },
      { name: "Deployment & Hosting", levelBadge: "DNS & Live Servers", highlight: true },
      { name: "Microsoft 365", levelBadge: "Productivity & Ops" },
      { name: "SEO Fundamentals", levelBadge: "Search Visibility", highlight: true },
      { name: "Advanced Excel", levelBadge: "Data Analysis" },
    ],
  },
  {
    title: "Professional Soft Skills",
    description: "Collaborative, analytical, and execution skills for cross-functional teams.",
    skills: [
      { name: "Communication", levelBadge: "Client & Team", highlight: true },
      { name: "Problem Solving", levelBadge: "Analytical", highlight: true },
      { name: "Team Building", levelBadge: "Collaboration" },
      { name: "Time Management", levelBadge: "Delivery" },
    ],
  },
];
