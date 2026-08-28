import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Sai Srikanth",
};

export default function ResumePage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100dvh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#fff",
      }}
    >
      <iframe
        src="/saisrikanths.pdf"
        title="Resume"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
      />
    </div>
  );
}
