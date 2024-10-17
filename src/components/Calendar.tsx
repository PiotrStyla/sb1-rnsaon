import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

interface CalendarProps {
  onSelect: (date: Date, time: string) => void;
}

const Calendar: React.FC<CalendarProps> = ({ onSelect }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const dates = [
    new Date(2024, 2, 15),
    new Date(2024, 2, 16),
    new Date(2024, 2, 17),
    new Date(2024, 2, 18),
    new Date(2024, 2, 19),
  ];

  const timeSlots = [
    '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'
  ];

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: string) => {
    if (selectedDate) {
      onSelect(selectedDate, time);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <CalendarIcon className="w-5 h-5 mr-2 text-blue-500" />
        Wybierz datę i godzinę
      </h2>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {dates.map((date) => (
          <button
            key={date.toISOString()}
            onClick={() => handleDateSelect(date)}
            className={`p-2 ${selectedDate?.toDateString() === date.toDateString() ? 'bg-blue-500 text-white' : 'bg-blue-100'} hover:bg-blue-200 rounded`}
          >
            {date.toLocaleDateString('pl-PL', { day: 'numeric', month: 'short' })}
          </button>
        ))}
      </div>
      {selectedDate && (
        <div>
          <h3 className="text-lg font-medium mb-2 flex items-center">
            <Clock className="w-4 h-4 mr-2 text-blue-500" />
            Dostępne godziny
          </h3>
          <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded text-sm"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;