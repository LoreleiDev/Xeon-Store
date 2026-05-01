// resources/js/components/layouts/Navbar.jsx
import React, { useState } from 'react';
import { Search, Bell, User, LogOut, ChevronDown, Coins } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Dummy user data dengan Xcoins
  const user = {
    name: 'PlayerOne',
    avatar: null,
    xcoins: 2500, // ✅ Ganti balance jadi Xcoins
  };

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#111827] border-b-2 border-[#00666D] shadow-lg shadow-[#00666D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-[#00EEFF] flex items-center justify-center shadow-lg shadow-[#00EEFF]/40 group-hover:shadow-[#00EEFF]/60 transition-all">
              <span className="text-xl lg:text-2xl font-black text-[#0A0F1C]">G</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#00EEFF] to-cyan-300 bg-clip-text text-transparent hidden sm:block">
              GameStore
            </span>
          </Link>

          {/* Search Bar - Center */}
          <div className="flex-1 max-w-xl mx-4 lg:mx-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00666D]" />
              <input
                type="text"
                placeholder="Cari game..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0A0F1C] border-2 border-[#00666D] rounded-xl py-2.5 lg:py-3 pl-12 pr-4 text-sm lg:text-base text-white placeholder-gray-500 focus:outline-none focus:border-[#00EEFF] focus:ring-4 focus:ring-[#00EEFF]/10 transition-all duration-300"
              />
            </div>
          </div>

          {/* Right Menu */}
          <div className="flex items-center gap-3 lg:gap-4">
            
            {/* ✅ Xcoins Display (Ganti Wallet) */}
            <div className="flex items-center gap-2 bg-[#0A0F1C] border-2 border-[#00666D] px-3 lg:px-4 py-2 rounded-xl">
              <Coins size={18} className="text-[#00EEFF]" />
              <div className="text-right">
                <p className="text-[10px] text-gray-400 leading-none">Xcoins</p>
                <p className="text-sm font-bold text-[#00EEFF] leading-tight">
                  {user.xcoins.toLocaleString('id-ID')}
                </p>
              </div>
            </div>

            {/* ❌ Deposit Button DIHAPUS */}

            {/* Notification */}
            <button className="relative p-2 text-gray-400 hover:text-[#00EEFF] transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#111827]"></span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-1 rounded-xl hover:bg-[#0A0F1C] transition-colors"
              >
                {user.avatar ? (
                  <img src={user.avatar} alt="Avatar" className="w-9 h-9 rounded-full border-2 border-[#00666D]" />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00EEFF] to-cyan-400 flex items-center justify-center border-2 border-[#00666D]">
                    <User size={18} className="text-[#0A0F1C]" />
                  </div>
                )}
                <ChevronDown size={16} className={`text-gray-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#111827] border-2 border-[#00666D] rounded-xl shadow-xl shadow-[#00666D]/20 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link to="/login" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-300 hover:bg-[#0A0F1C] hover:text-[#00EEFF] transition-colors">
                    <User size={16} /> Profil Saya
                  </Link>
                  <Link to="/xcoins" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-300 hover:bg-[#0A0F1C] hover:text-[#00EEFF] transition-colors">
                    <Coins size={16} /> Riwayat Xcoins
                  </Link>
                  <hr className="my-2 border-[#00666D]" />
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                  >
                    <LogOut size={16} /> Keluar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}