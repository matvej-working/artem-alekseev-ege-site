import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin", "cyrillic"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Артём Алексеев — подготовка к ЕГЭ по информатике",
  description: "Онлайн-подготовка к ЕГЭ по информатике в мини-группах. Средний балл выпускников — 83,2. Бесплатное пробное занятие.",
  icons: { icon: "/aa-logo.jpg", shortcut: "/aa-logo.jpg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>;
}
