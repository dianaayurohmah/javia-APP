import React from 'react';
import { JaviaEmblem, CandiSilhouette, BatikCornerOrnament } from '../JaviaEmblem';

interface Screen01SplashProps {
  onNavigateNext?: () => void;
}

export const Screen01Splash: React.FC<Screen01SplashProps> = ({ onNavigateNext }) => {
  return (
    <div
      onClick={onNavigateNext}
      className="relative w-full h-full flex flex-col items-center justify-between bg-[#F8F4EC] p-6 overflow-hidden cursor-pointer select-none"
    >
      {/* Background Batik Ornament Watermarks */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full border border-[#D4AF37]/20" />
        <div className="absolute top-1/4 -right-16 w-56 h-56 rounded-full border border-[#D4AF37]/15" />
        <div className="absolute -bottom-10 -left-10 w-52 h-52 rounded-full border border-[#D4AF37]/20" />
      </div>

      {/* Traditional Corner Flourishes */}
      <div className="absolute top-2 left-2">
        <BatikCornerOrnament className="w-14 h-14" />
      </div>
      <div className="absolute top-2 right-2">
        <BatikCornerOrnament className="w-14 h-14" flipX />
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Center Brand Group */}
      <div className="flex flex-col items-center text-center my-auto z-10 -mt-6">
        {/* Golden Cultural Symbol */}
        <div className="mb-4">
          <JaviaEmblem size={84} showGlow />
        </div>

        {/* Brand Wordmark in Deep Navy */}
        <h1
          className="text-[44px] font-bold tracking-tight text-[#0C1D2E] leading-none mb-3"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Javia
        </h1>

        {/* Brand Slogan */}
        <div className="max-w-[210px] space-y-0.5">
          <p className="text-[12.5px] font-medium text-[#0C1D2E]/85 leading-snug">
            Jelajahi Sejarah,
          </p>
          <p className="text-[12.5px] font-medium text-[#0C1D2E]/85 leading-snug">
            Rasakan Makna di Setiap Cerita.
          </p>
        </div>

        {/* Subtle Decorative Gold Diamond */}
        <div className="mt-5 flex items-center justify-center gap-2 text-[#C59A45]">
          <span className="w-6 h-[1px] bg-[#C59A45]/40" />
          <span className="text-[9px]">✦</span>
          <span className="w-6 h-[1px] bg-[#C59A45]/40" />
        </div>
      </div>

      {/* Subtle Historical Temple Silhouette near bottom */}
      <div className="relative w-full z-10 mt-auto pt-2 flex flex-col items-center">
        <div className="w-full text-[#C59A45]/35 opacity-70">
          <CandiSilhouette className="w-full h-12" />
        </div>
        <p className="text-[9px] tracking-wider text-[#0C1D2E]/40 font-medium uppercase mt-2">
          Ketuk untuk Memulai
        </p>
      </div>

      {/* Bottom Corner Flourishes */}
      <div className="absolute bottom-2 left-2">
        <BatikCornerOrnament className="w-14 h-14" flipY />
      </div>
      <div className="absolute bottom-2 right-2">
        <BatikCornerOrnament className="w-14 h-14" flipX flipY />
      </div>
    </div>
  );
};
