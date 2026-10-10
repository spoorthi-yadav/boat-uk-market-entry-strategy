import React, { useState } from 'react';
import { 
  calculateUnitEconomics, 
  defaultWaterfallSteps 
} from '../data/unitEconomicsData';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { 
  CheckCircle2, 
  HelpCircle, 
  ArrowDownRight, 
  ArrowUpRight, 
  Percent, 
  Truck, 
  ShieldAlert, 
  Receipt,
  ShoppingBag,
  ExternalLink
} from 'lucide-react';

export const UnitEconomicsTab = ({ currency, formatCurrency }) => {
  const [selectedMSRP, setSelectedMSRP] = useState(29.99);
  const [selectedChannel, setSelectedChannel] = useState('amazon');

  const economics = calculateUnitEconomics({ msrp: selectedMSRP });

  // Generate dynamic waterfall steps based on selected MSRP
  const dynamicSteps = [
    { step: 'Gross MSRP', amount: economics.msrp, isPositive: true },
    { step: 'UK VAT (20%)', amount: -economics.vat, isPositive: false },
    { step: 'Net Realized Price', amount: economics.netRevenue, isSubtotal: true },
    { step: 'FOB Califonix JV', amount: -economics.baseFobGBP, isPositive: false },
    { step: 'Ocean Freight & Ins.', amount: -economics.baseOceanFreight, isPositive: false },
    { step: 'HMRC Tariff (2%)', amount: -economics.customsDuty, isPositive: false },
    { step: 'UKCA & WEEE Fees', amount: -(economics.ukcaAmortization + economics.weeeLevy), isPositive: false },
    { step: 'Landed COGS', amount: -economics.landedCOGS, isSubtotal: true },
    { 
      step: 'Channel Take-Rate', 
      amount: -economics.channels[selectedChannel].channelCost, 
      isPositive: false 
    },
    { 
      step: 'Marketing CAC', 
      amount: -economics.channels[selectedChannel].cac, 
      isPositive: false 
    },
    { 
      step: 'Net Contribution Margin', 
      amount: economics.channels[selectedChannel].contribution, 
      isFinal: true 
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Overview Header */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/15 text-rose-400 border border-rose-500/30">
                Unit Economics & Margin Architecture
              </span>
              <span className="text-zinc-500 text-xs">SKU: boAt Airdopes UK Edition</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
              The Per-Unit Margin Bridge: From Factory Floor in India to UK High-Street
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
              Every unit must clear four distinct financial friction points: 
              <strong> 20% UK VAT</strong>, <strong>HMRC Customs Classification (Code 8518 30 00)</strong>, 
              <strong> post-Brexit UKCA & WEEE compliance levies</strong>, and <strong>retailer take-rates</strong>. 
              Our low FOB assembly via Dixon/Califonix protects a healthy <strong>65%+ gross margin</strong>.
            </p>
          </div>

          {/* Quick MSRP Selector Toggle */}
          <div className="flex items-center gap-2 bg-zinc-900 p-1.5 rounded-xl border border-zinc-800 shrink-0">
            <span className="text-xs font-semibold text-zinc-400 pl-2">Preset MSRP:</span>
            {[24.99, 29.99, 34.99, 39.99].map((price) => (
              <button
                key={price}
                onClick={() => setSelectedMSRP(price)}
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all ${
                  selectedMSRP === price
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-900/40'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                }`}
              >
                £{price}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Top Summary Metrics across Channels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(economics.channels).filter(([key]) => key !== 'blended').map(([key, chan]) => {
          const isSelected = selectedChannel === key;
          return (
            <button
              key={key}
              onClick={() => setSelectedChannel(key)}
              className={`p-4 rounded-xl text-left border transition-all ${
                isSelected
                  ? 'bg-rose-950/20 border-rose-500 shadow-lg shadow-rose-950/30'
                  : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className={isSelected ? 'text-rose-400' : 'text-zinc-400'}>
                  {chan.name}
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                  chan.contribution > 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {chan.marginPct}% Net Margin
                </span>
              </div>
              <div className="mt-2 text-2xl font-bold font-mono text-white">
                £{chan.contribution.toFixed(2)}
              </div>
              <div className="text-[11px] text-zinc-400 mt-1 flex justify-between">
                <span>Channel Fee: £{chan.channelCost.toFixed(2)}</span>
                <span>CAC: £{chan.cac.toFixed(2)}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* 3. The Margin Waterfall Visualization */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>Unit Economics Waterfall: {economics.channels[selectedChannel].name}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-rose-400 font-mono font-semibold">
                MSRP: £{selectedMSRP}
              </span>
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              Tracing cash deductions from gross customer price to boAt net contribution profit
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <span className="w-3 h-3 rounded bg-zinc-600"></span> Subtotals
            </span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <span className="w-3 h-3 rounded bg-red-500/80"></span> Deductions
            </span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <span className="w-3 h-3 rounded bg-emerald-500"></span> Net Profit
            </span>
          </div>
        </div>

        {/* Waterfall Chart */}
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dynamicSteps} margin={{ top: 20, right: 10, left: -10, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" opacity={0.5} />
              <XAxis 
                dataKey="step" 
                stroke="#71717a" 
                fontSize={10} 
                interval={0}
                angle={-30}
                textAnchor="end"
              />
              <YAxis stroke="#71717a" fontSize={11} tickFormatter={(val) => `£${val}`} />
              <Tooltip
                contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '8px' }}
                labelStyle={{ color: '#f4f4f5', fontWeight: 'bold' }}
                formatter={(val) => [`£${Math.abs(val).toFixed(2)}`, 'Value']}
              />
              <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                {dynamicSteps.map((entry, index) => {
                  let fillColor = '#ef4444'; // Red deduction
                  if (entry.isFinal) fillColor = '#10b981'; // Green final
                  else if (entry.isSubtotal) fillColor = '#3b82f6'; // Blue subtotal
                  else if (entry.isPositive) fillColor = '#a855f7'; // Purple gross
                  return <Cell key={`cell-${index}`} fill={fillColor} />;
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bottom Insight Callout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-zinc-800">
          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs">
            <span className="font-semibold text-rose-400 flex items-center gap-1.5 mb-1">
              <Receipt className="w-4 h-4" /> 20% UK VAT Realization
            </span>
            <p className="text-zinc-300">
              On a £29.99 sticker price, £5.00 goes directly to HMRC. boAt’s top-line starting point is 
              <strong> £24.99 net revenue</strong>.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs">
            <span className="font-semibold text-amber-400 flex items-center gap-1.5 mb-1">
              <Truck className="w-4 h-4" /> Califonix Landed COGS (£8.56)
            </span>
            <p className="text-zinc-300">
              Dixon JV manufacturing (£7.20 FOB) + Southampton ocean freight (£0.85) + 2% HMRC tariff 
              results in a formidable <strong>65.7% gross product margin</strong>.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs">
            <span className="font-semibold text-emerald-400 flex items-center gap-1.5 mb-1">
              <CheckCircle2 className="w-4 h-4" /> Net Contribution: £{economics.channels[selectedChannel].contribution.toFixed(2)}
            </span>
            <p className="text-zinc-300">
              Yields a <strong>{economics.channels[selectedChannel].marginPct}% net contribution margin</strong> on {economics.channels[selectedChannel].name}, 
              leaving ample room for customer acquisition burn.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Complete Cost Breakdown Table */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-xl overflow-hidden">
        <h3 className="text-base font-bold text-white mb-1">
          Detailed Unit Economics Matrix by Channel (at £{selectedMSRP} MSRP)
        </h3>
        <p className="text-xs text-zinc-400 mb-4">
          Direct comparative cost structure across Digital and Physical wholesale channels
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-zinc-900 text-zinc-300 font-bold border-b border-zinc-800 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Cost Component / Line Item</th>
                <th className="py-3 px-4">Regulatory / Commercial Basis</th>
                <th className="py-3 px-4">Amazon UK (FBA)</th>
                <th className="py-3 px-4">boAt D2C (Shopify)</th>
                <th className="py-3 px-4">Argos & Currys</th>
                <th className="py-3 px-4">Supermarkets (Tesco/Asda)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 font-mono">
              <tr className="hover:bg-zinc-900/40">
                <td className="py-2.5 px-4 font-sans font-semibold text-white">Gross Retail Selling Price (MSRP)</td>
                <td className="py-2.5 px-4 font-sans text-zinc-400">Consumer shelf price</td>
                <td className="py-2.5 px-4 text-white">£{economics.msrp.toFixed(2)}</td>
                <td className="py-2.5 px-4 text-white">£{economics.msrp.toFixed(2)}</td>
                <td className="py-2.5 px-4 text-white">£{economics.msrp.toFixed(2)}</td>
                <td className="py-2.5 px-4 text-white">£{economics.msrp.toFixed(2)}</td>
              </tr>
              <tr className="hover:bg-zinc-900/40 text-red-400">
                <td className="py-2.5 px-4 font-sans font-semibold">Less: UK Value Added Tax (20%)</td>
                <td className="py-2.5 px-4 font-sans text-zinc-400">HMRC VAT Act 1994</td>
                <td className="py-2.5 px-4">-£{economics.vat.toFixed(2)}</td>
                <td className="py-2.5 px-4">-£{economics.vat.toFixed(2)}</td>
                <td className="py-2.5 px-4">-£{economics.vat.toFixed(2)}</td>
                <td className="py-2.5 px-4">-£{economics.vat.toFixed(2)}</td>
              </tr>
              <tr className="bg-zinc-900/50 font-bold text-white">
                <td className="py-2.5 px-4 font-sans">Net Realized Revenue</td>
                <td className="py-2.5 px-4 font-sans text-zinc-400">Net top-line basis</td>
                <td className="py-2.5 px-4">£{economics.netRevenue.toFixed(2)}</td>
                <td className="py-2.5 px-4">£{economics.netRevenue.toFixed(2)}</td>
                <td className="py-2.5 px-4">£{economics.netRevenue.toFixed(2)}</td>
                <td className="py-2.5 px-4">£{economics.netRevenue.toFixed(2)}</td>
              </tr>
              <tr className="hover:bg-zinc-900/40 text-red-400">
                <td className="py-2.5 px-4 font-sans font-semibold">Manufacturing FOB (India)</td>
                <td className="py-2.5 px-4 font-sans text-zinc-400">Califonix Tech JV (Dixon)</td>
                <td className="py-2.5 px-4">-£{economics.baseFobGBP.toFixed(2)}</td>
                <td className="py-2.5 px-4">-£{economics.baseFobGBP.toFixed(2)}</td>
                <td className="py-2.5 px-4">-£{economics.baseFobGBP.toFixed(2)}</td>
                <td className="py-2.5 px-4">-£{economics.baseFobGBP.toFixed(2)}</td>
              </tr>
              <tr className="hover:bg-zinc-900/40 text-red-400">
                <td className="py-2.5 px-4 font-sans font-semibold">Freight & Marine Insurance</td>
                <td className="py-2.5 px-4 font-sans text-zinc-400">Sea container to Southampton</td>
                <td className="py-2.5 px-4">-£{economics.baseOceanFreight.toFixed(2)}</td>
                <td className="py-2.5 px-4">-£{economics.baseOceanFreight.toFixed(2)}</td>
                <td className="py-2.5 px-4">-£{economics.baseOceanFreight.toFixed(2)}</td>
                <td className="py-2.5 px-4">-£{economics.baseOceanFreight.toFixed(2)}</td>
              </tr>
              <tr className="hover:bg-zinc-900/40 text-red-400">
                <td className="py-2.5 px-4 font-sans font-semibold">HMRC Customs Duty (2%)</td>
                <td className="py-2.5 px-4 font-sans text-zinc-400">Commodity Code 8518 30 00</td>
                <td className="py-2.5 px-4">-£{economics.customsDuty.toFixed(2)}</td>
                <td className="py-2.5 px-4">-£{economics.customsDuty.toFixed(2)}</td>
                <td className="py-2.5 px-4">-£{economics.customsDuty.toFixed(2)}</td>
                <td className="py-2.5 px-4">-£{economics.customsDuty.toFixed(2)}</td>
              </tr>
              <tr className="hover:bg-zinc-900/40 text-red-400">
                <td className="py-2.5 px-4 font-sans font-semibold">UKCA & WEEE Compliance Levy</td>
                <td className="py-2.5 px-4 font-sans text-zinc-400">OPSS/DEFRA statutory fee</td>
                <td className="py-2.5 px-4">-£{(economics.ukcaAmortization + economics.weeeLevy).toFixed(2)}</td>
                <td className="py-2.5 px-4">-£{(economics.ukcaAmortization + economics.weeeLevy).toFixed(2)}</td>
                <td className="py-2.5 px-4">-£{(economics.ukcaAmortization + economics.weeeLevy).toFixed(2)}</td>
                <td className="py-2.5 px-4">-£{(economics.ukcaAmortization + economics.weeeLevy).toFixed(2)}</td>
              </tr>
              <tr className="bg-zinc-900/50 font-bold text-white">
                <td className="py-2.5 px-4 font-sans">Total Landed Product Cost (COGS)</td>
                <td className="py-2.5 px-4 font-sans text-zinc-400">Factory gate to UK warehouse</td>
                <td className="py-2.5 px-4">£{economics.landedCOGS.toFixed(2)}</td>
                <td className="py-2.5 px-4">£{economics.landedCOGS.toFixed(2)}</td>
                <td className="py-2.5 px-4">£{economics.landedCOGS.toFixed(2)}</td>
                <td className="py-2.5 px-4">£{economics.landedCOGS.toFixed(2)}</td>
              </tr>
              <tr className="hover:bg-zinc-900/40 text-red-400">
                <td className="py-2.5 px-4 font-sans font-semibold">Channel Fulfillment & Wholesale Margin</td>
                <td className="py-2.5 px-4 font-sans text-zinc-400">Retailer take-rate / 3PL fees</td>
                <td className="py-2.5 px-4">-£{economics.channels.amazon.channelCost.toFixed(2)}</td>
                <td className="py-2.5 px-4">-£{economics.channels.d2c.channelCost.toFixed(2)}</td>
                <td className="py-2.5 px-4">-£{economics.channels.techRetail.channelCost.toFixed(2)}</td>
                <td className="py-2.5 px-4">-£{economics.channels.supermarket.channelCost.toFixed(2)}</td>
              </tr>
              <tr className="hover:bg-zinc-900/40 text-red-400">
                <td className="py-2.5 px-4 font-sans font-semibold">Marketing & CAC Allocation</td>
                <td className="py-2.5 px-4 font-sans text-zinc-400">TikTok, Ads & Campus Promos</td>
                <td className="py-2.5 px-4">-£{economics.channels.amazon.cac.toFixed(2)}</td>
                <td className="py-2.5 px-4">-£{economics.channels.d2c.cac.toFixed(2)}</td>
                <td className="py-2.5 px-4">-£{economics.channels.techRetail.cac.toFixed(2)}</td>
                <td className="py-2.5 px-4">-£{economics.channels.supermarket.cac.toFixed(2)}</td>
              </tr>
              <tr className="bg-rose-950/40 font-extrabold text-emerald-400 border-t-2 border-rose-500">
                <td className="py-3 px-4 font-sans text-sm">Net Contribution Margin per Unit</td>
                <td className="py-3 px-4 font-sans text-xs text-zinc-300">Net operating margin</td>
                <td className="py-3 px-4 text-sm font-bold">£{economics.channels.amazon.contribution.toFixed(2)} ({economics.channels.amazon.marginPct}%)</td>
                <td className="py-3 px-4 text-sm font-bold">£{economics.channels.d2c.contribution.toFixed(2)} ({economics.channels.d2c.marginPct}%)</td>
                <td className="py-3 px-4 text-sm font-bold">£{economics.channels.techRetail.contribution.toFixed(2)} ({economics.channels.techRetail.marginPct}%)</td>
                <td className="py-3 px-4 text-sm font-bold">£{economics.channels.supermarket.contribution.toFixed(2)} ({economics.channels.supermarket.marginPct}%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
