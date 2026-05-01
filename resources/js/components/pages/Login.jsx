import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Phone, Lock, Eye, EyeOff } from 'lucide-react';
import Swal from 'sweetalert2';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nomor_whatsapp: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/login', formData);
      
      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Selamat datang di Xeonstore',
          timer: 2000,
          showConfirmButton: false,
        });
        
        // Simpan token jika ada
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
        }
        
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Gagal',
        text: error.response?.data?.message || 'Nomor WhatsApp atau password salah',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-cyan-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50">
            <span className="text-2xl font-bold text-white">XS</span>
          </div>
        </div>

        {/* Card */}
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 shadow-2xl">
          <h1 className="text-3xl font-bold text-white text-center mb-2">
            Selamat Datang
          </h1>
          <p className="text-gray-400 text-center text-sm mb-8">
            Silahkan login untuk menikmati banyak fitur di aplikasi Xeonstore
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nomor WhatsApp */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Nomor whatsapp
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  value={formData.nomor_whatsapp}
                  onChange={(e) => setFormData({ ...formData, nomor_whatsapp: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="08xxxxxxxxxx"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl py-3 pl-12 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Lupa Password */}
            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
              >
                Lupa password?
              </Link>
            </div>

            {/* Tombol Login */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white font-semibold py-3 rounded-xl shadow-lg shadow-cyan-500/30 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Memproses...' : 'Masuk'}
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center text-gray-400 text-sm mt-6">
            Belum punya akun?{' '}
            <Link
              to="/register"
              className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              Daftar sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}