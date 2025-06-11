import { Brain, Printer, Atom, GitBranch, CheckCircle } from 'lucide-react';

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
                    <p className="text-sm text-gray-600">Physics-based modeling combined with machine learning for optimal microstructure design</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-indigo-100 mr-4 flex-shrink-0">
                    <Printer className="text-indigo-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Additive Manufacturing</p>
                    <p className="text-sm text-gray-600">Direct 3D printing of conductive Ti current collectors tailored for catalyst growth</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-indigo-100 mr-4 flex-shrink-0">
                    <Atom className="text-indigo-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Direct Ir Growth</p>
                    <p className="text-sm text-gray-600">Electrochemical or ALD deposition of Ir nanostructures onto the printed scaffold</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-indigo-100 mr-4 flex-shrink-0">
                    <GitBranch className="text-indigo-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Digital Fabrication</p>
                    <p className="text-sm text-gray-600">Microarchitectures with controlled ionic/electronic pathways for optimal performance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
              <h3 className="font-semibold text-xl mb-4">Key Innovation</h3>
              <p className="mb-3">By printing the catalyst structure directly over the metallic current collector and growing Ir in-place, the design <span className="font-bold">eliminates electrical interfaces</span>, creating a single architected unit with:</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-indigo-600 mr-2 w-5 h-5" />
                  <span>Intrinsic conductivity</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-indigo-600 mr-2 w-5 h-5" />
                  <span>Optimal Ir dispersion</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-indigo-600 mr-2 w-5 h-5" />
                  <span>Continuous electron/ion transport pathways</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-4">Comparison to Conventional Approaches</h3>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="bg-blue-50 p-3 text-left font-semibold">Feature</th>
                      <th className="bg-blue-50 p-3 text-left font-semibold">Conventional CCM</th>
                      <th className="bg-blue-50 p-3 text-left font-semibold">PTE Architecture</th>
                      <th className="bg-blue-50 p-3 text-left font-semibold">Our Approach</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border-b border-gray-200">Ir Loading</td>
                      <td className="p-3 border-b border-gray-200">2-3 mg/cm²</td>
                      <td className="p-3 border-b border-gray-200">0.5-1 mg/cm²</td>
                      <td className="p-3 border-b border-gray-200 text-green-600 font-medium">&lt;0.3 mg/cm²</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-gray-200">Contact Resistance</td>
                      <td className="p-3 border-b border-gray-200">High</td>
                      <td className="p-3 border-b border-gray-200">Medium</td>
                      <td className="p-3 border-b border-gray-200 text-green-600 font-medium">Minimal</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-gray-200">Catalyst Utilization</td>
                      <td className="p-3 border-b border-gray-200">Low (~30%)</td>
                      <td className="p-3 border-b border-gray-200">Medium (~50%)</td>
                      <td className="p-3 border-b border-gray-200 text-green-600 font-medium">High (~90%)</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-gray-200">Electrical Pathway</td>
                      <td className="p-3 border-b border-gray-200">Discontinuous</td>
                      <td className="p-3 border-b border-gray-200">Partially continuous</td>
                      <td className="p-3 border-b border-gray-200 text-green-600 font-medium">Fully continuous</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-gray-200">Mass Transport</td>
                      <td className="p-3 border-b border-gray-200">Random porosity</td>
                      <td className="p-3 border-b border-gray-200">Partially engineered</td>
                      <td className="p-3 border-b border-gray-200 text-green-600 font-medium">Fully engineered</td>
                    </tr>
                    <tr>
                      <td className="p-3">Fabrication Control</td>
                      <td className="p-3">Limited</td>
                      <td className="p-3">Moderate</td>
                      <td className="p-3 text-green-600 font-medium">Precise</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl mb-4">Architectural Comparison</h3>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                {/* CCM Architecture */}
                <div className="w-full md:w-1/3 text-center">
                  <div className="h-[150px] bg-[#ffecb3] border border-[#ffd54f] rounded-lg flex flex-col justify-between p-3">
                    <div className="font-bold text-[#bf360c]">CCM</div>
                    <div className="flex flex-wrap justify-center">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-[#0288d1] rounded-full m-0.5"></div>
                      ))}
                    </div>
                    <div className="border-t-2 border-dashed border-[#d32f2f] pt-1 text-[#d32f2f] text-xs">Interface Resistance</div>
                  </div>
                  <div className="mt-2 text-sm">Random Ir Distribution</div>
                </div>
                
                {/* PTE Architecture */}
                <div className="w-full md:w-1/3 text-center">
                  <div className="h-[150px] bg-[#e6ee9c] border border-[#c0ca33] rounded-lg flex flex-col justify-between p-3">
                    <div className="font-bold text-[#827717]">PTE</div>
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
                    <div className="border-t-2 border-dashed border-[#fb8c00] pt-1 text-[#fb8c00] text-xs">Partial Integration</div>
                  </div>
                  <div className="mt-2 text-sm">Layered Structure</div>
                </div>
                
                {/* Our Architecture */}
                <div className="w-full md:w-1/3 text-center">
                  <div className="h-[150px] bg-[#a5d6a7] border border-[#4caf50] rounded-lg flex flex-col justify-between p-3">
                    <div className="font-bold text-[#2e7d32]">Our Approach</div>
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
                    <div className="border-t-2 border-[#4caf50] pt-1 text-[#2e7d32] text-xs">Monolithic Integration</div>
                  </div>
                  <div className="mt-2 text-sm">3D Engineered Structure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoveltyInnovationSection;
