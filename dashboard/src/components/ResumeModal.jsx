import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  FileText, 
  Briefcase, 
  Award, 
  Sparkles, 
  Code2, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  if (!isOpen) return null;

  const resumeBullets = [
    {
      title: "Corporate Strategy & Market Entry Feasibility",
      bullet: "Engineered an end-to-end 3-year international market entry model for boAt (Imagine Marketing Ltd) expanding into the UK ($576.9M TAM), projecting £25.5M ARR and operating break-even at Month 24 across digital and selective high-street retail channels.",
    },
    {
      title: "Unit Economics & Trade Tariff Optimization",
      bullet: "Modeled a granular landed cost waterfall bridge (Califonix FOB, ocean freight, HMRC Commodity Code 8518 30 00, 20% UK VAT, UKCA, and WEEE levies), establishing a resilient 65.7% gross product margin and 21.9% net unit contribution at a £29.99 MSRP.",
    },
    {
      title: "Financial Auditing & Balance Sheet De-leveraging",
      bullet: "Synthesized 4 years of audited standalone & consolidated financials (FY23–FY26), tracking boAt's turnaround from a -₹101 Cr PAT loss to +₹921.5 Mn PAT and total liquidation of short-term bank debt to ₹0, validating self-funding feasibility from domestic cash flow.",
    },
    {
      title: "Omnichannel Channel Modeling & Sensitivity Analysis",
      bullet: "Built a dynamic React/Tailwind scenario simulator stress-testing EBITDA, break-even unit volumes, and cash burn across Amazon UK FBA, D2C Shopify, and physical wholesale retailers (Currys, Argos, Tesco, Asda) under FX and maritime shipping rate volatility.",
    },
  ];

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c0d12] border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800 bg-zinc-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Resume & Interview Portfolio Brief</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold">
                  CONFIDENTIAL
                </span>
              </h3>
              <p className="text-xs text-zinc-400">
                Tailored for Corporate Strategy, Business/Data Analyst, and Management Consulting Roles
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Executive Overview */}
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 leading-relaxed">
            <span className="font-bold text-white block mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-rose-400" /> Project Objective:
            </span>
            Demonstrate real-world corporate strategy, financial acumen, and data modeling by architecting 
            an international market expansion for India's #1 D2C hearables brand, backed by 4 years of audited financial 
            filings, post-Brexit British regulatory directives, and multi-channel unit economics.
          </div>

          {/* Copyable Resume Bullets */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              Impact Bullet Points for Your Resume / LinkedIn
            </h4>

            <div className="space-y-3">
              {resumeBullets.map((item, index) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 transition-all text-xs"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-rose-400">{item.title}</span>
                    <button
                      onClick={() => handleCopy(item.bullet, index)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-[11px] font-semibold border border-zinc-700 transition-all"
                    >
                      {copiedIndex === index ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-zinc-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-zinc-300 leading-relaxed font-sans">{item.bullet}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Frameworks Used */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" />
              Strategic Frameworks & Analytical Skills Showcased
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {[
                "TAM / SAM / SOM Market Sizing",
                "2x2 Competitive Positioning Matrix",
                "Per-Unit Margin Waterfall Bridge",
                "HMRC Tariff & VAT Act Integration",
                "Post-Brexit UKCA / WEEE Compliance",
                "3-Statement Pro-Forma Modeling",
                "Operating Break-Even Solver",
                "Monte Carlo Sensitivity Simulation",
                "Omnichannel Wholesale Economics",
              ].map((skill) => (
                <div
                  key={skill}
                  className="p-2.5 rounded-lg bg-zinc-900/40 border border-zinc-800/70 text-zinc-300 flex items-center gap-2 text-[11px]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-950/80 flex items-center justify-between text-xs text-zinc-400">
          <span>Ready to showcase in interviews as a live interactive project.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-semibold transition-all shadow-sm"
          >
            Close & Explore Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
