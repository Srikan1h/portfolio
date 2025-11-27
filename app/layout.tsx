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
  title: "Sai Srikanth",
  description: "My Web Page",
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
