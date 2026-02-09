import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { LucideIcon, X } from "lucide-react";

interface FeelingDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon: LucideIcon;
  content: {
    intro: string;
    steps: string[];
    affirmation: string;
  };
}

const FeelingDialog = ({
  isOpen,
  onClose,
  title,
  icon: Icon,
  content,
}: FeelingDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg w-[calc(100vw-2rem)] sm:w-full bg-card border-border max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-xl sm:rounded-lg p-4 sm:p-6">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-dustyPink flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <DialogTitle className="font-display text-2xl text-primary">
              {title}
            </DialogTitle>
          </div>
          <DialogDescription className="font-body text-muted-foreground">
            {content.intro}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          <div className="space-y-4">
            <h4 className="font-display text-lg text-primary">guided practice</h4>
            {content.steps.map((step, index) => (
              <div key={index} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-dustyPink text-primary font-body text-xs flex items-center justify-center">
                  {index + 1}
                </span>
                <p className="font-body text-sm text-foreground leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-dustyPink rounded-xl">
            <p className="font-display text-center italic text-primary">
              "{content.affirmation}"
            </p>
          </div>

          <p className="font-body text-xs text-muted-foreground text-center">
            remember: stop if you feel overwhelmed. this is about safety, not productivity.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FeelingDialog;
