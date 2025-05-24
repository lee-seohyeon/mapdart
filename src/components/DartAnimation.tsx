'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DartAnimationProps {
  isVisible: boolean;
  onComplete: () => void;
}

export const DartAnimation: React.FC<DartAnimationProps> = ({ 
  isVisible, 
  onComplete 
}) => {
  const [stage, setStage] = useState<'countdown' | 'throw' | 'impact' | 'complete'>('countdown');
  const [countdown, setCountdown] = useState(3);
  const [mounted, setMounted] = useState(false);

  // 클라이언트 사이드에서만 렌더링되도록 보장
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setStage('countdown');
      setCountdown(3);
      return;
    }

    let isMounted = true;

    // 카운트다운 시퀀스
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          if (isMounted) {
            setStage('throw');
            
            // 전체 애니메이션 타이머를 한 번에 설정
            setTimeout(() => {
              if (isMounted) {
                console.log('🎯 Stage: throw → impact');
                setStage('impact');
              }
            }, 1500);
            
            setTimeout(() => {
              if (isMounted) {
                console.log('🎯 Stage: impact → complete');
                setStage('complete');
              }
            }, 3500);
            
            setTimeout(() => {
              if (isMounted) {
                console.log('🎯 애니메이션 완료! onComplete 호출');
                onComplete();
              }
            }, 4500);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 800);

    return () => {
      isMounted = false;
      clearInterval(countdownInterval);
    };
  }, [isVisible, onComplete]);

  if (!isVisible || !mounted) return null;

  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
  const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 768;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 flex items-center justify-center overflow-hidden"
      >
        {/* 배경 파티클 효과 */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-60"
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* 카운트다운 단계 */}
        {stage === 'countdown' && countdown > 0 && (
          <motion.div
            key={countdown}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.8)",
                  "0 0 40px rgba(255,255,255,1)", 
                  "0 0 20px rgba(255,255,255,0.8)"
                ]
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-9xl font-bold text-white mb-4"
            >
              {countdown}
            </motion.div>
          </motion.div>
        )}

        {/* 다트 던지기 단계 */}
        {stage === 'throw' && (
          <div className="relative w-full h-full">
            {/* 카메라 셰이크 효과 */}
            <motion.div
              animate={{ 
                x: [0, -5, 5, -3, 3, 0],
                y: [0, -3, 3, -2, 2, 0] 
              }}
              transition={{ duration: 0.5, repeat: 3 }}
              className="w-full h-full relative"
            >
              {/* 다트 */}
              <motion.div
                initial={{ 
                  x: -200, 
                  y: screenHeight,
                  rotate: 45,
                  scale: 0.5
                }}
                animate={{ 
                  x: screenWidth * 0.6,
                  y: screenHeight * 0.3,
                  rotate: [45, 20, 45, 20, 45],
                  scale: [0.5, 1.2, 1, 1.5, 1],
                }}
                transition={{ 
                  duration: 1.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "tween"
                }}
                className="absolute z-20"
              >
                <div className="relative">
                  {/* 다트 바디 */}
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full border-4 border-white shadow-2xl">
                    <div className="absolute inset-2 bg-white rounded-full"></div>
                    <div className="absolute inset-4 bg-red-600 rounded-full"></div>
                  </div>
                  {/* 다트 꼬리 */}
                  <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
                    <div className="w-0 h-0 border-t-6 border-b-6 border-r-12 border-transparent border-r-blue-500"></div>
                  </div>
                </div>
              </motion.div>

              {/* 다트 궤적 */}
              <motion.div
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <svg className="w-full h-full">
                  <motion.path
                    d={`M -200 ${screenHeight} Q ${screenWidth * 0.3} ${screenHeight * 0.1} ${screenWidth * 0.6} ${screenHeight * 0.3}`}
                    stroke="rgba(255, 255, 255, 0.6)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="10,10"
                    animate={{
                      strokeDashoffset: [100, 0],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{ duration: 1.5 }}
                  />
                </svg>
              </motion.div>

              {/* 속도선 효과 */}
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -300, y: screenHeight + 50 }}
                  animate={{ 
                    x: screenWidth * 0.7,
                    y: screenHeight * 0.2,
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 1.2,
                    delay: i * 0.1,
                    ease: "easeOut"
                  }}
                  className="absolute w-16 h-1 bg-gradient-to-r from-transparent to-yellow-400 rounded-full"
                />
              ))}
            </motion.div>
          </div>
        )}

        {/* 충돌 임팩트 단계 */}
        {stage === 'impact' && (
          <div className="relative w-full h-full">
            {/* 임팩트 플래시 */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 20, 5],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 bg-white rounded-full"
              style={{
                left: '60%',
                top: '30%',
                transform: 'translate(-50%, -50%)'
              }}
            />

            {/* 충격파 */}
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0.8 }}
                animate={{ 
                  scale: [0, 3, 6],
                  opacity: [0.8, 0.3, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
                className="absolute w-40 h-40 border-4 border-white rounded-full"
                style={{
                  left: '60%',
                  top: '30%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            ))}

            {/* 파편 효과 */}
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: screenWidth * 0.6,
                  y: screenHeight * 0.3,
                  scale: 0
                }}
                animate={{ 
                  x: screenWidth * 0.6 + (Math.cos(i * 30 * Math.PI / 180) * 150),
                  y: screenHeight * 0.3 + (Math.sin(i * 30 * Math.PI / 180) * 150),
                  scale: [0, 1, 0],
                  rotate: i * 30
                }}
                transition={{ 
                  duration: 1,
                  ease: "easeOut"
                }}
                className="absolute w-4 h-4 bg-yellow-400 rounded-full"
              />
            ))}

            {/* 성공 메시지 */}
            <motion.div
              initial={{ scale: 0, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ 
                delay: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-8xl mb-4"
                >
                  🎯
                </motion.div>
                <motion.h2
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-6xl font-bold text-white mb-4"
                >
                  HIT!
                </motion.h2>
                <p className="text-2xl text-white font-semibold">
                  여행지가 결정되었습니다!
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}; 