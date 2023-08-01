import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';

// Replace this with your actual list of non-available dates
const nonAvailableDates = []
//   '2023-08-15',
//   '2023-08-18',
//   '2023-08-22',
//   '2023-08-28',
//   // Add more non-available dates as needed
// ];

export const CalendarBox = ({ vehicleName, unavailableDates }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [pDate, setPDate] = useState([]);

  useEffect(() => {
    // Make an API call to fetch booked dates for the selected vehicle
    axios.get(`http://localhost:3001/reservations?vehicle=${vehicleName}`).then((response) => {
      const bookedDates = response.data.map((reservation) => reservation.pDate);
      setPDate(bookedDates);
    });
  }, [vehicleName]);

  const isDateAvailable = (date) => !nonAvailableDates.includes(date) && !unavailableDates.includes(date);

  const handlePrevMonth = () => {
    const prevMonth = new Date(currentDate);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setCurrentDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  // const isDateAvailable = (date) => !nonAvailableDates.includes(date) && !pDate.includes(date);

  const renderCalendarDays = () => {
    const startDate = new Date(currentDate);
    startDate.setDate(1);
    const days = [];
    while (startDate.getMonth() === currentDate.getMonth()) {
      const date = startDate.toISOString().split('T')[0];
      const isAvailable = isDateAvailable(date);
      const isCurrentDate = startDate.toDateString() === new Date().toDateString();

      const isBookedDate = pDate.includes(date); // Check if the date is booked

      days.push(
        <div
          key={date}
          className={classNames('p-1 cursor-pointer text-center text-sm', {
            'bg-blue-500 text-white': isAvailable && selectedDate === date,
            'bg-gray-300': !isAvailable,
            'hover:bg-blue-500 hover:text-white': isAvailable && selectedDate !== date,
            'bg-yellow-300': isCurrentDate && selectedDate !== date,
            'bg-gray-300 text-white': isBookedDate,
          })}
          onClick={() => handleDateClick(date)}
        >
          {startDate.getDate()}
        </div>
      );

      startDate.setDate(startDate.getDate() + 1);
    }
    return days;
  };

  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();


    return(
        
        <div className="container mx-auto p-2 w-[375px] bg-white my-5 rounded-xl shadow-lg overflow-x-auto">
      <div className="flex items-center justify-between mb-2">
        <button onClick={handlePrevMonth}>&lt;</button>
        <h1 className="text-lg font-bold">{currentMonth} {currentYear}</h1>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        <div className="font-bold text-xs text-center">Sun</div>
        <div className="font-bold text-xs text-center">Mon</div>
        <div className="font-bold text-xs text-center">Tue</div>
        <div className="font-bold text-xs text-center">Wed</div>
        <div className="font-bold text-xs text-center">Thu</div>
        <div className="font-bold text-xs text-center">Fri</div>
        <div className="font-bold text-xs text-center">Sat</div>
        {renderCalendarDays()}
      </div>

      <div className='flex flex-row gap-8 justify-center'>
        <div className='flex gap-2'>
          <img src="https://iili.io/HQ2jh1p.png" alt="Gray" className='h-3 mt-1' />
          <p className='text-sm'>Not Available</p>
        </div>

        <div className='flex gap-2'>
          <img src="https://iili.io/HQ2Xgus.png" alt="Yellow" className='h-3 mt-1' />
          <p className='text-sm'>Current Date</p>
        </div>
      </div>
      
      {selectedDate && (
        <div className="flex mt-2 text-sm justify-center">
          Selected Date: {selectedDate}
        </div>
      )}
    </div>
  );
        
};