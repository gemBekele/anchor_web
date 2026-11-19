import type { Block } from "@/content/types";
import { siteConfig } from "@/content/site";
import { posts } from "@/content/posts";

/** Emits a JSON-LD graph. Kept in one place so every page speaks about the
 *  same entities with the same identifiers — which is what entity resolution
 *  (Google) and retrieval (LLM answer engines) both depend on. */
export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? { "@context": "https://schema.org", "@graph": data } : data;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

const base = siteConfig.url.replace(/\/$/, "");
const orgId = `${base}/#organization`;
const siteId = `${base}/#website`;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": orgId,
    name: siteConfig.name,
    legalName: siteConfig.name,
    url: `${base}/`,
    description: siteConfig.description,
    logo: {
      "@type": "ImageObject",
      "@id": `${base}/brand/anchor-logo.svg`,
      url: `${base}/brand/anchor-logo.svg`,
      contentUrl: `${base}/brand/anchor-logo.svg`,
      width: 936,
      height: 290,
      caption: "Anchor Financials — Core Banking Solution",
    },
    image: { "@id": `${base}/brand/anchor-logo.svg` },
    slogan: "Core banking for SACCOs and microfinance institutions",
    foundingDate: "2016",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Addis Ababa",
      addressCountry: "ET",
    },
    areaServed: [
      { "@type": "Country", name: "Ethiopia" },
      { "@type": "Place", name: "East Africa" },
    ],
    knowsAbout: [
      "Core banking systems",
      "Savings and credit cooperatives (SACCOs)",
      "Microfinance institutions",
      "Cooperative unions and federations",
      "Digital payments",
      "Electronic KYC",
      "Mobile financial services",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        areaServed: "ET",
        availableLanguage: ["en"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        areaServed: "ET",
        availableLanguage: ["en"],
      },
    ],
    sameAs: [siteConfig.contact.linkedin],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": siteId,
    url: `${base}/`,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: { "@id": orgId },
  };
}

export function webPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@type": "WebPage",
    "@id": `${base}${path}#webpage`,
    url: `${base}${path}`,
    name,
    description,
    isPartOf: { "@id": siteId },
    about: { "@id": orgId },
    inLanguage: "en",
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${base}${trail[trail.length - 1]?.path ?? "/"}#breadcrumb`,
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base}${item.path}`,
    })),
  };
}

function blockText(block: Block): string {
  switch (block.type) {
    case "p":
    case "h2":
    case "h3":
    case "quote":
      return block.text;
    case "callout":
      return `${block.title ? `${block.title}: ` : ""}${block.text}`;
    case "ul":
    case "ol":
    case "checklist":
    case "sources":
      return block.items.join(" ");
    case "figure":
      return block.stats.map((s) => `${s.value} ${s.label}`).join(". ");
    case "table":
      return [...block.head, ...block.rows.map((r) => r.join(" "))].join(". ");
    default:
      return "";
  }
}

export function blocksToText(blocks: Block[]): string {
  return blocks
    .map(blockText)
    .filter(Boolean)
    .join("\n\n")
    .replace(/\*\*/g, "");
}

export function articleSchema(post: (typeof posts)[number], image?: string) {
  const url = `${base}/resources/${post.slug}`;
  const words = blocksToText(post.body).split(/\s+/).filter(Boolean).length;

  return {
    "@type": post.kind === "blog" ? "BlogPosting" : "Article",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${url}#webpage` },
    headline: post.title.slice(0, 110),
    description: post.excerpt,
    url,
    ...(image ? { image: { "@type": "ImageObject", url: image } } : {}),
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": post.author ? "Organization" : "Organization",
      name: post.author ?? siteConfig.name,
      url: `${base}/about`,
    },
    publisher: { "@id": orgId },
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: words,
    timeRequired: `PT${Math.max(3, Math.round(words / 200))}M`,
    inLanguage: "en",
    isAccessibleForFree: true,
    ...(post.kind === "case-study"
      ? {
          about: { "@type": "Organization", name: post.client ?? siteConfig.name },
        }
      : {}),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": `${base}/#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function softwareSchema(product: {
  name: string;
  slug: string;
  shortDescription: string;
  capabilities: string[];
}) {
  const url = `${base}/products/${product.slug}`;
  return {
    "@type": "SoftwareApplication",
    "@id": `${url}#software`,
    name: product.name,
    description: product.shortDescription,
    url,
    applicationCategory: "FinanceApplication",
    applicationSubCategory: "Core banking system",
    operatingSystem: "Web",
    publisher: { "@id": orgId },
    featureList: product.capabilities,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url,
      priceSpecification: {
        "@type": "PriceSpecification",
        valueAddedTaxIncluded: false,
        description: "Quoted per member. Contact Anchor Financials for a per-institution price.",
      },
    },
  };
}

export function jobPostingSchema(vacancy: {
  title: string;
  slug: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  posted: string;
  validThrough: string;
}) {
  const url = `${base}/careers/${vacancy.slug}`;
  const list = (items: string[]) => `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;

  return {
    "@type": "JobPosting",
    "@id": `${url}#job`,
    title: vacancy.title,
    description: `<p>${vacancy.summary}</p><p>Key responsibilities:</p>${list(
      vacancy.responsibilities,
    )}<p>What we are looking for:</p>${list(vacancy.requirements)}${
      vacancy.niceToHave?.length ? `<p>Advantageous:</p>${list(vacancy.niceToHave)}` : ""
    }`,
    datePosted: vacancy.posted,
    validThrough: vacancy.validThrough,
    employmentType: "FULL_TIME",
    directApply: true,
    industry: "Financial technology",
    occupationalCategory: "Sales",
    url,
    hiringOrganization: {
      "@type": "Organization",
      "@id": orgId,
      name: siteConfig.name,
      sameAs: siteConfig.contact.linkedin,
      logo: `${base}/brand/anchor-logo.svg`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Addis Ababa",
        addressCountry: "ET",
      },
    },
    applicantLocationRequirements: { "@type": "Country", name: "Ethiopia" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${url}#webpage` },
  };
}

export function itemListSchema(name: string, paths: string[], path: string) {
  return {
    "@type": "ItemList",
    "@id": `${base}${path}#list`,
    name,
    numberOfItems: paths.length,
    itemListElement: paths.map((p, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${base}${p}`,
    })),
  };
}

export const ids = { orgId, siteId, base };
