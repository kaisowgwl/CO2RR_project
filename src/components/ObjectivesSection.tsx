const ObjectivesSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e4e8ed] p-8 md:p-16 text-gray-800">
      {/* Accent bar */}
      <div className="absolute w-3 md:h-4/5 bg-gradient-to-b from-[#0072c6] to-[#00a2ff] left-0 top-[10%] rounded-r-md"></div>
      
      <div className="relative z-10 ml-4 md:ml-8">
        <h1 className="font-bold text-3xl md:text-4xl mb-8 text-[#0072c6]">Project Objectives</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg opacity-60">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-green-500 text-white font-bold mr-4">1</div>
              <h3 className="font-semibold text-xl line-through">Digital Twin Development & Validation</h3>
            </div>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Established workflow at NREL for digital twin generation of catalyst layers using stochastic methods</li>
              <li>Simulation pipeline validated against real conductivity data from commercial electrodes</li>
              <li>Ensured quantitative accuracy for charge and mass transport predictions</li>
            </ul>
          </div>
          {/* 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg opacity-60">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-green-500 text-white font-bold mr-4">2</div>
              <h3 className="font-semibold text-xl line-through">Deep Learning-Based Structure Generation</h3>
            </div>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Developed deep learning method for realistic 3D catalyst layer stack generation</li>
              <li>Trained on reference microstructures to enable diverse, physically plausible digital twins</li>
            </ul>
          </div>
          {/* 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0072c6] text-white font-bold mr-4">3</div>
              <h3 className="font-semibold text-xl">AI-Driven Optimization with Operations Toolbox</h3>
            </div>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Implement AI optimization pipeline using simulation feedback to evolve microstructures</li>
              <li>Equip pipeline with "operations toolbox" (dilation, erosion, merging, splitting, connectivity tuning)</li>
              <li>Efficiently explore design space and maximize performance metrics</li>
            </ul>
          </div>
          {/* 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0072c6] text-white font-bold mr-4">4</div>
              <h3 className="font-semibold text-xl">Ti Scaffold Fabrication & Scaling</h3>
            </div>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Fabricate 3D-printed Ti scaffolds integrated with the current collector</li>
              <li>Utilize additive manufacturing with feature resolution down to ~20–50 μm</li>
              <li>Target scalable electrode areas up to several cm² (potential for wafer-scale production)</li>
            </ul>
          </div>
          {/* 5 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0072c6] text-white font-bold mr-4">5</div>
              <h3 className="font-semibold text-xl">Ir Nanostructure & Ionomer Integration</h3>
            </div>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Deposit Ir/IrOx nanostructures onto Ti using electrodeposition or ALD</li>
              <li>Apply ionomer layers via spray coating or vacuum-assisted infiltration</li>
              <li>Optimize for proton transport and catalyst accessibility</li>
            </ul>
          </div>
          {/* 6 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0072c6] text-white font-bold mr-4">6</div>
              <h3 className="font-semibold text-xl">Performance Evaluation</h3>
            </div>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Evaluate electrochemical performance, ECSA, and contact resistance</li>
              <li>Assess degradation mechanisms and durability of optimized catalyst layers</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 bg-blue-50 p-6 rounded-lg">
          <h3 className="font-semibold text-xl mb-4">Success Criteria</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
              <p>Reduction in Ir loading vs. conventional systems</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1.5 A/cm²</div>
              <p>Current density at &lt;1.8V under standard conditions</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">&lt;3 μm</div>
              <p>Catalyst layer thickness with hierarchical porosity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectivesSection;
