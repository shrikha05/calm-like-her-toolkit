import { LucideIcon } from "lucide-react";

interface FeelingCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  onClick: () => void;
}

const FeelingCard = ({ title, icon: Icon, description, onClick }: FeelingCardProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-left card-pink group min-h-[72px] touch-manipulation active:scale-[0.99]"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dustyPink-deep/30 flex items-center justify-center group-hover:bg-dustyPink-deep/50 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-display text-xl text-primary mb-1">{title}</h3>
          <p className="font-body text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </button>
  );
};

export default FeelingCard;
