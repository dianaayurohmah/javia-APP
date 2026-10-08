import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, Smartphone, CheckCircle, Info } from 'lucide-react';
import { SCREENS_DATA } from '../data/screensData';
import { PhoneFrame } from './PhoneFrame';
import { Screen01Splash } from './screens/Screen01Splash';
import { Screen02Onboarding } from './screens/Screen02Onboarding';
import { Screen03Auth } from './screens/Screen03Auth';
import { Screen04Home } from './screens/Screen04Home';
import { Screen05ModulList } from './screens/Screen05ModulList';
import { Screen06ModulDrajat } from './screens/Screen06ModulDrajat';
import { Screen07TanyaAI } from './screens/Screen07TanyaAI';
import { Screen08HeritageAlbum } from './screens/Screen08HeritageAlbum';
import { Screen09AnimationTheater } from './screens/Screen09AnimationTheater';
import { Screen10Arena } from './screens/Screen10Arena';

interface InteractiveModalProps {
  initialScreenId: number;
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveModal: React.FC<InteractiveModalProps> = ({
  initialScreenId,
  isOpen,
  onClose,
}) => {
  const [currentScreenId, setCurrentScreenId] = useState(initialScreenId);

  // Sync if initialScreenId changes
  React.useEffect(() => {
    setCurrentScreenId(initialScreenId);
  }, [initialScreenId]);

  if (!isOpen) return null;

  const screenData = SCREENS_DATA.find((s) => s.id === currentScreenId) || SCREENS_DATA[0];

  const handleNextScreen = () => {
    setCurrentScreenId((prev) => (prev < 10 ? prev + 1 : 1));
  };

  const handlePrevScreen = () => {
    setCurrentScreenId((prev) => (prev > 1 ? prev - 1 : 10));
  };

  const renderActiveScreen = () => {
    switch (currentScreenId) {
      case 1:
        return <Screen01Splash onNavigateNext={() => setCurrentScreenId(2)} />;
      case 2:
        return (
          <Screen02Onboarding
            onNavigateNext={() => setCurrentScreenId(3)}
            onSkip={() => setCurrentScreenId(4)}
          />
        );
      case 3:
        return (
          <Screen03Auth
            onSignIn={() => setCurrentScreenId(4)}
            onSignUp={() => setCurrentScreenId(4)}
          />
        );
      case 4:
        return (
          <Screen04Home
            onSelectHero={() => setCurrentScreenId(6)}
            onSelectPitutur={() => setCurrentScreenId(6)}
            onNavigateTab={(tab) => {
              if (tab === 'jelajah') setCurrentScreenId(5);
              if (tab === 'ai') setCurrentScreenId(7);
              if (tab === 'galeri') setCurrentScreenId(8);
            }}
          />
        );
      case 5:
        return (
          <Screen05ModulList
            onSelectModul={() => setCurrentScreenId(6)}
            onNavigateTab={(tab) => {
              if (tab === 'beranda') setCurrentScreenId(4);
              if (tab === 'ai') setCurrentScreenId(7);
              if (tab === 'galeri') setCurrentScreenId(8);
            }}
          />
        );
      case 6:
        return (
          <Screen06ModulDrajat
            onBack={() => setCurrentScreenId(5)}
            onOpenFeature={(featId) => {
              if (featId === 'tanya-ai') setCurrentScreenId(7);
              if (featId === 'heritage-album') setCurrentScreenId(8);
              if (featId === 'animation-theater') setCurrentScreenId(9);
              if (featId === 'arena') setCurrentScreenId(10);
            }}
            onNavigateTab={(tab) => {
              if (tab === 'beranda') setCurrentScreenId(4);
              if (tab === 'jelajah') setCurrentScreenId(5);
              if (tab === 'galeri') setCurrentScreenId(8);
            }}
          />
        );
      case 7:
        return <Screen07TanyaAI onBack={() => setCurrentScreenId(6)} />;
      case 8:
        return <Screen08HeritageAlbum onBack={() => setCurrentScreenId(6)} />;
      case 9:
        return <Screen09AnimationTheater onBack={() => setCurrentScreenId(6)} />;
      case 10:
        return (
          <Screen10Arena
            onNavigateTab={(tab) => {
              if (tab === 'beranda') setCurrentScreenId(4);
              if (tab === 'jelajah') setCurrentScreenId(5);
              if (tab === 'galeri') setCurrentScreenId(8);
            }}
          />
        );
      default:
        return <Screen01Splash onNavigateNext={() => setCurrentScreenId(2)} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md select-none overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#F8F4EC] rounded-3xl shadow-2xl border border-[#0C1D2E]/20 overflow-hidden flex flex-col my-auto max-h-[96vh]">
        {/* Top Control Bar */}
        <div className="px-5 py-3.5 bg-[#FAF7F0] border-b border-[#0C1D2E]/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#C59A45] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              {screenData.screenNum}
            </span>
            <div>
              <h3 className="text-sm font-bold text-[#0C1D2E] leading-tight">
                {screenData.name}
              </h3>
              <p className="text-[10px] text-[#0C1D2E]/60">
                {screenData.category}
              </p>
            </div>
          </div>

          {/* Quick Screen Selector Dropdown / Pills */}
          <div className="hidden md:flex items-center gap-1 bg-[#EBE2D0]/60 p-1 rounded-xl">
            {SCREENS_DATA.map((s) => (
              <button
                key={s.id}
                onClick={() => setCurrentScreenId(s.id)}
                className={`w-6 h-6 rounded-lg text-[10px] font-bold transition-all ${
                  currentScreenId === s.id
                    ? 'bg-[#0C1D2E] text-white shadow-xs'
                    : 'text-[#0C1D2E]/60 hover:text-[#0C1D2E]'
                }`}
                title={s.name}
              >
                {s.screenNum}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-[#FAF7F0] border border-[#0C1D2E]/15 rounded-xl p-1">
              <button
                onClick={handlePrevScreen}
                className="p-1 text-[#0C1D2E]/70 hover:text-[#0C1D2E] rounded-lg transition-colors"
                title="Layar Sebelumnya"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-semibold px-1 text-[#0C1D2E]">
                {currentScreenId} / 10
              </span>
              <button
                onClick={handleNextScreen}
                className="p-1 text-[#0C1D2E]/70 hover:text-[#0C1D2E] rounded-lg transition-colors"
                title="Layar Berikutnya"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#FAF7F0] hover:bg-[#F2ECE1] border border-[#0C1D2E]/15 text-[#0C1D2E] transition-colors"
              title="Tutup Preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Main Content: Split Layout (Phone Simulator + UX Rationale Specs) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Interactive Smartphone Simulator */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center py-2">
            <div className="relative">
              <PhoneFrame highlighted>
                {renderActiveScreen()}
              </PhoneFrame>

              {/* Interactive Prototype Callout */}
              <div className="mt-3 text-center">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#C59A45] bg-[#FFF8E7] px-3 py-1 rounded-full border border-[#F0DCB1]">
                  <Sparkles className="w-3 h-3" />
                  <span>Antarmuka Interaktif — Coba klik tombol, input & navigasi</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Screen UX Rationale & Design Specs */}
          <div className="lg:col-span-6 space-y-4">
            {/* Screen Header Badge & Overview */}
            <div className="bg-[#FAF7F0] border border-[#0C1D2E]/10 rounded-2xl p-4 shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-[#C59A45] uppercase tracking-wider">
                  Screen {screenData.screenNum} Overview
                </span>
                <span className="text-[10px] font-semibold text-[#0C1D2E]/50">
                  Javia Mobile Architecture
                </span>
              </div>
              <h4
                className="text-xl font-bold text-[#0C1D2E] mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {screenData.name}
              </h4>
              <p className="text-xs text-[#0C1D2E]/80 leading-relaxed">
                {screenData.description}
              </p>
            </div>

            {/* UX Rationale */}
            <div className="bg-[#FAF7F0] border border-[#0C1D2E]/10 rounded-2xl p-4 shadow-2xs">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-[#C59A45]" />
                <h5 className="text-xs font-bold text-[#0C1D2E] uppercase tracking-wider">
                  Rasionalitas Desain UI/UX
                </h5>
              </div>
              <p className="text-xs text-[#0C1D2E]/85 leading-relaxed">
                {screenData.uxRationale}
              </p>
            </div>

            {/* Key Screen Highlights */}
            <div className="bg-[#FAF7F0] border border-[#0C1D2E]/10 rounded-2xl p-4 shadow-2xs">
              <h5 className="text-xs font-bold text-[#0C1D2E] uppercase tracking-wider mb-2.5">
                Fitur & Komponen Utama
              </h5>
              <div className="grid grid-cols-2 gap-2">
                {screenData.highlights.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-[#F8F4EC] p-2 rounded-xl text-xs text-[#0C1D2E]"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#2D7A58] shrink-0" />
                    <span className="font-medium text-[11px]">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Flow Navigation Steps */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handlePrevScreen}
                className="px-4 py-2 rounded-xl border border-[#0C1D2E]/15 hover:bg-[#FAF7F0] text-xs font-medium text-[#0C1D2E] flex items-center gap-1.5 transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Sebelumnya</span>
              </button>

              <button
                onClick={handleNextScreen}
                className="px-4 py-2 rounded-xl bg-[#0C1D2E] hover:bg-[#162D45] text-white text-xs font-medium flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <span>Layar Berikutnya</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
