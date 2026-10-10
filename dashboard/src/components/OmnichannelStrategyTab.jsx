import React from 'react';
import { 
  retailChannelComparison, 
  ukMarketSizing 
} from '../data/ukMarketData';
import { 
  channelVolumeProjection 
} from '../data/proFormaForecastData';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { 
  Store, 
  ShoppingBag, 
  Truck, 
  CheckCircle2, 
  Building, 
  Layers, 
  TrendingUp,
  Percent,
  Calendar,
  AlertCircle
} from 'lucide-react';

export const OmnichannelStrategyTab = ({ currency, formatCurrency }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Header Overview */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/15 text-rose-400 border border-rose-500/30">
                Go-To-Market & Retail Distribution
              </span>
              <span className="text-zinc-500 text-xs">Amazon FBA + D2C + Argos + Currys + Supermarkets</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
              Multi-Channel Omnichannel Playbook: From Digital Native to British High-Street
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
              To win in the UK, boAt executes a dual-speed distribution strategy. In <strong>Year 1</strong>, we deploy an 
              asset-light digital model via <strong>Amazon.co.uk (FBA) and Shopify D2C</strong>. Once brand search volume is proven, 
              <strong> Year 2 & 3</strong> unlocks high-volume physical distribution across <strong>Argos, Currys</strong> and 
              supermarket giants (<strong>Tesco Extra, Sainsbury's, and Asda</strong>).
            </p>
          </div>

          <div className="flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 md:border-l border-zinc-800 pt-3 md:pt-0 md:pl-6 shrink-0">
            <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
              Total Year 3 Unit Volume
            </span>
            <span className="text-2xl font-black text-white font-mono">
              850,000 <span className="text-xs text-rose-400 font-sans font-medium">Units</span>
            </span>
            <span className="text-[11px] text-zinc-500 mt-1">50% Digital / 50% Wholesale Retail</span>
          </div>
        </div>
      </div>

      {/* 2. Channel Volume Evolution Chart */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>Channel Volume Mix Progression (Year 1 to Year 3)</span>
              <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-semibold">
                Units per Channel
              </span>
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              Notice how wholesale channels (Currys, Argos, Supermarkets) absorb 50% of volume by Year 3, stabilizing CAC.
            </p>
          </div>

          <div className="text-xs text-zinc-400 flex items-center gap-4">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-rose-500"></span> Amazon FBA</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-amber-500"></span> D2C Shopify</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-blue-500"></span> Argos & Currys</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-emerald-500"></span> Supermarkets</span>
          </div>
        </div>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={channelVolumeProjection} margin={{ top: 20, right: 10, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" opacity={0.5} />
              <XAxis dataKey="year" stroke="#71717a" fontSize={11} />
              <YAxis stroke="#71717a" fontSize={11} tickFormatter={(val) => `${val / 1000}k`} />
              <Tooltip
                contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '8px' }}
                labelStyle={{ color: '#f4f4f5', fontWeight: 'bold' }}
                formatter={(val) => [`${val.toLocaleString()} units`, '']}
              />
              <Bar dataKey="amazon" name="Amazon UK (FBA)" fill="#e11d48" stackId="a" radius={[0, 0, 0, 0]} />
              <Bar dataKey="d2c" name="boAt D2C (Shopify)" fill="#f59e0b" stackId="a" radius={[0, 0, 0, 0]} />
              <Bar dataKey="currysArgos" name="Argos & Currys" fill="#3b82f6" stackId="a" radius={[0, 0, 0, 0]} />
              <Bar dataKey="supermarkets" name="Supermarkets (Tesco/Asda)" fill="#10b981" stackId="a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 3. Deep Dive into the 4 Commercial Channels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Channel 1: Amazon UK */}
        <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">Phase 1 Lead Channel</span>
                <h4 className="text-base font-bold text-white">Amazon.co.uk (Fulfilled by Amazon)</h4>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-zinc-300">65% Y1 Share</span>
          </div>

          <div className="mt-4 space-y-2 text-xs text-zinc-300">
            <p className="leading-relaxed">
              <strong>Strategic Role:</strong> Immediate conversion engine. UK consumers demand the Prime delivery badge for unknown electronics brands to guarantee next-day arrival and frictionless returns.
            </p>
            <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800 space-y-1 font-mono text-[11px]">
              <div className="flex justify-between"><span>Referral Take-Rate:</span><span className="text-white">15.0% of MSRP</span></div>
              <div className="flex justify-between"><span>FBA Pick & Pack Fee:</span><span className="text-white">£2.85 per unit</span></div>
              <div className="flex justify-between"><span>Ad Spend Strategy:</span><span className="text-rose-400">Amazon Sponsored Products & Vine Reviews</span></div>
            </div>
          </div>
        </div>

        {/* Channel 2: boAt D2C */}
        <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Store className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Brand Flagship Online</span>
                <h4 className="text-base font-bold text-white">boAt D2C (`boat-lifestyle.co.uk`)</h4>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-zinc-300">35% Y1 Share</span>
          </div>

          <div className="mt-4 space-y-2 text-xs text-zinc-300">
            <p className="leading-relaxed">
              <strong>Strategic Role:</strong> Captures high net contribution margin and first-party customer emails. Acts as the primary landing page for TikTok organic virality and UK university ambassador bundles.
            </p>
            <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800 space-y-1 font-mono text-[11px]">
              <div className="flex justify-between"><span>Payment Gateway Fee:</span><span className="text-white">2.4% + 20p (Shopify Payments)</span></div>
              <div className="flex justify-between"><span>3PL Midlands Pick & Pack:</span><span className="text-white">£2.95 per order (Royal Mail Tracked)</span></div>
              <div className="flex justify-between"><span>Student Discount:</span><span className="text-amber-400">15% off via UNiDAYS / Student Beans</span></div>
            </div>
          </div>
        </div>

        {/* Channel 3: Currys & Argos */}
        <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">Phase 2 High-Street Entry</span>
                <h4 className="text-base font-bold text-white">Tech Specialists (Argos & Currys)</h4>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-zinc-300">Month 13+ Go-Live</span>
          </div>

          <div className="mt-4 space-y-2 text-xs text-zinc-300">
            <p className="leading-relaxed">
              <strong>Strategic Role:</strong> Argos boasts 1,100+ click-and-collect counters across the UK, offering rapid suburban pick-up. Currys provides legitimate physical shelf presence right next to Skullcandy and JLab.
            </p>
            <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800 space-y-1 font-mono text-[11px]">
              <div className="flex justify-between"><span>Wholesale Margin Discount:</span><span className="text-white">35.0% off MSRP</span></div>
              <div className="flex justify-between"><span>Payment Terms:</span><span className="text-white">Net 60 Days with central DC delivery</span></div>
              <div className="flex justify-between"><span>Contract Target:</span><span className="text-blue-400">Initial 80,000 units bulk commitment</span></div>
            </div>
          </div>
        </div>

        {/* Channel 4: Supermarkets (Tesco Extra, Sainsbury's, Asda) */}
        <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Mass Grocery Retail Footprint</span>
                <h4 className="text-base font-bold text-white">Supermarkets (Tesco, Sainsbury's, Asda)</h4>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-zinc-300">Month 18+ Go-Live</span>
          </div>

          <div className="mt-4 space-y-2 text-xs text-zinc-300">
            <p className="leading-relaxed">
              <strong>Strategic Role:</strong> Footfall juggernauts. British parents and students frequently purchase under-£35 headphones in supermarket electronics aisles during weekly grocery shopping. Unlocks massive volume.
            </p>
            <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800 space-y-1 font-mono text-[11px]">
              <div className="flex justify-between"><span>Wholesale Margin:</span><span className="text-white">38.0% wholesale discount</span></div>
              <div className="flex justify-between"><span>Co-Op Marketing Allowance:</span><span className="text-white">4.0% of turnover for endcap display</span></div>
              <div className="flex justify-between"><span>Key Sales Windows:</span><span className="text-emerald-400">Back-to-School (Sept) & Black Friday (Nov)</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Commercial Guardrail & Wholesale Terms Comparison */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-xl">
        <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-500" />
          Commercial Guardrails: Channel Terms & Working Capital Requirements
        </h4>
        <p className="text-xs text-zinc-400 mb-4">
          Wholesale accounts demand payment credit terms that tie up working capital; digital channels provide T+7 cash release.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <div className="font-sans font-bold text-rose-400 mb-2">Amazon.co.uk</div>
            <div className="text-zinc-400 space-y-1 text-[11px]">
              <div>Payout Cycle: <strong>Bi-weekly (T+14)</strong></div>
              <div>Inventory Holding: <strong>Amazon FBA FC</strong></div>
              <div>RMA / Returns: <strong>Automatic FBA disposal/return</strong></div>
              <div>Cash Conversion: <strong>Fast (21 days)</strong></div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <div className="font-sans font-bold text-amber-400 mb-2">boAt D2C (Shopify)</div>
            <div className="text-zinc-400 space-y-1 text-[11px]">
              <div>Payout Cycle: <strong>T+3 Days (Stripe/Shopify)</strong></div>
              <div>Inventory Holding: <strong>Midlands 3PL (Birmingham)</strong></div>
              <div>RMA / Returns: <strong>Direct 3PL Inspection</strong></div>
              <div>Cash Conversion: <strong>Instant (5 days)</strong></div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <div className="font-sans font-bold text-blue-400 mb-2">Argos & Currys</div>
            <div className="text-zinc-400 space-y-1 text-[11px]">
              <div>Payout Cycle: <strong>Net 60 Days EOM</strong></div>
              <div>Inventory Holding: <strong>Central DC Consolidation</strong></div>
              <div>RMA / Returns: <strong>2% Defective Allowance Clause</strong></div>
              <div>Cash Conversion: <strong>Long (75–90 days)</strong></div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <div className="font-sans font-bold text-emerald-400 mb-2">Supermarkets (Tesco/Asda)</div>
            <div className="text-zinc-400 space-y-1 text-[11px]">
              <div>Payout Cycle: <strong>Net 75 Days EOM</strong></div>
              <div>Inventory Holding: <strong>Supermarket Regional Hubs</strong></div>
              <div>RMA / Returns: <strong>Guaranteed Buyback / Markdown</strong></div>
              <div>Cash Conversion: <strong>Heavy Working Capital Demand</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
