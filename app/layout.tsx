import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import MenuStack from "./components/MenuStack";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kanth.in"),

  title: {
    default: "Sai Srikanth",
    template: "%s | Sai Srikanth",
  },

  description:
    "Sai Srikanth — Software Engineer, Competitive Programmer, Builder.",

  keywords: [
    "Sai Srikanth",
    "Software Engineer",
    "Competitive Programming",
    "Web Developer",
    "Machine Learning",
    "Portfolio",
  ],

  authors: [{ name: "Sai Srikanth" }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Sai Srikanth",
    description:
      "Software Engineer and Competitive Programmer.",
    url: "https://kanth.in",
    siteName: "Sai Srikanth",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sai Srikanth",
    description:
      "Software Engineer and Competitive Programmer.",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://kanth.in",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased max-w-3xl mx-auto py-6 px-4`}
      >
        <header>
          <MenuStack />
        </header>

        <main className="mt-4 px-2">{children}</main>

        <Footer />
      </body>
    </html>
  );
}