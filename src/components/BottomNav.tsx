import React from 'react';
import { Home, Compass, Sparkles, Image as ImageIcon, User } from 'lucide-react';

interface BottomNavProps {
  activeTab?: 'beranda' | 'jelajah' | 'ai' | 'galeri' | 'profil';
  onTabChange?: (tab: 'beranda' | 'jelajah' | 'ai' | 'galeri' | 'profil') => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab = 'beranda',
  onTabChange,
}) => {
  const tabs = [
    { id: 'beranda' as const, label: 'Beranda', icon: Home },
    { id: 'jelajah' as const, label: 'Jelajah', icon: Compass },
    { id: 'ai' as const, label: 'Javia AI', icon: Sparkles },
    { id: 'galeri' as const, label: 'Galeri', icon: ImageIcon },
    { id: 'profil' as const, label: 'Profil', icon: User },
  ];

  return (
    <div className="mt-auto border-t border-[#0C1D2E]/10 bg-[#FAF7F0] px-3 py-1.5 flex items-center justify-between shrink-0 select-none">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange?.(tab.id)}
            className={`flex flex-col items-center justify-center py-0.5 px-2 transition-colors ${
              isActive ? 'text-[#C59A45]' : 'text-[#0C1D2E]/50 hover:text-[#0C1D2E]'
            }`}
          >
            <div className="relative">
              <Icon className={`w-4 h-4 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#C59A45] rounded-full" />
              )}
            </div>
            <span
              className={`text-[9px] mt-0.5 font-medium tracking-tight ${
                isActive ? 'text-[#0C1D2E] font-semibold' : 'text-[#0C1D2E]/60'
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
