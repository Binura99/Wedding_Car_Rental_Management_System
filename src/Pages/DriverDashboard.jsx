
import axios from 'axios';
import React, { useState, useEffect } from 'react';


export const DriverDashboard = () => {

  const [listOfReservation, setListOfReservation] = useState([]);
  const [searchDriverName, setSearchDriverName] = useState('');

  const token = localStorage.getItem('accessToken');
  const [currentName, setCurrentName] = useState('');
  const [reservationId, setReservationId] = useState('');

  useEffect(() => {
    if (token) {
      try {
        const user = JSON.parse(atob(token.split('.')[1]));// Decoding the JWT payload
        setCurrentName(user.name);

      } catch (error) {
        console.error('Error decoding the JWT payload:', error);
        // Handle any error that may occur during decoding
      }
    }
  }, [token, currentName]);

  useEffect(() => {
    axios.get('http://localhost:3001/reservations').then((response) => {
      setListOfReservation(response.data);
    });
  }, []);

  return (
    <div className='w-full relative h-full flex flex-col mt-[-65px] items-center bg-slate-200'>

      <div className="w-full flex flex-col mt-[80px]" >
        <p className="text-black text-center text-3xl mt-2 font-LexandExa">DRIVER DASHBOARD</p>
      </div>

      {/* <div className='flex justify-center gap-3 bg-white shadow-lg rounded-lg mt-6'>

        <input
          type='text'
          value={ currentName }
          placeholder='Search by Driver Name'
          className='py-1 px-2 border border-gray-300 rounded my-3'
        />

      </div> */}

      <div className='w-full mx-auto overflow-x-auto md:max-w-[1400px] bg-white my-5 rounded-xl shadow-lg z-0'>
        <div className='justify-center'>
          <table className='min-w-full my-5 bg-white rounded'>
            <thead>
              <tr>
                <th className='py-2 px-4 bg-gray-100 border-b'>R.ID</th>
                <th className='py-2 px-4 bg-gray-100 border-b'>Name</th>
                <th className='py-2 px-4 bg-gray-100 border-b'>Email</th>
                <th className='py-2 px-4 bg-gray-100 border-b'>Package</th>
                <th className='py-2 px-4 bg-gray-100 border-b'>Vehicle</th>
                <th className='py-2 px-4 bg-gray-100 border-b'>Con.Number</th>
                <th className='py-2 px-4 bg-gray-100 border-b'>NIC</th>
                <th className='py-2 px-4 bg-gray-100 border-b'>From</th>
                <th className='py-2 px-4 bg-gray-100 border-b'>To</th>
                <th className='py-2 px-4 bg-gray-100 border-b'>Pickup Date</th>
                <th className='py-2 px-4 bg-gray-100 border-b'>P.Time</th>
                <th className='py-2 px-4 bg-gray-100 border-b'>D.Time</th>
                <th className='py-2 px-4 bg-gray-100 border-b'>Message</th>

                <th className='py-2 px-4 bg-gray-100 border-b'>Driver</th>
                <th className='py-2 px-4 bg-gray-100 border-b'>Dri.Contact</th>

              </tr>
            </thead>
            <tbody>
              {listOfReservation
                .filter(
                  (value) =>
                    value.rDriver.toLowerCase().includes(searchDriverName.toLowerCase())

                )
                .map((value, key) => (
                  <tr key={value.id}>
                    <td className='py-2 px-4 border-b'>{value.id}</td>
                    <td className='py-2 px-4 border-b'>{value.name}</td>
                    <td className='py-2 px-4 border-b'>{value.email}</td>
                    <td className='py-2 px-4 border-b'>{value.rPackage}</td>
                    <td className='py-2 px-4 border-b'>{value.rVehicle}</td>
                    <td className='py-2 px-4 border-b'>{value.contactNumber}</td>
                    <td className='py-2 px-4 border-b'>{value.nic}</td>
                    <td className='py-2 px-4 border-b'>{value.pLocation}</td>
                    <td className='py-2 px-4 border-b'>{value.dLocation}</td>
                    <td className='py-2 px-4 border-b'>{value.pDate}</td>
                    <td className='py-2 px-4 border-b'>{value.pTime}</td>
                    <td className='py-2 px-4 border-b'>{value.dTime}</td>
                    <td className='py-2 px-4 border-b'>{value.message}</td>

                    <td className='py-2 px-4 border-b'>{value.rDriver}</td>
                    <td className='py-2 px-4 border-b'>{value.driverNum}</td>
                    <td className='py-2 px-4 border-b'>

                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
};
export default DriverDashboard