export interface CertificationItem {
  name: string;
  issuer: string;
  category: string;
  badge: string;
}

export const certifications: CertificationItem[] = [
  {
    name: "Python Programming",
    issuer: "Coursera",
    category: "Software Development",
    badge: "Verified Certificate",
  },
  {
    name: "SQL",
    issuer: "The Digital Adda",
    category: "Database & Querying",
    badge: "Specialized Course",
  },
  {
    name: "Data Science",
    issuer: "SkillUp",
    category: "Analytics & Data",
    badge: "Professional Training",
  },
  {
    name: "CCNA",
    issuer: "Cisco",
    category: "Networking & Infrastructure",
    badge: "Industry Standard",
  },
];

export interface AchievementItem {
  title: string;
  organization: string;
  significance: string;
  highlight: string;
}

export const achievements: AchievementItem[] = [
  {
    title: "SGFI Yoga Competitions",
    organization: "School Games Federation of India (SGFI)",
    significance:
      "Participated in SGFI yoga competitions, demonstrating consistent excellence and dedication to the sport, reflecting a broader commitment to discipline and achieving success at a competitive level.",
    highlight: "Consistent Excellence & Discipline",
  },
];
