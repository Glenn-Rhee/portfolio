import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";

const geistPoppins = Poppins({
  variable: "--font-geist-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ariel | Portfolio",
  keywords: [
    "ariel rizki",
    "ariel portfolio",
    "ariel rizki portfolio",
    "ariel rizki muhtamad bakri",
  ],
  robots: "index, follow",
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Ariel Rizki Muhtamad Bakri" />
        <link
          rel="canonical"
          href="https://portfolio-three-azure-71.vercel.app/"
        />
      </Head>
      <body
        className={`${geistPoppins.variable} overflow-x-hidden antialiased bg-gray-200`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
