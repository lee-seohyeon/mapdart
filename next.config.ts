import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // SEO 최적화
  compress: true,
  
  // 성능 최적화
  experimental: {
    optimizeCss: true,
  },
  
  // 이미지 최적화
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
