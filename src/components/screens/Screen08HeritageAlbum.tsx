import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Share2, MapPin } from 'lucide-react';

interface Screen08HeritageAlbumProps {
  onBack?: () => void;
}

export const Screen08HeritageAlbum: React.FC<Screen08HeritageAlbumProps> = ({
  onBack,
}) => {
  const [activeTab, setActiveTab] = useState<'deskripsi' | 'galeri' | 'peta'>('deskripsi');
  const [itemIndex, setItemIndex] = useState(1);

  const artifacts = [
    {
      title: "Gamelan Singa Menggala",
      subtitle: "Sunan Drajat",
      period: "Abad ke-15 Masehi",
      image: "/src/assets/images/gamelan_singa_menggala_1791480756069.jpg",
      description:
        "Gamelan Singa Menggala merupakan salah satu peninggalan budaya yang digunakan oleh Sunan Drajat sebagai media dakwah. Gamelan ini memiliki nilai historis dan kultural yang tinggi, terutama dalam penyebaran ajaran Islam di Jawa.",
      details: [
        { label: "Bahan", val: "Kayu Jati & Perunggu" },
        { label: "Lokasi Asal", val: "Drajat, Paciran, Lamongan" },
        { label: "Fungsi", val: "Pengiring Tembang Pangkur" },
      ],
    },
    {
      title: "Gapura Paduraksa Drajat",
      subtitle: "Arsitektur Kuno",
      period: "Abad ke-16 Masehi",
      image: "/src/assets/images/sunan_drajat_heritage_gate_1791480743055.jpg",
      description:
        "Gapura Paduraksa dengan ukiran relief sulur teratai yang melambangkan keabadian dan transisi spiritual menuju pelataran makam utama Sunan Drajat di bukit Paciran.",
      details: [
        { label: "Bahan", val: "Batu Putih Karang & Kapur" },
        { label: "Gaya", val: "Peralihan Hindu-Islam Jawa" },
        { label: "Status", val: "Cagar Budaya Nasional" },
      ],
    },
  ];

  const current = artifacts[(itemIndex - 1) % artifacts.length];

  return (
    <div className="relative w-full h-full flex flex-col bg-[#F8F4EC] overflow-hidden select-none">
      {/* Top Header */}
      <div className="pt-2 px-3 pb-1.5 flex items-center justify-between border-b border-[#0C1D2E]/10 bg-[#FAF7F0]">
        <button
          onClick={onBack}
          className="p-1 rounded-full text-[#0C1D2E]/70 hover:text-[#0C1D2E] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <h2 className="text-[12px] font-bold text-[#0C1D2E] tracking-tight">
          Javia Heritage Album
        </h2>

        <button className="p-1 text-[#0C1D2E]/50 hover:text-[#0C1D2E]">
          <Share2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pb-3">
        {/* Large Artifact Display Frame */}
        <div className="relative w-full h-36 bg-[#0E151E] overflow-hidden">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {/* Artifact Tag */}
          <div className="absolute top-2 left-2 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 text-[8px] text-[#DFBF62] font-semibold">
            {current.period}
          </div>
        </div>

        {/* Title & Navigation Row */}
        <div className="px-3 pt-2.5">
          <div className="flex items-start justify-between">
            <div>
              <h3
                className="text-[14px] font-bold text-[#0C1D2E] leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {current.title}
              </h3>
              <p className="text-[9px] text-[#0C1D2E]/60 flex items-center gap-1 mt-0.5">
                <MapPin className="w-2.5 h-2.5 text-[#C59A45]" />
                <span>{current.subtitle}</span>
              </p>
            </div>

            {/* Pager Controls: ‹ 1 / 10 › */}
            <div className="flex items-center gap-1 bg-[#FAF7F0] border border-[#0C1D2E]/10 px-2 py-1 rounded-full shadow-2xs">
              <button
                onClick={() => setItemIndex(itemIndex > 1 ? itemIndex - 1 : 10)}
                className="text-[#0C1D2E]/60 hover:text-[#0C1D2E]"
              >
                <ChevronLeft className="w-3 h-3" />
              </button>
              <span className="text-[9px] font-bold text-[#0C1D2E] px-1">
                {itemIndex} / 10
              </span>
              <button
                onClick={() => setItemIndex(itemIndex < 10 ? itemIndex + 1 : 1)}
                className="text-[#0C1D2E]/60 hover:text-[#0C1D2E]"
              >
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Segmented Tab Bar */}
          <div className="mt-2.5 flex items-center bg-[#FAF7F0] border border-[#0C1D2E]/10 p-0.5 rounded-xl">
            {(['deskripsi', 'galeri', 'peta'] as const).map((tab) => {
              const labels = {
                deskripsi: 'Deskripsi',
                galeri: 'Galeri',
                peta: 'Peta Situs',
              };
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-1 text-[9px] font-semibold rounded-lg transition-colors capitalize ${
                    isActive
                      ? 'bg-[#C59A45] text-white shadow-2xs'
                      : 'text-[#0C1D2E]/60 hover:text-[#0C1D2E]'
                  }`}
                >
                  {labels[tab]}
                </button>
              );
            })}
          </div>

          {/* Tab Content: Description */}
          {activeTab === 'deskripsi' && (
            <div className="mt-2 text-[9.5px] leading-relaxed text-[#0C1D2E]/85">
              <p>{current.description}</p>
            </div>
          )}

          {activeTab === 'galeri' && (
            <div className="mt-2 grid grid-cols-2 gap-1.5 text-[8.5px] text-[#0C1D2E]/80">
              <div className="bg-[#FAF7F0] p-1.5 rounded-lg border border-[#0C1D2E]/10">
                Ukiran Singa Menggala: Lambang kekuatan kultural
              </div>
              <div className="bg-[#FAF7F0] p-1.5 rounded-lg border border-[#0C1D2E]/10">
                Bilah Gong Bersepuh Emas: Akustik gamelan sakral
              </div>
            </div>
          )}

          {activeTab === 'peta' && (
            <div className="mt-2 p-2 bg-[#FAF7F0] rounded-lg border border-[#0C1D2E]/10 text-[9px] text-[#0C1D2E]/80">
              📍 Disimpan di Museum Khusus Sunan Drajat, Kompleks Makam Drajat, Kecamatan Paciran, Kabupaten Lamongan.
            </div>
          )}

          {/* Thumbnails Row */}
          <div className="mt-3 pt-2 border-t border-[#0C1D2E]/10">
            <p className="text-[8px] font-semibold text-[#0C1D2E]/50 uppercase tracking-wider mb-1.5">
              Koleksi Terkait
            </p>
            <div className="grid grid-cols-3 gap-1.5">
              <div className="h-10 rounded-lg overflow-hidden border border-[#C59A45] ring-1 ring-[#C59A45]/30">
                <img
                  src="/src/assets/images/gamelan_singa_menggala_1791480756069.jpg"
                  alt="Singa Menggala"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-10 rounded-lg overflow-hidden border border-[#0C1D2E]/10 opacity-75 hover:opacity-100 transition-opacity">
                <img
                  src="/src/assets/images/sunan_drajat_heritage_gate_1791480743055.jpg"
                  alt="Gapura Candi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-10 rounded-lg overflow-hidden border border-[#0C1D2E]/10 opacity-75 hover:opacity-100 transition-opacity">
                <img
                  src="/src/assets/images/majapahit_trowulan_candi_1791480779577.jpg"
                  alt="Artefak Majapahit"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
