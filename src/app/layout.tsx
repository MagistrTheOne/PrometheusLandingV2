import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Prometheus AGI - Первая в мире AGI система",
  description: "Первая в мире полноценная AGI система. Уже заинтересована Дубайская корпорация. Технологическое лидерство в области искусственного интеллекта.",
  keywords: "AGI, искусственный интеллект, Prometheus, технология, стартап, инвестиции",
  authors: [{ name: "Prometheus AGI Team" }],
  openGraph: {
    title: "Prometheus AGI - Первая в мире AGI система",
    description: "Первая в мире полноценная AGI система. Уже заинтересована Дубайская корпорация.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
