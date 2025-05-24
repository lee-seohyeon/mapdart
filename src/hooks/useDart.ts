'use client';

import { useState } from 'react';
import { DartThrowState, DartResult } from '@/types';
import { getRandomCity } from '@/data/cities';

const initialState: DartThrowState = {
  isThrown: false,
  isAnimating: false,
  result: null,
};

export function useDart() {
  const [state, setState] = useState<DartThrowState>(initialState);

  function throwDart() {
    // 이미 애니메이션 중이면 무시
    if (state.isAnimating) return;

    // 애니메이션 시작
    setState({
      isThrown: false,
      isAnimating: true,
      result: null,
    });

    // 랜덤 도시 선택
    const selectedCity = getRandomCity();

    // 3초 후 결과 표시
    setTimeout(() => {
      const result: DartResult = {
        city: selectedCity,
        throwDate: new Date(),
        id: `dart-${Date.now()}`,
      };

      setState({
        isThrown: true,
        isAnimating: false,
        result,
      });
    }, 3000);
  }

  function reset() {
    setState(initialState);
  }

  return {
    state,
    throwDart,
    reset,
  };
} 