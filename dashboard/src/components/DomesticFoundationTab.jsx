import React from 'react';
import { 
  historicalFinancials, 
  segmentBreakdownFY26, 
  strategicAssets 
} from '../data/boAtFinancialData';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { 
  Building2, 
  Coins, 
  Flame, 
  CheckCircle, 
  Globe, 
  Cpu, 
  ShieldCheck,
  TrendingDown,
  ArrowUpRight
} from 'lucide-react';

export const DomesticFoundationTab = ({ currency, formatCurrency }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Header Overview Banner */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                Audited Financial Baseline
              </span>
              <span className="text-zinc-500 text-xs">FY 2022-23 to FY 2025-26</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
              The Expansion War Chest: How boAt's Domestic Engine Backs the UK Play
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
              Audited financials confirm that boAt (Imagine Marketing Ltd) successfully completed a 
              massive balance-sheet restructuring: <strong>liquidating all short-term bank debt to ₹0</strong>, 
              reversing historical losses into <strong>₹921.5 Mn PAT</strong>, and building a <strong>₹350+ Cr liquid war chest</strong>. 
              The company enters the UK with pristine capital flexibility and proven export momentum.
            </p>
          </div>

          <div className="flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 md:border-l border-zinc-800 pt-3 md:pt-0 md:pl-6 shrink-0">
            <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
              FY26 Short-Term Bank Debt
            </span>
            <span className="text-2xl font-black text-emerald-400 font-mono">
              ₹0.00 <span className="text-xs text-zinc-400 font-sans font-medium">(Paid in Full)</span>
            </span>
            <span className="text-[11px] text-zinc-500 mt-1">Down from ₹733 Cr in FY23</span>
          </div>
        </div>
      </div>

      {/* 2. Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-5">
          <div className="flex items-center justify-between text-xs text-zinc-400 font-medium">
            <span>Domestic Revenue (FY26)</span>
            <Building2 className="w-4 h-4 text-rose-400" />
          </div>
          <div className="mt-2 text-2xl font-bold text-white font-mono">
            ₹2,928 Cr
          </div>
          <div className="text-[11px] text-zinc-500 mt-1">
            Normalized scale after post-COVID correction
          </div>
        </div>

        <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-5">
          <div className="flex items-center justify-between text-xs text-zinc-400 font-medium">
            <span>Profit Turnaround (PAT)</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-2 text-2xl font-bold text-emerald-400 font-mono">
            +₹92.15 Cr
          </div>
          <div className="text-[11px] text-emerald-500/80 mt-1">
            ₹921.5M Standalone PAT (vs -₹101 Cr FY23)
          </div>
        </div>

        <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-5">
          <div className="flex items-center justify-between text-xs text-zinc-400 font-medium">
            <span>Liquid Cash & FDs</span>
            <Coins className="w-4 h-4 text-amber-400" />
          </div>
          <div className="mt-2 text-2xl font-bold text-white font-mono">
            ₹356.9 Cr
          </div>
          <div className="text-[11px] text-zinc-500 mt-1">
            Includes ₹102 Cr debt mutual funds + FDs
          </div>
        </div>

        <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-5">
          <div className="flex items-center justify-between text-xs text-zinc-400 font-medium">
            <span>Export Sales Acceleration</span>
            <Globe className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="mt-2 text-2xl font-bold text-cyan-400 font-mono">
            ₹41.90 Cr
          </div>
          <div className="text-[11px] text-cyan-400/80 mt-1">
            +258% YoY surge (validates international demand)
          </div>
        </div>
      </div>

      {/* 3. Financial Trajectory Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Revenue vs PAT Turnaround */}
        <div className="lg:col-span-7 bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-white">Revenue vs. Net Profit (PAT) Trajectory</h3>
              <p className="text-xs text-zinc-400">Audited Standalone Figures in ₹ Crores (FY23–FY26)</p>
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
              Audited
            </span>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={historicalFinancials} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" opacity={0.6} />
                <XAxis dataKey="year" stroke="#71717a" fontSize={11} />
                <YAxis stroke="#71717a" fontSize={11} tickFormatter={(val) => `₹${val}`} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '8px' }}
                  labelStyle={{ color: '#f4f4f5', fontWeight: 'bold' }}
                  formatter={(val, name) => [`₹${val} Cr`, name === 'revenue' ? 'Revenue' : 'Net Profit (PAT)']}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                <Bar dataKey="revenue" name="Total Revenue (₹ Cr)" fill="#3f3f46" radius={[4, 4, 0, 0]} />
                <Bar dataKey="pat" name="Net Profit (PAT) (₹ Cr)" fill="#e11d48" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-3 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-[11px] text-zinc-300 leading-relaxed">
            <strong>Key Insight:</strong> Revenue stabilized around ₹3,000 Cr while operating profitability jumped from 
            <strong> -3.1% in FY23</strong> to <strong>+3.2% in FY26</strong> as discounting eased and obsolescence write-downs ceased.
          </div>
        </div>

        {/* Right: De-leveraging: Debt Elimination vs Cash Buffer */}
        <div className="lg:col-span-5 bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-white">Aggressive Balance Sheet De-leveraging</h3>
              <p className="text-xs text-zinc-400">Bank Debt paid off to zero against rising cash reserves</p>
            </div>
            <TrendingDown className="w-4 h-4 text-emerald-400" />
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={historicalFinancials} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" opacity={0.6} />
                <XAxis dataKey="year" stroke="#71717a" fontSize={11} />
                <YAxis stroke="#71717a" fontSize={11} tickFormatter={(val) => `₹${val}`} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '8px' }}
                  labelStyle={{ color: '#f4f4f5', fontWeight: 'bold' }}
                  formatter={(val, name) => [`₹${val} Cr`, name === 'bankDebt' ? 'Short-Term Bank Debt' : 'Cash & Liquid Assets']}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                <Line 
                  type="monotone" 
                  dataKey="bankDebt" 
                  name="Bank Borrowings" 
                  stroke="#ef4444" 
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: '#ef4444' }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="cashEquivalents" 
                  name="Liquid Reserves" 
                  stroke="#10b981" 
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: '#10b981' }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 leading-relaxed">
            <strong>Solvency Verdict:</strong> boAt has unencumbered credit lines (over ₹516 Cr undrawn facilities) and zero debt 
            repayment pressures, creating the perfect window for a self-funded international rollout.
          </div>
        </div>
      </div>

      {/* 4. Segment Distribution & Strategic Moats */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* FY26 Product Mix */}
        <div className="lg:col-span-5 bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-white mb-1">FY26 Product Segment Contribution</h3>
            <p className="text-xs text-zinc-400 mb-4">Audited Revenue Breakdown (₹2,928 Cr Standalone)</p>
            
            <div className="h-56 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={segmentBreakdownFY26}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    paddingAngle={4}
                  >
                    {segmentBreakdownFY26.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '8px' }}
                    formatter={(val) => [`₹${val} Cr`, 'Revenue']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-2 mt-2">
              {segmentBreakdownFY26.map((seg) => (
                <div key={seg.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: seg.color }}></span>
                    <span className="text-zinc-300 font-medium truncate max-w-[220px]">{seg.name}</span>
                  </div>
                  <span className="font-mono font-bold text-white">{seg.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-[11px] text-zinc-500 border-t border-zinc-800/80 pt-3 mt-4">
            Hearables (TWS/Audio) remain boAt's core cash cow, accounting for ~80% of corporate turnover.
          </div>
        </div>

        {/* Strategic Moats Supporting UK Entry */}
        <div className="lg:col-span-7 bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-base font-bold text-white mb-1">Sourcing & Operational Moats</h3>
          <p className="text-xs text-zinc-400 mb-4">Key internal assets deployed to execute the UK expansion</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strategicAssets.map((asset) => (
              <div 
                key={asset.title} 
                className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-rose-400 border border-zinc-700">
                      {asset.badge}
                    </span>
                    <span className="text-xs font-mono font-extrabold text-white">{asset.stat}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{asset.title}</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{asset.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
