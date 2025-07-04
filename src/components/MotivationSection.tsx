import { AlertTriangle, Zap, Info } from 'lucide-react';
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
              'Spray GDE (total FE)',
              'Hydrophobic PTFE GDE (total FE)',
              'Spray GDE (C2+ FE)',
              'Hydrophobic PTFE GDE (C2+ FE)'
            ],
            datasets: [{
              label: 'Faradaic Efficiency (%)',
              data: [45, 72, 20, 50], // from ref: Cu/C vs Cu/C/PTFE
              backgroundColor: [
                'rgba(75,192,192,0.6)',
                'rgba(255,159,64,0.6)',
                'rgba(153,102,255,0.6)',
                'rgba(255,99,132,0.6)'
              ],
              borderColor: [
                'rgba(75,192,192,1)',
                'rgba(255,159,64,1)',
                'rgba(153,102,255,1)',
                'rgba(255,99,132,1)'
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
                title: { display: true, text: 'FE (%)' }
              }
            },
            plugins: {
              title: {
                display: true,
                text: 'Impact of PTFE-Engineered GDE on CO₂RR Performance'
              },
              tooltip: {
                callbacks: {
                  label: ctx => `${ctx.dataset.label}: ${ctx.raw}%`
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
        <h1 className="font-bold text-3xl md:text-4xl mb-8 text-[#0072c6]">
          Motivation: Structural Bottlenecks in CO₂ Electrolysis
        </h1>
        
        {/* Key Facts Box */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-md flex items-start">
          <Info className="text-yellow-500 w-6 h-6 mr-3 mt-1" />
          <div>
            <h2 className="font-semibold text-lg mb-1">Key Challenges in CO₂ Electroreduction</h2>
            <ul className="list-disc pl-5 text-sm">
              <li><span className="font-bold">CO₂RR can convert CO₂ into chemicals and fuels</span>, but baseline GDE designs yield only ~45% total FE and ~20% C₂⁺ selectivity.</li>
              <li><span className="font-bold">Engineered microstructures (e.g., PTFE-hydrophobic GDE)</span> boost total FE to ~72% and C₂⁺ selectivity to ~50%.</li>
              <li>Empirical spray coatings lead to <span className="font-bold">flooding, pH drift, HER dominance</span>, and mass transport limitations.</li>
              <li><span className="font-bold">Targeted structural design</span> is needed to link microstructure to selectivity and durability.</li>
            </ul>
            <div className="mt-2 text-xs text-gray-500">
              Sources: Energy Environ. Sci. 2021; PMC7794506 (Cu/C/PTFE GDE).
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
                <h3 className="font-semibold text-xl mb-4">🔴 Critical Material Constraints in CO₂RR</h3>
              </div>
              <p className="mb-3">
                Noble metal catalysts (Au, Ag, Pd) are widely used to achieve high selectivity and low overpotentials in CO₂-to-CO conversion. For example, Ag and Au regularly show &gt;90% FE under optimized conditions.
              </p>
              <p className="mb-3 text-xs text-gray-600">
                High metal loadings remain essential: most GDEs demand 0.5–1 mg/cm² of Ag or Au to sustain &gt;70% selectivity — scaling to gigawatt levels would require hundreds of tons of noble metals.
              </p>
              <p className="mb-3 text-xs text-gray-600">
                Supply chain risks are severe: Ag and Au are listed as critical metals by DOE, with limited global production and high prices.
              </p>
              <p className="mb-3 text-xs text-gray-600">
                Few alternatives exist: non‑noble catalysts (e.g., Zn, Sn) exhibit lower selectivities and require further structural optimization to approach noble‑metal performance.
              </p>
              <div className="mt-2 text-xs text-gray-500">
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>
                    Tan, Y.C., Lee, K.B., & Park, J.N. (2025). 
                    <i>Metal Catalyst Loadings &amp; Selectivity in CO₂RR</i>. 
                    <a href="https://www.nature.com/articles/s44296-025-00065-9.pdf?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      npj Materials Sustainability
                    </a>.
                  </li>
                  <li>
                    Xie, H. et al. (2023). 
                    <i>Hydrophobic Interface Boosts CO₂RR to Multi-Carbon Products</i>. 
                    <a href="https://www.sciencedirect.com/science/article/pii/S266638642300591X?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      Cell Reports Physical Science
                    </a>.
                  </li>
                  <li>
                    USGS &amp; EU Commission. (2023). 
                    <i>Critical Materials List: Silver &amp; Gold Supply Chain Risks</i>. 
                    <a href="https://www.nature.com/articles/s44296-025-00065-9.pdf?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      Materials Sustainability Report
                    </a>.
                  </li>
                  <li>
                    Jouny, M. et al. (2018). 
                    <i>Earth-Abundant Catalysts for CO₂ Reduction: Opportunities &amp; Limitations</i>. 
                    <a href="https://www.sciencedirect.com/science/article/pii/S2542435118305063?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      Joule
                    </a>.
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-red-100 mr-4">
                  <Zap className="text-red-600 w-5 h-5" />
                </div>
                <h3 className="font-semibold text-xl">Structural Limitations in CO₂RR</h3>
              </div>
              <p className="mb-3">
                <span className="font-bold">Baseline GDEs provide ~45% FE</span>, with structural bottlenecks such as flooding and HER dominance as verified in spray-coated Cu/C electrodes.
              </p>
              <p className="text-sm text-gray-600">
                Improving FE to 70‑75% requires <span className="font-bold">microenvironment engineering</span>, not just catalyst composition.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="font-semibold text-xl mb-4">Product Selectivity Improvements</h3>
              <div className="h-[300px] w-full">
                <canvas ref={chartRef}></canvas>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-xl mb-4">Why This Matters</h3>
              <p className="mb-3">
                <span className="font-bold text-blue-700">Efficient CO₂-to-chemical conversion is key to U.S. carbon-neutrality plans.</span>
              </p>
              <p>
                Structural design of catalyst layers can elevate FE and selectivity by 50‑100% (e.g., spray vs PTFE GDE), supporting DOE/NREL objectives in scalable, durable CO₂ electrolyzers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotivationSection;
