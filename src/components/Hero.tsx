import { useNavigate } from "react-router-dom";
import { Sparkles, Mouse } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  const handleBegin = () => {
    navigate("/feelings");
  };

  const handleScroll = () => {
    const howToSection = document.getElementById("how-to-use");
    if (howToSection) {
      howToSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12 bg-background">
      {/* White Door */}
      <div className="relative mb-8">
        <div className="w-48 h-80 md:w-56 md:h-96 bg-card rounded-t-full shadow-lg border border-border flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-dustyPink-deep absolute right-8 top-1/2" />
        </div>
      </div>

      {/* Title */}
      <h1 className="font-display text-5xl md:text-7xl italic font-light text-primary mb-4 text-center">
        Calm Like Her
      </h1>
      
      <p className="font-body text-sm md:text-base text-muted-foreground text-center max-w-md mb-12">
        a ritual toolkit for the overthinker learning to feel safe again
      </p>

      {/* Click to Begin Button */}
      <button
        onClick={handleBegin}
        className="btn-navy flex items-center gap-2 mb-8"
      >
        <Sparkles className="w-4 h-4" />
        <span>click to begin</span>
      </button>

      {/* Scroll Indicator */}
      <button
        onClick={handleScroll}
        className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
        </div>
        <span className="font-body text-xs">or scroll to learn more</span>
      </button>
    </section>
  );
};

export default Hero;
