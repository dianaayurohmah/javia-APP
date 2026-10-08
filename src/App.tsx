import React, { useState } from 'react';
import { PresentationHeader } from './components/PresentationHeader';
import { PhoneFrame } from './components/PhoneFrame';
import { SCREENS_DATA } from './data/screensData';
import { Screen01Splash } from './components/screens/Screen01Splash';
import { Screen02Onboarding } from './components/screens/Screen02Onboarding';
import { Screen03Auth } from './components/screens/Screen03Auth';
import { Screen04Home } from './components/screens/Screen04Home';
import { Screen05ModulList } from './components/screens/Screen05ModulList';
import { Screen06ModulDrajat } from './components/screens/Screen06ModulDrajat';
import { Screen07TanyaAI } from './components/screens/Screen07TanyaAI';
import { Screen08HeritageAlbum } from './components/screens/Screen08HeritageAlbum';
import { Screen09AnimationTheater } from './components/screens/Screen09AnimationTheater';
import { Screen10Arena } from './components/screens/Screen10Arena';
import { InteractiveModal } from './components/InteractiveModal';
import { DesignSystemModal } from './components/DesignSystemModal';
import { JaviaEmblem, BatikCornerOrnament } from './components/JaviaEmblem';
import { Smartphone, Sparkles, ExternalLink, ShieldCheck, Heart, Award } from 'lucide-react';

export default function App() {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [selectedScreenId, setSelectedScreenId] = useState<number | null>(null);
  const [isDesignSystemOpen, setIsDesignSystemOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'board' | 'prototype'>('board');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 10, 140));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 10, 60));
  const handleResetZoom = () => setZoomLevel(100);

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const renderScreenComponent = (id: number) => {
    switch (id) {
      case 1:
        return <Screen01Splash onNavigateNext={() => setSelectedScreenId(1)} />;
      case 2:
        return <Screen02Onboarding onNavigateNext={() => setSelectedScreenId(2)} />;
      case 3:
        return <Screen03Auth onSignIn={() => setSelectedScreenId(3)} />;
      case 4:
        return <Screen04Home onSelectHero={() => setSelectedScreenId(4)} />;
      case 5:
        return <Screen05ModulList onSelectModul={() => setSelectedScreenId(5)} />;
      case 6:
        return <Screen06ModulDrajat onOpenFeature={() => setSelectedScreenId(6)} />;
      case 7:
        return <Screen07TanyaAI onBack={() => setSelectedScreenId(7)} />;
      case 8:
        return <Screen08HeritageAlbum onBack={() => setSelectedScreenId(8)} />;
      case 9:
        return <Screen09AnimationTheater onBack={() => setSelectedScreenId(9)} />;
      case 10:
        return <Screen10Arena />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F4EC] text-[#0C1D2E] flex flex-col font-sans select-none relative overflow-x-hidden">
      {/* Background Batik Watermark Flourishes */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full border border-[#D4AF37]/30" />
        <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full border border-[#D4AF37]/20" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full border border-[#D4AF37]/20" />
      </div>

      {/* Traditional Corner Flourishes on Desktop Viewport */}
      <div className="fixed top-20 left-4 z-10 hidden xl:block">
        <BatikCornerOrnament className="w-24 h-24" />
      </div>
      <div className="fixed top-20 right-4 z-10 hidden xl:block">
        <BatikCornerOrnament className="w-24 h-24" flipX />
      </div>

      {/* Top Presentation Header & Controls Bar */}
      <PresentationHeader
        zoomLevel={zoomLevel}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onResetZoom={handleResetZoom}
        viewMode={viewMode}
        onToggleViewMode={(mode) => {
          setViewMode(mode);
          if (mode === 'prototype') {
            setSelectedScreenId(4); // Open Home by default in interactive mode
          }
        }}
        onOpenDesignSystem={() => setIsDesignSystemOpen(true)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />

      {/* Main Board Viewport Canvas */}
      <main className="flex-1 overflow-x-auto overflow-y-auto px-4 sm:px-8 py-8 relative z-20">
        <div
          className="mx-auto transition-transform duration-300 origin-top flex flex-col items-center"
          style={{
            transform: `scale(${zoomLevel / 100})`,
            width: zoomLevel > 100 ? `${(zoomLevel / 100) * 100}%` : '100%',
            maxWidth: '1780px',
          }}
        >
          {/* Subtle Presentation Banner Card */}
          <div className="w-full mb-8 bg-[#FAF7F0]/80 backdrop-blur-xs border border-[#0C1D2E]/10 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-2xs">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-[#FFF8E7] border border-[#F0DCB1] text-[#C59A45]">
                <Sparkles className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-sm font-bold text-[#0C1D2E]">
                  Papan Presentasi Desain UI/UX — 10 Layar Smartphone
                </h2>
                <p className="text-xs text-[#0C1D2E]/70">
                  Klik pada bingkai smartphone manapun untuk membuka simulator prototipe interaktif resolusi penuh (1:1).
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedScreenId(1)}
                className="px-4 py-2 bg-[#0C1D2E] hover:bg-[#162D45] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-xs transition-colors"
              >
                <Smartphone className="w-3.5 h-3.5 text-[#C59A45]" />
                <span>Mulai Tur Dari Layar 01</span>
              </button>
              <button
                onClick={() => setIsDesignSystemOpen(true)}
                className="px-3.5 py-2 bg-[#FAF7F0] hover:bg-[#F2ECE1] border border-[#0C1D2E]/15 text-[#0C1D2E] text-xs font-semibold rounded-xl transition-colors"
              >
                Lihat Panduan Sistem
              </button>
            </div>
          </div>

          {/* 5 x 2 Mobile Screens Grid */}
          <div className="w-full space-y-12">
            
            {/* ROW 1: Screens 01 to 05 */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C59A45]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0C1D2E]/70">
                  Fase 1: Onboarding, Autentikasi & Eksplorasi Awal (Layar 01 – 05)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-5 justify-items-center">
                {SCREENS_DATA.slice(0, 5).map((screen) => (
                  <div
                    key={screen.id}
                    className="flex flex-col items-center w-full max-w-[310px]"
                  >
                    {/* Realistic iPhone Phone Mockup */}
                    <PhoneFrame
                      screenNum={screen.screenNum}
                      onClick={() => setSelectedScreenId(screen.id)}
                    >
                      {renderScreenComponent(screen.id)}
                    </PhoneFrame>

                    {/* Number Badge, Title, and UX Rationale Description */}
                    <div className="mt-4 text-center px-2 flex flex-col items-center max-w-[270px]">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-5 h-5 rounded-full bg-[#C59A45] text-white flex items-center justify-center font-bold text-[10px] shadow-2xs">
                          {screen.id}
                        </span>
                        <h4 className="text-[13px] font-bold text-[#0C1D2E] tracking-tight">
                          {screen.name}
                        </h4>
                      </div>

                      <p className="text-[10.5px] text-[#0C1D2E]/70 leading-relaxed text-center">
                        {screen.description}
                      </p>

                      <button
                        onClick={() => setSelectedScreenId(screen.id)}
                        className="mt-2 text-[10px] text-[#C59A45] hover:text-[#A07B2D] font-semibold flex items-center gap-1 group transition-colors"
                      >
                        <span>Interaksi Layar</span>
                        <ExternalLink className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle Divider Line with Cultural Emblem */}
            <div className="relative flex items-center justify-center py-2">
              <div className="w-full border-t border-[#0C1D2E]/10" />
              <div className="absolute bg-[#F8F4EC] px-4 flex items-center gap-2 text-[#C59A45]">
                <span className="text-xs">✦</span>
                <JaviaEmblem size={24} />
                <span className="text-xs">✦</span>
              </div>
            </div>

            {/* ROW 2: Screens 06 to 10 */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C59A45]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0C1D2E]/70">
                  Fase 2: Studi Kasus Sunan Drajat & 4 Pilar Fitur Utama (Layar 06 – 10)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-5 justify-items-center">
                {SCREENS_DATA.slice(5, 10).map((screen) => (
                  <div
                    key={screen.id}
                    className="flex flex-col items-center w-full max-w-[310px]"
                  >
                    {/* Realistic iPhone Phone Mockup */}
                    <PhoneFrame
                      screenNum={screen.screenNum}
                      onClick={() => setSelectedScreenId(screen.id)}
                    >
                      {renderScreenComponent(screen.id)}
                    </PhoneFrame>

                    {/* Number Badge, Title, and UX Rationale Description */}
                    <div className="mt-4 text-center px-2 flex flex-col items-center max-w-[270px]">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-5 h-5 rounded-full bg-[#C59A45] text-white flex items-center justify-center font-bold text-[10px] shadow-2xs">
                          {screen.id}
                        </span>
                        <h4 className="text-[13px] font-bold text-[#0C1D2E] tracking-tight">
                          {screen.name}
                        </h4>
                      </div>

                      <p className="text-[10.5px] text-[#0C1D2E]/70 leading-relaxed text-center">
                        {screen.description}
                      </p>

                      <button
                        onClick={() => setSelectedScreenId(screen.id)}
                        className="mt-2 text-[10px] text-[#C59A45] hover:text-[#A07B2D] font-semibold flex items-center gap-1 group transition-colors"
                      >
                        <span>Interaksi Layar</span>
                        <ExternalLink className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Case Study Summary Footer */}
          <section className="w-full mt-16 pt-8 border-t border-[#0C1D2E]/15 bg-[#FAF7F0]/60 rounded-3xl p-6 sm:p-8">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="flex justify-center items-center gap-3">
                <JaviaEmblem size={36} />
                <h3
                  className="text-2xl font-bold text-[#0C1D2E]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Javia — Mobile Edutainment Nusantara
                </h3>
              </div>

              <p className="text-xs text-[#0C1D2E]/75 leading-relaxed max-w-2xl mx-auto">
                Dirancang khusus dengan estetika warisan sejarah Islam Nusantara dan kebudayaan Jawa Timur. Mengangkat kearifan lokal Sunan Drajat (Paciran, Lamongan) melalui perpaduan teknologi AI edukatif, arsip museum digital, micro-learning video animasi, dan gamifikasi kuis bernilai kearifan.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#0C1D2E]/80 pt-2">
                <span className="flex items-center gap-1.5 bg-[#F8F4EC] px-3 py-1.5 rounded-full border border-[#0C1D2E]/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C59A45]" />
                  <span>Referensi Terkurasi & Sahih</span>
                </span>
                <span className="flex items-center gap-1.5 bg-[#F8F4EC] px-3 py-1.5 rounded-full border border-[#0C1D2E]/10">
                  <Heart className="w-3.5 h-3.5 text-[#A0522D]" />
                  <span>Nilai Luhur Catur Pitutur</span>
                </span>
                <span className="flex items-center gap-1.5 bg-[#F8F4EC] px-3 py-1.5 rounded-full border border-[#0C1D2E]/10">
                  <Award className="w-3.5 h-3.5 text-[#2D7A58]" />
                  <span>10 Layar Saling Terintegrasi</span>
                </span>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Interactive Prototype Simulator Modal */}
      <InteractiveModal
        initialScreenId={selectedScreenId || 1}
        isOpen={selectedScreenId !== null}
        onClose={() => setSelectedScreenId(null)}
      />

      {/* Design System & Heritage Philosophy Modal */}
      <DesignSystemModal
        isOpen={isDesignSystemOpen}
        onClose={() => setIsDesignSystemOpen(false)}
      />
    </div>
  );
}
