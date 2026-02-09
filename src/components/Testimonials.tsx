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
          <div className="relative z-10 bg-cream rounded-t-lg px-6 py-8 mx-4 shadow-sm border border-border/20">
            <p className="font-body text-base md:text-lg text-foreground leading-relaxed mb-4 italic">
              "{item.quote}"
            </p>
            <p className="font-body text-sm text-muted-foreground">
              — {item.author}
            </p>
          </div>

          {/* Envelope body */}
          <div className="relative -mt-4">
            {/* Envelope back */}
            <div className="bg-[hsl(var(--primary))] rounded-b-2xl rounded-t-sm h-24 shadow-md" />
            
            {/* Envelope flap (triangle) */}
            <div 
              className="absolute -top-8 left-0 right-0 mx-4"
              style={{
                height: 0,
                borderLeft: '140px solid transparent',
                borderRight: '140px solid transparent',
                borderBottom: '32px solid hsl(var(--primary))',
                margin: '0 auto',
                maxWidth: 'calc(100% - 2rem)',
              }}
            />
            
            {/* Inner envelope shadow line */}
            <div className="absolute top-0 left-4 right-4 h-px bg-primary-foreground/20" />
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
