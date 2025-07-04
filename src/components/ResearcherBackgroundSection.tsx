import { Settings2, Computer, BarChart2, Users } from 'lucide-react';

const ResearcherBackgroundSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e4e8ed] p-8 md:p-16 text-gray-800">
      {/* Accent bar */}
      <div className="absolute w-3 md:h-4/5 bg-gradient-to-b from-[#0072c6] to-[#00a2ff] left-0 top-[10%] rounded-r-md"></div>
      <div className="relative z-10 ml-4 md:ml-8">
        <h1 className="font-bold text-3xl md:text-4xl mb-8 text-[#0072c6]">Researcher Background</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Block 1: Electrochemical Modeling of Multiphysics Systems */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Computer className="w-5 h-5 text-blue-500" /> Electrochemical Modeling of Multiphysics Systems
            </h3>
            <ul className="list-disc pl-5 text-gray-700 mb-2 space-y-1">
              <li>Simulated electrochemical interfaces with coupled ionic/electronic transport, gas evolution, and interfacial dynamics</li>
              <li>Developed finite element models for local pH, ion distribution, and reaction kinetics under transient conditions <a href="https://doi.org/10.1021/acs.jpcc.4c07068" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 ml-1" title="View publication: J. Phys. Chem. C 2024">[ref]</a>, <a href="https://pubs.acs.org/doi/10.1021/acs.analchem.0c03026" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 ml-1" title="View publication: Analytical Chemistry 2020">[ref]</a></li>
              <li>Demonstrated ability to capture structure–function relationships in porous electrodes, including phase connectivity, overpotential gradients, and triple-phase boundary dynamics</li>
            </ul>
            <div className="mt-2 flex items-center gap-2">
              <img
                src="/assets/microstructure_nrel.gif"
                alt="3D Microstructure from NREL Internship"
                className="rounded-md shadow-md w-40 min-w-[120px]"
              />
              <p className="text-xs text-gray-500">Figure: Example of 3D digital microstructure generated during internship at NREL.</p>
            </div>
            <div className="mt-2 text-green-700 text-xs flex items-center gap-1">
              <span className="font-bold">Relevance:</span> Enables physically grounded simulations of local pH effects, HER competition, and transport barriers in CO₂RR catalyst layers
            </div>
          </div>

          {/* Block 2: Experimental Characterization of Electrochemical Systems */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-blue-500" /> Experimental Characterization of Electrochemical Systems
            </h3>
            <ul className="list-disc pl-5 text-gray-700 mb-2 space-y-1">
              <li>Hands-on experience in electrode synthesis, including electrochemical deposition and microwave-assisted methods</li>
              <li>Proficient in techniques for electrode characterization (EIS, LSV, CV, SEM) <a href="https://doi.org/10.1021/acs.analchem.0c03026" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 ml-1" title="View publication: Analytical Chemistry 2020">[ref]</a></li>
              <li>Investigated bubble-induced convection, mass transport limitations, and gas product management in water-splitting systems <a href="https://doi.org/10.1016/j.cej.2024.152943" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 ml-1" title="View publication: Chemical Engineering Journal 2024">[ref]</a></li>
            </ul>
            <div className="mt-2 text-green-700 text-xs flex items-center gap-1">
              <span className="font-bold">Relevance:</span> Brings essential perspective on how structure impacts performance in real CO₂RR cells and how to validate digital predictions experimentally
            </div>
          </div>

          {/* Block 3 & 4: Two columns for pH expertise and collaborations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:col-span-2">
            {/* Block 3: Expertise in Local pH and Reactive Microenvironments */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-blue-500" /> Expertise in Local pH and Reactive Microenvironments
              </h3>
              <ul className="list-disc pl-5 text-gray-700 mb-2 space-y-1">
                <li>Authored key works on local pH evolution at electrochemical interfaces <a href="https://doi.org/10.1016/j.ijhydene.2021.02.195" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 ml-1" title="View publication: International Journal of Hydrogen Energy 2021">[ref]</a>, including pulsed-regime and <span className="whitespace-nowrap">design-proposal <a href="https://doi.org/10.1016/j.ijhydene.2025.01.241" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800" title="View publication: International Journal of Hydrogen Energy 2025">[ref]</a></span></li>
                <li>Developed models to quantify pH gradients and their effect on Faradaic efficiency and catalyst selectivity</li>
                <li>Demonstrated how pH control at the microscale can tune reaction pathways <a href="https://doi.org/10.1002/celc.202000910" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 ml-1" title="View publication: ChemElectroChem 2020">[ref]</a> — a critical challenge in CO₂RR</li>
                <li>Developed simulation methods to assess the impact of multiphase flow in electrochemical devices, with applications to gas-evolving electrodes and bubble dynamics <a href="https://doi.org/10.1016/j.jece.2022.107577" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 ml-1" title="View publication: Journal of Environmental Chemical Engineering 2022">[ref]</a>, <a href="https://www.sciencedirect.com/science/article/pii/S1385894721047689?via%3Dihub" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 ml-1" title="View publication: Chemical Engineering Journal 2022">[ref]</a></li>
              </ul>
              <div className="mt-2 text-green-700 text-xs flex items-center gap-1">
                <span className="font-bold">Relevance:</span> Unique strength for tackling selectivity and HER suppression challenges in gas-fed CO₂RR systems
              </div>
            </div>
            {/* Block 4: Successful Collaborations */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" /> Successful Collaborations
              </h3>
              <ul className="list-disc pl-5 text-gray-700 mb-2 space-y-1">
                <li><span className="font-bold">NREL Internship:</span> Developed a 3D catalyst layer digital generator adopted for ongoing in-house research to enhance catalyst design.</li>
                <li><span className="font-bold">Nel Hydrogen:</span> Sponsored microstructural optimization strategy for electrolyzer design.</li>
                <li><span className="font-bold">Academic Projects:</span> Led joint publications bridging modeling and experimental validation across institutions, including <span className="font-semibold">simulation of colloidal particles for stability predictions</span> and <span className="font-semibold">simulation of electrochemistry in a spectroelectrochemical cell</span>.</li>
              </ul>
              <div className="mt-3 flex flex-col items-center">
                <div className="flex flex-row gap-4">
                  <a
                    href="https://doi.org/10.1021/acs.langmuir.1c02056"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    title="View publication: Langmuir 2021, 37, 45, 13413–13425"
                  >
                    <img
                      src="/langd5.2021.37.issue-45.largecover.jpg"
                      alt="Langmuir 2021 Cover: Simulation of Colloidal Particles"
                      className="rounded-md shadow-md w-32 h-40 object-cover border-2 border-blue-200 group-hover:border-blue-500 transition duration-200"
                    />
                    <span className="block mt-1 text-xs text-blue-600 underline group-hover:text-blue-800">Langmuir 2021</span>
                  </a>
                  <a
                    href="https://doi.org/10.1002/celc.202000910"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    title="View publication: ChemElectroChem 2020, 7, 18, 3742–3752"
                  >
                    <img
                      src="/celc202001242-toc-0001-m.jpg"
                      alt="ChemElectroChem 2020 Cover: Simulation in Spectroelectrochemical Cell"
                      className="rounded-md shadow-md w-32 h-40 object-cover border-2 border-blue-200 group-hover:border-blue-500 transition duration-200"
                    />
                    <span className="block mt-1 text-xs text-blue-600 underline group-hover:text-blue-800">ChemElectroChem 2020</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearcherBackgroundSection;
