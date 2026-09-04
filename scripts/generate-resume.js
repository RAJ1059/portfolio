const fs = require("fs");
const path = require("path");
const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const timesBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const timesItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  const PAGE_WIDTH = 595.28; // Standard A4 width
  const PAGE_HEIGHT = 841.89; // Standard A4 height
  const MARGIN_X = 54;
  const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2;

  const textColor = rgb(0.1, 0.1, 0.1);
  const linkColor = rgb(0.12, 0.35, 0.7);
  const ruleColor = rgb(0.15, 0.15, 0.15);

  // Helper for drawing wrapped text
  function drawWrappedText(page, text, x, y, maxWidth, font, size, lineHeight, color = textColor) {
    const words = text.split(" ");
    let line = "";
    let currentY = y;

    for (let i = 0; i < words.length; i++) {
      const testLine = line + (line === "" ? "" : " ") + words[i];
      const width = font.widthOfTextAtSize(testLine, size);
      if (width > maxWidth && line !== "") {
        page.drawText(line, { x, y: currentY, size, font, color });
        line = words[i];
        currentY -= lineHeight;
      } else {
        line = testLine;
      }
    }
    if (line !== "") {
      page.drawText(line, { x, y: currentY, size, font, color });
      currentY -= lineHeight;
    }
    return currentY;
  }

  function drawSectionHeader(page, title, y) {
    page.drawText(title, {
      x: MARGIN_X,
      y,
      size: 11,
      font: timesBold,
      color: textColor,
    });
    page.drawLine({
      start: { x: MARGIN_X, y: y - 4 },
      end: { x: PAGE_WIDTH - MARGIN_X, y: y - 4 },
      thickness: 1,
      color: ruleColor,
    });
    return y - 18;
  }

  // ================= PAGE 1 =================
  const page1 = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let y = PAGE_HEIGHT - 45;

  // Header
  const nameText = "SHIVRAJ SINGH";
  const nameWidth = timesBold.widthOfTextAtSize(nameText, 18);
  page1.drawText(nameText, {
    x: (PAGE_WIDTH - nameWidth) / 2,
    y,
    size: 18,
    font: timesBold,
    color: textColor,
  });
  y -= 16;

  const titleText = "FULL-STACK & WORDPRESS DEVELOPER";
  const titleWidth = timesRoman.widthOfTextAtSize(titleText, 11);
  page1.drawText(titleText, {
    x: (PAGE_WIDTH - titleWidth) / 2,
    y,
    size: 11,
    font: timesRoman,
    color: textColor,
  });
  y -= 15;

  const contactText = "Indore, India | 9516981528 | shivrajsingh1059@gmail.com";
  const contactWidth = timesRoman.widthOfTextAtSize(contactText, 9.5);
  page1.drawText(contactText, {
    x: (PAGE_WIDTH - contactWidth) / 2,
    y,
    size: 9.5,
    font: timesRoman,
    color: textColor,
  });
  y -= 22;

  // OBJECTIVE
  y = drawSectionHeader(page1, "OBJECTIVE", y);
  const objText =
    "Full-stack and WordPress developer with hands-on experience building responsive, high-conversion websites and web applications. Seeking to leverage front-end and back-end expertise to drive innovation, deliver measurable business results, and contribute to a fast-growing engineering team while continuing to grow professionally.";
  y = drawWrappedText(page1, objText, MARGIN_X, y, CONTENT_WIDTH, timesRoman, 9.5, 13);
  y -= 12;

  // EXPERIENCE
  y = drawSectionHeader(page1, "EXPERIENCE", y);

  // Embtel
  page1.drawText("WordPress Developer", { x: MARGIN_X, y, size: 10.5, font: timesBold, color: textColor });
  page1.drawText(" |  Embtel Web Solution Pvt Ltd", { x: MARGIN_X + timesBold.widthOfTextAtSize("WordPress Developer", 10.5), y, size: 10.5, font: timesRoman, color: textColor });
  const embtelDate = "Oct 2025 – Present";
  page1.drawText(embtelDate, {
    x: PAGE_WIDTH - MARGIN_X - timesItalic.widthOfTextAtSize(embtelDate, 9.5),
    y,
    size: 9.5,
    font: timesItalic,
    color: textColor,
  });
  y -= 14;

  const embtelDesc =
    "Embtel Solutions is a web design agency headquartered in Fremont, California, offering digital marketing and app development services. Building custom, responsive websites and apps that drive higher conversion and generate qualified leads for client brands.";
  y = drawWrappedText(page1, embtelDesc, MARGIN_X, y, CONTENT_WIDTH, timesRoman, 9, 12);
  page1.drawText("Company: ", { x: MARGIN_X, y, size: 9, font: timesRoman, color: textColor });
  page1.drawText("embtelsolutions.com", { x: MARGIN_X + 45, y, size: 9, font: timesRoman, color: linkColor });
  y -= 16;

  // TekPlus
  page1.drawText("WordPress Developer", { x: MARGIN_X, y, size: 10.5, font: timesBold, color: textColor });
  page1.drawText(" |  TekPlus Business Consulting and Services", { x: MARGIN_X + timesBold.widthOfTextAtSize("WordPress Developer", 10.5), y, size: 10.5, font: timesRoman, color: textColor });
  const tekDate = "Oct 2024 – Oct 2025";
  page1.drawText(tekDate, {
    x: PAGE_WIDTH - MARGIN_X - timesItalic.widthOfTextAtSize(tekDate, 9.5),
    y,
    size: 9.5,
    font: timesItalic,
    color: textColor,
  });
  y -= 14;

  const tekDesc =
    "TekPlus is a technology analyst house and corporate end-user consultancy with over twenty years of experience advising senior leadership on business transformation, digitisation, and IT & communications strategy.";
  y = drawWrappedText(page1, tekDesc, MARGIN_X, y, CONTENT_WIDTH, timesRoman, 9, 12);

  const tekBullets = [
    "•  IT & Communications Strategy — supported enterprise IT solutions, cloud computing, and cybersecurity initiatives.",
    "•  Business Transformation — contributed to technology adoption strategies for large-scale business improvements.",
    "•  SaaS & Enterprise Software — evaluated and recommended SaaS-based LMS, CRM, and ERP solutions.",
    "•  Data Analytics & Market Research — conducted competitive analysis and industry benchmarking.",
    "•  Consulting & Advisory — delivered actionable insights to executive leadership teams.",
  ];

  for (const bullet of tekBullets) {
    y = drawWrappedText(page1, bullet, MARGIN_X + 8, y, CONTENT_WIDTH - 8, timesRoman, 9, 11.5);
  }
  y -= 10;

  // PROJECTS
  y = drawSectionHeader(page1, "PROJECTS", y);

  const projectItems = [
    {
      title: "International Evaluations",
      tech: "(HTML, CSS, JavaScript)",
      desc: "Designed and developed a responsive, front-end website for a credential evaluation service using vanilla HTML, CSS, and JavaScript, focused on clean UX and cross-browser compatibility.",
      url: "internationalevaluations.com",
    },
    {
      title: "TekPlus",
      tech: "(WordPress, Elementor)",
      desc: "Built and maintained the corporate website for TekPlus Business Consulting, showcasing the company's services and thought leadership with a modern, professional design.",
      url: "tekplus.com/site/",
    },
    {
      title: "USO1 Visa",
      tech: "(WordPress, Elementor)",
      desc: "Designed and developed a modern, responsive, and user-friendly immigration services website using WordPress and Elementor.",
      url: "uso1visa.com",
    },
    {
      title: "Bay Area Accounting Solutions",
      tech: "(MongoDB, React.js, Node.js (MERN))",
      desc: "Developed a full-stack web application for an accounting firm using the MERN stack, covering both front-end UI and back-end API/data layer.",
      url: "bayareaaccountingsolutions.com",
    },
    {
      title: "Insurance Directions",
      tech: "(WordPress, Elementor)",
      desc: "Created a responsive, user-friendly website for an insurance services provider using WordPress and Elementor.",
      url: "insurancedirections.com",
    },
    {
      title: "Library Management System",
      tech: "",
      desc: "A software application designed to streamline library operations, including book inventory management, loan tracking, and user registration. Key features include cataloging, search functionality, and report generation to improve workflow efficiency and data organization.",
      url: "",
    },
  ];

  for (const proj of projectItems) {
    page1.drawText(proj.title, { x: MARGIN_X, y, size: 9.5, font: timesBold, color: textColor });
    if (proj.tech) {
      const offset = timesBold.widthOfTextAtSize(proj.title, 9.5) + 5;
      page1.drawText(proj.tech, { x: MARGIN_X + offset, y, size: 9, font: timesItalic, color: rgb(0.3, 0.3, 0.3) });
    }
    y -= 12;

    y = drawWrappedText(page1, proj.desc, MARGIN_X, y, CONTENT_WIDTH, timesRoman, 8.8, 11.5);
    if (proj.url) {
      page1.drawText(proj.url, { x: MARGIN_X, y, size: 8.8, font: timesRoman, color: linkColor });
      y -= 12;
    } else {
      y -= 4;
    }
  }

  // ================= PAGE 2 =================
  const page2 = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  y = PAGE_HEIGHT - 50;

  // TECHNICAL SKILLS
  y = drawSectionHeader(page2, "TECHNICAL SKILLS", y);
  const leftSkills = [
    "•  Python Programming",
    "•  SQL",
    "•  WordPress & Elementor",
    "•  Shopify",
    "•  HTML5 & CSS3",
    "•  Deployment & Hosting",
    "•  Microsoft 365",
    "•  Advanced Excel",
  ];
  const rightSkills = [
    "•  JavaScript (ES6+)",
    "•  React.js",
    "•  Node.js",
    "•  MongoDB (MERN Stack)",
    "•  RESTful API Integration",
    "•  Git & Version Control",
    "•  SEO Fundamentals",
    "•  Responsive & Cross-Browser Design",
  ];

  const colWidth = CONTENT_WIDTH / 2;
  const skillsStartY = y;
  let leftY = skillsStartY;
  for (const s of leftSkills) {
    page2.drawText(s, { x: MARGIN_X, y: leftY, size: 9.5, font: timesRoman, color: textColor });
    leftY -= 14;
  }
  let rightY = skillsStartY;
  for (const s of rightSkills) {
    page2.drawText(s, { x: MARGIN_X + colWidth, y: rightY, size: 9.5, font: timesRoman, color: textColor });
    rightY -= 14;
  }
  y = Math.min(leftY, rightY) - 10;

  // SOFT SKILLS
  y = drawSectionHeader(page2, "SOFT SKILLS", y);
  const softLeft = ["•  Communication", "•  Team Building"];
  const softRight = ["•  Problem Solving", "•  Time Management"];
  const softStartY = y;
  leftY = softStartY;
  for (const s of softLeft) {
    page2.drawText(s, { x: MARGIN_X, y: leftY, size: 9.5, font: timesRoman, color: textColor });
    leftY -= 14;
  }
  rightY = softStartY;
  for (const s of softRight) {
    page2.drawText(s, { x: MARGIN_X + colWidth, y: rightY, size: 9.5, font: timesRoman, color: textColor });
    rightY -= 14;
  }
  y = Math.min(leftY, rightY) - 10;

  // EDUCATION
  y = drawSectionHeader(page2, "EDUCATION", y);

  // College
  page2.drawText("B.Tech, Information Technology", { x: MARGIN_X, y, size: 10, font: timesBold, color: textColor });
  page2.drawText(" — Medi-Caps University, Indore", { x: MARGIN_X + timesBold.widthOfTextAtSize("B.Tech, Information Technology", 10), y, size: 10, font: timesRoman, color: textColor });
  y -= 13;
  page2.drawText("2020 – 2024  |  CGPA: 7.73", { x: MARGIN_X, y, size: 9, font: timesItalic, color: rgb(0.25, 0.25, 0.25) });
  y -= 16;

  // 12th
  page2.drawText("12th Grade", { x: MARGIN_X, y, size: 10, font: timesBold, color: textColor });
  page2.drawText(" — Gyan Sarovar Higher Secondary School", { x: MARGIN_X + timesBold.widthOfTextAtSize("12th Grade", 10), y, size: 10, font: timesRoman, color: textColor });
  y -= 13;
  page2.drawText("2019 – 2020  |  MPBSE  |  89.2%", { x: MARGIN_X, y, size: 9, font: timesItalic, color: rgb(0.25, 0.25, 0.25) });
  y -= 16;

  // 10th
  page2.drawText("10th Grade", { x: MARGIN_X, y, size: 10, font: timesBold, color: textColor });
  page2.drawText(" — SSM, Kedarpur, Gwalior (MP)", { x: MARGIN_X + timesBold.widthOfTextAtSize("10th Grade", 10), y, size: 10, font: timesRoman, color: textColor });
  y -= 13;
  page2.drawText("2017 – 2018  |  CBSE  |  84%", { x: MARGIN_X, y, size: 9, font: timesItalic, color: rgb(0.25, 0.25, 0.25) });
  y -= 18;

  // CERTIFICATIONS
  y = drawSectionHeader(page2, "CERTIFICATIONS", y);
  const certs = [
    "•  Python Programming — Coursera",
    "•  SQL — The Digital Adda",
    "•  Data Science — SkillUp",
    "•  CCNA — Cisco",
  ];
  for (const c of certs) {
    page2.drawText(c, { x: MARGIN_X, y, size: 9.5, font: timesRoman, color: textColor });
    y -= 14;
  }
  y -= 6;

  // ACHIEVEMENTS & AWARDS
  y = drawSectionHeader(page2, "ACHIEVEMENTS & AWARDS", y);
  const achText =
    "Participated in SGFI yoga competitions, demonstrating consistent excellence and dedication to the sport, reflecting a broader commitment to discipline and achieving success at a competitive level.";
  y = drawWrappedText(page2, achText, MARGIN_X, y, CONTENT_WIDTH, timesRoman, 9.5, 13);
  y -= 12;

  // LANGUAGES
  y = drawSectionHeader(page2, "LANGUAGES", y);
  page2.drawText("English", { x: MARGIN_X, y, size: 9.5, font: timesRoman, color: textColor });
  page2.drawText(" — Professional Proficiency", { x: MARGIN_X + timesRoman.widthOfTextAtSize("English", 9.5), y, size: 9.5, font: timesItalic, color: rgb(0.3, 0.3, 0.3) });
  y -= 15;
  page2.drawText("Hindi", { x: MARGIN_X, y, size: 9.5, font: timesRoman, color: textColor });
  page2.drawText(" — Native Proficiency", { x: MARGIN_X + timesRoman.widthOfTextAtSize("Hindi", 9.5), y, size: 9.5, font: timesItalic, color: rgb(0.3, 0.3, 0.3) });

  // Save PDF
  const pdfBytes = await pdfDoc.save();
  const targetPath = path.join(__dirname, "..", "public", "Shivraj_Singh_Resume.pdf");
  fs.writeFileSync(targetPath, pdfBytes);
  console.log("Successfully generated resume PDF at: " + targetPath);
}

generateResume().catch(console.error);
