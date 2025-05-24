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
    <div className="relative w-full max-w-lg mx-auto h-96 rounded-3xl overflow-hidden">
      {/* 3D 산맥 배경 */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400">
        {/* 구름 효과 */}
        <div className="absolute top-0 left-0 w-full h-full opacity-80">
          <div className="absolute top-8 left-4 w-16 h-8 bg-white rounded-full opacity-70 animate-pulse"></div>
          <div className="absolute top-12 right-8 w-20 h-10 bg-white rounded-full opacity-60 animate-pulse delay-300"></div>
          <div className="absolute top-20 left-1/3 w-12 h-6 bg-white rounded-full opacity-50 animate-pulse delay-700"></div>
        </div>
        
        {/* 3D 산맥 효과 */}
        <div className="absolute bottom-0 left-0 w-full h-3/4">
          {/* 뒷산 */}
          <div className="absolute bottom-0 left-1/4 w-32 h-48 bg-gradient-to-t from-blue-600 to-blue-400 transform -skew-x-12 opacity-70"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-56 bg-gradient-to-t from-blue-700 to-blue-500 transform skew-x-6 opacity-60"></div>
          
          {/* 중간산 */}
          <div className="absolute bottom-0 left-1/6 w-36 h-40 bg-gradient-to-t from-blue-500 to-blue-300 transform skew-x-3"></div>
          <div className="absolute bottom-0 right-1/6 w-32 h-44 bg-gradient-to-t from-blue-600 to-blue-400 transform -skew-x-6"></div>
          
          {/* 앞산 */}
          <div className="absolute bottom-0 left-1/3 w-28 h-32 bg-gradient-to-t from-blue-400 to-blue-200 transform -skew-x-3"></div>
          <div className="absolute bottom-0 right-1/3 w-24 h-36 bg-gradient-to-t from-blue-500 to-blue-300 transform skew-x-12"></div>
          
          {/* 가장 높은 중앙 산 */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-52 bg-gradient-to-t from-blue-600 to-blue-200"></div>
          
          {/* 산 위의 눈 효과 */}
          <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-gradient-to-t from-transparent to-white opacity-80"></div>
        </div>
      </div>

      {/* 다트 던지기 애니메이션 */}
      {showDart && dartPosition && (
        <div className="absolute inset-0 pointer-events-none">
          {/* 다트 궤적 */}
          <div 
            className="absolute w-1 h-32 bg-gradient-to-b from-orange-400 to-transparent opacity-70 animate-pulse"
            style={{
              left: `${dartPosition.x}px`,
              top: `${dartPosition.y - 120}px`,
              transform: 'rotate(45deg)',
              animation: 'dartTrail 2s ease-out'
            }}
          ></div>
          
          {/* 다트 */}
          <div 
            className="absolute animate-bounce"
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
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-2 border-b-2 border-r-4 border-transparent border-r-yellow-400"></div>
            </div>
          </div>
          
          {/* 충돌 효과 */}
          <div 
            className="absolute animate-ping"
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

      {/* 선택된 도시 표시 - 선물박스 스타일 */}
      {selectedCity && (
        <div 
          className="absolute animate-bounce"
          style={{
            left: `${selectedCity.coordinates.lng * 1.8 + 20}px`,
            top: `${350 - selectedCity.coordinates.lat * 7}px`,
          }}
        >
          {/* 선물박스 아이콘 */}
          <div className="relative">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-500 rounded shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
              {/* 리본 */}
              <div className="absolute inset-x-0 top-1/2 h-1 bg-red-500 transform -translate-y-1/2"></div>
              <div className="absolute inset-y-0 left-1/2 w-1 bg-red-500 transform -translate-x-1/2"></div>
              {/* 나비 매듭 */}
              <div className="absolute -top-1 left-1/2 w-2 h-2 bg-red-600 rounded-full transform -translate-x-1/2"></div>
            </div>
            
            {/* 도시 이름 */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <div className="bg-white bg-opacity-90 px-2 py-1 rounded-lg shadow-md">
                <span className="text-xs font-bold text-gray-800">{selectedCity.name}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 제목 오버레이 */}
      <div className="absolute top-6 left-0 right-0 text-center">
        <h1 className="text-2xl font-bold text-white drop-shadow-lg">
          🎯 맵다트
        </h1>
        <p className="text-sm text-blue-100 drop-shadow">
          다트를 던져 여행지를 정해보세요!
        </p>
      </div>

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