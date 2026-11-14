import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PatternBg from '../art/PatternBg';
import { loginAdmin } from '../lib/auth';
import { CAMP_FACTS } from '../config';
import { ShieldCheck, Lock, Mail, ArrowRight, ShieldAlert, Key } from 'lucide-react';

export default function AdminLoginPage() {
  const [email, setEmail] = useState(CAMP_FACTS.demoCredentials.admin.email);
  const [password, setPassword] = useState(CAMP_FACTS.demoCredentials.admin.password);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await loginAdmin(email, password);
      navigate('/admin');
    } catch (err) {
      setError(err.message || 'Administrator login failed.');
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
          <span className="px-3 py-1 rounded-full bg-[#FDB913]/15 border border-[#FDB913]/30 text-[#FDB913] text-[10px] font-bold uppercase tracking-widest inline-block">
            Management Portal
          </span>
          <h1 className="text-2xl font-bold uppercase tracking-wide text-white">
            Admin Sign In
          </h1>
          <p className="text-xs text-[#9FB0C3]">
            Manage registrations, schedule, speakers, and camp capacity.
          </p>
        </div>

        {/* Demo Credentials Box */}
        <div className="bg-[#0B1520] border border-[#F28A2E]/40 rounded-xl p-4 text-xs space-y-1.5">
          <div className="flex items-center gap-1.5 font-bold text-[#F28A2E] uppercase tracking-wider text-[11px]">
            <Key size={13} />
            <span>Admin Demo Credentials</span>
          </div>
          <div className="text-[#9FB0C3] space-y-0.5">
            <div>Email: <strong className="text-white font-mono">{CAMP_FACTS.demoCredentials.admin.email}</strong></div>
            <div>Password: <strong className="text-white font-mono">{CAMP_FACTS.demoCredentials.admin.password}</strong></div>
          </div>
          <span className="text-[10px] text-[#9FB0C3]/70 block pt-1 border-t border-white/10">
            Full administrative rights to modify camp settings and registrations
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
              Administrator Email
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9FB0C3]" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@alwisal.demo"
                className="w-full pl-10 pr-4 py-3 bg-[#0B1520] border border-white/15 rounded-xl text-sm text-white placeholder-[#9FB0C3] focus:outline-none focus:border-[#F28A2E]"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-[#9FB0C3]">
              Password
            </label>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9FB0C3]" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Wisal@2026"
                className="w-full pl-10 pr-4 py-3 bg-[#0B1520] border border-white/15 rounded-xl text-sm text-white placeholder-[#9FB0C3] focus:outline-none focus:border-[#F28A2E]"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-[#FDB913] text-[#0B1520] font-bold text-xs uppercase tracking-wider rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
          >
            <span>{loading ? 'Authenticating...' : 'Sign In as Admin'}</span>
            <ArrowRight size={16} />
          </button>
        </form>

        <div className="pt-2 border-t border-white/10 text-center text-xs text-[#9FB0C3]">
          <Link to="/login" className="hover:text-white">
            ← Switch to Student Login
          </Link>
        </div>

      </div>
    </div>
  );
}
