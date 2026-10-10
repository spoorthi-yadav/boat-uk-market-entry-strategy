import React, { useState } from 'react';
import { 
  ukMarketSizing, 
  marketSizingFunnel, 
  competitiveMatrix 
} from '../data/ukMarketData';
import { 
  Target, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2,
  ChevronRight,
  Layers,
  ShoppingBag
} from 'lucide-react';

export const ExecutiveSummaryTab = ({ currency, formatCurrency }) => {
  const [selectedBrand, setSelectedBrand] = useState(
    competitiveMatrix.find((c) => c.highlight) || competitiveMatrix[0]
  );

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Executive Verdict Boardroom Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-950 via-[#131118] to-zinc-950 border border-rose-500/30 p-6 sm:p-8 shadow-2xl shadow-rose-950/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/20 text-rose-400 border border-rose-500/40">
              <Sparkles className="w-3.5 h-3.5" />
              Board of Directors Executive Verdict
            </span>
            <span className="text-zinc-500 text-xs hidden sm:inline">• Horizon: 3-Year Rollout (2027–2029)</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug max-w-4xl">
            Execute a Phased, Digital-First UK Market Entry Targeting the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-500 to-red-400">
              "Lifestyle-Value" White Space
            </span>{' '}
            at £24.99–£39.99
          </h1>

          <p className="mt-3 text-zinc-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Capitalizing on the UK cost-of-living squeeze, boAt will bypass expensive greenfield retail initially, 
            deploying an asset-light <strong>Amazon UK (FBA) + D2C Shopify</strong> framework in Year 1. We leverage our 
            domestic <strong>Califonix/Dixon manufacturing scale</strong> to undercut mid-tier incumbents (Skullcandy, JBL) 
            while funding UK expansion entirely from domestic cash flow. Selective retail wholesale partnerships 
            (<strong>Argos, Currys, and top supermarket electronics aisles</strong>) will unlock operating break-even by 
            <strong> Month 24</strong> and scale to <strong>£25.5M ARR (₹268 Cr)</strong> by Year 3.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 pt-4 border-t border-zinc-800/80">
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Self-funded via ₹350+ Cr domestic liquid reserves (Zero new debt)</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full compliance: Pre-audited UKCA, WEEE & HMRC Tariff 8518 30 00</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>60-day buffer inventory in Midlands 3PL (Hedging Red Sea shipping risk)</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Key Executive KPIs Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-zinc-900/70 border border-zinc-800/90 rounded-xl p-4 hover:border-zinc-700 transition-all">
          <div className="text-zinc-400 text-xs font-medium flex items-center justify-between">
            <span>UK Audio TAM</span>
            <Target className="w-4 h-4 text-rose-400" />
          </div>
          <div className="mt-2 text-xl font-bold text-white">
            {formatCurrency(ukMarketSizing.totalMarket2025GBP, 'M')}
          </div>
          <div className="text-[11px] text-zinc-500 mt-1">$576.9M @ 3.6% CAGR</div>
        </div>

        <div className="bg-zinc-900/70 border border-zinc-800/90 rounded-xl p-4 hover:border-zinc-700 transition-all">
          <div className="text-zinc-400 text-xs font-medium flex items-center justify-between">
            <span>TWS Share (SAM)</span>
            <Layers className="w-4 h-4 text-amber-400" />
          </div>
          <div className="mt-2 text-xl font-bold text-amber-400">
            {ukMarketSizing.twsSegmentShare}%
          </div>
          <div className="text-[11px] text-zinc-500 mt-1">£314.7M Target Segment</div>
        </div>

        <div className="bg-zinc-900/70 border border-zinc-800/90 rounded-xl p-4 hover:border-zinc-700 transition-all">
          <div className="text-zinc-400 text-xs font-medium flex items-center justify-between">
            <span>Disruptive Price</span>
            <DollarSign className="w-4 h-4 text-rose-400" />
          </div>
          <div className="mt-2 text-xl font-bold text-white">
            £24.99–£39.99
          </div>
          <div className="text-[11px] text-zinc-500 mt-1">Undercuts £50+ Mid-tier</div>
        </div>

        <div className="bg-zinc-900/70 border border-zinc-800/90 rounded-xl p-4 hover:border-zinc-700 transition-all">
          <div className="text-zinc-400 text-xs font-medium flex items-center justify-between">
            <span>Year 3 Net Sales</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-2 text-xl font-bold text-emerald-400">
            {formatCurrency(21.25, 'M')}
          </div>
          <div className="text-[11px] text-zinc-500 mt-1">£25.5M Gross (850k units)</div>
        </div>

        <div className="bg-zinc-900/70 border border-zinc-800/90 rounded-xl p-4 hover:border-zinc-700 transition-all">
          <div className="text-zinc-400 text-xs font-medium flex items-center justify-between">
            <span>Break-Even</span>
            <Clock className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="mt-2 text-xl font-bold text-cyan-400">
            Month 24
          </div>
          <div className="text-[11px] text-zinc-500 mt-1">Via Omnichannel Scale</div>
        </div>

        <div className="bg-zinc-900/70 border border-zinc-800/90 rounded-xl p-4 hover:border-zinc-700 transition-all">
          <div className="text-zinc-400 text-xs font-medium flex items-center justify-between">
            <span>Seed Capital</span>
            <ShieldCheck className="w-4 h-4 text-rose-400" />
          </div>
          <div className="mt-2 text-xl font-bold text-white">
            {formatCurrency(1.2, 'M')}
          </div>
          <div className="text-[11px] text-zinc-500 mt-1">0.3% of boAt Cash Pile</div>
        </div>
      </div>

      {/* 3. Competitive Landscape: The 2x2 Positioning Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Interactive 2x2 Matrix */}
        <div className="lg:col-span-7 bg-zinc-950/80 border border-zinc-800/90 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>UK Audio Competitive Matrix (2x2)</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-rose-400 font-semibold">
                    Interactive
                  </span>
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Click any brand pill to inspect positioning, pricing, and vulnerability.
                </p>
              </div>
            </div>

            {/* Top Horizontal Axis Label */}
            <div className="flex justify-between items-center text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2 px-2">
              <span>◀ Utility / Tech Specs</span>
              <span className="text-[10px] text-zinc-500 font-mono">X-Axis: Aesthetic Perception</span>
              <span>Fashion / Lifestyle ▶</span>
            </div>

            {/* Visual 2x2 Chart Container */}
            <div className="relative w-full h-[380px] bg-zinc-900/40 rounded-xl border border-zinc-800 overflow-hidden select-none">
              {/* Vertical Y-Axis Labels (Left Edge) */}
              <div className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-wider text-zinc-400 bg-zinc-950/80 px-2 py-0.5 rounded border border-zinc-800">
                ▲ Premium Price (£100–£250+)
              </div>
              <div className="absolute bottom-3 left-3 z-10 text-[10px] font-bold uppercase tracking-wider text-zinc-400 bg-zinc-950/80 px-2 py-0.5 rounded border border-zinc-800">
                ▼ Value Price (£15–£40)
              </div>

              {/* Crosshair Dividers */}
              <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-zinc-800"></div>
              <div className="absolute inset-y-0 left-1/2 border-l border-dashed border-zinc-800"></div>

              {/* Quadrant Watermark Badges */}
              <div className="absolute top-10 left-3 text-[10px] font-extrabold uppercase tracking-wider text-zinc-600/70">
                Premium Technical
              </div>
              <div className="absolute top-3 right-3 text-[10px] font-extrabold uppercase tracking-wider text-zinc-500/80">
                Premium Lifestyle
              </div>
              <div className="absolute bottom-10 left-3 text-[10px] font-extrabold uppercase tracking-wider text-zinc-600/70">
                Commodity Utility
              </div>

              {/* White Space Highlight Quadrant (Bottom-Right) */}
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-rose-950/20 via-rose-950/30 to-red-950/40 border-l border-t border-dashed border-rose-500/30 rounded-br-xl flex flex-col justify-between p-3 pointer-events-none">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-400 bg-rose-500/15 px-2 py-0.5 rounded border border-rose-500/30 w-fit">
                  ★ Uncontested White Space (£25–£40)
                </span>
                <span className="text-[10px] text-rose-400/50 font-semibold self-end">
                  High Fashion • Disruptive Value
                </span>
              </div>

              {/* Render Competitor Badges & Pills */}
              {competitiveMatrix.map((item) => {
                const isSelected = selectedBrand.brand === item.brand;
                const topPct = 100 - item.yPosition;
                const leftPct = item.xPosition;

                if (item.highlight) {
                  return (
                    <button
                      key={item.brand}
                      onClick={() => setSelectedBrand(item)}
                      style={{ left: `${leftPct}%`, top: `${topPct}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 focus:outline-none group"
                    >
                      <div className="relative flex flex-col items-center">
                        {/* Glowing Aura */}
                        <div className="absolute -inset-2 rounded-full bg-rose-600/40 blur-md animate-pulse"></div>

                        {/* Main boAt Badge */}
                        <div
                          className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-rose-600 to-red-600 text-white font-extrabold shadow-xl shadow-rose-950/60 border-2 transition-transform duration-200 group-hover:scale-105 ${
                            isSelected
                              ? 'border-white ring-4 ring-rose-500/50'
                              : 'border-rose-400/80 ring-2 ring-rose-500/20'
                          }`}
                        >
                          <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                          <span className="text-xs font-black tracking-tight">boAt</span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-rose-100 font-semibold">
                            £24.99–£39.99
                          </span>
                        </div>

                        {/* Subtitle tag */}
                        <span className="mt-1 text-[9px] font-bold text-rose-300 bg-zinc-950/90 px-2 py-0.5 rounded border border-rose-500/40 whitespace-nowrap shadow-sm">
                          White Space Leader
                        </span>
                      </div>
                    </button>
                  );
                }

                return (
                  <button
                    key={item.brand}
                    onClick={() => setSelectedBrand(item)}
                    style={{ left: `${leftPct}%`, top: `${topPct}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 focus:outline-none group"
                  >
                    <div
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 group-hover:scale-105 border shadow-sm ${
                        isSelected
                          ? 'bg-zinc-100 text-zinc-950 border-white ring-4 ring-zinc-400/30'
                          : 'bg-zinc-900/90 text-zinc-300 border-zinc-700/80 hover:border-zinc-500 hover:text-white'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: item.color }}></span>
                      <span className="text-[11px] whitespace-nowrap">{item.shortName}</span>
                      <span className="text-[10px] font-mono opacity-70">
                        ({item.priceRange.split('–')[0].trim()})
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 text-[12px] text-zinc-400 flex items-center justify-between border-t border-zinc-800/80 pt-3">
            <span>Y-Axis: Retail Price | X-Axis: Fashion Perception</span>
            <span className="text-rose-400 font-semibold font-mono">
              Selected: {selectedBrand.brand}
            </span>
          </div>
        </div>

        {/* Right: Competitor Inspection Card & White Space Rationale */}
        <div className="lg:col-span-5 space-y-6">
          {/* Selected Competitor Inspector */}
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
                  {selectedBrand.priceTier}
                </span>
                <h4 className="text-xl font-bold text-white mt-0.5">
                  {selectedBrand.brand}
                </h4>
              </div>
              <div className="text-right">
                <span className="text-sm font-extrabold text-zinc-200">
                  {selectedBrand.priceRange}
                </span>
                <div className="text-[11px] text-zinc-400">
                  UK Share: {selectedBrand.marketShare}
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800">
                <span className="font-semibold text-emerald-400 block mb-1">
                  Core Strengths:
                </span>
                <p className="text-zinc-300">{selectedBrand.strengths}</p>
              </div>

              <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800">
                <span className="font-semibold text-amber-400 block mb-1">
                  Vulnerability / boAt Entry Hook:
                </span>
                <p className="text-zinc-300">{selectedBrand.weaknesses}</p>
              </div>
            </div>

            {selectedBrand.highlight && (
              <div className="mt-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300">
                <strong>Why boAt Wins:</strong> High bass tuning + transparent aesthetic cases at £29.99 delivers the design appeal of Nothing/Apple at 1/6th the price.
              </div>
            )}
          </div>

          {/* Sizing Funnel (TAM / SAM / SOM) */}
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 shadow-xl">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 text-rose-400" />
              UK Opportunity Sizing Funnel
            </h4>

            <div className="space-y-3">
              {marketSizingFunnel.map((item, idx) => (
                <div key={item.level} className="text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-zinc-300">{item.level}</span>
                    <span className="font-mono font-bold text-white">
                      {formatCurrency(item.value, item.currency === '£M' ? 'M' : '')}
                    </span>
                  </div>
                  <div className="w-full bg-zinc-950 h-2 rounded-full overflow-hidden border border-zinc-800">
                    <div
                      className={`h-full rounded-full ${
                        idx === 0
                          ? 'w-full bg-zinc-500'
                          : idx === 1
                          ? 'w-[68%] bg-amber-500'
                          : idx === 2
                          ? 'w-[3%] bg-rose-400'
                          : idx === 3
                          ? 'w-[10%] bg-rose-500'
                          : 'w-[22%] bg-rose-600'
                      }`}
                    ></div>
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. The 3-Phase Rollout Strategic Roadmap */}
      <div className="bg-zinc-950 border border-zinc-800/90 rounded-2xl p-6 sm:p-8 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
          <span>The 3-Year Strategic Rollout Framework</span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 font-semibold">
            Execution Horizon
          </span>
        </h3>
        <p className="text-xs text-zinc-400 mb-6">
          Structured to mitigate capital exposure and validate consumer retention before committing to high-street physical distribution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phase 1 */}
          <div className="relative p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[11px] font-bold uppercase">
                Months 1–12
              </span>
              <span className="text-xs font-semibold text-rose-400">Phase 1</span>
            </div>
            <h4 className="text-base font-bold text-white mb-2">Digital Foothold</h4>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                <span>Launch on <strong>Amazon.co.uk (FBA)</strong> for immediate Prime trust and review generation.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                <span>Localized <strong>Shopify Storefront</strong> (`boat-lifestyle.co.uk`) with campus ambassador discounts.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                <span>Outsourced <strong>Midlands 3PL</strong> hub (Birmingham) for fast UK inventory distribution.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                <span><strong>120,000 units</strong>; accept Year 1 marketing burn to establish brand buzz.</span>
              </li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="relative p-5 rounded-xl bg-zinc-900/60 border border-rose-500/30 hover:border-rose-500/50 transition-all shadow-lg shadow-rose-950/20">
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[11px] font-bold uppercase">
                Months 13–24
              </span>
              <span className="text-xs font-semibold text-rose-400">Phase 2</span>
            </div>
            <h4 className="text-base font-bold text-white mb-2">Selective Omnichannel</h4>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                <span>Wholesale contracts with <strong>Argos & Currys</strong> to validate physical retail legitimacy.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                <span>Pilot electronics aisle placement across <strong>Tesco Extra & Sainsbury's</strong>.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                <span>Blended CAC declines as offline shelf footfall drives organic discovery.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>380,000 units</strong>; reach <strong>Operating Break-Even at Month 24</strong>.</span>
              </li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="relative p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[11px] font-bold uppercase">
                Months 25–36
              </span>
              <span className="text-xs font-semibold text-emerald-400">Phase 3</span>
            </div>
            <h4 className="text-base font-bold text-white mb-2">Scaled Net Profitability</h4>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Full nationwide footprint across 2,000+ UK retail checkout points.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Expand SKU lineup: boAt Smart Ring, Nirvana Premium ANC, and Party Speakers.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Sustained <strong>£25.5M Gross Revenue (850,000 units)</strong>.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Generate <strong>£2.26M PAT (~₹23.7 Cr)</strong> at healthy 10.6% net margin.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
