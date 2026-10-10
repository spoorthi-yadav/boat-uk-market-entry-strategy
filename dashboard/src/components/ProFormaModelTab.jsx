import React from 'react';
import { 
  proFormaSummary, 
  monthlyCashCurve 
} from '../data/proFormaForecastData';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ArrowUpRight,
  ShieldCheck,
  Percent,
  PiggyBank
} from 'lucide-react';

export const ProFormaModelTab = ({ currency, formatCurrency }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Header Overview */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/15 text-rose-400 border border-rose-500/30">
                3-Year Pro-Forma Income Statement & Cash Runway
              </span>
              <span className="text-zinc-500 text-xs">2027 to 2029 Rollout</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
              Financial Projections: The Path to Month-24 Break-Even & £25.5M Scale
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
              Our financial model projects an initial Phase 1 marketing and inventory testing burn 
              (-£260k EBITDA in Year 1), transitioning into operating break-even at <strong>Month 24</strong> as 
              wholesale retail distribution (Argos, Currys, Tesco) eliminates direct customer acquisition costs. 
              By <strong>Year 3</strong>, boAt UK delivers <strong>£2.26M Net Profit (10.6% PAT margin)</strong>.
            </p>
          </div>

          <div className="flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 md:border-l border-zinc-800 pt-3 md:pt-0 md:pl-6 shrink-0">
            <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
              Projected Year 3 EBITDA
            </span>
            <span className="text-2xl font-black text-emerald-400 font-mono">
              +£3.01M <span className="text-xs text-zinc-400 font-sans font-medium">(14.2% Margin)</span>
            </span>
            <span className="text-[11px] text-zinc-500 mt-1">₹31.6 Cr Operating Earnings</span>
          </div>
        </div>
      </div>

      {/* 2. Executive Returns Dashboard */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-5">
          <div className="text-xs text-zinc-400 font-medium flex items-center justify-between">
            <span>Operating Break-Even</span>
            <Clock className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="mt-2 text-2xl font-bold font-mono text-cyan-400">
            Month 22–24
          </div>
          <div className="text-[11px] text-zinc-500 mt-1">
            Exact inflection in Q4 Year 2
          </div>
        </div>

        <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-5">
          <div className="text-xs text-zinc-400 font-medium flex items-center justify-between">
            <span>Projected IRR</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-2 text-2xl font-bold font-mono text-emerald-400">
            34.2%
          </div>
          <div className="text-[11px] text-zinc-500 mt-1">
            Exceeds boAt 20% hurdle rate
          </div>
        </div>

        <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-5">
          <div className="text-xs text-zinc-400 font-medium flex items-center justify-between">
            <span>Peak Capital At-Risk</span>
            <PiggyBank className="w-4 h-4 text-amber-400" />
          </div>
          <div className="mt-2 text-2xl font-bold font-mono text-white">
            £415,000
          </div>
          <div className="text-[11px] text-zinc-500 mt-1">
            Peak cash drawdown at Month 15
          </div>
        </div>

        <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-5">
          <div className="text-xs text-zinc-400 font-medium flex items-center justify-between">
            <span>Year 3 Net PAT</span>
            <TrendingUp className="w-4 h-4 text-rose-400" />
          </div>
          <div className="mt-2 text-2xl font-bold font-mono text-white">
            £2.26M
          </div>
          <div className="text-[11px] text-emerald-400/80 mt-1">
            10.6% Net Margin (~₹23.7 Cr)
          </div>
        </div>
      </div>

      {/* 3. Monthly Cumulative Cash Flow Runway Chart (The J-Curve) */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>Cumulative Cash Flow Curve: Visualizing Month-24 Break-Even</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                J-Curve Trajectory
              </span>
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              Notice the inflection from peak capital drawdown (-£415k in Month 15) to positive cumulative cash generation at Month 24.
            </p>
          </div>

          <div className="text-xs text-zinc-400 font-mono">
            Amounts in <strong className="text-white">£000s</strong> (GBP)
          </div>
        </div>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyCashCurve} margin={{ top: 20, right: 10, left: 10, bottom: 10 }}>
              <defs>
                <linearGradient id="cashGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                  <stop offset="50%" stopColor="#e11d48" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" opacity={0.5} />
              <XAxis dataKey="month" stroke="#71717a" fontSize={11} />
              <YAxis stroke="#71717a" fontSize={11} tickFormatter={(val) => `£${val}k`} />
              <Tooltip
                contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '8px' }}
                labelStyle={{ color: '#f4f4f5', fontWeight: 'bold' }}
                formatter={(val, name, props) => [
                  `£${val}k (${props.payload.label})`,
                  'Cumulative Cash Flow'
                ]}
              />
              <ReferenceLine y={0} stroke="#71717a" strokeDasharray="3 3" label={{ value: 'Break-Even Horizon', fill: '#a1a1aa', fontSize: 10 }} />
              <Area 
                type="monotone" 
                dataKey="cumulativeCash" 
                stroke="#10b981" 
                strokeWidth={2.5}
                fill="url(#cashGradient)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3 text-xs text-zinc-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p>
            <strong>Liquidity Safety Check:</strong> Total cash burned during Phase 1 reaches a maximum of 
            <strong> -£415,000 (~₹4.3 Cr)</strong> at Month 15 before wholesale cash inflows turn the balance sheet positive. 
            boAt carries <strong>₹356 Cr in domestic liquid reserves</strong>, meaning this expansion risks less than 
            <strong> 1.2% of domestic cash holdings</strong>.
          </p>
        </div>
      </div>

      {/* 4. Complete Pro-Forma Income Statement Table */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-xl overflow-hidden">
        <h3 className="text-base font-bold text-white mb-1">
          boAt UK 3-Year Pro-Forma Financial Model (P&L Forecast)
        </h3>
        <p className="text-xs text-zinc-400 mb-4">
          All financial figures in British Pounds Sterling (£) with percentage of Net Realized Revenue
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-zinc-900 text-zinc-300 font-bold border-b border-zinc-800 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Financial Metric / Line Item</th>
                <th className="py-3 px-4">Year 1 (Digital Test)</th>
                <th className="py-3 px-4">Year 2 (Omnichannel)</th>
                <th className="py-3 px-4">Year 3 (Scale Maturity)</th>
                <th className="py-3 px-4">Strategic Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 font-mono">
              <tr className="hover:bg-zinc-900/40 font-sans">
                <td className="py-2.5 px-4 font-semibold text-white">Target Units Sold</td>
                <td className="py-2.5 px-4 font-mono text-zinc-200">120,000</td>
                <td className="py-2.5 px-4 font-mono text-zinc-200">380,000</td>
                <td className="py-2.5 px-4 font-mono text-white font-bold">850,000</td>
                <td className="py-2.5 px-4 text-emerald-400 font-sans">+166% CAGR</td>
              </tr>
              <tr className="hover:bg-zinc-900/40">
                <td className="py-2.5 px-4 font-sans font-semibold text-white">Gross Revenue (MSRP)</td>
                <td className="py-2.5 px-4 text-zinc-300">£3.60M</td>
                <td className="py-2.5 px-4 text-zinc-300">£11.40M</td>
                <td className="py-2.5 px-4 text-white font-bold">£25.50M</td>
                <td className="py-2.5 px-4 text-zinc-400 font-sans">₹267.8 Cr equiv.</td>
              </tr>
              <tr className="hover:bg-zinc-900/40 text-red-400">
                <td className="py-2.5 px-4 font-sans">Less: UK Value Added Tax (20%)</td>
                <td className="py-2.5 px-4">-£0.60M</td>
                <td className="py-2.5 px-4">-£1.90M</td>
                <td className="py-2.5 px-4">-£4.25M</td>
                <td className="py-2.5 px-4 font-sans text-zinc-400">Standard rate</td>
              </tr>
              <tr className="bg-zinc-900/60 font-bold text-white">
                <td className="py-2.5 px-4 font-sans">Net Realized Revenue</td>
                <td className="py-2.5 px-4">£3.00M (100%)</td>
                <td className="py-2.5 px-4">£9.50M (100%)</td>
                <td className="py-2.5 px-4">£21.25M (100%)</td>
                <td className="py-2.5 px-4 font-sans text-emerald-400">Top-line Basis</td>
              </tr>
              <tr className="hover:bg-zinc-900/40 text-red-400">
                <td className="py-2.5 px-4 font-sans">Landed COGS (Califonix FOB + Freight + Duty)</td>
                <td className="py-2.5 px-4">-£1.03M (34.3%)</td>
                <td className="py-2.5 px-4">-£3.26M (34.3%)</td>
                <td className="py-2.5 px-4">-£7.29M (34.3%)</td>
                <td className="py-2.5 px-4 font-sans text-zinc-400">Fixed unit cost</td>
              </tr>
              <tr className="bg-zinc-900/40 font-bold text-zinc-200">
                <td className="py-2.5 px-4 font-sans">Gross Product Profit</td>
                <td className="py-2.5 px-4 text-white">£1.97M (65.7%)</td>
                <td className="py-2.5 px-4 text-white">£6.24M (65.7%)</td>
                <td className="py-2.5 px-4 text-white">£13.96M (65.7%)</td>
                <td className="py-2.5 px-4 font-sans text-emerald-400">Resilient Margin</td>
              </tr>
              <tr className="hover:bg-zinc-900/40 text-red-400">
                <td className="py-2.5 px-4 font-sans">Channel Fees & Wholesale Discounts</td>
                <td className="py-2.5 px-4">-£0.74M (24.7%)</td>
                <td className="py-2.5 px-4">-£3.15M (33.2%)</td>
                <td className="py-2.5 px-4">-£7.12M (33.5%)</td>
                <td className="py-2.5 px-4 font-sans text-zinc-400">Shift to wholesale</td>
              </tr>
              <tr className="hover:bg-zinc-900/40 text-red-400">
                <td className="py-2.5 px-4 font-sans">Marketing & Customer Acquisition (CAC)</td>
                <td className="py-2.5 px-4">-£1.14M (38.0%)</td>
                <td className="py-2.5 px-4">-£1.85M (19.5%)</td>
                <td className="py-2.5 px-4">-£2.85M (13.4%)</td>
                <td className="py-2.5 px-4 font-sans text-emerald-400">Declining % of sales</td>
              </tr>
              <tr className="hover:bg-zinc-900/40 text-red-400">
                <td className="py-2.5 px-4 font-sans">Fixed UK Overheads (UKCA, WEEE, 3PL Staff)</td>
                <td className="py-2.5 px-4">-£0.35M (11.7%)</td>
                <td className="py-2.5 px-4">-£0.65M (6.8%)</td>
                <td className="py-2.5 px-4">-£0.98M (4.6%)</td>
                <td className="py-2.5 px-4 font-sans text-zinc-400">Operating leverage</td>
              </tr>
              <tr className="bg-zinc-900/70 font-extrabold text-white border-t border-zinc-700">
                <td className="py-3 px-4 font-sans">Operating EBITDA</td>
                <td className="py-3 px-4 text-red-400">-£0.26M (-8.7%)</td>
                <td className="py-3 px-4 text-emerald-400">+£0.59M (+6.2%)</td>
                <td className="py-3 px-4 text-emerald-400 font-black">+£3.01M (+14.2%)</td>
                <td className="py-3 px-4 font-sans text-emerald-400 font-bold">Inflects at Y2</td>
              </tr>
              <tr className="hover:bg-zinc-900/40 text-red-400">
                <td className="py-2.5 px-4 font-sans">UK Corporate Tax (25% on profits)</td>
                <td className="py-2.5 px-4">£0.00</td>
                <td className="py-2.5 px-4">-£0.15M</td>
                <td className="py-2.5 px-4">-£0.75M</td>
                <td className="py-2.5 px-4 font-sans text-zinc-400">HMRC Statutory</td>
              </tr>
              <tr className="bg-rose-950/40 font-black text-emerald-400 border-t-2 border-rose-500">
                <td className="py-3 px-4 font-sans text-sm">Net Profit After Tax (PAT)</td>
                <td className="py-3 px-4 text-red-400 text-sm">-£0.26M</td>
                <td className="py-3 px-4 text-emerald-400 text-sm">+£0.44M (4.6%)</td>
                <td className="py-3 px-4 text-emerald-400 text-sm font-black">+£2.26M (10.6%)</td>
                <td className="py-3 px-4 font-sans text-emerald-400 font-extrabold">Sustainable ARR</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
