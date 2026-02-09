/**
 * Envelope asset – note sits *inside* the envelope.
 * Renders: envelope back → slot for note (children) → envelope flap/sides on top.
 */
interface EnvelopeCardProps {
  className?: string;
  children?: React.ReactNode;
  /** Note area as fraction of viewBox (for positioning the slot) */
  noteX?: number;
  noteY?: number;
  noteW?: number;
  noteH?: number;
}

const VIEW_WIDTH = 400;
const VIEW_HEIGHT = 520;
const R = 16;

const EnvelopeCard = ({
  className = "",
  children,
  noteX = 0.1,
  noteY = 0.18,
  noteW = 0.8,
  noteH = 0.64,
}: EnvelopeCardProps) => {
  const w = VIEW_WIDTH;
  const h = VIEW_HEIGHT;

  // Envelope back (full rectangle)
  const backPath = `
    M ${R} 0 L ${w - R} 0 Q ${w} 0 ${w} ${R}
    L ${w} ${h - R} Q ${w} ${h} ${w - R} ${h}
    L ${R} ${h} Q 0 ${h} 0 ${h - R} L 0 ${R} Q 0 0 ${R} 0 Z
  `;

  // Flap folded down (sits on top of the note – top part of envelope)
  const flapY = h * 0.22;
  const flapPath = `
    M 0 ${flapY}
    L ${w * 0.05} ${flapY + 6}
    L ${w / 2} ${flapY + 32}
    L ${w * 0.95} ${flapY + 6}
    L ${w} ${flapY}
    L ${w} 0 L 0 0 Z
  `;

  // Left and right "sides" of envelope (strip that overlaps note edges so note looks inside)
  const nx = w * noteX;
  const ny = h * noteY;
  const nw = w * noteW;
  const nh = h * noteH;
  const sideW = 14;
  const sidePathLeft = `M 0 ${ny} L ${nx + sideW} ${ny} L ${nx + sideW} ${ny + nh} L 0 ${ny + nh} Z`;
  const sidePathRight = `M ${nx + nw - sideW} ${ny} L ${w} ${ny} L ${w} ${ny + nh} L ${nx + nw - sideW} ${ny + nh} Z`;

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Layer 1: Envelope back */}
      <svg
        viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
        className="absolute inset-0 w-full h-full object-contain object-center pointer-events-none"
        style={{ zIndex: 0 }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="env-back-shade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.05)" />
          </linearGradient>
          <filter id="env-back-shadow" x="-6%" y="-4%" width="112%" height="108%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.14" />
          </filter>
          <pattern id="env-rib" patternUnits="userSpaceOnUse" width="6" height="6">
            <path d="M 0 6 L 6 0" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" fill="none" />
          </pattern>
        </defs>
        <path d={backPath} fill="#d4c0ad" filter="url(#env-back-shadow)" />
        <path d={backPath} fill="url(#env-rib)" fillOpacity="0.4" />
        <path d={backPath} fill="url(#env-back-shade)" />
      </svg>

      {/* Layer 2: Note (letter) – sits inside envelope; children provide content */}
      <div
        className="absolute flex flex-col justify-center overflow-hidden"
        style={{
          left: `${noteX * 100}%`,
          top: `${noteY * 100}%`,
          width: `${noteW * 100}%`,
          height: `${noteH * 100}%`,
          zIndex: 1,
        }}
      >
        <div className="h-full w-full flex flex-col justify-center bg-[#f8f4ef] rounded-lg shadow-md border border-[rgba(0,0,0,0.08)] px-3 py-2 sm:px-4 md:px-5 md:py-3 min-w-0 text-[#1a1a2e]">
          {children}
        </div>
      </div>

      {/* Layer 3: Flap and sides – drawn on top so note is "inside" */}
      <svg
        viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
        className="absolute inset-0 w-full h-full object-contain object-center pointer-events-none"
        style={{ zIndex: 2 }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="env-flap-shade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.06)" />
          </linearGradient>
          <pattern id="env-flap-rib" patternUnits="userSpaceOnUse" width="6" height="6">
            <path d="M 0 6 L 6 0" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" fill="none" />
          </pattern>
        </defs>
        {/* Flap (top of envelope) */}
        <path d={flapPath} fill="#e8d5c4" />
        <path d={flapPath} fill="url(#env-flap-rib)" fillOpacity="0.5" />
        <path d={flapPath} fill="url(#env-flap-shade)" />
        {/* Left/right sides overlapping note edge so note sits "in" envelope */}
        <path d={sidePathLeft} fill="#d4c0ad" fillOpacity="0.92" />
        <path d={sidePathRight} fill="#d4c0ad" fillOpacity="0.92" />
      </svg>
    </div>
  );
};

export default EnvelopeCard;
