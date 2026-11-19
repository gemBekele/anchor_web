import type { Vacancy } from "./types";

/**
 * Open roles. Written from the hiring brief only — no salary, benefits or
 * headcount are stated because none were supplied.
 */
export const vacancies: Vacancy[] = [
  {
    title: "B2B Software Sales Representative",
    slug: "b2b-software-sales-representative",
    department: "Sales",
    location: "Addis Ababa, Ethiopia",
    employmentType: "Full-time",
    workMode: "Field-based, with travel to client sites",
    posted: "2026-09-30",
    validThrough: "2026-12-31",
    summary:
      "We are looking for motivated and confident B2B Software Sales Representatives to join our team. The role focuses on identifying potential business clients, visiting businesses, understanding their needs, and introducing our software solutions.",
    responsibilities: [
      "Identify and approach potential business clients through field visits, calls, and networking.",
      "Visit businesses, understand their operations and challenges, and identify potential software needs.",
      "Introduce and explain our software products to business owners and decision-makers.",
      "Generate qualified leads and schedule meetings and product demonstrations.",
      "Follow up with prospects and support the sales process through to closing.",
      "Maintain records of leads, client interactions, and follow-ups.",
    ],
    requirements: [
      "Strong communication and interpersonal skills.",
      "Confident and comfortable approaching businesses and speaking with decision-makers.",
      "Self-motivated, energetic, and target-oriented.",
      "Willingness to work in the field and travel to meet potential clients.",
      "Good understanding of businesses and basic knowledge of software and technology.",
    ],
    niceToHave: [
      "Previous experience in B2B sales, field sales, business development, or software sales.",
      "A diploma or degree in Business, Marketing, IT, Computer Science, or a related field.",
    ],
    applyEmail: "careers@anchorfinancials.com",
    status: "published",
    seoTitle: "B2B Software Sales Representative — Addis Ababa",
    metaDescription:
      "Anchor Financials is hiring a B2B Software Sales Representative in Addis Ababa. Field-based role selling SACCO and microfinance software. Apply by 31 December 2026.",
  },
];

export const openVacancies = vacancies.filter((v) => v.status === "published");

export function getVacancy(slug: string) {
  return vacancies.find((v) => v.slug === slug);
}
