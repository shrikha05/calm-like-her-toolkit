import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "home" },
  { to: "/science", label: "science behind her" },
  { to: "/contact", label: "contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border safe-area-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl md:text-3xl italic font-semibold text-primary" onClick={() => setMobileOpen(false)}>
          CLT
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden p-2 -mr-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors touch-manipulation"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className="font-body text-base py-3 px-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors touch-manipulation"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
