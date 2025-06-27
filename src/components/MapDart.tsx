'use client';

import React, { useState, useEffect } from 'react';
import { KoreaMap } from './KoreaMap';
import { DartButton } from './DartButton';
import { DartAnimation } from './DartAnimation';
import { ResultCard } from './ResultCard';
import { DartResult } from '@/types';
import { getRandomCity } from '@/data/cities';

export const MapDart: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [result, setResult] = useState<DartResult | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [pendingResult, setPendingResult] = useState<DartResult | null>(null);

  // 결과 상태 변화 추적
  useEffect(() => {
    if (result) {
      console.log('🎊 결과 화면 표시됨:', result.city.name);
    } else {
      console.log('📭 결과 화면 숨김');
    }
  }, [result]);

  const handleThrowDart = () => {
    console.log('🎯 다트 던지기 버튼 클릭됨!');
    
    if (isAnimating) {
      console.log('⚠️ 이미 애니메이션 중입니다.');
      return;
    }

    console.log('🚀 다트 던지기 시작');
    
    // 애니메이션 시작
    setIsAnimating(true);
    setResult(null);
    setShowAnimation(true);

    // 랜덤 도시 선택 (애니메이션과 동시에 실행)
    const selectedCity = getRandomCity();
    console.log('🏙️ 선택된 도시:', selectedCity.name);

    // 결과를 미리 준비하여 pending 상태로 저장
    const dartResult: DartResult = {
      city: selectedCity,
      throwDate: new Date(),
      id: `dart-${Date.now()}`,
    };

    setPendingResult(dartResult);
    console.log('📋 pendingResult 설정됨:', dartResult.city.name);

    // 백업 타이머 - 애니메이션 콜백이 실행되지 않을 경우를 대비
    setTimeout(() => {
      console.log('⏰ 백업 타이머 실행 - 강제로 결과 표시');
      setShowAnimation(false);
      setIsAnimating(false);
      setResult(dartResult);
      setPendingResult(null);
    }, 7000);
  };

  const handleAnimationComplete = () => {
    console.log('✅ 애니메이션 완료 콜백 실행됨');
    console.log('📋 현재 pendingResult:', pendingResult?.city.name || 'null');
    
    // 모든 상태를 동시에 즉시 업데이트
    if (pendingResult) {
      console.log('🎉 결과 표시 시작:', pendingResult.city.name);
      setResult(pendingResult);
      setPendingResult(null);
      console.log('✨ 결과 상태 업데이트 완료');
    } else {
      console.log('❌ pendingResult가 없습니다!');
    }
    
    setShowAnimation(false);
    setIsAnimating(false);
  };

  const handleReset = () => {
    console.log('🔄 다트 리셋');
    setIsAnimating(false);
    setResult(null);
    setShowAnimation(false);
    setPendingResult(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-orange-50 flex flex-col items-center justify-center p-4">
      {/* 배경 효과 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-pink-50 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-4000"></div>
      </div>

      {/* 역동적인 다트 애니메이션 화면 */}
      <DartAnimation 
        isVisible={showAnimation} 
        onComplete={handleAnimationComplete} 
      />

      <div className="relative z-10 w-full max-w-md mx-auto space-y-8">
        {/* 결과가 없을 때만 헤더와 지도, 버튼 표시 */}
        {!result && (
          <>
            {/* 헤더 */}
            <header className="text-center space-y-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-orange-500 to-pink-600 bg-clip-text text-transparent mb-2">
                MAPDART
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
            </header>

            {/* 지도 */}
            <section className="relative mb-8" aria-label="한국 지도 다트판">
              <KoreaMap
                selectedCity={null}
                dartPosition={null}
                showDart={false}
              />
            </section>

            {/* 다트 던지기 버튼 */}
            <section className="flex justify-center mb-8" aria-label="다트 던지기 액션">
              <DartButton
                onThrow={handleThrowDart}
                isAnimating={isAnimating}
                isThrown={false}
              />
            </section>
          </>
        )}

        {/* 결과 표시 - 결과가 있을 때만 표시 (헤더 없음) */}
        {result && (
          <section className="animate-fadeIn" aria-label="여행지 결과">
            <ResultCard result={result} onReset={handleReset} />
          </section>
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
    </main>
  );
}; 