import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kernel-landing-tau.vercel.app"),
  title: "🌰 Kernel | AI 驱动的零食产品全链路助手",
  description:
    "Kernel 是 AI Agent 驱动的零食产品全链路助手——选品洞察、配方灵感、营销内容,一个空间全搞定。为零食品牌和创业者而造。",
  openGraph: {
    title: "🌰 Kernel | AI 驱动的零食产品全链路助手",
    description:
      "选品洞察、配方灵感、营销内容,一个空间全搞定。为零食品牌和创业者而造。",
    type: "website",
    siteName: "Kernel",
    locale: "zh_CN",
    images: ["/assets/scenes/insight.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${lora.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
