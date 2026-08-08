import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1f2937",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: "#3a88ee",
            display: "flex",
          }}
        >
          ELDIR
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#ffffff",
            marginTop: 20,
            display: "flex",
          }}
        >
          Une voix claire, une présence numérique forte
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}