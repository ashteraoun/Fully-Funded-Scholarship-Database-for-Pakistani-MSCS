import React, { useState, useEffect } from 'react';
import { TrackerItem, ProfContact } from '../types';
import { Layers, Plus, Trash2, CheckCircle2, Clock, Mail, GraduationCap, FileCheck, Save } from 'lucide-react';

export const Trackers: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'docs' | 'scholarships' | 'unis' | 'profs'>('docs');

  // Documents Tracker State
  const [docItems, setDocItems] = useState<TrackerItem[]>(() => {
    const saved = localStorage.getItem('mscs_tracker_docs');
    return saved ? JSON.parse(saved) : [
      { id: '1', title: 'Machine Readable Passport (10-Yr)', status: 'completed', category: 'Personal', deadline: '2026-08-15' },
      { id: '2', title: 'BSCS Transcript & Degree (University Sealed)', status: 'completed', category: 'Academic' },
      { id: '3', title: 'HEC Online e-Portal Degree Attestation', status: 'in_progress', category: 'Attestation', deadline: '2026-09-01' },
      { id: '4', title: 'IBCC Matric & Inter Attestation', status: 'completed', category: 'Attestation' },
      { id: '5', title: 'MOFA Karachi Attestation Stamp', status: 'not_started', category: 'Attestation', deadline: '2026-09-15' },
      { id: '6', title: 'IELTS Academic Test (Band 7.5 Target)', status: 'in_progress', category: 'Testing', deadline: '2026-09-30' },
      { id: '7', title: 'Master Statement of Purpose (SOP)', status: 'in_progress', category: 'Application', deadline: '2026-10-15' },
      { id: '8', title: '3 Recommendation Letters (LORs)', status: 'not_started', category: 'Application', deadline: '2026-10-30' },
      { id: '9', title: 'Karachi Police Clearance Certificate', status: 'not_started', category: 'Legal', deadline: '2027-05-01' }
    ];
  });

  // Professor Contacts Tracker State
  const [profs, setProfs] = useState<ProfContact[]>(() => {
    const saved = localStorage.getItem('mscs_tracker_profs');
    return saved ? JSON.parse(saved) : [
      { id: '1', professorName: 'Dr. Andrew Ng', university: 'Stanford University', country: 'USA', researchArea: 'AI & Deep Learning', email: 'ang@cs.stanford.edu', status: 'sent', emailSentDate: '2026-10-01' },
      { id: '2', professorName: 'Prof. Jürgen Schmidhuber', university: 'TU Munich', country: 'Germany', researchArea: 'Recurrent Neural Networks', email: 'juergen@tum.de', status: 'draft' }
    ];
  });

  // Save changes
  useEffect(() => {
    localStorage.setItem('mscs_tracker_docs', JSON.stringify(docItems));
  }, [docItems]);

  useEffect(() => {
    localStorage.setItem('mscs_tracker_profs', JSON.stringify(profs));
  }, [profs]);

  // Form states for new entry
  const [newDocTitle, setNewDocTitle] = useState('');
  const [newProfName, setNewProfName] = useState('');
  const [newProfUni, setNewProfUni] = useState('');
  const [newProfEmail, setNewProfEmail] = useState('');
  const [newProfArea, setNewProfArea] = useState('');

  const addDocItem = () => {
    if (!newDocTitle.trim()) return;
    const newItem: TrackerItem = {
      id: Date.now().toString(),
      title: newDocTitle,
      status: 'not_started',
      category: 'General'
    };
    setDocItems([...docItems, newItem]);
    setNewDocTitle('');
  };

  const addProfItem = () => {
    if (!newProfName.trim() || !newProfUni.trim()) return;
    const newItem: ProfContact = {
      id: Date.now().toString(),
      professorName: newProfName,
      university: newProfUni,
      country: 'International',
      researchArea: newProfArea || 'Computer Science',
      email: newProfEmail || '',
      status: 'draft'
    };
    setProfs([...profs, newItem]);
    setNewProfName('');
    setNewProfUni('');
    setNewProfEmail('');
    setNewProfArea('');
  };

  const deleteDoc = (id: string) => {
    setDocItems(docItems.filter((d) => d.id !== id));
  };

  const deleteProf = (id: string) => {
    setProfs(profs.filter((p) => p.id !== id));
  };

  const updateDocStatus = (id: string, status: TrackerItem['status']) => {
    setDocItems(docItems.map((d) => (d.id === id ? { ...d, status } : d)));
  };

  const updateProfStatus = (id: string, status: ProfContact['status']) => {
    setProfs(profs.map((p) => (p.id === id ? { ...p, status } : p)));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-emerald-800/50">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2">
          <Layers className="w-4 h-4 text-emerald-400" />
          <span>Interactive Student Workspace</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          My MSCS Application & Scholarship Trackers
        </h1>
        <p className="text-xs sm:text-sm text-emerald-200/90 mt-1 max-w-3xl">
          Personal dashboard for Pakistani applicants to track document attestation milestones, professor cold emails, and scholarship submissions in real-time.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center space-x-2 border-b border-stone-200 pb-2">
        <button
          onClick={() => setActiveTab('docs')}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === 'docs'
              ? 'bg-emerald-800 text-white shadow-md'
              : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
          }`}
        >
          <FileCheck className="w-4 h-4" />
          <span>Document & Attestation Tracker</span>
        </button>

        <button
          onClick={() => setActiveTab('profs')}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === 'profs'
              ? 'bg-emerald-800 text-white shadow-md'
              : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
          }`}
        >
          <Mail className="w-4 h-4" />
          <span>Professor Cold Email Tracker</span>
        </button>
      </div>

      {/* DOCUMENT TRACKER TAB */}
      {activeTab === 'docs' && (
        <div className="space-y-6">
          
          {/* Add Item Bar */}
          <div className="bg-white p-4 rounded-2xl shadow-md border border-stone-200 flex gap-3">
            <input
              type="text"
              value={newDocTitle}
              onChange={(e) => setNewDocTitle(e.target.value)}
              placeholder="Add custom document or attestation task..."
              className="flex-1 p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm outline-none focus:ring-2 focus:ring-emerald-600"
            />
            <button
              onClick={addDocItem}
              className="px-4 py-2.5 bg-emerald-800 text-white rounded-xl font-bold text-xs hover:bg-emerald-700 transition-all cursor-pointer flex items-center space-x-1"
            >
              <Plus className="w-4 h-4" />
              <span>Add Document</span>
            </button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl shadow-md border border-stone-200 overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead className="bg-stone-900 text-stone-100 font-semibold uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">Document Title</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {docItems.map((item) => (
                  <tr key={item.id} className="hover:bg-stone-50">
                    <td className="px-4 py-3 font-bold text-stone-900">{item.title}</td>
                    <td className="px-4 py-3">
                      <span className="bg-stone-100 px-2 py-0.5 rounded text-[11px] font-semibold text-stone-600">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={item.status}
                        onChange={(e) => updateDocStatus(item.id, e.target.value as any)}
                        className={`p-1.5 rounded-lg text-xs font-bold outline-none cursor-pointer ${
                          item.status === 'completed'
                            ? 'bg-emerald-100 text-emerald-900'
                            : item.status === 'in_progress'
                            ? 'bg-amber-100 text-amber-900'
                            : 'bg-stone-100 text-stone-700'
                        }`}
                      >
                        <option value="not_started">Not Started</option>
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed / Attested</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => deleteDoc(item.id)}
                        className="text-stone-400 hover:text-red-600 cursor-pointer p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      )}

      {/* PROFESSOR CONTACT TRACKER TAB */}
      {activeTab === 'profs' && (
        <div className="space-y-6">
          
          {/* Add Prof Form */}
          <div className="bg-white p-4 rounded-2xl shadow-md border border-stone-200 grid grid-cols-1 sm:grid-cols-5 gap-3">
            <input
              type="text"
              value={newProfName}
              onChange={(e) => setNewProfName(e.target.value)}
              placeholder="Prof Name"
              className="p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs outline-none"
            />
            <input
              type="text"
              value={newProfUni}
              onChange={(e) => setNewProfUni(e.target.value)}
              placeholder="University"
              className="p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs outline-none"
            />
            <input
              type="text"
              value={newProfEmail}
              onChange={(e) => setNewProfEmail(e.target.value)}
              placeholder="Email Address"
              className="p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs outline-none"
            />
            <input
              type="text"
              value={newProfArea}
              onChange={(e) => setNewProfArea(e.target.value)}
              placeholder="Research Area (AI/Systems)"
              className="p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs outline-none"
            />
            <button
              onClick={addProfItem}
              className="py-2.5 bg-emerald-800 text-white rounded-xl font-bold text-xs hover:bg-emerald-700 cursor-pointer flex items-center justify-center space-x-1"
            >
              <Plus className="w-4 h-4" />
              <span>Add Prof</span>
            </button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl shadow-md border border-stone-200 overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead className="bg-stone-900 text-stone-100 font-semibold uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">Professor</th>
                  <th className="px-4 py-3">University</th>
                  <th className="px-4 py-3">Research Focus</th>
                  <th className="px-4 py-3">Reply Status</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {profs.map((p) => (
                  <tr key={p.id} className="hover:bg-stone-50">
                    <td className="px-4 py-3 font-bold text-stone-900">
                      <div>{p.professorName}</div>
                      <div className="text-[10px] text-stone-400 font-normal">{p.email}</div>
                    </td>
                    <td className="px-4 py-3 text-stone-700">{p.university}</td>
                    <td className="px-4 py-3 text-stone-700">{p.researchArea}</td>
                    <td className="px-4 py-3">
                      <select
                        value={p.status}
                        onChange={(e) => updateProfStatus(p.id, e.target.value as any)}
                        className={`p-1.5 rounded-lg text-xs font-bold outline-none cursor-pointer ${
                          p.status === 'replied_positive'
                            ? 'bg-emerald-100 text-emerald-900'
                            : p.status === 'sent'
                            ? 'bg-amber-100 text-amber-900'
                            : p.status === 'replied_negative'
                            ? 'bg-red-100 text-red-900'
                            : 'bg-stone-100 text-stone-700'
                        }`}
                      >
                        <option value="draft">Draft Prepared</option>
                        <option value="sent">Email Sent</option>
                        <option value="replied_positive">Positive Reply! 🎉</option>
                        <option value="replied_negative">No Opening</option>
                        <option value="no_reply">Awaiting Reply</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => deleteProf(p.id)}
                        className="text-stone-400 hover:text-red-600 cursor-pointer p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      )}

    </div>
  );
};
