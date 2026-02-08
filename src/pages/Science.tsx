import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Science = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl text-primary mb-4 text-center">
            science behind her
          </h1>
          <p className="font-body text-muted-foreground text-center mb-12">
            for all the girlies that truly want to understand how the brain works.
          </p>

          {/* Glossary */}
          <section className="mb-16">
            <h2 className="font-display text-2xl text-primary mb-6">
              glossary of terms °ᡣ𐭩 . ° .
            </h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="font-display text-lg text-primary mb-2">nervous system</h3>
                <p className="font-body text-sm text-muted-foreground">
                  the body's communication network that controls how you respond to stress, safety, and everything in between. it's always scanning for danger—even when there isn't any.
                </p>
              </div>
              
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="font-display text-lg text-primary mb-2">emotional regulation</h3>
                <p className="font-body text-sm text-muted-foreground">
                  your ability to manage and respond to emotional experiences. it's not about suppressing feelings—it's about not being overwhelmed by them.
                </p>
              </div>
              
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="font-display text-lg text-primary mb-2">window of tolerance</h3>
                <p className="font-body text-sm text-muted-foreground">
                  the zone where you can experience emotions without shutting down or exploding. when you're in your window, you can think clearly and respond thoughtfully.
                </p>
              </div>
              
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="font-display text-lg text-primary mb-2">fight, flight, freeze, fawn</h3>
                <p className="font-body text-sm text-muted-foreground">
                  your body's automatic responses to perceived threat. fight = anger/defend. flight = escape/avoid. freeze = shut down/numb. fawn = people-please/appease.
                </p>
              </div>
            </div>
          </section>

          {/* Why You Can't Snap Out */}
          <section>
            <h2 className="font-display text-2xl text-primary mb-6">
              why you can't just 'snap out of it'
            </h2>
            
            <div className="space-y-4 font-body text-muted-foreground">
              <p>
                when your nervous system is activated, the logical part of your brain (prefrontal cortex) goes offline. you're operating from your survival brain.
              </p>
              <p>
                this is why you can't "just think positive" or "calm down" on command. your body needs to feel safe first—and that happens through the body, not the mind.
              </p>
              <p>
                the tools in this toolkit work because they target your nervous system directly: cold water, grounding, breath, movement. they speak the language your body understands.
              </p>
              <p className="font-medium text-foreground">
                you're not broken. your brain is doing exactly what it was designed to do. we're just helping it remember that you're safe now.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Science;
