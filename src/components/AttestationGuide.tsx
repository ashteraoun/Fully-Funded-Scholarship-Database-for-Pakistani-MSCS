import React, { useState, useRef, useEffect } from 'react';
import { 
  attestationData 
} from '../data/attestationData';
import { 
  Building2, 
  FileCheck, 
  DollarSign, 
  MapPin, 
  AlertTriangle, 
  CheckCircle, 
  ArrowDown, 
  ExternalLink,
  GraduationCap,
  Clock,
  Shield,
  Truck,
  Laptop,
  Building,
  Mail,
  Phone,
  Star,
  Users,
  Award,
  Globe,
  ChevronRight,
  Calendar,
  UserCheck,
  FileText,
  BookOpen,
  CheckSquare,
  X,
  Info,
  Sparkles
} from 'lucide-react';

interface AttestationStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export const AttestationGuide: React.FC = () => {
  const [selectedDocIndex, setSelectedDocIndex] = useState<number>(2);
  const [locationCity, setLocationCity] = useState<'karachi' | 'lahore' | 'islamabad'>('karachi');
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedDoc = attestationData[selectedDocIndex];

  // Animate on document change
  useEffect(() => {
    setIsFading(true);
    const timer = setTimeout(() => setIsFading(false), 300);
    return () => clearTimeout(timer);
  }, [selectedDocIndex]);

  const cityOptions = [
    { id: 'karachi' as const, label: 'Karachi', icon: Building, color: 'from-blue-500 to-cyan-500' },
    { id: 'lahore' as const, label: 'Lahore', icon: Building2, color: 'from-orange-500 to-red-500' },
    { id: 'islamabad' as const, label: 'Islamabad', icon: Globe, color: 'from-emerald-500 to-teal-500' }
  ];

  const getCityOffice = () => {
    switch(locationCity) {
      case 'karachi': return selectedDoc.karachiOfficeLocation;
      case 'lahore': return selectedDoc.lahoreOfficeLocation;
      case 'islamabad': return selectedDoc.islamabadOfficeLocation;
    }
  };

  const processSteps = [
    { id: 'online', label: 'Online e-Portal', icon: Laptop, color: 'from-blue-500 to-indigo-500', bg: 'bg-blue-50' },
    { id: 'physical', label: 'Physical Walk-in', icon: Building, color: 'from-purple-500 to-pink-500', bg: 'bg-purple-50' },
    { id: 'courier', label: 'Courier Service', icon: Truck, color: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-50' }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-8">
        
        {/* Header Banner - Modern Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-stone-900 to-emerald-900 shadow-2xl border border-emerald-800/30">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-400 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-300 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>

          <div className="relative p-8 sm:p-10 lg:p-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                    Chapter 6 • Official Pakistani Legal Attestation Flow
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Degree Attestation
                  <span className="block text-emerald-300">Guide & Process</span>
                </h1>
                
                <p className="text-sm sm:text-base text-emerald-200/90 max-w-3xl leading-relaxed">
                  Complete step-by-step verification order for Matric, Intermediate, 
                  BS Computer Science degree, HEC, IBCC, MOFA, and foreign embassies 
                  with <span className="text-white font-semibold">Karachi</span> office locations.
                </p>
              </div>

              <div className="flex items-center space-x-3 flex-shrink-0">
                <div className="flex -space-x-2">
                  {['bg-emerald-400', 'bg-blue-400', 'bg-purple-400'].map((color, i) => (
                    <div key={i} className={`w-10 h-10 rounded-full ${color} border-2 border-stone-900 flex items-center justify-center`}>
                      <span className="text-xs font-bold text-white">{i + 1}</span>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-emerald-300">
                  <span className="font-bold text-white">4+</span> Attestation Steps
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Bottom Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
        </div>

        {/* Controls Section - Modern Glass Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Document Selector */}
          <div className="lg:col-span-3 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-shadow duration-300">
            <label className="flex items-center space-x-2 text-xs font-bold text-stone-700 uppercase tracking-wider mb-3">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>Select Document for Attestation</span>
            </label>
            <select
              value={selectedDocIndex}
              onChange={(e) => setSelectedDocIndex(Number(e.target.value))}
              className="w-full p-3.5 rounded-xl bg-stone-50/80 border-2 border-stone-200/80 font-semibold text-stone-800 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200 hover:bg-white hover:border-emerald-300"
            >
              {attestationData.map((doc, idx) => (
                <option key={idx} value={idx} className="py-2">
                  {doc.documentType}
                </option>
              ))}
            </select>
          </div>

          {/* City Selector */}
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-shadow duration-300">
            <label className="flex items-center space-x-2 text-xs font-bold text-stone-700 uppercase tracking-wider mb-3">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Your Location</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {cityOptions.map((city) => {
                const Icon = city.icon;
                const isActive = locationCity === city.id;
                return (
                  <button
                    key={city.id}
                    onClick={() => setLocationCity(city.id)}
                    className={`relative group flex items-center justify-center space-x-1.5 py-2.5 px-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-r ${city.color} text-white shadow-lg transform scale-105`
                        : 'bg-stone-100/80 text-stone-600 hover:bg-stone-200/80 hover:text-stone-800 hover:scale-105'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white/80' : 'text-stone-500'}`} />
                    <span>{city.label}</span>
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-white rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content - Animated Transition */}
        <div className={`transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          <div className="space-y-8">
            
            {/* Flowchart - Modern Step Cards */}
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700">
                    <FileCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-stone-900">
                      Attestation Sequence
                    </h2>
                    <p className="text-xs text-stone-500">
                      {selectedDoc.documentType} • Strict Legal Order
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-50 rounded-full border border-emerald-200">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                    {selectedDoc.sequence.length} Steps Required
                  </span>
                </div>
              </div>

              {/* Step Cards with Animation */}
              <div className="relative">
                {/* Connection Lines - Desktop */}
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-300 to-emerald-200 -translate-y-1/2 z-0" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
                  {selectedDoc.sequence.map((step, idx) => {
                    const isHovered = hoveredStep === idx;
                    const colors = [
                      'from-blue-500 to-cyan-500',
                      'from-indigo-500 to-purple-500',
                      'from-purple-500 to-pink-500',
                      'from-pink-500 to-rose-500',
                      'from-rose-500 to-orange-500'
                    ];
                    
                    return (
                      <div
                        key={idx}
                        onMouseEnter={() => setHoveredStep(idx)}
                        onMouseLeave={() => setHoveredStep(null)}
                        className={`relative group transition-all duration-300 transform ${
                          isHovered ? 'scale-105 -translate-y-1' : ''
                        }`}
                      >
                        <div className={`h-full bg-gradient-to-br ${colors[idx % colors.length]} rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20`}>
                          <div className="flex flex-col h-full">
                            <div className="flex items-start justify-between mb-3">
                              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-sm text-white border border-white/30">
                                {idx + 1}
                              </div>
                              {idx < selectedDoc.sequence.length - 1 && (
                                <ArrowDown className="w-4 h-4 text-white/60 lg:hidden" />
                              )}
                            </div>
                            <p className="text-sm font-semibold text-white leading-snug flex-1">
                              {step}
                            </p>
                            {idx < selectedDoc.sequence.length - 1 && (
                              <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-20">
                                <ChevronRight className="w-5 h-5 text-white/60 drop-shadow-lg" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Info Cards Grid - Modern Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Office Location */}
              <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg group-hover:shadow-xl transition-all">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Office</span>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        {locationCity}
                      </span>
                    </div>
                    <p className="text-sm text-stone-700 font-medium leading-relaxed">
                      {getCityOffice()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Fees */}
              <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg group-hover:shadow-xl transition-all">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Estimated Fees</span>
                    <p className="text-sm font-bold text-stone-800 mt-1">
                      {selectedDoc.feesApprox}
                    </p>
                    <span className="text-[10px] text-stone-500">Approximate cost</span>
                  </div>
                </div>
              </div>

              {/* Authority */}
              <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg group-hover:shadow-xl transition-all">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Attesting Body</span>
                    <p className="text-sm font-semibold text-stone-800 mt-1">
                      {selectedDoc.authorityName}
                    </p>
                    <span className="text-[10px] text-stone-500">Primary authority</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Details - Modern Expandable Cards */}
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900">
                    Execution Methods
                  </h3>
                  <p className="text-xs text-stone-500">Choose how to get your documents attested</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {processSteps.map((process) => {
                  const Icon = process.icon;
                  const processData = {
                    online: selectedDoc.onlineProcess,
                    physical: selectedDoc.physicalProcess,
                    courier: selectedDoc.courierProcess
                  }[process.id as keyof typeof processData];
                  
                  return (
                    <div key={process.id} className={`group p-5 rounded-xl ${process.bg} border-2 border-transparent hover:border-${process.color.split('-')[1]}-200 transition-all duration-300 hover:shadow-md`}>
                      <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-r ${process.color} text-white shadow-md group-hover:shadow-lg transition-all`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-stone-800 text-sm mt-3 mb-2">
                        {process.label}
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {processData}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Problems & Solutions - Modern Split Design */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 shadow-2xl border border-stone-700/50">
              {/* Decorative Background */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-400 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
              </div>

              <div className="relative p-6 sm:p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500">
                    <AlertTriangle className="w-5 h-5 text-stone-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Common Issues & Solutions
                    </h3>
                    <p className="text-xs text-stone-400">Problems faced by Pakistani students & verified fixes</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Problems */}
                  <div className="bg-stone-800/60 backdrop-blur-sm p-5 rounded-xl border border-stone-700/50 hover:border-amber-500/30 transition-colors duration-300">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-1.5 h-6 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full" />
                      <h4 className="font-bold text-amber-400 text-sm">Common Issues</h4>
                    </div>
                    <ul className="space-y-2.5">
                      {selectedDoc.commonProblems.map((prob, i) => (
                        <li key={i} className="flex items-start space-x-2.5 text-sm text-stone-300">
                          <X className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                          <span>{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div className="bg-stone-800/60 backdrop-blur-sm p-5 rounded-xl border border-stone-700/50 hover:border-emerald-500/30 transition-colors duration-300">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-1.5 h-6 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full" />
                      <h4 className="font-bold text-emerald-400 text-sm">Verified Solutions</h4>
                    </div>
                    <ul className="space-y-2.5">
                      {selectedDoc.solutions.map((sol, i) => (
                        <li key={i} className="flex items-start space-x-2.5 text-sm text-stone-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Footer */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl text-center border border-white/50">
                <div className="text-2xl font-bold text-emerald-600">{selectedDoc.sequence.length}</div>
                <div className="text-[10px] font-medium text-stone-500 uppercase tracking-wider">Steps</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl text-center border border-white/50">
                <div className="text-2xl font-bold text-blue-600">{selectedDoc.commonProblems.length}</div>
                <div className="text-[10px] font-medium text-stone-500 uppercase tracking-wider">Common Issues</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl text-center border border-white/50">
                <div className="text-2xl font-bold text-purple-600">{selectedDoc.solutions.length}</div>
                <div className="text-[10px] font-medium text-stone-500 uppercase tracking-wider">Solutions</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl text-center border border-white/50">
                <div className="text-2xl font-bold text-amber-600">3</div>
                <div className="text-[10px] font-medium text-stone-500 uppercase tracking-wider">Methods</div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
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
      `}</style>
    </div>
  );
};

export default AttestationGuide;