'use client';

import React from 'react';
import { City } from '@/types';

interface KoreaMapProps {
  selectedCity?: City | null;
  dartPosition?: { x: number; y: number } | null;
  showDart?: boolean;
}

export const KoreaMap: React.FC<KoreaMapProps> = ({
  selectedCity,
  dartPosition,
  showDart = false,
}) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* 대한민국 지도 SVG */}
      <svg
        viewBox="0 0 400 500"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 배경 */}
        <rect width="400" height="500" fill="transparent" />
        
        {/* 한반도 외곽선 (간소화된 버전) */}
        <path
          d="M180 50 
             L220 45 
             L250 55 
             L280 70 
             L300 90 
             L320 120 
             L340 150 
             L350 180 
             L360 220 
             L370 260 
             L375 300 
             L370 340 
             L360 380 
             L340 420 
             L300 450 
             L250 470 
             L200 475 
             L150 470 
             L110 450 
             L80 420 
             L60 380 
             L50 340 
             L45 300 
             L50 260 
             L60 220 
             L80 180 
             L100 150 
             L120 120 
             L140 90 
             L160 70 
             Z"
          fill="url(#mapGradient)"
          stroke="#e5e7eb"
          strokeWidth="2"
          className="transition-all duration-300"
        />

        {/* 제주도 */}
        <circle
          cx="120"
          cy="440"
          r="15"
          fill="url(#mapGradient)"
          stroke="#e5e7eb"
          strokeWidth="2"
        />

        {/* 그라데이션 정의 */}
        <defs>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3f4f6" />
            <stop offset="100%" stopColor="#e5e7eb" />
          </linearGradient>
          <linearGradient id="dartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>

        {/* 선택된 도시 표시 */}
        {selectedCity && (
          <circle
            cx="200"
            cy="250"
            r="8"
            fill="#ef4444"
            stroke="#fff"
            strokeWidth="2"
            className="animate-pulse"
          />
        )}

        {/* 다트 표시 */}
        {showDart && dartPosition && (
          <g transform={`translate(${dartPosition.x}, ${dartPosition.y})`}>
            <circle
              cx="0"
              cy="0"
              r="6"
              fill="url(#dartGradient)"
              stroke="#fff"
              strokeWidth="2"
              className="animate-bounce"
            />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="-15"
              stroke="#dc2626"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
        )}
      </svg>
    </div>
  );
}; 