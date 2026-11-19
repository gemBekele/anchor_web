import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #05080D 0%, #101F35 45%, #2E3D33 100%)",
          padding: "72px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 22,
                height: 32,
                borderRadius: 3,
                border: "3px solid #99000B",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 800, color: "#FFFFFF", letterSpacing: 1 }}>
              ANCHOR
            </span>
            <span
              style={{
                fontSize: 13,
                letterSpacing: 5,
                textTransform: "uppercase",
                color: "#EE7A80",
              }}
            >
              Core Banking Solution
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", width: 72, height: 6, background: "#99000B" }} />
          <div style={{ display: "flex", fontSize: 62, fontWeight: 800, lineHeight: 1.05, maxWidth: 900 }}>
            Core banking that keeps communities moving forward.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 22, color: "#B3C0D0" }}>
          SACCOs · Microfinance · Cooperatives · Growing financial institutions
        </div>
      </div>
    ),
    size,
  );
}
