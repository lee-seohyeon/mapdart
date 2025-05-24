'use client';

import React from 'react';

interface DartButtonProps {
  onThrow: () => void;
  isAnimating: boolean;
  isThrown: boolean;
}

export const DartButton: React.FC<DartButtonProps> = ({
  onThrow,
  isAnimating,
  isThrown,
}) => {
  const getButtonText = (): string => {
    if (isAnimating) return '다트 던지는 중...';
    if (isThrown) return '다시 던지기';
    return '다트 던지기!';
  };

  return (
    <button
      onClick={onThrow}
      disabled={isAnimating}
      className={`
        relative px-8 py-4 rounded-2xl font-bold text-white text-lg
        transform transition-all duration-300 ease-out
        ${isAnimating
          ? 'bg-gray-400 cursor-not-allowed scale-95'
          : 'bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 hover:scale-105 active:scale-95'
        }
        shadow-lg hover:shadow-xl
        focus:outline-none focus:ring-4 focus:ring-orange-300
      `}
    >
      {/* 버튼 효과 */}
      <div className="absolute inset-0 rounded-2xl bg-white opacity-20 transform scale-95 transition-transform duration-300 group-hover:scale-100" />
      
      {/* 버튼 텍스트 */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {isAnimating && (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        )}
        {getButtonText()}
        {!isAnimating && <span className="text-xl">🎯</span>}
      </span>
    </button>
  );
}; 