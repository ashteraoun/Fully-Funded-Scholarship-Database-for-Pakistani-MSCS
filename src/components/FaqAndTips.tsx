import React, { useState } from 'react';
import { faqsData } from '../data/faqsData';
import { commonMistakes, proTips } from '../data/mistakesAndTips';
import { HelpCircle, AlertTriangle, Lightbulb, Search, Filter } from 'lucide-react';

export const FaqAndTips: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'faqs' | 'mistakes' | 'tips'>('faqs');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'General & Eligibility', 'Degree Attestation', 'Scholarships & Funding', 'Visa & Finances', 'Document Preparation', 'Cold Emailing & Professors'];

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredMistakes = commonMistakes.filter((m) =>
    m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTips = proTips.filter((t) =>
    t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-emerald-800/50">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2">
          <HelpCircle className="w-4 h-4 text-emerald-400" />
          <span>Knowledge Bank • 100 FAQs & Golden Guidelines</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          100 FAQs, 50 Common Mistakes & 50 Pro Tips
        </h1>
        <p className="text-xs sm:text-sm text-emerald-200/90 mt-1 max-w-3xl">
          Searchable repository answering every common dilemma faced by Pakistani computer science applicants.
        </p>
      </div>

      {/* Sub Tabs */}
      <div className="flex items-center space-x-2 border-b border-stone-200 pb-2">
        <button
          onClick={() => setActiveSubTab('faqs')}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
            activeSubTab === 'faqs'
              ? 'bg-emerald-800 text-white shadow-md'
              : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>100 FAQs ({faqsData.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('mistakes')}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
            activeSubTab === 'mistakes'
              ? 'bg-amber-800 text-white shadow-md'
              : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
          }`}
        >
          <AlertTriangle className="w-4 h-4" />
          <span>50 Common Mistakes ({commonMistakes.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('tips')}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
            activeSubTab === 'tips'
              ? 'bg-teal-800 text-white shadow-md'
              : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
          }`}
        >
          <Lightbulb className="w-4 h-4" />
          <span>50 Pro Tips ({proTips.length})</span>
        </button>
      </div>

      {/* Search Input */}
      <div className="bg-white p-4 rounded-2xl shadow-md border border-stone-200 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search questions, attestation queries, or tips..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs sm:text-sm text-stone-800 focus:ring-2 focus:ring-emerald-600 outline-none"
          />
        </div>

        {activeSubTab === 'faqs' && (
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs font-bold text-stone-800 outline-none w-full md:w-64"
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat === 'all' ? 'All Categories' : cat}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* FAQs LIST */}
      {activeSubTab === 'faqs' && (
        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <div key={faq.id} className="bg-white p-5 rounded-2xl shadow-md border border-stone-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  {faq.category}
                </span>
                <span className="text-[10px] font-semibold text-stone-400">
                  FAQ #{faq.id}
                </span>
              </div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                Q: {faq.question}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                A: {faq.answer}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* MISTAKES LIST */}
      {activeSubTab === 'mistakes' && (
        <div className="space-y-4">
          {filteredMistakes.map((m) => (
            <div key={m.id} className="bg-amber-50/60 p-5 rounded-2xl shadow-md border border-amber-200 space-y-2">
              <h3 className="font-bold text-amber-950 text-sm sm:text-base flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>{m.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {m.description}
              </p>
              <div className="p-2.5 bg-amber-100/80 rounded-xl text-xs text-amber-950 font-semibold border border-amber-300/60">
                💡 {m.impactOrFix}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* PRO TIPS LIST */}
      {activeSubTab === 'tips' && (
        <div className="space-y-4">
          {filteredTips.map((t) => (
            <div key={t.id} className="bg-emerald-50/60 p-5 rounded-2xl shadow-md border border-emerald-200 space-y-2">
              <h3 className="font-bold text-emerald-950 text-sm sm:text-base flex items-center space-x-2">
                <Lightbulb className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{t.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {t.description}
              </p>
              <div className="p-2.5 bg-emerald-100/80 rounded-xl text-xs text-emerald-950 font-semibold border border-emerald-300/60">
                ✨ {t.impactOrFix}
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
