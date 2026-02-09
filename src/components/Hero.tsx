import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

// Stickers
import stickerLily from "@/assets/sticker-lily.png";
import stickerPlant from "@/assets/sticker-plant.png";
import stickerDragon from "@/assets/sticker-dragon.png";
import stickerBed from "@/assets/sticker-bed.png";
import stickerTulips from "@/assets/sticker-tulips.png";
import stickerDesk from "@/assets/sticker-desk.png";
import stickerLaptop from "@/assets/sticker-laptop.png";
import stickerNightstand from "@/assets/sticker-nightstand.png";

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
    <section className="min-h-screen min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-12 bg-background relative overflow-hidden">
      {/* Floating Stickers – smaller on phone, frame the title */}
      <img 
        src={stickerLily} 
        alt="" 
        className="absolute top-16 sm:top-20 left-[18%] md:left-[28%] w-20 sm:w-24 md:w-32 lg:w-36 opacity-90 -rotate-12 pointer-events-none z-[1]"
      />
      <img 
        src={stickerPlant} 
        alt="" 
        className="absolute top-20 sm:top-24 right-[12%] md:right-[22%] w-20 sm:w-24 md:w-36 lg:w-40 opacity-90 rotate-6 pointer-events-none z-[1]"
      />
      <img 
        src={stickerDragon} 
        alt="" 
        className="absolute top-28 sm:top-36 left-2 sm:left-6 md:left-14 w-24 sm:w-32 md:w-40 lg:w-44 opacity-90 rotate-3 pointer-events-none z-[1]"
      />
      <img 
        src={stickerBed} 
        alt="" 
        className="absolute top-24 sm:top-28 right-2 sm:right-6 md:right-12 w-32 sm:w-40 md:w-52 lg:w-56 opacity-90 -rotate-6 pointer-events-none z-[1]"
      />
      <img 
        src={stickerTulips} 
        alt="" 
        className="absolute bottom-[30%] sm:bottom-[28%] left-4 sm:left-8 md:left-20 w-20 sm:w-28 md:w-36 lg:w-40 opacity-90 rotate-12 pointer-events-none z-[1]"
      />
      <img 
        src={stickerDesk} 
        alt="" 
        className="absolute bottom-[28%] sm:bottom-[26%] right-4 sm:right-8 md:right-16 w-24 sm:w-32 md:w-40 lg:w-44 opacity-90 -rotate-3 pointer-events-none z-[1]"
      />
      <img 
        src={stickerLaptop} 
        alt="" 
        className="absolute bottom-16 sm:bottom-20 left-[14%] md:left-[22%] w-20 sm:w-28 md:w-36 lg:w-40 opacity-90 rotate-6 pointer-events-none z-[1]"
      />
      <img 
        src={stickerNightstand} 
        alt="" 
        className="absolute bottom-8 sm:bottom-12 right-[14%] md:right-[22%] w-24 sm:w-32 md:w-40 lg:w-44 opacity-90 -rotate-12 pointer-events-none z-[1]"
      />

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-lg">
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl italic font-light text-primary mb-3 sm:mb-4 text-center">
          Calm Like Her
        </h1>
        
        <p className="font-body text-sm md:text-base text-muted-foreground text-center max-w-md mb-8 sm:mb-12 px-1">
          a ritual toolkit for the overthinker learning to feel safe again
        </p>

        <button
          onClick={handleBegin}
          className="btn-navy flex items-center justify-center gap-2 mb-6 sm:mb-8 min-h-[48px] px-8 touch-manipulation"
        >
          <span>click to begin</span>
          <Sparkles className="w-4 h-4 shrink-0" />
        </button>

        <button
          onClick={handleScroll}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary active:opacity-80 transition-colors touch-manipulation py-2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
          </div>
          <span className="font-body text-xs">or scroll to learn more</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
