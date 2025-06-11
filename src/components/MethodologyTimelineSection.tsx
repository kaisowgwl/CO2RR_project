import { ChevronRight, Laptop, Brain, Printer, Atom, Droplet, LineChart } from 'lucide-react';

const MethodologyTimelineSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e4e8ed] p-8 md:p-16 text-gray-800">
      {/* Accent bar */}
      <div className="absolute w-3 md:h-4/5 bg-gradient-to-b from-[#0072c6] to-[#00a2ff] left-0 top-[10%] rounded-r-md"></div>
      
      <div className="relative z-10 ml-4 md:ml-8">
        <h1 className="font-bold text-3xl md:text-4xl mb-8 text-[#0072c6]">Methodology & Timeline</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div>
            <h3 className="font-semibold text-xl mb-6">Research Timeline</h3>
            
            <div className="relative pl-12 md:pl-[50px]">
              {/* Timeline line */}
              <div className="absolute left-5 md:left-[20px] top-0 bottom-0 w-1 md:w-[4px] bg-[#0072c6] rounded-full"></div>
              
              <div className="relative mb-6">
                <div className="absolute left-[-12px] md:left-[-50px] top-0 w-6 h-6 md:w-[24px] md:h-[24px] bg-white border-4 border-[#0072c6] rounded-full"></div>
                <div className="bg-white rounded-lg shadow-md p-4 md:p-[16px]">
                  <h4 className="font-semibold text-lg text-blue-600">Year 1: Design and Modeling</h4>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="text-blue-500 mt-1 mr-2 w-4 h-4" />
                      <span>Extend existing COMSOL/voxel-based simulation tools</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-blue-500 mt-1 mr-2 w-4 h-4" />
                      <span>Run multi-parameter DoE and ML training</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-blue-500 mt-1 mr-2 w-4 h-4" />
                      <span>Identify optimal structure-property relationships</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="relative mb-6">
                <div className="absolute left-[-12px] md:left-[-50px] top-0 w-6 h-6 md:w-[24px] md:h-[24px] bg-white border-4 border-[#0072c6] rounded-full"></div>
                <div className="bg-white rounded-lg shadow-md p-4 md:p-[16px]">
                  <h4 className="font-semibold text-lg text-blue-600">Year 2: Fabrication and Validation</h4>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="text-blue-500 mt-1 mr-2 w-4 h-4" />
                      <span>Fabricate top candidate structures in titanium via AM</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-blue-500 mt-1 mr-2 w-4 h-4" />
                      <span>Grow Ir nanostructures directly onto Ti using electrodeposition</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-blue-500 mt-1 mr-2 w-4 h-4" />
                      <span>Apply ionomer via controlled deposition techniques</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-blue-500 mt-1 mr-2 w-4 h-4" />
                      <span>Conduct full electrochemical and morphological characterization</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="relative mb-6">
                <div className="absolute left-[-12px] md:left-[-50px] top-0 w-6 h-6 md:w-[24px] md:h-[24px] bg-white border-4 border-[#0072c6] rounded-full"></div>
                <div className="bg-white rounded-lg shadow-md p-4 md:p-[16px]">
                  <h4 className="font-semibold text-lg text-blue-600">Project Completion</h4>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="text-blue-500 mt-1 mr-2 w-4 h-4" />
                      <span>Publish results in peer-reviewed journals</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-blue-500 mt-1 mr-2 w-4 h-4" />
                      <span>File provisional patent on architectural design</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-blue-500 mt-1 mr-2 w-4 h-4" />
                      <span>Establish framework for future low-PGM catalyst architectures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-6">Key Methodologies</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow-md p-5 h-full">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Laptop className="text-blue-600 w-5 h-5" />
                  </div>
                  <h4 className="font-semibold">Digital Twin Simulation</h4>
                </div>
                <p className="text-sm">COMSOL Multiphysics coupled with voxel-based microstructure generation to simulate transport phenomena</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 h-full">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Brain className="text-blue-600 w-5 h-5" />
                  </div>
                  <h4 className="font-semibold">Machine Learning</h4>
                </div>
                <p className="text-sm">Neural networks and genetic algorithms to identify optimal geometries from simulation results</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 h-full">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Printer className="text-blue-600 w-5 h-5" />
                  </div>
                  <h4 className="font-semibold">Additive Manufacturing</h4>
                </div>
                <p className="text-sm">Direct metal laser sintering (DMLS) or electron beam melting (EBM) for Ti scaffold fabrication</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 h-full">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Atom className="text-blue-600 w-5 h-5" />
                  </div>
                  <h4 className="font-semibold">Electrodeposition</h4>
                </div>
                <p className="text-sm">Pulsed electrodeposition or ALD techniques for controlled Ir nanostructure growth</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 h-full">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Droplet className="text-blue-600 w-5 h-5" />
                  </div>
                  <h4 className="font-semibold">Ionomer Application</h4>
                </div>
                <p className="text-sm">Spray coating or vacuum-assisted infiltration for optimal proton transport pathways</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 h-full">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <LineChart className="text-blue-600 w-5 h-5" />
                  </div>
                  <h4 className="font-semibold">Electrochemical Testing</h4>
                </div>
                <p className="text-sm">EIS, CV, and polarization measurements to evaluate performance and durability</p>
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
                  <text x="160" y="150" textAnchor="middle" fontSize="12" fontWeight="bold">Ir Deposition</text>
                  <text x="160" y="170" textAnchor="middle" fontSize="10">Electrochemical</text>
                  
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
