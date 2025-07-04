import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MotivationSection from "./components/MotivationSection";
import SolutionImpactSection from "./components/SolutionImpactSection";
import ObjectivesSection from "./components/ObjectivesSection";
import ResourcesCollaborationSection from "./components/ResourcesCollaborationSection";
import ExpectedOutcomesSection from "./components/ExpectedOutcomesSection";
import AlignmentMissionSection from "./components/AlignmentMissionSection";
import ExecutiveSummarySection from "./components/ExecutiveSummarySection";
import NoveltyInnovationSection from "./components/NoveltyInnovationSection";
import MethodologyTimelineSection from "./components/MethodologyTimelineSection";
import SlideNavButtons from "./components/SlideNavButtons";
import { useState, useRef } from "react";

// TitleSlide with box around name
function TitleSlide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e4e8ed]">
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#0072c6] mb-8 drop-shadow-lg text-center">
        Microstructure Optimization and AI-Guided Design of Catalyst Layers for CO₂ Electroreduction
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4 text-center">
        A Digital Twin and 3D-Printing Framework to Accelerate Catalyst Layer Innovation
      </h2>
      <div className="flex flex-col items-center mb-2">
        <div className="px-6 py-2 rounded-lg bg-white/80 border border-[#0072c6] shadow text-lg text-[#0072c6] font-bold flex flex-col items-center">
          Dr. Gabriel Wosiak Leite
          <div className="flex items-center justify-center mt-2 gap-2">
            <a href="https://www.linkedin.com/in/gwosiak/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white border border-blue-400 hover:bg-blue-50 transition p-2 shadow text-blue-600 flex items-center justify-center" title="LinkedIn">
              {/* LinkedIn icon from local PNG, icon inside circle larger */}
              <span className="w-5 h-5 flex items-center justify-center">
                <img src="/assets/vecteezy_linkedin-logo-png-linkedin-icon-transparent-png_18930480.png" alt="LinkedIn" className="w-10 h-10" style={{objectFit: 'contain', borderRadius: '50%'}} />
              </span>
            </a>
            <a href="https://www.researchgate.net/profile/Gabriel-Wosiak-Leite" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white border border-green-400 hover:bg-green-50 transition p-2 shadow text-green-600 flex items-center justify-center" title="ResearchGate">
              {/* ResearchGate icon from local SVG */}
              <img src="/assets/researchgate-icon-svg-icon-original.svg" alt="ResearchGate" className="w-5 h-5" />
            </a>
            <a href="https://orcid.org/0000-0002-1705-9100" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white border border-lime-400 hover:bg-lime-50 transition p-2 shadow text-lime-600 flex items-center justify-center" title="ORCID">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/><text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor">iD</text></svg>
            </a>
            <a href="https://scholar.google.com/citations?user=cOumO2wAAAAJ&hl=pt-BR" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white border border-gray-400 hover:bg-gray-100 transition p-2 shadow text-gray-700 flex items-center justify-center" title="Google Scholar">
              {/* Google Scholar icon from local SVG */}
              <img src="/assets/icons8-google-scholar.svg" alt="Google Scholar" className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="text-md text-gray-500 mt-2">NREL Director's Fellowship Application</div>
      </div>
      <div className="mt-8 text-sm text-gray-400 mb-20">Swipe or use the buttons below to navigate</div>
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
        <ExecutiveSummarySection key="executive-summary" />,
        <NoveltyInnovationSection key="novelty-innovation" />,
        <MethodologyTimelineSection key="methodology-timeline" />,
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
