import { ImageResponse } from "next/og";

export const alt = "Santiago Cartagena — AI & ML Engineer for fraud and risk systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(800px 400px at 80% 0%, rgba(139,123,255,0.35), #07070b 70%)",
          color: "#ededf2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 6, color: "#9b9bab", textTransform: "uppercase" }}>
          AI &amp; ML Engineer · Fraud &amp; risk systems
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>Santiago Cartagena</div>
          <div style={{ fontSize: 36, color: "#c9c9d6", marginTop: 16, maxWidth: 900 }}>
            Production AI for decisions that cost money when they&apos;re wrong.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#8b7bff" }}>Medellín, Colombia · github.com/Scarta19</div>
      </div>
    ),
    size,
  );
}
