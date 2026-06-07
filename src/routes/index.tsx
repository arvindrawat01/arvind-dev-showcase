import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arvind Rawat — Software Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Arvind Rawat, a BCA graduate and aspiring software developer skilled in Java, Python, web technologies, and MongoDB.",
      },
      { property: "og:title", content: "Arvind Rawat — Software Developer Portfolio" },
      {
        property: "og:description",
        content:
          "BCA graduate & aspiring software developer. Explore my projects, skills, and get in touch.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Arvind Rawat",
          jobTitle: "Software Developer",
          address: { "@type": "PostalAddress", addressLocality: "Dehradun, Uttarakhand" },
          sameAs: [
            "https://github.com/arvindrawat01",
            "https://www.linkedin.com/in/arvind-rawat-74177a287/",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
