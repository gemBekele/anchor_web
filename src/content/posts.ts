import type { Post } from "./types";
import { articles } from "./articles";

/**
 * Non-article content: announcements, case studies and release notes.
 * Long-form editorial lives in ./articles.
 */
const newsAndUpdates: Post[] = [
  {
    title: "Anchor Financials launches a new digital platform for SACCO management",
    slug: "anchor-launches-digital-platform-for-sacco-management",
    category: "Product Launch",
    kind: "news",
    excerpt:
      "The updated Anchor platform brings core banking, performance management, and member self-service into one connected ecosystem for SACCOs and microfinance institutions.",
    body: [
      {
        type: "p",
        text: "Anchor Financials has launched an updated digital platform designed to help SACCOs and microfinance institutions run their operations from a single connected ecosystem.",
      },
      {
        type: "p",
        text: "The platform brings together the Anchor Core Banking System, Performance Management System, and Mobile Member App, with shared data foundations and consistent role-based access.",
      },
      {
        type: "p",
        text: "“Financial institutions should not have to stitch together disconnected tools,” said Dawit Bekele, Chief Executive Officer. “Our goal is to give them one partner and one system they can rely on every day.”",
      },
    ],
    date: "2026-03-01",
    tags: ["Announcement", "Product"],
    status: "published",
  },
  {
    title: "Anchor Financials partners with Blue Nile Cloud to expand hosted deployments",
    slug: "anchor-partners-with-blue-nile-cloud",
    category: "Partnership",
    kind: "news",
    excerpt:
      "The partnership gives institutions a managed hosting option with local infrastructure and support.",
    body: [
      {
        type: "p",
        text: "Anchor Financials has partnered with Blue Nile Cloud to offer managed hosting for institutions that prefer not to run infrastructure in-house.",
      },
      {
        type: "p",
        text: "The arrangement provides local hosting, backup, and support coverage, alongside the existing on-premise deployment option.",
      },
      {
        type: "p",
        text: "Institutions interested in managed hosting can discuss their requirements with the Anchor Financials team.",
      },
    ],
    date: "2026-03-18",
    tags: ["Partnership", "Hosting"],
    status: "published",
  },
  {
    title: "Anchor Financials to exhibit at the National SACCO & Microfinance Forum",
    slug: "anchor-at-national-sacco-microfinance-forum",
    category: "Events",
    kind: "news",
    excerpt:
      "Meet the Anchor Financials team and see the platform in action at this year's forum.",
    body: [
      {
        type: "p",
        text: "Anchor Financials will exhibit at the National SACCO & Microfinance Forum, showcasing the latest release of its core banking and performance management products.",
      },
      {
        type: "p",
        text: "Visitors can book a one-to-one demonstration with the team during the event.",
      },
      {
        type: "p",
        text: "Event dates and the Anchor Financials stand location will be announced closer to the forum.",
      },
    ],
    date: "2026-04-02",
    tags: ["Events"],
    status: "published",
  },
  {
    title: "Unity Savings & Credit SACCO — Core Banking Implementation",
    slug: "case-study-core-banking-implementation",
    category: "Case Study",
    kind: "case-study",
    excerpt:
      "How a growing SACCO replaced fragmented spreadsheets with a single core banking system for members, savings, and loans.",
    body: [
      {
        type: "p",
        text: "Unity Savings & Credit SACCO had outgrown the spreadsheets used to manage its members and loan book. This case study outlines the challenge, the solution deployed, and the results.",
      },
    ],
    client: "Unity Savings & Credit SACCO",
    challenge:
      "Member records, savings, and loans were managed across multiple spreadsheets, making reporting slow and increasing the risk of inconsistency between branches.",
    solution:
      "The Anchor Core Banking System was configured around the SACCO's savings products and loan cycle, with role-based access for branch staff and consolidated reporting for management.",
    impact:
      "Month-end consolidation time fell from several days to under a day, and management gained a single, consistent view of members, savings, and the loan portfolio.",
    date: "2026-02-25",
    tags: ["Case Study", "Core Banking"],
    status: "published",
  },
  {
    title: "Green Valley Microfinance — Performance Management Rollout",
    slug: "case-study-performance-management-rollout",
    category: "Case Study",
    kind: "case-study",
    excerpt:
      "How a microfinance institution gave its management team an ongoing view of institutional performance.",
    body: [
      {
        type: "p",
        text: "Green Valley Microfinance relied on month-end reports that arrived too late to act on. This case study covers the rollout of the Anchor Performance Management System.",
      },
    ],
    client: "Green Valley Microfinance",
    challenge:
      "Management saw performance only through retrospective month-end reports, limiting the ability to respond to emerging trends.",
    solution:
      "The Anchor Performance Management System was deployed with indicators defined around the institution's own targets, alongside dashboards for management review.",
    impact:
      "Management shifted from retrospective reporting to an ongoing view of performance, with indicators reviewed on a regular cadence.",
    date: "2026-03-10",
    tags: ["Case Study", "Performance"],
    status: "published",
  },
  {
    title: "Release 4.2 — Faster reporting and improved member search",
    slug: "product-update-release-4-2",
    category: "Product Update",
    kind: "product-update",
    excerpt:
      "This release speeds up large report generation and adds more flexible member search across branches.",
    body: [
      {
        type: "p",
        text: "Release 4.2 focuses on day-to-day speed and usability.",
      },
      {
        type: "p",
        text: "Highlights: faster generation of large reports, improved member search with filters for branch and status, and refinements to the mobile member experience.",
      },
      {
        type: "p",
        text: "The release is available to hosted institutions now and can be scheduled for on-premise deployments with our support team.",
      },
    ],
    date: "2026-03-15",
    tags: ["Product Update", "Release"],
    status: "published",
  },
  {
    title: "Roadmap update — Q3 2026",
    slug: "product-update-roadmap-q3-2026",
    category: "Product Update",
    kind: "product-update",
    excerpt:
      "A look at what the product team is working on next, including deeper reporting and agent-network tools.",
    body: [
      {
        type: "p",
        text: "Our Q3 2026 focus areas are reporting, agent-network management, and continued mobile improvements.",
      },
      {
        type: "p",
        text: "Planned work includes additional standard reports, expanded agent and float tracking, and usability refinements across the platform.",
      },
      {
        type: "p",
        text: "Roadmap items are indicative and may change as we incorporate feedback from institutions.",
      },
    ],
    date: "2026-04-10",
    tags: ["Product Update", "Roadmap"],
    status: "published",
  },
];

export const posts: Post[] = [...articles, ...newsAndUpdates].sort((a, b) =>
  a.date < b.date ? 1 : -1,
);

export const blogPosts = posts.filter((p) => p.kind === "blog");
export const newsPosts = posts.filter((p) => p.kind === "news");
export const caseStudies = posts.filter((p) => p.kind === "case-study");
export const productUpdates = posts.filter((p) => p.kind === "product-update");

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(limit = 3) {
  return blogPosts.slice(0, limit);
}
