import React from 'react';
import { Wifi, BatteryMedium, Signal } from 'lucide-react';

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  scale?: number;
  highlighted?: boolean;
  screenNum?: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  className = "",
  onClick,
  highlighted = false,
  screenNum,
}) => {
  return (
    <div
      onClick={onClick}
      className={`group relative select-none transition-all duration-300 ${
        onClick ? 'cursor-pointer hover:-translate-y-1' : ''
      } ${className}`}
    >
      {/* Outer Phone Casing with Dark Titanium Chassis & Subtle Bezel Shadow */}
      <div
        className={`relative mx-auto w-[284px] sm:w-[296px] h-[590px] sm:h-[612px] bg-[#1C1F24] p-[10px] rounded-[46px] shadow-[0_20px_50px_-12px_rgba(12,29,46,0.35),0_0_0_1px_rgba(255,255,255,0.08)] transition-all duration-300 ${
          highlighted ? 'ring-2 ring-[#C59A45] shadow-[0_22px_60px_-10px_rgba(197,154,69,0.45)]' : 'hover:shadow-[0_26px_60px_-14px_rgba(12,29,46,0.45)]'
        }`}
      >
        {/* Subtle Metallic Frame Accents */}
        <div className="absolute -left-[2px] top-[110px] h-8 w-[3px] rounded-l-sm bg-[#383C44]" />
        <div className="absolute -left-[2px] top-[152px] h-12 w-[3px] rounded-l-sm bg-[#383C44]" />
        <div className="absolute -left-[2px] top-[210px] h-12 w-[3px] rounded-l-sm bg-[#383C44]" />
        <div className="absolute -right-[2px] top-[150px] h-16 w-[3px] rounded-r-sm bg-[#383C44]" />

        {/* Screen Display Container */}
        <div className="relative w-full h-full bg-[#FAF7F0] rounded-[38px] overflow-hidden flex flex-col border border-black/10 text-[#0C1D2E]">
          
          {/* Top Status Bar with Time, Dynamic Island, and System Icons */}
          <div className="relative z-30 pt-2.5 px-5 flex items-center justify-between text-[#0C1D2E] text-[11px] font-semibold tracking-tight select-none shrink-0 pointer-events-none">
            {/* Time */}
            <span className="w-12 text-left font-medium">9:41</span>

            {/* Dynamic Island / Notch */}
            <div className="h-4 w-20 bg-black rounded-full flex items-center justify-end px-2 gap-1.5 shadow-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] border border-white/10" />
            </div>

            {/* System Indicators: Signal, Wifi, Battery */}
            <div className="w-12 flex items-center justify-end gap-1 text-[#0C1D2E]">
              <Signal className="w-3 h-3 stroke-[2.2]" />
              <Wifi className="w-3 h-3 stroke-[2.2]" />
              <BatteryMedium className="w-3.5 h-3.5 stroke-[2.2]" />
            </div>
          </div>

          {/* Screen Content Body */}
          <div className="relative flex-1 overflow-hidden flex flex-col">
            {children}
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="relative z-30 pt-1 pb-2 flex justify-center items-center pointer-events-none shrink-0 bg-transparent">
            <div className="h-1 w-28 bg-[#0C1D2E]/40 rounded-full" />
          </div>

          {/* Subtle Glass Surface Reflection Glare */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] rounded-[38px]" />
        </div>
      </div>
    </div>
  );
};
