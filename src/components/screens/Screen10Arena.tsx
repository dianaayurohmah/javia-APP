import React, { useState } from 'react';
import { Gamepad2, Award, CheckCircle2, ChevronRight, Trophy } from 'lucide-react';
import { BottomNav } from '../BottomNav';

interface Screen10ArenaProps {
  onNavigateTab?: (tab: any) => void;
}

export const Screen10Arena: React.FC<Screen10ArenaProps> = ({
  onNavigateTab,
}) => {
  const [activeTab, setActiveTab] = useState<'kuis' | 'leaderboard'>('kuis');
  const [selectedAnswer, setSelectedAnswer] = useState('B');

  const answers = [
    { key: 'A', text: 'Kekayaan materi' },
    { key: 'B', text: 'Kejujuran dan kesederhanaan' },
    { key: 'C', text: 'Kekuasaan politik' },
    { key: 'D', text: 'Keberanian berperang' },
  ];

  const leaders = [
    { rank: 1, name: 'Diana', score: '1.250', isCurrentUser: true },
    { rank: 2, name: 'Andi Pratama', score: '1.100', isCurrentUser: false },
    { rank: 3, name: 'Raka Bayu', score: '980', isCurrentUser: false },
  ];

  return (
    <div className="relative w-full h-full flex flex-col bg-[#F8F4EC] overflow-hidden select-none">
      {/* Top Header */}
      <div className="pt-2 px-3 pb-1.5 flex items-center justify-between border-b border-[#0C1D2E]/10 bg-[#FAF7F0]">
        <div className="flex items-center gap-1.5">
          <Gamepad2 className="w-4 h-4 text-[#C59A45]" />
          <h2 className="text-[13px] font-bold text-[#0C1D2E] tracking-tight">
            Javia Arena
          </h2>
        </div>

        {/* User Points Badge */}
        <div className="flex items-center gap-1 bg-[#FFF6E5] border border-[#F0DCB1] px-2 py-0.5 rounded-full">
          <Trophy className="w-2.5 h-2.5 text-[#B88728]" />
          <span className="text-[8.5px] font-bold text-[#B88728]">1.250 Poin</span>
        </div>
      </div>

      {/* Segmented Top Tabs */}
      <div className="px-3 pt-2">
        <div className="flex items-center bg-[#FAF7F0] border border-[#0C1D2E]/10 p-0.5 rounded-xl">
          <button
            onClick={() => setActiveTab('kuis')}
            className={`flex-1 py-1 text-[9px] font-semibold rounded-lg transition-colors ${
              activeTab === 'kuis'
                ? 'bg-[#C59A45] text-white shadow-2xs'
                : 'text-[#0C1D2E]/60 hover:text-[#0C1D2E]'
            }`}
          >
            Kuis
          </button>
          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`flex-1 py-1 text-[9px] font-semibold rounded-lg transition-colors ${
              activeTab === 'leaderboard'
                ? 'bg-[#C59A45] text-white shadow-2xs'
                : 'text-[#0C1D2E]/60 hover:text-[#0C1D2E]'
            }`}
          >
            Leaderboard
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2">
        {activeTab === 'kuis' ? (
          <>
            {/* Question Card */}
            <div className="bg-[#FAF7F0] border border-[#0C1D2E]/10 rounded-xl p-2.5 shadow-2xs">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[8.5px] font-bold uppercase tracking-wider text-[#C59A45]">
                  Soal 3/10
                </span>
                <span className="text-[8px] text-[#0C1D2E]/40 font-medium">
                  Tingkat Menengah
                </span>
              </div>
              <h3 className="text-[9.5px] font-semibold text-[#0C1D2E] leading-snug">
                Apa nilai utama dari ajaran Catur Piwulang Sunan Drajat yang paling relevan untuk kehidupan masa kini?
              </h3>
            </div>

            {/* Answer Options */}
            <div className="space-y-1.5">
              {answers.map((ans) => {
                const isSelected = selectedAnswer === ans.key;
                const isCorrect = ans.key === 'B';
                return (
                  <button
                    key={ans.key}
                    onClick={() => setSelectedAnswer(ans.key)}
                    className={`w-full p-2 rounded-xl border text-left flex items-center justify-between text-[9px] font-medium transition-all ${
                      isSelected && isCorrect
                        ? 'bg-[#EBF7F2] border-[#2D7A58] text-[#1E563E] shadow-2xs'
                        : isSelected
                        ? 'bg-[#FDF2F4] border-[#B93E58] text-[#B93E58]'
                        : 'bg-[#FAF7F0] border-[#0C1D2E]/10 text-[#0C1D2E]/80 hover:border-[#0C1D2E]/30'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold ${
                          isSelected && isCorrect
                            ? 'bg-[#2D7A58] text-white'
                            : 'bg-[#0C1D2E]/10 text-[#0C1D2E]'
                        }`}
                      >
                        {ans.key}
                      </span>
                      <span>{ans.text}</span>
                    </div>

                    {isSelected && isCorrect && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2D7A58]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback & Points Banner */}
            <div className="bg-[#EBF7F2] border border-[#CCEADC] rounded-xl p-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[8.5px] font-bold text-[#1E563E]">
                <span>★</span>
                <span>Jawaban benar! +100 poin</span>
              </div>
              <span className="text-[8px] font-semibold text-[#2D7A58]">
                Akurasi 100%
              </span>
            </div>

            {/* Badge Achievement Card */}
            <div className="bg-[#FFF8E7] border border-[#F0DCB1] rounded-xl p-2 flex items-center gap-2 shadow-2xs">
              <div className="w-8 h-8 rounded-full bg-[#C59A45] flex items-center justify-center shrink-0 text-white shadow-xs">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[8px] text-[#0C1D2E]/60 leading-tight">
                  Kamu mendapatkan badge:
                </p>
                <h4 className="text-[9.5px] font-bold text-[#0C1D2E] leading-tight">
                  Sahabat Sunan Drajat
                </h4>
              </div>
            </div>

            {/* Leaderboard Preview Card */}
            <div className="pt-0.5">
              <div className="flex items-center justify-between text-[8.5px] font-bold text-[#0C1D2E] mb-1">
                <span>Leaderboard</span>
                <button
                  onClick={() => setActiveTab('leaderboard')}
                  className="text-[#C59A45] flex items-center gap-0.5 text-[8px] hover:underline"
                >
                  <span>Lihat Semua</span>
                  <ChevronRight className="w-2.5 h-2.5" />
                </button>
              </div>

              <div className="bg-[#FAF7F0] border border-[#0C1D2E]/10 rounded-xl p-1.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-4 text-[9px] font-bold text-[#C59A45] text-center">
                    1
                  </span>
                  <div className="w-5 h-5 rounded-full overflow-hidden bg-slate-200">
                    <img
                      src="/src/assets/images/sunan_drajat_heritage_gate_1791480743055.jpg"
                      alt="Diana"
                      className="w-full h-full object-cover scale-150"
                    />
                  </div>
                  <span className="text-[9px] font-bold text-[#0C1D2E]">
                    Diana
                  </span>
                </div>
                <span className="text-[9px] font-bold text-[#0C1D2E]">
                  1.250
                </span>
              </div>
            </div>
          </>
        ) : (
          /* Full Leaderboard View */
          <div className="space-y-1.5 pt-1">
            {leaders.map((item) => (
              <div
                key={item.rank}
                className={`p-2 rounded-xl border flex items-center justify-between ${
                  item.isCurrentUser
                    ? 'bg-[#FFF8E7] border-[#F0DCB1]'
                    : 'bg-[#FAF7F0] border-[#0C1D2E]/10'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold ${
                      item.rank === 1
                        ? 'bg-[#C59A45] text-white'
                        : 'bg-[#0C1D2E]/10 text-[#0C1D2E]'
                    }`}
                  >
                    {item.rank}
                  </span>
                  <div>
                    <h4 className="text-[9.5px] font-bold text-[#0C1D2E]">
                      {item.name} {item.isCurrentUser && '(Kamu)'}
                    </h4>
                    <p className="text-[8px] text-[#0C1D2E]/50">
                      Tingkat Ahli Sejarah
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-[#0C1D2E]">
                  {item.score}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="ai" onTabChange={onNavigateTab} />
    </div>
  );
};
