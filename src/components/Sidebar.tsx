import React from 'react';
import { BookOpen, CheckCircle, ChevronRight, Bookmark, Sparkles } from 'lucide-react';
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
  return (
    <aside className="w-full lg:w-80 bg-stone-900 text-stone-200 border-r border-stone-800 p-4 space-y-6 flex-shrink-0">
      
      {/* Book Status Overview */}
      <div className="bg-stone-800/80 rounded-xl p-4 border border-stone-700/60 shadow-inner">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Reading Progress
          </span>
          <span className="text-xs font-semibold text-stone-300">
            {completedChapters.length} / {chapters.length} Chapters ({Math.round((completedChapters.length / chapters.length) * 100)}%)
          </span>
        </div>
        <div className="w-full bg-stone-700 rounded-full h-2 overflow-hidden">
          <div
            className="bg-emerald-500 h-full transition-all duration-300 rounded-full"
            style={{ width: `${(completedChapters.length / chapters.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Chapter List */}
      <div>
        <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3 px-1 flex items-center justify-between">
          <span>Table of Contents</span>
          <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
        </h3>

        <nav className="space-y-1">
          {chapters.map((ch) => {
            const isSelected = ch.id === currentChapterId;
            const isFinished = completedChapters.includes(ch.id);

            return (
              <div
                key={ch.id}
                onClick={() => setCurrentChapterId(ch.id)}
                className={`group flex items-start justify-between p-3 rounded-lg cursor-pointer transition-all duration-150 border ${
                  isSelected
                    ? 'bg-emerald-950/70 text-white border-emerald-600/60 shadow-md'
                    : 'bg-stone-800/40 text-stone-300 border-transparent hover:bg-stone-800 hover:text-white'
                }`}
              >
                <div className="flex items-start space-x-2.5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleComplete(ch.id);
                    }}
                    className="mt-0.5 text-stone-500 hover:text-emerald-400 transition-colors"
                    title={isFinished ? 'Mark as unread' : 'Mark as finished'}
                  >
                    <CheckCircle
                      className={`w-4 h-4 ${
                        isFinished ? 'text-emerald-400 fill-emerald-950' : 'text-stone-600'
                      }`}
                    />
                  </button>
                  <div>
                    <h4 className="text-xs font-semibold leading-snug line-clamp-2">
                      Ch {ch.id}: {ch.title.split(':')[1] || ch.title}
                    </h4>
                    <span className="text-[10px] text-stone-400 font-normal">
                      {ch.readingTimeMinutes} min read
                    </span>
                  </div>
                </div>

                <ChevronRight
                  className={`w-4 h-4 mt-1 flex-shrink-0 transition-transform ${
                    isSelected ? 'text-emerald-400 translate-x-0.5' : 'text-stone-600 group-hover:text-stone-400'
                  }`}
                />
              </div>
            );
          })}
        </nav>
      </div>

      {/* Guide Note Box */}
      <div className="p-3 bg-emerald-950/40 rounded-lg border border-emerald-800/40 text-xs text-emerald-200/90 leading-relaxed">
        <div className="flex items-center space-x-1.5 font-bold text-emerald-300 mb-1">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Karachi Student Tip</span>
        </div>
        This guide includes specific Karachi office locations (BSEK Nazimabad, BIEK, HEC Gulshan, MOFA FTC) and verified fees for 2027-2028 applicants.
      </div>
    </aside>
  );
};
