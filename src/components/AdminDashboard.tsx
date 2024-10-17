import React, { useState } from 'react';
import { Calendar, Clock, User, Edit, Trash2 } from 'lucide-react';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [selectedSpecialist, setSelectedSpecialist] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const specialists = [
    { id: 1, name: 'Anna Kowalska', specialization: 'Psycholog' },
    { id: 2, name: 'Jan Nowak', specialization: 'Logopeda' },
    { id: 3, name: 'Maria Wiśniewska', specialization: 'Terapeuta integracji sensorycznej' },
    { id: 4, name: 'Piotr Zieliński', specialization: 'Muzykoterapeuta' },
  ];

  const timeSlots = [
    '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'
  ];

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleAddAppointment = () => {
    // Logika dodawania wizyty
    alert('Funkcja dodawania wizyty');
  };

  const handleEditAppointment = (slot: string) => {
    // Logika edycji wizyty
    alert(`Edycja wizyty o ${slot}`);
  };

  const handleDeleteAppointment = (slot: string) => {
    // Logika usuwania wizyty
    alert(`Usuwanie wizyty o ${slot}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Panel administratora</h2>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
        >
          Wyloguj
        </button>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <User className="w-5 h-5 mr-2 text-blue-500" />
          Wybierz specjalistę
        </h3>
        <select
          onChange={(e) => setSelectedSpecialist(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="">Wybierz specjalistę</option>
          {specialists.map((specialist) => (
            <option key={specialist.id} value={specialist.name}>
              {specialist.name} - {specialist.specialization}
            </option>
          ))}
        </select>
      </div>

      {selectedSpecialist && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-blue-500" />
            Wybierz datę
          </h3>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 7 }, (_, i) => {
              const date = new Date();
              date.setDate(date.getDate() + i);
              return (
                <button
                  key={i}
                  onClick={() => handleDateSelect(date)}
                  className={`p-2 ${selectedDate?.toDateString() === date.toDateString() ? 'bg-blue-500 text-white' : 'bg-blue-100'} hover:bg-blue-200 rounded`}
                >
                  {date.toLocaleDateString('pl-PL', { weekday: 'short', day: 'numeric' })}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {selectedDate && (
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-blue-500" />
            Zarządzaj wizytami
          </h3>
          <div className="grid grid-cols-1 gap-2 mb-4 max-h-96 overflow-y-auto">
            {timeSlots.map((slot) => (
              <div key={slot} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                <span>{slot}</span>
                <div>
                  <button
                    onClick={() => handleEditAppointment(slot)}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteAppointment(slot)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleAddAppointment}
            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-300 flex items-center justify-center"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Dodaj nową wizytę
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;