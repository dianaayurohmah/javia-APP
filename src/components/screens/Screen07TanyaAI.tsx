import React, { useState } from 'react';
import { ArrowLeft, Send, Sparkles, BookOpen } from 'lucide-react';
import { JaviaEmblem } from '../JaviaEmblem';

interface Screen07TanyaAIProps {
  onBack?: () => void;
}

interface Message {
  sender: 'user' | 'ai';
  text: string;
  source?: string;
  time: string;
}

export const Screen07TanyaAI: React.FC<Screen07TanyaAIProps> = ({ onBack }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'user',
      text: 'Apa sih peran Gamelan Singa Menggala dalam strategi dakwah Sunan Drajat?',
      time: '09:41',
    },
    {
      sender: 'ai',
      text: 'Gamelan Singa Menggala berperan sebagai media dakwah kultural Sunan Drajat. Gamelan ini digunakan untuk mengiringi tembang Pangkur yang berisi ajaran Islam, sehingga pesan dakwah dapat diterima masyarakat tanpa merasa terbebani oleh norma-norma dakwah berbalut kearifan lokal yang sudah ada.',
      source: 'Sumber: Literasi Sejarah Walisongo (terkurasi)',
      time: '09:42',
    },
  ]);

  const [inputVal, setInputVal] = useState('');

  const handleSend = () => {
    if (!inputVal.trim()) return;
    const userMsg: Message = {
      sender: 'user',
      text: inputVal,
      time: '09:43',
    };

    let reply = 'Sunan Drajat dikenal dengan ajaran Catur Pitutur yang mengedepankan kepedulian sosial bagi kaum miskin, yatim piatu, dan orang-orang terlantar di pesisir Lamongan.';
    if (inputVal.toLowerCase().includes('catur') || inputVal.toLowerCase().includes('pitutur')) {
      reply = 'Catur Pitutur adalah empat ajaran luhur: Menehana teken marang wong kang wuta, menehana pangan marang wong kang luwe, menehana sandhang marang wong kang wuda, dan menehana payung marang wong kang kodanan.';
    }

    const aiMsg: Message = {
      sender: 'ai',
      text: reply,
      source: 'Sumber: Arsip Balai Pelestarian Kebudayaan Wilayah XI Jatim',
      time: '09:43',
    };

    setMessages([...messages, userMsg, aiMsg]);
    setInputVal('');
  };

  return (
    <div className="relative w-full h-full flex flex-col bg-[#F8F4EC] overflow-hidden select-none">
      {/* Top Header Bar */}
      <div className="pt-2 px-3 pb-2 flex items-center justify-between border-b border-[#0C1D2E]/10 bg-[#FAF7F0]">
        <button
          onClick={onBack}
          className="p-1 rounded-full text-[#0C1D2E]/70 hover:text-[#0C1D2E] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#C59A45]" />
          <h2 className="text-[12px] font-bold text-[#0C1D2E] tracking-tight">
            Tanya AI Sejarah
          </h2>
        </div>

        {/* Small Golden Javia Badge */}
        <div className="w-6 h-6 rounded-full bg-[#FFF6E5] border border-[#F0DCB1] flex items-center justify-center">
          <JaviaEmblem size={14} />
        </div>
      </div>

      {/* Chat Messages Body */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.map((msg, idx) => {
          if (msg.sender === 'user') {
            return (
              <div key={idx} className="flex justify-end">
                <div className="max-w-[85%] bg-[#0C1D2E] text-white p-2.5 rounded-2xl rounded-tr-xs text-[10px] leading-relaxed shadow-xs">
                  <p>{msg.text}</p>
                  <span className="block text-[8px] text-white/50 text-right mt-1">
                    {msg.time}
                  </span>
                </div>
              </div>
            );
          }

          return (
            <div key={idx} className="flex items-start gap-1.5">
              <div className="w-5 h-5 rounded-full bg-[#C59A45] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                <Sparkles className="w-3 h-3 text-white" />
              </div>

              <div className="max-w-[88%] bg-[#FAF7F0] border border-[#0C1D2E]/10 rounded-2xl rounded-tl-xs p-2.5 text-[#0C1D2E] text-[10px] leading-relaxed shadow-2xs">
                <p className="text-[9.5px] leading-relaxed text-[#0C1D2E]/90">
                  {msg.text}
                </p>

                {msg.source && (
                  <div className="mt-2 pt-1.5 border-t border-[#0C1D2E]/10 flex items-center gap-1 text-[8px] text-[#A0522D] font-medium">
                    <BookOpen className="w-2.5 h-2.5 shrink-0" />
                    <span>{msg.source}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Suggested Query Pill */}
      <div className="px-3 pb-1">
        <button
          onClick={() => {
            setInputVal('Jelaskan 4 ajaran Catur Pitutur');
          }}
          className="text-[8px] text-[#0C1D2E]/60 bg-[#FAF7F0] border border-[#0C1D2E]/10 px-2 py-0.5 rounded-full hover:border-[#C59A45] transition-colors truncate max-w-full"
        >
          💡 Tanya: Jelaskan 4 ajaran Catur Pitutur
        </button>
      </div>

      {/* Bottom Input Field */}
      <div className="p-2 border-t border-[#0C1D2E]/10 bg-[#FAF7F0] flex items-center gap-1.5 shrink-0">
        <div className="flex-1 bg-[#F8F4EC] border border-[#0C1D2E]/15 rounded-full px-3 py-1.5 flex items-center focus-within:border-[#C59A45]">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Tulis pertanyaan..."
            className="w-full bg-transparent text-[10px] text-[#0C1D2E] placeholder-[#0C1D2E]/40 outline-none"
          />
        </div>

        <button
          onClick={handleSend}
          className="w-7 h-7 rounded-full bg-[#0C1D2E] hover:bg-[#162D45] text-white flex items-center justify-center shrink-0 shadow-2xs transition-colors"
        >
          <Send className="w-3 h-3 stroke-[2.2]" />
        </button>
      </div>
    </div>
  );
};
