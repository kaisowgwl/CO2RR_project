import { LineChart, Layers, FileText, Lightbulb } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Chart, TooltipItem } from 'chart.js/auto';

const ExpectedOutcomesSection = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: [
              'Ir Loading (mg/cm²)',
              'Current Density (A/cm²)',
              'Durability (h @ 1 A/cm²)',
              'Connectivity Index',
              'Mass Activity (A/mg Ir)',
              'Ionic Conductivity (S/cm)'
            ],
            datasets: [
              {
                label: 'State-of-the-Art',
                // Example: 0.2 mg/cm², 2 A/cm², 300 h, 60, 0.1 A/mg, 0.05 S/cm
                data: [20, 60, 60, 60, 10, 50],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
              },
              {
                label: 'Project Target',
                // Example: 0.05 mg/cm², 3 A/cm², 500 h, 90, 0.15 A/mg, 0.09 S/cm
                data: [90, 90, 90, 90, 90, 90],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              r: {
                angleLines: { display: true },
                suggestedMin: 0,
                suggestedMax: 100,
                pointLabels: {
                  callback: function(label: string) {
                    // Shorten labels for clarity
                    return label.replace(' (mg/cm²)', '')
                                .replace(' (A/cm²)', '')
                                .replace(' (h @ 1 A/cm²)', '')
                                .replace(' (A/mg Ir)', '')
                                .replace(' (S/cm)', '');
                  }
                }
              }
            },
            plugins: {
              legend: { position: 'bottom' },
              tooltip: {
                callbacks: {
                  label: function (context: TooltipItem<'radar'>) {
                    const label = context.dataset.label || '';
                    const value = context.raw;
                    const metric = context.label;
                    // Reference values and sources for tooltip
                    const realValues: Record<string, { [key: string]: string }> = {
                      'Ir Loading (mg/cm²)': {
                        'State-of-the-Art': '0.2 mg/cm²',
                        'Project Target': '0.05 mg/cm²',
                        'ref': 'Nature Energy 7, 140–147 (2022); Joule 7, 1–17 (2023)'
                      },
                      'Current Density (A/cm²)': {
                        'State-of-the-Art': '2',
                        'Project Target': '3',
                        'ref': 'J. Power Sources 484, 229321 (2021); IEA Global Hydrogen Review 2022'
                      },
                      'Durability (h @ 1 A/cm²)': {
                        'State-of-the-Art': '300',
                        'Project Target': '500',
                        'ref': 'JES 169, 2022'
                      },
                      'Connectivity Index': {
                        'State-of-the-Art': '60',
                        'Project Target': '90',
                        'ref': 'Simulation/Modeling Target'
                      },
                      'Mass Activity (A/mg Ir)': {
                        'State-of-the-Art': '0.1',
                        'Project Target': '0.15',
                        'ref': 'ACS Catalysis 13, 2023'
                      },
                      'Ionic Conductivity (S/cm)': {
                        'State-of-the-Art': '0.05',
                        'Project Target': '0.09',
                        'ref': 'JES 169, 2022'
                      }
                    };
                    const ref = realValues[metric]?.ref ? `\nRef: ${realValues[metric].ref}` : '';
                    return `${label}: ${value} (${realValues[metric]?.[label] || ''})${ref}`;
                  }
                }
              }
            }
          } // <-- FIX: closes the Chart options object
        }); // <-- FIX: closes the Chart constructor
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e4e8ed] p-8 md:p-16 text-gray-800">
      <div className="absolute w-3 md:h-4/5 bg-gradient-to-b from-[#0072c6] to-[#00a2ff] left-0 top-[10%] rounded-r-md"></div>

      <div className="relative z-10 ml-4 md:ml-8">
        <h1 className="font-bold text-3xl md:text-4xl mb-8 text-[#0072c6]">Expected Outcomes & Metrics</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div>
            <h3 className="font-semibold text-xl mb-6">Performance Targets</h3>
            <div className="space-y-6">
              <div className="bg-blue-50/30 border-l-4 border-[#0072c6] rounded-lg p-5">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Ionic Conductivity</h4>
                  <span className="text-blue-600 font-bold">0.09 S/cm</span>
                </div>
                <p className="text-sm mb-1">Improved via architecture-driven hydration and ionomer distribution</p>
                <div className="text-xs text-gray-500 mb-2">Ref: JES 169, 2022</div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#0072c6] to-[#00a2ff] rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="bg-blue-50/30 border-l-4 border-[#0072c6] rounded-lg p-5">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Iridium Loading Reduction</h4>
                  <span className="text-blue-600 font-bold">75%</span>
                </div>
                <p className="text-sm mb-1">Compared to conventional CCM-based PEM electrolyzers</p>
                <div className="text-xs text-gray-500 mb-2">Ref: Nature Energy 7, 140–147 (2022); Joule 7, 1–17 (2023)</div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#0072c6] to-[#00a2ff] rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="bg-blue-50/30 border-l-4 border-[#0072c6] rounded-lg p-5">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Contact Resistance</h4>
                  <span className="text-blue-600 font-bold">&lt;10 mΩ·cm²</span>
                </div>
                <p className="text-sm mb-1">Due to monolithic Ti–Ir interface</p>
                <div className="text-xs text-gray-500 mb-2">Ref: J. Power Sources 484, 229321 (2021)</div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#0072c6] to-[#00a2ff] rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="bg-blue-50/30 border-l-4 border-[#0072c6] rounded-lg p-5">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Ir Mass Activity</h4>
                  <span className="text-blue-600 font-bold">8 A/mg</span>
                </div>
                <p className="text-sm mb-1">Achieved through optimized surface area and structure</p>
                <div className="text-xs text-gray-500 mb-2">Ref: ACS Catalysis 13, 2023</div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#0072c6] to-[#00a2ff] rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
              <div className="bg-blue-50/30 border-l-4 border-[#0072c6] rounded-lg p-5">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Catalyst Layer Thickness</h4>
                  <span className="text-blue-600 font-bold">&lt;3 μm</span>
                </div>
                <p className="text-sm mb-1">With hierarchical porosity for optimal mass transport</p>
                <div className="text-xs text-gray-500 mb-2">Ref: JES 169, 2022</div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#0072c6] to-[#00a2ff] rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-6">Deliverables</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg shadow-md p-5">
                <div className="flex items-center mb-3">
                  <LineChart className="text-blue-600 w-5 h-5 mr-3" />
                  <h4 className="font-semibold">Digital Model</h4>
                </div>
                <p className="text-sm">Structure-performance correlation model with predictive capability for scale-up</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-5">
                <div className="flex items-center mb-3">
                  <Layers className="text-blue-600 w-5 h-5 mr-3" />
                  <h4 className="font-semibold">Prototype Anodes</h4>
                </div>
                <p className="text-sm">Fabricated and tested ≥1.5 A/cm² @ &lt;1.8 V</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-5">
                <div className="flex items-center mb-3">
                  <FileText className="text-blue-600 w-5 h-5 mr-3" />
                  <h4 className="font-semibold">Publications</h4>
                </div>
                <p className="text-sm">At least two peer-reviewed publications based on architectural design</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-5">
                <div className="flex items-center mb-3">
                  <Lightbulb className="text-blue-600 w-5 h-5 mr-3" />
                  <h4 className="font-semibold">Intellectual Property</h4>
                </div>
                <p className="text-sm">One provisional patent filing based on architectural design</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-4">Performance Comparison</h4>
              <div className="h-[250px]">
                <canvas ref={chartRef}></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpectedOutcomesSection;
