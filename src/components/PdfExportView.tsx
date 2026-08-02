import React from 'react';
import { chaptersData } from '../data/guideData';
import { countriesData } from '../data/countriesData';
import { scholarshipsData } from '../data/scholarshipsData';
import { attestationData } from '../data/attestationData';
import { timelineData } from '../data/timelineData';
import { documentsData } from '../data/documentsData';
import { Printer, Download, BookOpen, ShieldCheck, CheckSquare } from 'lucide-react';

interface PdfExportViewProps {
  onBackToReader: () => void;
}

export const PdfExportView: React.FC<PdfExportViewProps> = ({ onBackToReader }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-stone-100 py-8 px-4 sm:px-6">
      
      {/* Top Floating Control Bar (Hidden during actual window.print()) */}
      <div className="print:hidden max-w-5xl mx-auto bg-stone-900 text-white p-4 rounded-xl shadow-xl mb-8 flex flex-wrap items-center justify-between gap-4 border border-stone-800 sticky top-20 z-30">
        <div>
          <h2 className="text-sm sm:text-base font-bold text-emerald-400">
            PDF Publication Preview & Export Mode
          </h2>
          <p className="text-xs text-stone-300">
            Formatted as a publication-ready book guide with Cover Page, TOC, Flowcharts, and Appendices.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={onBackToReader}
            className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-stone-800 text-stone-300 hover:text-white border border-stone-700 cursor-pointer"
          >
            Back to Book Reader
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold bg-emerald-500 text-stone-950 hover:bg-emerald-400 transition-all shadow-md cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print or Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Printable Book Canvas */}
      <div id="pdf-book-content" className="max-w-4xl mx-auto bg-white text-stone-900 shadow-2xl p-8 sm:p-12 font-serif leading-relaxed border border-stone-300 print:shadow-none print:p-0 print:border-none">
        
        {/* ==================================================================== */}
        {/* COVER PAGE */}
        {/* ==================================================================== */}
        <div className="min-h-[900px] flex flex-col justify-between p-8 sm:p-12 border-8 border-double border-emerald-950 bg-gradient-to-b from-emerald-50/50 via-white to-stone-50 rounded-lg text-center relative overflow-hidden print:min-h-screen print:border-8">
          
          <div className="space-y-4 pt-8">
            <span className="inline-block bg-emerald-950 text-emerald-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-emerald-800">
              OFFICIAL 2027-2028 EDITION
            </span>
            <p className="text-xs uppercase tracking-widest text-stone-500 font-semibold font-sans">
              FOR PAKISTANI COMPUTER SCIENCE GRADUATES • KARACHI SPECIAL EDITION
            </p>
          </div>

          <div className="space-y-6 my-12">
            <h1 className="text-3xl sm:text-5xl font-black text-emerald-950 tracking-tight leading-tight uppercase font-sans">
              Ultimate 2027-2028 Fully Funded Master's Scholarship Guide
            </h1>
            <p className="text-base sm:text-xl font-medium text-stone-700 max-w-2xl mx-auto italic">
              Step-by-Step International Admissions, HEC & MOFA Attestation Roadmap, University Supervisor Hunting, and Visa Guide for Pakistani CS Students
            </p>
          </div>

          <div className="bg-emerald-950 text-white p-6 rounded-xl border border-emerald-800 font-sans text-xs space-y-2 text-center max-w-xl mx-auto shadow-lg">
            <p className="font-bold text-emerald-300 text-sm">
              COMPLETE 11-CHAPTER COMPREHENSIVE GUIDEBOOK
            </p>
            <p className="text-stone-300">
              Includes 27 Country Analysis • 20+ Major Scholarships • Karachi HEC/IBCC/MOFA Steps • 100 FAQs • 50 Pro Tips • Printable Trackers
            </p>
          </div>

          <div className="pt-8 border-t border-stone-300 flex items-center justify-between text-xs text-stone-500 font-sans">
            <div>Published for Pakistani Applicants</div>
            <div>Target Cycle: Fall 2027 / Spring 2028</div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* TABLE OF CONTENTS */}
        {/* ==================================================================== */}
        <div className="page-break-before py-12 border-b border-stone-300 font-sans">
          <h2 className="text-2xl font-bold uppercase text-emerald-950 border-b-2 border-emerald-900 pb-2 mb-6">
            Table of Contents
          </h2>
          
          <div className="space-y-3 text-xs sm:text-sm">
            {chaptersData.map((ch) => (
              <div key={ch.id} className="flex items-center justify-between border-b border-stone-100 pb-1.5">
                <span className="font-bold text-stone-900">
                  {ch.title}
                </span>
                <span className="text-stone-500 italic">
                  Chapter {ch.id}
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between border-b border-stone-100 pb-1.5 font-bold text-emerald-900">
              <span>APPENDIX A: 100 Most Frequently Asked Questions</span>
              <span>Page FAQ</span>
            </div>
            <div className="flex items-center justify-between border-b border-stone-100 pb-1.5 font-bold text-emerald-900">
              <span>APPENDIX B: 50 Common Mistakes & 50 Pro Tips</span>
              <span>Page Tips</span>
            </div>
            <div className="flex items-center justify-between border-b border-stone-100 pb-1.5 font-bold text-emerald-900">
              <span>APPENDIX C: Printable Master Checklist & Trackers</span>
              <span>Page Trackers</span>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* CHAPTERS RENDER */}
        {/* ==================================================================== */}
        {chaptersData.map((ch) => (
          <div key={ch.id} className="page-break-before py-10 space-y-8">
            
            {/* Chapter Header */}
            <div className="border-b-4 border-emerald-900 pb-4 font-sans">
              <span className="text-xs font-bold uppercase text-emerald-700 tracking-wider">
                Chapter {ch.id}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
                {ch.title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-medium italic mt-1">
                {ch.subtitle}
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-6 text-sm text-stone-800 leading-relaxed font-sans">
              {ch.sections.map((sec) => (
                <div key={sec.id} className="space-y-2">
                  <h3 className="text-base font-bold text-stone-900 border-b border-stone-200 pb-1 mt-4">
                    {sec.title}
                  </h3>
                  <p className="text-xs sm:text-sm whitespace-pre-line text-stone-700">
                    {sec.content}
                  </p>

                  {sec.bullets && (
                    <ul className="list-disc list-inside space-y-1 text-xs text-stone-700 pl-2">
                      {sec.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  )}

                  {sec.callout && (
                    <div className="p-3 bg-emerald-50 border-l-4 border-emerald-700 rounded text-xs text-emerald-950 font-medium my-3">
                      <strong>{sec.callout.title}:</strong> {sec.callout.message}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Chapter End Summary */}
            <div className="p-4 bg-stone-900 text-stone-100 rounded-lg text-xs font-sans space-y-2">
              <h4 className="font-bold text-emerald-400 uppercase tracking-wider">
                ✔ Chapter {ch.id} Summary & Checklist
              </h4>
              <ul className="list-disc list-inside space-y-1 text-stone-300">
                {ch.summary.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>

          </div>
        ))}

        {/* ==================================================================== */}
        {/* APPENDIX: KARACHI ATTESTATION GUIDE TABLE */}
        {/* ==================================================================== */}
        <div className="page-break-before py-10 font-sans space-y-6">
          <h2 className="text-2xl font-bold uppercase text-emerald-950 border-b-2 border-emerald-900 pb-2">
            Karachi Degree Attestation Reference Table
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-stone-300">
              <thead className="bg-stone-900 text-white uppercase">
                <tr>
                  <th className="p-2 border">Document</th>
                  <th className="p-2 border">Attestation Sequence</th>
                  <th className="p-2 border">Karachi Office</th>
                  <th className="p-2 border">Approx Fees</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {attestationData.map((att, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                    <td className="p-2 border font-bold text-stone-900">{att.documentType}</td>
                    <td className="p-2 border text-stone-700">{att.sequence.join(' -> ')}</td>
                    <td className="p-2 border text-stone-700">{att.karachiOfficeLocation}</td>
                    <td className="p-2 border text-stone-900 font-medium">{att.feesApprox}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-12 border-t border-stone-300 text-center text-xs text-stone-500 font-sans">
          End of Official PDF Guide • Ultimate 2027-2028 Fully Funded Master's Scholarship Guide for Pakistani Students
        </div>

      </div>
    </div>
  );
};
