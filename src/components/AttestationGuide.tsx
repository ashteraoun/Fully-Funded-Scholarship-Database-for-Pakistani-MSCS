import React, { useState } from 'react';
import { attestationData } from '../data/attestationData';
import { Building2, FileCheck, DollarSign, MapPin, AlertTriangle, CheckCircle, ArrowDown, ExternalLink } from 'lucide-react';

export const AttestationGuide: React.FC = () => {
  const [selectedDocIndex, setSelectedDocIndex] = useState<number>(2); // Default to Bachelor Degree
  const [locationCity, setLocationCity] = useState<'karachi' | 'lahore' | 'islamabad'>('karachi');

  const selectedDoc = attestationData[selectedDocIndex];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-emerald-800/50">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2">
          <FileCheck className="w-4 h-4 text-emerald-400" />
          <span>Chapter 6 • Official Pakistani Legal Attestation Flow</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Pakistani Educational Degree Attestation Guide
        </h1>
        <p className="text-xs sm:text-sm text-emerald-200/90 mt-1 max-w-3xl">
          Step-by-step verification order for Matric, Intermediate, BS Computer Science degree, HEC, IBCC, MOFA, and foreign embassies with Karachi office locations.
        </p>
      </div>

      {/* Document Selector & City Selector */}
      <div className="bg-white p-6 rounded-2xl shadow-md border border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
            Select Document to Attest:
          </label>
          <select
            value={selectedDocIndex}
            onChange={(e) => setSelectedDocIndex(Number(e.target.value))}
            className="w-full p-3 rounded-xl bg-stone-50 border border-stone-300 font-semibold text-stone-800 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
          >
            {attestationData.map((doc, idx) => (
              <option key={idx} value={idx}>
                {doc.documentType}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
            Select Your Location in Pakistan:
          </label>
          <div className="flex items-center space-x-2">
            {(['karachi', 'lahore', 'islamabad'] as const).map((city) => (
              <button
                key={city}
                onClick={() => setLocationCity(city)}
                className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  locationCity === city
                    ? 'bg-emerald-800 text-white shadow-md'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Attestation Flowchart */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-stone-200 space-y-6">
        <h2 className="text-lg font-bold text-stone-900 border-b border-stone-200 pb-3 flex items-center justify-between">
          <span>Mandatory Step-by-Step Sequence for {selectedDoc.documentType}</span>
          <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded font-semibold border border-emerald-200">
            Strict Legal Order
          </span>
        </h2>

        {/* Flow Diagram Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
          {selectedDoc.sequence.map((step, idx) => (
            <div
              key={idx}
              className="bg-stone-900 text-white p-4 rounded-xl border border-stone-800 flex flex-col justify-between space-y-2 relative shadow-md"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-500 text-stone-950 flex items-center justify-center font-bold text-xs">
                {idx + 1}
              </div>
              <p className="text-xs font-bold text-emerald-200 leading-snug">
                {step}
              </p>
              {idx < selectedDoc.sequence.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-emerald-400 font-bold">
                  ➔
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Office Locations & Fees Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Office Location Card */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-stone-200 space-y-3">
          <div className="flex items-center space-x-2 text-emerald-700 font-bold text-sm">
            <Building2 className="w-4 h-4" />
            <span className="uppercase text-xs tracking-wider">Official Office Location ({locationCity})</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
            {locationCity === 'karachi' && selectedDoc.karachiOfficeLocation}
            {locationCity === 'lahore' && selectedDoc.lahoreOfficeLocation}
            {locationCity === 'islamabad' && selectedDoc.islamabadOfficeLocation}
          </p>
        </div>

        {/* Fees Approx Card */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-stone-200 space-y-3">
          <div className="flex items-center space-x-2 text-emerald-700 font-bold text-sm">
            <DollarSign className="w-4 h-4" />
            <span className="uppercase text-xs tracking-wider">Estimated Verification Fees</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
            {selectedDoc.feesApprox}
          </p>
        </div>

        {/* Attestation Authority Card */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-stone-200 space-y-3">
          <div className="flex items-center space-x-2 text-emerald-700 font-bold text-sm">
            <FileCheck className="w-4 h-4" />
            <span className="uppercase text-xs tracking-wider">Primary Attesting Body</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
            {selectedDoc.authorityName}
          </p>
        </div>

      </div>

      {/* Online, Physical & Courier Procedures */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-stone-200 space-y-6">
        <h3 className="text-base font-bold text-stone-900 border-b border-stone-200 pb-2">
          Walk-in vs Courier Execution Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
            <h4 className="font-bold text-emerald-900 text-xs uppercase tracking-wider">
              🌐 Online e-Portal Process
            </h4>
            <p className="text-stone-700 leading-relaxed">{selectedDoc.onlineProcess}</p>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
            <h4 className="font-bold text-emerald-900 text-xs uppercase tracking-wider">
              🏛️ Physical Walk-in Process
            </h4>
            <p className="text-stone-700 leading-relaxed">{selectedDoc.physicalProcess}</p>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
            <h4 className="font-bold text-emerald-900 text-xs uppercase tracking-wider">
              📦 Courier Service (TCS)
            </h4>
            <p className="text-stone-700 leading-relaxed">{selectedDoc.courierProcess}</p>
          </div>
        </div>
      </div>

      {/* Common Problems & Solutions */}
      <div className="bg-stone-900 text-stone-100 p-6 sm:p-8 rounded-2xl shadow-xl border border-stone-800 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center space-x-2">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span>Common Problems & Verified Solutions</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 bg-stone-800/80 rounded-xl border border-stone-700">
            <h4 className="font-bold text-amber-300 mb-2">❌ Common Issues:</h4>
            <ul className="list-disc list-inside space-y-1.5 text-stone-300">
              {selectedDoc.commonProblems.map((prob, i) => (
                <li key={i}>{prob}</li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-stone-800/80 rounded-xl border border-stone-700">
            <h4 className="font-bold text-emerald-400 mb-2">✔ Pro Solutions:</h4>
            <ul className="list-disc list-inside space-y-1.5 text-stone-300">
              {selectedDoc.solutions.map((sol, i) => (
                <li key={i}>{sol}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};
