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

const Testimonials = () => {
  return (
    <section className="section-padding bg-dustyPink">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-12">
          <Mail className="w-5 h-5 text-primary" />
          <h2 className="font-display text-2xl italic text-primary">
            letters from the community
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl shadow-sm border border-border"
            >
              <p className="font-body text-sm text-foreground leading-relaxed mb-4 italic">
                "{item.quote}"
              </p>
              <p className="font-body text-xs text-muted-foreground">
                — {item.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
