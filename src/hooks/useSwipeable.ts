import { useCallback } from 'react';

interface SwipeableHandlers {
  onSwipedLeft?: () => void;
  onSwipedRight?: () => void;
}

export function useSwipeable({ onSwipedLeft, onSwipedRight }: SwipeableHandlers) {
  const threshold = 50;
  let startX: number;

  const onTouchStart = useCallback((e: TouchEvent) => {
    startX = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback((e: TouchEvent) => {
    const diffX = startX - e.changedTouches[0].clientX;

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0 && onSwipedLeft) {
        onSwipedLeft();
      } else if (diffX < 0 && onSwipedRight) {
        onSwipedRight();
      }
    }
  }, [onSwipedLeft, onSwipedRight]);

  return {
    onTouchStart,
    onTouchEnd,
  };
}