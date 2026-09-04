import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shivrajsingh.dev"),
  title: {
    default: "Shivraj Singh | Full-Stack & WordPress Developer",
    template: "%s | Shivraj Singh",
  },
  description:
    "Portfolio of Shivraj Singh, a Full-Stack and WordPress Developer specializing in React, Node.js, MongoDB, WordPress, responsive web development, and modern web applications.",
  keywords: [
    "Shivraj Singh",
    "Full-Stack Developer",
    "WordPress Developer",
    "MERN Stack",
    "React.js Developer",
    "Node.js",
    "MongoDB",
    "Elementor",
    "RESTful APIs",
    "Web Development Indore",
    "Frontend Developer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Shivraj Singh", url: "https://shivrajsingh.dev" }],
  creator: "Shivraj Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shivrajsingh.dev",
    title: "Shivraj Singh | Full-Stack & WordPress Developer",
    description:
      "Full-stack and WordPress developer with hands-on experience building responsive, high-conversion websites and scalable web applications.",
    siteName: "Shivraj Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivraj Singh | Full-Stack & WordPress Developer",
    description:
      "Full-stack and WordPress developer with hands-on experience building responsive, high-conversion websites and web applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shivraj Singh",
  jobTitle: "Full-Stack & WordPress Developer",
  email: "shivrajsingh1059@gmail.com",
  telephone: "+91 9516981528",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indore",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Medi-Caps University",
  },
  knowsAbout: [
    "JavaScript",
    "React.js",
    "Node.js",
    "MongoDB",
    "WordPress",
    "Elementor",
    "RESTful APIs",
    "Python",
    "SQL",
    "Responsive Web Design",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-[#070a12] text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
