// 3-Year Pro-Forma Financial Model for boAt UK Rollout (2027–2029)
// Phase 1 (Digital Test) -> Phase 2 (Omnichannel & Argos/Currys/Tesco) -> Phase 3 (Scale & Profitability)

export const proFormaSummary = [
  {
    metric: "Units Sold",
    year1: "120,000",
    year2: "380,000",
    year3: "850,000",
    cagr: "166.2%",
  },
  {
    metric: "Gross Revenue (MSRP)",
    year1: "£3.60M",
    year2: "£11.40M",
    year3: "£25.50M",
    inrEquivalentY3: "₹267.8 Cr",
  },
  {
    metric: "Net Revenue (excl. 20% VAT)",
    year1: "£3.00M",
    year2: "£9.50M",
    year3: "£21.25M",
    marginPct: "100.0%",
  },
  {
    metric: "Landed COGS (Califonix FOB + Freight + Duty)",
    year1: "-£1.03M",
    year2: "-£3.26M",
    year3: "-£7.29M",
    marginPct: "34.3%",
  },
  {
    metric: "Gross Profit",
    year1: "£1.97M",
    year2: "£6.24M",
    year3: "£13.96M",
    marginPct: "65.7%",
  },
  {
    metric: "Channel Fulfillment & Wholesale Discounts",
    year1: "-£0.74M",
    year2: "-£3.15M",
    year3: "-£7.12M",
    marginPct: "33.5%",
  },
  {
    metric: "Marketing & Customer Acquisition (CAC)",
    year1: "-£1.14M",
    year2: "-£1.85M",
    year3: "-£2.85M",
    marginPct: "13.4%",
  },
  {
    metric: "Fixed UK OpEx (Legal, UKCA, WEEE, 3PL Overhead)",
    year1: "-£0.35M",
    year2: "-£0.65M",
    year3: "-£0.98M",
    marginPct: "4.6%",
  },
  {
    metric: "EBITDA",
    year1: "-£0.26M (-8.7%)",
    year2: "+£0.59M (+6.2%)",
    year3: "+£3.01M (+14.2%)",
    status: "Profitable",
  },
  {
    metric: "Net Profit After UK Tax (25% Corp Tax)",
    year1: "-£0.26M",
    year2: "+£0.44M",
    year3: "+£2.26M",
    marginPct: "10.6%",
  },
];

export const monthlyCashCurve = [
  { month: "M1", label: "Launch", netCashFlow: -65, cumulativeCash: -65, phase: "Digital Exclusive" },
  { month: "M3", label: "Shopify Go-live", netCashFlow: -55, cumulativeCash: -175, phase: "Digital Exclusive" },
  { month: "M6", label: "Summer Prime Day", netCashFlow: -38, cumulativeCash: -285, phase: "Digital Exclusive" },
  { month: "M9", label: "Back-to-School", netCashFlow: -25, cumulativeCash: -370, phase: "Digital Exclusive" },
  { month: "M12", label: "Q4 Holiday Peak", netCashFlow: 12, cumulativeCash: -380, phase: "Digital Exclusive" },
  { month: "M15", label: "Currys / Argos Pitch", netCashFlow: -15, cumulativeCash: -415, phase: "Omnichannel Ramp" },
  { month: "M18", label: "Supermarkets Pilot", netCashFlow: 22, cumulativeCash: -385, phase: "Omnichannel Ramp" },
  { month: "M21", label: "Catalogue Surge", netCashFlow: 65, cumulativeCash: -230, phase: "Omnichannel Ramp" },
  { month: "M24", label: "Operating Break-even", netCashFlow: 110, cumulativeCash: 0, phase: "Omnichannel Ramp" },
  { month: "M28", label: "Full UK Shelf Presence", netCashFlow: 175, cumulativeCash: 420, phase: "Scaled Scale" },
  { month: "M32", label: "Brand Equity Compounding", netCashFlow: 240, cumulativeCash: 1180, phase: "Scaled Scale" },
  { month: "M36", label: "Target Maturity", netCashFlow: 310, cumulativeCash: 2260, phase: "Scaled Scale" },
];

export const channelVolumeProjection = [
  {
    year: "Year 1 (Digital)",
    amazon: 78000,
    d2c: 42000,
    currysArgos: 0,
    supermarkets: 0,
    total: 120000,
  },
  {
    year: "Year 2 (Omnichannel)",
    amazon: 152000,
    d2c: 95000,
    currysArgos: 83600,
    supermarkets: 49400,
    total: 380000,
  },
  {
    year: "Year 3 (Maturity)",
    amazon: 238000,
    d2c: 187000,
    currysArgos: 238000,
    supermarkets: 187000,
    total: 850000,
  },
];
