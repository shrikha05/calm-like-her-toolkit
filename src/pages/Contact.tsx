import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Instagram, Linkedin, Mail, ExternalLink } from "lucide-react";

const contactCards = [
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@calmlikeher",
    href: "https://instagram.com/calmlikeher",
    bgClass: "bg-pink-100 dark:bg-pink-900/20",
    iconClass: "text-pink-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Calm Like Her",
    href: "https://linkedin.com/company/calmlikeher",
    bgClass: "bg-blue-100 dark:bg-blue-900/20",
    iconClass: "text-blue-600",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "hello@calmlikeher.com",
    href: "mailto:hello@calmlikeher.com",
    bgClass: "bg-violet-100 dark:bg-violet-900/20",
    iconClass: "text-violet-600",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl text-primary mb-2 text-center">
            let's connect
          </h1>
          <p className="font-body text-muted-foreground text-center mb-10">
            we'd love to hear from you. reach out on any platform.
          </p>

          <div className="space-y-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-4 p-5 rounded-xl border border-border ${card.bgClass} hover:opacity-90 transition-opacity group`}
                >
                  <div className={`shrink-0 ${card.iconClass}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body font-medium text-foreground">{card.label}</p>
                    <p className="font-body text-sm text-muted-foreground truncate">
                      {card.handle}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
