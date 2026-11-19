import { siteConfig } from "@/content/site";
import { blogPosts } from "@/content/posts";
import { blocksToText } from "@/components/seo/JsonLd";

const base = siteConfig.url.replace(/\/$/, "");

export const dynamic = "force-static";

export function GET() {
  const parts: string[] = [
    `# ${siteConfig.name} — full article text`,
    "",
    `Canonical site: ${base}/`,
    "",
    "Plain-text edition of the Anchor Financials research articles, for language",
    "models and retrieval systems. Each article retains its source attributions.",
    "",
  ];

  for (const post of blogPosts) {
    parts.push("---", "");
    parts.push(`# ${post.title}`);
    parts.push("");
    parts.push(`URL: ${base}/resources/${post.slug}`);
    parts.push(`Category: ${post.category}`);
    parts.push(`Published: ${post.date}`);
    if (post.author) parts.push(`Author: ${post.author}`);
    parts.push(`Tags: ${post.tags.join(", ")}`);
    parts.push("");
    parts.push(blocksToText(post.body));
    parts.push("");
  }

  return new Response(parts.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
