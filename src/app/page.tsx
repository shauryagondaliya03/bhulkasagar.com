import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Streams from "@/components/Streams";
import ClassFinder from "@/components/ClassFinder";
import Gallery from "@/components/Gallery";
import CampusLife from "@/components/CampusLife";
import VideoSection from "@/components/VideoSection";
import FAQSection from "@/components/FAQSection";
import InstagramFeed from "@/components/InstagramFeed";
import Contact from "@/components/Contact";
import VisitCTA from "@/components/VisitCTA";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import Sathi from "@/components/Sathi";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Streams />
        <ClassFinder />
        <Gallery />
        <CampusLife />
        <VideoSection />
        <FAQSection />
        <InstagramFeed />
        <Contact />
        <VisitCTA />
      </main>
      <Footer />
      <MobileBar />
      <Sathi />
    </>
  );
}
