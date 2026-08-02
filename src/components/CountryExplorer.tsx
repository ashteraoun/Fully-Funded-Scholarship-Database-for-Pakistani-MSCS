import React, { useState } from 'react';
import { countriesData } from '../data/countriesData';
import { CountryInfo } from '../types';
import { Globe, Search, Filter, DollarSign, Briefcase, GraduationCap, Clock, CheckCircle2, XCircle } from 'lucide-react';

export const CountryExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedCountry, setSelectedCountry] = useState<CountryInfo | null>(null);

  const regions = ['all', 'North America', 'Europe', 'Asia', 'Oceania'];

  const filteredCountries = countriesData.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.bestUniversities.some(u => u.toLowerCase().includes(searchTerm.toLowerCase())) ||
      c.scholarshipOpportunities.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesRegion = selectedRegion === 'all' || c.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-emerald-800/50">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2">
          <Globe className="w-4 h-4 text-emerald-400" />
          <span>Chapter 2 • Global Destinations Analysis</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          27 Countries Master CS Comparison Matrix
        </h1>
        <p className="text-xs sm:text-sm text-emerald-200/90 mt-1 max-w-3xl">
          Detailed metrics for MSCS programs: tuition costs, fully funded scholarship opportunities, visa success rates, post-grad salaries, and Permanent Residency (PR) pathways.
        </p>
      </div>

      {/* Search & Region Filter Controls */}
      <div className="bg-white p-4 rounded-2xl shadow-md border border-stone-200 flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search country, university, or scholarship..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs sm:text-sm text-stone-800 focus:ring-2 focus:ring-emerald-600 outline-none"
          />
        </div>

        {/* Region Filter Buttons */}
        <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto no-scrollbar text-xs font-medium">
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                selectedRegion === reg
                  ? 'bg-emerald-800 text-white font-bold shadow-md'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {reg === 'all' ? 'All 27 Countries' : reg}
            </button>
          ))}
        </div>
      </div>

      {/* Country Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCountries.map((c) => (
          <div
            key={c.id}
            onClick={() => setSelectedCountry(c)}
            className="bg-white rounded-2xl p-6 shadow-md border border-stone-200 hover:shadow-xl hover:border-emerald-500/50 transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl">{c.flag}</span>
                  <div>
                    <h3 className="font-extrabold text-base text-stone-900 group-hover:text-emerald-700 transition-colors">
                      {c.name}
                    </h3>
                    <span className="text-[11px] font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                      {c.region}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Visa: {c.visaSuccessRate.split(' ')[0]}
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-stone-600">
                <div className="flex items-start space-x-2">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-1"><strong>Cost:</strong> {c.costWithoutScholarship}</span>
                </div>

                <div className="flex items-start space-x-2">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-1"><strong>Scholarships:</strong> {c.scholarshipOpportunities.slice(0, 2).join(', ')}</span>
                </div>

                <div className="flex items-start space-x-2">
                  <Briefcase className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-1"><strong>Post-Grad Salary:</strong> {c.salaryAfterGraduation}</span>
                </div>
              </div>
            </div>

            <button className="w-full py-2 bg-stone-100 group-hover:bg-emerald-800 text-stone-700 group-hover:text-white rounded-xl text-xs font-bold transition-all text-center">
              View Complete Analysis
            </button>
          </div>
        ))}
      </div>

      {/* Country Detail Modal */}
      {selectedCountry && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 relative">
            
            <button
              onClick={() => setSelectedCountry(null)}
              className="absolute right-4 top-4 text-stone-400 hover:text-stone-900 font-bold text-lg p-2 cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center space-x-3 border-b border-stone-200 pb-4">
              <span className="text-4xl">{selectedCountry.flag}</span>
              <div>
                <h2 className="text-2xl font-black text-stone-900">
                  {selectedCountry.name}
                </h2>
                <p className="text-xs text-stone-500 font-semibold">
                  Region: {selectedCountry.region} • Intakes: {selectedCountry.intakeMonths.join(', ')}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-800">
              
              <div>
                <h4 className="font-bold text-stone-900 uppercase text-xs tracking-wider mb-1">
                  🎓 Education System & MSCS Track:
                </h4>
                <p className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-stone-700">
                  {selectedCountry.educationSystem}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-stone-900 uppercase text-xs tracking-wider mb-1">
                    🏛️ Top Universities:
                  </h4>
                  <ul className="list-disc list-inside bg-stone-50 p-3 rounded-xl border border-stone-200 text-stone-700 space-y-1">
                    {selectedCountry.bestUniversities.map((u, i) => (
                      <li key={i}>{u}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-stone-900 uppercase text-xs tracking-wider mb-1">
                    💰 Scholarship Opportunities:
                  </h4>
                  <ul className="list-disc list-inside bg-stone-50 p-3 rounded-xl border border-stone-200 text-stone-700 space-y-1">
                    {selectedCountry.scholarshipOpportunities.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-200 space-y-1">
                  <strong className="text-emerald-950 font-bold block">💵 Post-Grad Salary:</strong>
                  <span className="text-emerald-900 font-semibold">{selectedCountry.salaryAfterGraduation}</span>
                </div>

                <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-200 space-y-1">
                  <strong className="text-emerald-950 font-bold block">🏡 Monthly Living Cost:</strong>
                  <span className="text-emerald-900 font-semibold">{selectedCountry.livingCost}</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 uppercase text-xs tracking-wider mb-1">
                  🛂 PR & Post-Study Work Opportunities:
                </h4>
                <p className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-stone-700">
                  {selectedCountry.prOpportunities}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200">
                  <h4 className="font-bold text-emerald-900 text-xs uppercase mb-2">✔ Key Advantages:</h4>
                  <ul className="space-y-1">
                    {selectedCountry.advantages.map((adv, i) => (
                      <li key={i} className="flex items-start space-x-1.5 text-emerald-950 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200">
                  <h4 className="font-bold text-amber-900 text-xs uppercase mb-2">⚠️ Disadvantages to Note:</h4>
                  <ul className="space-y-1">
                    {selectedCountry.disadvantages.map((dis, i) => (
                      <li key={i} className="flex items-start space-x-1.5 text-amber-950 text-xs">
                        <XCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>{dis}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};
