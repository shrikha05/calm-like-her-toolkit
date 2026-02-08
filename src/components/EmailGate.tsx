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
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full bg-dustyPink mx-auto mb-6 flex items-center justify-center">
          <Mail className="w-8 h-8 text-primary" />
        </div>

        <h2 className="font-display text-3xl text-primary mb-4">
          before we begin...
        </h2>
        
        <p className="font-body text-muted-foreground mb-8">
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
              className="w-full px-6 py-4 rounded-full border border-border bg-card font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-dustyPink"
            />
            {error && (
              <p className="mt-2 font-body text-sm text-destructive">{error}</p>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full btn-navy flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>unlock the toolkit</span>
          </button>
        </form>

        <p className="mt-6 font-body text-xs text-muted-foreground">
          your email is safe with us. no spam, ever.
        </p>
      </div>
    </div>
  );
};

export default EmailGate;
