export interface PersonalInfo {
  name: string;
  initials: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  positioning: string;
  objective: string;
  bio: string;
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
  socials: {
    platform: string;
    url: string;
    ariaLabel: string;
  }[];
  languages: {
    language: string;
    proficiency: string;
  }[];
  meetingUrl: string;
}

export const personalInfo: PersonalInfo = {
  name: "Shivraj Singh",
  initials: "SS",
  title: "Full-Stack & WordPress Developer",
  location: "Indore, India",
  email: "shivrajsingh1059@gmail.com",
  phone: "9516981528",
  phoneDisplay: "+91 9516981528",
  positioning:
    "Full-stack and WordPress developer with hands-on experience building responsive, high-conversion websites and web applications.",
  objective:
    "Full-stack and WordPress developer with hands-on experience building responsive, high-conversion websites and web applications. Seeking to leverage front-end and back-end expertise to drive innovation, deliver measurable business results, and contribute to a fast-growing engineering team while continuing to grow professionally.",
  bio: "Full-stack and WordPress developer with hands-on experience delivering responsive websites, corporate platforms, immigration portals, full-stack accounting web applications, and conversion-focused digital products. Proven capability orchestrating modern frontend architectures, robust backend APIs, CMS customization, and reliable production deployment.",
  stats: [
    {
      label: "Experience",
      value: "2+ Years",
      subtext: "Professional development",
    },
    {
      label: "Production Work",
      value: "Multiple",
      subtext: "Live deployed systems",
    },
    {
      label: "Architecture",
      value: "MERN Stack",
      subtext: "Full-stack engineering",
    },
    {
      label: "CMS Mastery",
      value: "WordPress",
      subtext: "High-conversion builds",
    },
  ],
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com",
      ariaLabel: "Shivraj Singh on GitHub",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com",
      ariaLabel: "Shivraj Singh on LinkedIn",
    },
    {
      platform: "Email",
      url: "mailto:shivrajsingh1059@gmail.com",
      ariaLabel: "Email Shivraj Singh",
    },
  ],
  languages: [
    { language: "English", proficiency: "Professional Proficiency" },
    { language: "Hindi", proficiency: "Native Proficiency" },
  ],
  meetingUrl:
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2utSGxp-FqzJ8k5Aw3SbIK_4vF7FFLfDTdeuxpM4UEAANjX-ci7TC8gdL5ZvFPTg-Shpn4UUlI",
};
