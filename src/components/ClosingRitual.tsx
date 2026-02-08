const ClosingRitual = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl text-primary mb-8">
          closing ritual ⊹₊˚ꕤ˚₊⊹
        </h2>

        <div className="space-y-6 font-body text-muted-foreground">
          <p>before you leave this space, pause for a moment.</p>
          <p>place one hand on your chest or stomach.</p>
          <p>take one slow breath in through your nose.</p>
          <p>exhale gently through your mouth.</p>
          <p className="text-foreground">
            notice how your body feels now — even if the change is subtle.
          </p>
        </div>

        <div className="my-12 p-8 bg-dustyPink rounded-2xl">
          <p className="font-display text-lg italic text-primary mb-4">
            say quietly (out loud or in your head):
          </p>
          <div className="space-y-2 font-body text-foreground">
            <p className="italic">"i am allowed to slow down."</p>
            <p className="italic">"i don't need to solve everything today."</p>
            <p className="italic">"this is enough for now."</p>
          </div>
        </div>

        <div className="space-y-4 font-body text-muted-foreground">
          <p>if something is still heavy, you don't need to carry it alone.</p>
          <p>you can return to this toolkit whenever you need support.</p>
          <p className="text-foreground font-medium">
            when you're ready, close the page and re-enter your day gently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingRitual;
