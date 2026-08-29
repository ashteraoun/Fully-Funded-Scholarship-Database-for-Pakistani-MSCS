import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  Map, 
  GraduationCap, 
  Globe, 
  CheckSquare, 
  Sparkles, 
  HelpCircle, 
  Download, 
  FileCheck, 
  Layers,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Home,
  Settings,
  User,
  Bell,
  Search,
  Star,
  Trophy,
  Zap,
  Shield,
  Award,
  Clock,
  TrendingUp,
  Flame
} from 'lucide-react';

interface HeaderProps {
  activeView: string;
  setActiveView: (view: string) => void;
  onExportPdf: () => void;
  isExporting: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  setActiveView,
  onExportPdf,
  isExporting
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: 'reader', label: 'Book Reader', icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
    { id: 'pdf_preview', label: 'PDF Export', icon: Download, color: 'from-emerald-500 to-teal-500' },
    { id: 'roadmap', label: 'Timeline', icon: Map, color: 'from-orange-500 to-red-500' },
    { id: 'attestation', label: 'Attestation', icon: FileCheck, color: 'from-purple-500 to-pink-500' },
    { id: 'scholarships', label: 'Scholarships', icon: GraduationCap, color: 'from-yellow-500 to-amber-500' },
    { id: 'countries', label: 'Countries', icon: Globe, color: 'from-cyan-500 to-blue-500' },
    { id: 'trackers', label: 'Trackers', icon: Layers, color: 'from-indigo-500 to-purple-500' },
    { id: 'ai_assistant', label: 'AI Tool', icon: Sparkles, color: 'from-pink-500 to-rose-500' },
    { id: 'faqs', label: 'FAQs', icon: HelpCircle, color: 'from-teal-500 to-emerald-500' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-emerald-950/95 backdrop-blur-xl shadow-2xl border-b border-emerald-800/50' 
        : 'bg-emerald-950 shadow-xl border-b border-emerald-800/30'
    }`}>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Title */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group min-w-0 flex-1"
            onClick={() => setActiveView('reader')}
          >
            {/* Animated Logo */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-900/40 border border-emerald-300/30 transform group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-950" />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="inline-flex items-center space-x-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-900/80 px-2 sm:px-2.5 py-0.5 rounded-full border border-emerald-700/50">
                  <Zap className="w-2.5 h-2.5 text-emerald-400" />
                  <span>Karachi MSCS</span>
                </span>
                <span className="hidden sm:inline-flex items-center space-x-1 text-[9px] sm:text-[10px] text-emerald-200/80 font-medium bg-emerald-900/40 px-2 py-0.5 rounded-full">
                  <Clock className="w-2.5 h-2.5" />
                  <span>2027-2028 Cycle</span>
                </span>
                <span className="inline-flex items-center space-x-1 text-[9px] sm:text-[10px] text-amber-300/80 font-medium bg-amber-900/30 px-2 py-0.5 rounded-full">
                  <Trophy className="w-2.5 h-2.5" />
                  <span>Fully Funded</span>
                </span>
              </div>
              <h1 className="text-sm sm:text-base lg:text-lg font-extrabold tracking-tight text-white line-clamp-1">
                Ultimate Fully Funded Master's Guide
                <span className="hidden lg:inline text-emerald-300"> • Pakistan Edition</span>
              </h1>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Search Button */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 rounded-xl text-emerald-300/70 hover:text-white hover:bg-emerald-800/50 transition-all duration-200"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Export Button */}
            <button
              onClick={onExportPdf}
              disabled={isExporting}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-bold text-emerald-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:via-teal-300 hover:to-cyan-300 transition-all duration-300 shadow-lg shadow-emerald-950/50 hover:shadow-emerald-400/30 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <Download className={`w-4 h-4 ${isExporting ? 'animate-bounce' : 'group-hover:scale-110 transition-transform'}`} />
              <span>
                {isExporting ? 'Preparing...' : 'Export PDF'}
              </span>
              {!isExporting && (
                <span className="text-[8px] font-bold text-emerald-800/60 bg-white/30 px-1.5 py-0.5 rounded">
                  FREE
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 rounded-xl text-emerald-300/70 hover:text-white hover:bg-emerald-800/50 transition-all duration-200"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-white hover:bg-emerald-800/50 transition-all duration-200"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="py-3 border-t border-emerald-800/30 animate-in slide-in-from-top-2 duration-300">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search chapters, countries, scholarships..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-emerald-900/50 border border-emerald-700/50 text-white text-sm placeholder:text-emerald-300/40 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Navigation Bar - Desktop */}
        <div className="hidden sm:flex items-center space-x-0.5 py-2 border-t border-emerald-900/40 overflow-x-auto no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`relative flex items-center space-x-1.5 px-3.5 py-2 rounded-xl font-medium text-xs transition-all duration-300 whitespace-nowrap group ${
                  isActive
                    ? `bg-gradient-to-r ${item.color} text-white shadow-lg scale-105`
                    : 'text-emerald-200/80 hover:text-white hover:bg-emerald-800/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  isActive ? 'text-white' : 'text-emerald-400/70 group-hover:scale-110'
                }`} />
                <span>{item.label}</span>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-white rounded-full" />
                )}
                
                {/* Hover tooltip */}
                {!isActive && (
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-stone-800 text-white text-[8px] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    {item.label}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="sm:hidden py-4 border-t border-emerald-800/30 animate-in slide-in-from-top-2 duration-300"
          >
            <div className="space-y-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveView(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                      isActive
                        ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                        : 'text-emerald-200/80 hover:text-white hover:bg-emerald-800/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                  </button>
                );
              })}
              
              {/* Mobile Export Button */}
              <button
                onClick={() => {
                  onExportPdf();
                  setIsMobileMenuOpen(false);
                }}
                disabled={isExporting}
                className="flex items-center justify-center space-x-2 w-full mt-3 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-emerald-950 font-bold text-sm shadow-lg disabled:opacity-50 transition-all duration-200"
              >
                <Download className={`w-4 h-4 ${isExporting ? 'animate-bounce' : ''}`} />
                <span>{isExporting ? 'Preparing...' : 'Export Book PDF'}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes slide-in-from-top-2 {
          from {
            opacity: 0;
            transform: translateY(-0.5rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-in {
          animation-fill-mode: both;
        }
        .slide-in-from-top-2 {
          animation-name: slide-in-from-top-2;
          animation-duration: 300ms;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </header>
  );
};

export default Header;