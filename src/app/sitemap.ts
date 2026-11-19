import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { products } from "@/content/products";
import { solutions } from "@/content/solutions";
import { posts } from "@/content/posts";
import { imagesBySlug } from "@/content/resourceImages";
import { openVacancies } from "@/content/vacancies";

type Entry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const entry = (
    path: string,
    priority: number,
    changeFrequency: Entry["changeFrequency"],
    lastModified: Date = now,
    image?: string,
  ): Entry => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
    ...(image ? { images: [image] } : {}),
  });

  const staticRoutes: Entry[] = [
    entry("/", 1.0, "weekly"),
    entry("/products", 0.9, "monthly"),
    entry("/solutions", 0.8, "monthly"),
    entry("/resources", 0.8, "weekly"),
    entry("/contact", 0.8, "monthly"),
    entry("/careers", 0.7, "weekly"),
    entry("/about", 0.6, "monthly"),
    entry("/clients", 0.6, "monthly"),
    entry("/resources/blog", 0.7, "weekly"),
    entry("/resources/news", 0.5, "weekly"),
    entry("/resources/case-studies", 0.6, "monthly"),
    entry("/resources/product-updates", 0.4, "monthly"),
    entry("/privacy", 0.2, "yearly"),
    entry("/terms", 0.2, "yearly"),
  ];

  const productRoutes: Entry[] = products.map((product) =>
    entry(`/products/${product.slug}`, product.featured ? 0.9 : 0.8, "monthly"),
  );

  const solutionRoutes: Entry[] = solutions.map((solution) =>
    entry(`/solutions/${solution.slug}`, 0.7, "monthly"),
  );

  // Editorial routes carry a real lastModified from the post's own date.
  const vacancyRoutes: Entry[] = openVacancies.map((vacancy) =>
    entry(
      `/careers/${vacancy.slug}`,
      0.6,
      "weekly",
      new Date(vacancy.posted),
    ),
  );

  const postRoutes: Entry[] = posts.map((post) =>
    entry(
      `/resources/${post.slug}`,
      post.kind === "blog" ? 0.7 : 0.5,
      post.kind === "blog" ? "monthly" : "weekly",
      new Date(post.date),
      imagesBySlug[post.slug],
    ),
  );

  return [
    ...staticRoutes,
    ...productRoutes,
    ...solutionRoutes,
    ...vacancyRoutes,
    ...postRoutes,
  ];
}
