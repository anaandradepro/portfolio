import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SoftwareMarquee from "@/components/SoftwareMarquee";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <Hero />
      <SoftwareMarquee />
      <Projects />
      <About />
      <Skills />
      <Footer />
    </main>
  );
}
