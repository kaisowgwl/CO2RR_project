
import { Layers, Check, Zap, Atom, Droplet, Info } from 'lucide-react';
import imageMethod from '../../image_method.png';


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
                <h3 className="font-semibold text-xl">Architected CO₂RR Catalyst Layer</h3>
              </div>
              <p className="mb-3">
                Our approach enables precise microstructural control to enhance triple-phase boundary (TPB) exposure, reduce local pH gradients, and maximize catalytic selectivity using a feedback-driven design loop:
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
                    <span className="font-bold">Machine learning optimization</span> uses simulation feedback to guide the design of 3D microarchitectures for maximum noble metal utilization and selectivity.
                  </span>
                </li>
                <li className="flex items-start group relative">
                  <Check className="text-green-500 mt-1 mr-2 w-4 h-4" />
                  <span>
                    Printing conductive titanium microstructures directly onto the current collector, based on optimized digital designs.
                    <Info className="inline w-4 h-4 text-blue-400 cursor-pointer align-text-bottom ml-1" />
                  </span>
                  <div className="absolute left-6 top-0 z-20 hidden group-hover:block bg-white border border-gray-300 rounded shadow-lg p-4 w-[360px] text-xs text-gray-700">
                    <div className="font-semibold mb-1">State-of-the-art references (CO₂RR):</div>
                    <ul className="list-disc pl-4 mb-2 text-xs text-gray-700">
                      <li>
                        <span className="font-bold">Ag/Cu loading:</span> 0.2–1.0 mg/cm²
                        (<a href="https://doi.org/10.1021/acs.jpclett.4c02869" target="_blank" className="text-blue-600 underline">J. Phys. Chem. Lett. 2024</a>)
                      </li>
                      <li>
                        <span className="font-bold">Faradaic efficiency (CO):</span> 85–95%
                        (<a href="https://doi.org/10.1021/acsenergylett.2c01555" target="_blank" className="text-blue-600 underline">ACS Energy Lett.</a>)
                      </li>
                      <li>
                        <span className="font-bold">Partial current density:</span> 100–300 mA/cm²
                        (<a href="https://pubs.rsc.org/en/content/articlehtml/2023/sc/d3sc04353c" target="_blank" className="text-blue-600 underline">RSC Sustainability 2023</a>)
                      </li>
                      <li>
                        <span className="font-bold">Layer thickness:</span> 1–3 μm
                        (<a href="https://doi.org/10.1016/S1872-2067(20)63754-8" target="_blank" className="text-blue-600 underline">Chinese Journal of Catalysis 2021</a>)
                      </li>
                      <li className="mt-2 text-blue-700 font-semibold">Your Proposed Impact:</li>
                      <li>↓ 50% Ag loading while maintaining 95%+ selectivity</li>
                      <li>Optimized porosity and local pH via 3D-engineered catalyst supports</li>
                      <li>Improved durability by minimizing carbonate accumulation and flooding</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2 w-4 h-4" />
                  <span>
                    <span className="font-bold">Growing CO₂RR-active nanostructures in-situ on the scaffold and integrating ionomer</span> via spray coating or infiltration, forming ultra-thin, conductive, and CO₂-accessible layers.
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-xl mb-4 flex items-center">
                Expected Impact
                <span className="ml-2 relative group">
                  <Info className="w-5 h-5 text-blue-500 cursor-pointer" />
                  <div className="absolute left-6 top-0 z-20 hidden group-hover:block bg-white border border-gray-300 rounded shadow-lg p-4 w-[360px] text-xs text-gray-700">
                    <div className="font-semibold mb-1">State-of-the-art references (CO₂RR):</div>
                    <ul className="list-disc pl-4 mb-2 text-xs text-gray-700">
                      <li>
                        <span className="font-bold">Ag/Cu loading:</span> 0.2–1.0 mg/cm²
                        (<a href="https://doi.org/10.1021/acs.jpclett.4c02869" target="_blank" className="text-blue-600 underline">J. Phys. Chem. Lett. 2024</a>)
                      </li>
                      <li>
                        <span className="font-bold">Faradaic efficiency (CO):</span> 85–95%
                        (<a href="https://doi.org/10.1021/acsenergylett.2c01555" target="_blank" className="text-blue-600 underline">ACS Energy Lett.</a>)
                      </li>
                      <li>
                        <span className="font-bold">Partial current density:</span> 100–300 mA/cm²
                        (<a href="https://pubs.rsc.org/en/content/articlehtml/2023/sc/d3sc04353c" target="_blank" className="text-blue-600 underline">RSC Sustainability 2023</a>)
                      </li>
                      <li>
                        <span className="font-bold">Layer thickness:</span> 1–3 μm
                        (<a href="https://doi.org/10.1016/S1872-2067(20)63754-8" target="_blank" className="text-blue-600 underline">Chinese Journal of Catalysis 2021</a>)
                      </li>
                      <li className="mt-2 text-blue-700 font-semibold">Your Proposed Impact:</li>
                      <li>↓ 50% Ag loading while maintaining 95%+ selectivity</li>
                      <li>Optimized porosity and local pH via 3D-engineered catalyst supports</li>
                      <li>Improved durability by minimizing carbonate accumulation and flooding</li>
                    </ul>
                  </div>
                </span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-blue-600">↓50%</span>
                    <p className="text-sm mt-1">Noble metal usage</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-blue-600">&gt;95%</span>
                    <p className="text-sm mt-1">CO selectivity at high rate</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-blue-600">300+</span>
                    <p className="text-sm mt-1">mA/cm² at 0.5 mg/cm² Ag</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-blue-600">&lt;2</span>
                    <p className="text-sm mt-1">μm engineered layer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex justify-center items-center">
              <img
                src={imageMethod}
                alt="Schematic of digitally architected CO₂RR catalyst layer methodology"
                className="max-w-full max-h-[300px] object-contain"
                style={{ display: 'block', margin: '0 auto' }}
              />
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
                    <p className="text-sm text-gray-600">Reduce contact resistance between gas diffusion layer and catalyst</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Atom className="text-green-600 w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">Maximized Catalyst Utilization</p>
                    <p className="text-sm text-gray-600">Maximizes exposure of active sites at gas–electrolyte–solid interface</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Droplet className="text-green-600 w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">Optimized Mass Transport</p>
                    <p className="text-sm text-gray-600">Porosity tailored for CO₂ and product transport with minimal flooding</p>
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
