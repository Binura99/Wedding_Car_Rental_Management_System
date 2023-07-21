import React, { useState } from 'react';
import classNames from 'classnames';

// Replace this with your actual list of non-available dates
const nonAvailableDates = [
  '2023-07-15',
  '2023-07-18',
  '2023-07-22',
  // Add more non-available dates as needed
];

export const CalendarBox = () => {

    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

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

  const isDateAvailable = (date) => !nonAvailableDates.includes(date);

  const renderCalendarDays = () => {
    const startDate = new Date(currentDate);
    startDate.setDate(1);
    const days = [];
    while (startDate.getMonth() === currentDate.getMonth()) {
      const date = startDate.toISOString().split('T')[0];
      const isAvailable = isDateAvailable(date);
      const isCurrentDate = startDate.toDateString() === new Date().toDateString();
      days.push(
        <div
          key={date}
          className={classNames(
            'p-1 cursor-pointer text-center text-sm',
            {
              'bg-blue-500 text-white': isAvailable && selectedDate === date,
              'bg-gray-300': !isAvailable,
              'hover:bg-blue-500 hover:text-white': isAvailable && selectedDate !== date,
              'bg-yellow-300': isCurrentDate && selectedDate !== date,
            },
          )}
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
        <div className="font-bold text-xs">Sun</div>
        <div className="font-bold text-xs">Mon</div>
        <div className="font-bold text-xs">Tue</div>
        <div className="font-bold text-xs">Wed</div>
        <div className="font-bold text-xs">Thu</div>
        <div className="font-bold text-xs">Fri</div>
        <div className="font-bold text-xs">Sat</div>
        {renderCalendarDays()}
      </div>
      {selectedDate && (
        <div className="mt-2 text-sm">
          Selected Date: {selectedDate}
        </div>
      )}
    </div>
  );
        
};