'use client';

import React, { useState, useEffect } from 'react';
import { KoreaMap } from './KoreaMap';
import { DartButton } from './DartButton';
import { ResultCard } from './ResultCard';
import { useDart } from '@/hooks/useDart';

export const MapDart: React.FC = () => {
  const { dartState, throwDart, resetDart } = useDart();
  const [dartPosition, setDartPosition] = useState<{ x: number; y: number } | null>(null);

  // 다트 애니메이션 시작 시 랜덤 위치 생성
  useEffect(() => {
    if (dartState.isAnimating) {
      const randomX = Math.random() * 300 + 50; // 50-350 범위
      const randomY = Math.random() * 350 + 100; // 100-450 범위
      setDartPosition({ x: randomX, y: randomY });
    } else if (!dartState.isThrown) {
      setDartPosition(null);
    }
  }, [dartState.isAnimating, dartState.isThrown]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex flex-col">
      {/* 헤더 */}
      <header className="px-6 py-4 flex justify-between items-center">
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="flex-1 px-6 pb-8">
        {dartState.result ? (
          /* 결과 화면 */
          <div className="flex flex-col items-center justify-center h-full">
            <ResultCard result={dartState.result} onReset={resetDart} />
          </div>
        ) : (
          /* 지도 및 다트 던지기 화면 */
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {/* 타이틀 */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">맵다트</h1>
              <p className="text-gray-600 text-lg">
                {dartState.isAnimating 
                  ? '다트가 날아가고 있어요...' 
                  : '오늘 어디로 떠나볼까요?'
                }
              </p>
            </div>

            {/* 지도 */}
            <div className="relative mb-8">
              <KoreaMap
                selectedCity={dartState.result ? dartState.result.city : null}
                dartPosition={dartPosition}
                showDart={dartState.isAnimating}
              />
              
              {/* 다트 애니메이션 효과 */}
              {dartState.isAnimating && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-orange-400 rounded-full animate-ping" />
                  <div className="absolute top-8 right-8 w-3 h-3 bg-pink-400 rounded-full animate-pulse" />
                  <div className="absolute bottom-12 left-12 w-2 h-2 bg-yellow-400 rounded-full animate-bounce" />
                </div>
              )}
            </div>

            {/* 다트 던지기 버튼 */}
            <DartButton
              onThrow={throwDart}
              isAnimating={dartState.isAnimating}
              isThrown={dartState.isThrown}
            />

            {/* 설명 텍스트 */}
            <div className="text-center text-sm text-gray-500 max-w-xs">
              <p>버튼을 눌러 대한민국 어디든 랜덤으로 여행지를 정해보세요!</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}; 