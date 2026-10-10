// UK Audio Market Sizing, Demographics & Competitive Intelligence
// Grounded in UK Market Entry Strategy, Mordor Intelligence, Ofcom & ONS retail datasets

export const ukMarketSizing = {
  totalMarket2025USD: 576.9, // Million USD
  totalMarket2025GBP: 461.5, // Million GBP (at 1.25 FX)
  projectedCAGR: 3.6, // % overall UK audio
  twsSegmentShare: 68.2, // % share
  twsMarket2025USD: 393.4, // Million USD
  twsMarket2025GBP: 314.7, // Million GBP
  twsGlobalCAGR: 9.9, // % TWS growth
  demographicFocus: "Gen Z, Higher Ed Students & Young Professionals (Ages 16–30)",
  targetPopulationSize: "12.8 Million UK Consumers",
};

export const marketSizingFunnel = [
  { level: "TAM (Total Addressable Market)", value: 461.5, label: "UK Personal Audio Hardware (2025)", currency: "£M" },
  { level: "SAM (Serviceable Available Market)", value: 314.7, label: "UK True Wireless Stereo (TWS) Earbuds", currency: "£M" },
  { level: "SOM - Year 1 (Target Share)", value: 3.6, label: "boAt Year 1 Digital Penetration (1.1% of TWS)", currency: "£M" },
  { level: "SOM - Year 2 (Target Share)", value: 11.4, label: "boAt Year 2 Omnichannel Expansion (3.6% of TWS)", currency: "£M" },
  { level: "SOM - Year 3 (Target Share)", value: 25.5, label: "boAt Year 3 Mature Market Presence (8.1% of TWS)", currency: "£M" },
];

export const competitiveMatrix = [
  {
    brand: "Apple (AirPods)",
    shortName: "Apple AirPods",
    priceTier: "Ultra Premium",
    priceRange: "£139 – £249",
    xPosition: 78, // High Fashion / Lifestyle
    yPosition: 82, // High Price
    marketShare: "32%",
    strengths: "Ecosystem lock-in, aspirational branding, ANC leadership",
    weaknesses: "High price barrier, vulnerable to cost-of-living trade-downs",
    color: "#a1a1aa",
  },
  {
    brand: "Sony",
    shortName: "Sony Audio",
    priceTier: "Premium Audiophile",
    priceRange: "£129 – £279",
    xPosition: 26, // Utility / High Specs
    yPosition: 80,
    marketShare: "14%",
    strengths: "Class-leading sound reproduction, LDAC codec, ANC",
    weaknesses: "Bulky industrial design, high price point",
    color: "#38bdf8",
  },
  {
    brand: "Skullcandy",
    shortName: "Skullcandy",
    priceTier: "Mid-Tier Lifestyle",
    priceRange: "£35 – £69",
    xPosition: 78,
    yPosition: 54,
    marketShare: "7%",
    strengths: "Strong streetwear youth heritage, bass emphasis",
    weaknesses: "Stagnant product innovation, legacy brand fatigue",
    color: "#f59e0b",
  },
  {
    brand: "Anker Soundcore",
    shortName: "Anker Soundcore",
    priceTier: "Mid-Tier Tech/Utility",
    priceRange: "£32 – £75",
    xPosition: 28,
    yPosition: 52,
    marketShare: "9%",
    strengths: "Amazon SEO mastery, battery life, utilitarian reliability",
    weaknesses: "Lacks lifestyle fashion cachet; purely functional perception",
    color: "#10b981",
  },
  {
    brand: "JLab",
    shortName: "JLab Audio",
    priceTier: "Budget Utility",
    priceRange: "£20 – £39",
    xPosition: 24,
    yPosition: 28,
    marketShare: "6%",
    strengths: "High-street retail distribution in Currys/Argos",
    weaknesses: "Low aesthetic appeal, plastic build feel, weak bass profile",
    color: "#64748b",
  },
  {
    brand: "Generic Amazon Brands",
    shortName: "Generic White-Label",
    priceTier: "Low-Cost Commodity",
    priceRange: "£14 – £22",
    xPosition: 20,
    yPosition: 14,
    marketShare: "12%",
    strengths: "Cheap pricing, high initial Amazon review gaming",
    weaknesses: "Zero brand loyalty, high return rates, no UK customer support",
    color: "#71717a",
  },
  {
    brand: "boAt (The White Space Target)",
    shortName: "boAt Airdopes",
    priceTier: "Value-Tech / Fashion-Tech",
    priceRange: "£24.99 – £39.99",
    xPosition: 74, // High Lifestyle / Fashion
    yPosition: 26, // Value price
    marketShare: "Target: 4-8%",
    strengths: "Trendy transparent aesthetics, boAt Signature Bass, aggressive pricing, high social media virality",
    weaknesses: "Zero native UK brand awareness initially; requires high digital CAC in Year 1",
    color: "#e11d48",
    highlight: true,
  },
];

export const retailChannelComparison = [
  {
    channel: "Amazon.co.uk (FBA)",
    type: "Digital Marketplace",
    launchPhase: "Month 1 (Phase 1)",
    role: "Immediate trust engine via Prime next-day shipping badge; SEO review ramp.",
    takeRate: "15% Referral + £2.80 FBA Pick/Pack/Weight fee",
    volumeSplitY1: "65%",
    volumeSplitY2: "40%",
    volumeSplitY3: "28%",
  },
  {
    channel: "boAt D2C (Shopify UK)",
    type: "Brand Flagship Online",
    launchPhase: "Month 3 (Phase 1)",
    role: "Highest net margin; captures first-party customer data; campus ambassador affiliate portal.",
    takeRate: "2.4% Card Processing + £2.95 3PL Midland fulfillment",
    volumeSplitY1: "35%",
    volumeSplitY2: "25%",
    volumeSplitY3: "22%",
  },
  {
    channel: "Tech Specialists (Argos & Currys)",
    type: "High-Street Electronics",
    launchPhase: "Month 13 (Phase 2)",
    role: "High-street credibility; Argos click-and-collect catalogue reaches suburban families.",
    takeRate: "35% Wholesale Margin discount off MSRP",
    volumeSplitY1: "0%",
    volumeSplitY2: "22%",
    volumeSplitY3: "28%",
  },
  {
    channel: "High-Volume Supermarkets (Tesco, Sainsbury's, Asda)",
    type: "Mass Grocery Retail",
    launchPhase: "Month 18 (Phase 2)",
    role: "Footfall juggernauts; impulse checkout aisle purchases; back-to-school consumer surges.",
    takeRate: "38% Wholesale Margin + 4% co-op promotional fund",
    volumeSplitY1: "0%",
    volumeSplitY2: "13%",
    volumeSplitY3: "22%",
  },
];
