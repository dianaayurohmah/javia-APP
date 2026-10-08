import React, { useState } from 'react';
import { ArrowLeft, Play, Pause, Bookmark, Maximize2, Volume2, Clock } from 'lucide-react';

interface Screen09AnimationTheaterProps {
  onBack?: () => void;
}

export const Screen09AnimationTheater: React.FC<Screen09AnimationTheaterProps> = ({
  onBack,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const episodes = [
    {
      id: 'catur-pitutur',
      title: 'Catur Pitutur Sunan Drajat',
      duration: '03:12',
      thumbnail: '/src/assets/images/sunan_drajat_cinematic_1791480768380.jpg',
      tag: 'Episode 01',
    },
    {
      id: 'jejak-dakwah',
      title: 'Jejak Dakwah di Paciran',
      duration: '04:58',
      thumbnail: '/src/assets/images/sunan_drajat_heritage_gate_1791480743055.jpg',
      tag: 'Episode 02',
    },
  ];

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
          Javia Animation Theater
        </h2>

        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={`p-1 transition-colors ${
            isBookmarked ? 'text-[#C59A45]' : 'text-[#0C1D2E]/50 hover:text-[#0C1D2E]'
          }`}
        >
          <Bookmark className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pb-3">
        {/* Cinematic Video Player */}
        <div className="relative w-full h-40 bg-[#0E151E] overflow-hidden group">
          <img
            src="/src/assets/images/sunan_drajat_cinematic_1791480768380.jpg"
            alt="Perjalanan Sunan Drajat Animasi"
            className="w-full h-full object-cover"
          />

          {/* Video Contrast Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

          {/* Central Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-white" />
            ) : (
              <Play className="w-4 h-4 fill-white translate-x-0.5" />
            )}
          </button>

          {/* Bottom Player Overlay Bar */}
          <div className="absolute bottom-2 left-3 right-3 flex flex-col gap-1 text-white">
            {/* Timeline Progress Bar */}
            <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-[#DFBF62] rounded-full" />
            </div>

            <div className="flex items-center justify-between text-[8px] text-white/80 font-medium pt-0.5">
              <span>02:45 / 05:30</span>
              <div className="flex items-center gap-2">
                <Volume2 className="w-2.5 h-2.5" />
                <Maximize2 className="w-2.5 h-2.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Title Section */}
        <div className="px-3 pt-2.5">
          <h3
            className="text-[14px] font-bold text-[#0C1D2E] leading-tight mb-1"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Perjalanan Sunan Drajat
          </h3>
          <p className="text-[9px] text-[#0C1D2E]/75 leading-relaxed">
            Kisah perjuangan, ajaran, dan nilai luhur Sunan Drajat yang menginspirasi hingga kini.
          </p>

          {/* Episode List Section */}
          <div className="mt-3 pt-2 border-t border-[#0C1D2E]/10">
            <h4 className="text-[10px] font-bold text-[#0C1D2E] mb-2 flex items-center gap-1">
              <span className="text-[#C59A45]">✦</span>
              <span>Episode Lainnya</span>
            </h4>

            <div className="space-y-1.5">
              {episodes.map((ep) => (
                <div
                  key={ep.id}
                  className="bg-[#FAF7F0] border border-[#0C1D2E]/10 rounded-xl p-1.5 flex items-center justify-between hover:border-[#C59A45]/50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-2">
                    <div className="relative w-12 h-9 rounded-lg overflow-hidden bg-black/20 shrink-0">
                      <img
                        src={ep.thumbnail}
                        alt={ep.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Play className="w-2.5 h-2.5 text-white fill-white" />
                      </div>
                    </div>
                    <div>
                      <h5 className="text-[9.5px] font-bold text-[#0C1D2E] leading-tight group-hover:text-[#C59A45] transition-colors">
                        {ep.title}
                      </h5>
                      <div className="flex items-center gap-1 text-[8px] text-[#0C1D2E]/50 mt-0.5">
                        <Clock className="w-2 h-2" />
                        <span>{ep.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
