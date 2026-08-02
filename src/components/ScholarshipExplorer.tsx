import React, { useState } from 'react';
import { scholarshipsData } from '../data/scholarshipsData';
import { ScholarshipInfo } from '../types';
import { GraduationCap, Search, ExternalLink, CheckCircle2, DollarSign, Calendar, FileText, Globe } from 'lucide-react';

export const ScholarshipExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCountryFilter, setSelectedCountryFilter] = useState<string>('all');
  const [selectedScholarship, setSelectedScholarship] = useState<ScholarshipInfo | null>(null);

  const countriesList = ['all', 'United States', 'Europe', 'Japan', 'South Korea', 'China', 'Singapore', 'Australia'];

  const filteredScholarships = scholarshipsData.filter((s) => {
    const matchesSearch = s.officialName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.benefits.some(b => b.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCountry = selectedCountryFilter === 'all' || s.country.toLowerCase().includes(selectedCountryFilter.toLowerCase());

    return matchesSearch && matchesCountry;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-emerald-800/50">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2">
          <GraduationCap className="w-4 h-4 text-emerald-400" />
          <span>Chapter 3 • Major Global Scholarships Matrix</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Fully Funded Scholarship Database for Pakistani MSCS
        </h1>
        <p className="text-xs sm:text-sm text-emerald-200/90 mt-1 max-w-3xl">
          Comprehensive specs for Fulbright, Erasmus Mundus, DAAD, MEXT, GKS, CSC, SINGA, RTP, Eiffel, and Stipendium Hungaricum.
        </p>
      </div>

      {/* Controls */}
      <div className="bg-white p-4 rounded-2xl shadow-md border border-stone-200 flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search scholarship name or benefits..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs sm:text-sm text-stone-800 focus:ring-2 focus:ring-emerald-600 outline-none"
          />
        </div>

        {/* Region Filter */}
        <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto no-scrollbar text-xs font-medium">
          {countriesList.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCountryFilter(c)}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                selectedCountryFilter === c
                  ? 'bg-emerald-800 text-white font-bold shadow-md'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {c === 'all' ? 'All Scholarships' : c}
            </button>
          ))}
        </div>
      </div>

      {/* Scholarships Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScholarships.map((sch) => (
          <div
            key={sch.id}
            onClick={() => setSelectedScholarship(sch)}
            className="bg-white rounded-2xl p-6 shadow-md border border-stone-200 hover:shadow-xl hover:border-emerald-500/50 transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  {sch.country}
                </span>
                <span className="text-[10px] font-semibold text-stone-500">
                  Acceptance: {sch.acceptanceRate}
                </span>
              </div>

              <h3 className="font-extrabold text-base text-stone-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                {sch.officialName}
              </h3>

              <div className="mt-4 space-y-2 text-xs text-stone-600">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="font-semibold text-emerald-950">{sch.monthlyStipend} Stipend</span>
                </div>

                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Tuition: {sch.tuitionCoverage}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <Globe className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Flights: {sch.airTicket}</span>
                </div>
              </div>
            </div>

            <button className="w-full py-2 bg-stone-100 group-hover:bg-emerald-800 text-stone-700 group-hover:text-white rounded-xl text-xs font-bold transition-all text-center">
              View Full Eligibility & Specs
            </button>
          </div>
        ))}
      </div>

      {/* Scholarship Detail Modal */}
      {selectedScholarship && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 relative">
            
            <button
              onClick={() => setSelectedScholarship(null)}
              className="absolute right-4 top-4 text-stone-400 hover:text-stone-900 font-bold text-lg p-2 cursor-pointer"
            >
              ✕
            </button>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                {selectedScholarship.country}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-2">
                {selectedScholarship.officialName}
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-800">
              
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                <h4 className="font-bold text-stone-900 uppercase text-xs tracking-wider mb-1">
                  👤 Who Can Apply:
                </h4>
                <p className="text-stone-700">{selectedScholarship.whoCanApply}</p>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 uppercase text-xs tracking-wider mb-2">
                  ✔ Mandatory Eligibility Requirements:
                </h4>
                <ul className="space-y-1.5 bg-stone-50 p-3.5 rounded-xl border border-stone-200">
                  {selectedScholarship.eligibility.map((el, i) => (
                    <li key={i} className="flex items-start space-x-2 text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{el}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-medium">
                <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                  <span className="text-stone-500 block">Required CGPA:</span>
                  <span className="font-bold text-emerald-950 text-sm">{selectedScholarship.requiredCGPA}</span>
                </div>

                <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                  <span className="text-stone-500 block">IELTS / English:</span>
                  <span className="font-bold text-emerald-950 text-sm">{selectedScholarship.ieltsRequirement}</span>
                </div>

                <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                  <span className="text-stone-500 block">Required Experience:</span>
                  <span className="font-bold text-emerald-950 text-sm">{selectedScholarship.requiredExperience}</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 uppercase text-xs tracking-wider mb-2">
                  🎁 Coverage & Financial Benefits:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedScholarship.benefits.map((b, i) => (
                    <div key={i} className="p-2.5 bg-emerald-950 text-emerald-100 rounded-lg flex items-start space-x-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 uppercase text-xs tracking-wider mb-2">
                  📑 Mandatory Required Documents:
                </h4>
                <ul className="list-disc list-inside bg-stone-50 p-3 rounded-xl border border-stone-200 text-stone-700 space-y-1">
                  {selectedScholarship.requiredDocuments.map((doc, i) => (
                    <li key={i}>{doc}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 uppercase text-xs tracking-wider mb-1">
                  🌐 Official Application Process & Website:
                </h4>
                <p className="text-stone-700 mb-2">{selectedScholarship.officialApplicationProcess}</p>
                
                <a
                  href={selectedScholarship.officialWebsite}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2.5 bg-emerald-800 text-white rounded-xl font-bold text-xs hover:bg-emerald-700 transition-all"
                >
                  <span>Visit Official Scholarship Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};
