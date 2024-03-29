import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import SessionProvider from "../components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-base-200">
      <body className={inter.className}>
        <SessionProvider>
      <Navbar />
       <main className="p-4 mb-[7px] max-w-7xl m-auto min-w-[300px]">
          {children}
          </main>
          <Footer />
          </SessionProvider>
      </body>
    </html>
  );
}
