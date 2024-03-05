"use client";
import { WorkInProgress } from "../icons/CustomIcon.js";
import Heading from "../components/Heading";

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
      <Heading />
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          padding: 12,
          borderRadius: 8,
        }}
      >
        Hi, I&apos;m Sharad Agarwal. A passionate Software Developer based in
        India
      </div>
      <div style={{ padding: "20px" }}>
        <WorkInProgress />
      </div>
      <div
        style={{
          backgroundColor: "#515151",
          borderColor: "#FFDC41",
          borderWidth: "2px",
          padding: 12,
          borderRadius: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "20px",
        }}
      >
        <div>A few changes are being made to the website.</div>
        <div>In the meantime, please refer to my resume.</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 20,
        }}
      >
        <button
          type="submit"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1dNdOwGdtjbq5IlaIxvk8LHGXrT4kJ1ql/view?usp=sharing"
            )
          }
          style={{
            backgroundColor: "#1B7593",
            padding: "5px 10px",
            borderRadius: "8px",
          }}
        >
          RESUME 👇🏼
        </button>
      </div>
    </div>
  );
}
