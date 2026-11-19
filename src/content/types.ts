export type InstitutionType =
  | "SACCO"
  | "Microfinance Institution"
  | "Cooperative"
  | "Growing Financial Institution"
  | "Other Financial Institution";

export type ContentStatus = "published" | "draft" | "placeholder";

/** Structured article content. Lets each article have its own shape. */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; title?: string; text: string }
  | { type: "checklist"; title?: string; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "figure"; caption: string; stats: { label: string; value: string }[] }
  | { type: "sources"; items: string[] };


export interface ProductFeature {
  title: string;
  description: string;
}

export interface Product {
  name: string;
  slug: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string[];
  icon: string;
  featured: boolean;
  status: ContentStatus;
  capabilities: string[];
  features: ProductFeature[];
  outcomes: string[];
  targetInstitutions: InstitutionType[];
  relatedProducts: string[];
  faqs: { question: string; answer: string }[];
  // SEO
  seoTitle: string;
  seoDescription: string;
}

export interface Post {
  title: string;
  slug: string;
  category: string;
  kind: "blog" | "news" | "case-study" | "product-update";
  excerpt: string;
  body: Block[];
  coverImage?: string;
  author?: string;
  date: string;
  tags: string[];
  featured?: boolean;
  client?: string;
  challenge?: string;
  solution?: string;
  impact?: string;
  // SEO
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  searchIntent?: "informational" | "commercial" | "transactional" | "navigational";
  metaDescription?: string;
  status: ContentStatus;
}

export interface Client {
  name: string;
  industry: string;
  description: string;
  logo?: string;
  website?: string;
  caseStudySlug?: string;
  status: ContentStatus;
}

export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  photo?: string;
  linkedin?: string;
  status: ContentStatus;
}

export interface Vacancy {
  title: string;
  slug: string;
  department: string;
  location: string;
  employmentType: "Full-time" | "Part-time" | "Contract" | "Internship";
  workMode: string;
  posted: string;
  validThrough: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  applyEmail: string;
  status: ContentStatus;
  seoTitle?: string;
  metaDescription?: string;
}

export interface Solution {
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: string;
  institutionType: InstitutionType;
  outcomes: string[];
  status: ContentStatus;
}

export interface Stat {
  value: string;
  label: string;
  status: ContentStatus;
}
