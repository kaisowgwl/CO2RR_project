import { Brain, Printer, Beaker, Settings2, Lightbulb, User } from 'lucide-react';

const ExecutiveSummarySection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e4e8ed] p-8 md:p-16 text-gray-800">
      {/* Accent bar */}
      <div className="absolute w-3 md:h-4/5 bg-gradient-to-b from-[#0072c6] to-[#00a2ff] left-0 top-[10%] rounded-r-md"></div>

      <div className="relative z-10 ml-4 md:ml-8">
        <h1 className="font-bold text-3xl md:text-4xl mb-8 text-[#0072c6]">Executive Summary</h1>


        {/* Project Vision block as a small block at the top right */}
        <div className="absolute top-[-2.5rem] right-8 w-full max-w-xs z-20">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-base font-semibold mb-1 flex items-center gap-2"><Lightbulb className="w-4 h-4 text-yellow-500" /> Project Vision</h2>
            <p className="mb-1 text-xs">CO₂ electroreduction suffers from poor selectivity, low Faradaic efficiency for multicarbon products, and limited understanding of how catalyst layer structure impacts performance. Existing gas diffusion electrode designs are largely empirical and fail to optimize transport, TPB exposure, and stability.</p>
            <p className="text-xs text-gray-600 italic mt-1">“A paradigm shift: from empirical catalyst layers to structure-driven, hypothesis-guided design for CO₂RR.”</p>
          </div>
        </div>

        {/* Block 2: Schematic for Structure-Driven CO₂RR Optimization Pipeline */}
        <div className="bg-gradient-to-br from-[#f5f7fa] to-[#e4e8ed] p-8 rounded-lg shadow-md md:col-span-2">
          <h2 className="text-2xl font-bold text-[#0072c6] mb-6">Structure-Driven CO₂RR Optimization Pipeline</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* 1. 3D Structure Generation */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#0072c6] text-white flex items-center justify-center text-xl font-bold">1</div>
              <p className="mt-2 font-semibold">3D Structure Generation</p>
              <p className="text-xs md:text-sm text-gray-600">Input: Catalyst/support/ionomer<br/>MATBOX or similar 3D ops toolbox</p>
            </div>
            <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-[#0072c6] to-[#00a2ff]"></div>
            {/* 2. Multiphysics Simulation */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#00a2ff] text-white flex items-center justify-center text-xl font-bold">2</div>
              <p className="mt-2 font-semibold">Multiphysics Simulation</p>
              <p className="text-xs md:text-sm text-gray-600">CO₂ diffusion, pH, transport, HER<br/>Predict FE, TPB, limitations</p>
            </div>
            <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-[#0072c6] to-[#00a2ff]"></div>
            {/* 3. AI Optimization */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#0072c6] text-white flex items-center justify-center text-xl font-bold">3</div>
              <p className="mt-2 font-semibold">AI Optimization</p>
              <p className="text-xs md:text-sm text-gray-600">ML: Bayesian/surrogate<br/>Max FE, min PGM, tune selectivity</p>
            </div>
            <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-[#0072c6] to-[#00a2ff]"></div>
            {/* 4. 3D Printing & Validation */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#00a2ff] text-white flex items-center justify-center text-xl font-bold">4</div>
              <p className="mt-2 font-semibold">3D Printing & Validation</p>
              <p className="text-xs md:text-sm text-gray-600">Direct-ink, aerosol jet, photopolymer<br/>Test FE, pH, permeability</p>
            </div>
            <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-[#0072c6] to-[#00a2ff]"></div>
            {/* 5. CO₂RR Performance */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#0072c6] text-white flex items-center justify-center text-xl font-bold">5</div>
              <p className="mt-2 font-semibold">CO₂RR Performance</p>
              <p className="text-xs md:text-sm text-gray-600">High FE, low PGM, scalable design</p>
            </div>
          </div>
        </div>


        {/* Block 3: Core Strategy */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:col-span-2 text-xs md:text-sm">
          <h3 className="text-base font-medium mb-2">Core Strategy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {/* Step 1: 3D Structure Generation */}
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 mr-3 flex-shrink-0">
                  <Brain className="text-blue-600 w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">3D Structure Generation</p>
                  <p className="text-xs md:text-sm text-gray-600">Input: Catalyst material, support, ionomer. A 3D operations toolbox enables systematic modification of initial, experimentally validated microstructures to explore the design space for CO₂RR catalyst layers.<br/><span className='italic'>Why: CO₂RR selectivity is governed by triple-phase boundary exposure—this approach enables targeted, hypothesis-driven exploration.</span></p>
                </div>
              </div>

              {/* Step 2: Multiphysics Simulation */}
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 mr-3 flex-shrink-0">
                  <Beaker className="text-blue-600 w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">Multiphysics Simulation</p>
                  <p className="text-xs md:text-sm text-gray-600">Simulate CO₂ diffusion, local pH, ion/electron transport, HER. Predict FE, TPB density, and transport limitations.<br/><span className='italic'>Why: Models reveal where HER dominates and CO₂ is depleted—enabling targeted design.</span></p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {/* Step 3: AI Optimization */}
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 mr-3 flex-shrink-0">
                  <Settings2 className="text-blue-600 w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">AI Optimization</p>
                  <p className="text-xs md:text-sm text-gray-600">Use ML (Bayesian optimization, surrogate modeling) to maximize FE, minimize noble metal, and balance connectivity/selectivity.<br/><span className='italic'>Why: Replaces trial-and-error with intelligent, target-driven design.</span></p>
                </div>
              </div>

              {/* Step 4: 3D Printing & Validation */}
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 mr-3 flex-shrink-0">
                  <Printer className="text-blue-600 w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">3D Printing & Experimental Validation</p>
                  <p className="text-xs md:text-sm text-gray-600">Fabricate with direct-ink writing, aerosol jet, or photopolymerization. Characterize gas permeability, FE, and local pH.<br/><span className='italic'>Why: Closes the loop—tests if optimized structures solve FE/selectivity in real cells.</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Key Innovation block at the bottom, two columns */}
        <div className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500 md:grid md:grid-cols-2 gap-6 flex flex-col md:col-span-2 mt-6">
          <div>
            <h3 className="font-semibold text-lg mb-3">Key Innovation</h3>
            <p className="mb-2">Unlike conventional approaches that focus primarily on catalyst composition or surface functionalization, this project introduces a <span className="font-bold">structural design strategy</span> for CO₂ electroreduction catalyst layers that:</p>
          </div>
          <ul className="space-y-2 pl-5">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Maximizes triple-phase boundary exposure to enhance CO₂ access and utilization</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Reduces transport and ionic resistance across heterogeneous regions</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Enables precise control of porosity and wettability to balance gas and ion diffusion</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Maintains continuous electronic and ionic pathways for stable and efficient current distribution</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummarySection;
