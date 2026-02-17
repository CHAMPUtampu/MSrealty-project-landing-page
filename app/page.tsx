import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Milestones from "@/components/Milestones";
import Team from "@/components/Team";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Milestones />
      <Team />
      <Location />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
