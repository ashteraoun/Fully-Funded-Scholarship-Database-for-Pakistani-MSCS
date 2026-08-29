import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Send, Copy, Check, FileText, Mail, HelpCircle, 
  Loader2, X, Star, Bot, Award, GraduationCap, Globe, 
  Shield, Zap, MessageSquare, PenTool, ChevronRight
} from 'lucide-react';

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
  const [isHovered, setIsHovered] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Animation & Auto-focus
  useEffect(() => {
    if (isOpen && textareaRef.current) {
      setTimeout(() => textareaRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Close on backdrop click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

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
        setResponseOutput(`⚠️ Error: ${data.error}`);
      } else {
        setResponseOutput(data.result);
      }
    } catch (err: any) {
      setResponseOutput(`⚠️ Network error: ${err.message || 'Failed to generate response.'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(responseOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tools = [
    { id: 'sop' as const, label: 'SOP Reviewer', icon: FileText, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-50', activeBg: 'bg-gradient-to-r from-blue-600 to-cyan-600' },
    { id: 'email' as const, label: 'Email Draft', icon: Mail, color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-50', activeBg: 'bg-gradient-to-r from-purple-600 to-pink-600' },
    { id: 'qa' as const, label: 'HEC Advisor', icon: HelpCircle, color: 'from-emerald-500 to-teal-500', bgColor: 'bg-emerald-50', activeBg: 'bg-gradient-to-r from-emerald-600 to-teal-600' }
  ];

  const getToolDetails = () => {
    switch(activeTool) {
      case 'sop':
        return {
          label: 'Paste Your Statement of Purpose',
          placeholder: 'Paste your SOP draft here for instant technical feedback & improvements...',
          icon: FileText,
          color: 'text-blue-600',
          bgColor: 'bg-blue-50'
        };
      case 'email':
        return {
          label: 'Professor & Research Details',
          placeholder: 'e.g. Professor Andrew Ng, Stanford AI Lab, my research is on Deep Learning object detection...',
          icon: Mail,
          color: 'text-purple-600',
          bgColor: 'bg-purple-50'
        };
      case 'qa':
        return {
          label: 'Ask About HEC, IBCC, MOFA & Scholarships',
          placeholder: 'e.g. How do I get my FAST NUCES Karachi degree attested at HEC Gulshan center?',
          icon: HelpCircle,
          color: 'text-emerald-600',
          bgColor: 'bg-emerald-50'
        };
    }
  };

  const toolDetails = getToolDetails();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        ref={modalRef}
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-hidden shadow-2xl border border-white/20 relative transform transition-all animate-in slide-in-from-bottom-4 duration-500"
        style={{ 
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.1)'
        }}
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50 opacity-50 pointer-events-none" />
        
        {/* Decorative Glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />

        {/* Header Section */}
        <div className="relative p-6 sm:p-8 border-b border-gray-200/60 bg-white/80 backdrop-blur-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl blur-lg opacity-60 animate-pulse" />
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                  <Bot className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  AI Scholarship Assistant
                </h2>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-semibold tracking-wider">
                    <Zap className="w-2.5 h-2.5 mr-1" />
                    Gemini AI
                  </span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">Pakistani MSCS Applicants</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="relative group p-2 rounded-xl hover:bg-gray-100 transition-all duration-200"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </button>
          </div>
        </div>

        {/* Content Area - Scrollable */}
        <div className="relative p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[calc(95vh-180px)] custom-scrollbar">
          
          {/* Tool Selectors - Modern Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {tools.map((tool) => {
              const Icon = tool.icon;
              const isActive = activeTool === tool.id;
              return (
                <button
                  key={tool.id}
                  onClick={() => { setActiveTool(tool.id); setResponseOutput(''); }}
                  className={`relative group px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] ${
                    isActive
                      ? `${tool.activeBg} text-white shadow-lg shadow-${tool.id === 'sop' ? 'blue' : tool.id === 'email' ? 'purple' : 'emerald'}-500/30`
                      : 'bg-gray-100/80 text-gray-600 hover:bg-gray-200/80 hover:text-gray-800'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-700'}`} />
                    <span>{tool.label}</span>
                  </div>
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-white rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Input Section */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className={`p-1.5 rounded-lg ${toolDetails.bgColor}`}>
                  <toolDetails.icon className={`w-4 h-4 ${toolDetails.color}`} />
                </div>
                <label className="text-sm font-semibold text-gray-700">
                  {toolDetails.label}
                </label>
                <span className="text-xs text-gray-400">• Required</span>
              </div>
              <div className="relative">
                <textarea
                  ref={textareaRef}
                  rows={4}
                  value={promptInput}
                  onChange={(e) => setPromptInput(e.target.value)}
                  placeholder={toolDetails.placeholder}
                  className="w-full p-4 rounded-2xl bg-gray-50/80 border-2 border-gray-200/80 font-sans text-gray-800 outline-none transition-all duration-200 focus:border-emerald-400 focus:bg-white focus:shadow-lg text-sm resize-none placeholder:text-gray-400/70"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
                <div className="absolute bottom-3 right-3 text-[10px] text-gray-400 font-medium">
                  {promptInput.length} chars
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-600">
                <GraduationCap className="w-4 h-4" />
                <span>Optional Context</span>
                <span className="text-xs text-gray-400 font-normal">• CGPA, Target Scholarship, etc.</span>
              </label>
              <input
                type="text"
                value={contextInput}
                onChange={(e) => setContextInput(e.target.value)}
                placeholder="e.g. CGPA 3.4, BSCS from FAST Karachi, applying for Erasmus Mundus / Fulbright"
                className="w-full px-4 py-3 rounded-2xl bg-gray-50/80 border-2 border-gray-200/80 text-sm text-gray-700 outline-none transition-all duration-200 focus:border-emerald-400 focus:bg-white focus:shadow-lg placeholder:text-gray-400/70"
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isLoading || !promptInput.trim()}
              className="relative w-full group overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center space-x-3 px-6 py-4">
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-white/80" />
                    <span>Analyzing with Gemini AI...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-white/80 group-hover:rotate-12 transition-transform" />
                    <span>
                      {activeTool === 'sop' && 'Review & Improve My SOP'}
                      {activeTool === 'email' && 'Draft Cold Email'}
                      {activeTool === 'qa' && 'Get Expert Advice'}
                    </span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </div>
            </button>
          </div>

          {/* Response Output */}
          {responseOutput && (
            <div className="mt-6 animate-in slide-in-from-bottom-2 duration-300">
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 shadow-xl">
                {/* Decorative gradient line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 rounded-t-2xl" />
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="p-1.5 rounded-lg bg-emerald-500/20">
                      <Bot className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-sm font-semibold text-emerald-400">
                      AI Guidance Result
                    </span>
                    <span className="text-[10px] text-gray-500 font-medium bg-gray-700/50 px-2 py-0.5 rounded-full">
                      Gemini AI
                    </span>
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white transition-all duration-200 text-xs font-medium"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                
                <div className="relative">
                  <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-emerald-400 via-blue-400 to-purple-400 opacity-30" />
                  <div className="pl-4 whitespace-pre-line font-mono text-xs sm:text-sm text-gray-200 leading-relaxed max-h-60 overflow-y-auto custom-scrollbar">
                    {responseOutput}
                  </div>
                </div>

                {/* Bottom gradient fade for long content */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-900/80 to-transparent pointer-events-none" />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="relative px-6 sm:px-8 py-4 border-t border-gray-200/60 bg-white/80 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-4 text-xs text-gray-400">
            <span className="flex items-center space-x-1">
              <Shield className="w-3 h-3" />
              <span>Encrypted</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Globe className="w-3 h-3" />
              <span>Pakistan Specific</span>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-1">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center border-2 border-white">
                <span className="text-[8px] text-white font-bold">AI</span>
              </div>
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center border-2 border-white">
                <span className="text-[8px] text-white font-bold">★</span>
              </div>
            </div>
            <span className="text-[10px] text-gray-400 font-medium">
              Powered by Gemini Pro
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-from-bottom-4 {
          from { 
            opacity: 0;
            transform: translateY(1rem);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in-from-bottom-2 {
          from { 
            opacity: 0;
            transform: translateY(0.5rem);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-in {
          animation-fill-mode: both;
        }
        .fade-in {
          animation-name: fade-in;
          animation-duration: 300ms;
        }
        .slide-in-from-bottom-4 {
          animation-name: slide-in-from-bottom-4;
          animation-duration: 500ms;
        }
        .slide-in-from-bottom-2 {
          animation-name: slide-in-from-bottom-2;
          animation-duration: 300ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
    </div>
  );
};

export default AiAssistantModal;