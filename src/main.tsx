import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SlideDeck from "./components/SlideDeck";
import MotivationSection from "./components/MotivationSection";
import SolutionImpactSection from "./components/SolutionImpactSection";
import ObjectivesSection from "./components/ObjectivesSection";
import ResourcesCollaborationSection from "./components/ResourcesCollaborationSection";
import ExpectedOutcomesSection from "./components/ExpectedOutcomesSection";
import AlignmentMissionSection from "./components/AlignmentMissionSection";
import SlideNavButtons from "./components/SlideNavButtons";
import { useState, useRef } from "react";

// TitleSlide with box around name
function TitleSlide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e4e8ed]">
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#0072c6] mb-8 drop-shadow-lg text-center">
        Revolutionizing PEM Electrolyzer Catalysts
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4 text-center">
        An Integrated Approach for Ultra-Low Iridium Loading
      </h2>
      <div className="flex flex-col items-center mb-2">
        <div className="px-6 py-2 rounded-lg bg-white/80 border border-[#0072c6] shadow text-lg text-[#0072c6] font-bold">
          Dr. Gabriel Wosiak Leite
        </div>
        <div className="text-md text-gray-500 mt-2">NREL Director's Fellowship Application</div>
      </div>
      <div className="mt-8 text-sm text-gray-400">Swipe or use the buttons below to navigate</div>
    </div>
  );
}

// Custom SlideDeck with nav at top
function SlideDeckWithTopNav({ slides }: { slides: React.ReactNode[] }) {
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
      <SlideNavButtons
        onPrev={goPrev}
        onNext={goNext}
        current={index}
        total={slides.length}
      />
      <div className="slide-content-frame">
        {slides[index]}
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SlideDeckWithTopNav
      slides={[
        <TitleSlide key="title" />,
        <MotivationSection key="motivation" />,
        <SolutionImpactSection key="solution" />,
        <ObjectivesSection key="objectives" />,
        <ResourcesCollaborationSection key="resources" />,
        <ExpectedOutcomesSection key="outcomes" />,
        <AlignmentMissionSection key="alignment" />,
      ]}
    />
  </StrictMode>,
)
