import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Diego Gomez — AI Engineer & Researcher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#11110f",
          color: "#ece7dc",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#6b9b7e" }}>
          San Diego
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, lineHeight: 1.05 }}>Diego Gomez</div>
          <div style={{ marginTop: 16, fontSize: 32, color: "#6b9b7e" }}>
            AI Engineer & Researcher
          </div>
          <div style={{ marginTop: 28, fontSize: 24, color: "#a8a195", maxWidth: 820 }}>
            WALT · Agentic AI · RAG · graph neural networks · XR
          </div>
        </div>
      </div>
    ),
    size,
  );
}
