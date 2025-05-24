'use client';

import React from 'react';
import { DartResult } from '@/types';

interface ResultCardProps {
  result: DartResult;
  onReset: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({ result, onReset }) => {
  return (
    <div className="w-full max-w-sm mx-auto">
      {/* 메인 결과 카드 */}
      <div className="relative bg-gradient-to-br from-amber-400 via-orange-400 to-pink-500 rounded-3xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-105">
        {/* 배경 패턴 */}
        <div className="absolute inset-0 rounded-3xl opacity-20">
          <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full opacity-30" />
          <div className="absolute bottom-8 left-6 w-8 h-8 bg-white rounded-full opacity-40" />
          <div className="absolute top-1/2 left-8 w-4 h-4 bg-white rounded-full opacity-50" />
        </div>

        {/* 컨텐츠 */}
        <div className="relative z-10 text-center">
          {/* 헤더 텍스트 */}
          <div className="mb-6">
            <p className="text-white/90 text-sm font-medium mb-2">
              오늘의 여행지는...
            </p>
            <h2 className="text-white text-3xl font-bold">
              {result.city.name}
            </h2>
            <p className="text-white/80 text-sm mt-1">
              {result.city.fullName}
            </p>
          </div>

          {/* 트로피 아이콘 */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-3xl">🏆</span>
            </div>
          </div>

          {/* 액션 버튼 */}
          <button
            onClick={onReset}
            className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 backdrop-blur-sm"
          >
            새로 던지기
          </button>
        </div>

        {/* 카드 그림자 효과 */}
        <div className="absolute -inset-1 bg-gradient-to-br from-amber-400 via-orange-400 to-pink-500 rounded-3xl blur opacity-25 -z-10" />
      </div>

      {/* 하단 슬라이더 인디케이터 */}
      <div className="flex justify-center mt-6 gap-2">
        <div className="w-8 h-1 bg-gray-800 rounded-full" />
        <div className="w-1 h-1 bg-gray-300 rounded-full" />
        <div className="w-1 h-1 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}; 