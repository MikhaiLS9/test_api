import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const OpenSans = Open_Sans({
  subsets: ["cyrillic"],
  weight: ["400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Центр ритуального обслуживания",
  description: "ТОП 15 НАДЕЖНЫХ РИТУАЛЬНЫХ АГЕНТСТВ В КАЗАНИ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={OpenSans.className}>{children}</body>
    </html>
  );
}
