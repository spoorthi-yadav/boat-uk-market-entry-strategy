// UK Unit Economics Engine & Cost Waterfall Generator
// Integrates HMRC Tariff 8518 30 00, UKCA Conformity, WEEE recycling and channel structures

export const calculateUnitEconomics = ({
  msrp = 29.99,
  fobCostUSD = 9.00, // $9.00 FOB from Califonix JV
  gbpUsdFX = 1.25, // 1 GBP = 1.25 USD -> FOB in GBP = 9.00 / 1.25 = £7.20
  shippingFreightRateMultiplier = 1.0, // base 1.0x (can spike to 1.5x)
  customsDutyRate = 0.02, // 2% HMRC tariff baseline
  ukcaAmortization = 0.15, // £ per unit
  weeeLevy = 0.20, // £ per unit
  cacAmazon = 6.00, // £ per unit ad spend
  cacD2C = 7.50, // £ per unit influencer + paid social
  cacWholesale = 1.80, // £ per unit trade marketing & POS display
}) => {
  // 1. VAT & Net Price
  const vat = msrp - msrp / 1.20; // 20% UK VAT included in retail price
  const netRevenue = msrp - vat; // Realized net sales

  // 2. Landed Cost (COGS)
  const baseFobGBP = fobCostUSD / gbpUsdFX;
  const baseOceanFreight = 0.85 * shippingFreightRateMultiplier;
  const cifPrice = baseFobGBP + baseOceanFreight;
  const customsDuty = cifPrice * customsDutyRate;
  const landedCOGS = cifPrice + customsDuty + ukcaAmortization + weeeLevy;

  const grossProfit = netRevenue - landedCOGS;
  const grossMarginPct = (grossProfit / netRevenue) * 100;

  // 3. Channel Economics
  // Channel A: Amazon UK (FBA)
  const amazonReferral = msrp * 0.15; // 15% referral fee on gross price
  const amazonFBAFee = 2.85; // Standard envelope / small parcel pick & pack
  const amazonChannelCost = amazonReferral + amazonFBAFee;
  const amazonContribution = netRevenue - landedCOGS - amazonChannelCost - cacAmazon;
  const amazonContributionPct = (amazonContribution / netRevenue) * 100;

  // Channel B: boAt D2C (Shopify UK)
  const shopifyPaymentFee = msrp * 0.024 + 0.20; // 2.4% + 20p gateway
  const midlands3PLPickPack = 2.95; // Outsourced 3PL Birmingham hub
  const d2cChannelCost = shopifyPaymentFee + midlands3PLPickPack;
  const d2cContribution = netRevenue - landedCOGS - d2cChannelCost - cacD2C;
  const d2cContributionPct = (d2cContribution / netRevenue) * 100;

  // Channel C: Tech Specialists (Argos & Currys)
  const techWholesaleDiscount = netRevenue * 0.35; // 35% wholesale margin
  const wholesaleLogistics = 0.65; // Pallet distribution to retailer DCs
  const techChannelCost = techWholesaleDiscount + wholesaleLogistics;
  const techContribution = netRevenue - landedCOGS - techChannelCost - cacWholesale;
  const techContributionPct = (techContribution / netRevenue) * 100;

  // Channel D: Supermarket Grocery (Tesco, Sainsbury's, Asda)
  const supermarketWholesaleDiscount = netRevenue * 0.38; // 38% wholesale margin
  const supermarketCoopMarketing = netRevenue * 0.04; // 4% promotional fund
  const supermarketLogistics = 0.70;
  const supermarketChannelCost = supermarketWholesaleDiscount + supermarketCoopMarketing + supermarketLogistics;
  const supermarketContribution = netRevenue - landedCOGS - supermarketChannelCost - (cacWholesale * 0.8);
  const supermarketContributionPct = (supermarketContribution / netRevenue) * 100;

  // 4. Default Blended Baseline
  const blendedContribution = (
    amazonContribution * 0.40 +
    d2cContribution * 0.25 +
    techContribution * 0.20 +
    supermarketContribution * 0.15
  );

  return {
    msrp: Number(msrp.toFixed(2)),
    vat: Number(vat.toFixed(2)),
    netRevenue: Number(netRevenue.toFixed(2)),
    baseFobGBP: Number(baseFobGBP.toFixed(2)),
    baseOceanFreight: Number(baseOceanFreight.toFixed(2)),
    customsDuty: Number(customsDuty.toFixed(2)),
    ukcaAmortization: Number(ukcaAmortization.toFixed(2)),
    weeeLevy: Number(weeeLevy.toFixed(2)),
    landedCOGS: Number(landedCOGS.toFixed(2)),
    grossProfit: Number(grossProfit.toFixed(2)),
    grossMarginPct: Number(grossMarginPct.toFixed(1)),
    channels: {
      amazon: {
        name: "Amazon UK (FBA)",
        channelCost: Number(amazonChannelCost.toFixed(2)),
        cac: Number(cacAmazon.toFixed(2)),
        contribution: Number(amazonContribution.toFixed(2)),
        marginPct: Number(amazonContributionPct.toFixed(1)),
      },
      d2c: {
        name: "boAt D2C (Shopify)",
        channelCost: Number(d2cChannelCost.toFixed(2)),
        cac: Number(cacD2C.toFixed(2)),
        contribution: Number(d2cContribution.toFixed(2)),
        marginPct: Number(d2cContributionPct.toFixed(1)),
      },
      techRetail: {
        name: "Argos & Currys",
        channelCost: Number(techChannelCost.toFixed(2)),
        cac: Number(cacWholesale.toFixed(2)),
        contribution: Number(techContribution.toFixed(2)),
        marginPct: Number(techContributionPct.toFixed(1)),
      },
      supermarket: {
        name: "Supermarkets (Tesco/Asda)",
        channelCost: Number(supermarketChannelCost.toFixed(2)),
        cac: Number((cacWholesale * 0.8).toFixed(2)),
        contribution: Number(supermarketContribution.toFixed(2)),
        marginPct: Number(supermarketContributionPct.toFixed(1)),
      },
      blended: {
        name: "Blended Omnichannel",
        contribution: Number(blendedContribution.toFixed(2)),
        marginPct: Number(((blendedContribution / netRevenue) * 100).toFixed(1)),
      },
    },
  };
};

export const defaultWaterfallSteps = [
  { step: "Gross Retail (MSRP)", amount: 29.99, type: "total" },
  { step: "UK VAT (20%)", amount: -5.00, type: "deduction" },
  { step: "Net Selling Revenue", amount: 24.99, type: "subtotal" },
  { step: "FOB Manufacturing", amount: -7.20, type: "deduction" },
  { step: "Ocean Freight & Ins.", amount: -0.85, type: "deduction" },
  { step: "HMRC Customs Duty", amount: -0.16, type: "deduction" },
  { step: "UKCA & WEEE Compliance", amount: -0.35, type: "deduction" },
  { step: "Landed Product COGS", amount: -8.56, type: "subtotal" },
  { step: "Fulfillment & Channel Fee", amount: -5.85, type: "deduction" },
  { step: "Customer Acquisition (CAC)", amount: -5.10, type: "deduction" },
  { step: "Net Contribution Profit", amount: 5.48, type: "final" },
];
