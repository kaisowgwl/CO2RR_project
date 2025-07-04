import { ChevronRight, Laptop, Brain, Printer, Atom, Droplet, LineChart } from 'lucide-react';

const MethodologyTimelineSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e4e8ed] p-8 md:p-16 text-gray-800">
      {/* Accent bar */}
      <div className="absolute w-3 md:h-4/5 bg-gradient-to-b from-[#0072c6] to-[#00a2ff] left-0 top-[10%] rounded-r-md"></div>
      
      <div className="relative z-10 ml-4 md:ml-8">
        <h1 className="font-bold text-3xl md:text-4xl mb-8 text-[#0072c6]">Methodology – Structure-Guided Design of CO₂RR Catalyst Layers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div>
            <h3 className="font-semibold text-xl mb-6">Research Timeline</h3>
            <div className="relative pl-12 md:pl-[50px]">
              {/* Year 1 Heading */}
              <div className="mb-4 mt-2">
                <span className="inline-block bg-blue-100 text-blue-700 font-bold px-4 py-1 rounded-full text-base shadow-sm">Year 1</span>
              </div>
              {/* Timeline line */}
              <div className="absolute left-5 md:left-[20px] top-0 bottom-0 w-1 md:w-[4px] bg-[#0072c6] rounded-full"></div>
              
              {/* Block 1 – Digital Catalyst Layer Generation */}
              <div className="relative mb-6">
                <div className="absolute left-[-12px] md:left-[-50px] top-0 w-6 h-6 md:w-[24px] md:h-[24px] bg-white border-4 border-[#0072c6] rounded-full"></div>
                <div className="bg-white rounded-lg shadow-md p-4 md:p-[16px]">
                  <h4 className="font-semibold text-lg text-blue-600">Step 1: Digital Catalyst Layer Generation</h4>
                  <ul className="mt-3 space-y-2 text-xs md:text-sm">
                    <li className="flex items-start">
                      <ChevronRight className="text-blue-500 mt-1 mr-2 w-4 h-4" />
                      <span>Generate digital CO₂RR catalyst layers with controlled porosity, catalyst–ionomer distribution, and TPB exposure</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-blue-500 mt-1 mr-2 w-4 h-4" />
                      <span>Design structures to reflect key transport and reaction conditions in gas-fed electrolysis (e.g., GDEs or zero-gap cells)</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-blue-500 mt-1 mr-2 w-4 h-4" />
                      <span>Emphasize gas-phase, ionomer, and catalyst co-location; support experimental 3D printing constraints</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Block 2 – Multiphysics Simulation and Analysis */}
              <div className="relative mb-6">
                <div className="absolute left-[-12px] md:left-[-50px] top-0 w-6 h-6 md:w-[24px] md:h-[24px] bg-white border-4 border-[#0072c6] rounded-full"></div>
                <div className="bg-white rounded-lg shadow-md p-4 md:p-[16px]">
                  <h4 className="font-semibold text-lg text-blue-600">Step 2: Multiphysics Simulation and Analysis</h4>
                  <ul className="mt-3 space-y-2 text-xs md:text-sm">
                    <li className="flex items-start">
                      <ChevronRight className="text-blue-500 mt-1 mr-2 w-4 h-4" />
                      <span>Simulate CO₂ transport, ionic conduction (HCO₃⁻/OH⁻), local pH gradients, and competing HER activity using physics-based models</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-blue-500 mt-1 mr-2 w-4 h-4" />
                      <span>Extract metrics: Faradaic efficiency, TPB density, buffering capacity, and product selectivity potential</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-blue-500 mt-1 mr-2 w-4 h-4" />
                      <span>Include local pH modeling, HER suppression, and gas vs. liquid wetting regimes</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Year 2 Heading */}
              <div className="mb-4 mt-8">
                <span className="inline-block bg-green-100 text-green-700 font-bold px-4 py-1 rounded-full text-base shadow-sm">Year 2</span>
              </div>
              
              {/* Block 3 – AI-Guided Optimization */}
              <div className="relative mb-6">
                <div className="absolute left-[-12px] md:left-[-50px] top-0 w-6 h-6 md:w-[24px] md:h-[24px] bg-white border-4 border-[#0072c6] rounded-full"></div>
                <div className="bg-white rounded-lg shadow-md p-4 md:p-[16px]">
                  <h4 className="font-semibold text-lg text-blue-600">Step 3: AI-Guided Optimization</h4>
                  <ul className="mt-3 space-y-2 text-xs md:text-sm">
                    <li className="flex items-start">
                      <ChevronRight className="text-blue-500 mt-1 mr-2 w-4 h-4" />
                      <span>Use AI algorithms to evolve microstructures for enhanced CO₂ access, increased TPB exposure, and minimal resistance</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-blue-500 mt-1 mr-2 w-4 h-4" />
                      <span>Optimize for improved Faradaic efficiency, product selectivity, and reduced noble metal usage</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-blue-500 mt-1 mr-2 w-4 h-4" />
                      <span>Maximize CO₂RR selectivity and TPB density; target HER suppression and selectivity toward C₁ or C₂⁺ products</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Block 4 – Experimental Fabrication and Validation */}
              <div className="relative mb-6">
                <div className="absolute left-[-12px] md:left-[-50px] top-0 w-6 h-6 md:w-[24px] md:h-[24px] bg-white border-4 border-[#0072c6] rounded-full"></div>
                <div className="bg-white rounded-lg shadow-md p-4 md:p-[16px]">
                  <h4 className="font-semibold text-lg text-blue-600">Step 4: Experimental Fabrication and Validation</h4>
                  <ul className="mt-3 space-y-2 text-xs md:text-sm">
                    <li className="flex items-start">
                      <ChevronRight className="text-blue-500 mt-1 mr-2 w-4 h-4" />
                      <span>Fabricate optimized structures using 3D printing or casting methods</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-blue-500 mt-1 mr-2 w-4 h-4" />
                      <span>Validate CO₂RR performance via electrochemical testing (product analysis, impedance, Faradaic efficiency) in gas-fed electrolysis cells (zero-gap, flow cell, or GDE)</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-blue-500 mt-1 mr-2 w-4 h-4" />
                      <span>Assess performance metrics: FE, selectivity, partial current density for CO₂-to-CO or CO₂-to-C₂⁺</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-6">Key Methodologies</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow-md p-3 md:p-4 h-full text-xs md:text-sm">
                <div className="flex items-center mb-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <Laptop className="text-blue-600 w-5 h-5" />
                  </div>
                  <h4 className="font-semibold">Digital Twin Simulation</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-200 text-blue-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">3D Modeling</span>
                  <span className="bg-blue-200 text-blue-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">Transport Physics</span>
                  <span className="bg-blue-200 text-blue-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">pH Gradients</span>
                  <span className="bg-blue-200 text-blue-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">Catalyst–Ionomer</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 h-full">
                <div className="flex items-center mb-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <Brain className="text-blue-600 w-5 h-5" />
                  </div>
                  <h4 className="font-semibold">Machine Learning</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-200 text-purple-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">AI Optimization</span>
                  <span className="bg-purple-200 text-purple-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">MATBOX Toolbox</span>
                  <span className="bg-purple-200 text-purple-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">Closed-Loop Design</span>
                  <span className="bg-purple-200 text-purple-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">Structure Evolution</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 h-full">
                <div className="flex items-center mb-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <Printer className="text-blue-600 w-5 h-5" />
                  </div>
                  <h4 className="font-semibold">Additive Manufacturing</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-200 text-green-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">3D Printing</span>
                  <span className="bg-green-200 text-green-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">DMLS</span>
                  <span className="bg-green-200 text-green-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">EBM</span>
                  <span className="bg-green-200 text-green-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">Ti Scaffold</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 h-full">
                <div className="flex items-center mb-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <Atom className="text-blue-600 w-5 h-5" />
                  </div>
                  <h4 className="font-semibold">Electrodeposition</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">Pulsed Deposition</span>
                  <span className="bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">Catalyst Shell</span>
                  <span className="bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">Controlled Growth</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 h-full">
                <div className="flex items-center mb-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <Droplet className="text-blue-600 w-5 h-5" />
                  </div>
                  <h4 className="font-semibold">Ionomer Application</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-cyan-200 text-cyan-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">Spray Coating</span>
                  <span className="bg-cyan-200 text-cyan-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">Zone-Selective</span>
                  <span className="bg-cyan-200 text-cyan-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">Co-Printing</span>
                  <span className="bg-cyan-200 text-cyan-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">TPB Exposure</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 h-full">
                <div className="flex items-center mb-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <LineChart className="text-blue-600 w-5 h-5" />
                  </div>
                  <h4 className="font-semibold">Electrochemical Testing</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-200 text-red-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">EIS</span>
                  <span className="bg-red-200 text-red-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">CV</span>
                  <span className="bg-red-200 text-red-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">Polarization</span>
                  <span className="bg-red-200 text-red-800 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-semibold">Durability</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 p-5 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Integrated Workflow</h4>
              <div className="h-[180px] w-full relative">
                <svg width="100%" height="100%" viewBox="0 0 500 180">
                  {/* Workflow Diagram */}
                  <rect x="20" y="20" width="100" height="60" rx="5" fill="#e3f2fd" stroke="#0072c6" strokeWidth="2"/>
                  <text x="70" y="50" textAnchor="middle" fontSize="12" fontWeight="bold">Simulation</text>
                  <text x="70" y="70" textAnchor="middle" fontSize="10">Digital Twin</text>
                  
                  <rect x="200" y="20" width="100" height="60" rx="5" fill="#e3f2fd" stroke="#0072c6" strokeWidth="2"/>
                  <text x="250" y="50" textAnchor="middle" fontSize="12" fontWeight="bold">ML Design</text>
                  <text x="250" y="70" textAnchor="middle" fontSize="10">Optimization</text>
                  
                  <rect x="380" y="20" width="100" height="60" rx="5" fill="#e3f2fd" stroke="#0072c6" strokeWidth="2"/>
                  <text x="430" y="50" textAnchor="middle" fontSize="12" fontWeight="bold">Fabrication</text>
                  <text x="430" y="70" textAnchor="middle" fontSize="10">3D Printing</text>
                  
                  <rect x="110" y="120" width="100" height="60" rx="5" fill="#e3f2fd" stroke="#0072c6" strokeWidth="2"/>
                  <text x="160" y="150" textAnchor="middle" fontSize="12" fontWeight="bold">Electrodeposition</text>
                  <text x="160" y="170" textAnchor="middle" fontSize="10">Catalyst</text>
                  
                  <rect x="290" y="120" width="100" height="60" rx="5" fill="#e3f2fd" stroke="#0072c6" strokeWidth="2"/>
                  <text x="340" y="150" textAnchor="middle" fontSize="12" fontWeight="bold">Testing</text>
                  <text x="340" y="170" textAnchor="middle" fontSize="10">Performance</text>
                  
                  {/* Arrows */}
                  <path d="M120 50 L200 50" stroke="#0072c6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                  <path d="M300 50 L380 50" stroke="#0072c6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                  <path d="M430 80 L430 100 L210 100 L210 120" stroke="#0072c6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                  <path d="M210 120 L290 150" stroke="#0072c6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                  <path d="M340 120 L340 90 L70 90 L70 80" stroke="#0072c6" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                  
                  {/* Arrowhead Marker */}
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#0072c6"/>
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologyTimelineSection;
