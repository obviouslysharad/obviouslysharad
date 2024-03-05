import { EmailSVG, LinkedinSVG, PhoneCallSVG } from "@/icons/CustomIcon";

export default function Heading() {
  return (
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
  );
}
