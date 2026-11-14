import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PatternBg from '../art/PatternBg';
import { loginStudent } from '../lib/auth';
import { CAMP_FACTS } from '../config';
import { User, Lock, ArrowRight, ShieldAlert, Key } from 'lucide-react';

export default function LoginPage() {
  const [phone, setPhone] = useState(CAMP_FACTS.demoCredentials.student.phone);
  const [password, setPassword] = useState(CAMP_FACTS.demoCredentials.student.password);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await loginStudent(phone, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Login failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0B1520] text-white flex items-center justify-center p-4 relative font-['Poppins'] pt-24 pb-16">
      <PatternBg variant="dark" fadeMask />

      <div className="max-w-md w-full bg-[#121E2D] border border-white/10 rounded-2xl p-8 shadow-2xl relative z-10 space-y-6">

        {/* Header */}
        <div className="text-center space-y-2">
          <span className="px-3 py-1 rounded-full bg-[#F28A2E]/15 border border-[#F28A2E]/30 text-[#F28A2E] text-[10px] font-bold uppercase tracking-widest inline-block">
            Delegate Portal
          </span>
          <h1 className="text-2xl font-bold uppercase tracking-wide text-white">
            Student Login
          </h1>
          <p className="text-xs text-[#9FB0C3]">
            Access your verified entry pass, schedule, and room assignment.
          </p>
        </div>

        {/* Demo Credentials Box */}
        <div className="bg-[#0B1520] border border-[#FDB913]/30 rounded-xl p-4 text-xs space-y-1.5">
          <div className="flex items-center gap-1.5 font-bold text-[#FDB913] uppercase tracking-wider text-[11px]">
            <Key size={13} />
            <span>Demo Student Credentials</span>
          </div>
          <div className="text-[#9FB0C3] space-y-0.5">
            <div>Mobile: <strong className="text-white font-mono">{CAMP_FACTS.demoCredentials.student.phone}</strong></div>
            <div>Password: <strong className="text-white font-mono">{CAMP_FACTS.demoCredentials.student.password}</strong></div>
          </div>
          <span className="text-[10px] text-[#9FB0C3]/70 block pt-1 border-t border-white/10">
            Pre-seeded with Ahmad Farooq's registration
          </span>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-xs text-red-400 flex items-center gap-2">
            <ShieldAlert size={16} className="shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-[#9FB0C3]">
              Mobile Number
            </label>
            <div className="relative">
              <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9FB0C3]" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit registered number"
                className="w-full pl-10 pr-4 py-3 bg-[#0B1520] border border-white/15 rounded-xl text-sm text-white placeholder-[#9FB0C3] focus:outline-none focus:border-[#F28A2E] font-mono"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-[#9FB0C3]">
              Pass Password
            </label>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9FB0C3]" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full pl-10 pr-4 py-3 bg-[#0B1520] border border-white/15 rounded-xl text-sm text-white placeholder-[#9FB0C3] focus:outline-none focus:border-[#F28A2E]"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-[#F28A2E] text-[#0B1520] font-bold text-xs uppercase tracking-wider rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
          >
            <span>{loading ? 'Authenticating...' : 'Sign In to My Pass'}</span>
            <ArrowRight size={16} />
          </button>
        </form>

        {/* Links */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#9FB0C3]">
          <Link to="/#register" className="hover:text-white">
            Need to register?
          </Link>
          <Link to="/admin/login" className="hover:text-[#FDB913]">
            Admin Login →
          </Link>
        </div>

      </div>
    </div>
  );
}
