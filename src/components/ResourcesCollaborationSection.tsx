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
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-blue-100 mr-4">
                    <Printer className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Additive Manufacturing</h4>
                    <p className="text-gray-600">Metal 3D printing capabilities</p>
                  </div>
                </div>
                <p className="pl-4 border-l-4 border-blue-200">Access to metal 3D printing facilities either in-house or via ORNL/partners for titanium microstructure fabrication</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-blue-100 mr-4">
                    <Beaker className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Electrochemical Lab</h4>
                    <p className="text-gray-600">Deposition and characterization</p>
                  </div>
                </div>
                <p className="pl-4 border-l-4 border-blue-200">Electrochemical lab facilities for Ir deposition and comprehensive characterization (SEM, EIS, CV)</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-blue-100 mr-4">
                    <Server className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Computing Resources</h4>
                    <p className="text-gray-600">Simulation and ML training</p>
                  </div>
                </div>
                <p className="pl-4 border-l-4 border-blue-200">
                  Access to machine learning and simulation clusters for digital twin development and optimization.<br />
                  <span className="font-bold text-blue-700">Best scenario:</span> NREL HPC access with COMSOL Multiphysics licenses for large-scale, high-fidelity simulations to achieve optimal catalyst structures.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-6">Collaboration Network</h3>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
              <h4 className="font-semibold text-lg mb-3">NREL Mentorship</h4>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <UserRound className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <p className="mb-2">Primary mentor collaboration with Dr. Jacob Wrubel and guidance from NREL's hydrogen and catalyst teams</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Technical Guidance</span>
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Project Oversight</span>
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Career Development</span>
                  </div>
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
                <h4 className="font-semibold mb-2">H2@Scale</h4>
                <p className="text-sm">Integration with broader hydrogen initiatives</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Resource Allocation Strategy</h4>
              <div className="h-[200px]">
                <canvas ref={chartRef}></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesCollaborationSection;
