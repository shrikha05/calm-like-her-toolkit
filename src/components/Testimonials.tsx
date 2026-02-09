import { useState } from "react";
import { Mail, ChevronRight } from "lucide-react";
import envelopeCard from "@/assets/envelope-card.png";

const testimonials = [
  {
    quote: "this toolkit helped me understand that my anxiety isn't something to fix—it's something to work with.",
    author: "anonymous",
  },
  {
    quote: "i finally have a resource that meets me where i am instead of asking me to be somewhere else.",
    author: "a grateful overthinker",
  },
  {
    quote: "the closing ritual alone has become my daily practice. thank you for creating this.",
    author: "mindlikehers community member",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const item = testimonials[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="pt-4 pb-4 md:pt-6 md:pb-6 px-3 md:px-12 bg-dustyPink flex flex-col">
      <div className="max-w-4xl mx-auto w-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 shrink-0 mb-0">
          <Mail className="w-5 h-5 text-primary" />
          <h2 className="font-display text-2xl italic text-primary">
            letters from the community
          </h2>
        </div>

        {/* Envelope */}
        <div className="relative w-full max-w-3xl lg:max-w-4xl mx-auto -mt-4 md:-mt-6 min-h-[400px] md:min-h-[480px] lg:min-h-[540px]">
          <img
            src={envelopeCard}
            alt=""
            className="w-full h-full object-contain object-center pointer-events-none"
          />
          {/* Text fitted inside the white note on the envelope */}
          <div
            className="absolute inset-[44%_18%_18%_30%] flex flex-col justify-center overflow-hidden"
            style={{
              transform: "rotate(-4deg)",
            }}
          >
            <div className="h-full flex flex-col justify-center px-2 py-1 md:px-3 md:py-1 min-w-0 max-w-[42ch]">
              <p className="font-body text-base md:text-lg text-foreground leading-tight mb-0 italic text-left drop-shadow-sm break-words">
                "{item.quote}"
              </p>
              <p className="font-body text-sm text-muted-foreground text-left drop-shadow-sm break-words mt-0">
                — {item.author.split("\n").map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>

        {/* Next button */}
        <div className="flex justify-center mt-2 shrink-0">
          <button
            type="button"
            onClick={goToNext}
            className="btn-navy flex items-center gap-2 rounded-full px-8 py-3"
          >
            <span>next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
