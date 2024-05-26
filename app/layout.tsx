import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HITUNG NILAI AKADEMIK, NILAI MENUJU RIKKES II & NILAI AKHIR",
  description: "KALKULATOR HITUNG NILAI AKADEMIK, NILAI MENUJU RIKKES II & NILAI AKHIR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
