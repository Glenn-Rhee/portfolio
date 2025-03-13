import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const geistPoppins = Poppins({
  variable: "--font-geist-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ariel | Portfolio",
  description:
    "My name is Ariel, I'm passionate about fullstack web developer. I'm currently studying at Gunadarma University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistPoppins.variable} overflow-x-hidden antialiased bg-gray-200`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
