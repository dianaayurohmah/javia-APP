import React, { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { BottomNav } from '../BottomNav';

interface Screen05ModulListProps {
  onSelectModul?: (modulId: string) => void;
  onNavigateTab?: (tab: any) => void;
}

export const Screen05ModulList: React.FC<Screen05ModulListProps> = ({
  onSelectModul,
  onNavigateTab,
}) => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Semua', 'Jawa', 'Madura', 'Walisongo', 'Lainnya'];

  const modules = [
    {
      id: 'sunan-drajat',
      title: 'Sunan Drajat',
      location: 'Paciran, Lamongan',
      category: 'Walisongo',
      image: '/src/assets/images/sunan_drajat_heritage_gate_1791480743055.jpg',
      featured: true,
    },
    {
      id: 'majapahit',
      title: 'Majapahit',
      location: 'Trowulan, Mojokerto',
      category: 'Jawa',
      image: '/src/assets/images/majapahit_trowulan_candi_1791480779577.jpg',
      featured: false,
    },
    {
      id: 'singhasari',
      title: 'Kerajaan Singhasari',
      location: 'Malang',
      category: 'Jawa',
      image: '/src/assets/images/majapahit_trowulan_candi_1791480779577.jpg',
      featured: false,
    },
    {
      id: 'walisongo',
      title: 'Wali Songo',
      location: 'Jawa',
      category: 'Walisongo',
      image: '/src/assets/images/sunan_drajat_cinematic_1791480768380.jpg',
      featured: false,
    },
    {
      id: 'jawa-timur',
      title: 'Sejarah Jawa Timur',
      location: 'Lainnya',
      category: 'Lainnya',
      image: '/src/assets/images/sunan_drajat_heritage_gate_1791480743055.jpg',
      featured: false,
    },
  ];

  const filteredModules = modules.filter((m) => {
    const matchesCat =
      activeCategory === 'Semua' || m.category === activeCategory;
    const matchesQuery =
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="relative w-full h-full flex flex-col bg-[#F8F4EC] overflow-hidden select-none">
      {/* Header Bar */}
      <div className="pt-2 px-4 pb-2">
        <h2
          className="text-[17px] font-bold text-[#0C1D2E] tracking-tight leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Pilih Modul Sejarah
        </h2>
        <p className="text-[9.5px] text-[#0C1D2E]/65 leading-tight mt-0.5">
          Jelajahi berbagai modul sejarah Nusantara yang menarik.
        </p>

        {/* Search Input Bar */}
        <div className="mt-2 relative flex items-center bg-[#FAF7F0] border border-[#0C1D2E]/15 rounded-xl px-2.5 py-1.5 shadow-2xs focus-within:border-[#C59A45]">
          <Search className="w-3.5 h-3.5 text-[#0C1D2E]/40 shrink-0 mr-1.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari modul sejarah..."
            className="w-full bg-transparent text-[10.5px] text-[#0C1D2E] placeholder-[#0C1D2E]/40 outline-none"
          />
        </div>

        {/* Category Chips Horizontal Scroller */}
        <div className="mt-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[9.5px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? 'bg-[#C59A45] text-white shadow-2xs'
                  : 'bg-[#FAF7F0] border border-[#0C1D2E]/10 text-[#0C1D2E]/70 hover:text-[#0C1D2E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Module List Cards View */}
      <div className="flex-1 overflow-y-auto px-4 pb-2 space-y-2">
        {filteredModules.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectModul?.(item.id)}
            className="bg-[#FAF7F0] border border-[#0C1D2E]/10 rounded-xl p-2 flex items-center justify-between hover:shadow-sm transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 rounded-lg overflow-hidden shrink-0 bg-[#0C1D2E]/10 border border-[#0C1D2E]/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-[#0C1D2E] leading-tight">
                  {item.title}
                </h4>
                <p className="text-[8.5px] text-[#0C1D2E]/60 leading-tight mt-0.5">
                  {item.location}
                </p>
              </div>
            </div>

            {/* Gold "Lanjut" Action Pill */}
            <button className="px-2.5 py-1 rounded-full bg-[#FFF6E5] border border-[#F0DCB1] text-[#B88728] text-[9px] font-semibold flex items-center gap-0.5 group-hover:bg-[#C59A45] group-hover:text-white transition-colors">
              <span>Lanjut</span>
              <ChevronRight className="w-2.5 h-2.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="jelajah" onTabChange={onNavigateTab} />
    </div>
  );
};
