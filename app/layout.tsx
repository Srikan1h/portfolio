import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MenuStack from './components/MenuStack';
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});




export const metadata: Metadata = {
  metadataBase: new URL("https://www.kanth.in"),

  title: {
    default: "Sai Srikanth",
    template: "%s | Sai Srikanth",
  },

  description:
    "Sai Srikanth",

  keywords: [
    "Sai Srikanth",
    "kanth",
    "builder",
    "Sai",
    "Srikanth",
    "srikaaaanth",
    "srikan1h",
    "Srikan1h",
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
    title: "Sai Srikanth",
    description:
      "Sai Srikanth",
    url: "https://www.kanth.in",
    siteName: "Sai Srikanth",
    type: "website",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/1982315320950849536/yNc3JWWi_400x400.jpg",
        width: 1200,
        height: 630,
        alt: "Sai Srikanth",
      },
    ],

  },

  twitter: {
    card: "summary_large_image",
    title: "Sai Srikanth",
    description:
      "Sai Srikanth",
    images: ["https://pbs.twimg.com/profile_images/1982315320950849536/yNc3JWWi_400x400.jpg"],
  },

 icons: {
  icon: "/favicon-32x32.png",
  apple: "/apple-icon.png",
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
    ${inter.variable} \
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
