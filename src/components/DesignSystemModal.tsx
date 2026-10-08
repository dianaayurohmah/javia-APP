import React from 'react';
import { X, Check, BookOpen, Layers, Type, Sparkles } from 'lucide-react';
import { JaviaEmblem } from './JaviaEmblem';

interface DesignSystemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesignSystemModal: React.FC<DesignSystemModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const colorPalette = [
    { name: 'Deep Royal Navy', hex: '#0C1D2E', role: 'Primary Brand, Headings, Dark Actions' },
    { name: 'Antique Gold', hex: '#D4AF37', role: 'Sacred Nusantara Motif & Primary Accent' },
    { name: 'Warm Ochre Bronze', hex: '#C59A45', role: 'Interactive Highlights & Buttons' },
    { name: 'Warm Parchment Cream', hex: '#F8F4EC', role: 'Dominant Canvas Background (60%)' },
    { name: 'Warm Sand Surface', hex: '#FAF7F0', role: 'Elevated Cards & Container Surface (30%)' },
    { name: 'Terracotta Earth', hex: '#A0522D', role: 'Historical Artifact & Earth Accents' },
    { name: 'Sage Green', hex: '#2D7A58', role: 'Positive Feedback & Evaluation States' },
  ];

  const caturPitutur = [
    {
      javanese: "Menehana teken marang wong kang wuta",
      indonesian: "Berikanlah tongkat kepada orang yang buta",
      meaning: "Berikanlah petunjuk dan ilmu kepada mereka yang belum memahami kebenaran.",
    },
    {
      javanese: "Menehana pangan marang wong kang luwe",
      indonesian: "Berikanlah makanan kepada orang yang lapar",
      meaning: "Berikanlah bantuan materi dan kesejahteraan kepada orang yang membutuhkan.",
    },
    {
      javanese: "Menehana sandhang marang wong kang wuda",
      indonesian: "Berikanlah pakaian kepada orang yang telanjang",
      meaning: "Jagalah martabat dan lindungilah aib sesama manusia.",
    },
    {
      javanese: "Menehana payung marang wong kang kodanan",
      indonesian: "Berikanlah payung kepada orang yang kehujanan",
      meaning: "Berikanlah perlindungan dan rasa aman kepada orang yang tertimpa musibah.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm select-none">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#F8F4EC] rounded-3xl shadow-2xl border border-[#0C1D2E]/15 overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#0C1D2E]/10 bg-[#FAF7F0] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <JaviaEmblem size={32} />
            <div>
              <h2
                className="text-xl font-bold text-[#0C1D2E]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Javia Design System & Filosofi Heritage
              </h2>
              <p className="text-xs text-[#0C1D2E]/70">
                Spesifikasi UI/UX, Panduan Tipografi, Palet Warna, dan Makna Ajaran Sunan Drajat
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#0C1D2E]/10 text-[#0C1D2E]/70 hover:text-[#0C1D2E] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Section 1: Color Palette */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-[#C59A45]" />
              <h3 className="text-sm font-bold text-[#0C1D2E] uppercase tracking-wider">
                1. 60-30-10 Color Discipline Palette
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {colorPalette.map((col) => (
                <div
                  key={col.hex}
                  className="bg-[#FAF7F0] border border-[#0C1D2E]/10 rounded-2xl p-3 shadow-2xs"
                >
                  <div
                    className="w-full h-14 rounded-xl shadow-inner mb-2 border border-black/10"
                    style={{ backgroundColor: col.hex }}
                  />
                  <h4 className="text-xs font-bold text-[#0C1D2E]">{col.name}</h4>
                  <p className="text-[11px] font-mono font-medium text-[#C59A45] mt-0.5">
                    {col.hex}
                  </p>
                  <p className="text-[10px] text-[#0C1D2E]/60 mt-1 leading-snug">
                    {col.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Typography System */}
          <div className="border-t border-[#0C1D2E]/10 pt-5">
            <div className="flex items-center gap-2 mb-3">
              <Type className="w-4 h-4 text-[#C59A45]" />
              <h3 className="text-sm font-bold text-[#0C1D2E] uppercase tracking-wider">
                2. Typographic Hierarchy (2-Font Rule)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#FAF7F0] border border-[#0C1D2E]/10 rounded-2xl p-4">
                <span className="text-[10px] font-bold text-[#C59A45] uppercase tracking-wider">
                  Brand & Display Face
                </span>
                <h4
                  className="text-2xl font-bold text-[#0C1D2E] mt-1 mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Playfair Display / Cinzel
                </h4>
                <p className="text-xs text-[#0C1D2E]/80 leading-relaxed">
                  Digunakan eksklusif untuk logo Javia, tajuk modul utama, dan kutipan filosofis untuk menghadirkan nuansa klasik, sakral, dan prestisius khas warisan Nusantara.
                </p>
              </div>

              <div className="bg-[#FAF7F0] border border-[#0C1D2E]/10 rounded-2xl p-4">
                <span className="text-[10px] font-bold text-[#C59A45] uppercase tracking-wider">
                  UI & Body Sans-Serif
                </span>
                <h4 className="text-2xl font-bold text-[#0C1D2E] mt-1 mb-2">
                  Plus Jakarta Sans
                </h4>
                <p className="text-xs text-[#0C1D2E]/80 leading-relaxed">
                  Tipografi berstandar keterbacaan tinggi untuk label antarmuka, deskripsi micro-learning, input teks, tombol interaktif, dan kuis agar nyaman dibaca pada layar smartphone.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Catur Pitutur Sunan Drajat Cultural Roots */}
          <div className="border-t border-[#0C1D2E]/10 pt-5">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-[#C59A45]" />
              <h3 className="text-sm font-bold text-[#0C1D2E] uppercase tracking-wider">
                3. Nilai Luhur: Catur Pitutur Sunan Drajat (Paciran, Lamongan)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caturPitutur.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF7F0] border border-[#0C1D2E]/10 rounded-2xl p-3.5 relative overflow-hidden"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#C59A45] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <h4
                        className="text-xs font-bold text-[#0C1D2E] italic leading-tight"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        "{item.javanese}"
                      </h4>
                      <p className="text-[11px] font-semibold text-[#A0522D] mt-1">
                        {item.indonesian}
                      </p>
                      <p className="text-[10.5px] text-[#0C1D2E]/70 mt-1 leading-snug">
                        {item.meaning}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: UX & Ergonomics Standards */}
          <div className="border-t border-[#0C1D2E]/10 pt-5">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#C59A45]" />
              <h3 className="text-sm font-bold text-[#0C1D2E] uppercase tracking-wider">
                4. Standar UI/UX Mobile & Anti-Slop Discipline
              </h3>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#0C1D2E]/80">
              <li className="flex items-center gap-2 bg-[#FAF7F0] p-2.5 rounded-xl border border-[#0C1D2E]/10">
                <Check className="w-4 h-4 text-[#2D7A58] shrink-0" />
                <span>Konsistensi bottom navigation 5-tab di seluruh layar operasional</span>
              </li>
              <li className="flex items-center gap-2 bg-[#FAF7F0] p-2.5 rounded-xl border border-[#0C1D2E]/10">
                <Check className="w-4 h-4 text-[#2D7A58] shrink-0" />
                <span>Touch target ergonomis minimal 44px untuk seluruh tombol dan bidang sentuh</span>
              </li>
              <li className="flex items-center gap-2 bg-[#FAF7F0] p-2.5 rounded-xl border border-[#0C1D2E]/10">
                <Check className="w-4 h-4 text-[#2D7A58] shrink-0" />
                <span>Zero-pill metadata: Kategori dan rincian bebas dari bubble berlebihan</span>
              </li>
              <li className="flex items-center gap-2 bg-[#FAF7F0] p-2.5 rounded-xl border border-[#0C1D2E]/10">
                <Check className="w-4 h-4 text-[#2D7A58] shrink-0" />
                <span>Pemanfaatan aset artefak museum nyata (Gamelan Singa Menggala & Gapura)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#0C1D2E]/10 bg-[#FAF7F0] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#0C1D2E] hover:bg-[#162D45] text-white text-xs font-semibold shadow-xs transition-colors"
          >
            Tutup Dokumentasi
          </button>
        </div>
      </div>
    </div>
  );
};
