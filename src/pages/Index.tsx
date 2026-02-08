import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowToUse from "@/components/HowToUse";
import WhySection from "@/components/WhySection";
import Testimonials from "@/components/Testimonials";
import ClosingRitual from "@/components/ClosingRitual";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowToUse />
      <WhySection />
      <Testimonials />
      <ClosingRitual />
      <Footer />
    </div>
  );
};

export default Index;
