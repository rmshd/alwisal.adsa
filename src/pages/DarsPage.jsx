import React, { useState, useMemo } from 'react';
import PatternBg from '../art/PatternBg';
import DARS_DATA from '../data/dars.json';
import { Search, MapPin, Building, Filter } from 'lucide-react';

export default function DarsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('ALL');

  const districts = useMemo(() => {
    const set = new Set(DARS_DATA.map((d) => d.district));
    return ['ALL', ...Array.from(set)];
  }, []);

  const filteredDars = useMemo(() => {
    return DARS_DATA.filter((d) => {
      const matchSearch =
        d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.place.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (d.arabic && d.arabic.includes(searchTerm));
      const matchDistrict = selectedDistrict === 'ALL' || d.district === selectedDistrict;
      return matchSearch && matchDistrict;
    });
  }, [searchTerm, selectedDistrict]);

  return (
    <div className="w-full min-h-screen bg-[#0B1520] text-white pt-24 pb-20 relative font-['Poppins']">
      <PatternBg variant="dark" fadeMask />

      <div className="max-w-[1400px] mx-auto space-y-12 relative z-10" style={{ paddingInline: 'var(--gutter)' }}>

        {/* Header */}
        <div className="border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#F28A2E]">
              Academic Network
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              39+ SUFFA Dars Directory
            </h1>
            <p className="text-sm text-[#9FB0C3]">
              Search and explore the affiliated sacred learning seats of the SUFFA Dars Students Union.
            </p>
          </div>

          <div className="text-right">
            <span className="font-['Reem_Kufi'] text-2xl text-[#FDB913] block" dir="rtl">
              دَلِيلُ دَوَارِسِ الصُّفَّةِ
            </span>
            <span className="text-xs text-[#9FB0C3] font-semibold">
              Showing {filteredDars.length} of {DARS_DATA.length} Institutions
            </span>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-[#121E2D] border border-white/10 p-4 rounded-xl">
          {/* Search Box */}
          <div className="md:col-span-8 relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9FB0C3]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Dars name, place, or Arabic..."
              className="w-full pl-11 pr-4 py-3 bg-[#0B1520] border border-white/15 rounded-lg text-sm text-white placeholder-[#9FB0C3] focus:outline-none focus:border-[#F28A2E]"
            />
          </div>

          {/* District Dropdown */}
          <div className="md:col-span-4 relative">
            <Filter size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9FB0C3]" />
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#0B1520] border border-white/15 rounded-lg text-sm text-white focus:outline-none focus:border-[#F28A2E]"
            >
              {districts.map((dist) => (
                <option key={dist} value={dist}>
                  {dist === 'ALL' ? 'All Districts' : dist}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Dars Grid */}
        {filteredDars.length === 0 ? (
          <div className="py-20 text-center space-y-4 bg-[#121E2D]/50 border border-white/10 rounded-2xl">
            <Building size={40} className="mx-auto text-[#9FB0C3]/50" />
            <h3 className="text-lg font-bold text-white">No Dars Found</h3>
            <p className="text-xs text-[#9FB0C3]">
              No institution matches your search filters. Try resetting the district or query.
            </p>
            <button
              type="button"
              onClick={() => { setSearchTerm(''); setSelectedDistrict('ALL'); }}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-xs font-bold uppercase tracking-wider rounded-lg text-white"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDars.map((dars) => (
              <div
                key={dars.id}
                className="bg-[#121E2D] border border-white/10 p-5 rounded-xl hover:border-[#F28A2E]/50 transition-all group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-white/5 border border-white/10 text-[#FDB913]">
                      {dars.code || `DARS-${String(dars.id).padStart(2, '0')}`}
                    </span>
                    <span className="text-xs text-[#9FB0C3] font-medium flex items-center gap-1">
                      <MapPin size={12} className="text-[#F28A2E]" />
                      <span>{dars.district}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#FDB913] transition-colors">
                    {dars.name}
                  </h3>

                  {dars.arabic && (
                    <p className="font-['Reem_Kufi'] text-sm text-[#9FB0C3]" dir="rtl">
                      {dars.arabic}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#9FB0C3]">
                  <span>Seat of Dars: <strong>{dars.place}</strong></span>
                  <span className="text-[10px] uppercase font-bold text-[#4FB6E6]">SUFFA Affiliated</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
