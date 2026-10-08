import React from 'react';
import { ArrowLeft, Sparkles, Image as ImageIcon, PlayCircle, Gamepad2, ChevronRight, Share2 } from 'lucide-react';
import { BottomNav } from '../BottomNav';

interface Screen06ModulDrajatProps {
  onBack?: () => void;
  onOpenFeature?: (featureId: string) => void;
  onNavigateTab?: (tab: any) => void;
}

export const Screen06ModulDrajat: React.FC<Screen06ModulDrajatProps> = ({
  onBack,
  onOpenFeature,
  onNavigateTab,
}) => {
  const features = [
    {
      id: 'tanya-ai',
      title: 'Tanya AI Sejarah',
      description: 'Tanya apa saja tentang sejarah Sunan Drajat',
      icon: Sparkles,
      iconBg: 'bg-[#FFF6E5] text-[#B88728]',
      cardBg: 'bg-[#FAF7F0]',
    },
    {
      id: 'heritage-album',
      title: 'Javia Heritage Album',
      description: 'Lihat koleksi artefak & arsip digital',
      icon: ImageIcon,
      iconBg: 'bg-[#FAF0E6] text-[#A0522D]',
      cardBg: 'bg-[#FAF7F0]',
    },
    {
      id: 'animation-theater',
      title: 'Javia Animation Theater',
      description: 'Tonton animasi sejarah yang seru',
      icon: PlayCircle,
      iconBg: 'bg-[#FDF0F2] text-[#B93E58]',
      cardBg: 'bg-[#FAF7F0]',
    },
    {
      id: 'arena',
      title: 'Javia Arena',
      description: 'Uji pemahamanmu lewat kuis dan raih badge!',
      icon: Gamepad2,
      iconBg: 'bg-[#EBF7F2] text-[#2D7A58]',
      cardBg: 'bg-[#FAF7F0]',
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col bg-[#F8F4EC] overflow-hidden select-none">
      {/* Top Header Bar */}
      <div className="pt-2 px-3 pb-1.5 flex items-center justify-between border-b border-[#0C1D2E]/10 bg-[#FAF7F0]">
        <button
          onClick={onBack}
          className="p-1 rounded-full text-[#0C1D2E]/70 hover:text-[#0C1D2E] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <div className="text-center">
          <h2
            className="text-[13px] font-bold text-[#0C1D2E] leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Sunan Drajat
          </h2>
          <p className="text-[8px] text-[#0C1D2E]/60 leading-tight">
            Situs Makam & Museum Paciran, Lamongan
          </p>
        </div>

        <button className="p-1 text-[#0C1D2E]/50 hover:text-[#0C1D2E]">
          <Share2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pb-2">
        {/* Header Hero Image */}
        <div className="relative w-full h-28 overflow-hidden">
          <img
            src="/src/assets/images/sunan_drajat_heritage_gate_1791480743055.jpg"
            alt="Kompleks Makam Sunan Drajat"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1D2E]/75 via-transparent to-transparent" />
          <div className="absolute bottom-2 left-3 right-3 flex items-end justify-between">
            <span className="text-[9px] font-medium text-[#DFBF62] tracking-wider uppercase drop-shadow-sm">
              Situs Cagar Budaya Nasional
            </span>
          </div>
        </div>

        {/* 4 Pilar Section Header Card */}
        <div className="px-3 pt-2.5">
          <div className="bg-[#FAF7F0] border border-[#0C1D2E]/10 rounded-xl p-2.5 mb-2.5 shadow-2xs">
            <h3 className="text-[11px] font-bold text-[#0C1D2E] flex items-center gap-1">
              <span className="text-[#C59A45]">✦</span>
              <span>4 Pilar Fitur Utama</span>
            </h3>
            <p className="text-[8.5px] text-[#0C1D2E]/65 leading-tight mt-0.5">
              Nikmati pengalaman belajar sejarah yang lebih interaktif dan menyenangkan.
            </p>
          </div>

          {/* 4 Feature Cards */}
          <div className="space-y-1.5">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.id}
                  onClick={() => onOpenFeature?.(feat.id)}
                  className="bg-[#FAF7F0] border border-[#0C1D2E]/10 rounded-xl p-2 flex items-center justify-between hover:border-[#C59A45]/50 hover:shadow-2xs transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${feat.iconBg}`}
                    >
                      <Icon className="w-4 h-4 stroke-[2.2]" />
                    </div>
                    <div>
                      <h4 className="text-[10.5px] font-bold text-[#0C1D2E] leading-tight">
                        {feat.title}
                      </h4>
                      <p className="text-[8px] text-[#0C1D2E]/60 leading-tight mt-0.5">
                        {feat.description}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className="w-3.5 h-3.5 text-[#0C1D2E]/30 group-hover:text-[#C59A45] group-hover:translate-x-0.5 transition-all" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="jelajah" onTabChange={onNavigateTab} />
    </div>
  );
};
