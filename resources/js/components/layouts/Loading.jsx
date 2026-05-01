// resources/js/components/shared/Loading.jsx
import React from 'react';
import { Gamepad2, Zap, Sparkles } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#0A0F1C] z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#00666D 1px, transparent 1px),
                           linear-gradient(90deg, #00666D 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00EEFF] rounded-full blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00666D] rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>

      {/* Main Loading Container */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Logo/Icon Container with Spin Effect */}
        <div className="relative mb-8">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-4 border-[#00666D] rounded-full animate-spin-slow"></div>
          <div className="absolute inset-2 border-4 border-t-[#00EEFF] border-r-transparent border-b-[#00666D] border-l-transparent rounded-full animate-spin"></div>
          
          {/* Center Icon */}
          <div className="relative w-24 h-24 bg-[#111827] rounded-full flex items-center justify-center border-4 border-[#00EEFF] shadow-[0_0_40px_rgba(0,238,255,0.4)]">
            <Gamepad2 size={48} className="text-[#00EEFF] animate-bounce" />
            
            {/* Sparkles */}
            <div className="absolute -top-2 -right-2">
              <Sparkles size={20} className="text-yellow-400 animate-pulse" />
            </div>
            <div className="absolute -bottom-1 -left-1">
              <Zap size={16} className="text-[#00EEFF] animate-pulse delay-500" />
            </div>
          </div>

          {/* Rotating Dots */}
          <div className="absolute -inset-4 animate-spin-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#00EEFF] rounded-full shadow-[0_0_10px_#00EEFF]"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#00EEFF] rounded-full shadow-[0_0_10px_#00EEFF]"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#00EEFF] rounded-full shadow-[0_0_10px_#00EEFF]"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#00EEFF] rounded-full shadow-[0_0_10px_#00EEFF]"></div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-3xl lg:text-4xl font-black text-white mb-2 tracking-wider">
          <span className="bg-gradient-to-r from-[#00EEFF] to-cyan-300 bg-clip-text text-transparent">
            GAME
          </span>
          <span className="text-white">STORE</span>
        </h2>

        {/* Animated Loading Dots */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-gray-400 text-sm">Loading</span>
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-[#00EEFF] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-2 h-2 bg-[#00EEFF] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-2 h-2 bg-[#00EEFF] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </div>
        </div>

        {/* Progress Bar - FIXED */}
        <div className="w-64 lg:w-80 h-2 bg-[#111827] rounded-full overflow-hidden border border-[#00666D]">
          <div className="h-full bg-gradient-to-r from-[#00666D] via-[#00EEFF] to-cyan-300 rounded-full animate-progress-bar"></div>
        </div>

        {/* Loading Tips */}
        <p className="text-gray-500 text-xs mt-4 text-center max-w-sm animate-pulse">
          ✨ Menyiapkan pengalaman gaming terbaik untukmu...
        </p>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00EEFF] to-transparent opacity-50"></div>

      {/* CSS Animations */}
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes gridMove {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(50px, 50px);
          }
        }

        @keyframes progress-bar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-spin {
          animation: spin 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-progress-bar {
          animation: progress-bar 1.2s ease-out forwards;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
}