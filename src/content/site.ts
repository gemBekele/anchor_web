import type { Stat } from "./types";

export const siteConfig = {
  name: "Anchor Financials",
  shortName: "Anchor",
  description:
    "Anchor Financials builds the technology infrastructure that helps SACCOs, microfinance institutions, and growing financial organizations operate, grow, and serve their members.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.anchorfinancials.com",
  locale: "en_US",
  tagline: "Technology that keeps financial institutions moving forward.",
  seoTitle: "Anchor Financials | Core Banking Software for SACCOs",
  seoDescription:
    "Core banking, member apps and performance software for Ethiopian SACCOs, microfinance institutions and cooperatives. Serving 40+ institutions.",
  contact: {
    email: "hello@anchorfinancials.com",
    phone: "+251 11 557 0192",
    location: "Bole Road, Addis Ababa, Ethiopia",
    linkedin: "https://www.linkedin.com/company/anchor-financials",
  },
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "All Products", href: "/products", description: "The full Anchor ecosystem" },
      {
        label: "Core Banking System",
        href: "/products/core-banking-system",
        description: "Members, savings, loans, transactions",
      },
      {
        label: "Performance Management System",
        href: "/products/performance-management-system",
        description: "Indicators, dashboards, reporting",
      },
      {
        label: "Mobile Member App",
        href: "/products/mobile-member-app",
        description: "Member self-service on any phone",
      },
      {
        label: "Reporting & BI",
        href: "/products/reporting-business-intelligence",
        description: "Reports, dashboards, and exports",
      },
      {
        label: "SMS & Notifications",
        href: "/products/sms-notification-system",
        description: "Automated member messaging",
      },
      {
        label: "Agent & Branch Management",
        href: "/products/agent-branch-management",
        description: "Multi-location visibility",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "SACCOs", href: "/solutions/saccos" },
      { label: "Microfinance Institutions", href: "/solutions/microfinance-institutions" },
      { label: "Growing Financial Institutions", href: "/solutions/growing-financial-institutions" },
    ],
  },
  { label: "Clients", href: "/clients" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Company", href: "/about", description: "Mission, story and team" },
      { label: "Careers", href: "/careers", description: "Open roles in Addis Ababa" },
      { label: "Clients", href: "/clients", description: "Institutions we serve" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blog", href: "/resources/blog" },
      { label: "News", href: "/resources/news" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Product Updates", href: "/resources/product-updates" },
    ],
  },
];

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Clients", href: "/clients" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  products: [
    { label: "Core Banking", href: "/products/core-banking-system" },
    { label: "Performance Management", href: "/products/performance-management-system" },
    { label: "Mobile Member App", href: "/products/mobile-member-app" },
    { label: "Reporting & BI", href: "/products/reporting-business-intelligence" },
    { label: "SMS & Notifications", href: "/products/sms-notification-system" },
    { label: "Agent & Branch Management", href: "/products/agent-branch-management" },
  ],
  resources: [
    { label: "Blog", href: "/resources/blog" },
    { label: "News", href: "/resources/news" },
    { label: "Case Studies", href: "/resources/case-studies" },
    { label: "Insights", href: "/resources" },
  ],
};

/**
 * CONTENT MODEL — STATISTICS
 * Sample figures for demonstration. Replace with verified statistics before launch.
 */
export const stats: Stat[] = [
  { value: "42+", label: "Institutions Served", status: "published" },
  { value: "6,800+", label: "Active Users", status: "published" },
  { value: "25+", label: "Years of Combined Experience", status: "published" },
  { value: "6", label: "Software Solutions", status: "published" },
];

export const institutionTypes = [
  "SACCO",
  "Microfinance Institution",
  "Cooperative",
  "Other Financial Institution",
  "Other",
];
