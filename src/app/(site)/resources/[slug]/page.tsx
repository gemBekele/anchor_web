import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getPost, posts } from "@/content/posts";
import { imagesBySlug } from "@/content/resourceImages";
import { PageHero } from "@/components/sections/PageHero";
import { Tag } from "@/components/ui/Eyebrow";
import { PostCard } from "@/components/cards/PostCard";
import { ArticleBody } from "@/components/content/ArticleBody";
import { AccentCTA } from "@/components/sections/AccentCTA";
import { formatDate } from "@/lib/utils";
import { JsonLd, articleSchema } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };
  const description = post.metaDescription ?? post.excerpt;
  const image = imagesBySlug[post.slug];

  return {
    title: post.title,
    description,
    keywords: [
      post.primaryKeyword,
      ...(post.secondaryKeywords ?? []),
      ...post.tags,
    ].filter(Boolean) as string[],
    authors: post.author ? [{ name: post.author }] : undefined,
    alternates: { canonical: `/resources/${post.slug}` },
    // Omit the `images` key entirely when there is no cover so Next falls back to
    // the route's own generated opengraph-image.
    openGraph: {
      type: "article",
      title: post.title,
      description,
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      section: post.category,
      tags: post.tags,
      ...(image ? { images: [{ url: image, width: 1600, height: 900, alt: post.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  // Prefer same-category siblings, then fill with any other editorial so every
  // article exposes onward links into the rest of the site.
  const siblings = posts.filter(
    (item) => item.slug !== post.slug && item.kind === post.kind && item.status === "published",
  );
  const others = posts.filter(
    (item) => item.slug !== post.slug && item.kind !== post.kind && item.status === "published",
  );
  const related = [...siblings, ...others].slice(0, 3);

  const cover = imagesBySlug[post.slug];


  return (
    <>
      <JsonLd data={articleSchema(post, cover ? `${siteConfig.url}${cover}` : undefined)} />

      <PageHero
        path={`/resources/${post.slug}`}
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: post.category },
        ]}
      />

      <article className="bg-white py-16 sm:py-20">
        <div className="container-anchor">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-[12.5px] text-ink-400">
              <Tag>{post.kind === "case-study" ? "Case Study" : post.kind}</Tag>
              <span>{formatDate(post.date)}</span>
              {post.author && <span aria-hidden>·</span>}
              {post.author && <span>{post.author}</span>}
            </div>

            {cover && (
              <div className="mt-8 overflow-hidden rounded-hero border border-paper-line">
                <Image
                  src={cover}
                  alt=""
                  width={1600}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            {post.kind === "case-study" ? (
              <div className="mt-10 space-y-6">
                {[
                  { label: "Client", value: post.client },
                  { label: "Challenge", value: post.challenge },
                  { label: "Solution", value: post.solution },
                  { label: "Impact", value: post.impact },
                ]
                  .filter((block) => block.value)
                  .map((block) => (
                    <div
                      key={block.label}
                      className="rounded-card border border-paper-line bg-paper p-6"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                        {block.label}
                      </p>
                      <p className="mt-2 text-[15px] leading-relaxed text-ink">{block.value}</p>
                    </div>
                  ))}
              </div>
            ) : (
              <ArticleBody blocks={post.body} className="mt-10" />
            )}

            {post.tags.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-2 border-t border-paper-line pt-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-pill bg-paper-soft px-3 py-1 text-[11.5px] font-medium text-ink-500"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-12 rounded-card border border-paper-line bg-paper p-6 sm:p-7">
              <p className="font-display text-[16px] font-bold text-ink-900">
                Put this into practice
              </p>
              <p className="mt-2 max-w-md text-[14px] leading-relaxed text-muted">
                Anchor Financials builds the software described in these articles — core
                banking, performance management, member self-service and branch tools for
                SACCOs and microfinance institutions.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink href="/products" variant="dark" size="sm" withArrow>
                  Explore the products
                </ButtonLink>
                <ButtonLink href="/contact" variant="outline" size="sm">
                  Request a demo
                </ButtonLink>
              </div>
            </div>

            <Link
              href="/resources"
              className="group mt-10 inline-flex items-center gap-2 text-[13.5px] font-semibold text-ink"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to resources
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-paper py-16 sm:py-20">
          <div className="container-anchor">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-[20px] font-bold tracking-[-0.02em] text-ink">
                More like this
              </h2>
              <Link
                href="/resources"
                className="group inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink"
              >
                <span className="link-underline">All resources</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <PostCard key={item.slug} post={item} image={imagesBySlug[item.slug]} />
              ))}
            </div>
          </div>
        </section>
      )}

      <AccentCTA />
    </>
  );
}
