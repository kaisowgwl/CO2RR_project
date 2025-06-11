import { AlertTriangle, Zap, X, Info } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const MotivationSection = () => {
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
            labels: [
              'Global Ir Production (2023)',
              'Ir Needed for 10 GW PEM/yr',
              'Ir Needed for 100 GW PEM/yr',
              'Ir Needed for 1 TW PEM/yr'
            ],
            datasets: [{
              label: 'Iridium (tons)',
              // Updated data: ~7 tons/yr global production, 5-7 tons/10GW, 50-70 tons/100GW, 500-700 tons/1TW (assuming 2-3 mg/cm²)
              data: [7, 7, 70, 700],
              backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.8)'
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Iridium (tons)'
                }
              }
            },
            plugins: {
              title: {
                display: true,
                text: 'Iridium Supply vs. PEM Electrolyzer Demand'
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    return `${context.dataset.label}: ${context.raw} tons`;
                  }
                }
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
        <h1 className="font-bold text-3xl md:text-4xl mb-8 text-[#0072c6]">Motivation: The Iridium Challenge</h1>
        
        {/* Key Facts Box */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-md flex items-start">
          <Info className="text-yellow-500 w-6 h-6 mr-3 mt-1" />
          <div>
            <h2 className="font-semibold text-lg mb-1">Key Facts about Iridium</h2>
            <ul className="list-disc pl-5 text-sm">
              <li>
                <span className="font-bold">Iridium is one of the rarest elements on Earth</span> – global annual production is only <span className="font-bold">~7 tons</span> (USGS 2023).
              </li>
              <li>
                At current PEM electrolyzer designs, <span className="font-bold">1 TW deployment would require 700+ tons of Ir</span> – over <span className="font-bold">100 years of global supply</span>.
              </li>
              <li>
                <span className="font-bold">Iridium prices</span> have exceeded <span className="font-bold">$180,000/kg</span> (2021 peak, Johnson Matthey).
              </li>
              <li>
                <span className="font-bold">&gt;80% of Iridium</span> is mined as a byproduct of platinum in South Africa, creating <span className="font-bold">geopolitical and supply risks</span>.
              </li>
            </ul>
            <div className="mt-2 text-xs text-gray-500">
              Sources: USGS Mineral Commodity Summaries 2023, IEA Global Hydrogen Review 2022, Johnson Matthey Market Data.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-red-100 mr-4">
                  <AlertTriangle className="text-red-600 w-5 h-5" />
                </div>
                <h3 className="font-semibold text-xl">Critical Material Constraints</h3>
              </div>
              <p className="mb-3">
                <span className="font-bold">Iridium is essential for PEM electrolyzers</span> due to its unmatched stability and activity for the oxygen evolution reaction (OER) in acidic conditions.
              </p>
              <p className="mb-3">
                <span className="font-bold text-red-600">Current technology requires 2-3 mg/cm² Ir loadings</span> – this is unsustainable for global hydrogen targets.
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-bold">No practical substitute exists:</span> While alternative OER catalysts have been explored, all known substitutes suffer from <span className="font-bold">major downsides</span> such as rapid degradation, low activity, or instability under PEM conditions.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-red-100 mr-4">
                  <Zap className="text-red-600 w-5 h-5" />
                </div>
                <h3 className="font-semibold text-xl">Interfacial Resistance Losses</h3>
              </div>
              <p className="mb-3">Traditional catalyst-coated membranes (CCMs) and porous transport layers (PTLs) suffer from:</p>
              <ul className="space-y-2 pl-5">
                <li className="flex items-start">
                  <X className="text-red-500 mt-1 mr-2 w-4 h-4" />
                  <span>High interfacial resistances</span>
                </li>
                <li className="flex items-start">
                  <X className="text-red-500 mt-1 mr-2 w-4 h-4" />
                  <span>Suboptimal catalyst utilization</span>
                </li>
                <li className="flex items-start">
                  <X className="text-red-500 mt-1 mr-2 w-4 h-4" />
                  <span>Poor electrical pathways</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="font-semibold text-xl mb-4">Iridium Supply Challenge</h3>
              <div className="h-[300px] w-full">
                <canvas ref={chartRef}></canvas>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                *Assumes 2-3 mg Ir/cm², 10 GW PEM = ~7 tons Ir/year. See USGS 2023, IEA 2022.
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-xl mb-4">Why This Matters</h3>
              <p className="mb-3">
                <span className="font-bold text-blue-700">Without drastic Ir reduction, green hydrogen cannot scale to meet climate targets.</span>
              </p>
              <p>
                <span className="font-bold">Reducing Ir loading by 90% is essential</span> for affordable, secure, and sustainable hydrogen production at the TW scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotivationSection;
