// UK Regulatory Compliance, Customs Tariffs & Supply Chain Logistics Protocol
// Grounded in HMRC.pdf, UKCA Marking.pdf, and WEEE.pdf official government directives

export const regulatoryFrameworks = [
  {
    pillar: "UKCA Marking Protocol",
    governingBody: "Department for Business and Trade (DBT)",
    regulation: "Radio Equipment Regulations 2017 & EMC Regulations 2016",
    status: "Mandatory for Great Britain Market",
    riskLevel: "Critical (Border Impoundment if Non-Compliant)",
    requirements: [
      "Appoint an established UK-based Authorized Representative / Importer of Record.",
      "Compile comprehensive Technical File (schematics, test certificates, bill of materials).",
      "Sign formal Declaration of Conformity (DoC) before dispatch from Indian manufacturing hubs.",
      "Affix indelible UKCA logo (minimum 5mm height) on product hardware and retail packaging.",
      "Maintain all audit and compliance records for a mandatory 10-year retention period.",
    ],
  },
  {
    pillar: "WEEE Directive & Battery Regulations",
    governingBody: "Office for Product Safety and Standards (OPSS) & DEFRA",
    regulation: "Waste Electrical and Electronic Equipment Regulations 2013 / 2025",
    status: "Mandatory Annual Compliance",
    riskLevel: "High (Substantial Fines & Retail Delisting)",
    requirements: [
      "Annual registration with the Environment Agency as a verified EEE producer.",
      "Join an accredited UK Producer Compliance Scheme (PCS) (e.g. Valpak) upon exceeding 5 tonnes of annual hardware.",
      "Finance household electrical recycling and end-of-life collection quotas.",
      "Subtract and separately report Lithium-ion battery weight under UK Waste Batteries regime.",
      "Display official 'Crossed-out Wheeled Bin' symbol (BS EN 50419) across all consumer units.",
    ],
  },
  {
    pillar: "HMRC Customs & VAT Architecture",
    governingBody: "HM Revenue & Customs (HMRC)",
    regulation: "UK Integrated Online Tariff & VAT Act 1994",
    status: "Commercial Clearance Prerequisite",
    riskLevel: "High (Cash Flow Seizure & Duty Penalties)",
    requirements: [
      "Classify hearables strictly under Commodity Code 8518 30 00 (Headphones & Earphones).",
      "Avoid classification ambiguity with 8517 62 90 to prevent customs delays (mitigating Note 33 domestic Indian SCN precedents).",
      "UK EORI (Economic Operators Registration and Identification) number integration.",
      "20% Standard UK VAT levied on retail point of sale, reclaimed on landed CIF port entry.",
      "Import entries declared via CDS (Customs Declaration Service).",
    ],
  },
  {
    pillar: "Maritime Supply Chain & 3PL Logistics",
    governingBody: "boAt Global Supply Chain Operations",
    regulation: "Commercial SLA & Inventory Buffer Mandate",
    status: "Operational Safeguard",
    riskLevel: "Medium (Stockouts & Amazon Prime De-ranking)",
    requirements: [
      "Strategic 3PL fulfillment hub situated in the Midlands (Birmingham) for nationwide 24h road access.",
      "Direct container drayage from Port of Southampton and Port of Felixstowe.",
      "Maintain a rolling 60-day inventory safety stock in the UK 3PL warehouse to buffer Suez/Red Sea diversions.",
      "EDI integration with Amazon FBA replenishment, Argos Magna Park, and Currys Central DC.",
      "Hassle-free 1-year UK warranty swap center operated directly via the Midlands 3PL facility.",
    ],
  },
];

export const threatMatrix = [
  {
    threat: "Customs Tariff Misclassification",
    category: "Regulatory / Financial",
    probability: "Medium",
    impact: "High",
    mitigation: "Pre-cleared HMRC Binding Tariff Information (BTI) ruling for Code 8518 30 00 prior to first container dispatch.",
  },
  {
    threat: "Red Sea & Maritime Shipping Delays",
    category: "Supply Chain",
    probability: "High",
    impact: "Medium",
    mitigation: "60-day rolling inventory reserve at Birmingham 3PL; split sea freight with air emergency allocation for top SKUs.",
  },
  {
    threat: "Incumbent Price War (Skullcandy / Anker)",
    category: "Market Competition",
    probability: "High",
    impact: "Medium",
    mitigation: "Califonix JV backward integration enables resilient 65% gross margin; focus on Gen Z fashion aesthetic rather than commoditized spec battle.",
  },
  {
    threat: "High UK Product Return / RMA Rates",
    category: "Operational / Quality",
    probability: "Medium",
    impact: "High",
    mitigation: "Enhanced QC testing protocols at Dixon facility; seamless 1-year no-questions-asked replacement policy to protect Amazon review score.",
  },
  {
    threat: "GBP/INR Exchange Rate Depreciation",
    category: "Financial / Treasury",
    probability: "Medium",
    impact: "Medium",
    mitigation: "Rolling 6-month forward currency hedging contracts locking in favorable GBP/USD and USD/INR baselines.",
  },
];
