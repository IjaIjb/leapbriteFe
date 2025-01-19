import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SchoolEarningsChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Earnings',
            data: [20000, 30000, 40000, 50000, 60000, 70000, 80000, 60000, 50000, 70000, 80000, 30000],
            backgroundColor: '#1D4ED8', // Tailwind blue-700
            // borderRadius: 4,
            borderRadius: 15,
            barThickness: 10,
            barPercentage: 5,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: { beginAtZero: true,
            grid: {
                display: false, // Set to false to hide horizontal grid lines
              },
           },
          x: {
            grid: {
              display: false, // Set to false to hide horizontal grid lines
            },
          },
        },

      };
    
  return (
    <div>
                <div className="bg-white   rounded-[15px] pl-4 py-3 pr-2">
                  <div className="flex items-center gap-2">
                    <div className='w-full'>
                      {/* <h5 className='text-[#969696] text-[14px]'>Students</h5> */}
                      <h5 className="text-black text-[24px] font-bold">
                        Earnings
                      </h5>
                      <div className='w-full h-full'>
                      <Bar data={data} options={options} />
                      </div>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default SchoolEarningsChart