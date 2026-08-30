import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle, ChevronRight, Bookmark, Sparkles, 
  ChevronDown, ChevronUp, Trophy, Clock, Zap, Star, 
  Target, Award, TrendingUp, BarChart3, Users, Globe,
  GraduationCap, FileText, Shield, Heart, Flame } from 'lucide-react';
import { Chapter } from '../types';

interface SidebarProps {
  chapters: Chapter[];
  currentChapterId: number;
  setCurrentChapterId: (id: number) => void;
  completedChapters: number[];
  onToggleComplete: (id: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  chapters,
  currentChapterId,
  setCurrentChapterId,
  completedChapters,
  onToggleComplete,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedChapters, setExpandedChapters] = useState<Set<number>>(new Set());
  const [hoveredChapter, setHoveredChapter] = useState<number | null>(null);

  // Auto-expand current chapter
  useEffect(() => {
    setExpandedChapters(prev => {
      const newSet = new Set(prev);
      newSet.add(currentChapterId);
      return newSet;
    });
  }, [currentChapterId]);

  const toggleChapter = (id: number) => {
    setExpandedChapters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const progress = Math.round((completedChapters.length / chapters.length) * 100);
  const isComplete = progress === 100;

  // Chapter icons mapping
  const getChapterIcon = (id: number) => {
    const icons = [
      GraduationCap, // Ch 1
      Globe,         // Ch 2
      Shield,        // Ch 3
      FileText,      // Ch 4
      Award,         // Ch 5
      Users,         // Ch 6
      Target,        // Ch 7
      TrendingUp,    // Ch 8
      Heart,         // Ch 9
      Flame          // Ch 10
    ];
    return icons[id % icons.length] || BookOpen;
  };

  // Chapter colors
  const getChapterColor = (id: number) => {
    const colors = [
      'from-blue-500 to-cyan-500',
      'from-purple-500 to-pink-500',
      'from-emerald-500 to-teal-500',
      'from-orange-500 to-red-500',
      'from-indigo-500 to-purple-500',
      'from-rose-500 to-pink-500',
      'from-amber-500 to-orange-500',
      'from-cyan-500 to-blue-500',
      'from-teal-500 to-emerald-500',
      'from-fuchsia-500 to-pink-500'
    ];
    return colors[id % colors.length];
  };

  return (
    <aside className={`relative w-full lg:w-80 bg-gradient-to-b from-stone-900 to-stone-950 text-stone-200 border-r border-stone-800/50 flex-shrink-0 transition-all duration-300 ${
      isCollapsed ? 'lg:w-16' : 'lg:w-80'
    }`}>
      
      {/* Collapse Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 z-10 w-6 h-6 rounded-full bg-stone-800 border border-stone-700 text-stone-400 hover:text-white hover:bg-stone-700 transition-all duration-300 flex items-center justify-center shadow-lg"
      >
        {isCollapsed ? (
          <ChevronRight className="w-3 h-3" />
        ) : (
          <ChevronDown className="w-3 h-3" />
        )}
      </button>

      <div className="p-4 space-y-6 overflow-y-auto h-full custom-scrollbar">
        
        {/* Book Status Overview - Enhanced */}
        <div className={`
          ${isCollapsed ? 'hidden lg:block' : ''}
          bg-gradient-to-br from-stone-800/80 to-stone-900/80 rounded-2xl p-5 border border-stone-700/50 shadow-xl relative overflow-hidden
        `}>
          {/* Decorative Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-400 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Reading Progress
                </span>
              </div>
              <div className="flex items-center space-x-2">
                {isComplete && (
                  <Trophy className="w-4 h-4 text-amber-400 animate-pulse" />
                )}
                <span className="text-xs font-bold text-white">
                  {progress}%
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative w-full h-2.5 bg-stone-700/80 rounded-full overflow-hidden">
              <div
                className={`absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out ${
                  isComplete 
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-500' 
                    : 'bg-gradient-to-r from-emerald-500 to-emerald-400'
                }`}
                style={{ width: `${progress}%` }}
              >
                {isComplete && (
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 animate-pulse" />
                )}
              </div>
            </div>

            <div className="flex items-center justify-between mt-2.5 text-[10px] text-stone-400">
              <span className="flex items-center space-x-1">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span>{completedChapters.length} completed</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3 h-3 text-stone-500" />
                <span>{chapters.length} total</span>
              </span>
            </div>

            {/* Completion Badge */}
            {isComplete && (
              <div className="mt-3 p-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl border border-amber-500/30 text-center">
                <span className="text-xs font-bold text-amber-400">
                  🎉 All Chapters Complete!
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Chapter List - Enhanced */}
        <div className={isCollapsed ? 'hidden lg:block' : ''}>
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider flex items-center space-x-2">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>Table of Contents</span>
            </h3>
            <span className="text-[10px] text-stone-500 font-medium">
              {chapters.length} chapters
            </span>
          </div>

          <nav className="space-y-1.5">
            {chapters.map((ch) => {
              const isSelected = ch.id === currentChapterId;
              const isFinished = completedChapters.includes(ch.id);
              const isHovered = hoveredChapter === ch.id;
              const isExpanded = expandedChapters.has(ch.id);
              const Icon = getChapterIcon(ch.id);
              const color = getChapterColor(ch.id);

              return (
                <div
                  key={ch.id}
                  onClick={() => setCurrentChapterId(ch.id)}
                  onMouseEnter={() => setHoveredChapter(ch.id)}
                  onMouseLeave={() => setHoveredChapter(null)}
                  className={`group relative rounded-xl cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-r from-emerald-950/80 to-stone-900/80 border border-emerald-600/40 shadow-lg shadow-emerald-900/20'
                      : 'bg-transparent hover:bg-stone-800/60 border border-transparent hover:border-stone-700/40'
                  }`}
                >
                  {/* Selection Indicator */}
                  {isSelected && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-r-full" />
                  )}

                  <div className="flex items-start justify-between p-3">
                    <div className="flex items-start space-x-3 flex-1 min-w-0">
                      {/* Chapter Icon */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? `bg-gradient-to-r ${color} shadow-md`
                          : isFinished
                          ? 'bg-emerald-500/20 border border-emerald-500/30'
                          : 'bg-stone-700/50 border border-stone-600/30'
                      }`}>
                        {isFinished ? (
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Icon className={`w-4 h-4 ${
                            isSelected ? 'text-white' : 'text-stone-400'
                          }`} />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className="text-[10px] font-bold text-emerald-400/60">
                            Ch {ch.id}
                          </span>
                          <h4 className={`text-sm font-semibold leading-tight truncate transition-colors duration-300 ${
                            isSelected ? 'text-white' : 'text-stone-300 group-hover:text-white'
                          }`}>
                            {ch.title.split(':')[1]?.trim() || ch.title}
                          </h4>
                        </div>
                        
                        <div className="flex items-center space-x-3 mt-1">
                          <span className="text-[10px] text-stone-400 flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{ch.readingTimeMinutes} min</span>
                          </span>
                          {isFinished && (
                            <span className="text-[9px] font-bold text-emerald-400 flex items-center space-x-0.5">
                              <CheckCircle className="w-2.5 h-2.5" />
                              <span>Done</span>
                            </span>
                          )}
                          {isSelected && (
                            <span className="text-[9px] font-bold text-emerald-300 flex items-center space-x-0.5">
                              <Zap className="w-2.5 h-2.5" />
                              <span>Reading</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1 flex-shrink-0 ml-2">
                      {/* Toggle Complete Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleComplete(ch.id);
                        }}
                        className={`p-1.5 rounded-lg transition-all duration-200 ${
                          isFinished
                            ? 'text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/20'
                            : 'text-stone-600 hover:text-stone-400 hover:bg-stone-700/50'
                        }`}
                        title={isFinished ? 'Mark as unread' : 'Mark as finished'}
                      >
                        <CheckCircle className={`w-4 h-4 transition-all ${
                          isFinished ? 'fill-emerald-400/20' : ''
                        }`} />
                      </button>

                      {/* Expand Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleChapter(ch.id);
                        }}
                        className={`p-1 rounded-lg transition-all duration-300 ${
                          isExpanded 
                            ? 'text-emerald-400' 
                            : 'text-stone-600 hover:text-stone-400'
                        }`}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`} />
                      </button>

                      <ChevronRight
                        className={`w-4 h-4 transition-all duration-300 ${
                          isSelected 
                            ? 'text-emerald-400 translate-x-0.5' 
                            : 'text-stone-600 group-hover:text-stone-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded Chapter Preview */}
                  {isExpanded && (
                    <div className="px-3 pb-3 pt-1 border-t border-stone-700/30 mt-1 space-y-2">
                      <div className="flex flex-wrap gap-1.5">
                        {ch.sections.slice(0, 3).map((section, idx) => (
                          <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-stone-700/40 text-stone-400 border border-stone-600/30">
                            {section.title.length > 20 ? section.title.slice(0, 20) + '...' : section.title}
                          </span>
                        ))}
                        {ch.sections.length > 3 && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            +{ch.sections.length - 3} more
                          </span>
                        )}
                      </div>
                      {ch.faqs && ch.faqs.length > 0 && (
                        <div className="flex items-center space-x-1 text-[10px] text-stone-500">
                          <HelpCircle className="w-3 h-3" />
                          <span>{ch.faqs.length} FAQs</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Guide Note Box - Enhanced */}
        <div className={`
          ${isCollapsed ? 'hidden lg:block' : ''}
          relative overflow-hidden rounded-2xl p-4 bg-gradient-to-br from-emerald-950/60 to-emerald-900/60 border border-emerald-800/40 shadow-lg
        `}>
          {/* Decorative Glow */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-400 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <div className="flex items-center space-x-2 mb-2">
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 shadow-md">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                Karachi Student Tip
              </span>
            </div>
            
            <p className="text-xs text-emerald-200/90 leading-relaxed">
              This guide includes specific Karachi office locations (BSEK Nazimabad, BIEK, HEC Gulshan, MOFA FTC) and verified fees for 2027-2028 applicants.
            </p>

            <div className="mt-3 flex items-center space-x-2">
              <span className="flex -space-x-1">
                {['🏛️', '📜', '✅'].map((emoji, i) => (
                  <span key={i} className="text-sm filter drop-shadow-lg">{emoji}</span>
                ))}
              </span>
              <span className="text-[10px] text-emerald-400/70">
                Verified for Karachi students
              </span>
            </div>
          </div>
        </div>

        {/* Quick Stats - Enhanced */}
        <div className={`
          ${isCollapsed ? 'hidden lg:block' : ''}
          grid grid-cols-2 gap-2
        `}>
          <div className="p-3 rounded-xl bg-stone-800/40 border border-stone-700/30 text-center">
            <div className="text-lg font-bold text-emerald-400">{chapters.length}</div>
            <div className="text-[9px] text-stone-400 uppercase tracking-wider">Chapters</div>
          </div>
          <div className="p-3 rounded-xl bg-stone-800/40 border border-stone-700/30 text-center">
            <div className="text-lg font-bold text-blue-400">
              {chapters.reduce((acc, ch) => acc + ch.sections.length, 0)}
            </div>
            <div className="text-[9px] text-stone-400 uppercase tracking-wider">Sections</div>
          </div>
        </div>

      </div>

      {/* Custom Scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #374151;
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4b5563;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </aside>
  );
};

// Add missing HelpCircle import if needed
const HelpCircle = (props: any) => {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
};

export default Sidebar;