#!/usr/bin/env python3
"""
boAt UK Expansion: Unit Economics & Landed Cost Waterfall Engine
Author: Corporate Strategy & Global Expansion Lead
Subject: Imagine Marketing Limited (boAt) UK Market Entry (2027-2029)
"""

import sys

# Ensure UTF-8 output for currency symbols
if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

def compute_unit_economics(
    msrp=29.99,
    fob_cost_usd=9.00,
    gbp_usd_fx=1.25,
    shipping_multiplier=1.0,
    customs_rate=0.02,
    ukca_amort=0.15,
    weee_levy=0.20,
    cac_amazon=6.00,
    cac_d2c=7.50,
    cac_wholesale=1.80
):
    # 1. Tax & Net Top-line
    vat = msrp - (msrp / 1.20)  # UK 20% Standard VAT
    net_revenue = msrp - vat

    # 2. Landed Cost Buildup
    fob_gbp = fob_cost_usd / gbp_usd_fx
    freight = 0.85 * shipping_multiplier
    cif = fob_gbp + freight
    duty = cif * customs_rate
    landed_cogs = cif + duty + ukca_amort + weee_levy

    gross_profit = net_revenue - landed_cogs
    gross_margin_pct = (gross_profit / net_revenue) * 100

    # 3. Channel Distribution Models
    # A. Amazon UK (FBA)
    amazon_fee = (msrp * 0.15) + 2.85
    amazon_net = net_revenue - landed_cogs - amazon_fee - cac_amazon
    amazon_margin = (amazon_net / net_revenue) * 100

    # B. boAt D2C (Shopify UK)
    d2c_fee = (msrp * 0.024 + 0.20) + 2.95
    d2c_net = net_revenue - landed_cogs - d2c_fee - cac_d2c
    d2c_margin = (d2c_net / net_revenue) * 100

    # C. Tech Retailers (Argos & Currys)
    tech_fee = (net_revenue * 0.35) + 0.65
    tech_net = net_revenue - landed_cogs - tech_fee - cac_wholesale
    tech_margin = (tech_net / net_revenue) * 100

    # D. Supermarkets (Tesco, Sainsbury's, Asda)
    super_fee = (net_revenue * 0.38) + (net_revenue * 0.04) + 0.70
    super_net = net_revenue - landed_cogs - super_fee - (cac_wholesale * 0.8)
    super_margin = (super_net / net_revenue) * 100

    # E. Blended Omnichannel Mix (Y2: 40% Amz, 25% D2C, 22% Tech, 13% Super)
    blended_net = (
        amazon_net * 0.40 +
        d2c_net * 0.25 +
        tech_net * 0.22 +
        super_net * 0.13
    )
    blended_margin = (blended_net / net_revenue) * 100

    return {
        "msrp": msrp,
        "vat": vat,
        "net_revenue": net_revenue,
        "fob_gbp": fob_gbp,
        "freight": freight,
        "customs_duty": duty,
        "compliance": ukca_amort + weee_levy,
        "landed_cogs": landed_cogs,
        "gross_profit": gross_profit,
        "gross_margin_pct": gross_margin_pct,
        "channels": {
            "Amazon UK (FBA)": {"fee": amazon_fee, "cac": cac_amazon, "net": amazon_net, "margin": amazon_margin},
            "boAt D2C (Shopify)": {"fee": d2c_fee, "cac": cac_d2c, "net": d2c_net, "margin": d2c_margin},
            "Argos & Currys": {"fee": tech_fee, "cac": cac_wholesale, "net": tech_net, "margin": tech_margin},
            "Supermarkets (Tesco/Asda)": {"fee": super_fee, "cac": cac_wholesale * 0.8, "net": super_net, "margin": super_margin},
            "Blended Mix": {"net": blended_net, "margin": blended_margin}
        }
    }

def print_waterfall(results):
    print("=" * 70)
    print(" boAt UK Market Entry: Per-Unit Landed Economics & Margin Waterfall")
    print("=" * 70)
    print(f" Gross Retail Price (MSRP)      : GBP {results['msrp']:.2f}")
    print(f" Less: UK Value Added Tax (20%) : -GBP {results['vat']:.2f}")
    print(f" -------------------------------------------------------------")
    print(f" Net Realized Top-Line Revenue  : GBP {results['net_revenue']:.2f} (100.0%)")
    print(f" Less: Manufacturing FOB (India): -GBP {results['fob_gbp']:.2f}")
    print(f" Less: Ocean Freight & Ins.     : -GBP {results['freight']:.2f}")
    print(f" Less: HMRC Duty (Code 85183000): -GBP {results['customs_duty']:.2f}")
    print(f" Less: UKCA & WEEE Directives   : -GBP {results['compliance']:.2f}")
    print(f" -------------------------------------------------------------")
    print(f" Landed Product Cost (COGS)     : GBP {results['landed_cogs']:.2f} ({(results['landed_cogs']/results['net_revenue'])*100:.1f}%)")
    print(f" Gross Product Profit           : GBP {results['gross_profit']:.2f} ({results['gross_margin_pct']:.1f}%)")
    print("=" * 70)
    print(" Channel-by-Channel Net Contribution Margins:")
    print("-" * 70)
    for channel, metrics in results["channels"].items():
        if channel == "Blended Mix":
            print(f" * {channel:<28} -> Net: GBP {metrics['net']:>5.2f} | Margin: {metrics['margin']:>5.1f}%")
        else:
            print(f" - {channel:<28} -> Fee: GBP {metrics['fee']:>5.2f} | CAC: GBP {metrics['cac']:>4.2f} | Net: GBP {metrics['net']:>5.2f} ({metrics['margin']:>4.1f}%)")
    print("=" * 70)

if __name__ == "__main__":
    res = compute_unit_economics()
    print_waterfall(res)
