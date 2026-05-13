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
    "Founder",
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
      <head>
        

          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossOrigin="anonymous"/>
      </head>
      

      <body className={`${inter.variable} mx-auto antialiased google-sans-flex-light my-1`}>
        <header>
          <MenuStack />
        </header>

        <main className="container col-12 col-lg-4 google-sans-flex-light p-3">{children}</main>

        <footer>
          <Footer />
        </footer> 
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossOrigin="anonymous"></script>

      </body>
    </html>
  );
}