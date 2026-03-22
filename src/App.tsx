import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectGrid } from "./components/ProjectGrid";
import { useThemeFromOs } from "./hooks/useThemeFromOs";

export default function App() {
  useThemeFromOs();

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-content transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="pt-[4.25rem]">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <Hero />
          <ProjectGrid />
          <About />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
