'use client';

import { useState, useCallback } from 'react';
import { DartThrowState, DartResult } from '@/types';
import { getRandomCity } from '@/data/cities';

export const useDart = () => {
  const [dartState, setDartState] = useState<DartThrowState>({
    isThrown: false,
    isAnimating: false,
    result: null,
  });

  const throwDart = useCallback(async (): Promise<void> => {
    // 이미 던지는 중이면 리턴
    if (dartState.isAnimating) return;

    // 애니메이션 시작
    setDartState(prev => ({
      ...prev,
      isAnimating: true,
      isThrown: false,
      result: null,
    }));

    // 애니메이션 딜레이 (2초)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // 랜덤 도시 선택
    const selectedCity = getRandomCity();
    const result: DartResult = {
      city: selectedCity,
      throwDate: new Date(),
      id: `dart-${Date.now()}`,
    };

    // 결과 설정
    setDartState({
      isThrown: true,
      isAnimating: false,
      result,
    });
  }, [dartState.isAnimating]);

  const resetDart = useCallback((): void => {
    setDartState({
      isThrown: false,
      isAnimating: false,
      result: null,
    });
  }, []);

  return {
    dartState,
    throwDart,
    resetDart,
  };
}; 