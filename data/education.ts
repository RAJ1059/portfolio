export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  scoreLabel: string;
  score: string;
  boardOrAuthority?: string;
  details: string;
}

export const educationList: EducationItem[] = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Medi-Caps University",
    location: "Indore, India",
    period: "2020 – 2024",
    scoreLabel: "CGPA",
    score: "7.73 / 10",
    details:
      "Core coursework in Data Structures, Relational Database Systems, Software Engineering, Web Technologies, and Network Architecture.",
  },
  {
    degree: "Higher Secondary (12th Grade)",
    institution: "Gyan Sarovar Higher Secondary School",
    location: "Madhya Pradesh, India",
    period: "2019 – 2020",
    boardOrAuthority: "MPBSE",
    scoreLabel: "Percentage",
    score: "89.2%",
    details:
      "Senior secondary education with focus on Mathematics, Science, and Analytical Foundations.",
  },
  {
    degree: "Secondary School (10th Grade)",
    institution: "SSM, Kedarpur",
    location: "Gwalior, India",
    period: "2017 – 2018",
    boardOrAuthority: "CBSE",
    scoreLabel: "Percentage",
    score: "84.0%",
    details:
      "Secondary school education under the Central Board of Secondary Education curriculum.",
  },
];
