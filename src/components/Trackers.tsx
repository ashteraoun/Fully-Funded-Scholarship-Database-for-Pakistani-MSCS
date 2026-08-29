import React, { useState, useEffect, useRef } from 'react';
import { TrackerItem, ProfContact } from '../types';
import { 
  Layers, Plus, Trash2, CheckCircle2, Clock, Mail, 
  GraduationCap, FileCheck, Save, Sparkles, Zap,
  TrendingUp, Award, Calendar, Filter, Search,
  ChevronDown, ChevronUp, Edit2, Eye, Download,
  X, Check, AlertCircle, User, Building2, Globe,
  BookOpen, Target, Trophy, Flame, Shield
} from 'lucide-react';

export const Trackers: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'docs' | 'scholarships' | 'unis' | 'profs'>('docs');
  const [isAddingDoc, setIsAddingDoc] = useState(false);
  const [isAddingProf, setIsAddingProf] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [animateId, setAnimateId] = useState<string | null>(null);

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

  // Form states for new entry
  const [newDocTitle, setNewDocTitle] = useState('');
  const [newDocCategory, setNewDocCategory] = useState('General');
  const [newDocDeadline, setNewDocDeadline] = useState('');
  
  const [newProfName, setNewProfName] = useState('');
  const [newProfUni, setNewProfUni] = useState('');
  const [newProfEmail, setNewProfEmail] = useState('');
  const [newProfArea, setNewProfArea] = useState('');
  const [newProfCountry, setNewProfCountry] = useState('');

  // Save changes
  useEffect(() => {
    localStorage.setItem('mscs_tracker_docs', JSON.stringify(docItems));
  }, [docItems]);

  useEffect(() => {
    localStorage.setItem('mscs_tracker_profs', JSON.stringify(profs));
  }, [profs]);

  // Add document with animation
  const addDocItem = () => {
    if (!newDocTitle.trim()) return;
    const newItem: TrackerItem = {
      id: Date.now().toString(),
      title: newDocTitle,
      status: 'not_started',
      category: newDocCategory,
      deadline: newDocDeadline || undefined
    };
    setDocItems([newItem, ...docItems]);
    setAnimateId(newItem.id);
    setTimeout(() => setAnimateId(null), 1000);
    setNewDocTitle('');
    setNewDocCategory('General');
    setNewDocDeadline('');
    setIsAddingDoc(false);
  };

  // Add professor with animation
  const addProfItem = () => {
    if (!newProfName.trim() || !newProfUni.trim()) return;
    const newItem: ProfContact = {
      id: Date.now().toString(),
      professorName: newProfName,
      university: newProfUni,
      country: newProfCountry || 'International',
      researchArea: newProfArea || 'Computer Science',
      email: newProfEmail || '',
      status: 'draft'
    };
    setProfs([newItem, ...profs]);
    setAnimateId(newItem.id);
    setTimeout(() => setAnimateId(null), 1000);
    setNewProfName('');
    setNewProfUni('');
    setNewProfEmail('');
    setNewProfArea('');
    setNewProfCountry('');
    setIsAddingProf(false);
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

  // Filtered documents
  const filteredDocs = docItems.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || doc.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Filtered professors
  const filteredProfs = profs.filter(prof => {
    const matchesSearch = prof.professorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prof.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prof.researchArea.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || prof.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Stats
  const docStats = {
    total: docItems.length,
    completed: docItems.filter(d => d.status === 'completed').length,
    inProgress: docItems.filter(d => d.status === 'in_progress').length,
    notStarted: docItems.filter(d => d.status === 'not_started').length
  };

  const profStats = {
    total: profs.length,
    sent: profs.filter(p => p.status === 'sent').length,
    positive: profs.filter(p => p.status === 'replied_positive').length,
    draft: profs.filter(p => p.status === 'draft').length
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'completed': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'in_progress': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'not_started': return 'bg-stone-100 text-stone-600 border-stone-200';
      case 'sent': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'replied_positive': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'replied_negative': return 'bg-red-100 text-red-800 border-red-200';
      case 'no_reply': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'draft': return 'bg-stone-100 text-stone-600 border-stone-200';
      default: return 'bg-stone-100 text-stone-600 border-stone-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'completed': return <CheckCircle2 className="w-3.5 h-3.5" />;
      case 'in_progress': return <Clock className="w-3.5 h-3.5" />;
      case 'not_started': return <AlertCircle className="w-3.5 h-3.5" />;
      case 'sent': return <Mail className="w-3.5 h-3.5" />;
      case 'replied_positive': return <Check className="w-3.5 h-3.5" />;
      case 'replied_negative': return <X className="w-3.5 h-3.5" />;
      default: return <Clock className="w-3.5 h-3.5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Personal': 'from-blue-500 to-cyan-500',
      'Academic': 'from-purple-500 to-pink-500',
      'Attestation': 'from-emerald-500 to-teal-500',
      'Testing': 'from-orange-500 to-red-500',
      'Application': 'from-indigo-500 to-purple-500',
      'Legal': 'from-amber-500 to-orange-500',
      'General': 'from-stone-500 to-stone-700'
    };
    return colors[category] || colors['General'];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-8">
        
        {/* Header Banner - Enhanced */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-stone-900 to-emerald-900 shadow-2xl border border-emerald-800/30">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-400 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="relative p-8 sm:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30">
                  <Layers className="w-4 h-4 text-emerald-300" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Interactive Student Workspace
                  </span>
                </div>
                
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                    Application Trackers
                    <span className="block text-emerald-300">Dashboard</span>
                  </h1>
                  
                  <p className="text-base sm:text-lg text-emerald-200/90 max-w-3xl mt-2 leading-relaxed">
                    Personal dashboard for Pakistani applicants to track document attestation 
                    milestones, professor cold emails, and scholarship submissions in real-time.
                  </p>
                </div>
              </div>

              <div className="flex flex-shrink-0 gap-3">
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/10">
                  <div className="flex -space-x-2">
                    {['📄', '✉️', '🎓'].map((emoji, i) => (
                      <span key={i} className="text-2xl filter drop-shadow-lg">{emoji}</span>
                    ))}
                  </div>
                  <span className="text-xs text-emerald-300 font-medium">Track Everything</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-emerald-800/40">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{docItems.length + profs.length}</div>
                <div className="text-[10px] text-emerald-300 uppercase tracking-wider">Total Items</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{docStats.completed + profStats.positive}</div>
                <div className="text-[10px] text-emerald-300 uppercase tracking-wider">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">{docStats.inProgress + profStats.sent}</div>
                <div className="text-[10px] text-emerald-300 uppercase tracking-wider">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-stone-400">{docStats.notStarted + profStats.draft}</div>
                <div className="text-[10px] text-emerald-300 uppercase tracking-wider">Pending</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs - Enhanced */}
        <div className="bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-white/50">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('docs')}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'docs'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30 scale-105'
                  : 'bg-transparent text-stone-600 hover:bg-stone-100/80 hover:text-stone-800'
              }`}
            >
              <FileCheck className="w-4 h-4" />
              <span>Document Tracker</span>
              <span className={`text-[10px] ${activeTab === 'docs' ? 'text-white/70' : 'text-stone-400'}`}>
                ({docItems.length})
              </span>
            </button>

            <button
              onClick={() => setActiveTab('profs')}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'profs'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                  : 'bg-transparent text-stone-600 hover:bg-stone-100/80 hover:text-stone-800'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Professor Tracker</span>
              <span className={`text-[10px] ${activeTab === 'profs' ? 'text-white/70' : 'text-stone-400'}`}>
                ({profs.length})
              </span>
            </button>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/50">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={`Search ${activeTab === 'docs' ? 'documents' : 'professors'}...`}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50/80 border-2 border-stone-200/80 text-sm text-stone-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs text-stone-400 font-medium">Filter:</span>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 rounded-xl bg-stone-50/80 border-2 border-stone-200/80 text-xs font-medium text-stone-700 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
              >
                <option value="all">All Status</option>
                {activeTab === 'docs' ? (
                  <>
                    <option value="completed">Completed</option>
                    <option value="in_progress">In Progress</option>
                    <option value="not_started">Not Started</option>
                  </>
                ) : (
                  <>
                    <option value="draft">Draft</option>
                    <option value="sent">Sent</option>
                    <option value="replied_positive">Positive Reply</option>
                    <option value="replied_negative">Negative Reply</option>
                    <option value="no_reply">Awaiting Reply</option>
                  </>
                )}
              </select>
            </div>
          </div>
        </div>

        {/* DOCUMENT TRACKER TAB */}
        {activeTab === 'docs' && (
          <div className="space-y-6">
            
            {/* Add Item Button */}
            {!isAddingDoc ? (
              <button
                onClick={() => setIsAddingDoc(true)}
                className="w-full py-4 rounded-2xl border-2 border-dashed border-emerald-300/50 bg-emerald-50/50 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-300 flex items-center justify-center space-x-2 text-sm font-semibold"
              >
                <Plus className="w-5 h-5" />
                <span>Add New Document or Attestation Task</span>
              </button>
            ) : (
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-200 animate-in slide-in-from-top-2 duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-stone-800">Add New Document</h3>
                  <button
                    onClick={() => setIsAddingDoc(false)}
                    className="p-1.5 rounded-lg hover:bg-stone-100 transition-colors"
                  >
                    <X className="w-4 h-4 text-stone-400" />
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    value={newDocTitle}
                    onChange={(e) => setNewDocTitle(e.target.value)}
                    placeholder="Document title..."
                    className="p-3 bg-stone-50 border-2 border-stone-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <select
                    value={newDocCategory}
                    onChange={(e) => setNewDocCategory(e.target.value)}
                    className="p-3 bg-stone-50 border-2 border-stone-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="Personal">Personal</option>
                    <option value="Academic">Academic</option>
                    <option value="Attestation">Attestation</option>
                    <option value="Testing">Testing</option>
                    <option value="Application">Application</option>
                    <option value="Legal">Legal</option>
                    <option value="General">General</option>
                  </select>
                  <input
                    type="date"
                    value={newDocDeadline}
                    onChange={(e) => setNewDocDeadline(e.target.value)}
                    className="p-3 bg-stone-50 border-2 border-stone-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={addDocItem}
                    className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 flex items-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Document</span>
                  </button>
                </div>
              </div>
            )}

            {/* Table - Enhanced */}
            <div className="bg-white rounded-2xl shadow-lg border border-white/50 overflow-hidden">
              {filteredDocs.length === 0 ? (
                <div className="text-center py-12">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="p-4 rounded-full bg-stone-100">
                      <Search className="w-8 h-8 text-stone-400" />
                    </div>
                    <h3 className="text-sm font-bold text-stone-600">No documents found</h3>
                    <p className="text-xs text-stone-400">Try adjusting your search or filter</p>
                  </div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm">
                    <thead className="bg-gradient-to-r from-stone-800 to-stone-900">
                      <tr>
                        <th className="px-4 py-3.5 text-left font-semibold text-white/90 uppercase tracking-wider">
                          Document Title
                        </th>
                        <th className="px-4 py-3.5 text-left font-semibold text-white/90 uppercase tracking-wider">
                          Category
                        </th>
                        <th className="px-4 py-3.5 text-left font-semibold text-white/90 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-4 py-3.5 text-left font-semibold text-white/90 uppercase tracking-wider">
                          Deadline
                        </th>
                        <th className="px-4 py-3.5 text-center font-semibold text-white/90 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      {filteredDocs.map((item) => (
                        <tr 
                          key={item.id} 
                          className={`hover:bg-stone-50/80 transition-colors duration-150 ${
                            animateId === item.id ? 'bg-emerald-50/50' : ''
                          }`}
                        >
                          <td className="px-4 py-3.5">
                            <div className="flex items-center space-x-2">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getCategoryColor(item.category)}`} />
                              <span className="font-semibold text-stone-800">{item.title}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3.5">
                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r ${getCategoryColor(item.category)} text-white`}>
                              {item.category}
                            </span>
                          </td>
                          <td className="px-4 py-3.5">
                            <select
                              value={item.status}
                              onChange={(e) => updateDocStatus(item.id, e.target.value as any)}
                              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold outline-none cursor-pointer border transition-all duration-200 ${getStatusColor(item.status)}`}
                            >
                              <option value="not_started">⏳ Not Started</option>
                              <option value="in_progress">🔄 In Progress</option>
                              <option value="completed">✅ Completed</option>
                            </select>
                          </td>
                          <td className="px-4 py-3.5 text-stone-600">
                            {item.deadline ? (
                              <span className="flex items-center space-x-1 text-xs">
                                <Calendar className="w-3 h-3" />
                                <span>{item.deadline}</span>
                              </span>
                            ) : (
                              <span className="text-stone-400 text-xs">No deadline</span>
                            )}
                          </td>
                          <td className="px-4 py-3.5 text-center">
                            <button
                              onClick={() => deleteDoc(item.id)}
                              className="p-2 rounded-lg text-stone-400 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

          </div>
        )}

        {/* PROFESSOR CONTACT TRACKER TAB */}
        {activeTab === 'profs' && (
          <div className="space-y-6">
            
            {/* Add Prof Button */}
            {!isAddingProf ? (
              <button
                onClick={() => setIsAddingProf(true)}
                className="w-full py-4 rounded-2xl border-2 border-dashed border-purple-300/50 bg-purple-50/50 text-purple-700 hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 flex items-center justify-center space-x-2 text-sm font-semibold"
              >
                <User className="w-5 h-5" />
                <span>Add New Professor Contact</span>
              </button>
            ) : (
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-200 animate-in slide-in-from-top-2 duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-stone-800">Add New Professor</h3>
                  <button
                    onClick={() => setIsAddingProf(false)}
                    className="p-1.5 rounded-lg hover:bg-stone-100 transition-colors"
                  >
                    <X className="w-4 h-4 text-stone-400" />
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  <input
                    type="text"
                    value={newProfName}
                    onChange={(e) => setNewProfName(e.target.value)}
                    placeholder="Professor name..."
                    className="p-3 bg-stone-50 border-2 border-stone-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                  <input
                    type="text"
                    value={newProfUni}
                    onChange={(e) => setNewProfUni(e.target.value)}
                    placeholder="University..."
                    className="p-3 bg-stone-50 border-2 border-stone-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                  <input
                    type="text"
                    value={newProfEmail}
                    onChange={(e) => setNewProfEmail(e.target.value)}
                    placeholder="Email address..."
                    className="p-3 bg-stone-50 border-2 border-stone-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                  <input
                    type="text"
                    value={newProfArea}
                    onChange={(e) => setNewProfArea(e.target.value)}
                    placeholder="Research area..."
                    className="p-3 bg-stone-50 border-2 border-stone-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                  <input
                    type="text"
                    value={newProfCountry}
                    onChange={(e) => setNewProfCountry(e.target.value)}
                    placeholder="Country..."
                    className="p-3 bg-stone-50 border-2 border-stone-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={addProfItem}
                    className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Professor</span>
                  </button>
                </div>
              </div>
            )}

            {/* Table - Enhanced */}
            <div className="bg-white rounded-2xl shadow-lg border border-white/50 overflow-hidden">
              {filteredProfs.length === 0 ? (
                <div className="text-center py-12">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="p-4 rounded-full bg-stone-100">
                      <User className="w-8 h-8 text-stone-400" />
                    </div>
                    <h3 className="text-sm font-bold text-stone-600">No professors found</h3>
                    <p className="text-xs text-stone-400">Try adjusting your search or filter</p>
                  </div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm">
                    <thead className="bg-gradient-to-r from-stone-800 to-stone-900">
                      <tr>
                        <th className="px-4 py-3.5 text-left font-semibold text-white/90 uppercase tracking-wider">
                          Professor
                        </th>
                        <th className="px-4 py-3.5 text-left font-semibold text-white/90 uppercase tracking-wider">
                          University
                        </th>
                        <th className="px-4 py-3.5 text-left font-semibold text-white/90 uppercase tracking-wider">
                          Research Focus
                        </th>
                        <th className="px-4 py-3.5 text-left font-semibold text-white/90 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-4 py-3.5 text-center font-semibold text-white/90 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      {filteredProfs.map((p) => (
                        <tr 
                          key={p.id} 
                          className={`hover:bg-stone-50/80 transition-colors duration-150 ${
                            animateId === p.id ? 'bg-purple-50/50' : ''
                          }`}
                        >
                          <td className="px-4 py-3.5">
                            <div>
                              <div className="font-semibold text-stone-800">{p.professorName}</div>
                              <div className="text-[10px] text-stone-400">{p.email}</div>
                            </div>
                          </td>
                          <td className="px-4 py-3.5">
                            <div className="flex items-center space-x-1">
                              <Building2 className="w-3 h-3 text-stone-400" />
                              <span className="text-stone-700">{p.university}</span>
                              {p.country && (
                                <span className="text-[10px] text-stone-400">({p.country})</span>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-3.5">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-purple-100 text-purple-700 text-[10px] font-medium">
                              {p.researchArea}
                            </span>
                          </td>
                          <td className="px-4 py-3.5">
                            <select
                              value={p.status}
                              onChange={(e) => updateProfStatus(p.id, e.target.value as any)}
                              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold outline-none cursor-pointer border transition-all duration-200 ${getStatusColor(p.status)}`}
                            >
                              <option value="draft">📝 Draft</option>
                              <option value="sent">📤 Sent</option>
                              <option value="replied_positive">✅ Positive</option>
                              <option value="replied_negative">❌ Negative</option>
                              <option value="no_reply">⏳ Awaiting</option>
                            </select>
                          </td>
                          <td className="px-4 py-3.5 text-center">
                            <button
                              onClick={() => deleteProf(p.id)}
                              className="p-2 rounded-lg text-stone-400 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

          </div>
        )}

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

export default Trackers;