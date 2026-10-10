#!/usr/bin/env python3
"""
boAt Domestic Foundation: FY23-FY26 Audited Financial Analysis & Solvency Check
Author: Corporate Strategy & Global Expansion Lead
Subject: Imagine Marketing Limited (boAt) Balance Sheet Health Check
"""

import sys
import pandas as pd

if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

financial_data = {
    "Financial Year": ["FY 2022-23", "FY 2023-24", "FY 2024-25", "FY 2025-26"],
    "Revenue (INR Cr)": [3284.76, 3121.60, 3089.64, 2928.08],
    "EBITDA (INR Cr)": [-50.21, 14.02, 128.78, 205.63],
    "PAT (INR Cr)": [-101.04, -53.59, 64.22, 92.15],
    "Bank Debt (INR Cr)": [732.99, 356.19, 90.07, 0.00],
    "Liquid Reserves (INR Cr)": [139.23, 246.76, 277.11, 356.92],
    "Export Sales (INR Cr)": [8.50, 10.75, 11.70, 41.90]
}

def analyze_turnaround():
    df = pd.DataFrame(financial_data)
    df["EBITDA Margin (%)"] = (df["EBITDA (INR Cr)"] / df["Revenue (INR Cr)"] * 100).round(2)
    df["PAT Margin (%)"] = (df["PAT (INR Cr)"] / df["Revenue (INR Cr)"] * 100).round(2)
    df["Debt-to-Cash Ratio"] = (df["Bank Debt (INR Cr)"] / df["Liquid Reserves (INR Cr)"]).round(2)

    print("=" * 80)
    print(" Imagine Marketing Limited (boAt): 4-Year Audited Turnaround Audit")
    print("=" * 80)
    print(df.to_string(index=False))
    print("=" * 80)
    print(" Strategic Expansion Takeaways:")
    print(" 1. Short-Term Bank Borrowings systematically extinguished to INR 0.00 Cr in FY26.")
    print(" 2. Operating turnaround from -INR 101 Cr PAT loss to +INR 92.15 Cr PAT (+3.15% margin).")
    print(" 3. International Exports accelerated by +258% YoY in FY26 to INR 41.90 Cr.")
    print(" 4. Domestic war chest of INR 356+ Cr provides 100% self-funding for UK seed capital.")
    print("=" * 80)

if __name__ == "__main__":
    analyze_turnaround()
