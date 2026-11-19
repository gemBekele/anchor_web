import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

/**
 * AI answer engines need to crawl the site to cite it. All of the major
 * crawlers are explicitly allowed here — the default `*` rule would cover them,
 * but stating them keeps the intent unambiguous for anything that parses
 * robots.txt for a specific token.
 */
const AI_CRAWLERS = [
  "GPTBot", // OpenAI training crawler
  "OAI-SearchBot", // OpenAI search index
  "ChatGPT-User", // ChatGPT user-triggered fetch
  "ClaudeBot", // Anthropic crawler
  "Claude-User", // Claude user-triggered fetch
  "Claude-SearchBot", // Anthropic search index
  "anthropic-ai",
  "PerplexityBot", // Perplexity index
  "Perplexity-User",
  "Google-Extended", // Gemini / AI Overviews grounding
  "Applebot-Extended", // Apple Intelligence
  "Bingbot", // Bing + Copilot
  "Amazonbot",
  "Bytespider",
  "CCBot", // Common Crawl — feeds many indexes
  "meta-externalagent",
  "cohere-ai",
  "Diffbot",
];

export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.url.replace(/\/$/, "");

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/admin", "/admin/"] },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/", disallow: ["/api/", "/admin", "/admin/"] })),
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
