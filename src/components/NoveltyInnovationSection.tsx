import { Brain, Printer, Atom, GitBranch } from 'lucide-react';

const NoveltyInnovationSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e4e8ed] p-8 md:p-16 text-gray-800">
      {/* Accent bar */}
      <div className="absolute w-3 md:h-4/5 bg-gradient-to-b from-[#0072c6] to-[#00a2ff] left-0 top-[10%] rounded-r-md"></div>
      
      <div className="relative z-10 ml-4 md:ml-8">
        <h1 className="font-bold text-3xl md:text-4xl mb-8 text-[#0072c6]">Novelty and Innovation</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="font-semibold text-xl mb-4 text-indigo-700">First Fully Integrated Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-indigo-100 mr-4 flex-shrink-0">
                    <Brain className="text-indigo-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Inverse Design via ML</p>
                    <p className="text-sm text-gray-600">Physics-based and multiphysics modeling, combined with machine learning, for optimal CO₂RR catalyst layer microstructure design—linking structure to Faradaic efficiency and selectivity.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-indigo-100 mr-4 flex-shrink-0">
                    <Printer className="text-indigo-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Additive Manufacturing</p>
                    <p className="text-sm text-gray-600">Direct 3D printing of gas diffusion electrodes and catalyst supports, enabling rapid iteration and validation of designed microarchitectures for CO₂RR.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-indigo-100 mr-4 flex-shrink-0">
                    <Atom className="text-indigo-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Tailored Catalyst Layer Assembly</p>
                    <p className="text-sm text-gray-600">Electrochemical or solution-phase deposition of CO₂RR catalysts (e.g., Cu, Ag) onto printed scaffolds, with controlled porosity and TPB exposure.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-indigo-100 mr-4 flex-shrink-0">
                    <GitBranch className="text-indigo-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Digital Fabrication & Feedback</p>
                    <p className="text-sm text-gray-600">Microarchitectures with engineered ionic/electronic pathways, validated by experiment and simulation, to optimize CO₂ access, local pH, and HER suppression.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
              <h3 className="font-semibold text-xl mb-4">Key Innovation</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Shifts the design paradigm from composition to architecture for CO₂RR catalyst layers</li>
                <li>Quantifies the impact of triple-phase boundary density, percolation, and CO₂ accessibility on performance</li>
                <li>Integrates local pH modeling and ionic resistance mapping to address HER suppression</li>
                <li>Enables 3D-printed experimental validation and rapid iteration of microstructures</li>
                <li>Combines modeling and experimental expertise to guide and validate design choices</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-4">Comparison to Conventional Approaches</h3>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-xs md:text-sm">
                  <thead>
                    <tr>
                      <th className="bg-blue-50 p-3 text-left font-semibold">Feature</th>
                      <th className="bg-blue-50 p-2 text-left font-semibold">Spray-Coated GDE</th>
                      <th className="bg-blue-50 p-2 text-left font-semibold">Laminate or Dual-Porosity</th>
                      <th className="bg-blue-50 p-2 text-left font-semibold">Architected 3D Catalyst Layer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border-b border-gray-200">Selectivity Control</td>
                      <td className="p-2 border-b border-gray-200">Poor</td>
                      <td className="p-2 border-b border-gray-200">Moderate</td>
                      <td className="p-2 border-b border-gray-200 text-green-600 font-medium">High (via TPB + pH tuning)</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-gray-200">HER Suppression</td>
                      <td className="p-2 border-b border-gray-200">Weak</td>
                      <td className="p-2 border-b border-gray-200">Partial (buffering zones)</td>
                      <td className="p-2 border-b border-gray-200 text-green-600 font-medium">Engineered via structure</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-gray-200">TPB Exposure</td>
                      <td className="p-2 border-b border-gray-200">Random</td>
                      <td className="p-2 border-b border-gray-200">Partially exposed</td>
                      <td className="p-2 border-b border-gray-200 text-green-600 font-medium">Maximized and localized</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-gray-200">Gas/Ion Transport</td>
                      <td className="p-2 border-b border-gray-200">Non-optimized</td>
                      <td className="p-2 border-b border-gray-200">Moderately controlled</td>
                      <td className="p-2 border-b border-gray-200 text-green-600 font-medium">Fully integrated (structure-tailored)</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-gray-200">Local pH Stability</td>
                      <td className="p-2 border-b border-gray-200">Poor</td>
                      <td className="p-2 border-b border-gray-200">Moderate</td>
                      <td className="p-2 border-b border-gray-200 text-green-600 font-medium">Modeled and stabilized</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-gray-200">CO₂ Accessibility</td>
                      <td className="p-2 border-b border-gray-200">Low</td>
                      <td className="p-2 border-b border-gray-200">Moderate</td>
                      <td className="p-2 border-b border-gray-200 text-green-600 font-medium">High, tunable by architecture</td>
                    </tr>
                    <tr>
                      <td className="p-3">Fabrication Control</td>
                      <td className="p-2">Manual/Spray</td>
                      <td className="p-2">Moderate (inkjet/laminate)</td>
                      <td className="p-2 text-green-600 font-medium">High (3D-printable)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl mb-4">Architectural Comparison</h3>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                {/* Spray-Coated GDE */}
                <div className="w-full md:w-1/3 text-center">
                  <div className="h-[150px] bg-[#ffecb3] border border-[#ffd54f] rounded-lg flex flex-col justify-between p-3">
                    <div className="font-bold text-[#bf360c]">Spray-Coated GDE</div>
                    <div className="flex flex-wrap justify-center">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-[#0288d1] rounded-full m-0.5"></div>
                      ))}
                    </div>
                    <div className="border-t-2 border-dashed border-[#d32f2f] pt-1 text-[#d32f2f] text-xs">Random Dispersion</div>
                  </div>
                  <div className="mt-2 text-sm">Random catalyst/ionomer dispersion, uncontrolled porosity</div>
                </div>
                {/* Laminate or Dual-Porosity */}
                <div className="w-full md:w-1/3 text-center">
                  <div className="h-[150px] bg-[#e6ee9c] border border-[#c0ca33] rounded-lg flex flex-col justify-between p-3">
                    <div className="font-bold text-[#827717]">Laminate or Dual-Porosity</div>
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="w-[90%] h-[5px] bg-[#78909c] my-1"></div>
                      <div className="w-[90%] h-[5px] bg-[#78909c] my-1"></div>
                      <div className="w-[90%] h-[5px] bg-[#78909c] my-1"></div>
                      <div className="flex justify-around w-[90%]">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-2 h-2 bg-[#0288d1] rounded-full"></div>
                        ))}
                      </div>
                    </div>
                    <div className="border-t-2 border-dashed border-[#fb8c00] pt-1 text-[#fb8c00] text-xs">Limited TPB Control</div>
                  </div>
                  <div className="mt-2 text-sm">Structured layers, but limited TPB control and bulk HER zones</div>
                </div>
                {/* Architected 3D Catalyst Layer */}
                <div className="w-full md:w-1/3 text-center">
                  <div className="h-[150px] bg-[#a5d6a7] border border-[#4caf50] rounded-lg flex flex-col justify-between p-3">
                    <div className="font-bold text-[#2e7d32]">Architected 3D Catalyst Layer</div>
                    <div className="flex flex-col items-center justify-center h-full">
                      <svg width="100" height="80" viewBox="0 0 100 80">
                        <path d="M10 60 Q50 10 90 60" stroke="#78909c" strokeWidth="3" fill="none"/>
                        <circle cx="20" cy="50" r="3" fill="#0288d1"/>
                        <circle cx="30" cy="40" r="3" fill="#0288d1"/>
                        <circle cx="40" cy="30" r="3" fill="#0288d1"/>
                        <circle cx="50" cy="25" r="3" fill="#0288d1"/>
                        <circle cx="60" cy="30" r="3" fill="#0288d1"/>
                        <circle cx="70" cy="40" r="3" fill="#0288d1"/>
                        <circle cx="80" cy="50" r="3" fill="#0288d1"/>
                      </svg>
                    </div>
                    <div className="border-t-2 border-[#4caf50] pt-1 text-[#2e7d32] text-xs">Engineered TPB & CO₂ Access</div>
                  </div>
                  <div className="mt-2 text-sm">Localized TPB, engineered gas–ion–electron paths, CO₂ access zones</div>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-600 text-center">
                Traditional CO₂RR electrodes rely on passive diffusion and random interfaces. This project introduces a structured, simulation-guided approach that actively designs local environments to suppress HER and boost selectivity.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoveltyInnovationSection;
