import type { Post } from "../types";

export const saccoDepositsByRegion: Post = {
  title: "Where the Deposits Actually Sit",
  slug: "sacco-deposits-by-region-ethiopia",
  category: "SACCO Sector",
  kind: "blog",
  excerpt:
    "Addis Ababa, Oromia and Amhara published savings figures for 2022. Nobody has published the rest. That single gap shapes every regional plan built on this sector.",
  author: "Anchor Financials Research Desk",
  date: "2026-09-27",
  tags: ["SACCO", "Deposits", "Regions", "Ethiopia"],
  status: "published",
  primaryKeyword: "SACCO deposits by region in Ethiopia",
  secondaryKeywords: [
    "Ethiopian cooperative savings",
    "Amhara SACCOs",
    "Oromia SACCO savings",
    "Addis Ababa cooperative deposits",
  ],
  searchIntent: "informational",
  metaDescription:
    "Only three Ethiopian regions published SACCO savings figures for 2022. What those numbers show, what they hide, and where the realistic first customers are.",
  body: [
    {
      type: "p",
      text: "The 2022 regional savings breakdown for Ethiopia's cooperative sector runs to three lines. Addis Ababa held 13.5 billion birr in savings and share capital, Oromia 9.4 billion, Amhara 5.2 billion. Those are the only regions the Federal Cooperative Commission published.",
    },
    {
      type: "p",
      text: "Three regions out of eleven is a thin base for planning. It is also, in a way, the most useful thing in this sector's data, because the concentration it reveals is the whole commercial story.",
    },
    {
      type: "figure",
      caption:
        "Savings and share capital by region, 2022 (ETB bn). Federal Cooperative Commission via Ethiopian Business Review. No regional asset breakdown has been published since 2022.",
      stats: [
        { label: "Addis Ababa savings and share capital (2022)", value: "ETB 13.5bn" },
        { label: "Oromia (2022)", value: "ETB 9.4bn" },
        { label: "Amhara (2022)", value: "ETB 5.2bn" },
      ],
    },
    { type: "h2", text: "The three regions are not the same kind of customer" },
    {
      type: "p",
      text: "Addis Ababa's 13.5 billion is the largest share, and it comes from a small number of comparatively large institutions operating in a capital. Amhara's 5.2 billion sits alongside 2,982 primary cooperatives, 97 unions and a federation serving more than a million members. That is a very different shape: far more institutions, each far smaller, organised under a dense union structure.",
    },
    {
      type: "p",
      text: "Oromia sits between them on the published figures and carries the largest absolute count in our own prospect database — 82 of 154 mapped organisations, ahead of Addis Ababa's 76.",
    },
    {
      type: "p",
      text: "So a plan that treats \"Ethiopia\" as a single market will get the concentration right and the operating model wrong. The institutions with money and managerial capacity are clustered, and the institutions with volume are distributed and small.",
    },
    { type: "h2", text: "Why the average tells you almost nothing" },
    {
      type: "p",
      text: "National totals produce an average cooperative of roughly 351 members holding about 6,250 birr in deposits. Both figures are derived arithmetic, and both are pulled down by thousands of small rural societies — 79 percent of registered cooperatives are rural, 21 percent urban.",
    },
    {
      type: "p",
      text: "A software business does not start in the average. It starts where there is budget, staff and ambition: cooperatives that count thousands rather than hundreds of members, run several branches, and can employ a finance officer and an IT person. Those are overwhelmingly urban and peri-urban. The rural long tail is real, and it is only reachable economically through a union or a shared platform.",
    },
    {
      type: "callout",
      title: "The constraint nobody publishes",
      text: "Somali, Afar and Gambella could not be verified at the level of named cooperatives or unions from public sources. They appear in aggregate statistics only. Any regional coverage plan that claims to include them is, at best, quoting an aggregate and presenting it as a pipeline.",
    },
    { type: "h2", text: "What has changed since 2022" },
    {
      type: "p",
      text: "Nothing published, which is the honest answer. The last regional asset figures we can point to are three years old, and the cooperative sector has grown substantially across that period — the 2021 count of 21,328 institutions rose to 23,659 by June 2025.",
    },
    {
      type: "p",
      text: "In the absence of newer data, the reliable proxies for institutional activity are the ones that show movement: regions with high density in a prospect database built from public sources, and regions whose unions are publishing governance, issuing tenders or hiring IT staff. In our mapping, Oromia and Addis Ababa lead on volume, South Ethiopia follows with 19 organisations, then Amhara with 13 and Tigray with 7.",
    },
    { type: "h2", text: "Where that leaves a first customer" },
    {
      type: "p",
      text: "The regions that published data are also the regions where the purchasing decisions are made, and the organisations most likely to be in motion are rarely the largest. A union publishing its governance, a cooperative issuing a core-banking tender, a society hiring a senior IT officer — these are the signals that actually precede a purchase.",
    },
    {
      type: "p",
      text: "The practical conclusion is uncomfortable for anyone hoping for a national map on day one. The data supports starting with a small number of concentrated, well-organised buyers, and earning the regions that have never published a number by showing up in them.",
    },
    {
      type: "sources",
      items: [
        "Federal Cooperative Commission via Ethiopian Business Review, 2022 (regional savings and share capital, federations)",
        "Ethiopian Cooperative Commission via ENA, June 2025 (institution and membership counts, rural/urban split)",
        "FCA via ICA-EU Key Figures, 2021; NBE FSR November 2024",
        "Anchor prospect database, 154 organisations compiled from public sources",
      ],
    },
  ],
};
