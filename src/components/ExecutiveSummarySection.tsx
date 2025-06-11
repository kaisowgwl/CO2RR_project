import { Brain, Printer, GitBranch, Beaker, Settings2, Cpu } from 'lucide-react';

const ExecutiveSummarySection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e4e8ed] p-8 md:p-16 text-gray-800">
      {/* Accent bar */}
      <div className="absolute w-3 md:h-4/5 bg-gradient-to-b from-[#0072c6] to-[#00a2ff] left-0 top-[10%] rounded-r-md"></div>

      <div className="relative z-10 ml-4 md:ml-8">
        <h1 className="font-bold text-3xl md:text-4xl mb-8 text-[#0072c6]">Executive Summary</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Project Vision</h2>
            <p className="mb-4">This project aims to revolutionize PEM electrolyzer catalyst layers by developing a novel monolithic titanium-iridium architecture that reduces iridium loading by 90% while maintaining or exceeding current performance standards.</p>

            <h3 className="text-lg font-medium mb-2">Core Strategy</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 mr-3 flex-shrink-0">
                  <Brain className="text-blue-600 w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">Stochastic Digital Twin Generation</p>
                  <p className="text-sm text-gray-600">Microstructure generation using validated physical models</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 mr-3 flex-shrink-0">
                  <Cpu className="text-blue-600 w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">Performance Prediction</p>
                  <p className="text-sm text-gray-600">Simulated electrochemical performance based on architecture</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 mr-3 flex-shrink-0">
                  <Settings2 className="text-blue-600 w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">AI-Driven Optimization</p>
                  <p className="text-sm text-gray-600">Iterative design loop: modify, simulate, and compare structures</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 mr-3 flex-shrink-0">
                  <Printer className="text-blue-600 w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">3D Fabrication</p>
                  <p className="text-sm text-gray-600">Additive manufacturing of optimized Ti structures</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 mr-3 flex-shrink-0">
                  <Beaker className="text-blue-600 w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">Electrochemical Deposition</p>
                  <p className="text-sm text-gray-600">Controlled growth of Ir layer</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 mr-3 flex-shrink-0">
                  <GitBranch className="text-blue-600 w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">Integrated Approach</p>
                  <p className="text-sm text-gray-600">Seamless interfaces for optimal performance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Researcher Background</h2>
              <p>Experienced materials scientist with expertise in electrochemistry, additive manufacturing, and computational modeling. Previous work includes development of digital catalyst layer microstructures for electrolyzers.</p>
              <div className="mt-4">
                <img
                  src="/assets/microstructure_nrel.gif"
                  alt="3D Microstructure from NREL Internship"
                  className="rounded-md shadow-md w-full"
                />
                <p className="text-sm text-gray-500 mt-2">Figure: Example of 3D digital microstructure generated during internship at NREL.</p>
                <div className="flex mt-3 space-x-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-gray-700 mr-2"></div>
                    <span className="text-gray-700">Catalyst</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-yellow-400 mr-2"></div>
                    <span className="text-yellow-600">Ionomer</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-lg mb-3">Key Innovation</h3>
              <p className="mb-2">Unlike conventional approaches that focus on catalyst composition, this project takes an <span className="font-bold">architectural approach</span> that:</p>
              <ul className="space-y-2 pl-5">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Eliminates interfacial resistances</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Maximizes catalyst utilization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Enables precise control of porosity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Creates continuous electronic pathways</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummarySection;
