import type { Metadata } from "next";
import { Inter, Cedarville_Cursive } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Gabriel Melim - Dev",
  description: "este é meu portfolio",
};

const cedarville = Cedarville_Cursive({ weight: ["400"], subsets: ["latin"], variable: '--font-cedarville' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cedarville.variable}`}>
      <body
        className={`bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
