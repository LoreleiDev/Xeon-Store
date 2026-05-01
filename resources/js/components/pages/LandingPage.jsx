// resources/js/pages/LandingPage.jsx
import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, Gamepad2, ChevronRight, Star, Zap, Coins } from 'lucide-react'; // ✅ Tambah Coins icon
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layouts/Navbar';
import Loading from '@/components/layouts/Loading';

export default function LandingPage() {
  const navigate = useNavigate();
  
  // State untuk dummy data
  const [flashDeals, setFlashDeals] = useState([]);
  const [popularGames, setPopularGames] = useState([]);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 29, seconds: 30 });
  const [loading, setLoading] = useState(true);

  // ✅ Dummy User Data dengan Xcoins
  const user = {
    name: 'PlayerOne',
    xcoins: 2500, // ✅ Ganti balance jadi Xcoins (integer, bukan Rupiah)
  };

  // ========================================
  // 🔁 COUNTDOWN TIMER EFFECT
  // ========================================
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // ========================================
  // 📦 LOAD DUMMY DATA (No Backend!)
  // ========================================
  useEffect(() => {
    const timer = setTimeout(() => {
      
      setFlashDeals([
        { id: 1, title: 'Weekly Pass', game: 'Mobile Legends', original_price: 32000, price: 26000, xcoins_earned: 130, image: 'https://placehold.co/400x300/1a1a2e/00EEFF?text=Weekly+Pass', discount: '19%' },
        { id: 2, title: 'Welkin Moon', game: 'Genshin Impact', original_price: 64000, price: 56000, xcoins_earned: 280, image: 'https://placehold.co/400x300/1a1a2e/00EEFF?text=Welkin+Moon', discount: '12%' },
        { id: 3, title: 'Starlight Member', game: 'Mobile Legends', original_price: 50000, price: 35000, xcoins_earned: 175, image: 'https://placehold.co/400x300/1a1a2e/00EEFF?text=Starlight', discount: '30%' },
      ]);

      setPopularGames([
        { id: 1, name: 'Mobile Legends', image: 'https://placehold.co/300x300/1a1a2e/00EEFF?text=MLBB', category: 'MOBA' },
        { id: 2, name: 'Free Fire', image: 'https://placehold.co/300x300/1a1a2e/00EEFF?text=FF', category: 'Battle Royale' },
        { id: 3, name: 'Free Fire Max', image: 'https://placehold.co/300x300/1a1a2e/00EEFF?text=FF+Max', category: 'Battle Royale' },
        { id: 4, name: 'PUBG Mobile', image: 'https://placehold.co/300x300/1a1a2e/00EEFF?text=PUBG', category: 'Battle Royale' },
        { id: 5, name: 'Genshin Impact', image: 'https://placehold.co/300x300/1a1a2e/00EEFF?text=Genshin', category: 'RPG' },
        { id: 6, name: 'Valorant', image: 'https://placehold.co/300x300/1a1a2e/00EEFF?text=Valorant', category: 'FPS' },
      ]);

      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // ❌ HAPUS formatRupiah karena tidak dipakai lagi

  // ========================================
  // ⏳ LOADING STATE
  // ========================================
  if (loading) {
    return <Loading />;
  }

  // ========================================
  // 🎨 MAIN RENDER
  // ========================================
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6 max-w-7xl">
        
        {/* 🎮 HERO SECTION */}
        <div 
          className="rounded-2xl lg:rounded-3xl p-6 lg:p-8 mb-8 relative overflow-hidden"
          style={{ 
            background: 'linear-gradient(180deg, #00666D 0%, #00EEFF 100%)',
            boxShadow: '0 20px 60px rgba(0, 238, 255, 0.3)'
          }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#0A0F1C] rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-black text-[#0A0F1C] mb-3 drop-shadow-sm">
                Hi, {user.name}!
              </h1>
              <p className="text-[#0A0F1C]/90 text-lg lg:text-xl font-medium">
                Mau Top up apa hari ini?
              </p>
            </div>
            
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xs">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00EEFF] to-cyan-300 rounded-full blur-3xl opacity-30 scale-110"></div>
                  <img 
                    src="https://placehold.co/320x280/transparent/00EEFF?text=Game+Character" 
                    alt="Game Character" 
                    className="relative w-full h-auto object-contain drop-shadow-2xl"
                    style={{ 
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
                      animation: 'float 3s ease-in-out infinite'
                    }}
                  />
                  <div className="absolute top-2 right-2 w-12 h-12 border-4 border-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-2 left-2 w-8 h-8 border-2 border-white/30 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🔥 FLASH DEAL SECTION */}
        <section className="mb-10">
          <div className="bg-[#111827] border-2 border-[#00666D] rounded-2xl lg:rounded-3xl p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#00666D] rounded-xl">
                  <Sparkles size={18} style={{ color: '#00EEFF' }} />
                </div>
                <h2 className="text-xl lg:text-2xl font-bold" style={{ color: '#00EEFF' }}>
                  Flash Deal!
                </h2>
              </div>
              <div className="flex items-center gap-2 bg-[#0A0F1C] border border-[#00666D] px-3 py-2 rounded-xl">
                <Clock size={14} style={{ color: '#00EEFF' }} />
                <span className="font-mono font-bold text-sm lg:text-base" style={{ color: '#00EEFF' }}>
                  {String(timeLeft.hours).padStart(2, '0')}:
                  {String(timeLeft.minutes).padStart(2, '0')}:
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {flashDeals.map((deal) => (
                <div 
                  key={deal.id} 
                  className="group bg-[#0A0F1C] border-2 border-[#00666D] rounded-xl overflow-hidden hover:border-[#00EEFF] hover:shadow-[0_0_30px_rgba(0,238,255,0.15)] transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/topup/${deal.id}`)}
                >
                  <div className="relative h-32 lg:h-36 overflow-hidden">
                    <img 
                      src={deal.image} 
                      alt={deal.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/60 to-transparent"></div>
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg">
                      -{deal.discount}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-base lg:text-lg font-bold group-hover:text-[#00EEFF] transition-colors" style={{ color: '#00EEFF' }}>
                          {deal.title}
                        </h3>
                        <p className="text-gray-400 text-xs">{deal.game}</p>
                      </div>
                      <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    </div>
                    <div className="flex items-end justify-between mt-3 pt-3 border-t border-[#00666D]">
                      <div className="flex flex-col">
                        <span className="text-red-400 text-xs line-through decoration-red-400/50">
                          Rp {deal.original_price.toLocaleString('id-ID')}
                        </span>
                        <span className="text-lg lg:text-xl font-black" style={{ color: '#00EEFF', textShadow: '0 0 10px rgba(0,238,255,0.4)' }}>
                          Rp {deal.price.toLocaleString('id-ID')}
                        </span>
                      </div>
                      {/* ✅ Badge Xcoins Earned */}
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-1 bg-[#00666D]/30 px-2 py-1 rounded-md border border-[#00EEFF]/30">
                          <Coins size={12} className="text-[#00EEFF]" />
                          <span className="text-xs font-bold text-[#00EEFF]">+{deal.xcoins_earned} Xcoins</span>
                        </div>
                        <button className="bg-[#00EEFF] text-[#0A0F1C] px-3 py-1.5 rounded-md text-xs font-bold hover:bg-white transition-colors">
                          Beli
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-center">
              <button className="group flex items-center gap-2 text-[#00EEFF] hover:text-white px-5 py-2.5 rounded-lg border-2 border-[#00EEFF] hover:bg-[#00EEFF] transition-all duration-300 text-sm font-medium">
                Lihat Semua Promo <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* 🎮 POPULAR GAMES SECTION */}
        <section>
          <div className="bg-[#111827] border-2 border-[#00666D] rounded-2xl lg:rounded-3xl p-4 lg:p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-[#00666D] rounded-xl">
                <Gamepad2 size={18} style={{ color: '#00EEFF' }} />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold" style={{ color: '#00EEFF' }}>
                Popular Games
              </h2>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 lg:gap-4">
              {popularGames.map((game) => (
                <div 
                  key={game.id} 
                  className="group bg-[#0A0F1C] border-2 border-[#00666D] rounded-xl lg:rounded-2xl overflow-hidden hover:border-[#00EEFF] hover:shadow-[0_0_25px_rgba(0,238,255,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/game/${game.id}`)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={game.image} 
                      alt={game.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-[#00EEFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-[#00EEFF] text-[#0A0F1C] text-xs font-bold px-3 py-1.5 rounded-full">Main</span>
                    </div>
                  </div>
                  <div className="p-2.5 lg:p-3">
                    <h4 className="font-bold text-xs text-gray-200 group-hover:text-[#00EEFF] transition-colors truncate text-center">
                      {game.name}
                    </h4>
                    <p className="text-[10px] text-center mt-0.5" style={{ color: '#00666D' }}>
                      {game.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-center">
              <button className="group flex items-center gap-2 text-[#00EEFF] hover:text-white px-5 py-2.5 rounded-lg border-2 border-[#00EEFF] hover:bg-[#00EEFF] transition-all duration-300 text-sm font-medium">
                Lihat Semua Game <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-[#111827] border-t border-[#00666D] mt-12 py-8">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2025 GameStore. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  );
}