import type { Post } from "../types";

export const ethiopianSaccoStatisticsExplained: Post = {
  title: "23,659 or 21,000 or 18,254? Reading Ethiopian SACCO Statistics Without Fooling Yourself",
  slug: "ethiopian-sacco-statistics-explained",
  category: "Data & Definitions",
  kind: "blog",
  excerpt:
    "Three agencies, three different counts of Ethiopian cooperatives, and no overlap. A guide to the definitions before you plan anything on top of them.",
  author: "Anchor Financials Research Desk",
  date: "2026-09-26",
  tags: ["Statistics", "Data", "Ethiopia", "Cooperative Commission"],
  status: "published",
  primaryKeyword: "Ethiopian SACCO statistics explained",
  secondaryKeywords: [
    "how many SACCOs in Ethiopia",
    "Ethiopian Cooperative Commission data",
    "WOCCU credit union statistics",
    "cooperative sector definitions",
  ],
  searchIntent: "informational",
  metaDescription:
    "Ethiopia's cooperative sector is counted three different ways. ECC says 23,659, WOCCU says 18,254, NBE says over 21,000. Here's what the differences mean.",
  body: [
    {
      type: "p",
      text: "Ask three people how many cooperatives Ethiopia has and you will get three answers that do not agree. The Ethiopian Cooperative Commission counted 23,659 primary savings and credit cooperatives in June 2025. The World Organisation of Credit Union Councils, using its own registration definition, counted 18,254 credit unions in 2025. The National Bank of Ethiopia, which classes SACCOs as non-systemic institutions, refers to \"over 21,000\".",
    },
    {
      type: "p",
      text: "None of these is a mistake. All of them are measuring something slightly different, and the differences are large enough to change conclusions. Two of those three figures are routinely quoted in the same sentence.",
    },
    {
      type: "table",
      head: ["Figure", "As of", "Source", "Definition used"],
      rows: [
        ["23,659", "June 2025", "ECC via ENA", "Registered primary SACCOs"],
        ["18,254", "2025", "WOCCU", "Credit unions, own registration basis"],
        ["Over 21,000", "2024", "NBE FSR November 2024", "Broader sector class, non-systemic"],
        ["21,328", "2021", "FCA via ICA-EU", "Primary SACCOs"],
        ["14,453", "2014", "FCA", "Primary SACCOs"],
        ["495", "1991", "Federal agency", "Cooperatives, under 120,000 members"],
      ],
    },
    { type: "h2", text: "Why the numbers drift apart" },
    {
      type: "p",
      text: "Three things are happening at once.",
    },
    {
      type: "p",
      text: "**Different registration regimes.** A cooperative registers with the Cooperative Commission under the cooperatives framework, but some institutions are registered as credit unions, some as financial cooperatives, and some appear on more than one register. WOCCU's definition is built around its own member-association registration, which does not align line for line with the Commission's.",
    },
    {
      type: "p",
      text: "**Registered is not active.** Both headline counts are registration counts. How many of those institutions actually operate, hold deposits and file returns is a different and much smaller number, and no agency publishes it on a regular schedule.",
    },
    {
      type: "p",
      text: "**Timing.** The figures come from different years and different reporting cycles. Comparing a 2025 Commission count with a 2024 central bank figure and a 2021 series point is fine for direction and wrong for precision.",
    },
    {
      type: "callout",
      title: "The rule we follow",
      text: "Do not add these numbers together. ECC's 23,659 and WOCCU's 18,254 overlap substantially; summing them to claim 41,000+ cooperatives is a common error and it is wrong.",
    },
    { type: "h2", text: "The growth series, with the caveat attached" },
    {
      type: "p",
      text: "Treated as indicative rather than exact, the direction of travel is clear and steep. In 1991 the federal agency recorded 495 cooperatives and fewer than 120,000 members. By 2014 there were 14,453 cooperatives and 1.7 million members. By 2021, 21,328 and 5.4 million. By 2025, 23,659 and 8.3 million.",
    },
    {
      type: "p",
      text: "The interesting part is the shape. Institutions roughly doubled over the last decade while membership grew more than fourfold. The average cooperative is getting larger — which matters a great deal if you are selling to them, because the median institution is meaningfully different from the one the national average describes.",
    },
    {
      type: "p",
      text: "Run the arithmetic on the 2025 totals and you get an average of roughly 351 members per cooperative and about 6,250 birr of deposits per member. Both are derived, not published, and both are dragged down heavily by thousands of very small rural societies. Treat them as the bottom of the distribution, not the middle.",
    },
    { type: "h2", text: "Regional figures are thinner than people assume" },
    {
      type: "p",
      text: "The 2022 regional breakdown published by the Federal Cooperative Commission covers only three regions: Addis Ababa held the largest share of savings at 13.5 billion birr, followed by Oromia at 9.4 billion and Amhara at 5.2 billion. Amhara alone hosted 2,982 primary cooperatives, 97 unions and a federation, serving more than a million members.",
    },
    {
      type: "p",
      text: "No regional asset breakdown has been published since 2022. If you are building a regional view for a lender, an investor or a business plan, the honest position is that four or more regions are simply missing rather than small.",
    },
    { type: "h2", text: "Figures we would not use without a second look" },
    {
      type: "p",
      text: "WOCCU's Ethiopian dollar figures repeat identically across two consecutive annual reports — the 2025 report and the 2024 report show the same number for the same sector, and the 2024 figure was 1.2 billion dollars where the 2025 figure is 600 million. Identical values across years, and a halving between them, point to a stale or broken series. We treat those as low reliability and do not build anything on them.",
    },
    {
      type: "p",
      text: "For the same reason, be careful with any statistic that mixes agency and vendor sources in a single series without labelling which is which.",
    },
    { type: "h2", text: "What nobody publishes" },
    {
      type: "ul",
      items: [
        "Any agency estimate of **cooperative contribution to GDP** — genuinely unknown.",
        "A **regional asset breakdown** after 2022.",
        "**Software tender award values** for cooperative systems, by cooperatives or unions.",
        "An **official digitisation count**. The widely repeated sub-one-percent figure is derived from announced deployments, not a census, because no census exists.",
        "Counts of Somali, Afar and Gambella cooperatives by name. Those regions appear only in aggregate, and answering the question needs outreach to regional cooperative agencies.",
      ],
    },
    {
      type: "p",
      text: "That last list matters more than it looks. A statistic you cannot find is often the one a business case quietly depends on. If your plan needs a number from this page's missing section, you need to go and collect it rather than model around it.",
    },
    {
      type: "sources",
      items: [
        "Ethiopian Cooperative Commission via ENA, June 2025",
        "WOCCU 2025 Statistical Report",
        "NBE Financial Stability Report, November 2024",
        "FCA via ICA-EU Key Figures; FCA via Kifle Tesfamariam",
        "Federal Cooperative Commission via Ethiopian Business Review, 2022",
      ],
    },
  ],
};
