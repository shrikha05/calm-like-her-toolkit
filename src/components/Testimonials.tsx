import { Mail } from "lucide-react";

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

const getInitial = (author: string) => {
  const first = author.trim().split(/\s+/)[0];
  return first ? first[0].toUpperCase() : "?";
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="pt-8 sm:pt-10 pb-8 md:pt-12 md:pb-12 px-3 sm:px-6 md:px-12 bg-dustyPink"
    >
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="flex items-center justify-center gap-2 mb-8 sm:mb-10">
          <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0" />
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-primary text-center not-italic">
            Women all around the world are saying
          </h2>
        </div>

        {/* Horizontal testimonial cards */}
        <div className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory">
          {testimonials.map((item, i) => (
            <article
              key={i}
              className="flex-shrink-0 w-[min(100%,320px)] sm:w-[340px] bg-white rounded-xl shadow-md border border-white/80 p-5 sm:p-6 flex flex-col snap-start"
            >
              {/* Avatar + name */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-primary font-body font-semibold text-lg sm:text-xl shrink-0"
                  style={{ backgroundColor: "hsl(350 35% 92%)" }}
                >
                  {getInitial(item.author)}
                </div>
                <div className="min-w-0">
                  <p className="font-body font-semibold text-foreground text-sm sm:text-base truncate">
                    {item.author}
                  </p>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground">
                    from our community
                  </p>
                </div>
              </div>
              {/* Quote */}
              <p className="font-body text-sm sm:text-base text-foreground leading-relaxed flex-1">
                — {item.quote}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
