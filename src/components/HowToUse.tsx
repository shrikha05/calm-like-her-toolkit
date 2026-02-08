import { Heart } from "lucide-react";

const steps = [
  "scroll to 'what are you feeling today' and choose an emotional state that resonates closest with your experience.",
  "click on a feeling card to access the guided tool and prompts designed for that specific state.",
  "complete the suggested tool. stop if you feel overwhelmed.",
];

const HowToUse = () => {
  return (
    <section id="how-to-use" className="section-padding bg-card">
      <div className="max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-dustyPink px-4 py-2 rounded-full flex items-center gap-2">
            <Heart className="w-4 h-4 text-primary" />
            <span className="font-body text-sm text-primary">using calm like her</span>
          </div>
        </div>

        {/* Intro text */}
        <p className="font-body text-foreground mb-8">
          this is a guided emotional regulation experience.
        </p>
        <p className="font-body text-muted-foreground mb-12">
          use this toolkit when you feel emotionally activated, mentally overstimulated, or disconnected.
        </p>

        {/* Steps */}
        <div className="space-y-6 mb-12">
          {steps.map((text, index) => (
            <div
              key={index}
              className="p-4 bg-background rounded-xl border border-border text-left"
            >
              <p className="font-body text-sm text-foreground leading-relaxed">
                {index + 1}. {text}
              </p>
            </div>
          ))}
        </div>

        {/* Goals */}
        <div className="text-center space-y-2">
          <p className="font-display text-lg italic text-muted-foreground">
            the goal is not productivity.
          </p>
          <p className="font-display text-xl font-medium text-primary">
            the goal is nervous system safety.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
