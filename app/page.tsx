import Navbar from './components/navbar';
import Hero from './components/hero';
import Offer from './components/offer';
import DemosSection from './components/DemosSection';
import Process from './components/process';
import About from './components/about';
import FAQ from './components/faq';
import Contact from './components/contact';
import Footer from './components/footer';
import AnimatedSection from './components/animated-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-stone-100 selection:bg-stone-100 selection:text-zinc-950 overflow-x-hidden">
      <Navbar />
      
      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      <AnimatedSection>
        <Offer />
      </AnimatedSection>

      <AnimatedSection>
        <DemosSection />
      </AnimatedSection>

      <AnimatedSection>
        <Process />
      </AnimatedSection>

      <AnimatedSection>
        <About />
      </AnimatedSection>

      <AnimatedSection>
        <FAQ />
      </AnimatedSection>

      <AnimatedSection>
        <Contact />
      </AnimatedSection>

      <Footer />
    </main>
  );
}