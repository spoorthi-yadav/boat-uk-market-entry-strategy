import React from 'react';
import { 
  Compass, 
  TrendingUp, 
  BarChart3, 
  Store, 
  Calculator, 
  Sliders, 
  ShieldAlert, 
  FileText,
  Anchor,
  Globe2
} from 'lucide-react';

export const Navbar = ({ activeTab, setActiveTab, currency, setCurrency, onOpenResumeModal }) => {
  const navItems = [
    { id: 'verdict', label: 'Strategic Verdict', icon: Compass },
    { id: 'domestic', label: 'Domestic War Chest', icon: TrendingUp },
    { id: 'economics', label: 'Unit Economics', icon: BarChart3 },
    { id: 'omnichannel', label: 'Retail & Channels', icon: Store },
    { id: 'proforma', label: '3-Yr Pro-Forma', icon: Calculator },
    { id: 'simulator', label: 'Risk Simulator', icon: Sliders },
    { id: 'compliance', label: 'Regulatory & Supply', icon: ShieldAlert },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0c0d12]/90 backdrop-blur-md border-b border-zinc-800/80">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Project Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-600 to-red-700 flex items-center justify-center shadow-lg shadow-rose-900/40 border border-rose-500/30">
              <Anchor className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-2xl tracking-tight text-white select-none">
                  bo<span className="text-rose-500">A</span>t
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-400 border border-rose-500/30">
                  UK EXPANSION 2027–2029
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-medium hidden sm:block">
                Imagine Marketing Ltd • Corporate Strategy & Financial Feasibility Engine
              </p>
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Currency Switcher */}
            <div className="flex items-center bg-zinc-900/90 rounded-lg p-1 border border-zinc-800">
              <button
                onClick={() => setCurrency('GBP')}
                className={`px-2.5 py-1 text-xs font-semibold rounded transition-all ${
                  currency === 'GBP'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                GBP (£)
              </button>
              <button
                onClick={() => setCurrency('INR')}
                className={`px-2.5 py-1 text-xs font-semibold rounded transition-all ${
                  currency === 'INR'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                INR (₹)
              </button>
            </div>

            {/* Resume / Portfolio Brief Button */}
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white rounded-lg text-xs font-semibold border border-zinc-700/80 shadow-sm transition-all group"
            >
              <FileText className="w-3.5 h-3.5 text-rose-400 group-hover:scale-110 transition-transform" />
              <span>Project Brief & Resume</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="bg-[#09090b]/95 border-t border-zinc-800/60 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-1 py-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-rose-600/15 text-rose-400 border border-rose-500/30 shadow-sm shadow-rose-950/20'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60 border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-rose-500' : 'text-zinc-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
