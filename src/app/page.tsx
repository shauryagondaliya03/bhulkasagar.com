import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Streams from "@/components/Streams";
import Stats from "@/components/Stats";
import CampusLife from "@/components/CampusLife";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import InstagramFeed from "@/components/InstagramFeed";
import Contact from "@/components/Contact";
import VisitCTA from "@/components/VisitCTA";
import Footer from "@/components/Footer";
import Sathi from "@/components/Sathi";
import ScrollTools from "@/components/ScrollTools";
import { LangProvider } from "@/components/LangProvider";

export default function Home() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Streams />
        <Stats />
        <CampusLife />
        <Events />
        <Testimonials />
        <Gallery />
        <FAQ />
        <InstagramFeed />
        <Contact />
        <VisitCTA />
      </main>
      <Footer />
      <Sathi />
      <ScrollTools />
    </LangProvider>
  );
}
