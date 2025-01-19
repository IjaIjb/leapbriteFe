import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SchoolStudentChart = () => {
    const data = {
        labels: ['Male', 'Female'],
        datasets: [
          {
            data: [55, 45], // Male and Female percentages
            backgroundColor: ['#0082CB', '#004165'], // Colors for Male and Female
            borderWidth: 0,
            hoverOffset: 4,
          },
        ],
      };
    
      const options = {
        cutout: '70%', // Creates the hollow center
        plugins: {
          legend: {
            display: false, // Hide the default legend
          },
        },
        responsive: true,
      };
  return (
    <div className='h-full'>
                        <div className="bg-white h-full  rounded-[15px] pl-4 py-3 pr-2">
                  <div className="flex items-center gap-2">
                    <div>
                      {/* <h5 className='text-[#969696] text-[14px]'>Students</h5> */}
                      <h5 className="text-black text-[24px] font-bold">
                        Students
                      </h5>
                      <div className="relative w-[150px] h-[150px]">
        <Doughnut data={data} options={options} />
        {/* Inner circle with the icon */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="w-[50px] h-[50px] bg-[#0082CB] rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full mt-4">
        <div className="text-center">
          <p className="text-[#0082CB] font-semibold">♂ Male</p>
          <p className="font-bold text-lg">55%</p>
        </div>
        <div className="text-center">
          <p className="text-[#004165] font-semibold">♀ Female</p>
          <p className="font-bold text-lg">45%</p>
        </div>
      </div>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default SchoolStudentChart