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
          Revolutionizing PEM Electrolyzer Catalysts
        </h1>
        <h2 className="text-2xl md:text-3xl mb-10 text-gray-600 font-normal">
          An Integrated Approach for Ultra-Low Iridium Loading
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
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
