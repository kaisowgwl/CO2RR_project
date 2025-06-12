import { Gem, Droplet, Brain, DollarSign, Factory, Recycle, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const AlignmentMissionSection = () => {
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
          type: 'bar',
          data: {
            labels: ['Capital Cost', 'Efficiency', 'Durability', 'PGM Loading'],
            datasets: [
              {
                label: 'Current Status',
                data: [40, 65, 60, 30],
                backgroundColor: 'rgba(255, 99, 132, 0.7)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
              },
              {
                label: 'Project Contribution',
                data: [65, 80, 75, 85],
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
              },
              {
                label: 'DOE 2025 Target',
                data: [80, 90, 85, 90],
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
                title: {
                  display: true,
                  text: 'Progress Toward Target (%)'
                }
              }
            },
            plugins: {
              legend: {
                position: 'bottom'
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
        <h1 className="font-bold text-3xl md:text-4xl mb-8 text-[#0072c6]">Alignment with NREL/DOE Mission</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div>
            <h3 className="font-semibold text-xl mb-6">Transformative Impact for DOE & Beyond</h3>
            <ul className="space-y-6">
              <li className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-2">
                  <Gem className="text-blue-600 w-6 h-6 mr-3" />
                  <h4 className="font-semibold text-lg">Revolutionizing Electrochemical Manufacturing</h4>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Universal Method</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Scalable to Any Device</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">AI-Driven Materials Design</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">High-End Architected Materials</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Efficiency & Material Savings</span>
                </div>
              </li>
              <li className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-2">
                  <Droplet className="text-blue-600 w-6 h-6 mr-3" />
                  <h4 className="font-semibold text-lg">Enabling Clean & Efficient Energy—Across All Sources</h4>
                </div>
                <ul className="list-disc pl-8 text-gray-700 mt-2">
                  <li>Maximizes efficiency and reduces critical material use in <span className="font-bold">any electrochemical device</span></li>
                  <li>Supports DOE's mission for <span className="font-bold">cost-effective, scalable, and secure energy technologies</span></li>
                  <li>Applicable to many energy sectors</li>
                </ul>
              </li>
              <li className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-2">
                  <Brain className="text-blue-600 w-6 h-6 mr-3" />
                  <h4 className="font-semibold text-lg">AI-Driven Digital Manufacturing</h4>
                </div>
                <ul className="list-disc pl-8 text-gray-700 mt-2">
                  <li>Integrates machine learning, digital twins, and advanced manufacturing</li>
                  <li>Enables <span className="font-bold">rapid, data-driven device optimization</span></li>
                  <li>Blueprint for U.S. leadership in next-generation electrochemical industries</li>
                </ul>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-6">Supporting DOE Strategic Goals</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <li className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                <div className="flex items-center mb-2">
                  <DollarSign className="text-green-600 mr-2 w-5 h-5" />
                  <h4 className="font-semibold">Cost Reduction</h4>
                </div>
                <ul className="list-disc pl-8 text-gray-700 mt-1">
                  <li>Supports $2/kg H₂ and lowest-cost device targets for all energy sources</li>
                </ul>
              </li>
              <li className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                <div className="flex items-center mb-2">
                  <Factory className="text-green-600 mr-2 w-5 h-5" />
                  <h4 className="font-semibold">Scalability</h4>
                </div>
                <ul className="list-disc pl-8 text-gray-700 mt-1">
                  <li>Enables GW-scale deployment</li>
                  <li>Rapid tech transfer to industry</li>
                </ul>
              </li>
              <li className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                <div className="flex items-center mb-2">
                  <Recycle className="text-green-600 mr-2 w-5 h-5" />
                  <h4 className="font-semibold">Sustainability</h4>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Critical Material Reduction</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Circular Manufacturing</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Supply Chain Security</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Unique Digital-Physical Integration</span>
                </div>
              </li>
              <li className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                <div className="flex items-center mb-2">
                  <Zap className="text-green-600 mr-2 w-5 h-5" />
                  <h4 className="font-semibold">Next-Generation Energy Efficiency</h4>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">AI-Architected Devices</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Real-Time Optimization</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Breakthrough Efficiency</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">U.S. Leadership</span>
                </div>
              </li>
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-lg mb-3">Impact on DOE Hydrogen & Industrial Targets</h4>
              <div className="h-[180px]">
                <canvas ref={chartRef}></canvas>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                *Approach is applicable to batteries, fuel cells, CO<sub>2</sub> reduction, methane reforming, and more.
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#0072c6] to-[#00a2ff] p-6 rounded-lg text-center text-white">
              <h3 className="font-bold text-2xl mb-2">Thank You</h3>
              <p>
                This platform is a <span className="font-bold">blueprint for U.S. leadership</span> in efficient, secure, and sustainable electrochemical manufacturing—across all energy sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlignmentMissionSection;
