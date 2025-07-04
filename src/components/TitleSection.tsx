import { Atom } from 'lucide-react';

const TitleSection = () => {
  return (
    <div className="relative flex flex-col justify-center items-center p-8 md:p-16 min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e4e8ed] text-gray-800 overflow-hidden">
      {/* Background accents */}
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-[#0072c6] to-[#00a2ff] rounded-full opacity-10 -top-[100px] -right-[100px] z-0"></div>
      <div className="absolute w-[300px] h-[300px] bg-gradient-to-br from-[#0072c6] to-[#00a2ff] rounded-full opacity-5 -bottom-[100px] -left-[100px] z-0"></div>
      
      <div className="z-10 flex flex-col items-center text-center max-w-4xl">
        <div className="mb-8">
          <Atom className="w-16 h-16 text-blue-500 mb-4" />
        </div>
        
        <h1 className="font-bold text-4xl md:text-5xl mb-6 text-[#0072c6] leading-tight">
          Microstructure Optimization and AI-Guided Design of Catalyst Layers for CO₂ Electroreduction
        </h1>
        <h2 className="text-2xl md:text-3xl mb-10 text-gray-600 font-normal">
          A Digital Twin and 3D-Printing Framework to Accelerate Catalyst Layer Innovation
        </h2>
        
        <div className="mt-12 border-t border-gray-300 pt-8 w-full md:w-2/3">
          <p className="text-xl mb-2">Director's Fellowship Research Proposal</p>
          <p className="text-lg text-gray-600 mb-8">Presented to National Renewable Energy Laboratory (NREL)</p>
          
          <div className="flex items-center justify-center">
            <div className="bg-blue-50 rounded-lg px-6 py-4 inline-flex items-center">
              <div className="mr-3 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-lg font-medium">Gabriel Wosiak</p>
                <p className="text-gray-600">Ph.D. Electrochemistry</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-6 gap-4">
            <a href="https://www.linkedin.com/in/gwosiak/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white border border-blue-400 hover:bg-blue-50 transition p-3 shadow text-blue-600 flex items-center justify-center" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/></svg>
            </a>
            <a href="https://www.researchgate.net/profile/Gabriel-Wosiak-Leite" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white border border-green-400 hover:bg-green-50 transition p-3 shadow text-green-600 flex items-center justify-center" title="ResearchGate">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M17.82 13.41c-1.13 0-2.06.92-2.06 2.06 0 1.13.92 2.06 2.06 2.06 1.13 0 2.06-.92 2.06-2.06 0-1.13-.93-2.06-2.06-2.06zm-11.82-13.41c-3.31 0-6 2.69-6 6v12c0 3.31 2.69 6 6 6h12c3.31 0 6-2.69 6-6v-12c0-3.31-2.69-6-6-6h-12zm12 22h-12c-2.21 0-4-1.79-4-4v-12c0-2.21 1.79-4 4-4h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4zm-7.5-7.5c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm7.5-2.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm-7.5-2.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7.5-2.5c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5zm-7.5 7.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7.5 2.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm-7.5-7.5c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm7.5-2.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5zm-7.5 7.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7.5-2.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5zm-7.5 7.5c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm7.5 2.5c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5zm-7.5-7.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7.5-2.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5zm-7.5 7.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7.5-2.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5z"/></svg>
            </a>
            <a href="https://orcid.org/0000-0002-1705-9100" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white border border-lime-400 hover:bg-lime-50 transition p-3 shadow text-lime-600 flex items-center justify-center" title="ORCID">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-.5-13h1v6h-1zm.5 8.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"/></svg>
            </a>
            <a href="https://scholar.google.com/citations?user=cOumO2wAAAAJ&hl=pt-BR" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white border border-gray-400 hover:bg-gray-100 transition p-3 shadow text-gray-700 flex items-center justify-center" title="Google Scholar">
              {/* Google Scholar icon from https://icons8.com/icon/drPiDBy9kkJ3/google-scholar */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-6 h-6"><path d="M16 2.667c-3.68 0-6.667 2.987-6.667 6.667 0 2.36 1.267 4.44 3.16 5.6-4.053 1.013-7.053 4.64-7.053 8.747 0 .373.3.673.667.673h20.786c.367 0 .667-.3.667-.667 0-4.107-3-7.734-7.053-8.747 1.893-1.16 3.16-3.24 3.16-5.6 0-3.68-2.987-6.667-6.667-6.667zm0 1.333c2.947 0 5.333 2.387 5.333 5.333s-2.387 5.333-5.333 5.333-5.333-2.387-5.333-5.333 2.387-5.333 5.333-5.333zm0 12c3.893 0 7.053 2.893 7.373 6.667H8.627c.32-3.773 3.48-6.667 7.373-6.667zm-8.64 8h17.28c-.32 2.16-2.16 3.867-4.64 4.36v1.307c0 .373-.3.667-.667.667s-.667-.293-.667-.667v-1.307c-2.48-.493-4.32-2.2-4.64-4.36z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
