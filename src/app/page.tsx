"use client";
import { EmailSVG, LinkedinSVG, PhoneCallSVG } from "../icons/CustomIcon.js";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "rgb(28 28 28)",
        color: "white",
        padding: 16,
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: 12,
        }}
      >
        <div>Sharad Agarwal</div>
        <div style={{ display: "flex", gap: 12 }}>
          <LinkedinSVG />
          <EmailSVG />
          <PhoneCallSVG />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          padding: 12,
          borderRadius: 8,
        }}
      >
        Hi, I'm Sharad Agarwal. A passionate Software Developer based in India
      </div>
    </div>
  );
}
