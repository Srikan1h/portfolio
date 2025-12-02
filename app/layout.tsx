import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MenuStack from './components/MenuStack';
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});





export const metadata: Metadata = {
  metadataBase: new URL("https://www.kanth.in"),

  title: {
    default: "Sai Srikanth - My Personal webpage",
    template: "%s | Sai Srikanth",
  },

  description:
    "This webpage serves as my home on the internet.",

  keywords: [
    "Sai Srikanth",
    "builder",
    "Sai",
    "Srikanth",
    "kanth",
    "sreekanth",
    "Machine learning",
    "Software engineer",
    "Intern",
    "Investor",
    "teen investor",
    "Venture capital",
    "expert",
    "Computer science",
    "SRM Institute of Science and Technology",
    "SRMIST",
    "Hackathon winner",
    "investor",
    "software developer",
    "competitive programming",
    "CSE student",
    "projects",
    "web development",
    "Jezh Technologies",
    "Adarsh Vidya Kendra",
    "Chennai",
    "Tech enthusiast",
    "Google",
    "Personal website",
    "portfolio",
    "Inspiration",
    "softmerise",
    "Student",
    "Enterpreneur"
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  authors: [
    {
      name: "Sai Srikanth",
      url: "https://www.kanth.in",
    },
  ],

  openGraph: {
    title: "Sai Srikanth - My Personal webpage",
    description:
      "Developer/ Tinkerer/ Competitive programmer",
    url: "https://www.kanth.in",
    siteName: "Sai Srikanth",
    type: "website",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/1982315320950849536/yNc3JWWi_400x400.jpg",
        width: 1200,
        height: 630,
        alt: "Sai Srikanth - Personal webpage",
      },
    ],

  },

  twitter: {
    card: "summary_large_image",
    title: "Sai Srikanth - My Personal webpage",
    description:
      "Developer/ Tinkerer/ Competitive programmer",
    images: ["https://pbs.twimg.com/profile_images/1982315320950849536/yNc3JWWi_400x400.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  alternates: {
    canonical: "https://www.kanth.in",
  },
};








export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`\
          ${geistSans.variable} \
          ${geistMono.variable} \
          antialiased \
          sm:w-150 mx-auto py-4 sm:py-8 px-4 sm:px-3`
        }
      >

        <header>
          {/* 2. Place the MenuStack component here */}
          <MenuStack />
        </header>

        <main className="p-2">
          {children}
        </main>
        <Footer/>
        
        
      </body>
    </html>
  );
}
