import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleTagManagerScript, GoogleTagManagerNoScript } from '@/components/GoogleTagManager'
import { StructuredData } from '@/components/StructuredData'
import Script from 'next/script'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mapdart.vercel.app'),
  title: {
    default: "MAPDART 맵다트 - 다트로 정하는 여행지",
    template: "%s | MAPDART 맵다트"
  },
  description: "다트를 던져서 오늘의 여행지를 정해보세요! 대한민국 전국 20,273개 지역 중 랜덤으로 추천해드립니다.",
  keywords: ["여행", "맵다트", "MAPDART", "다트", "랜덤 여행지", "국내여행", "여행 추천", "한국 여행", "국내 관광지", "여행 게임"],
  authors: [{ name: "MAPDART" }],
  creator: "MAPDART",
  publisher: "MAPDART",
  
  icons: {
    icon: [
      { url: "/images/mainmap3.png", type: "image/png", sizes: "640x640" },
      { url: "/images/mainmap3.png", type: "image/png", sizes: "32x32" },
      { url: "/images/mainmap3.png", type: "image/png", sizes: "16x16" },
    ],
    apple: { url: "/images/mainmap3.png", type: "image/png", sizes: "180x180" },
    shortcut: { url: "/images/mainmap3.png", type: "image/png" },
  },

  // Open Graph (카카오톡, 페이스북 등)
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://mapdart.vercel.app",
    siteName: "MAPDART 맵다트",
    title: "MAPDART 맵다트 - 다트로 정하는 여행지",
    description: "다트를 던져서 오늘의 여행지를 정해보세요! 대한민국 전국 20,273개 지역 중 랜덤으로 추천해드립니다.",
    images: [
      {
        url: "/images/mainmap3.png",
        width: 640,
        height: 640,
        alt: "MAPDART 맵다트 - 한국 지도 다트판",
      },
    ],
  },

  // Twitter 카드
  twitter: {
    card: "summary_large_image",
    title: "MAPDART 맵다트 - 다트로 정하는 여행지",
    description: "다트를 던져서 오늘의 여행지를 정해보세요! 대한민국 전국 20,273개 지역 중 랜덤으로 추천해드립니다.",
    images: ["/images/mainmap3.png"],
    creator: "@mapdart",
  },

  // 추가 메타 태그
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },



  // 카카오톡 등 한국 SNS를 위한 추가 설정
  other: {
    "kakao:card": "summary_large_image",
    "naver:card": "summary_large_image",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script 
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          strategy="afterInteractive"
          data-client="ca-pub-3539009473858770"
          crossOrigin="anonymous"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MAPDART" />
        <GoogleTagManagerScript />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleTagManagerNoScript />
        {children}
      </body>
    </html>
  );
}
