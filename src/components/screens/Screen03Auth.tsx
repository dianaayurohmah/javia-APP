import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { JaviaEmblem } from '../JaviaEmblem';

interface Screen03AuthProps {
  onSignIn?: () => void;
  onSignUp?: () => void;
}

export const Screen03Auth: React.FC<Screen03AuthProps> = ({
  onSignIn,
  onSignUp,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('diana.nusantara@javia.id');
  const [password, setPassword] = useState('••••••••••••');

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F8F4EC] p-6 overflow-hidden select-none">
      {/* Top Brand Header */}
      <div className="flex flex-col items-center text-center pt-2">
        <JaviaEmblem size={52} />
        <h2
          className="text-[28px] font-bold text-[#0C1D2E] tracking-tight mt-1 mb-1.5"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Javia
        </h2>
        <p className="text-[11.5px] text-[#0C1D2E]/70 max-w-[210px] leading-relaxed">
          Masuk untuk melanjutkan perjalanan sejarahmu.
        </p>
      </div>

      {/* Form Section */}
      <div className="space-y-3.5 my-auto max-w-[240px] mx-auto w-full">
        {/* Email / Phone Field */}
        <div>
          <label className="block text-[10px] font-medium text-[#0C1D2E]/60 mb-1">
            Email atau No. HP
          </label>
          <div className="relative flex items-center bg-[#FAF7F0] border border-[#0C1D2E]/15 rounded-xl px-3 py-2.5 shadow-xs focus-within:border-[#C59A45] transition-colors">
            <Mail className="w-4 h-4 text-[#0C1D2E]/40 shrink-0 mr-2" />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email atau No. HP"
              className="w-full bg-transparent text-[11.5px] text-[#0C1D2E] placeholder-[#0C1D2E]/40 outline-none"
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-[10px] font-medium text-[#0C1D2E]/60 mb-1">
            Password
          </label>
          <div className="relative flex items-center bg-[#FAF7F0] border border-[#0C1D2E]/15 rounded-xl px-3 py-2.5 shadow-xs focus-within:border-[#C59A45] transition-colors">
            <Lock className="w-4 h-4 text-[#0C1D2E]/40 shrink-0 mr-2" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-transparent text-[11.5px] text-[#0C1D2E] placeholder-[#0C1D2E]/40 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-[#0C1D2E]/40 hover:text-[#0C1D2E] transition-colors ml-1.5"
            >
              {showPassword ? (
                <EyeOff className="w-3.5 h-3.5" />
              ) : (
                <Eye className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 space-y-2.5">
          {/* Primary Deep Navy "Masuk" Button */}
          <button
            onClick={onSignIn}
            className="w-full py-2.5 px-4 rounded-xl bg-[#0C1D2E] hover:bg-[#162D45] text-white text-[12px] font-semibold shadow-sm transition-all active:scale-[0.98]"
          >
            Masuk
          </button>

          {/* Divider "atau" */}
          <div className="relative flex items-center justify-center my-1">
            <span className="w-full border-t border-[#0C1D2E]/10" />
            <span className="absolute bg-[#F8F4EC] px-2 text-[10px] text-[#0C1D2E]/40 uppercase tracking-wider font-medium">
              atau
            </span>
          </div>

          {/* Secondary Outlined "Daftar" Button */}
          <button
            onClick={onSignUp}
            className="w-full py-2 px-4 rounded-xl border border-[#0C1D2E]/25 text-[#0C1D2E] hover:bg-[#0C1D2E]/5 text-[12px] font-medium transition-all active:scale-[0.98]"
          >
            Daftar
          </button>
        </div>

        {/* Forgot Password */}
        <div className="text-center pt-1">
          <button className="text-[10.5px] text-[#C59A45] hover:underline font-medium">
            Lupa password?
          </button>
        </div>
      </div>

      {/* Bottom Flourish Motif */}
      <div className="flex justify-center items-center pb-1 text-[#C59A45]/30">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
};
