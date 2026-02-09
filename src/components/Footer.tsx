import { Instagram, Heart } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        {/* Want More Section */}
        <div className="text-center mb-12">
          <h3 className="font-display text-2xl italic mb-4">
            want more like this?
          </h3>
          <p className="font-body text-sm opacity-80 mb-6">
            this is just one drop in the mind like hers ritual library.
          </p>
          <a
            href="https://instagram.com/mindlikehers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm hover:opacity-80 transition-opacity"
          >
            <Instagram className="w-4 h-4" />
            follow @mindlikehers on ig
          </a>
        </div>

        {/* Email Subscribe – stacked on mobile for easier tapping */}
        <div className="max-w-md mx-auto mb-12 px-1">
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 sm:gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your email for future rituals"
                className="w-full flex-1 px-4 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body text-sm focus:outline-none focus:border-primary-foreground/40 min-h-[48px]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-dustyPink text-primary font-body text-sm hover:opacity-90 transition-opacity min-h-[48px] touch-manipulation shrink-0"
              >
                subscribe
              </button>
            </form>
          ) : (
            <p className="font-body text-sm text-center flex items-center justify-center gap-2">
              <Heart className="w-4 h-4" />
              thank you for joining the community
            </p>
          )}
        </div>

        {/* Credits */}
        <div className="text-center space-y-3 border-t border-primary-foreground/20 pt-8">
          <p className="font-body text-sm">
            ✧ Calm Like Her – toolkit version 2.0
          </p>
          <p className="font-body text-xs opacity-70">
            created with love by vaani abbott
          </p>
          <p className="font-body text-xs opacity-70">
            © 2025 Mind Like Hers. All rights reserved.
          </p>
          <p className="font-display text-lg italic mt-4">
            — vaani 🤍
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
