import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin", "cyrillic"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://artem-alekseev-ege.matvej-working.chatgpt.site"),
  title: "Артём Александрович — подготовка к ЕГЭ по информатике",
  description: "Системная онлайн-подготовка к ЕГЭ по информатике в мини-группах — средний балл выпускников 83.2 и бесплатное пробное занятие",
  icons: { icon: "/aa-logo.jpg", shortcut: "/aa-logo.jpg" },
  openGraph: {
    title: "Артём Александрович — ЕГЭ по информатике",
    description: "Живые занятия, личная проверка и понятный маршрут до уверенной сдачи ЕГЭ",
    images: [{ url: "/og.png", width: 1536, height: 864, alt: "Артём Александрович — ЕГЭ по информатике" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Артём Александрович — ЕГЭ по информатике",
    description: "Системная подготовка и средний балл 83.2",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>;
}
