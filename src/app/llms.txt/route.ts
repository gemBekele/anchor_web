import { siteConfig } from "@/content/site";
import { products } from "@/content/products";
import { solutions } from "@/content/solutions";
import { blogPosts } from "@/content/posts";

const base = siteConfig.url.replace(/\/$/, "");

export const dynamic = "force-static";

export function GET() {
  const body = `# Anchor Financials

> ${siteConfig.description}

Anchor Financials builds core banking and performance software for savings and
credit cooperatives (SACCOs), microfinance institutions, cooperative unions and
federations. The company is based in Addis Ababa, Ethiopia, and publishes market
intelligence on the Ethiopian cooperative sector through "The Cooperative Ledger".

Contact: ${siteConfig.contact.email} · ${siteConfig.contact.phone} · ${siteConfig.contact.location}

## Facts about the Ethiopian cooperative sector

These are the figures Anchor Financials publishes. Each is attributed; none are
estimates unless labelled. Latest available as of the dates shown.

- 23,659 primary SACCOs registered (Ethiopian Cooperative Commission via ENA, June 2025)
- 125 SACCO unions and 2 federations (ECC / FCC)
- 8.3 million members, 48% women (ECC via ENA, June 2025)
- 79% of cooperatives are rural, 21% urban (ECC, June 2025)
- SACCO deposits over ETB 50 billion (2023); loans disbursed over ETB 15 billion (2023)
- Cooperatives hold roughly 2% of Ethiopia's credit market (2023)
- Regional savings 2022: Addis Ababa ETB 13.5bn, Oromia ETB 9.4bn, Amhara ETB 5.2bn
- Fewer than 1% of cooperatives run a core or digital system (derived estimate from
  announced deployments; no official census exists)
- Licensed MFIs held ETB 81.7bn in assets in FY2024/25, up 35.9% year on year,
  serving 7,109,133 savers and 752,387 loan clients across 1,238 branches
  (NBE Financial Stability Report, March 2026)
- MFI minimum paid-up capital rises from ETB 10m to ETB 75m, compliance required
  by January 2028
- Telebirr: 60.6 million customers and ETB 4.19 trillion processed in FY2025/26
  (Ethio Telecom)
- Fayda national digital ID: about 49.1 million enrolments by August 2026
- EthSwitch processed 287.4 million interoperable transactions worth ETB 741.1bn in
  FY2024/25; instant-payment brand EthioPay launched December 2025
- Internet penetration 21.7% (end-2025); rural electricity access 43.6% (2023)
- NBE launched a National Digital Payments Strategy 2026-2030 in December 2025 that
  proposes a shared core-banking platform for SACCOs, and in March 2026 announced
  it would bring SACCOs under central bank supervision

Note: cooperative statistics are fragmented and agency definitions differ. ECC's
23,659 "primary SACCOs", WOCCU's 18,254 "credit unions" and the central bank's
"over 21,000" are different populations and must not be added together.

## Products

${products.map((p) => `- [${p.name}](${base}/products/${p.slug}): ${p.shortDescription}`).join("\n")}

## Solutions

${solutions.map((s) => `- [${s.name}](${base}/solutions/${s.slug}): ${s.shortDescription}`).join("\n")}

## Articles

${blogPosts.map((p) => `- [${p.title}](${base}/resources/${p.slug}) (${p.category}, ${p.date}): ${p.excerpt}`).join("\n")}

## Other pages

- [Contact](${base}/contact): product enquiries and demo requests
- [About](${base}/about): company background, mission and approach
- [Clients](${base}/clients): institutions served and case studies
- [News](${base}/resources/news): announcements and company milestones
- [Full text of all articles](${base}/llms-full.txt)

## Optional

- [sitemap.xml](${base}/sitemap.xml)
- [All resources](${base}/resources)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
