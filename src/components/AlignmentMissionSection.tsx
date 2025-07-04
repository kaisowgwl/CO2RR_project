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
    <div className="relative min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e4e8ed] p-6 md:p-12 text-gray-800 overflow-x-hidden">
      {/* Accent bar */}
      <div className="absolute w-3 md:h-4/5 bg-gradient-to-b from-[#0072c6] to-[#00a2ff] left-0 top-[8%] rounded-r-md"></div>
      <div className="relative z-10 ml-4 md:ml-10">
        <h1 className="font-bold text-3xl md:text-4xl mb-8 text-[#0072c6]">Alignment with NREL/DOE Mission</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
          <div>
            <h3 className="font-semibold text-xl mb-6">Transformative Impact for DOE & Beyond</h3>
            <ul className="space-y-6">
              <li className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-2">
                  <Gem className="text-blue-600 w-6 h-6 mr-3" />
                  <h4 className="font-semibold text-lg">Universal Platform for Microstructure-Driven Technologies</h4>
                </div>
                <div className="mt-2">
                  <ul className="list-disc pl-8 text-gray-700">
                    <li>Methodology is adaptable beyond electrochemistry: Applies to any technology where microstructure is critical</li>
                    <li>Relevant for heterogeneous catalysis, batteries, pyrolysis, critical minerals, and ammonia (production & recovery)</li>
                    <li>Enables nanoscale control: e.g., nanofiltration membranes, tunable nanostructures for selectivity and high throughput</li>
                    <li>Platform for optimizing both performance and resource efficiency across strategic sectors</li>
                  </ul>
                </div>
              </li>
              <li className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-1">
                  <Droplet className="text-blue-600 w-5 h-5 mr-2" />
                  <h4 className="font-semibold text-base">Enabling Clean & Efficient Energy Across All Sources</h4>
                </div>
                <ul className="list-disc pl-6 text-gray-700 mt-1 text-xs">
                  <li>Maximizes CO₂ conversion efficiency and lowers energy intensity of electrochemical CO₂ utilization</li>
                  <li>Reduces critical metal demand and supports electrified chemical manufacturing</li>
                  <li>Applicable to e-fuels, chemicals, and long-duration carbon-negative storage</li>
                </ul>
              </li>
              <li className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-1">
                  <Brain className="text-blue-600 w-5 h-5 mr-2" />
                  <h4 className="font-semibold text-base">AI-Driven Digital Manufacturing</h4>
                </div>
                <ul className="list-disc pl-6 text-gray-700 mt-1 text-xs">
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
              <li className="bg-white rounded-lg shadow p-2 sm:p-3 transition-all duration-300 hover:translate-y-[-3px] hover:shadow-md">
                <div className="flex items-center mb-1">
                  <DollarSign className="text-green-600 mr-1 w-4 h-4" />
                  <h4 className="font-semibold text-base">Cost Reduction</h4>
                </div>
                <ul className="list-disc pl-6 text-gray-700 mt-1 text-xs">
                  <li>Supports <strong>$50/ton CO₂ conversion</strong> and <strong>$0.10–0.50/kWh electricity use</strong> targets for renewable fuels and carbon circularity</li>
                  <li>Reduces reliance on silver and gold, enabling low-cost, scalable CO₂-to-fuel devices</li>
                </ul>
              </li>
              <li className="bg-white rounded-lg shadow p-2 sm:p-3 transition-all duration-300 hover:translate-y-[-3px] hover:shadow-md">
                <div className="flex items-center mb-1">
                  <Factory className="text-green-600 mr-1 w-4 h-4" />
                  <h4 className="font-semibold text-base">Scalability</h4>
                </div>
                <ul className="list-disc pl-6 text-gray-700 mt-1 text-xs">
                  <li>Enables GW-scale deployment</li>
                  <li>Rapid tech transfer to industry</li>
                  <li>Designed for modular, distributed, and retrofit applications in existing chemical infrastructure</li>
                </ul>
              </li>
              <li className="bg-white rounded-lg shadow p-2 sm:p-3 transition-all duration-300 hover:translate-y-[-3px] hover:shadow-md">
                <div className="flex items-center mb-1">
                  <Recycle className="text-green-600 mr-1 w-4 h-4" />
                  <h4 className="font-semibold text-base">Sustainability</h4>
                </div>
                <div className="flex flex-wrap gap-1 mt-1">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-[10px]">Critical Material Reduction</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-[10px]">Circular Manufacturing</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-[10px]">Supply Chain Security</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-[10px]">Unique Digital-Physical Integration</span>
                </div>
              </li>
              <li className="bg-white rounded-lg shadow p-2 sm:p-3 transition-all duration-300 hover:translate-y-[-3px] hover:shadow-md">
                <div className="flex items-center mb-1">
                  <Zap className="text-green-600 w-5 h-5 mr-2" />
                  <h4 className="font-semibold text-base">Revolutionizing Electrochemical Manufacturing</h4>
                </div>
                <div className="flex flex-wrap gap-1 mt-1">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-[10px]">Universal Method</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-[10px]">Scalable to Any Device</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-[10px]">AI-Driven Materials Design</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-[10px]">High-End Architected Materials</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-[10px]">Efficiency & Material Savings</span>
                </div>
              </li>
            </ul>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-base mb-2">Impact on DOE & Industrial Targets</h4>
              <div className="h-[138px]">
                <canvas ref={chartRef}></canvas>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                *Approach directly addresses CO₂-to-chemical targets outlined in the DOE’s Industrial Decarbonization Roadmap<br />
                Enables integration with low-carbon electricity and DAC (Direct Air Capture) sources<br />
                Applies to production of CO, syngas, formate, or multicarbon fuels
              </div>
            </div>
          </div>
          {/* Thank You block across both columns at the bottom */}
          <div className="col-span-1 md:col-span-2 mt-8">
            <div className="bg-gradient-to-r from-[#0072c6] to-[#00a2ff] p-6 rounded-lg text-center text-white">
              <h3 className="font-bold text-2xl mb-2">Thank You</h3>
              <p>
                This platform is a <span className="font-bold">blueprint for U.S. leadership</span> in efficient, secure, and sustainable electrochemical manufacturing across all energy sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlignmentMissionSection;
