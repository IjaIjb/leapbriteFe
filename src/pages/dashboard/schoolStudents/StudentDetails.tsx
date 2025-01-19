import React from 'react'
import DashboardLayout from '../../../components/DashboardLayout'

const StudentDetails = () => {
  return (
    <div>
       <DashboardLayout>
       <div className="p-8 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-4 gap-4">
        {/* Bio Card */}
        <div className="bg-white p-4 rounded-lg shadow col-span-1 text-center">
          <img src="https://via.placeholder.com/100" alt="Profile" className="rounded-full mx-auto" />
          <h2 className="text-xl font-bold mt-2">James Harlow <span className="text-blue-500">(14)</span></h2>
          <p className="text-gray-600">jamesfresh45@gmail.com</p>
          <p className="text-gray-600">+44 7908 8904 99</p>
          <a href="#" className="text-blue-500">JS53 Gold</a>
        </div>

        {/* Payments and Pending Cards */}
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <h3 className="text-gray-500">Payments</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <h3 className="text-gray-500">Pending</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
        </div>

        {/* Activity Card */}
        <div className="bg-white p-4 rounded-lg shadow col-span-1">
          <h3 className="font-bold mb-2">Activity</h3>
          <div className="text-gray-500">No recent activity</div>
        </div>
      </div>

      {/* Parent Details & Payments */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="col-span-2 bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">Parent details</h3>
          <p><strong>Name:</strong> Ben Harlow</p>
          <p><strong>Email:</strong> bennyboy123@gmail.com</p>
          <p><strong>Phone Number:</strong> 74890878903</p>
          <p><strong>Gender:</strong> Male</p>
          <p><strong>Address:</strong> 4517 Washington Ave. Manchester, Kentucky 39495</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">Payments</h3>
          <div className="flex flex-col items-center">
            <img src="https://via.placeholder.com/150" alt="No Payments" />
            <p className="text-gray-500 mt-2">No Payments made yet</p>
          </div>
        </div>
      </div>
    </div>
        </DashboardLayout> 
    </div>
  )
}

export default StudentDetails