import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl md:text-3xl italic font-semibold text-primary">
          CLT
        </Link>
        
        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            home
          </Link>
          <Link 
            to="/science" 
            className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            science behind her
          </Link>
          <a 
            href="mailto:hello@mindlikehers.com" 
            className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
