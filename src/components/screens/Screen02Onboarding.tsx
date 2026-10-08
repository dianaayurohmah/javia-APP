import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface Screen02OnboardingProps {
  onNavigateNext?: () => void;
  onSkip?: () => void;
}

export const Screen02Onboarding: React.FC<Screen02OnboardingProps> = ({
  onNavigateNext,
  onSkip,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      titleKicker: "Selamat Datang di",
      brandTitle: "Javia",
      description: "Aplikasi edukasi sejarah berbasis teknologi, dengan sentuhan budaya Nusantara.",
      tag: "Situs Paciran Lamongan",
    },
    {
      titleKicker: "Jelajahi Warisan",
      brandTitle: "Walisongo",
      description: "Menelusuri jejak spiritual, kearifan lokal, dan diplomasi budaya Sunan Drajat.",
      tag: "Nilai Luhur Nusantara",
    },
    {
      titleKicker: "Belajar Interaktif",
      brandTitle: "Javia Arena",
      description: "Rasakan serunya animasi sejarah, eksplorasi artefak 3D, dan kuis berhadiah lencana.",
      tag: "Edutainment Modern",
    },
  ];

  const current = steps[activeStep];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      onNavigateNext?.();
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col bg-[#F8F4EC] overflow-hidden select-none">
      {/* Top Heritage Image Header (55% height) */}
      <div className="relative w-full h-[52%] overflow-hidden">
        <img
          src="/src/assets/images/sunan_drajat_heritage_gate_1791480743055.jpg"
          alt="Arsitektur Makam Sunan Drajat Paciran Lamongan"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-700 hover:scale-110"
        />

        {/* Soft Contrast Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1D2E]/70 via-transparent to-black/25" />

        {/* Top "Lewati" Button */}
        <div className="absolute top-2 right-4 z-20">
          <button
            onClick={onSkip || onNavigateNext}
            className="text-[11px] font-medium text-white/90 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full hover:bg-black/45 transition-colors"
          >
            Lewati
          </button>
        </div>

        {/* Subtle Heritage Tag Overlay on Image */}
        <div className="absolute bottom-6 left-5 z-20">
          <span className="text-[10px] uppercase tracking-widest text-[#DFBF62] font-semibold drop-shadow-sm">
            {current.tag}
          </span>
        </div>
      </div>

      {/* Modern Cream Rounded Card Overlapping the Image */}
      <div className="relative -mt-5 z-20 flex-1 bg-[#FAF7F0] rounded-t-[28px] p-5 shadow-[0_-8px_24px_rgba(12,29,46,0.1)] flex flex-col justify-between border-t border-[#D4AF37]/20">
        <div className="pt-1">
          <p className="text-[13px] font-normal text-[#0C1D2E]/70 mb-0.5">
            {current.titleKicker}
          </p>
          <h2
            className="text-[28px] font-bold text-[#0C1D2E] tracking-tight leading-none mb-2.5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {current.brandTitle}
          </h2>
          <p className="text-[12px] text-[#0C1D2E]/80 leading-relaxed max-w-[240px]">
            {current.description}
          </p>
        </div>

        {/* Bottom Actions: Indicator Dots & Large Gold Button */}
        <div className="space-y-4 pt-2">
          {/* Page Indicator Dots */}
          <div className="flex items-center justify-center gap-1.5">
            {[0, 1, 2, 3].map((idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeStep === idx
                    ? 'w-6 bg-[#C59A45]'
                    : 'w-1.5 bg-[#0C1D2E]/20'
                }`}
              />
            ))}
          </div>

          {/* Large Elegant Gold "Lanjut →" Button */}
          <button
            onClick={handleNext}
            className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#DFBF62] via-[#C59A45] to-[#9E7528] text-white font-medium text-[13px] shadow-[0_4px_16px_rgba(197,154,69,0.35)] flex items-center justify-center gap-2 hover:opacity-95 active:scale-[0.98] transition-all"
          >
            <span>Lanjut</span>
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </button>
        </div>
      </div>
    </div>
  );
};
