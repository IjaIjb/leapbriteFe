import React, { useState } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styles for the calendar

const ParentChart = () => {
    const [date, setDate] = useState<Date | null>(new Date()); // Allow null as an initial state

    const handleDateChange: CalendarProps['onChange'] = (value) => {
        // Ensure the value is a single date (not null or an array)
        if (value instanceof Date) {
          setDate(value);
        }
      };
  return (
    <div className='h-full'>
                    <div className="bg-gradient-to-br from-[#004165] to-[#0082CB] h-full rounded-[15px] pl-4 py-3 pr-2">
                    <h2 className="text-[#FFFFFF] text-[13px] font-bold mb-4">Event Calendar</h2>
                <Calendar
        onChange={handleDateChange} // Use the corrected handler
        value={date}
        className="react-calendar"
      />
     <style>{`
          .react-calendar {
            width: 100%;
            height: 100%;
            border: none;
            background: transparent; /* Make the calendar background transparent */
            font-family: Arial, sans-serif;
            color: white; /* Ensure text is visible on the gradient background */
          }
          .react-calendar__tile {
            background: transparent; /* Make calendar tiles transparent */
          }
          .react-calendar__tile--active {
            background-color: #1D4ED8 !important; /* Highlight active date */
            color: white !important;
          }
          .react-calendar__tile--hover {
            background-color: rgba(255, 255, 255, 0.2) !important; /* Hover effect */
          }
          .react-calendar__month-view__days__day {
            color: white; /* Ensure default text color */
          }
        `}</style>


           
            </div>
    </div>
  )
}

export default ParentChart