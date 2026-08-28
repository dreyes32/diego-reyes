import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#11110f",
          color: "#6b9b7e",
          fontSize: 16,
          letterSpacing: -1,
        }}
      >
        DG
      </div>
    ),
    size,
  );
}
