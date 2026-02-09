import { useState } from "react";
import { Mail, ChevronRight } from "lucide-react";
import envelopeElegant from "@/assets/envelope-elegant.png";

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
    <section className="py-8 md:py-12 px-4 md:px-12 bg-dustyPink">
      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Mail className="w-5 h-5 text-primary" />
          <h2 className="font-display text-2xl italic text-primary">
            letters from the community
          </h2>
        </div>

        {/* Envelope image */}
        <div className="relative mx-auto w-full max-w-md mb-4">
          <img
            src={envelopeElegant}
            alt="Envelope"
            className="w-full h-auto"
          />
        </div>

        {/* Quote card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-sm border border-border/30 mb-4">
          <p className="font-body text-base md:text-lg text-foreground leading-relaxed mb-3 italic">
            "{item.quote}"
          </p>
          <p className="font-body text-sm text-muted-foreground">
            — {item.author}
          </p>
        </div>

        {/* Next button */}
        <button
          type="button"
          onClick={goToNext}
          className="btn-navy flex items-center gap-2 rounded-full px-8 py-3 mx-auto"
        >
          <span>next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
