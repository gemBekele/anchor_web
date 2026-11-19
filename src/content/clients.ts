import type { Client } from "./types";

/** Sample client data for demonstration. Replace with confirmed client information. */
export const clients: Client[] = [
  {
    name: "Unity Savings & Credit SACCO",
    industry: "SACCO",
    description:
      "A member-based savings and credit cooperative serving urban and peri-urban members.",
    caseStudySlug: "case-study-core-banking-implementation",
    status: "published",
  },
  {
    name: "Green Valley Microfinance",
    industry: "Microfinance",
    description:
      "A microfinance institution providing working-capital and group loans to small businesses.",
    status: "published",
  },
  {
    name: "Abay Multipurpose Cooperative",
    industry: "Cooperative",
    description:
      "A multipurpose cooperative managing member savings, shares, and credit services.",
    status: "published",
  },
  {
    name: "Sunrise Capital Finance",
    industry: "Financial Institution",
    description:
      "A growing financial organization expanding its branch network and product lines.",
    status: "published",
  },
  {
    name: "Selam Community SACCO",
    industry: "SACCO",
    description:
      "A community-focused SACCO modernizing its savings and lending operations.",
    status: "published",
  },
  {
    name: "Horizon Microcredit",
    industry: "Microfinance",
    description:
      "A microcredit provider focused on inclusive finance for micro-entrepreneurs.",
    status: "published",
  },
];

/** Technology / implementation partners. */
export const partners: Client[] = [
  {
    name: "Blue Nile Cloud",
    industry: "Infrastructure",
    description: "Hosting and managed infrastructure partner.",
    status: "published",
  },
  {
    name: "Mesob Data Systems",
    industry: "Technology",
    description: "Data integration and analytics partner.",
    status: "published",
  },
];
