import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0B0E11",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -100,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(198,255,61,0.55) 0%, rgba(91,140,255,0.4) 55%, transparent 75%)",
            filter: "blur(10px)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "#C6FF3D",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#0B0E11",
              }}
            />
          </div>
          <div style={{ display: "flex", color: "#F6F7F5", fontSize: 28, fontWeight: 700 }}>
            GYM AGENT
          </div>
        </div>
        <div
          style={{
            display: "flex",
            color: "#F6F7F5",
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          AI WhatsApp Automation for Gyms
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            color: "rgba(246,247,245,0.6)",
            fontSize: 24,
            maxWidth: 780,
          }}
        >
          Automate lead qualification, support, and trial bookings with the
          Meta WhatsApp Cloud API.
        </div>
      </div>
    ),
    { ...size }
  );
}
