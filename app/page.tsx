import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Workflow from "@/components/Workflow";
import Philosophy from "@/components/Philosophy";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-[#0281e0]/35 selection:text-white">
      {/* Sticky Minimalist Header */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1 flex flex-col">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Workflow />
        <Philosophy />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Signature Watermark Footer */}
      <Footer />
    </div>
  );
}
