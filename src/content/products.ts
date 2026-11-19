import type { Product } from "./types";

/**
 * CONTENT MODEL — PRODUCTS
 * Sample product catalogue for Anchor Financials. Replace the product names,
 * descriptions, capabilities, and FAQs with confirmed information via the CMS.
 */
export const products: Product[] = [
  {
    name: "Core Banking System",
    slug: "core-banking-system",
    tagline: "The operational core of your institution.",
    shortDescription:
      "A centralized platform for managing members, accounts, savings, loans, transactions, and day-to-day financial operations.",
    fullDescription: [
      "The Anchor Core Banking System is the centralized platform that runs the day-to-day financial operations of a SACCO, microfinance institution, or cooperative. It brings member records, accounts, savings, loan portfolios, and transactions into one connected system.",
      "Instead of managing operational data across disconnected spreadsheets and tools, teams work from a single source of truth — with role-based access, consistent records, and reporting that reflects the real state of the institution.",
    ],
    icon: "Landmark",
    featured: true,
    status: "published",
    capabilities: [
      "Member management",
      "Savings management",
      "Loan management",
      "Transaction management",
      "Reporting",
      "Role-based access",
    ],
    features: [
      {
        title: "Member Management",
        description:
          "Create, maintain, and organize member records, KYC details, and membership status in one place.",
      },
      {
        title: "Savings Management",
        description:
          "Manage savings products, deposits, withdrawals, and member balances with a clear audit trail.",
      },
      {
        title: "Loan Management",
        description:
          "Support the full loan lifecycle — application, approval, disbursement, repayment schedules, and balances.",
      },
      {
        title: "Transaction Management",
        description:
          "Record and track financial transactions consistently across branches and accounts.",
      },
      {
        title: "Reporting",
        description:
          "Generate operational and financial reports for management, committees, and regulators.",
      },
      {
        title: "Role-Based Access",
        description:
          "Give each team member the access they need — and nothing more — with configurable roles.",
      },
    ],
    outcomes: [
      "Replace fragmented spreadsheets with a single operational system of record.",
      "Give staff consistent tools for members, savings, loans, and transactions.",
      "Produce management and regulatory reporting from live operational data.",
    ],
    targetInstitutions: [
      "SACCO",
      "Microfinance Institution",
      "Cooperative",
      "Growing Financial Institution",
    ],
    relatedProducts: ["performance-management-system"],
    faqs: [
      {
        question: "Can the Core Banking System be configured around our workflows?",
        answer:
          "Yes. Implementation is configured around the products, policies, and workflows of your institution rather than forcing a single fixed process.",
      },
      {
        question: "Does it support multiple branches?",
        answer:
          "The system is designed to support institutions as they grow. Confirm your specific branch and multi-location requirements with our team during a demo.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a demo and our team will walk through your current operations and map them to the system.",
      },
    ],
    seoTitle: "SACCO Core Banking System",
    seoDescription:
      "A centralized core banking platform for SACCOs and microfinance institutions — member, savings, loan, and transaction management with reporting and role-based access.",
  },
  {
    name: "Performance Management System",
    slug: "performance-management-system",
    tagline: "See how your institution is really performing.",
    shortDescription:
      "Monitor institutional performance, track key indicators, and give management the information needed to make informed decisions.",
    fullDescription: [
      "The Anchor Performance Management System gives management and boards a structured way to monitor how the institution is performing against its goals. It brings key operational and financial indicators together so decisions are made from evidence rather than guesswork.",
      "The system is designed to complement the Core Banking System — turning day-to-day operational data into the performance picture leadership needs for planning, reporting, and accountability.",
    ],
    icon: "TrendingUp",
    featured: true,
    status: "published",
    capabilities: [
      "Key performance indicators",
      "Management dashboards",
      "Targets and tracking",
      "Trend analysis",
      "Board and management reporting",
    ],
    features: [
      {
        title: "Key Performance Indicators",
        description:
          "Define and track the indicators that matter most to your institution.",
      },
      {
        title: "Management Dashboards",
        description:
          "Give leadership a clear, at-a-glance view of institutional performance.",
      },
      {
        title: "Targets and Tracking",
        description:
          "Set targets and monitor progress against them over reporting periods.",
      },
      {
        title: "Trend Analysis",
        description:
          "Understand how performance is changing over time rather than in isolation.",
      },
      {
        title: "Reporting",
        description:
          "Produce consistent performance reporting for management, boards, and stakeholders.",
      },
    ],
    outcomes: [
      "Move from retrospective reporting to ongoing performance visibility.",
      "Give management and boards a shared, consistent view of performance.",
      "Support planning and accountability with tracked indicators.",
    ],
    targetInstitutions: [
      "SACCO",
      "Microfinance Institution",
      "Cooperative",
      "Growing Financial Institution",
    ],
    relatedProducts: ["core-banking-system"],
    faqs: [
      {
        question: "Does it work without the Core Banking System?",
        answer:
          "The two products are designed to work together as a connected ecosystem. Our team can advise on the right starting point for your institution.",
      },
      {
        question: "Can we define our own indicators?",
        answer:
          "Yes. Performance indicators are configured around the metrics your management and board actually track.",
      },
      {
        question: "Who is it for?",
        answer:
          "It is built for management teams and boards of SACCOs, microfinance institutions, and cooperatives.",
      },
    ],
    seoTitle: "Performance Management Software for Financial Institutions",
    seoDescription:
      "Monitor institutional performance, track key indicators, and give management the reporting they need with the Anchor Performance Management System.",
  },
  {
    name: "Mobile Member App",
    slug: "mobile-member-app",
    tagline: "Member self-service, in the palm of their hand.",
    shortDescription:
      "Give members secure access to balances, statements, deposits, loan repayments, and requests from their phone.",
    fullDescription: [
      "The Anchor Mobile Member App extends the institution's services beyond the branch. Members can check balances, review statements, make deposits and loan repayments, and submit requests from their own device.",
      "For the institution, it means fewer routine branch visits and a more direct, reliable channel to members — with every action reflected in the core system.",
    ],
    icon: "Wallet",
    featured: false,
    status: "published",
    capabilities: [
      "Balance & statement access",
      "Deposits & repayments",
      "Loan requests",
      "Push notifications",
      "Secure authentication",
    ],
    features: [
      {
        title: "Account Overview",
        description: "Members see savings balances, loans, and recent activity at a glance.",
      },
      {
        title: "Self-Service Transactions",
        description: "Support deposits, repayments, and share purchases from the app.",
      },
      {
        title: "Loan Requests",
        description: "Let members initiate loan requests and track their status.",
      },
      {
        title: "Notifications",
        description: "Send transaction confirmations, reminders, and institutional updates.",
      },
      {
        title: "Secure Access",
        description: "Protect member accounts with authentication and session controls.",
      },
    ],
    outcomes: [
      "Reduce routine branch visits with member self-service.",
      "Give members a direct, always-available channel to the institution.",
      "Keep app activity consistent with core system records.",
    ],
    targetInstitutions: ["SACCO", "Microfinance Institution", "Cooperative"],
    relatedProducts: ["core-banking-system", "sms-notification-system"],
    faqs: [
      {
        question: "Does the app work on low-end phones?",
        answer:
          "The app is designed for the range of devices members actually use. Confirm your specific device requirements with our team.",
      },
      {
        question: "Is it connected to the core system?",
        answer:
          "Yes. App activity is reflected in the Core Banking System as part of the same ecosystem.",
      },
      {
        question: "Can we control what members can do?",
        answer:
          "Available self-service actions are configured around the policies of your institution.",
      },
    ],
    seoTitle: "Mobile Member App for SACCOs & Microfinance",
    seoDescription:
      "Give members self-service access to balances, statements, deposits, loan repayments, and requests with the Anchor Mobile Member App.",
  },
  {
    name: "Reporting & Business Intelligence",
    slug: "reporting-business-intelligence",
    tagline: "Turn operational data into decisions.",
    shortDescription:
      "Standard and custom reports, dashboards, and exports that help management understand the institution.",
    fullDescription: [
      "Anchor Reporting & Business Intelligence turns the data captured across the platform into information leadership can act on. It covers routine regulatory and management reports as well as ad-hoc analysis.",
      "Reports can be scheduled, exported, and shared so committees and boards work from consistent, up-to-date numbers.",
    ],
    icon: "LineChart",
    featured: false,
    status: "published",
    capabilities: [
      "Standard report library",
      "Custom report builder",
      "Dashboards",
      "Scheduled reporting",
      "Data export",
    ],
    features: [
      {
        title: "Report Library",
        description: "Access a library of operational, financial, and compliance reports.",
      },
      {
        title: "Custom Reports",
        description: "Build reports around the questions your institution actually asks.",
      },
      {
        title: "Dashboards",
        description: "Combine key figures into a single view for management review.",
      },
      {
        title: "Scheduling",
        description: "Deliver recurring reports automatically to the right people.",
      },
      {
        title: "Export & Sharing",
        description: "Export to common formats for committees, auditors, and regulators.",
      },
    ],
    outcomes: [
      "Produce routine reporting without manual consolidation.",
      "Give committees and boards consistent figures.",
      "Answer ad-hoc questions from live operational data.",
    ],
    targetInstitutions: [
      "SACCO",
      "Microfinance Institution",
      "Cooperative",
      "Growing Financial Institution",
    ],
    relatedProducts: ["core-banking-system", "performance-management-system"],
    faqs: [
      {
        question: "Can we build our own reports?",
        answer:
          "Yes. The custom report builder supports institution-specific reporting needs.",
      },
      {
        question: "Can reports be scheduled?",
        answer:
          "Recurring reports can be scheduled and delivered automatically.",
      },
      {
        question: "Does it cover regulatory reporting?",
        answer:
          "The report library includes common regulatory and management reports. Confirm your regulator's specific formats with our team.",
      },
    ],
    seoTitle: "Reporting & Business Intelligence for Financial Institutions",
    seoDescription:
      "Standard and custom reports, dashboards, and scheduled reporting that turn operational data into decisions for SACCOs and microfinance institutions.",
  },
  {
    name: "SMS & Notification System",
    slug: "sms-notification-system",
    tagline: "Keep members informed, automatically.",
    shortDescription:
      "Automated transaction alerts, due-date reminders, and bulk messages that reach members on any phone.",
    fullDescription: [
      "The Anchor SMS & Notification System keeps members informed without adding work for staff. Transaction alerts, repayment reminders, and institutional messages are sent automatically based on rules you define.",
      "Because it works over SMS, it reaches members regardless of the device they use — an important channel for inclusive financial services.",
    ],
    icon: "Workflow",
    featured: false,
    status: "published",
    capabilities: [
      "Transaction alerts",
      "Due-date reminders",
      "Bulk messaging",
      "Message templates",
      "Delivery tracking",
    ],
    features: [
      {
        title: "Transaction Alerts",
        description: "Notify members automatically when savings or loan transactions occur.",
      },
      {
        title: "Repayment Reminders",
        description: "Reduce missed payments with timely, polite reminders.",
      },
      {
        title: "Bulk Messaging",
        description: "Send announcements and campaigns to member groups.",
      },
      {
        title: "Templates",
        description: "Maintain approved message templates for consistency.",
      },
      {
        title: "Delivery Tracking",
        description: "See which messages were delivered and when.",
      },
    ],
    outcomes: [
      "Improve repayment timeliness with automated reminders.",
      "Reach members on any phone via SMS.",
      "Reduce manual follow-up calls and messages.",
    ],
    targetInstitutions: ["SACCO", "Microfinance Institution", "Cooperative"],
    relatedProducts: ["core-banking-system", "mobile-member-app"],
    faqs: [
      {
        question: "Does it support local languages?",
        answer:
          "Message templates can be written in the languages your members use. Confirm font and encoding requirements with our team.",
      },
      {
        question: "Can members opt out?",
        answer:
          "Messaging consent and opt-out handling are configured around your institution's policy and applicable regulations.",
      },
      {
        question: "How are messages triggered?",
        answer:
          "Messages can be triggered by system events such as transactions, or scheduled as campaigns.",
      },
    ],
    seoTitle: "SMS & Notification System for SACCOs",
    seoDescription:
      "Automated transaction alerts, repayment reminders, and bulk SMS messaging that keep members informed for SACCOs and microfinance institutions.",
  },
  {
    name: "Agent & Branch Management",
    slug: "agent-branch-management",
    tagline: "Run every branch and agent with visibility.",
    shortDescription:
      "Manage multi-branch and agent networks, cash and float, and performance across locations.",
    fullDescription: [
      "As an institution grows, managing branches and agents becomes a coordination problem. Anchor Agent & Branch Management gives a single view of locations, cash and float, and performance by branch or agent.",
      "It helps management see where activity is concentrated, spot reconciliation issues early, and support agents with the tools they need.",
    ],
    icon: "Network",
    featured: false,
    status: "published",
    capabilities: [
      "Branch & agent profiles",
      "Cash & float tracking",
      "Performance by location",
      "Reconciliation",
      "Role-based controls",
    ],
    features: [
      {
        title: "Branch & Agent Registry",
        description: "Maintain profiles, responsibilities, and status for each location.",
      },
      {
        title: "Cash & Float",
        description: "Track balances and float across branches and agents.",
      },
      {
        title: "Performance by Location",
        description: "Compare activity, collections, and growth across the network.",
      },
      {
        title: "Reconciliation",
        description: "Surface discrepancies early with consistent reconciliation views.",
      },
      {
        title: "Access Controls",
        description: "Scope access so each location sees only what it should.",
      },
    ],
    outcomes: [
      "Get a single view of a growing branch and agent network.",
      "Track cash and float consistently across locations.",
      "Identify performance and reconciliation issues early.",
    ],
    targetInstitutions: [
      "SACCO",
      "Microfinance Institution",
      "Cooperative",
      "Growing Financial Institution",
    ],
    relatedProducts: ["core-banking-system", "reporting-business-intelligence"],
    faqs: [
      {
        question: "Does it support agent banking?",
        answer:
          "The product is designed to support agent networks alongside branches. Confirm your specific operating model with our team.",
      },
      {
        question: "Can each branch have its own access?",
        answer:
          "Yes. Role-based controls scope access by branch, agent, and user.",
      },
      {
        question: "How is float tracked?",
        answer:
          "Cash and float balances are tracked per location with a consistent reconciliation view.",
      },
    ],
    seoTitle: "Agent & Branch Management for Financial Institutions",
    seoDescription:
      "Manage multi-branch and agent networks, cash and float, and performance across locations with Anchor Agent & Branch Management.",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getPublishedProducts() {
  return products.filter((product) => product.status !== "draft");
}
