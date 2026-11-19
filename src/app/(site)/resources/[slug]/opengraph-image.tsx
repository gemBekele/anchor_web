import { ImageResponse } from "next/og";
import { getPost } from "@/content/posts";

export const alt = "Anchor Financials article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Per-article social/preview card, so shared links carry the article's own
 *  title and category rather than the generic site card. */
export default async function ArticleOgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  const title = post?.title ?? "Anchor Financials";
  const category = post?.category ?? "Insights";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #05080D 0%, #101F35 55%, #2E3D33 100%)",
          padding: 64,
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 20,
                height: 30,
                borderRadius: 3,
                border: "3px solid #99000B",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 24, fontWeight: 800 }}>ANCHOR</span>
            <span
              style={{
                fontSize: 11,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#EE7A80",
              }}
            >
              Financials
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              background: "#99000B",
              color: "white",
              borderRadius: 999,
              padding: "8px 18px",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            {category}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 60 ? 42 : 52,
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: -1.4,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "#B3C0D0",
          }}
        >
          <span>anchorfinancials.et</span>
          {post?.date ? <span>{post.date}</span> : null}
        </div>
      </div>
    ),
    size,
  );
}
