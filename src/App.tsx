import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

// Import all section components
import TitleSection from './components/TitleSection';
import ExecutiveSummarySection from './components/ExecutiveSummarySection';
import MotivationSection from './components/MotivationSection';
import SolutionImpactSection from './components/SolutionImpactSection';
import ObjectivesSection from './components/ObjectivesSection';
import NoveltyInnovationSection from './components/NoveltyInnovationSection';
import MethodologyTimelineSection from './components/MethodologyTimelineSection';
import ResourcesCollaborationSection from './components/ResourcesCollaborationSection';
import ExpectedOutcomesSection from './components/ExpectedOutcomesSection';
import AlignmentMissionSection from './components/AlignmentMissionSection';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const sections = [
    { id: '/', name: 'Title', component: TitleSection },
    { id: '/executive-summary', name: 'Executive Summary', component: ExecutiveSummarySection },
    { id: '/motivation', name: 'Motivation', component: MotivationSection },
    { id: '/solution', name: 'Solution & Impact', component: SolutionImpactSection },
    { id: '/objectives', name: 'Objectives', component: ObjectivesSection },
    { id: '/novelty', name: 'Novelty & Innovation', component: NoveltyInnovationSection },
    { id: '/methodology', name: 'Methodology & Timeline', component: MethodologyTimelineSection },
    { id: '/resources', name: 'Resources & Collaboration', component: ResourcesCollaborationSection },
    { id: '/outcomes', name: 'Expected Outcomes', component: ExpectedOutcomesSection },
    { id: '/alignment', name: 'Alignment with Mission', component: AlignmentMissionSection },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex-shrink-0 flex items-center" onClick={closeMenu}>
                  <span className="text-blue-600 font-bold text-xl">PEM Catalyst Research</span>
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex md:items-center md:space-x-4">
                {sections.map((section) => (
                  <Link 
                    key={section.id} 
                    to={section.id} 
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {section.name}
                  </Link>
                ))}
              </div>
              
              {/* Mobile menu button */}
              <div className="flex items-center md:hidden">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  <span className="sr-only">Open main menu</span>
                  {isMenuOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu, show/hide based on menu state */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  to={section.id}
                  className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium flex items-center"
                  onClick={closeMenu}
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  {section.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-16">
          <Routes>
            {sections.map((section) => (
              <Route 
                key={section.id} 
                path={section.id} 
                element={<section.component />} 
              />
            ))}
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold">Revolutionizing PEM Electrolyzer Catalysts</h3>
                <p className="text-gray-300 mt-1">An Integrated Approach for Ultra-Low Iridium Loading</p>
              </div>
              <div className="flex space-x-4">
                {sections.map((section, i) => (
                  i % 2 === 0 && (
                    <Link 
                      key={section.id} 
                      to={section.id} 
                      className="text-gray-300 hover:text-white transition-colors"
                      onClick={closeMenu}
                    >
                      {section.name}
                    </Link>
                  )
                ))}
              </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} PEM Catalyst Research Project. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
