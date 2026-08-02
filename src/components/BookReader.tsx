import React from 'react';
import { Chapter } from '../types';
import { BookOpen, CheckSquare, Lightbulb, AlertTriangle, Building2, ChevronLeft, ChevronRight, HelpCircle, Calendar, ArrowRight, ShieldCheck, Download } from 'lucide-react';

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
  return (
    <div className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Book Title Banner / Cover Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-900 text-white rounded-2xl p-6 sm:p-8 shadow-2xl mb-8 border border-emerald-800/40 relative overflow-hidden">
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-emerald-800/60 pb-4">
          <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>Official Guidebook • Karachi CS Edition</span>
          </div>
          <div className="text-xs text-stone-300 font-medium bg-stone-800/80 px-3 py-1 rounded-full border border-stone-700/60">
            Chapter {chapter.id} of {totalChapters}
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2 leading-tight">
          {chapter.title}
        </h1>
        <p className="text-sm sm:text-base text-emerald-200/90 font-medium max-w-3xl">
          {chapter.subtitle}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-emerald-800/40 text-xs">
          <span className="flex items-center space-x-1 text-emerald-300">
            <Calendar className="w-3.5 h-3.5" />
            <span>Target Cycle: 2027-2028 Intakes</span>
          </span>
          <span className="text-stone-500">•</span>
          <span className="text-stone-300">{chapter.readingTimeMinutes} min read</span>
          <span className="text-stone-500">•</span>
          <button
            onClick={onOpenAiAssistant}
            className="text-emerald-300 hover:text-white underline font-semibold cursor-pointer"
          >
            Ask AI Assistant About This Chapter
          </button>
        </div>
      </div>

      {/* Chapter Sections Content */}
      <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-6 sm:p-10 space-y-10 text-stone-800 leading-relaxed font-sans">
        
        {chapter.sections.map((sec) => (
          <div key={sec.id} className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 border-b-2 border-emerald-600/30 pb-2">
              {sec.title}
            </h2>

            <p className="text-base text-stone-700 leading-relaxed font-normal whitespace-pre-line">
              {sec.content}
            </p>

            {/* Bullets */}
            {sec.bullets && sec.bullets.length > 0 && (
              <ul className="space-y-2.5 my-4 pl-2">
                {sec.bullets.map((b, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-stone-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                    <span className="leading-normal">{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Callout Box */}
            {sec.callout && (
              <div
                className={`p-4 sm:p-5 rounded-xl border-l-4 shadow-sm my-5 ${
                  sec.callout.type === 'tip'
                    ? 'bg-emerald-50 border-emerald-600 text-emerald-950'
                    : sec.callout.type === 'warning'
                    ? 'bg-amber-50 border-amber-600 text-amber-950'
                    : 'bg-teal-50 border-teal-600 text-teal-950'
                }`}
              >
                <div className="flex items-center space-x-2 font-bold text-sm mb-1">
                  {sec.callout.type === 'tip' && <Lightbulb className="w-4 h-4 text-emerald-600" />}
                  {sec.callout.type === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-600" />}
                  {sec.callout.type === 'karachi-special' && <Building2 className="w-4 h-4 text-teal-600" />}
                  <span>{sec.callout.title}</span>
                </div>
                <p className="text-xs sm:text-sm font-medium leading-relaxed">
                  {sec.callout.message}
                </p>
              </div>
            )}

            {/* Render Table Data if available */}
            {sec.tableData && (
              <div className="overflow-x-auto my-6 border border-stone-200 rounded-xl shadow-sm">
                <table className="w-full text-xs sm:text-sm text-left">
                  <thead className="bg-stone-900 text-stone-100 font-semibold uppercase tracking-wider">
                    <tr>
                      {sec.tableData.headers.map((h, i) => (
                        <th key={i} className="px-4 py-3 border-b border-stone-700">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 bg-white">
                    {sec.tableData.rows.map((row, rIdx) => (
                      <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-stone-50/70'}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-4 py-3 text-stone-700 font-medium">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}

        {/* Chapter FAQs */}
        {chapter.faqs && chapter.faqs.length > 0 && (
          <div className="pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 flex items-center space-x-2 mb-4">
              <HelpCircle className="w-5 h-5 text-emerald-600" />
              <span>Chapter {chapter.id} Frequently Asked Questions</span>
            </h3>
            <div className="space-y-3">
              {chapter.faqs.map((faq, i) => (
                <div key={i} className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                  <h4 className="font-bold text-stone-900 text-sm mb-1">
                    Q: {faq.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    A: {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* End of Chapter Blocks: Summary, Checklist, Action Plan */}
        <div className="pt-8 border-t-2 border-dashed border-stone-300 space-y-6">
          
          {/* Summary Callout */}
          <div className="bg-emerald-950 text-emerald-100 p-5 rounded-xl border border-emerald-800">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-300 flex items-center space-x-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>✔ Chapter {chapter.id} Summary</span>
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-100/90 list-disc list-inside">
              {chapter.summary.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Checklist */}
          <div className="bg-stone-50 p-5 rounded-xl border border-stone-200">
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 flex items-center space-x-2 mb-3">
              <CheckSquare className="w-4 h-4 text-emerald-600" />
              <span>✔ Chapter {chapter.id} Checklist</span>
            </h3>
            <div className="space-y-2">
              {chapter.checklist.map((c, i) => (
                <div key={i} className="flex items-center space-x-3 text-xs sm:text-sm text-stone-700">
                  <input type="checkbox" className="w-4 h-4 accent-emerald-600 rounded cursor-pointer" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Plan */}
          <div className="bg-gradient-to-r from-stone-900 to-emerald-950 text-white p-5 rounded-xl border border-emerald-800">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-300 flex items-center space-x-2 mb-3">
              <ArrowRight className="w-4 h-4 text-emerald-400" />
              <span>✔ Chapter {chapter.id} Action Plan</span>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="text-emerald-300 uppercase font-semibold border-b border-emerald-800">
                  <tr>
                    <th className="py-2 px-2">Step</th>
                    <th className="py-2 px-2">Action Item</th>
                    <th className="py-2 px-2">Target Deadline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-900/60 text-stone-200">
                  {chapter.actionPlan.map((act, i) => (
                    <tr key={i}>
                      <td className="py-2 px-2 font-bold text-emerald-400">{act.step}</td>
                      <td className="py-2 px-2">{act.task}</td>
                      <td className="py-2 px-2 font-medium text-emerald-200">{act.targetDeadline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Chapter Navigation Footer */}
        <div className="pt-6 flex items-center justify-between border-t border-stone-200 gap-4">
          <button
            onClick={() => onSelectChapter(Math.max(1, chapter.id - 1))}
            disabled={chapter.id === 1}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-stone-100 text-stone-700 hover:bg-stone-200 disabled:opacity-40 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Chapter</span>
          </button>

          <button
            onClick={onExportPdf}
            className="hidden sm:flex items-center space-x-2 px-3 py-2 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-emerald-600" />
            <span>Export Book to PDF</span>
          </button>

          <button
            onClick={() => onSelectChapter(Math.min(totalChapters, chapter.id + 1))}
            disabled={chapter.id === totalChapters}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-emerald-700 text-white hover:bg-emerald-800 disabled:opacity-40 cursor-pointer"
          >
            <span>Next Chapter</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
