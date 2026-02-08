import bunniesCherry from "@/assets/bunnies-cherry.png";

const WhySection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden pb-38 md:pb-46">
      <div className="max-w-3xl mx-auto text-left">
        <h2 className="font-display text-3xl md:text-4xl text-primary mb-8">
          why calm like her exists
        </h2>
        
        <div className="space-y-6 font-body text-muted-foreground">
          <p className="leading-relaxed">
            before you scroll, pause for a moment.
          </p>
          <p className="leading-relaxed">
            unclench your jaw. relax your shoulders.
          </p>
          <p className="leading-relaxed">
            this is a safe space, designed with love.
          </p>
          <p className="leading-relaxed">
            you don't need to fix everything right now.
          </p>
          <p className="leading-relaxed font-medium text-foreground">
            this toolkit is here to make you feel steadier, not perfect.
          </p>
        </div>
      </div>

      {/* Bunnies at bottom right, inset so they stay on page */}
      <img
        src={bunniesCherry}
        alt=""
        className="absolute bottom-0 right-8 md:right-12 lg:right-20 w-72 md:w-96 lg:w-[28rem] opacity-95 pointer-events-none"
      />
    </section>
  );
};

export default WhySection;
