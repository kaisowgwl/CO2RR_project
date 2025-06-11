import { useRef, useState } from "react";
import SlideNavButtons from "./SlideNavButtons";

interface SlideDeckProps {
  slides: React.ReactNode[];
}

export default function SlideDeck({ slides }: SlideDeckProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goNext = () => setIndex(i => Math.min(i + 1, slides.length - 1));
  const goPrev = () => setIndex(i => Math.max(i - 1, 0));

  // Swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const delta = e.changedTouches[0].clientX - touchStartX.current;
      if (delta > 50) goPrev();
      if (delta < -50) goNext();
      touchStartX.current = null;
    }
  };

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{ minHeight: "100vh" }}
    >
      <div className="slide-content-frame">
        {slides[index]}
      </div>
      <SlideNavButtons
        onPrev={goPrev}
        onNext={goNext}
        current={index}
        total={slides.length}
      />
    </div>
  );
}
