'use client';

import React from 'react';
import Image from 'next/image';
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
    <div className="relative w-full max-w-lg mx-auto h-96 rounded-3xl overflow-hidden">
      {/* 메인 한국 지도 이미지 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/mainmap3.png"
          alt="한국 지도 다트판"
          width={400}
          height={400}
          className="object-contain w-full h-full"
          priority
        />
      </div>

      {/* 다트 던지기 애니메이션 */}
      {showDart && dartPosition && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {/* 다트 궤적 */}
          <div 
            className="absolute w-1 h-32 bg-gradient-to-b from-orange-400 to-transparent opacity-70"
            style={{
              left: `${dartPosition.x}px`,
              top: `${dartPosition.y - 120}px`,
              transform: 'rotate(45deg)',
              animation: 'dartTrail 2s ease-out'
            }}
          ></div>
          
          {/* 다트 */}
          <div 
            className="absolute z-30"
            style={{
              left: `${dartPosition.x - 12}px`,
              top: `${dartPosition.y - 12}px`,
              animation: 'dartThrow 2s ease-out'
            }}
          >
            {/* 다트 핀 */}
            <div className="relative">
              <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-red-600 shadow-lg">
                <div className="absolute inset-1 bg-white rounded-full"></div>
              </div>
              {/* 다트 꼬리 */}
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-2 border-b-2 border-r-4 border-transparent border-r-blue-400"></div>
            </div>
          </div>
          
          {/* 충돌 효과 */}
          <div 
            className="absolute animate-ping z-30"
            style={{
              left: `${dartPosition.x - 8}px`,
              top: `${dartPosition.y - 8}px`,
              animation: 'impact 0.5s ease-out 1.5s'
            }}
          >
            <div className="w-4 h-4 bg-yellow-400 rounded-full opacity-75"></div>
          </div>
        </div>
      )}

      {/* 선택된 도시 표시 */}
      {selectedCity && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
          {/* 선물박스 아이콘 */}
          <div className="relative animate-bounce">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-500 rounded shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
              {/* 리본 */}
              <div className="absolute inset-x-0 top-1/2 h-1 bg-red-500 transform -translate-y-1/2"></div>
              <div className="absolute inset-y-0 left-1/2 w-1 bg-red-500 transform -translate-x-1/2"></div>
              {/* 나비 매듭 */}
              <div className="absolute -top-1 left-1/2 w-2 h-2 bg-red-600 rounded-full transform -translate-x-1/2"></div>
            </div>
            
            {/* 도시 이름 */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <div className="bg-white bg-opacity-95 px-3 py-2 rounded-lg shadow-lg border border-gray-200">
                <span className="text-sm font-bold text-gray-800">{selectedCity.name}</span>
                <div className="text-xs text-gray-600 mt-1">{selectedCity.fullName}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 커스텀 애니메이션 스타일 */}
      <style jsx>{`
        @keyframes dartThrow {
          0% {
            transform: translate(-100px, -200px) rotate(45deg) scale(0.5);
            opacity: 0;
          }
          50% {
            transform: translate(-50px, -100px) rotate(25deg) scale(0.8);
            opacity: 1;
          }
          100% {
            transform: translate(0px, 0px) rotate(0deg) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes dartTrail {
          0% {
            opacity: 0;
            height: 0px;
          }
          50% {
            opacity: 0.7;
            height: 128px;
          }
          100% {
            opacity: 0;
            height: 64px;
          }
        }
        
        @keyframes impact {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}; 