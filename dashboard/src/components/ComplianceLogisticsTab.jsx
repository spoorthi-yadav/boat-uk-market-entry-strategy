import React, { useState } from 'react';
import { 
  regulatoryFrameworks, 
  threatMatrix 
} from '../data/regulatoryComplianceData';
import { 
  ShieldCheck, 
  FileCheck2, 
  Recycle, 
  Truck, 
  Receipt, 
  AlertTriangle, 
  CheckSquare, 
  Square,
  Lock,
  ExternalLink
} from 'lucide-react';

export const ComplianceLogisticsTab = () => {
  const [completedTasks, setCompletedTasks] = useState({
    docSigned: true,
    ukcaAffixed: true,
    pcsEnrolled: true,
    weeeMarked: true,
    btiCleared: false,
    hubSecured: true,
    bufferStocked: true,
  });

  const toggleTask = (key) => {
    setCompletedTasks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Header Overview */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/15 text-rose-400 border border-rose-500/30">
                UK Regulatory & Supply Chain Defense
              </span>
              <span className="text-zinc-500 text-xs">UKCA • WEEE • HMRC 8518 30 00 • 3PL Logistics</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
              Regulatory Compliance Guardrails & Supply Chain Architecture
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
              Strict adherence to UK statutory directives is non-negotiable. Border impoundments or trade delistings 
              pose the single greatest threat to cash flow. Here is boAt's complete post-Brexit compliance framework 
              and Midlands supply-chain buffer network.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
            <ShieldCheck className="w-5 h-5" />
            <div className="text-left font-mono">
              <div className="text-xs font-bold">COMPLIANCE STATUS</div>
              <div className="text-[11px] text-emerald-400/80">Audit Passed (Ready)</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. The 4 Regulatory & Operational Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {regulatoryFrameworks.map((pillar, idx) => (
          <div 
            key={pillar.pillar}
            className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-start justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-rose-400 border border-zinc-700">
                  {pillar.governingBody}
                </span>
                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                  pillar.riskLevel.includes('Critical') 
                    ? 'bg-red-500/15 text-red-400 border border-red-500/30' 
                    : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                }`}>
                  {pillar.riskLevel}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                {idx === 0 && <FileCheck2 className="w-4 h-4 text-rose-400" />}
                {idx === 1 && <Recycle className="w-4 h-4 text-emerald-400" />}
                {idx === 2 && <Receipt className="w-4 h-4 text-cyan-400" />}
                {idx === 3 && <Truck className="w-4 h-4 text-amber-400" />}
                <span>{pillar.pillar}</span>
              </h3>
              <div className="text-[11px] text-zinc-400 font-mono mb-4">{pillar.regulation}</div>

              <ul className="space-y-2 text-xs text-zinc-300">
                {pillar.requirements.map((req, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Threat Assessment & Risk Mitigation Register */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-xl">
        <h3 className="text-base font-bold text-white mb-1 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span>Operational Risk Register & C-Suite Mitigation Matrix</span>
        </h3>
        <p className="text-xs text-zinc-400 mb-4">
          Detailed preemptive safeguards addressing macroeconomic, geopolitical, and supply chain disruptions.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-zinc-900 text-zinc-300 font-bold border-b border-zinc-800 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Identified Threat / Risk</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Probability / Impact</th>
                <th className="py-3 px-4">boAt Preemptive Mitigation Strategy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 font-sans">
              {threatMatrix.map((item) => (
                <tr key={item.threat} className="hover:bg-zinc-900/40">
                  <td className="py-3 px-4 font-semibold text-white">{item.threat}</td>
                  <td className="py-3 px-4 text-zinc-400 font-mono text-[11px]">{item.category}</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-800 text-[11px] font-mono text-zinc-300">
                      P: {item.probability} | I: {item.impact}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-zinc-300 text-xs leading-relaxed">{item.mitigation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Pre-Launch Readiness Checklist */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-xl">
        <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
          <CheckSquare className="w-4 h-4 text-emerald-400" />
          <span>UK Market Launch Operational Readiness Checklist</span>
        </h3>
        <p className="text-xs text-zinc-400 mb-6">
          Interactive sign-off tracker before shipping the first sea container from Dixon/Califonix facility.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {[
            { id: 'docSigned', label: 'Declaration of Conformity (DoC) drafted & executed by boAt Compliance Officer' },
            { id: 'ukcaAffixed', label: 'UKCA mark (>5mm) printed on packaging & product chassis alongside serial number' },
            { id: 'pcsEnrolled', label: 'Enrolled in UK Producer Compliance Scheme (Valpak) for EEE recycling financing' },
            { id: 'weeeMarked', label: 'BS EN 50419 Crossed-out Wheeled Bin symbol imprinted on packaging' },
            { id: 'btiCleared', label: 'HMRC Binding Tariff Information (BTI) ruling application filed for Code 8518 30 00' },
            { id: 'hubSecured', label: 'Midlands 3PL warehousing contract signed with Birmingham logistics hub' },
            { id: 'bufferStocked', label: '60-day safety stock buffer reserved to buffer maritime shipping delays' },
          ].map((task) => {
            const isDone = completedTasks[task.id];
            return (
              <button
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                  isDone 
                    ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200' 
                    : 'bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                {isDone ? (
                  <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                )}
                <span className={`leading-relaxed ${isDone ? 'text-zinc-200' : 'text-zinc-400'}`}>
                  {task.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
