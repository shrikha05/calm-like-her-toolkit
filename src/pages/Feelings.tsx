import { useState, useEffect } from "react";
import {
  Zap,
  Repeat,
  Unplug,
  Sparkles,
  BrainCircuit,
  Heart,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FeelingCard from "@/components/FeelingCard";
import FeelingDialog from "@/components/FeelingDialog";
import EmailGate from "@/components/EmailGate";
import Footer from "@/components/Footer";

const feelings = [
  {
    id: "overstimulated",
    title: "overstimulated",
    icon: Zap,
    description: "too much input, can't think straight",
    content: {
      intro: "your nervous system is overwhelmed with sensory input. let's create some space.",
      steps: [
        "find a quiet space. if you can't, put on noise-canceling headphones or earplugs.",
        "close your eyes. place your hands over your eyes gently, blocking out light.",
        "take 5 slow breaths. in for 4, hold for 4, out for 6.",
        "slowly remove your hands and open your eyes. look at one neutral object.",
        "name 3 things you can see, 2 you can hear, 1 you can feel.",
      ],
      affirmation: "i am allowed to reduce the noise. my peace matters.",
    },
  },
  {
    id: "spiralling",
    title: "spiralling",
    icon: Repeat,
    description: "thoughts won't stop, going in circles",
    content: {
      intro: "your mind is caught in a loop. let's interrupt the pattern gently.",
      steps: [
        "grab a piece of paper or open your notes app.",
        "write down every thought in your head for 3 minutes. no editing, no judgment.",
        "read what you wrote. notice any repeating themes.",
        "choose ONE thought. ask: is this fact or fear?",
        "write one small action you can take in the next hour.",
      ],
      affirmation: "my thoughts are not facts. i can observe them without becoming them.",
    },
  },
  {
    id: "disconnected",
    title: "disconnected",
    icon: Unplug,
    description: "feeling numb or far away",
    content: {
      intro: "you've checked out to protect yourself. let's gently come back.",
      steps: [
        "press your feet firmly into the ground. feel the pressure.",
        "run cold water over your wrists for 30 seconds.",
        "look around the room and name 5 colors you see out loud.",
        "place one hand on your heart, one on your belly. breathe here for 1 minute.",
        "say your name out loud, followed by 'i am here, i am safe.'",
      ],
      affirmation: "it's safe to be present. i am coming back to myself.",
    },
  },
  {
    id: "energy-cleanse",
    title: "need an energy cleanse",
    icon: Sparkles,
    description: "feeling heavy or carrying others' emotions",
    content: {
      intro: "you've absorbed energy that isn't yours. let's release it.",
      steps: [
        "shake your hands vigorously for 30 seconds, like you're flicking off water.",
        "brush your arms, legs, and torso with your hands—like brushing off dust.",
        "visualize a warm light starting at your head, slowly moving down and out through your feet.",
        "take 3 deep breaths. with each exhale, imagine releasing gray energy.",
        "say: 'i release what isn't mine. i return to my own energy.'",
      ],
      affirmation: "i am not responsible for everyone's feelings. my energy is my own.",
    },
  },
  {
    id: "mentally-cluttered",
    title: "mentally cluttered",
    icon: BrainCircuit,
    description: "can't focus, too many tabs open",
    content: {
      intro: "your mental desktop is overloaded. let's close some tabs.",
      steps: [
        "write down everything on your mind—every task, worry, idea. empty it all.",
        "circle the 3 most important items. cross out anything you can't control.",
        "for each circled item, write the very next physical action needed.",
        "set a timer for 15 minutes and focus on just ONE task.",
        "after 15 minutes, take a 5-minute break. repeat if needed.",
      ],
      affirmation: "i don't need to hold it all in my head. i can put it down.",
    },
  },
  {
    id: "emotional",
    title: "emotional",
    icon: Heart,
    description: "feeling a lot, maybe crying or on edge",
    content: {
      intro: "emotions are messengers. let's listen without drowning.",
      steps: [
        "find a comfortable position. you don't need to stop the emotion.",
        "place your hand on your heart. say: 'i see you, i hear you.'",
        "name the emotion out loud: 'this is sadness' or 'this is grief.'",
        "ask: what does this emotion need right now? rest? expression? comfort?",
        "give yourself permission to feel for 5 more minutes. set a timer if helpful.",
      ],
      affirmation: "my emotions are valid. feeling is not weakness.",
    },
  },
  {
    id: "panic",
    title: "panic",
    icon: AlertTriangle,
    description: "heart racing, can't breathe, feeling unsafe",
    content: {
      intro: "your body thinks you're in danger. let's signal safety.",
      steps: [
        "splash cold water on your face or hold ice cubes in your hands.",
        "breathe: in for 4 counts, out for 8 counts. repeat 5 times.",
        "look around and name 5 things you can see. say them out loud.",
        "stomp your feet on the ground. feel your body's weight.",
        "repeat: 'i am safe right now. this will pass. my body is protecting me.'",
      ],
      affirmation: "this is temporary. my body is trying to protect me. i am safe.",
    },
  },
  {
    id: "not-sure",
    title: "i'm not sure",
    icon: HelpCircle,
    description: "something feels off but you can't name it",
    content: {
      intro: "not knowing is okay. let's explore gently.",
      steps: [
        "sit quietly for 1 minute. don't try to figure anything out.",
        "scan your body from head to toe. where do you feel tension or discomfort?",
        "place your hand there. breathe into that spot.",
        "ask yourself: what do i need right now? don't force an answer.",
        "if nothing comes, that's okay. sometimes rest is the answer.",
      ],
      affirmation: "i don't need to have all the answers. rest is productive too.",
    },
  },
];

const Feelings = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [selectedFeeling, setSelectedFeeling] = useState<typeof feelings[0] | null>(null);

  useEffect(() => {
    // Check if user has already unlocked
    const email = localStorage.getItem("clh_email");
    if (email) {
      setIsUnlocked(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary mb-3 sm:mb-4">
              what are you feeling today, love?
            </h1>
            <p className="font-body text-muted-foreground text-sm sm:text-base">
              pick what resonates with you the most, we'll meet you there.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {feelings.map((feeling) => (
              <FeelingCard
                key={feeling.id}
                title={feeling.title}
                icon={feeling.icon}
                description={feeling.description}
                onClick={() => setSelectedFeeling(feeling)}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {selectedFeeling && (
        <FeelingDialog
          isOpen={!!selectedFeeling}
          onClose={() => setSelectedFeeling(null)}
          title={selectedFeeling.title}
          icon={selectedFeeling.icon}
          content={selectedFeeling.content}
        />
      )}

      {!isUnlocked && (
        <EmailGate onUnlock={() => setIsUnlocked(true)} />
      )}
    </div>
  );
};

export default Feelings;
