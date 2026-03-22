import { useState } from "react";
import { About } from "./components/About";
import { CertificationsModal } from "./components/CertificationsModal";
import { ContactModal } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [certificationsOpen, setCertificationsOpen] = useState(false);

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-content shadow-[0_4px_0_0_hsl(var(--p)/0.45)] transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Header onOpenContact={() => setContactOpen(true)} />
      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
      <CertificationsModal
        open={certificationsOpen}
        onClose={() => setCertificationsOpen(false)}
      />
      <main id="main" className="portfolio-scene pt-28 sm:pt-[4.25rem]">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <Hero
            onOpenContact={() => setContactOpen(true)}
            onOpenCertifications={() => setCertificationsOpen(true)}
          />
          <Projects />
          <Experience />
          <About />
          <Footer />
        </div>
      </main>
    </>
  );
}
