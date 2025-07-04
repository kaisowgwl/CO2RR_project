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
              'Current Density (A/cm²)',
              'FE_CO (%)',
              'Durability (h)',
              'Ionic Conductivity (S/cm)',
              'Noble Metal Loading (mg/cm²)',
              'Catalyst Layer Thickness (µm)'
            ],
            datasets: [
              {
                label: 'State-of-the-Art',
                data: [67, 90, 67, 50, 50, 67], // 67% for 0.2/0.3, 90% for FE, 67% for 2000/3000, etc.
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
              },
              {
                label: 'Project Target',
                data: [100, 95, 100, 100, 100, 100],
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
                    return label.replace(' (mg/cm²)', '')
                                .replace(' (A/cm²)', '')
                                .replace(' (h)', '')
                                .replace(' (%)', '')
                                .replace(' (S/cm)', '')
                                .replace(' (µm)', '');
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
                    const realValues: Record<string, { [key: string]: string }> = {
                      'Current Density (A/cm²)': {
                        'State-of-the-Art': '0.2 (200 mA/cm²)',
                        'Project Target': '0.3 (300 mA/cm²)',
                        'ref': 'https://www.mdpi.com/2227-9717/10/5/826'
                      },
                      'FE_CO (%)': {
                        'State-of-the-Art': '90',
                        'Project Target': '≥95',
                        'ref': 'https://www.nature.com/articles/s41598-021-90581-0'
                      },
                      'Durability (h)': {
                        'State-of-the-Art': '2000',
                        'Project Target': '3000',
                        'ref': 'https://wang.rice.edu/files/2025/06/science.adr3834.pdf'
                      },
                      'Ionic Conductivity (S/cm)': {
                        'State-of-the-Art': '0.05',
                        'Project Target': '0.10',
                        'ref': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10811620/'
                      },
                      'Noble Metal Loading (mg/cm²)': {
                        'State-of-the-Art': '0.5',
                        'Project Target': '0.25',
                        'ref': 'https://www.nature.com/articles/s41598-021-90581-0'
                      },
                      'Catalyst Layer Thickness (µm)': {
                        'State-of-the-Art': '3',
                        'Project Target': '2',
                        'ref': 'https://www.nature.com/articles/s41598-021-90581-0'
                      }
                    };
                    const ref = realValues[metric]?.ref ? `\nRef: ${realValues[metric].ref}` : '';
                    return `${label}: ${value} (${realValues[metric]?.[label] || ''})${ref}`;
                  }
                }
              }
            }
          }
        });
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
          {/* Left: Radar chart and performance table */}
          <div>
            <h3 className="font-semibold text-xl mb-6">Performance Comparison</h3>
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <div className="h-[250px] mb-4">
                <canvas ref={chartRef}></canvas>
              </div>
              <table className="w-full text-xs text-left border-t border-b border-gray-200">
                <thead>
                  <tr className="text-gray-700">
                    <th className="py-1 pr-2 font-semibold">Metric</th>
                    <th className="py-1 px-2 font-semibold">State-of-the-Art</th>
                    <th className="py-1 px-2 font-semibold">Project Target</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-1 pr-2">Current Density (A/cm²)</td>
                    <td className="py-1 px-2">
                      <a className="text-blue-600 underline" href="https://www.mdpi.com/2227-9717/10/5/826" target="_blank" rel="noopener noreferrer">~0.2 (200 mA)</a>
                    </td>
                    <td className="py-1 px-2">0.3 (300 mA)</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-2">FE_CO (%)</td>
                    <td className="py-1 px-2">
                      <a className="text-blue-600 underline" href="https://www.nature.com/articles/s41598-021-90581-0" target="_blank" rel="noopener noreferrer">90</a>
                    </td>
                    <td className="py-1 px-2">≥95</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-2">Durability (h)</td>
                    <td className="py-1 px-2">
                      <a className="text-blue-600 underline" href="https://wang.rice.edu/files/2025/06/science.adr3834.pdf" target="_blank" rel="noopener noreferrer">2000</a>
                    </td>
                    <td className="py-1 px-2">3000</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-2">Ionic Conductivity (S/cm)</td>
                    <td className="py-1 px-2">
                      <a className="text-blue-600 underline" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10811620/" target="_blank" rel="noopener noreferrer">0.05</a>
                    </td>
                    <td className="py-1 px-2">0.10</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-2">Noble Metal Loading (mg/cm²)</td>
                    <td className="py-1 px-2">
                      <a className="text-blue-600 underline" href="https://www.nature.com/articles/s41598-021-90581-0" target="_blank" rel="noopener noreferrer">0.5</a>
                    </td>
                    <td className="py-1 px-2">0.25</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-2">Catalyst Layer Thickness (µm)</td>
                    <td className="py-1 px-2">
                      <a className="text-blue-600 underline" href="https://www.nature.com/articles/s41598-021-90581-0" target="_blank" rel="noopener noreferrer">3</a>
                    </td>
                    <td className="py-1 px-2">2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Right: Deliverables */}
          <div>
            <h3 className="font-semibold text-xl mb-6">Deliverables</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-md p-5">
                <div className="flex items-center mb-2">
                  <LineChart className="text-blue-600 w-5 h-5 mr-3" />
                  <h4 className="font-semibold">Digital-to-Physical Model</h4>
                </div>
                <p className="text-sm">Digital-to-physical model linking microstructure to performance metrics.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-5">
                <div className="flex items-center mb-2">
                  <Layers className="text-blue-600 w-5 h-5 mr-3" />
                  <h4 className="font-semibold">Prototype GDEs</h4>
                </div>
                <p className="text-sm">Prototype GDEs achieving ≥200 mA/cm², ≥90% CO FE, and &lt;0.5 mg/cm² Ag loading.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-5">
                <div className="flex items-center mb-2">
                  <FileText className="text-blue-600 w-5 h-5 mr-3" />
                  <h4 className="font-semibold">Durability Data</h4>
                </div>
                <p className="text-sm">Durability data demonstrating ≥1000 h stability at relevant conditions.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-5">
                <div className="flex items-center mb-2">
                  <Lightbulb className="text-blue-600 w-5 h-5 mr-3" />
                  <h4 className="font-semibold">Publications + IP</h4>
                </div>
                <p className="text-sm">Publications + IP, sharing both design insights and practical electrode methodologies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpectedOutcomesSection;
