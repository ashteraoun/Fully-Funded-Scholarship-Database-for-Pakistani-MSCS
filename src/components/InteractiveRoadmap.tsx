import React, { useState } from 'react';
import { timelineData } from '../data/timelineData';
import { Calendar, CheckCircle2, Circle, Clock, Filter, Sparkles, AlertCircle } from 'lucide-react';

export const InteractiveRoadmap: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<string>('all');
  const [completedTasks, setCompletedTasks] = useState<string[]>(() => {
    const saved = localStorage.getItem('mscs_completed_timeline_tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleTask = (taskKey: string) => {
    const updated = completedTasks.includes(taskKey)
      ? completedTasks.filter((t) => t !== taskKey)
      : [...completedTasks, taskKey];
    setCompletedTasks(updated);
    localStorage.setItem('mscs_completed_timeline_tasks', JSON.stringify(updated));
  };

  const phases = Array.from(new Set(timelineData.map((t) => t.phase)));

  const filteredData = selectedPhase === 'all'
    ? timelineData
    : timelineData.filter((t) => t.phase === selectedPhase);

  const totalActionsCount = timelineData.reduce((acc, curr) => acc + curr.keyActions.length, 0);
  const completedCount = completedTasks.length;
  const progressPercent = Math.round((completedCount / totalActionsCount) * 100) || 0;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-emerald-800/50">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-900/80 px-2.5 py-1 rounded border border-emerald-700/50">
              Interactive 24-Month Master Roadmap
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              August 2026 to September 2028 Application Cycle
            </h1>
            <p className="text-xs sm:text-sm text-emerald-200/80 mt-1">
              Track your month-by-month progress for 2027-2028 MSCS Admissions & Fully Funded Scholarships.
            </p>
          </div>

          <div className="bg-emerald-900/70 p-4 rounded-xl border border-emerald-700/60 min-w-[200px] text-center">
            <div className="text-xs text-emerald-300 font-semibold uppercase">Total Progress</div>
            <div className="text-2xl sm:text-3xl font-black text-white mt-0.5">{progressPercent}%</div>
            <div className="text-[11px] text-emerald-200/70">{completedCount} of {totalActionsCount} tasks completed</div>
            <div className="w-full bg-emerald-950 rounded-full h-2 mt-2 overflow-hidden">
              <div
                className="bg-emerald-400 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Phase Filter Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar text-xs font-medium">
        <button
          onClick={() => setSelectedPhase('all')}
          className={`px-3.5 py-2 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
            selectedPhase === 'all'
              ? 'bg-emerald-800 text-white shadow-md'
              : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
          }`}
        >
          All Phases ({timelineData.length} Months)
        </button>
        {phases.map((p, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedPhase(p)}
            className={`px-3.5 py-2 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
              selectedPhase === p
                ? 'bg-emerald-800 text-white shadow-md'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            {p.split(':')[0]}
          </button>
        ))}
      </div>

      {/* Timeline Nodes */}
      <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-1 before:bg-emerald-800/30 before:-z-0">
        {filteredData.map((item, idx) => {
          return (
            <div
              key={idx}
              className="relative pl-10 sm:pl-16 bg-white rounded-2xl p-6 shadow-md border border-stone-200 hover:shadow-lg transition-all"
            >
              {/* Timeline Indicator Badge */}
              <div className="absolute left-1.5 sm:left-5 top-6 w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs ring-4 ring-white shadow-md">
                <Calendar className="w-3.5 h-3.5" />
              </div>

              {/* Month & Title */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3 mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    {item.month} {item.year}
                  </span>
                  <span className="text-xs text-stone-500 font-medium ml-2 hidden sm:inline">
                    {item.phase}
                  </span>
                  <h3 className="text-lg font-bold text-stone-900 mt-1">
                    {item.title}
                  </h3>
                </div>

                {item.importantDeadlines.length > 0 && (
                  <div className="flex items-center space-x-1 text-xs text-amber-700 font-semibold bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Deadlines: {item.importantDeadlines.join(', ')}</span>
                  </div>
                )}
              </div>

              {/* Action Checklist */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase text-stone-500 tracking-wider">
                  Key Action Items:
                </h4>
                {item.keyActions.map((act, aIdx) => {
                  const taskKey = `${item.month}_${item.year}_${aIdx}`;
                  const isDone = completedTasks.includes(taskKey);

                  return (
                    <div
                      key={aIdx}
                      onClick={() => toggleTask(taskKey)}
                      className={`flex items-start space-x-3 p-2.5 rounded-lg border cursor-pointer transition-all ${
                        isDone
                          ? 'bg-emerald-50/70 border-emerald-200 text-stone-500 line-through'
                          : 'bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100'
                      }`}
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      ) : (
                        <Circle className="w-4 h-4 text-stone-400 mt-0.5 flex-shrink-0" />
                      )}
                      <span className="text-xs sm:text-sm font-medium leading-normal">{act}</span>
                    </div>
                  );
                })}
              </div>

              {/* Pro Tip */}
              <div className="mt-4 p-3 bg-emerald-950 text-emerald-100 rounded-xl text-xs flex items-start space-x-2 border border-emerald-800">
                <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-emerald-300">Pro Tip for {item.month}:</strong> {item.proTip}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
