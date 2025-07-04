import { Printer, Beaker, Server, UserRound } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const ResourcesCollaborationSection = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Digital Twin & ML Development', 'Materials & Fabrication', 'Electrochemical Testing', 'Characterization', 'Publications & IP'],
            datasets: [{
              data: [30, 35, 20, 10, 5],
              backgroundColor: [
                'rgba(54, 162, 235, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(255, 99, 132, 0.7)'
              ],
              borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'right',
                labels: {
                  boxWidth: 15,
                  padding: 15
                }
              },
              title: {
                display: true,
                text: 'Proposed Resource Allocation (%)'
              }
            }
          }
        });
      }
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e4e8ed] p-8 md:p-16 text-gray-800">
      {/* Accent bar */}
      <div className="absolute w-3 md:h-4/5 bg-gradient-to-b from-[#0072c6] to-[#00a2ff] left-0 top-[10%] rounded-r-md"></div>
      
      <div className="relative z-10 ml-4 md:ml-8">
        <h1 className="font-bold text-3xl md:text-4xl mb-8 text-[#0072c6]">Resources & Collaboration</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div>
            <h3 className="font-semibold text-xl mb-6">Required Resources</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 mr-3">
                    <Printer className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base">Additive Manufacturing</h4>
                    <p className="text-gray-600 text-xs">Metal 3D printing capabilities</p>
                  </div>
                </div>
                <p className="pl-3 border-l-4 border-blue-200 text-xs">Access to metal 3D printing facilities either in-house or via ORNL/partners for titanium microstructure fabrication</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 mr-3">
                    <Beaker className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base">Electrochemical Lab</h4>
                    <p className="text-gray-600 text-xs">Deposition and characterization</p>
                  </div>
                </div>
                <p className="pl-3 border-l-4 border-blue-200 text-xs">
                  <a href="https://www.nrel.gov/esif" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900 font-semibold">ESIF</a> electrochemical lab facilities for Ir deposition and comprehensive characterization (SEM, EIS, CV)
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-start sm:col-span-2">
                <div className="flex items-center mb-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 mr-3">
                    <Server className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base">Computing Resources</h4>
                    <p className="text-gray-600 text-xs">Simulation and ML training</p>
                  </div>
                </div>
                <p className="pl-3 border-l-4 border-blue-200 text-xs">
                  <a href="https://www.nrel.gov/hpc" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900 font-semibold">NREL HPC</a> resources for digital twin development, machine learning, and high-fidelity simulation.<br />
                  <span className="font-bold text-blue-700">Best scenario:</span> Access with COMSOL Multiphysics licenses for large-scale, high-fidelity simulations to achieve optimal catalyst structures.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-4">
              <h4 className="font-semibold text-lg mb-4">Resource Allocation Strategy</h4>
              <div className="h-[200px]">
                <canvas ref={chartRef}></canvas>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-6">Collaboration Network</h3>
            




            {/* Jacob Wrubel - Main Mentor */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-4 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
              <h4 className="font-semibold text-lg mb-3">Main Mentor</h4>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <UserRound className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <a href="https://research-hub.nrel.gov/en/persons/jacob-wrubel" target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold hover:bg-blue-100">Dr. Jacob Wrubel</a>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Electrocatalysis</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">CO₂ Electrolysis</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Simulation</span>
                  </div>
                  <p className="text-gray-700 text-xs mb-1">
                    NREL scientist, main mentor, and co-mentor during my 1-year PhD internship. Expert in electrocatalysis, CO₂ electrolysis, and simulation for clean energy.
                  </p>
                </div>
              </div>
            </div>

            {/* Guido Bender & François Usseglio-Viretta - Project Collaboration (Combined) */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
              <h4 className="font-semibold text-lg mb-3">Project Collaboration</h4>
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <UserRound className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <a href="https://research-hub.nrel.gov/en/persons/guido-bender" target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold hover:bg-blue-100">Dr. Guido Bender</a>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Electrochemical Engineering</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Cell Performance</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Device Scale-Up</span>
                  </div>
                  <p className="text-gray-700 text-xs mb-2">
                    NREL scientist and mentor during my 1-year PhD internship. Focus on electrochemical engineering, system modeling, and scale-up.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <UserRound className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <a href="https://research-hub.nrel.gov/en/persons/francois-usseglio-viretta" target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold hover:bg-blue-100">Dr. François Usseglio-Viretta</a>
                    <a href="https://www.nrel.gov/transportation/matbox" target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold hover:bg-blue-100">MATBOX</a>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Digital Materials</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Micro-Architecture</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Integrated Pipelines</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Digital Twin Modeling</span>
                  </div>
                  <p className="text-gray-700 text-xs mb-1">Intern researcher, developer of MATBOX at NREL. Expert in creating digital materials, micro-architectures, and integrated computational pipelines for advanced digital twin modeling.</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                <h4 className="font-semibold mb-2">ORNL</h4>
                <p className="text-sm">Collaboration on advanced manufacturing capabilities</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                <h4 className="font-semibold mb-2">University Partners</h4>
                <p className="text-sm">Academic expertise in electrochemistry and materials</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                <h4 className="font-semibold mb-2">Industry Advisors</h4>
                <p className="text-sm">Practical insights on scale-up and commercialization</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                <h4 className="font-semibold mb-2">CO₂@Scale</h4>
                <p className="text-sm">Integration with broader CO₂ initiatives</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesCollaborationSection;
