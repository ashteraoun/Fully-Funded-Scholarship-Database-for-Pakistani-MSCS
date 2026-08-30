import React, { useState, useRef, useEffect } from 'react';
import { scholarshipsData } from '../data/scholarshipsData';
import { ScholarshipInfo } from '../types';
import { 
  GraduationCap, 
  Search, 
  ExternalLink, 
  CheckCircle2, 
  DollarSign, 
  Calendar, 
  FileText, 
  Globe,
  Sparkles,
  Award,
  Trophy,
  Zap,
  Shield,
  Star,
  Heart,
  TrendingUp,
  Users,
  Clock,
  ChevronRight,
  X,
  Filter,
  BookOpen,
  Target,
  Compass,
  MapPin,
  Briefcase,
  Building2,
  Loader2
} from 'lucide-react';

export const ScholarshipExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCountryFilter, setSelectedCountryFilter] = useState<string>('all');
  const [selectedScholarship, setSelectedScholarship] = useState<ScholarshipInfo | null>(null);
  const [hoveredScholarship, setHoveredScholarship] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const countriesList = ['all', 'United States', 'Europe', 'Japan', 'South Korea', 'China', 'Singapore', 'Australia'];

  // Auto-focus search on load
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const filteredScholarships = scholarshipsData.filter((s) => {
    const matchesSearch = s.officialName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.benefits.some(b => b.toLowerCase().includes(searchTerm.toLowerCase())) ||
      s.eligibility.some(e => e.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCountry = selectedCountryFilter === 'all' || 
      s.country.toLowerCase().includes(selectedCountryFilter.toLowerCase());

    return matchesSearch && matchesCountry;
  });

  // Get country flag emoji
  const getCountryFlag = (country: string) => {
    const flags: Record<string, string> = {
      'United States': '🇺🇸',
      'Europe': '🇪🇺',
      'Japan': '🇯🇵',
      'South Korea': '🇰🇷',
      'China': '🇨🇳',
      'Singapore': '🇸🇬',
      'Australia': '🇦🇺',
      'Germany': '🇩🇪',
      'UK': '🇬🇧',
      'France': '🇫🇷',
      'Netherlands': '🇳🇱',
      'Sweden': '🇸🇪',
      'Denmark': '🇩🇰',
      'Norway': '🇳🇴',
      'Finland': '🇫🇮',
      'Belgium': '🇧🇪',
      'Switzerland': '🇨🇭',
      'Austria': '🇦🇹',
      'Italy': '🇮🇹',
      'Spain': '🇪🇸',
    };
    return flags[country] || '🌍';
  };

  // Get country color
  const getCountryColor = (country: string) => {
    const colors: Record<string, string> = {
      'United States': 'from-blue-500 to-cyan-500',
      'Europe': 'from-purple-500 to-pink-500',
      'Japan': 'from-red-500 to-rose-500',
      'South Korea': 'from-blue-400 to-indigo-500',
      'China': 'from-red-600 to-orange-500',
      'Singapore': 'from-red-500 to-amber-500',
      'Australia': 'from-amber-500 to-orange-500',
    };
    return colors[country] || 'from-emerald-500 to-teal-500';
  };

  // Get acceptance rate color
  const getAcceptanceColor = (rate: string) => {
    const num = parseInt(rate);
    if (num >= 30) return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    if (num >= 15) return 'text-amber-600 bg-amber-50 border-amber-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  // Get scholarship level badge
  const getScholarshipLevel = (benefits: string[]) => {
    if (benefits.some(b => b.includes('Full') || b.includes('100%'))) return 'Fully Funded';
    if (benefits.some(b => b.includes('Partial') || b.includes('50%'))) return 'Partial Funding';
    return 'Various';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-8">
        
        {/* Header Banner - Enhanced */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-stone-900 to-emerald-900 shadow-2xl border border-emerald-800/30">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-400 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>

          <div className="relative p-8 sm:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30">
                  <GraduationCap className="w-4 h-4 text-emerald-300" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Chapter 3 • Global Scholarships
                  </span>
                  <span className="w-1 h-1 bg-emerald-400 rounded-full" />
                  <span className="text-xs text-emerald-300">
                    {scholarshipsData.length} Scholarships
                  </span>
                </div>
                
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                    Fully Funded
                    <span className="block text-emerald-300">Scholarship Database</span>
                  </h1>
                  
                  <p className="text-base sm:text-lg text-emerald-200/90 max-w-3xl mt-2 leading-relaxed">
                    Comprehensive specs for Fulbright, Erasmus Mundus, DAAD, MEXT, GKS, CSC, 
                    SINGA, RTP, Eiffel, and Stipendium Hungaricum for Pakistani MSCS applicants.
                  </p>
                </div>
              </div>

              <div className="flex flex-shrink-0 gap-3">
                <div className="hidden sm:flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/10">
                  <div className="flex -space-x-2">
                    {['🇺🇸', '🇪🇺', '🇯🇵', '🇰🇷', '🇨🇳'].map((flag, i) => (
                      <span key={i} className="text-2xl filter drop-shadow-lg">{flag}</span>
                    ))}
                  </div>
                  <span className="text-xs text-emerald-300 font-medium">Top Destinations</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-emerald-800/40">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{scholarshipsData.length}</div>
                <div className="text-[10px] text-emerald-300 uppercase tracking-wider">Scholarships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">
                  {scholarshipsData.filter(s => s.benefits.some(b => b.includes('Full') || b.includes('100%'))).length}
                </div>
                <div className="text-[10px] text-emerald-300 uppercase tracking-wider">Fully Funded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">
                  {new Set(scholarshipsData.map(s => s.country)).size}
                </div>
                <div className="text-[10px] text-emerald-300 uppercase tracking-wider">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">
                  {scholarshipsData.reduce((acc, s) => acc + s.benefits.length, 0)}
                </div>
                <div className="text-[10px] text-emerald-300 uppercase tracking-wider">Benefits Listed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls - Enhanced */}
        <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-stone-400" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search scholarship, country, or benefits..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-stone-50/80 border-2 border-stone-200/80 text-sm text-stone-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200 hover:bg-white placeholder:text-stone-400/70"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <X className="w-4 h-4 text-stone-400 hover:text-stone-600 transition-colors" />
                </button>
              )}
            </div>

            {/* Country Filter */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider mr-1 hidden sm:inline">
                Country:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {countriesList.map((c) => {
                  const isActive = selectedCountryFilter === c;
                  const count = c === 'all' ? scholarshipsData.length : 
                    scholarshipsData.filter(s => s.country.toLowerCase().includes(c.toLowerCase())).length;
                  
                  return (
                    <button
                      key={c}
                      onClick={() => setSelectedCountryFilter(c)}
                      className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                        isActive
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30 scale-105'
                          : 'bg-stone-100/80 text-stone-600 hover:bg-stone-200/80 hover:text-stone-800 hover:scale-105'
                      }`}
                    >
                      <span className="flex items-center space-x-1.5">
                        <span>{c === 'all' ? '🌍' : ''}</span>
                        <span>{c === 'all' ? 'All' : c}</span>
                        <span className={`text-[10px] ${isActive ? 'text-white/70' : 'text-stone-400'}`}>
                          ({count})
                        </span>
                      </span>
                      {isActive && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Search Results Counter */}
          {searchTerm && (
            <div className="mt-4 text-xs text-stone-500 border-t border-stone-100 pt-4">
              Found <span className="font-bold text-emerald-600">{filteredScholarships.length}</span> scholarships 
              {filteredScholarships.length === 0 ? ' matching your search' : ` matching "${searchTerm}"`}
            </div>
          )}
        </div>

        {/* Scholarships Grid - Enhanced */}
        {filteredScholarships.length === 0 ? (
          <div className="text-center py-16 bg-white/60 backdrop-blur-sm rounded-3xl border border-stone-200">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 rounded-full bg-stone-100">
                <Search className="w-12 h-12 text-stone-400" />
              </div>
              <h3 className="text-xl font-bold text-stone-700">No scholarships found</h3>
              <p className="text-sm text-stone-500">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCountryFilter('all'); }}
                className="px-6 py-2 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 transition-colors"
              >
                Clear filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScholarships.map((sch) => {
              const isHovered = hoveredScholarship === sch.id;
              const countryColor = getCountryColor(sch.country);
              const flag = getCountryFlag(sch.country);
              const acceptColor = getAcceptanceColor(sch.acceptanceRate);
              const level = getScholarshipLevel(sch.benefits);
              const isFullyFunded = level === 'Fully Funded';

              return (
                <div
                  key={sch.id}
                  onClick={() => setSelectedScholarship(sch)}
                  onMouseEnter={() => setHoveredScholarship(sch.id)}
                  onMouseLeave={() => setHoveredScholarship(null)}
                  className={`group relative bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-500 cursor-pointer ${
                    isHovered 
                      ? 'border-emerald-400 shadow-2xl shadow-emerald-500/20 -translate-y-2' 
                      : 'border-transparent hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1'
                  }`}
                >
                  {/* Decorative Gradient Background */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${countryColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Card Content */}
                  <div className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                          {flag}
                        </span>
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r ${countryColor} text-white`}>
                          {sch.country}
                        </span>
                      </div>
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full border text-[10px] font-bold ${acceptColor}`}>
                        {sch.acceptanceRate} acceptance
                      </span>
                    </div>

                    <h3 className="font-extrabold text-base text-stone-900 group-hover:text-emerald-700 transition-colors duration-300 line-clamp-2 min-h-[48px]">
                      {sch.officialName}
                    </h3>

                    {/* Funding Level Badge */}
                    <div className="mt-3">
                      <span className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        isFullyFunded 
                          ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' 
                          : 'bg-amber-100 text-amber-700 border border-amber-200'
                      }`}>
                        {isFullyFunded ? <Zap className="w-3 h-3" /> : <Shield className="w-3 h-3" />}
                        <span>{level}</span>
                      </span>
                    </div>

                    <div className="mt-4 space-y-2.5 text-xs text-stone-600">
                      <div className="flex items-start space-x-2.5 p-2 rounded-xl bg-stone-50/80 group-hover:bg-emerald-50/50 transition-colors duration-300">
                        <DollarSign className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="font-semibold text-emerald-950">{sch.monthlyStipend} Stipend</span>
                      </div>

                      <div className="flex items-start space-x-2.5 p-2 rounded-xl bg-stone-50/80 group-hover:bg-emerald-50/50 transition-colors duration-300">
                        <GraduationCap className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Tuition: {sch.tuitionCoverage}</span>
                      </div>

                      <div className="flex items-start space-x-2.5 p-2 rounded-xl bg-stone-50/80 group-hover:bg-emerald-50/50 transition-colors duration-300">
                        <Globe className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Flights: {sch.airTicket}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className={`w-full mt-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                      isHovered
                        ? `bg-gradient-to-r ${countryColor} text-white shadow-lg`
                        : 'bg-stone-100/80 text-stone-700 hover:bg-stone-200/80'
                    }`}>
                      <span className="flex items-center justify-center space-x-2">
                        <span>View Full Details</span>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                          isHovered ? 'translate-x-1' : ''
                        }`} />
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Scholarship Detail Modal - Enhanced */}
      {selectedScholarship && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedScholarship(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-white/20 relative animate-in slide-in-from-bottom-4 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Gradient */}
            <div className={`relative bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-900 p-6 sm:p-8`}>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-400 rounded-full blur-3xl" />
              </div>
              
              <button
                onClick={() => setSelectedScholarship(null)}
                className="absolute right-4 top-4 p-2 rounded-xl hover:bg-white/10 transition-colors z-10"
              >
                <X className="w-5 h-5 text-white/70 hover:text-white" />
              </button>

              <div className="relative">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-4xl">{getCountryFlag(selectedScholarship.country)}</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/20">
                    {selectedScholarship.country}
                  </span>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    getScholarshipLevel(selectedScholarship.benefits) === 'Fully Funded'
                      ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/30'
                      : 'bg-amber-500/30 text-amber-300 border border-amber-500/30'
                  }`}>
                    {getScholarshipLevel(selectedScholarship.benefits)}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  {selectedScholarship.officialName}
                </h2>
                <p className="text-sm text-emerald-200/80 mt-1">
                  Acceptance Rate: {selectedScholarship.acceptanceRate}
                </p>
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-200px)] custom-scrollbar">
              <div className="space-y-6">
                
                {/* Who Can Apply */}
                <div className="group">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider">
                      Who Can Apply
                    </h4>
                  </div>
                  <div className="p-4 bg-stone-50/80 rounded-2xl border border-stone-200 text-sm text-stone-700 leading-relaxed group-hover:border-emerald-200 transition-colors">
                    {selectedScholarship.whoCanApply}
                  </div>
                </div>

                {/* Eligibility Requirements */}
                <div className="group">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-md">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider">
                      Eligibility Requirements
                    </h4>
                  </div>
                  <ul className="space-y-2 p-4 bg-stone-50/80 rounded-2xl border border-stone-200 group-hover:border-purple-200 transition-colors">
                    {selectedScholarship.eligibility.map((el, i) => (
                      <li key={i} className="flex items-start space-x-2.5 text-sm text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{el}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200">
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider block">Required CGPA</span>
                    <span className="text-lg font-bold text-emerald-900">{selectedScholarship.requiredCGPA}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200">
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider block">IELTS Requirement</span>
                    <span className="text-lg font-bold text-blue-900">{selectedScholarship.ieltsRequirement}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200">
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider block">Required Experience</span>
                    <span className="text-lg font-bold text-amber-900">{selectedScholarship.requiredExperience}</span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="group">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-md">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider">
                      Benefits & Coverage
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedScholarship.benefits.map((b, i) => (
                      <div key={i} className="p-3 rounded-xl bg-gradient-to-br from-emerald-950 to-emerald-900 text-emerald-100 border border-emerald-800/50 flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Required Documents */}
                <div className="group">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-md">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider">
                      Required Documents
                    </h4>
                  </div>
                  <ul className="space-y-1.5 p-4 bg-stone-50/80 rounded-2xl border border-stone-200 group-hover:border-amber-200 transition-colors list-disc list-inside">
                    {selectedScholarship.requiredDocuments.map((doc, i) => (
                      <li key={i} className="text-sm text-stone-700">{doc}</li>
                    ))}
                  </ul>
                </div>

                {/* Application Process & Website */}
                <div className="group">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-md">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider">
                      Application Process
                    </h4>
                  </div>
                  <div className="p-4 bg-stone-50/80 rounded-2xl border border-stone-200 text-sm text-stone-700 leading-relaxed group-hover:border-indigo-200 transition-colors mb-4">
                    {selectedScholarship.officialApplicationProcess}
                  </div>
                  
                  <a
                    href={selectedScholarship.officialWebsite}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 group"
                  >
                    <span>Visit Official Scholarship Portal</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-stone-200 bg-stone-50/50 flex justify-end">
              <button
                onClick={() => setSelectedScholarship(null)}
                className="px-6 py-2.5 rounded-xl bg-stone-200 text-stone-700 hover:bg-stone-300 transition-all duration-300 text-sm font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
        .delay-2000 {
          animation-delay: 2000ms;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-from-bottom-4 {
          from { 
            opacity: 0;
            transform: translateY(1rem);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-in {
          animation-fill-mode: both;
        }
        .fade-in {
          animation-name: fade-in;
          animation-duration: 300ms;
        }
        .slide-in-from-bottom-4 {
          animation-name: slide-in-from-bottom-4;
          animation-duration: 500ms;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ScholarshipExplorer;