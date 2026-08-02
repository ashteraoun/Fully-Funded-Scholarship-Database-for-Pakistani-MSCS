import React, { useState } from 'react';
import { Sparkles, Send, Copy, Check, FileText, Mail, HelpCircle, Loader2 } from 'lucide-react';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ isOpen, onClose }) => {
  const [activeTool, setActiveTool] = useState<'sop' | 'email' | 'qa'>('sop');
  const [promptInput, setPromptInput] = useState('');
  const [contextInput, setContextInput] = useState('');
  const [responseOutput, setResponseOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleGenerate = async () => {
    if (!promptInput.trim()) return;

    setIsLoading(true);
    setResponseOutput('');

    try {
      const res = await fetch('/api/ai/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: promptInput,
          type: activeTool === 'sop' ? 'sop_review' : activeTool === 'email' ? 'professor_email' : 'attestation_query',
          context: {
            userLocation: 'Karachi, Pakistan',
            degreeTarget: 'Master of Science in Computer Science (MSCS)',
            cycle: '2027-2028',
            additionalContext: contextInput
          }
        })
      });

      const data = await res.json();
      if (data.error) {
        setResponseOutput(`Error: ${data.error}`);
      } else {
        setResponseOutput(data.result);
      }
    } catch (err: any) {
      setResponseOutput(`Network error: ${err.message || 'Failed to generate response.'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(responseOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 relative">
        
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-stone-400 hover:text-stone-900 font-bold text-lg p-2 cursor-pointer"
        >
          ✕
        </button>

        {/* Title Header */}
        <div className="flex items-center space-x-3 border-b border-stone-200 pb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-stone-950 shadow-md">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-stone-900">
              AI Scholarship & Admission Assistant
            </h2>
            <p className="text-xs text-stone-500 font-medium">
              Powered by Gemini AI • Tailored specifically for Pakistani MSCS Applicants
            </p>
          </div>
        </div>

        {/* Tool Selectors */}
        <div className="flex items-center space-x-2 border-b border-stone-100 pb-2">
          <button
            onClick={() => { setActiveTool('sop'); setResponseOutput(''); }}
            className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTool === 'sop' ? 'bg-emerald-800 text-white' : 'bg-stone-100 text-stone-600'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>SOP Reviewer</span>
          </button>

          <button
            onClick={() => { setActiveTool('email'); setResponseOutput(''); }}
            className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTool === 'email' ? 'bg-emerald-800 text-white' : 'bg-stone-100 text-stone-600'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Professor Cold Email Draft</span>
          </button>

          <button
            onClick={() => { setActiveTool('qa'); setResponseOutput(''); }}
            className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTool === 'qa' ? 'bg-emerald-800 text-white' : 'bg-stone-100 text-stone-600'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Karachi & HEC Attestation Advisor</span>
          </button>
        </div>

        {/* Inputs */}
        <div className="space-y-4 text-xs sm:text-sm">
          <div>
            <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1 text-xs">
              {activeTool === 'sop' && 'Paste Your Statement of Purpose Paragraph / Draft:'}
              {activeTool === 'email' && 'Enter Professor Name, University, Research Lab & Your FYP Project:'}
              {activeTool === 'qa' && 'Ask Any Question About HEC, IBCC, MOFA, or Scholarship Applications:'}
            </label>
            <textarea
              rows={4}
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
              placeholder={
                activeTool === 'sop'
                  ? 'Paste a paragraph from your SOP draft here for instant technical feedback & improvements...'
                  : activeTool === 'email'
                  ? 'e.g. Professor Andrew Ng, Stanford AI Lab, my research is on Deep Learning object detection...'
                  : 'e.g. How do I get my FAST NUCES Karachi degree attested at HEC Gulshan center?'
              }
              className="w-full p-3 rounded-xl bg-stone-50 border border-stone-300 font-sans text-stone-800 outline-none focus:ring-2 focus:ring-emerald-600 text-xs sm:text-sm"
            />
          </div>

          <div>
            <label className="block font-bold text-stone-600 uppercase tracking-wider mb-1 text-[11px]">
              Optional Background / CGPA / Target Scholarship Context:
            </label>
            <input
              type="text"
              value={contextInput}
              onChange={(e) => setContextInput(e.target.value)}
              placeholder="e.g. CGPA 3.4, BSCS from FAST Karachi, applying for Erasmus Mundus / Fulbright"
              className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 outline-none"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={isLoading || !promptInput.trim()}
            className="w-full py-3 rounded-xl bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-all shadow-md flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-emerald-300" />
                <span>Analyzing with Gemini AI...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <span>
                  {activeTool === 'sop' && 'Review & Improve My SOP'}
                  {activeTool === 'email' && 'Draft Cold Email To Professor'}
                  {activeTool === 'qa' && 'Ask AI Consultant'}
                </span>
              </>
            )}
          </button>
        </div>

        {/* Output */}
        {responseOutput && (
          <div className="mt-6 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 space-y-3 relative text-xs sm:text-sm leading-relaxed">
            <div className="flex items-center justify-between border-b border-stone-800 pb-2">
              <span className="font-bold text-emerald-400 uppercase tracking-wider text-xs">
                AI Guidance Result:
              </span>
              <button
                onClick={copyToClipboard}
                className="flex items-center space-x-1 px-2.5 py-1 bg-stone-800 text-emerald-300 rounded hover:bg-stone-700 font-semibold text-[11px] cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Result'}</span>
              </button>
            </div>
            <div className="whitespace-pre-line font-mono text-xs sm:text-sm text-stone-200 leading-relaxed">
              {responseOutput}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
