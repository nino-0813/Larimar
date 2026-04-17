import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Larimar（ラリマー）| 福山市沼隈町の美容室・マツエク・温活サロン",
  description:
    "広島県福山市沼隈町のプライベートサロン。美容室・マツエク・リンパマッサージ・よもぎ蒸し・ハーブ蒸し。夜21時まで営業、デトックス・代謝UPでトータルビューティー。",
  icons: {
    icon: "/images/333.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased">
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XN9ZCHR8SM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XN9ZCHR8SM');
          `}
        </Script>
        <ScrollToTop />
        <Navbar />
        <main className="flex-1 flex flex-col w-full" style={{ minHeight: "50vh" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
