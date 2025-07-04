const ObjectivesSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e4e8ed] p-8 md:p-16 text-gray-800">
      {/* Accent bar */}
      <div className="absolute w-3 md:h-4/5 bg-gradient-to-b from-[#0072c6] to-[#00a2ff] left-0 top-[10%] rounded-r-md"></div>

      <div className="relative z-10 ml-4 md:ml-8">
        <h1 className="font-bold text-3xl md:text-4xl mb-8 text-[#0072c6]">Project Objectives</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0072c6] text-white font-bold mr-4">1</div>
              <h3 className="font-semibold text-xl">Digital Twin Development for CO₂RR</h3>
            </div>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Extend NREL’s catalyst layer digital twin workflow to model CO₂ reduction microstructures</li>
              <li>Include multiphase behavior, gas diffusion, ionomer coverage, and local pH prediction</li>
              <li>Validate model with reference Ag/C and Cu/C catalyst layer performance data</li>
            </ul>
          </div>
          {/* 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0072c6] text-white font-bold mr-4">2</div>
              <h3 className="font-semibold text-xl">GAN-Based Microstructure Generator</h3>
            </div>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Train generative neural networks on segmented catalyst layers for CO₂RR</li>
              <li>Enable fast production of diverse digital twins with realistic morphology</li>
              <li>Capture nanoscale gradients and interface complexity</li>
            </ul>
          </div>
          {/* 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0072c6] text-white font-bold mr-4">3</div>
              <h3 className="font-semibold text-xl">AI-Driven Optimization of Electrode Architecture</h3>
            </div>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Use simulation feedback to guide morphology toward target properties (selectivity, j<sub>CO</sub>, ECSA)</li>
              <li>Apply operations toolbox: dilation, erosion, ionomer redistribution, pore smoothing</li>
              <li>Maximize CO₂ access, product removal, and catalyst site utilization</li>
            </ul>
          </div>
          {/* 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0072c6] text-white font-bold mr-4">4</div>
              <h3 className="font-semibold text-xl">Fabrication of Optimized Gas Diffusion Electrodes</h3>
            </div>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Translate optimized structures into printable ink or lamination format</li>
              <li>Demonstrate scalable GDE fabrication for Ag and Cu catalysts</li>
              <li>Retain designed porosity and layer thickness in real systems</li>
            </ul>
          </div>
          {/* 5 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0072c6] text-white font-bold mr-4">5</div>
              <h3 className="font-semibold text-xl">Localized Ionomer and Catalyst Engineering</h3>
            </div>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Use micro-patterned or sprayed ionomer for optimal proton conduction and CO₂ access</li>
              <li>Tune ionomer-to-carbon ratios based on AI design guidance</li>
              <li>Enable thin, efficient catalyst-ionomer interface with enhanced stability</li>
            </ul>
          </div>
          {/* 6 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0072c6] text-white font-bold mr-4">6</div>
              <h3 className="font-semibold text-xl">Performance & Durability Testing</h3>
            </div>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Measure selectivity, partial current density, and overpotential</li>
              <li>Assess stability under extended CO₂ electrolysis conditions (&gt;100 h)</li>
              <li>Benchmark against existing CO₂RR electrodes</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 bg-blue-50 p-6 rounded-lg">
          <h3 className="font-semibold text-xl mb-4">Success Criteria</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">↓50%</div>
              <p>Ag or Cu usage vs. benchmark CO₂RR systems</p>
            </div>

            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">300+ mA/cm²</div>
              <p>Partial current for CO (at &gt;90% selectivity)</p>
            </div>

            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">&lt;2 μm</div>
              <p>Layer thickness with optimal ionomer coverage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectivesSection;
