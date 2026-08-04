import React from 'react';
import { BookOpen, Map, GraduationCap, Globe, CheckSquare, Sparkles, HelpCircle, Download, FileCheck, Layers } from 'lucide-react';

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
  const navItems = [
    { id: 'reader', label: 'Book Reader', icon: BookOpen },
    { id: 'pdf_preview', label: 'PDF Guide Export', icon: Download },
    { id: 'roadmap', label: '2026-2028 Timeline', icon: Map },
    { id: 'attestation', label: 'Karachi Attestation', icon: FileCheck },
    { id: 'scholarships', label: 'Scholarships (20+)', icon: GraduationCap },
    { id: 'countries', label: 'Countries (27)', icon: Globe },
    { id: 'trackers', label: 'My App Trackers', icon: Layers },
    { id: 'ai_assistant', label: 'AI SOP & Email Tool', icon: Sparkles },
    { id: 'faqs', label: '100 FAQs & Tips', icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-40 bg-emerald-950 text-white shadow-xl border-b border-emerald-800/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:h-16 sm:py-0">
          
          {/* Logo & Title */}
          <div className="flex items-center space-x-3 cursor-pointer min-w-0" onClick={() => setActiveView('reader')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-900/40 border border-emerald-300/30 flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-emerald-950" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-900/80 px-2 py-0.5 rounded border border-emerald-700/50">
                  Karachi MSCS Edition
                </span>
                <span className="text-[10px] sm:text-xs text-emerald-200/80 font-medium hidden md:inline">
                  2027-2028 Cycle
                </span>
              </div>
              <h1 className="text-sm sm:text-lg font-bold tracking-tight text-white line-clamp-2 sm:line-clamp-1 break-words">
                Ultimate Fully Funded Master's Scholarship Guide
              </h1>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <button
              onClick={onExportPdf}
              disabled={isExporting}
              className="flex w-full sm:w-auto items-center justify-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-semibold text-emerald-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all duration-200 shadow-md shadow-emerald-950/50 hover:shadow-emerald-400/20 active:scale-95 disabled:opacity-50 cursor-pointer"
              title="Download publication-quality PDF guide"
            >
              <Download className={`w-4 h-4 ${isExporting ? 'animate-bounce' : ''}`} />
              <span className="sm:inline">
                {isExporting ? 'Preparing PDF...' : 'Export Book PDF'}
              </span>
            </button>
          </div>
        </div>

        {/* Scrollable Sub-Navigation Bar */}
        <div className="flex items-center space-x-1 py-2 overflow-x-auto no-scrollbar border-t border-emerald-900/60 text-xs">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-800 text-emerald-100 shadow-sm border border-emerald-600/50'
                    : 'text-emerald-200/80 hover:text-white hover:bg-emerald-900/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-300' : 'text-emerald-400/70'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
