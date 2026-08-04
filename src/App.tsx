/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { BookReader } from './components/BookReader';
import { PdfExportView } from './components/PdfExportView';
import { InteractiveRoadmap } from './components/InteractiveRoadmap';
import { AttestationGuide } from './components/AttestationGuide';
import { CountryExplorer } from './components/CountryExplorer';
import { ScholarshipExplorer } from './components/ScholarshipExplorer';
import { Trackers } from './components/Trackers';
import { AiAssistantModal } from './components/AiAssistantModal';
import { FaqAndTips } from './components/FaqAndTips';

import { chaptersData } from './data/guideData';

export default function App() {
  const [activeView, setActiveView] = useState<string>('reader');
  const [currentChapterId, setCurrentChapterId] = useState<number>(1);
  const [completedChapters, setCompletedChapters] = useState<number[]>(() => {
    const saved = localStorage.getItem('mscs_completed_chapters');
    return saved ? JSON.parse(saved) : [];
  });
  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const toggleChapterComplete = (id: number) => {
    const updated = completedChapters.includes(id)
      ? completedChapters.filter((c) => c !== id)
      : [...completedChapters, id];
    setCompletedChapters(updated);
    localStorage.setItem('mscs_completed_chapters', JSON.stringify(updated));
  };

  const handleExportPdf = () => {
    setIsExporting(true);
    setActiveView('pdf_preview');
    setTimeout(() => {
      setIsExporting(false);
    }, 800);
  };

  const currentChapter = chaptersData.find((ch) => ch.id === currentChapterId) || chaptersData[0];

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* Global Header */}
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        onExportPdf={handleExportPdf}
        isExporting={isExporting}
      />

      {/* Main View Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {activeView === 'reader' && (
          <div className="flex-1 flex flex-col lg:flex-row min-w-0">
            <Sidebar
              chapters={chaptersData}
              currentChapterId={currentChapterId}
              setCurrentChapterId={setCurrentChapterId}
              completedChapters={completedChapters}
              onToggleComplete={toggleChapterComplete}
            />
            <BookReader
              chapter={currentChapter}
              totalChapters={chaptersData.length}
              onSelectChapter={setCurrentChapterId}
              onExportPdf={handleExportPdf}
              onOpenAiAssistant={() => setIsAiModalOpen(true)}
            />
          </div>
        )}

        {activeView === 'pdf_preview' && (
          <PdfExportView onBackToReader={() => setActiveView('reader')} />
        )}

        {activeView === 'roadmap' && <InteractiveRoadmap />}

        {activeView === 'attestation' && <AttestationGuide />}

        {activeView === 'scholarships' && <ScholarshipExplorer />}

        {activeView === 'countries' && <CountryExplorer />}

        {activeView === 'trackers' && <Trackers />}

        {activeView === 'ai_assistant' && (
          <div className="flex-1 p-6 flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg text-center space-y-4 border border-stone-200">
              <h2 className="text-xl font-bold text-stone-900">
                AI Scholarship & Admission Assistant
              </h2>
              <p className="text-xs text-stone-600">
                Use Gemini AI to review your SOP drafts, draft cold emails to CS professors, or ask custom Karachi/HEC attestation questions.
              </p>
              <button
                onClick={() => setIsAiModalOpen(true)}
                className="px-6 py-3 bg-emerald-800 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-all shadow-md cursor-pointer"
              >
                Launch AI Assistant Tool
              </button>
            </div>
          </div>
        )}

        {activeView === 'faqs' && <FaqAndTips />}
      </main>

      {/* AI Assistant Modal */}
      <AiAssistantModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
      />

      {/* Global Footer */}
      <footer className="bg-stone-900 text-stone-400 py-6 text-center text-xs border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 space-y-1">
          <p className="font-semibold text-stone-300">
            Ultimate 2027-2028 Fully Funded Master's Scholarship Guide for Pakistani Students
          </p>
          <p className="text-stone-500 text-[11px]">
            Tailored for Pakistani CS Graduates • HEC, IBCC, MOFA & Embassy Verification Rules
          </p>
        </div>
      </footer>

    </div>
  );
}
