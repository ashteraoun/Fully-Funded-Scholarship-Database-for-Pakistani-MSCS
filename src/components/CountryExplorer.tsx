import React, { useState, useRef, useEffect } from 'react';
import { countriesData } from '../data/countriesData';
import { CountryInfo } from '../types';
import { 
  Globe, 
  Search, 
  Filter, 
  DollarSign, 
  Briefcase, 
  GraduationCap, 
  Clock, 
  CheckCircle2, 
  XCircle,
  Sparkles,
  TrendingUp,
  Award,
  Building2,
  Users,
  MapPin,
  Star,
  Heart,
  ChevronRight,
  X,
  Shield,
  Zap,
  BookOpen,
  Compass,
  Target,
  BarChart3,
  Gauge,
  Timer,
  Loader2
} from 'lucide-react';

export const CountryExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedCountry, setSelectedCountry] = useState<CountryInfo | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const regions = ['all', 'North America', 'Europe', 'Asia', 'Oceania'];

  // Auto-focus search on load
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  // Debounced search handler
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredCountries = countriesData.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.bestUniversities.some(u => u.toLowerCase().includes(searchTerm.toLowerCase())) ||
      c.scholarshipOpportunities.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesRegion = selectedRegion === 'all' || c.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  // Get region count
  const getRegionCount = (region: string) => {
    if (region === 'all') return countriesData.length;
    return countriesData.filter(c => c.region === region).length;
  };

  // Get region color
  const getRegionColor = (region: string) => {
    switch(region) {
      case 'North America': return 'from-blue-500 to-cyan-500';
      case 'Europe': return 'from-purple-500 to-pink-500';
      case 'Asia': return 'from-emerald-500 to-teal-500';
      case 'Oceania': return 'from-orange-500 to-red-500';
      default: return 'from-stone-500 to-stone-700';
    }
  };

  // Get visa success color
  const getVisaColor = (rate: string) => {
    const num = parseInt(rate);
    if (num >= 80) return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    if (num >= 60) return 'text-amber-600 bg-amber-50 border-amber-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-8">
        
        {/* Header Banner - Enhanced Hero */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-stone-900 to-emerald-900 shadow-2xl border border-emerald-800/30">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-400 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>

          <div className="relative p-8 sm:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30">
                  <Globe className="w-4 h-4 text-emerald-300" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Chapter 2 • Global Destinations
                  </span>
                  <span className="w-1 h-1 bg-emerald-400 rounded-full" />
                  <span className="text-xs text-emerald-300">
                    {countriesData.length} Countries
                  </span>
                </div>
                
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                    Global CS Master's
                    <span className="block text-emerald-300">Destination Guide</span>
                  </h1>
                  
                  <p className="text-base sm:text-lg text-emerald-200/90 max-w-3xl mt-2 leading-relaxed">
                    Complete comparison of MSCS programs worldwide: tuition costs, 
                    fully funded scholarships, visa success rates, post-grad salaries, 
                    and Permanent Residency pathways.
                  </p>
                </div>
              </div>

              <div className="flex flex-shrink-0 gap-3">
                <div className="hidden sm:flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/10">
                  <div className="flex -space-x-2">
                    {['🇺🇸', '🇨🇦', '🇬🇧', '🇩🇪', '🇦🇺'].map((flag, i) => (
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
                <div className="text-2xl font-bold text-white">{countriesData.length}</div>
                <div className="text-[10px] text-emerald-300 uppercase tracking-wider">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">
                  {countriesData.reduce((acc, c) => acc + c.bestUniversities.length, 0)}
                </div>
                <div className="text-[10px] text-emerald-300 uppercase tracking-wider">Top Universities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">
                  {countriesData.reduce((acc, c) => acc + c.scholarshipOpportunities.length, 0)}
                </div>
                <div className="text-[10px] text-emerald-300 uppercase tracking-wider">Scholarships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4</div>
                <div className="text-[10px] text-emerald-300 uppercase tracking-wider">Regions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls Section - Enhanced */}
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
                onChange={handleSearch}
                placeholder="Search country, university, or scholarship..."
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

            {/* Region Filter */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider mr-1 hidden sm:inline">
                Region:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {regions.map((reg) => {
                  const count = getRegionCount(reg);
                  const isActive = selectedRegion === reg;
                  return (
                    <button
                      key={reg}
                      onClick={() => setSelectedRegion(reg)}
                      className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                        isActive
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30 scale-105'
                          : 'bg-stone-100/80 text-stone-600 hover:bg-stone-200/80 hover:text-stone-800 hover:scale-105'
                      }`}
                    >
                      <span className="flex items-center space-x-1.5">
                        <span>{reg === 'all' ? '🌍' : ''}</span>
                        <span>{reg === 'all' ? 'All Countries' : reg}</span>
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
              Found <span className="font-bold text-emerald-600">{filteredCountries.length}</span> countries 
              {filteredCountries.length === 0 ? ' matching your search' : ` matching "${searchTerm}"`}
            </div>
          )}
        </div>

        {/* Country Cards Grid - Enhanced */}
        {filteredCountries.length === 0 ? (
          <div className="text-center py-16 bg-white/60 backdrop-blur-sm rounded-3xl border border-stone-200">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 rounded-full bg-stone-100">
                <Search className="w-12 h-12 text-stone-400" />
              </div>
              <h3 className="text-xl font-bold text-stone-700">No countries found</h3>
              <p className="text-sm text-stone-500">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedRegion('all'); }}
                className="px-6 py-2 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 transition-colors"
              >
                Clear filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCountries.map((c) => {
              const isHovered = hoveredCountry === c.id;
              const regionColors = getRegionColor(c.region);
              const visaColors = getVisaColor(c.visaSuccessRate);
              
              return (
                <div
                  key={c.id}
                  onClick={() => setSelectedCountry(c)}
                  onMouseEnter={() => setHoveredCountry(c.id)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  className={`group relative bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-500 cursor-pointer ${
                    isHovered 
                      ? 'border-emerald-400 shadow-2xl shadow-emerald-500/20 -translate-y-2' 
                      : 'border-transparent hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1'
                  }`}
                >
                  {/* Decorative Gradient Background on Hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${regionColors} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Card Content */}
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                          {c.flag}
                        </span>
                        <div>
                          <h3 className="font-extrabold text-base text-stone-900 group-hover:text-emerald-700 transition-colors duration-300">
                            {c.name}
                          </h3>
                          <div className="flex items-center space-x-1.5 mt-0.5">
                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-gradient-to-r ${regionColors} text-white`}>
                              {c.region}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-full border text-[10px] font-bold ${visaColors}`}>
                        <Shield className="w-3 h-3" />
                        <span>Visa {c.visaSuccessRate}</span>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start space-x-2.5 p-2.5 rounded-xl bg-stone-50/80 group-hover:bg-emerald-50/50 transition-colors duration-300">
                        <div className="p-1.5 rounded-lg bg-emerald-100">
                          <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] text-stone-400 uppercase tracking-wider">Tuition</span>
                          <p className="text-xs font-semibold text-stone-800 truncate">{c.costWithoutScholarship}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2.5 p-2.5 rounded-xl bg-stone-50/80 group-hover:bg-emerald-50/50 transition-colors duration-300">
                        <div className="p-1.5 rounded-lg bg-purple-100">
                          <GraduationCap className="w-3.5 h-3.5 text-purple-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] text-stone-400 uppercase tracking-wider">Scholarships</span>
                          <p className="text-xs font-semibold text-stone-800 truncate">
                            {c.scholarshipOpportunities.slice(0, 2).join(', ')}
                            {c.scholarshipOpportunities.length > 2 && ` +${c.scholarshipOpportunities.length - 2}`}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2.5 p-2.5 rounded-xl bg-stone-50/80 group-hover:bg-emerald-50/50 transition-colors duration-300">
                        <div className="p-1.5 rounded-lg bg-amber-100">
                          <Briefcase className="w-3.5 h-3.5 text-amber-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] text-stone-400 uppercase tracking-wider">Post-Grad Salary</span>
                          <p className="text-xs font-semibold text-stone-800 truncate">{c.salaryAfterGraduation}</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                      isHovered
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30'
                        : 'bg-stone-100/80 text-stone-700 hover:bg-stone-200/80'
                    }`}>
                      <span className="flex items-center justify-center space-x-2">
                        <span>View Complete Analysis</span>
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

      {/* Country Detail Modal - Enhanced */}
      {selectedCountry && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedCountry(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-white/20 relative animate-in slide-in-from-bottom-4 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Gradient */}
            <div className="relative bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-900 p-6 sm:p-8">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-400 rounded-full blur-3xl" />
              </div>
              
              <button
                onClick={() => setSelectedCountry(null)}
                className="absolute right-4 top-4 p-2 rounded-xl hover:bg-white/10 transition-colors z-10"
              >
                <X className="w-5 h-5 text-white/70 hover:text-white" />
              </button>

              <div className="relative flex items-center space-x-4">
                <span className="text-5xl">{selectedCountry.flag}</span>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white">
                    {selectedCountry.name}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-white/10 text-white text-xs font-medium">
                      {selectedCountry.region}
                    </span>
                    <span className="text-xs text-emerald-300">
                      Intakes: {selectedCountry.intakeMonths.join(' • ')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-180px)] custom-scrollbar">
              <div className="space-y-6">
                
                {/* Education System */}
                <div className="group">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md">
                      <BookOpen className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider">
                      Education System
                    </h4>
                  </div>
                  <div className="p-4 bg-stone-50/80 rounded-2xl border border-stone-200 text-sm text-stone-700 leading-relaxed group-hover:border-emerald-200 transition-colors">
                    {selectedCountry.educationSystem}
                  </div>
                </div>

                {/* Universities & Scholarships Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-md">
                        <Building2 className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider">
                        Top Universities
                      </h4>
                    </div>
                    <ul className="space-y-1.5 p-4 bg-stone-50/80 rounded-2xl border border-stone-200 group-hover:border-purple-200 transition-colors">
                      {selectedCountry.bestUniversities.map((u, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-stone-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                          <span>{u}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="group">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-md">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider">
                        Scholarships
                      </h4>
                    </div>
                    <ul className="space-y-1.5 p-4 bg-stone-50/80 rounded-2xl border border-stone-200 group-hover:border-emerald-200 transition-colors">
                      {selectedCountry.scholarshipOpportunities.map((s, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-stone-700">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Cost & Living */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <DollarSign className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Post-Grad Salary</span>
                    </div>
                    <p className="text-lg font-bold text-emerald-900">{selectedCountry.salaryAfterGraduation}</p>
                    <p className="text-xs text-emerald-700 mt-1">Average starting salary</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">Monthly Living Cost</span>
                    </div>
                    <p className="text-lg font-bold text-blue-900">{selectedCountry.livingCost}</p>
                    <p className="text-xs text-blue-700 mt-1">Estimated monthly expenses</p>
                  </div>
                </div>

                {/* PR Opportunities */}
                <div className="group">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-md">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider">
                      PR & Post-Study Work
                    </h4>
                  </div>
                  <div className="p-4 bg-stone-50/80 rounded-2xl border border-stone-200 text-sm text-stone-700 leading-relaxed group-hover:border-amber-200 transition-colors">
                    {selectedCountry.prOpportunities}
                  </div>
                </div>

                {/* Advantages & Disadvantages */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/30 border border-emerald-200">
                    <div className="flex items-center space-x-2 mb-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <h4 className="font-bold text-emerald-800 text-sm uppercase tracking-wider">
                        Advantages
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {selectedCountry.advantages.map((adv, i) => (
                        <li key={i} className="flex items-start space-x-2.5 text-sm text-emerald-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/30 border border-amber-200">
                    <div className="flex items-center space-x-2 mb-3">
                      <XCircle className="w-4 h-4 text-amber-600" />
                      <h4 className="font-bold text-amber-800 text-sm uppercase tracking-wider">
                        Disadvantages
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {selectedCountry.disadvantages.map((dis, i) => (
                        <li key={i} className="flex items-start space-x-2.5 text-sm text-amber-800">
                          <XCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{dis}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-stone-200 bg-stone-50/50 flex justify-end">
              <button
                onClick={() => setSelectedCountry(null)}
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
      `}</style>
    </div>
  );
};

export default CountryExplorer;