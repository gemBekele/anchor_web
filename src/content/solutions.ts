import type { Solution } from "./types";

export const solutions: Solution[] = [
  {
    name: "SACCOs",
    slug: "saccos",
    shortDescription:
      "Digital tools designed around member-based financial organizations.",
    description:
      "SACCOs operate on member trust and operational discipline. Anchor Financials provides systems for managing members, savings, and loans so the institution can serve its membership accurately and at scale.",
    icon: "Users",
    institutionType: "SACCO",
    outcomes: [
      "Centralize member and account records",
      "Manage savings and loan portfolios consistently",
      "Improve operational reporting for management and committees",
    ],
    status: "published",
  },
  {
    name: "Microfinance Institutions",
    slug: "microfinance-institutions",
    shortDescription:
      "Technology for managing financial operations, customers, loans, and institutional performance.",
    description:
      "Microfinance institutions need systems that support both operational volume and performance oversight. Anchor Financials brings operations and performance together so management can act on what the data shows.",
    icon: "HandCoins",
    institutionType: "Microfinance Institution",
    outcomes: [
      "Manage customers and loan lifecycles in one system",
      "Track operational and financial performance",
      "Support growth without proportional administrative overhead",
    ],
    status: "published",
  },
  {
    name: "Growing Financial Institutions",
    slug: "growing-financial-institutions",
    shortDescription:
      "Scalable software infrastructure designed to support organizations as they grow.",
    description:
      "As cooperatives and growing financial organizations expand their membership, branches, and products, their systems need to keep pace. Anchor Financials is built around that reality.",
    icon: "Building2",
    institutionType: "Growing Financial Institution",
    outcomes: [
      "Start with the systems you need today",
      "Add products as the institution evolves",
      "Keep a connected ecosystem rather than isolated tools",
    ],
    status: "published",
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
