import React from "react";

interface SlideNavButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  current: number;
  total: number;
}

export default function SlideNavButtons({ onPrev, onNext, current, total }: SlideNavButtonsProps) {
  return (
    <div className="slide-nav-btns">
      <button onClick={onPrev} disabled={current === 0}>Previous</button>
      <span style={{ color: "#0072c6", fontWeight: 600, alignSelf: "center" }}>
        {current + 1} / {total}
      </span>
      <button onClick={onNext} disabled={current === total - 1}>Next</button>
    </div>
  );
}
