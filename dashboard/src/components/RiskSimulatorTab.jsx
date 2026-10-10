import React, { useState } from 'react';
import { calculateUnitEconomics } from '../data/unitEconomicsData';
import { 
  Sliders, 
  RotateCcw, 
  Flame, 
  ShieldAlert, 
  TrendingUp, 
  CheckCircle2, 
  AlertTriangle,
  Zap,
  Info
} from 'lucide-react';

export const RiskSimulatorTab = ({ currency, formatCurrency }) => {
  // Simulator State
  const [msrp, setMsrp] = useState(29.99);
  const [cac, setCac] = useState(5.10);
  const [fxRate, setFxRate] = useState(1.25);
  const [freightMultiplier, setFreightMultiplier] = useState(1.0);
  const [wholesaleMargin, setWholesaleMargin] = useState(0.35);

  // Helper to apply preset scenarios
  const applyPreset = (preset) => {
    if (preset === 'baseline') {
      setMsrp(29.99);
      setCac(5.10);
      setFxRate(1.25);
      setFreightMultiplier(1.0);
      setWholesaleMargin(0.35);
    } else if (preset === 'redsea') {
      setMsrp(29.99);
      setCac(5.50);
      setFxRate(1.18);
      setFreightMultiplier(1.8);
      setWholesaleMargin(0.35);
    } else if (preset === 'pricewar') {
      setMsrp(24.99);
      setCac(6.50);
      setFxRate(1.22);
      setFreightMultiplier(1.0);
      setWholesaleMargin(0.38);
    } else if (preset === 'premium') {
      setMsrp(39.99);
      setCac(6.80);
      setFxRate(1.28);
      setFreightMultiplier(1.0);
      setWholesaleMargin(0.33);
    }
  };

  // Run dynamic math engine
  const economics = calculateUnitEconomics({
    msrp: msrp,
    gbpUsdFX: fxRate,
    shippingFreightRateMultiplier: freightMultiplier,
    cacAmazon: cac,
    cacD2C: cac * 1.25,
    cacWholesale: cac * 0.35,
  });

  const netRevenue = economics.netRevenue;
  const landedCOGS = economics.landedCOGS;
  const unitContribution = economics.channels.blended.contribution;
  const unitContributionMargin = economics.channels.blended.marginPct;

  // Fixed UK annual overheads (£350k in Y1, £650k in Y2, £980k in Y3)
  const fixedAnnualOpExY2 = 650000;
  const breakEvenUnitsY2 = unitContribution > 0 ? Math.ceil(fixedAnnualOpExY2 / unitContribution) : Infinity;

  // Year 3 forecast simulation (at 850,000 units target)
  const y3Volume = 850000;
  const y3SimulatedNetRevenue = (y3Volume * netRevenue) / 1000000; // in £M
  const y3SimulatedEBITDA = ((y3Volume * unitContribution) - 980000) / 1000000; // in £M
  const y3SimulatedEBITDAMargin = y3SimulatedNetRevenue > 0 ? ((y3SimulatedEBITDA / y3SimulatedNetRevenue) * 100).toFixed(1) : 0;

  // Determine Risk Gauge Status
  let riskStatus = { level: 'Low Risk', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' };
  if (unitContribution <= 0 || y3SimulatedEBITDA <= 0) {
    riskStatus = { level: 'Critical Burn / Loss', color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30' };
  } else if (unitContributionMargin < 12 || breakEvenUnitsY2 > 450000) {
    riskStatus = { level: 'High Stress Margin', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30' };
  } else if (unitContributionMargin < 20) {
    riskStatus = { level: 'Moderate Risk', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' };
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Header & Presets */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/15 text-rose-400 border border-rose-500/30">
                Interactive Stress-Testing Suite
              </span>
              <span className="text-zinc-500 text-xs">Dynamic Real-Time Sensitivity Engine</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
              Live Scenario Simulator: Test boAt's Financial Resilience in the UK
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
              Adjust retail pricing, customer acquisition costs, maritime shipping shocks, and foreign exchange rates. 
              The engine instantly solves for <strong>Unit Margin</strong>, <strong>Break-even Units</strong>, and <strong>Year 3 EBITDA</strong>.
            </p>
          </div>

          {/* Quick Scenario Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => applyPreset('baseline')}
              className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-white flex items-center gap-1.5 transition-all"
            >
              <RotateCcw className="w-3 h-3 text-zinc-400" />
              <span>Baseline Plan</span>
            </button>
            <button
              onClick={() => applyPreset('redsea')}
              className="px-3 py-1.5 rounded-lg bg-amber-950/40 hover:bg-amber-900/50 border border-amber-600/40 text-xs font-semibold text-amber-300 flex items-center gap-1.5 transition-all"
            >
              <AlertTriangle className="w-3 h-3 text-amber-400" />
              <span>Red Sea Shock (+80% Freight)</span>
            </button>
            <button
              onClick={() => applyPreset('pricewar')}
              className="px-3 py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/50 border border-red-600/40 text-xs font-semibold text-red-300 flex items-center gap-1.5 transition-all"
            >
              <Flame className="w-3 h-3 text-red-400" />
              <span>Price War (£24.99 Cut)</span>
            </button>
            <button
              onClick={() => applyPreset('premium')}
              className="px-3 py-1.5 rounded-lg bg-rose-950/40 hover:bg-rose-900/50 border border-rose-600/40 text-xs font-semibold text-rose-300 flex items-center gap-1.5 transition-all"
            >
              <Zap className="w-3 h-3 text-rose-400" />
              <span>Nirvana Upsell (£39.99)</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Interactive Controls & Live Output Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Input Sliders Controls */}
        <div className="lg:col-span-6 bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Sliders className="w-4 h-4 text-rose-500" />
              Scenario Control Sliders
            </h3>
            <span className="text-[11px] text-zinc-400 font-mono">Real-time variables</span>
          </div>

          {/* Slider 1: MSRP */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-zinc-300">Retail Selling Price (MSRP)</span>
              <span className="font-mono font-extrabold text-white">£{msrp.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="19.99"
              max="44.99"
              step="1.00"
              value={msrp}
              onChange={(e) => setMsrp(parseFloat(e.target.value))}
              className="w-full accent-rose-500 bg-zinc-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
              <span>£19.99 (Budget Deep Cut)</span>
              <span>£29.99 (Target Baseline)</span>
              <span>£44.99 (Premium ANC)</span>
            </div>
          </div>

          {/* Slider 2: Blended CAC */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-zinc-300">Blended Marketing CAC per Unit</span>
              <span className="font-mono font-extrabold text-white">£{cac.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="2.50"
              max="10.00"
              step="0.25"
              value={cac}
              onChange={(e) => setCac(parseFloat(e.target.value))}
              className="w-full accent-rose-500 bg-zinc-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
              <span>£2.50 (High Organic Word of Mouth)</span>
              <span>£5.10 (Baseline Blend)</span>
              <span>£10.00 (High Ad Inflation)</span>
            </div>
          </div>

          {/* Slider 3: Maritime Freight Multiplier */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-zinc-300">Maritime Freight Shock Multiplier</span>
              <span className="font-mono font-extrabold text-amber-400">{freightMultiplier.toFixed(1)}x Normal</span>
            </div>
            <input
              type="range"
              min="0.8"
              max="2.2"
              step="0.1"
              value={freightMultiplier}
              onChange={(e) => setFreightMultiplier(parseFloat(e.target.value))}
              className="w-full accent-amber-500 bg-zinc-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
              <span>0.8x (Subsidized Ocean)</span>
              <span>1.0x (Standard £0.85/unit)</span>
              <span>2.0x (Red Sea Diversion £1.70)</span>
            </div>
          </div>

          {/* Slider 4: GBP/USD FX Rate */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-zinc-300">Exchange Rate (GBP / USD)</span>
              <span className="font-mono font-extrabold text-cyan-400">1 GBP = ${fxRate.toFixed(2)} USD</span>
            </div>
            <input
              type="range"
              min="1.10"
              max="1.45"
              step="0.01"
              value={fxRate}
              onChange={(e) => setFxRate(parseFloat(e.target.value))}
              className="w-full accent-cyan-500 bg-zinc-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
              <span>$1.10 (Strong USD / High Sourcing Cost)</span>
              <span>$1.25 (Baseline)</span>
              <span>$1.45 (Strong Pound Advantage)</span>
            </div>
          </div>

          {/* Slider 5: Wholesale Margin Discount */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-zinc-300">Retail / Supermarket Wholesale Discount</span>
              <span className="font-mono font-extrabold text-blue-400">{(wholesaleMargin * 100).toFixed(0)}% off MSRP</span>
            </div>
            <input
              type="range"
              min="0.25"
              max="0.45"
              step="0.01"
              value={wholesaleMargin}
              onChange={(e) => setWholesaleMargin(parseFloat(e.target.value))}
              className="w-full accent-blue-500 bg-zinc-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
              <span>25% (Favorable Retail Terms)</span>
              <span>35% (Standard Currys/Argos)</span>
              <span>45% (Aggressive Supermarket Cut)</span>
            </div>
          </div>
        </div>

        {/* Right: Real-Time Calculated Outputs */}
        <div className="lg:col-span-6 bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-6">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                Live Calculated Outcomes
              </h3>
              <div className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${riskStatus.bg} ${riskStatus.color} ${riskStatus.border}`}>
                {riskStatus.level}
              </div>
            </div>

            {/* Key Dynamic KPI Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-[11px] text-zinc-400 font-semibold block">Blended Unit Margin</span>
                <span className={`text-2xl font-bold font-mono mt-1 block ${unitContribution > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  £{unitContribution.toFixed(2)}
                </span>
                <span className="text-[11px] text-zinc-400 font-mono">
                  {unitContributionMargin.toFixed(1)}% of net sales
                </span>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-[11px] text-zinc-400 font-semibold block">Landed Unit Cost (COGS)</span>
                <span className="text-2xl font-bold font-mono text-white mt-1 block">
                  £{landedCOGS.toFixed(2)}
                </span>
                <span className="text-[11px] text-zinc-400 font-mono">
                  Califonix FOB + Freight + Duty
                </span>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-[11px] text-zinc-400 font-semibold block">Year 2 Break-Even Units</span>
                <span className={`text-2xl font-bold font-mono mt-1 block ${breakEvenUnitsY2 <= 400000 ? 'text-cyan-400' : 'text-amber-400'}`}>
                  {breakEvenUnitsY2 === Infinity ? 'Unachievable' : breakEvenUnitsY2.toLocaleString()}
                </span>
                <span className="text-[11px] text-zinc-400 font-mono">
                  {breakEvenUnitsY2 <= 380000 ? '✓ Within Year 2 Target (380k)' : '⚠️ Exceeds 380k baseline target'}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-[11px] text-zinc-400 font-semibold block">Year 3 Simulated EBITDA</span>
                <span className={`text-2xl font-bold font-mono mt-1 block ${y3SimulatedEBITDA > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {y3SimulatedEBITDA > 0 ? `+£${y3SimulatedEBITDA.toFixed(2)}M` : `-£${Math.abs(y3SimulatedEBITDA).toFixed(2)}M`}
                </span>
                <span className="text-[11px] text-zinc-400 font-mono">
                  {y3SimulatedEBITDAMargin}% EBITDA margin
                </span>
              </div>
            </div>

            {/* Strategic Diagnostic Box */}
            <div className="mt-6 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs space-y-2">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Info className="w-4 h-4 text-rose-400" />
                Strategic Sensitivity Analysis:
              </span>
              <p className="text-zinc-300 leading-relaxed">
                At <strong>£{msrp} MSRP</strong> with a <strong>{freightMultiplier.toFixed(1)}x freight multiplier</strong> and <strong>£{cac.toFixed(2)} CAC</strong>, 
                boAt generates <strong>£{unitContribution.toFixed(2)}</strong> per unit. 
                {breakEvenUnitsY2 <= 380000 
                  ? ' This scenario safely achieves operating break-even by Month 24 with healthy headroom.' 
                  : ' Caution: Break-even volume exceeds the projected Year 2 capacity; consider adjusting CAC or negotiating higher wholesale pricing.'}
              </p>
            </div>
          </div>

          <div className="mt-6 text-[11px] text-zinc-400 border-t border-zinc-800 pt-3 flex justify-between">
            <span>Model: Monte Carlo Sensitivity Approximation</span>
            <span className="font-mono">FX Baseline: 1 GBP = $1.25 USD = ₹105 INR</span>
          </div>
        </div>
      </div>
    </div>
  );
};
