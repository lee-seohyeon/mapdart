'use client';

import React, { useState, useEffect } from 'react';
import { KoreaMap } from './KoreaMap';
import { DartButton } from './DartButton';
import { ResultCard } from './ResultCard';
import { City, DartResult } from '@/types';
import { getRandomCity } from '@/data/cities';

export const MapDart: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isThrown, setIsThrown] = useState(false);
  const [result, setResult] = useState<DartResult | null>(null);
  const [dartPosition, setDartPosition] = useState<{ x: number; y: number } | null>(null);

  // 다트 애니메이션 시작 시 랜덤 위치 생성
  useEffect(() => {
    if (isAnimating) {
      const randomX = Math.random() * 300 + 50;
      const randomY = Math.random() * 200 + 100;
      setDartPosition({ x: randomX, y: randomY });
    } else if (!isThrown) {
      setDartPosition(null);
    }
  }, [isAnimating, isThrown]);

  const handleThrowDart = () => {
    console.log('다트 던지기 버튼 클릭됨!');
    
    if (isAnimating) {
      console.log('이미 애니메이션 중입니다.');
      return;
    }

    console.log('다트 던지기 시작');
    
    // 애니메이션 시작
    setIsAnimating(true);
    setIsThrown(false);
    setResult(null);

    // 랜덤 도시 선택
    const selectedCity = getRandomCity();
    console.log('선택된 도시:', selectedCity.name);

    // 3초 후 결과 표시
    setTimeout(() => {
      console.log('애니메이션 완료, 결과 표시');
      
      const dartResult: DartResult = {
        city: selectedCity,
        throwDate: new Date(),
        id: `dart-${Date.now()}`,
      };

      setIsAnimating(false);
      setIsThrown(true);
      setResult(dartResult);
    }, 3000);
  };

  const handleReset = () => {
    console.log('다트 리셋');
    setIsAnimating(false);
    setIsThrown(false);
    setResult(null);
    setDartPosition(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-orange-50 flex flex-col items-center justify-center p-4">
      {/* 배경 효과 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-pink-50 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto space-y-8">
        {/* 결과가 없을 때만 헤더와 지도, 버튼 표시 */}
        {!result && (
          <>
            {/* 헤더 */}
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                🎯 맵다트
              </h1>
              <p className="text-gray-600 text-lg">
                다트를 던져서 오늘의 여행지를 정해보세요!
              </p>
              {isAnimating && (
                <div className="flex items-center justify-center space-x-2 mt-4">
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <span className="text-gray-700 ml-2">다트가 날아가는 중...</span>
                </div>
              )}
            </div>

            {/* 지도 */}
            <div className="relative mb-8">
              <KoreaMap
                selectedCity={null}
                dartPosition={dartPosition}
                showDart={isAnimating}
              />
            </div>

            {/* 다트 던지기 버튼 */}
            <div className="flex justify-center mb-8">
              <DartButton
                onThrow={handleThrowDart}
                isAnimating={isAnimating}
                isThrown={isThrown}
              />
            </div>
          </>
        )}

        {/* 결과 표시 - 결과가 있을 때만 표시 (헤더 없음) */}
        {result && (
          <div className="animate-fadeIn">
            <ResultCard result={result} onReset={handleReset} />
          </div>
        )}
      </div>

      {/* 커스텀 애니메이션 */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}; 