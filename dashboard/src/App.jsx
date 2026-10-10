import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ExecutiveSummaryTab } from './components/ExecutiveSummaryTab';
import { DomesticFoundationTab } from './components/DomesticFoundationTab';
import { UnitEconomicsTab } from './components/UnitEconomicsTab';
import { OmnichannelStrategyTab } from './components/OmnichannelStrategyTab';
import { ProFormaModelTab } from './components/ProFormaModelTab';
import { RiskSimulatorTab } from './components/RiskSimulatorTab';
import { ComplianceLogisticsTab } from './components/ComplianceLogisticsTab';
import { ResumeModal } from './components/ResumeModal';
import { Anchor, ExternalLink } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState('verdict');
  const [currency, setCurrency] = useState('GBP');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Conversion rate baseline: 1 GBP = 105 INR
  const gbpToInrRate = 105.0;

  // Format currency helper
  const formatCurrency = (amount, unit = '') => {
    if (currency === 'INR') {
      if (unit === 'M') {
        // e.g., £25.5M GBP -> 25.5 * 105 = 2677.5M INR = ₹267.8 Cr
        const inrCr = (amount * gbpToInrRate) / 10;
        return `₹${inrCr.toFixed(1)} Cr`;
      }
      const inrAmount = amount * gbpToInrRate;
      return `₹${inrAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
    }

    // Default GBP
    if (unit === 'M') {
      return `£${amount.toFixed(1)}M`;
    }
    return `£${amount.toFixed(2)}`;
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col font-sans">
      {/* Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currency={currency}
        setCurrency={setCurrency}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Dashboard Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'verdict' && (
          <ExecutiveSummaryTab currency={currency} formatCurrency={formatCurrency} />
        )}
        {activeTab === 'domestic' && (
          <DomesticFoundationTab currency={currency} formatCurrency={formatCurrency} />
        )}
        {activeTab === 'economics' && (
          <UnitEconomicsTab currency={currency} formatCurrency={formatCurrency} />
        )}
        {activeTab === 'omnichannel' && (
          <OmnichannelStrategyTab currency={currency} formatCurrency={formatCurrency} />
        )}
        {activeTab === 'proforma' && (
          <ProFormaModelTab currency={currency} formatCurrency={formatCurrency} />
        )}
        {activeTab === 'simulator' && (
          <RiskSimulatorTab currency={currency} formatCurrency={formatCurrency} />
        )}
        {activeTab === 'compliance' && (
          <ComplianceLogisticsTab currency={currency} formatCurrency={formatCurrency} />
        )}
      </main>

      {/* Resume Portfolio Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Corporate Strategy Footer */}
      <footer className="bg-[#0c0d12] border-t border-zinc-800/80 py-8 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Anchor className="w-4 h-4 text-rose-500" />
            <span className="font-bold text-white">boAt (Imagine Marketing Limited)</span>
            <span>• Global Corporate Strategy & Expansion Intelligence</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Primary Sources: DRHP & FY23–FY26 Audited Statements, HMRC, DBT UKCA, DEFRA WEEE</span>
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="text-rose-400 hover:text-rose-300 font-semibold underline underline-offset-2"
            >
              Resume Project Context
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
