import React, { useState, useRef, useEffect } from 'react';
import { Chapter } from '../types';
import { 
  BookOpen, 
  CheckSquare, 
  Lightbulb, 
  AlertTriangle, 
  Building2, 
  ChevronLeft, 
  ChevronRight, 
  HelpCircle, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Download,
  Sparkles,
  GraduationCap,
  Target,
  Clock,
  Award,
  Globe,
  UserCheck,
  FileText,
  Star,
  TrendingUp,
  Zap,
  Heart,
  BookMarked,
  Share2,
  Printer,
  ChevronDown,
  ChevronUp,
  Play,
  CheckCircle,
  XCircle
} from 'lucide-react';

interface BookReaderProps {
  chapter: Chapter;
  totalChapters: number;
  onSelectChapter: (id: number) => void;
  onExportPdf: () => void;
  onOpenAiAssistant: () => void;
}

export const BookReader: React.FC<BookReaderProps> = ({
  chapter,
  totalChapters,
  onSelectChapter,
  onExportPdf,
  onOpenAiAssistant
}) => {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set());
  const [showAllChecklist, setShowAllChecklist] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Auto-expand all sections by default
  useEffect(() => {
    const allIds = new Set(chapter.sections.map(s => s.id));
    setExpandedSections(allIds);
  }, [chapter.id]);

  const toggleSection = (id: number) => {
    const newSet = new Set(expandedSections);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setExpandedSections(newSet);
  };

  const getCalloutIcon = (type: string) => {
    switch(type) {
      case 'tip': return Lightbulb;
      case 'warning': return AlertTriangle;
      case 'karachi-special': return Building2;
      default: return Info;
    }
  };

  const getCalloutColors = (type: string) => {
    switch(type) {
      case 'tip': return {
        bg: 'bg-emerald-50',
        border: 'border-emerald-500',
        text: 'text-emerald-800',
        icon: 'text-emerald-600',
        gradient: 'from-emerald-400 to-emerald-600'
      };
      case 'warning': return {
        bg: 'bg-amber-50',
        border: 'border-amber-500',
        text: 'text-amber-800',
        icon: 'text-amber-600',
        gradient: 'from-amber-400 to-orange-500'
      };
      case 'karachi-special': return {
        bg: 'bg-teal-50',
        border: 'border-teal-500',
        text: 'text-teal-800',
        icon: 'text-teal-600',
        gradient: 'from-teal-400 to-cyan-500'
      };
      default: return {
        bg: 'bg-blue-50',
        border: 'border-blue-500',
        text: 'text-blue-800',
        icon: 'text-blue-600',
        gradient: 'from-blue-400 to-indigo-500'
      };
    }
  };

  return (
    <div className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      
      {/* Book Title Banner - Enhanced Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-stone-900 to-emerald-900 shadow-2xl border border-emerald-800/30 mb-8">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        <div className="relative p-8 sm:p-10 lg:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-emerald-800/40 pb-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  <span>Official Guidebook</span>
                  <span className="text-stone-500">•</span>
                  <span>Karachi CS Edition</span>
                </div>
                <div className="flex items-center space-x-3 mt-1">
                  <span className="inline-flex items-center px-3 py-1 bg-stone-800/80 rounded-full border border-stone-700/60 text-xs font-medium text-stone-300">
                    Chapter {chapter.id} of {totalChapters}
                  </span>
                  <span className="inline-flex items-center space-x-1 text-xs text-emerald-300">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{chapter.readingTimeMinutes} min read</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={onExportPdf}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 border border-white/20 text-xs font-medium"
              >
                <Download className="w-4 h-4" />
                <span>PDF</span>
              </button>
              <button
                onClick={() => {}}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 border border-white/20 text-xs font-medium"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30">
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                {chapter.sections.length} Sections • Complete Guide
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {chapter.title}
            </h1>
            
            <p className="text-base sm:text-lg text-emerald-200/90 font-medium max-w-3xl leading-relaxed">
              {chapter.subtitle}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-emerald-800/40">
            <div className="flex items-center space-x-3 text-xs">
              <span className="flex items-center space-x-1.5 text-emerald-300">
                <Calendar className="w-3.5 h-3.5" />
                <span>Target: 2027-2028 Intakes</span>
              </span>
              <span className="text-stone-600">|</span>
              <span className="flex items-center space-x-1.5 text-emerald-300">
                <Award className="w-3.5 h-3.5" />
                <span>{chapter.checklist.length} Checklist Items</span>
              </span>
              <span className="text-stone-600">|</span>
              <button
                onClick={onOpenAiAssistant}
                className="flex items-center space-x-1.5 text-emerald-300 hover:text-white transition-colors duration-300 font-semibold cursor-pointer group"
              >
                <Zap className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span className="border-b border-emerald-300/30 group-hover:border-emerald-300 transition-colors">
                  Ask AI Assistant
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter Content - Enhanced Reading Experience */}
      <div 
        ref={contentRef}
        className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-6 sm:p-8 lg:p-10 space-y-8 text-stone-800 leading-relaxed"
      >
        
        {chapter.sections.map((sec, index) => {
          const isExpanded = expandedSections.has(sec.id);
          const Icon = sec.icon || FileText;
          
          return (
            <div 
              key={sec.id} 
              className="group transition-all duration-300"
            >
              {/* Section Header with Toggle */}
              <div 
                className="flex items-start justify-between cursor-pointer hover:bg-stone-50/80 rounded-xl transition-colors duration-200 p-3 -mx-3"
                onClick={() => toggleSection(sec.id)}
              >
                <div className="flex items-start space-x-4 flex-1">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-200 group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all duration-300">
                    <Icon className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                      {sec.title}
                    </h2>
                    <div className="flex items-center space-x-2 text-xs text-stone-400 mt-0.5">
                      <span>Section {index + 1}</span>
                      {sec.bullets && sec.bullets.length > 0 && (
                        <>
                          <span>•</span>
                          <span>{sec.bullets.length} key points</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4 p-2 rounded-lg hover:bg-stone-100 transition-colors">
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-stone-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-stone-400" />
                  )}
                </div>
              </div>

              {/* Section Content - Collapsible */}
              {isExpanded && (
                <div className="mt-4 space-y-5 pl-14 animate-in slide-in-from-top-2 duration-300">
                  <div className="prose prose-stone max-w-none">
                    <p className="text-base text-stone-700 leading-relaxed whitespace-pre-line">
                      {sec.content}
                    </p>
                  </div>

                  {/* Bullets - Enhanced */}
                  {sec.bullets && sec.bullets.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                      {sec.bullets.map((b, i) => (
                        <div key={i} className="flex items-start space-x-3 p-3 bg-stone-50 rounded-xl border border-stone-100 hover:border-emerald-200 transition-colors duration-200">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-stone-700 leading-relaxed">{b}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Callout Box - Enhanced */}
                  {sec.callout && (
                    <div className={`p-5 rounded-2xl border-l-4 shadow-sm ${getCalloutColors(sec.callout.type).bg} ${getCalloutColors(sec.callout.type).border}`}>
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-xl bg-gradient-to-r ${getCalloutColors(sec.callout.type).gradient} shadow-md`}>
                          {React.createElement(getCalloutIcon(sec.callout.type), {
                            className: `w-4 h-4 text-white`
                          })}
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-bold text-sm ${getCalloutColors(sec.callout.type).text} mb-1`}>
                            {sec.callout.title}
                          </h4>
                          <p className={`text-sm font-medium ${getCalloutColors(sec.callout.type).text} opacity-90 leading-relaxed`}>
                            {sec.callout.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Table - Enhanced */}
                  {sec.tableData && (
                    <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-lg">
                      <table className="w-full text-xs sm:text-sm">
                        <thead className="bg-gradient-to-r from-stone-800 to-stone-900">
                          <tr>
                            {sec.tableData.headers.map((h, i) => (
                              <th key={i} className="px-4 py-3.5 text-left font-semibold text-white/90 uppercase tracking-wider">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100 bg-white">
                          {sec.tableData.rows.map((row, rIdx) => (
                            <tr key={rIdx} className={`${rIdx % 2 === 0 ? 'bg-white' : 'bg-stone-50/70'} hover:bg-emerald-50/50 transition-colors duration-150`}>
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="px-4 py-3 text-stone-700 font-medium">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* FAQ Section - Enhanced Accordion */}
        {chapter.faqs && chapter.faqs.length > 0 && (
          <div className="pt-8 border-t-2 border-stone-200/60">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                <HelpCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900">
                  Frequently Asked Questions
                </h3>
                <p className="text-xs text-stone-500">Quick answers to common questions</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {chapter.faqs.map((faq, i) => (
                <div key={i} className="group p-5 bg-stone-50/80 rounded-2xl border border-stone-200 hover:border-emerald-200 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                      <span className="text-xs font-bold text-emerald-700">Q</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-stone-900 text-sm mb-1.5">
                        {faq.question}
                      </h4>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-purple-700">A</span>
                        </div>
                        <p className="text-sm text-stone-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* End of Chapter - Enhanced Action Blocks */}
        <div className="pt-8 border-t-2 border-dashed border-stone-300 space-y-6">
          
          {/* Summary - Enhanced */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-950 to-emerald-900 p-6 border border-emerald-800/50">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-400 rounded-full blur-3xl" />
            </div>
            
            <div className="relative">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-emerald-300 uppercase tracking-wider">
                    Chapter Summary
                  </h3>
                  <p className="text-xs text-emerald-400/70">Key takeaways from this chapter</p>
                </div>
              </div>
              <ul className="space-y-2">
                {chapter.summary.map((s, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-emerald-100/90">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Checklist - Enhanced */}
          <div className="bg-gradient-to-br from-stone-50 to-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg">
                  <CheckSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
                    Chapter Checklist
                  </h3>
                  <p className="text-xs text-stone-500">
                    {chapter.checklist.length} items to complete
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowAllChecklist(!showAllChecklist)}
                className="text-xs text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
              >
                {showAllChecklist ? 'Show Less' : 'Show All'}
              </button>
            </div>
            
            <div className="space-y-2.5">
              {chapter.checklist.slice(0, showAllChecklist ? undefined : 4).map((c, i) => (
                <div key={i} className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-emerald-50/50 transition-colors duration-200">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 accent-emerald-600 rounded cursor-pointer" 
                    id={`check-${i}`}
                  />
                  <label htmlFor={`check-${i}`} className="text-sm text-stone-700 cursor-pointer flex-1">
                    {c}
                  </label>
                </div>
              ))}
              {!showAllChecklist && chapter.checklist.length > 4 && (
                <p className="text-xs text-stone-400 text-center pt-2">
                  +{chapter.checklist.length - 4} more items
                </p>
              )}
            </div>
          </div>

          {/* Action Plan - Enhanced */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-950 p-6 border border-stone-700/50 shadow-xl">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-400 rounded-full blur-3xl" />
            </div>
            
            <div className="relative">
              <div className="flex items-center space-x-3 mb-5">
                <div className="p-2 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
                    Action Plan
                  </h3>
                  <p className="text-xs text-stone-400">Your roadmap to success</p>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-emerald-300 uppercase font-semibold border-b border-emerald-800/50">
                      <th className="py-2.5 px-3 text-left">Step</th>
                      <th className="py-2.5 px-3 text-left">Action Item</th>
                      <th className="py-2.5 px-3 text-left">Target Deadline</th>
                      <th className="py-2.5 px-3 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-emerald-900/40">
                    {chapter.actionPlan.map((act, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors duration-200">
                        <td className="py-2.5 px-3 font-bold text-emerald-400">
                          {act.step}
                        </td>
                        <td className="py-2.5 px-3 text-stone-200">
                          {act.task}
                        </td>
                        <td className="py-2.5 px-3 text-emerald-300 font-medium">
                          {act.targetDeadline}
                        </td>
                        <td className="py-2.5 px-3">
                          <span className="inline-flex items-center space-x-1 px-2 py-1 bg-emerald-500/20 rounded-full text-emerald-300 text-[10px] font-medium">
                            <Clock className="w-3 h-3" />
                            <span>Pending</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>

        {/* Navigation Footer - Enhanced */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-200">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onSelectChapter(Math.max(1, chapter.id - 1))}
              disabled={chapter.id === 1}
              className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-stone-100 text-stone-700 hover:bg-stone-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 text-sm font-semibold"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            
            <div className="flex items-center space-x-2 text-xs text-stone-400">
              <span className="font-bold text-stone-600">{chapter.id}</span>
              <span>/</span>
              <span>{totalChapters}</span>
            </div>

            <button
              onClick={() => onSelectChapter(Math.min(totalChapters, chapter.id + 1))}
              disabled={chapter.id === totalChapters}
              className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 text-sm font-semibold shadow-md"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onExportPdf}
              className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-all duration-300 text-xs font-medium"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export PDF</span>
            </button>
            <button
              onClick={onOpenAiAssistant}
              className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200 transition-all duration-300 text-xs font-medium"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>AI Help</span>
            </button>
          </div>
        </div>

      </div>

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
      `}</style>
    </div>
  );
};

export default BookReader;