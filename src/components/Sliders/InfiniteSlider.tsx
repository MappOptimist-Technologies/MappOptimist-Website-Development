"use client"
import React, { useEffect, useRef, ReactNode } from 'react';
interface InfiniteSliderProps {
  children: ReactNode;
  speed?: number;
}
const InfiniteSlider: React.FC<InfiniteSliderProps> = ({ children, speed = 2 }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationId: number;
    let scrollAmount = 0;

    const scroll = () => {
      if (!scrollContainer) return;

      scrollAmount += speed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }

      scrollContainer.scrollLeft = scrollAmount;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [speed]);

  return (
    <div
      ref={scrollRef}
      style={{
        overflowX: 'hidden',
        width: '100%',
      }}
    >
      <div style={{ display: 'flex' }}>
        {children}
        {children}
      </div>
    </div>
  );
};

export default InfiniteSlider;
