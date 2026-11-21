import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Streams from "@/components/Streams";
import CampusLife from "@/components/CampusLife";
import InstagramFeed from "@/components/InstagramFeed";
import Contact from "@/components/Contact";
import VisitCTA from "@/components/VisitCTA";
import Footer from "@/components/Footer";
import Sathi from "@/components/Sathi";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Streams />
        <CampusLife />
        <InstagramFeed />
        <Contact />
        <VisitCTA />
      </main>
      <Footer />
      <Sathi />
    </>
  );
}
