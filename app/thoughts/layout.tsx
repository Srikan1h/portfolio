import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thoughts",
  description: "Writing by Sai Srikanth — ideas, observations, and reflections.",
};

export default function ThoughtsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
