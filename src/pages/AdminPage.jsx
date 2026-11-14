import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PatternBg from '../art/PatternBg';
import { getCurrentUser, logout } from '../lib/auth';
import { loadStore, saveStore, resetDemoData } from '../lib/store';
import {
  Users, Calendar, MessageSquare, Settings, LogOut, CheckCircle,
  Clock, Trash2, Search, RotateCcw, ShieldCheck, Download
} from 'lucide-react';

export default function AdminPage() {
  const [user, setUser] = useState(getCurrentUser());
  const [store, setStore] = useState(loadStore());
  const [activeTab, setActiveTab] = useState('overview');
  const [searchReg, setSearchReg] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/admin/login');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const handleResetData = () => {
    if (window.confirm('Reset all demo data to initial defaults?')) {
      const fresh = resetDemoData();
      setStore(fresh);
      alert('Demo data has been reset to defaults.');
    }
  };

  const toggleStatus = (id) => {
    const updated = {
      ...store,
      registrations: store.registrations.map((r) => {
        if (r.id === id) {
          return { ...r, status: r.status === 'Confirmed' ? 'Pending' : 'Confirmed' };
        }
        return r;
      }),
    };
    saveStore(updated);
    setStore(updated);
  };

  const deleteRegistration = (id) => {
    if (window.confirm('Delete this registration entry?')) {
      const updated = {
        ...store,
        registrations: store.registrations.filter((r) => r.id !== id),
      };
      saveStore(updated);
      setStore(updated);
    }
  };

  if (!user || user.role !== 'admin') return null;

  const totalRegs = store.registrations.length;
  const confirmedCount = store.registrations.filter((r) => r.status === 'Confirmed').length;
  const pendingCount = totalRegs - confirmedCount;
  const capacity = store.settings.capacity || 100;
  const seatsLeft = Math.max(0, capacity - confirmedCount);

  const filteredRegistrations = store.registrations.filter((r) => {
    const matchSearch =
      r.name.toLowerCase().includes(searchReg.toLowerCase()) ||
      r.ref.toLowerCase().includes(searchReg.toLowerCase()) ||
      r.phone.includes(searchReg) ||
      r.dars.toLowerCase().includes(searchReg.toLowerCase());
    const matchStatus = statusFilter === 'ALL' || r.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="w-full min-h-screen bg-[#0B1520] text-white pt-24 pb-20 relative font-['Poppins']">
      <PatternBg variant="dark" fadeMask />

      <div className="max-w-[1400px] mx-auto space-y-8 relative z-10" style={{ paddingInline: 'var(--gutter)' }}>

        {/* Top Admin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-[#FDB913]/20 border border-[#FDB913]/40 text-[#FDB913] text-[10px] font-bold uppercase tracking-widest">
                Admin Control Portal
              </span>
              <span className="text-[10px] text-[#9FB0C3]">
                DEMO · All edits persist in localStorage
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              Al-Wisal 2026 Management
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleResetData}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-red-400 border border-white/10 transition-colors cursor-pointer"
            >
              <RotateCcw size={14} />
              <span>Reset Data</span>
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white border border-white/15 transition-colors cursor-pointer"
            >
              <LogOut size={14} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Main Grid: Sidebar Left, Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Sidebar Tabs */}
          <div className="lg:col-span-3 bg-[#121E2D] border border-white/10 rounded-2xl p-4 space-y-2">
            {[
              { id: 'overview', label: 'Overview Metrics', icon: ShieldCheck },
              { id: 'registrations', label: `Registrations (${totalRegs})`, icon: Users },
              { id: 'schedule', label: `Schedule (${store.sessions.length})`, icon: Calendar },
              { id: 'speakers', label: `Speakers (${store.speakers.length})`, icon: Users },
              { id: 'faqs', label: `FAQs (${store.faqs.length})`, icon: MessageSquare },
              { id: 'settings', label: 'Camp Settings', icon: Settings },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#F28A2E] text-[#0B1520] shadow-md'
                      : 'text-[#9FB0C3] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Panel */}
          <div className="lg:col-span-9 bg-[#121E2D] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">

            {/* TAB: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h2 className="text-lg font-bold uppercase tracking-wide text-white border-b border-white/10 pb-4">
                  Capacity & Metric Overview
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-[#0B1520] border border-white/10 p-5 rounded-xl space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#9FB0C3]">Total Applications</span>
                    <span className="text-3xl font-extrabold text-white block">{totalRegs}</span>
                  </div>

                  <div className="bg-[#0B1520] border border-white/10 p-5 rounded-xl space-y-1">
                    <span className="text-[10px] uppercase font-bold text-emerald-400">Confirmed</span>
                    <span className="text-3xl font-extrabold text-emerald-400 block">{confirmedCount}</span>
                  </div>

                  <div className="bg-[#0B1520] border border-white/10 p-5 rounded-xl space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#FDB913]">Pending Review</span>
                    <span className="text-3xl font-extrabold text-[#FDB913] block">{pendingCount}</span>
                  </div>

                  <div className="bg-[#0B1520] border border-white/10 p-5 rounded-xl space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#4FB6E6]">Seats Available</span>
                    <span className="text-3xl font-extrabold text-[#4FB6E6] block">{seatsLeft} / {capacity}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-[#9FB0C3]">
                  <span>Campus venue capacity is strictly capped at <strong>{capacity} delegates</strong>.</span>
                  <button
                    type="button"
                    onClick={() => setActiveTab('registrations')}
                    className="text-[#F28A2E] font-bold hover:underline"
                  >
                    View All Registrations →
                  </button>
                </div>
              </div>
            )}

            {/* TAB: REGISTRATIONS */}
            {activeTab === 'registrations' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <h2 className="text-lg font-bold uppercase tracking-wide text-white">
                    Delegate Registrations ({filteredRegistrations.length})
                  </h2>

                  <div className="flex items-center gap-3">
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="px-3 py-1.5 bg-[#0B1520] border border-white/15 rounded-lg text-xs text-white"
                    >
                      <option value="ALL">All Statuses</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </div>
                </div>

                {/* Search */}
                <div className="relative">
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9FB0C3]" />
                  <input
                    type="text"
                    value={searchReg}
                    onChange={(e) => setSearchReg(e.target.value)}
                    placeholder="Search by name, reference code, phone, or Dars..."
                    className="w-full pl-10 pr-4 py-2.5 bg-[#0B1520] border border-white/15 rounded-xl text-xs text-white placeholder-[#9FB0C3]"
                  />
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-white/15 text-[#9FB0C3] uppercase tracking-wider font-bold">
                        <th className="py-3 px-3">Ref Code</th>
                        <th className="py-3 px-3">Delegate Name</th>
                        <th className="py-3 px-3">Mobile</th>
                        <th className="py-3 px-3">SUFFA Dars</th>
                        <th className="py-3 px-3">Status</th>
                        <th className="py-3 px-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredRegistrations.map((r) => (
                        <tr key={r.id} className="hover:bg-white/5">
                          <td className="py-3 px-3 font-mono text-[#FDB913] font-bold">{r.ref}</td>
                          <td className="py-3 px-3 font-bold text-white">{r.name}</td>
                          <td className="py-3 px-3 font-mono text-[#9FB0C3]">{r.phone}</td>
                          <td className="py-3 px-3 text-[#9FB0C3] truncate max-w-[180px]">{r.dars}</td>
                          <td className="py-3 px-3">
                            <button
                              type="button"
                              onClick={() => toggleStatus(r.id)}
                              className={`px-2.5 py-1 rounded text-[10px] font-bold cursor-pointer transition-colors ${
                                r.status === 'Confirmed'
                                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30'
                                  : 'bg-amber-500/20 text-amber-400 border border-amber-500/40 hover:bg-amber-500/30'
                              }`}
                              title="Click to toggle status"
                            >
                              {r.status}
                            </button>
                          </td>
                          <td className="py-3 px-3 text-right">
                            <button
                              type="button"
                              onClick={() => deleteRegistration(r.id)}
                              className="p-1.5 text-red-400 hover:text-red-300 rounded hover:bg-white/5"
                              title="Delete entry"
                            >
                              <Trash2 size={14} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB: SCHEDULE */}
            {activeTab === 'schedule' && (
              <div className="space-y-4">
                <h2 className="text-lg font-bold uppercase tracking-wide text-white border-b border-white/10 pb-4">
                  Academic Sessions ({store.sessions.length})
                </h2>
                <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
                  {store.sessions.map((s) => (
                    <div key={s.id} className="p-3 bg-[#0B1520] border border-white/10 rounded-xl flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-[#FDB913] mr-2">Day {s.day} · {s.time}</span>
                        <span className="font-semibold text-white">{s.title}</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#9FB0C3] px-2 py-0.5 bg-white/5 rounded">
                        {s.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: SPEAKERS */}
            {activeTab === 'speakers' && (
              <div className="space-y-4">
                <h2 className="text-lg font-bold uppercase tracking-wide text-white border-b border-white/10 pb-4">
                  Faculty & Speakers ({store.speakers.length})
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {store.speakers.map((spk) => (
                    <div key={spk.id} className="p-4 bg-[#0B1520] border border-white/10 rounded-xl flex items-center gap-3">
                      <img src={spk.image} alt={spk.name} className="w-12 h-12 rounded-lg object-cover" />
                      <div>
                        <h4 className="text-xs font-bold text-white">{spk.name}</h4>
                        <p className="text-[11px] text-[#FDB913]">{spk.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: FAQS */}
            {activeTab === 'faqs' && (
              <div className="space-y-4">
                <h2 className="text-lg font-bold uppercase tracking-wide text-white border-b border-white/10 pb-4">
                  Frequently Asked Questions ({store.faqs.length})
                </h2>
                <div className="space-y-3">
                  {store.faqs.map((f) => (
                    <div key={f.id} className="p-4 bg-[#0B1520] border border-white/10 rounded-xl space-y-1 text-xs">
                      <h4 className="font-bold text-[#FDB913]">{f.q}</h4>
                      <p className="text-[#9FB0C3]">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: SETTINGS */}
            {activeTab === 'settings' && (
              <div className="space-y-4">
                <h2 className="text-lg font-bold uppercase tracking-wide text-white border-b border-white/10 pb-4">
                  Camp Event Settings
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="text-[#9FB0C3] block font-bold mb-1">Camp Name</label>
                    <input type="text" readOnly value={store.settings.name} className="w-full bg-[#0B1520] p-3 rounded-lg border border-white/15 text-white" />
                  </div>
                  <div>
                    <label className="text-[#9FB0C3] block font-bold mb-1">Capacity</label>
                    <input type="text" readOnly value={store.settings.capacity} className="w-full bg-[#0B1520] p-3 rounded-lg border border-white/15 text-white" />
                  </div>
                  <div>
                    <label className="text-[#9FB0C3] block font-bold mb-1">Dates</label>
                    <input type="text" readOnly value={`${store.settings.startDate} to ${store.settings.endDate}`} className="w-full bg-[#0B1520] p-3 rounded-lg border border-white/15 text-white" />
                  </div>
                  <div>
                    <label className="text-[#9FB0C3] block font-bold mb-1">Registration Deadline</label>
                    <input type="text" readOnly value={store.settings.deadlineDate} className="w-full bg-[#0B1520] p-3 rounded-lg border border-white/15 text-white" />
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
