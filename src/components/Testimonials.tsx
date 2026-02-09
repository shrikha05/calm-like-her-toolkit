import { useState } from "react";
import { Mail, ChevronRight } from "lucide-react";

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
    <section className="py-12 md:py-16 px-4 md:px-12 bg-dustyPink">
      <div className="max-w-xl mx-auto text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Mail className="w-5 h-5 text-primary" />
          <h2 className="font-display text-2xl italic text-primary">
            letters from the community
          </h2>
        </div>

        {/* Envelope with letter */}
        <div className="relative mx-auto w-full max-w-md">
          {/* Letter/Quote card - positioned to peek out of envelope */}
          <div className="relative z-20 bg-cream rounded-lg px-6 py-6 mx-6 shadow-md border border-border/30 -mb-6">
            <p className="font-body text-base md:text-lg text-foreground leading-relaxed mb-3 italic">
              "{item.quote}"
            </p>
            <p className="font-body text-sm text-muted-foreground">
              — {item.author}
            </p>
          </div>

          {/* Envelope */}
          <div className="relative">
            {/* Envelope flap (top triangle) */}
            <svg 
              viewBox="0 0 400 80" 
              className="w-full h-auto relative z-10"
              preserveAspectRatio="none"
            >
              <polygon 
                points="0,80 200,10 400,80" 
                fill="hsl(var(--primary))"
                className="drop-shadow-sm"
              />
              {/* Flap inner shadow line */}
              <line 
                x1="10" y1="78" x2="200" y2="15" 
                stroke="hsl(var(--primary-foreground))" 
                strokeOpacity="0.15" 
                strokeWidth="1"
              />
              <line 
                x1="390" y1="78" x2="200" y2="15" 
                stroke="hsl(var(--primary-foreground))" 
                strokeOpacity="0.15" 
                strokeWidth="1"
              />
            </svg>
            
            {/* Envelope body */}
            <div className="bg-[hsl(var(--primary))] h-20 rounded-b-xl -mt-1 shadow-lg relative z-0">
              {/* Subtle inner fold lines */}
              <svg 
                viewBox="0 0 400 80" 
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <line 
                  x1="0" y1="0" x2="200" y2="60" 
                  stroke="hsl(var(--primary-foreground))" 
                  strokeOpacity="0.1" 
                  strokeWidth="1"
                />
                <line 
                  x1="400" y1="0" x2="200" y2="60" 
                  stroke="hsl(var(--primary-foreground))" 
                  strokeOpacity="0.1" 
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Next button */}
        <button
          type="button"
          onClick={goToNext}
          className="btn-navy flex items-center gap-2 rounded-full px-8 py-3 mx-auto mt-8"
        >
          <span>next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
