import React from 'react';
import { JaviaEmblem } from './JaviaEmblem';
import { ZoomIn, ZoomOut, Maximize2, Minimize2, Smartphone, LayoutGrid, Palette, BookOpen } from 'lucide-react';

interface PresentationHeaderProps {
  zoomLevel: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetZoom: () => void;
  viewMode: 'board' | 'prototype';
  onToggleViewMode: (mode: 'board' | 'prototype') => void;
  onOpenDesignSystem: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const PresentationHeader: React.FC<PresentationHeaderProps> = ({
  zoomLevel,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  viewMode,
  onToggleViewMode,
  onOpenDesignSystem,
  isFullscreen,
  onToggleFullscreen,
}) => {
  return (
    <header className="relative z-40 bg-[#F8F4EC]/95 backdrop-blur-md border-b border-[#0C1D2E]/10 px-6 py-4 transition-all">
      <div className="max-w-[1720px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        
        {/* Brand & Slogan Group */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <JaviaEmblem size={44} showGlow />
            <h1
              className="text-3xl font-bold tracking-tight text-[#0C1D2E] leading-none"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Javia
            </h1>
          </div>

          {/* Elegant Divider Line */}
          <div className="hidden sm:block h-9 w-[1.5px] bg-[#0C1D2E]/15" />

          {/* Slogan */}
          <div className="space-y-0.5">
            <p className="text-[13px] font-medium text-[#0C1D2E]/80 tracking-tight leading-snug">
              Jelajahi Sejarah,
            </p>
            <p className="text-[13px] font-medium text-[#0C1D2E]/80 tracking-tight leading-snug">
              Rasakan Makna di Setiap Cerita.
            </p>
          </div>
        </div>

        {/* Center / Right Section: UI/UX Category Pill & Interactive Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          
          {/* Official UI/UX Category Pill (Matching user upload) */}
          <div className="bg-[#EBE2D0] border border-[#D5C6A8] rounded-2xl px-4 py-2 text-center shadow-xs">
            <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[#0C1D2E]">
              UI/UX APLIKASI JAVIA
            </span>
            <span className="block text-[10px] text-[#0C1D2E]/70 font-medium tracking-tight">
              Edutainment • Sejarah • Budaya • Nusantara
            </span>
          </div>

          {/* Mode Switcher: Board vs Interactive Prototype */}
          <div className="flex items-center bg-[#EBE2D0]/60 p-1 rounded-xl border border-[#0C1D2E]/10">
            <button
              onClick={() => onToggleViewMode('board')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'board'
                  ? 'bg-[#0C1D2E] text-white shadow-xs'
                  : 'text-[#0C1D2E]/70 hover:text-[#0C1D2E]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Board Presentation</span>
            </button>

            <button
              onClick={() => onToggleViewMode('prototype')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'prototype'
                  ? 'bg-[#0C1D2E] text-white shadow-xs'
                  : 'text-[#0C1D2E]/70 hover:text-[#0C1D2E]'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5 text-[#C59A45]" />
              <span>Coba Prototipe Interaktif</span>
            </button>
          </div>

          {/* Design System & Specs Button */}
          <button
            onClick={onOpenDesignSystem}
            className="flex items-center gap-1.5 bg-[#FAF7F0] hover:bg-[#F2ECE1] border border-[#0C1D2E]/15 text-[#0C1D2E] px-3 py-2 rounded-xl text-xs font-semibold shadow-xs transition-colors"
          >
            <Palette className="w-3.5 h-3.5 text-[#C59A45]" />
            <span className="hidden sm:inline">Design System & Filosofi</span>
            <span className="sm:hidden">Specs</span>
          </button>

          {/* Zoom Controls (Active in Board Mode) */}
          {viewMode === 'board' && (
            <div className="flex items-center gap-1 bg-[#FAF7F0] border border-[#0C1D2E]/15 px-2 py-1.5 rounded-xl text-xs shadow-xs">
              <button
                onClick={onZoomOut}
                disabled={zoomLevel <= 60}
                className="p-1 text-[#0C1D2E]/60 hover:text-[#0C1D2E] disabled:opacity-30 transition-colors"
                title="Perkecil"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onResetZoom}
                className="px-2 font-semibold text-[#0C1D2E] hover:text-[#C59A45] min-w-[42px] text-center"
                title="Reset Zoom"
              >
                {zoomLevel}%
              </button>

              <button
                onClick={onZoomIn}
                disabled={zoomLevel >= 150}
                className="p-1 text-[#0C1D2E]/60 hover:text-[#0C1D2E] disabled:opacity-30 transition-colors"
                title="Perbesar"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Fullscreen Toggle */}
          <button
            onClick={onToggleFullscreen}
            className="p-2 rounded-xl bg-[#FAF7F0] hover:bg-[#F2ECE1] border border-[#0C1D2E]/15 text-[#0C1D2E] shadow-xs transition-colors"
            title={isFullscreen ? 'Keluar Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>

        </div>
      </div>
    </header>
  );
};
