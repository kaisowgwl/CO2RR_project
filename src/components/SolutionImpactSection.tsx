import { Layers, Check, Zap, Atom, Droplet, Info } from 'lucide-react';


const SolutionImpactSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e4e8ed] p-8 md:p-16 text-gray-800">
      {/* Accent bar */}
      <div className="absolute w-3 md:h-4/5 bg-gradient-to-b from-[#0072c6] to-[#00a2ff] left-0 top-[10%] rounded-r-md"></div>
      
      <div className="relative z-10 ml-4 md:ml-8">
        <h1 className="font-bold text-3xl md:text-4xl mb-8 text-[#0072c6]">Proposed Solution & Impact</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-green-100 mr-4">
                  <Layers className="text-green-600 w-5 h-5" />
                </div>
                <h3 className="font-semibold text-xl">Monolithic Ti-Ir Architecture</h3>
              </div>
              <p className="mb-3">
                Our approach eliminates interfacial losses via a seamless, integrated structure, and uniquely leverages a digital design loop:
              </p>
              <ul className="space-y-3 pl-5">
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 w-4 h-4" />
                  <span>
                    <span className="font-bold">Digital twin generation and computational experiments</span> predict catalyst layer performance and identify optimal microstructures.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 w-4 h-4" />
                  <span>
                    <span className="font-bold">Machine learning optimization</span> uses simulation feedback to guide the design of titanium microstructures for maximum Ir utilization and conductivity.
                  </span>
                </li>
                <li className="flex items-start group relative">
                  <Check className="text-green-500 mt-1 mr-2 w-4 h-4" />
                  <span>
                    Printing conductive titanium microstructures directly onto the current collector, based on optimized digital designs.
                    <Info className="inline w-4 h-4 text-blue-400 cursor-pointer align-text-bottom ml-1" />
                  </span>
                  <div className="absolute left-8 top-6 z-20 hidden group-hover:block bg-white border border-gray-300 rounded shadow-lg p-3 w-[320px] text-xs text-gray-700">
                    <div className="font-semibold mb-1">Fabrication & Scaling References:</div>
                    <ul className="list-disc pl-4">
                      <li>
                        <span className="font-bold">Resolution:</span> 20–50 μm features demonstrated for Ti by laser powder bed fusion and micro-SLA.<br />
                        <span className="text-gray-500">e.g. Nature Communications 12, 1850 (2021); Additive Manufacturing 36, 101574 (2020)</span>
                      </li>
                      <li>
                        <span className="font-bold">Scalable area:</span> Electrodes up to 10–25 cm² reported; wafer-scale (100 cm²+) possible with industrial systems.<br />
                        <span className="text-gray-500">e.g. Advanced Engineering Materials 22, 2000272 (2020)</span>
                      </li>
                    </ul>
                    <div className="mt-1 text-gray-500">
                      See also: "Additive Manufacturing of Metallic Components for Electrochemical Devices", Joule 2022.
                    </div>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 w-4 h-4" />
                  <span>
                    <span className="font-bold">Growing Iridium nanostructures in-situ on the Ti scaffold and integrating ionomer</span> via spray coating or infiltration, forming ultra-thin, high-activity, and proton-conductive catalyst layers.
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-xl mb-4 flex items-center">
                Expected Impact
                <span className="ml-2 relative group">
                  <Info className="w-5 h-5 text-blue-500 cursor-pointer" />
                  <div className="absolute left-6 top-0 z-20 hidden group-hover:block bg-white border border-gray-300 rounded shadow-lg p-4 w-[340px] text-xs text-gray-700">
                    <div className="font-semibold mb-1">State-of-the-art references:</div>
                    <ul className="list-disc pl-4 mb-2">
                      <li>
                        <span className="font-bold">Ir loading:</span> 0.2–0.3 mg/cm² (Nature Energy 2022, Joule 2023)
                      </li>
                      <li>
                        <span className="font-bold">Contact resistance:</span> 5–20 mΩ·cm² (J. Power Sources 2021)
                      </li>
                      <li>
                        <span className="font-bold">Mass activity:</span> 0.05–0.15 A/mg Ir (ACS Catalysis 2023)
                      </li>
                      <li>
                        <span className="font-bold">Layer thickness:</span> 2–5 μm (JES 2022)
                      </li>
                    </ul>
                    <div className="mb-1">
                      <span className="font-bold">Note:</span> Durability (&gt;1000 h) and scalability to large-area cells remain key challenges for all low-Ir approaches.
                    </div>
                    <div className="text-gray-500">
                      See also: IEA Global Hydrogen Review 2022
                    </div>
                  </div>
                </span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-blue-600">90%</span>
                    <p className="text-sm mt-1">Reduction in Ir loading</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-blue-600">&lt;10</span>
                    <p className="text-sm mt-1">mΩ·cm² contact resistance</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-blue-600">0.1</span>
                    <p className="text-sm mt-1">A/mg Ir mass activity</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-blue-600">&lt;3</span>
                    <p className="text-sm mt-1">μm catalyst layer thickness</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex justify-center items-center">
              <svg width="500" height="300" viewBox="0 0 500 300">
                {/* Current Collector Base */}
                <rect x="50" y="220" width="400" height="30" fill="#B0BEC5" stroke="#78909C" strokeWidth="2"/>
                <text x="250" y="240" textAnchor="middle" fill="#37474F" fontSize="14">Titanium Current Collector</text>
                
                {/* Traditional vs New Architecture */}
                {/* Traditional Side */}
                <rect x="70" y="170" width="160" height="50" fill="#FFECB3" stroke="#FFD54F" strokeWidth="2"/>
                <text x="150" y="200" textAnchor="middle" fill="#37474F" fontSize="12">Traditional Catalyst Layer</text>
                <text x="150" y="160" textAnchor="middle" fill="#D32F2F" fontSize="14">High Ir Loading</text>
                
                {/* Interface Problem */}
                <path d="M70 220 L230 220" stroke="#D32F2F" strokeWidth="3" strokeDasharray="5,5"/>
                <text x="150" y="215" textAnchor="middle" fill="#D32F2F" fontSize="10">Interface Resistance</text>
                
                {/* New Architecture Side */}
                <path d="M270 170 Q320 140 370 170 L370 220 L270 220 Z" fill="#A5D6A7" stroke="#4CAF50" strokeWidth="2"/>
                <text x="320" y="200" textAnchor="middle" fill="#37474F" fontSize="12">Monolithic Ti-Ir Structure</text>
                <text x="320" y="160" textAnchor="middle" fill="#2E7D32" fontSize="14">Ultra-Low Ir Loading</text>
                
                {/* Ir Nanoparticles */}
                <circle cx="290" cy="180" r="3" fill="#E1F5FE" stroke="#0288D1" strokeWidth="1"/>
                <circle cx="310" cy="175" r="3" fill="#E1F5FE" stroke="#0288D1" strokeWidth="1"/>
                <circle cx="330" cy="180" r="3" fill="#E1F5FE" stroke="#0288D1" strokeWidth="1"/>
                <circle cx="350" cy="185" r="3" fill="#E1F5FE" stroke="#0288D1" strokeWidth="1"/>
                <circle cx="300" cy="190" r="3" fill="#E1F5FE" stroke="#0288D1" strokeWidth="1"/>
                <circle cx="320" cy="195" r="3" fill="#E1F5FE" stroke="#0288D1" strokeWidth="1"/>
                <circle cx="340" cy="190" r="3" fill="#E1F5FE" stroke="#0288D1" strokeWidth="1"/>
                
                {/* Divider */}
                <line x1="250" y1="120" x2="250" y2="270" stroke="#78909C" strokeWidth="2" strokeDasharray="5,5"/>
                
                {/* Labels */}
                <text x="150" y="120" textAnchor="middle" fill="#D32F2F" fontWeight="bold" fontSize="16">Conventional Approach</text>
                <text x="320" y="120" textAnchor="middle" fill="#2E7D32" fontWeight="bold" fontSize="16">Our Approach</text>
              </svg>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-xl mb-4">Key Advantages</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Zap className="text-green-600 w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">Seamless Electrical Pathway</p>
                    <p className="text-sm text-gray-600">Eliminates contact resistance between catalyst layer and support</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Atom className="text-green-600 w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">Maximized Catalyst Utilization</p>
                    <p className="text-sm text-gray-600">Every Ir atom is accessible and electrochemically active</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Droplet className="text-green-600 w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">Optimized Mass Transport</p>
                    <p className="text-sm text-gray-600">Engineered porosity for efficient water/gas/product transport</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionImpactSection;
