import { useState } from "react";
import { Mail, Sparkles } from "lucide-react";

interface EmailGateProps {
  onUnlock: () => void;
}

const EmailGate = ({ onUnlock }: EmailGateProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError("please enter your email");
      return;
    }
    
    if (!email.includes("@")) {
      setError("please enter a valid email");
      return;
    }

    // Store email (could be sent to a backend in future)
    localStorage.setItem("clh_email", email);
    onUnlock();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6 bg-background/60 backdrop-blur-md overflow-y-auto">
      <div className="w-full max-w-md text-center bg-card/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl border border-border/50 p-6 sm:p-8 my-auto sm:my-0 max-h-[90vh] overflow-y-auto">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-dustyPink mx-auto mb-4 sm:mb-6 flex items-center justify-center shrink-0">
          <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
        </div>

        <h2 className="font-display text-2xl sm:text-3xl text-primary mb-3 sm:mb-4">
          before we begin...
        </h2>
        
        <p className="font-body text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
          enter your email to unlock the toolkit. we'll only use it to send you gentle reminders and future rituals.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder="your email"
              className="w-full px-4 sm:px-6 py-3.5 sm:py-4 rounded-full border border-border bg-card font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-dustyPink min-h-[48px] text-base"
            />
            {error && (
              <p className="mt-2 font-body text-sm text-destructive">{error}</p>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full btn-navy flex items-center justify-center gap-2 min-h-[48px] touch-manipulation"
          >
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>unlock the toolkit</span>
          </button>
        </form>

        <p className="mt-4 sm:mt-6 font-body text-xs text-muted-foreground">
          your email is safe with us. no spam, ever.
        </p>
      </div>
    </div>
  );
};

export default EmailGate;
