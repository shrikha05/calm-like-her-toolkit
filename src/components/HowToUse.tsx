import { Heart, MessageSquare, Shield } from "lucide-react";

const steps = [
  {
    icon: Heart,
    text: "scroll to 'what are you feeling today' and choose an emotional state that resonates closest with your experience.",
  },
  {
    icon: MessageSquare,
    text: "click on a feeling card to access the guided tool and prompts designed for that specific state.",
  },
  {
    icon: Shield,
    text: "complete the suggested tool. stop if you feel overwhelmed.",
  },
];

const HowToUse = () => {
  return (
    <section id="how-to-use" className="section-padding bg-card">
      <div className="max-w-3xl mx-auto">
        {/* Badge */}
        <div className="flex items-center gap-2 mb-8">
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
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-dustyPink flex items-center justify-center">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-body text-sm text-foreground leading-relaxed pt-2">
                {step.text}
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
