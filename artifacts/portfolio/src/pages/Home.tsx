import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import GithubStats from "@/components/sections/GithubStats";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/scroll-progress";
import BackToTop from "@/components/ui/back-to-top";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <ScrollProgress />
      <Navbar />
      
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Services />
      <Projects />
      <Testimonials />
      <GithubStats />
      <Contact />
      
      <Footer />
      <BackToTop />
    </main>
  );
}