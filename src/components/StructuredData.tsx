'use client'

import Script from 'next/script'

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "MAPDART 맵다트",
    "url": "https://mapdart.vercel.app",
    "description": "다트를 던져서 오늘의 여행지를 정해보세요! 대한민국 전국 20,273개 지역 중 랜덤으로 추천해드립니다.",
    "applicationCategory": "TravelApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "publisher": {
      "@type": "Organization",
      "name": "MAPDART"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KRW"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1000"
    },
    "keywords": "여행, 맵다트, MAPDART, 다트, 랜덤 여행지, 국내여행, 여행 추천",
    "inLanguage": "ko-KR",
    "audience": {
      "@type": "Audience",
      "audienceType": "travel enthusiasts"
    }
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  )
} 