import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import V0DevSection from "@/components/V0DevSection";
import DailyTips from "@/components/DailyTips";
import Prizes from "@/components/Prizes";
import JudgingCriteria from "@/components/JudgingCriteria";
import EventTimeline from "@/components/EventTimeline";
import RegisterSubmit from "@/components/RegisterSubmit";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <About />
    <V0DevSection />
    <DailyTips />
    <Prizes />
    <JudgingCriteria />
    <EventTimeline />
    <RegisterSubmit />
    <FAQ />
    <Footer />
  </div>
);

export default Index;
