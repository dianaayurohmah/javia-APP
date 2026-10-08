import React from 'react';

interface JaviaEmblemProps {
  className?: string;
  size?: number;
  showGlow?: boolean;
}

export const JaviaEmblem: React.FC<JaviaEmblemProps> = ({
  className = "w-10 h-10",
  size,
  showGlow = false,
}) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={style}>
      {showGlow && (
        <div className="absolute inset-0 bg-[#D4AF37]/25 blur-xl rounded-full scale-125" />
      )}
      <svg
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm select-none"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFBF62" />
            <stop offset="45%" stopColor="#C59A45" />
            <stop offset="100%" stopColor="#9E7528" />
          </linearGradient>
          <linearGradient id="goldHighlight" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFF3CE" />
            <stop offset="100%" stopColor="#C59A45" />
          </linearGradient>
        </defs>

        {/* Central Sacred Spine / Stupa Tip */}
        <path
          d="M50 8 C48 14 47 22 50 30 C53 22 52 14 50 8 Z"
          fill="url(#goldGradient)"
        />

        {/* Gunungan Crown Apex */}
        <path
          d="M50 16 C42 26 36 34 38 46 C40 54 46 58 50 62 C54 58 60 54 62 46 C64 34 58 26 50 16 Z"
          fill="url(#goldGradient)"
          opacity="0.95"
        />

        {/* Central Core Flame Motif */}
        <path
          d="M50 28 C45 35 43 42 46 50 C48 45 52 45 54 50 C57 42 55 35 50 28 Z"
          fill="#FAF4E8"
        />

        {/* Left Wing Upper Petal */}
        <path
          d="M36 36 C28 32 20 38 18 48 C16 58 26 64 34 62 C38 52 38 42 36 36 Z"
          fill="url(#goldGradient)"
        />

        {/* Right Wing Upper Petal */}
        <path
          d="M64 36 C72 32 80 38 82 48 C84 58 74 64 66 62 C62 52 62 42 64 36 Z"
          fill="url(#goldGradient)"
        />

        {/* Left Mid Petal Carving */}
        <path
          d="M26 52 C16 54 12 66 16 78 C20 86 30 86 36 80 C36 70 32 60 26 52 Z"
          fill="url(#goldGradient)"
        />

        {/* Right Mid Petal Carving */}
        <path
          d="M74 52 C84 54 88 66 84 78 C80 86 70 86 64 80 C64 70 68 60 74 52 Z"
          fill="url(#goldGradient)"
        />

        {/* Lower Left Base Swirl */}
        <path
          d="M28 82 C20 86 18 96 24 104 C30 110 42 106 44 98 C38 94 34 88 28 82 Z"
          fill="url(#goldGradient)"
        />

        {/* Lower Right Base Swirl */}
        <path
          d="M72 82 C80 86 82 96 76 104 C70 110 58 106 56 98 C62 94 66 88 72 82 Z"
          fill="url(#goldGradient)"
        />

        {/* Central Lower Lotus Base */}
        <path
          d="M50 72 C44 78 42 88 46 96 C48 102 52 102 54 96 C58 88 56 78 50 72 Z"
          fill="url(#goldGradient)"
        />

        {/* Elegant Inner Filigree Cuts */}
        <circle cx="28" cy="50" r="2.5" fill="#FAF4E8" />
        <circle cx="72" cy="50" r="2.5" fill="#FAF4E8" />
        <circle cx="24" cy="74" r="2" fill="#FAF4E8" />
        <circle cx="76" cy="74" r="2" fill="#FAF4E8" />
        <circle cx="50" cy="86" r="2.5" fill="#FAF4E8" />
      </svg>
    </div>
  );
};

export const CandiSilhouette: React.FC<{ className?: string }> = ({ className = "w-full" }) => (
  <svg
    viewBox="0 0 800 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
  >
    <path
      d="M0 120 L0 108 Q60 106 120 102 L140 102 L150 90 L160 90 L170 80 L180 80 L190 70 L200 70 L210 58 L220 58 L230 46 L240 46 L250 32 L260 46 L270 46 L280 58 L290 58 L300 70 L310 70 L320 80 L330 80 L340 90 L350 90 L360 102 L380 102 Q440 100 500 102 L520 102 L530 88 L545 88 L555 72 L570 72 L580 54 L595 54 L605 38 L615 22 L625 38 L635 54 L650 54 L660 72 L675 72 L685 88 L700 88 L710 102 L800 102 L800 120 Z"
      fill="currentColor"
    />
  </svg>
);

export const BatikCornerOrnament: React.FC<{ className?: string; flipX?: boolean; flipY?: boolean }> = ({
  className = "w-16 h-16",
  flipX = false,
  flipY = false,
}) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} pointer-events-none opacity-25`}
    style={{
      transform: `${flipX ? 'scaleX(-1)' : ''} ${flipY ? 'scaleY(-1)' : ''}`,
    }}
  >
    <path
      d="M10 10 C30 10 50 15 65 30 C80 45 85 65 85 85 M10 10 C10 30 15 50 30 65 C45 80 65 85 85 85"
      stroke="#C59A45"
      strokeWidth="1.5"
    />
    <path
      d="M20 20 C35 20 48 24 58 35 C68 46 72 60 72 75 M20 20 C20 35 24 48 35 58 C46 68 60 72 75 72"
      stroke="#D4AF37"
      strokeWidth="1"
      strokeDasharray="2 3"
    />
    <circle cx="35" cy="35" r="4" fill="#C59A45" />
    <circle cx="50" cy="20" r="2" fill="#D4AF37" />
    <circle cx="20" cy="50" r="2" fill="#D4AF37" />
  </svg>
);
