import type { Post } from "../types";

export const ethiopiaSaccoGrowthHistory: Post = {
  title: "From 495 Cooperatives in 1991 to 23,659 Today",
  slug: "ethiopia-sacco-growth-history",
  category: "SACCO Sector",
  kind: "blog",
  excerpt:
    "The cooperative sector did not grow smoothly. The interesting part is what the growth curve implies about who a new institution should be selling to.",
  author: "Anchor Financials Research Desk",
  date: "2026-09-28",
  tags: ["SACCO", "History", "Cooperatives", "Ethiopia"],
  status: "published",
  primaryKeyword: "history of SACCOs in Ethiopia",
  secondaryKeywords: [
    "Ethiopia first credit union",
    "cooperative movement growth",
    "Ethiopian Airlines credit union",
    "cooperative liberalisation Ethiopia",
  ],
  searchIntent: "informational",
  metaDescription:
    "Ethiopia's first credit union began in an airline payroll office in 1964. By 2025 there were 23,659. What the growth curve says about today's market.",
  body: [
    {
      type: "p",
      text: "The story starts in a payroll office. In 1964, a group of Ethiopian Airlines employees pooled their savings into what is widely described as the country's first credit union. A decade later there were 28 such institutions and some six thousand members.",
    },
    {
      type: "p",
      text: "It is worth pausing on that detail. The first one was not a rural development programme. It was a group of people with a payroll, sitting in the same building, solving the problem of not having anywhere safe to put money between paydays. Almost everything about how cooperatives have grown since follows from that origin.",
    },
    { type: "h2", text: "The curve, in four points" },
    {
      type: "table",
      head: ["Year", "Cooperatives", "Members"],
      rows: [
        ["1991", "495", "Fewer than 120,000"],
        ["2014", "14,453", "1.7 million"],
        ["2021", "21,328", "5.4 million"],
        ["2025", "23,659", "8.3 million"],
      ],
    },
    {
      type: "p",
      text: "The sector grew slowly, then explosively, through the economic liberalisation of the 1990s and the cooperative promotion drives of the 2000s. Membership in 2025 was 48 percent women, up from 46 percent in 2022 — a slow, steady change rather than a recent shift.",
    },
    { type: "h2", text: "Read the ratio, not the totals" },
    {
      type: "p",
      text: "Institutions roughly doubled over the last decade while membership grew more than fourfold. That difference is the most useful thing in the series, and it is not about market size.",
    },
    {
      type: "p",
      text: "A sector where membership grows faster than institution count is a sector where existing cooperatives are getting bigger. The average cooperative in 2025 serves roughly 351 members — derived from the totals, and dragged down by thousands of very small rural societies, but directionally clear.",
    },
    {
      type: "p",
      text: "For a supplier, that distinction decides what you build. The institutions being created at 500 members and the institutions now running past 3,000 have almost nothing in common operationally: different ledger volumes, different approval structures, different reporting obligations, different staff. Treating them as one market is how you end up with a product that fits neither.",
    },
    { type: "h2", text: "What 2025 looks like structurally" },
    {
      type: "ul",
      items: [
        "**23,659** primary SACCOs, registered (ECC via ENA, June 2025)",
        "**125** SACCO unions and **2** federations — the Amhara and Addis federations",
        "**8.3 million** members, **48%** women",
        "**79%** of institutions rural, **21%** urban",
        "Around **2%** of the country's credit market",
      ],
    },
    {
      type: "p",
      text: "That 125 union figure deserves more attention than it usually gets. One union is a single contract that standardises dozens of member cooperatives at once. It is the only structure in the sector where a small number of transactions reaches a large number of institutions, and it is conspicuously under-served.",
    },
    {
      type: "h2",
      text: "A caution on the series",
    },
    {
      type: "p",
      text: "The four points above come from three different source families — the federal agency for 1991, FCA for 2014 and 2021, the Ethiopian Cooperative Commission for 2025. Definitions of registered, active, SACCO and credit union differ across years. The series is indicative of direction and should not be quoted as a precise growth rate.",
    },
    {
      type: "p",
      text: "There is also a gap after 2022: no regional asset figures, and no official count of which of those 23,659 institutions are active rather than merely registered. If a plan depends on knowing how many of them are actually trading, that number has to be established locally.",
    },
    {
      type: "p",
      text: "Six decades on, the same logic that produced the first credit union still holds: a group of people with a common employer or a common bond, pooling savings they cannot otherwise keep safe. The institutions have scaled dramatically. The tools most of them use to record that savings have not.",
    },
    {
      type: "sources",
      items: [
        "Ethiopian Cooperative Commission via ENA, June 2025",
        "FCA via ICA-EU Key Figures, 2021; FCA via Kifle Tesfamariam, 2014",
        "Federal agency records for 1991",
        "WOCCU 2025 Statistical Report (alternative definition: 18,254 credit unions)",
        "NBE Financial Stability Report, November 2024",
      ],
    },
  ],
};
