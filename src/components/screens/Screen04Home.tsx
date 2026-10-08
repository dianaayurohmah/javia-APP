import React from 'react';
import { Bell, ChevronRight, Heart, Shield, BookOpen, HandHeart } from 'lucide-react';
import { BottomNav } from '../BottomNav';

interface Screen04HomeProps {
  onSelectHero?: () => void;
  onSelectPitutur?: (name: string) => void;
  onNavigateTab?: (tab: any) => void;
}

export const Screen04Home: React.FC<Screen04HomeProps> = ({
  onSelectHero,
  onSelectPitutur,
  onNavigateTab,
}) => {
  const pituturList = [
    {
      id: 'menyepi',
      title: 'Menyepi Kangreka',
      sub: 'Bekerja Tulus',
      icon: HandHeart,
      bg: 'bg-[#FFF6E5]',
      border: 'border-[#F0DCB1]',
      color: 'text-[#B88728]',
    },
    {
      id: 'jujur',
      title: 'Jujur Dharmo',
      sub: 'Integritas Moral',
      icon: Shield,
      bg: 'bg-[#EBF7F2]',
      border: 'border-[#CCEADC]',
      color: 'text-[#2D7A58]',
    },
    {
      id: 'ngilmu',
      title: 'Ngilmu Liyane',
      sub: 'Keluasan Ilmu',
      icon: BookOpen,
      bg: 'bg-[#F2F4FD]',
      border: 'border-[#D9E0FA]',
      color: 'text-[#3E5DBA]',
    },
    {
      id: 'mengabdi',
      title: 'Mengabdi Kebajikan',
      sub: 'Berbagi Kasih',
      icon: Heart,
      bg: 'bg-[#FDF2F4]',
      border: 'border-[#FAD2DA]',
      color: 'text-[#B93E58]',
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col bg-[#F8F4EC] overflow-hidden select-none">
      {/* Top Header / Greeting Bar */}
      <div className="pt-2 px-4 pb-2.5 flex items-start justify-between">
        <div>
          <p className="text-[11px] text-[#0C1D2E]/65 leading-tight">
            Selamat Datang,
          </p>
          <h2
            className="text-[20px] font-bold text-[#0C1D2E] tracking-tight leading-snug"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Diana!
          </h2>
          <p className="text-[9.5px] text-[#0C1D2E]/70 max-w-[170px] leading-tight mt-0.5">
            Jelajahi sejarah, kenali budaya, rasakan makna di setiap cerita.
          </p>
        </div>

        {/* Top Right User & Notification Elements */}
        <div className="flex items-center gap-2 pt-0.5">
          <button className="relative p-1.5 rounded-full bg-[#FAF7F0] border border-[#0C1D2E]/10 text-[#0C1D2E]/70 hover:text-[#0C1D2E]">
            <Bell className="w-3.5 h-3.5" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#C59A45] rounded-full" />
          </button>
          
          {/* User Avatar */}
          <div className="w-8 h-8 rounded-full ring-1.5 ring-[#C59A45]/50 overflow-hidden bg-[#0C1D2E]/10">
            <img
              src="/src/assets/images/sunan_drajat_heritage_gate_1791480743055.jpg"
              alt="Diana Avatar"
              className="w-full h-full object-cover scale-150"
            />
          </div>
        </div>
      </div>

      {/* Main Scrollable Body */}
      <div className="flex-1 overflow-y-auto px-4 pb-2 space-y-3">
        {/* Hero Card: Sorotan Utama */}
        <div
          onClick={onSelectHero}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1C2C3E] via-[#0C1D2E] to-[#251D14] p-3.5 text-white shadow-md cursor-pointer hover:shadow-lg transition-all group"
        >
          {/* Background Heritage Texture overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-35 overflow-hidden pointer-events-none">
            <img
              src="/src/assets/images/sunan_drajat_heritage_gate_1791480743055.jpg"
              alt="Situs Sunan Drajat"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-[160px]">
            <div className="inline-flex items-center gap-1 bg-[#C59A45]/30 border border-[#C59A45]/50 px-2 py-0.5 rounded-full mb-1.5">
              <span className="text-[8px] font-bold text-[#F0DCB1] tracking-wider uppercase">
                ✦ Sorotan Utama
              </span>
            </div>

            <h3
              className="text-[13px] font-bold leading-tight text-white mb-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Situs Makam & Budaya Sunan Drajat Lamongan
            </h3>

            <p className="text-[9px] text-white/75 leading-tight mb-2.5">
              Mengenal sejarah, warisan, dan nilai luhur Sunan Drajat.
            </p>

            <div className="inline-flex items-center gap-1 text-[9.5px] font-semibold text-[#DFBF62] group-hover:translate-x-0.5 transition-transform">
              <span>Baca Selengkapnya</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Section: Catur Pitutur Sunan Drajat */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <div>
              <h4 className="text-[11px] font-bold text-[#0C1D2E] flex items-center gap-1">
                <span className="text-[#C59A45]">✦</span>
                <span>Catur Pitutur Sunan Drajat</span>
              </h4>
              <p className="text-[8.5px] text-[#0C1D2E]/60">
                Nilai luhur yang masih relevan hingga kini.
              </p>
            </div>
          </div>

          {/* 4 Icon Cards Grid */}
          <div className="grid grid-cols-2 gap-2">
            {pituturList.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => onSelectPitutur?.(item.title)}
                  className={`p-2.5 rounded-xl ${item.bg} border ${item.border} hover:shadow-xs transition-all cursor-pointer`}
                >
                  <div className={`w-6 h-6 rounded-lg bg-white/80 flex items-center justify-center mb-1.5 shadow-2xs ${item.color}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h5 className="text-[9.5px] font-bold text-[#0C1D2E] leading-tight">
                    {item.title}
                  </h5>
                  <p className="text-[8px] text-[#0C1D2E]/60 leading-tight mt-0.5">
                    {item.sub}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNav activeTab="beranda" onTabChange={onNavigateTab} />
    </div>
  );
};
