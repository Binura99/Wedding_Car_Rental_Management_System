import React, { useState, useEffect } from 'react';
import { UpdateBookingModal } from './UpdateBookingModal';
import axios from 'axios';

export const BookingUpdateDelete = () => {
  const [listOfReservation, setListOfReservation] = useState([]);
  const [rId, setRId] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State variables for search criteria
  const [searchRId, setSearchRId] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [searchDriverName, setSearchDriverName] = useState('');
  const [searchNIC, setSearchNIC] = useState('');
  const [searchPickUpDate, setSearchPickUpDate] = useState('');

  const handleOpenModal = (id) => {
    setRId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {

    const confirmed = window.confirm("Are you sure you want to delete this reservation?");
    if (confirmed) {

    axios.delete(`http://localhost:3001/reservations/${id}`)
      .then((response) => {

        setListOfReservation((prevReservations) =>
            prevReservations.filter((reservation) => reservation.id !== id)
        );
      })
    }
  };

  useEffect(() => {
    axios.get('http://localhost:3001/reservations').then((response) => {
      setListOfReservation(response.data);
    });
  }, []);

  return (
    <div className='relative '>
      <div className='flex justify-center gap-3 bg-white shadow-lg rounded-lg'>
        <input
          type='text'
          value={searchRId}
          onChange={(e) => setSearchRId(e.target.value)}
          placeholder='Search by R.ID'
          className='py-1 px-2 border border-gray-300 rounded my-3  ml-2'
        />
        <input
          type='text'
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder='Search by Name'
          className='py-1 px-2 border border-gray-300 rounded my-3'
        />
        <input
          type='text'
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
          placeholder='Search by Email'
          className='py-1 px-2 border border-gray-300 rounded my-3'
        />
        <input
          type='text'
          value={searchDriverName}
          onChange={(e) => setSearchDriverName(e.target.value)}
          placeholder='Search by Driver Name'
          className='py-1 px-2 border border-gray-300 rounded my-3'
        />
        <input
          type='text'
          value={searchNIC}
          onChange={(e) => setSearchNIC(e.target.value)}
          placeholder='Search by NIC'
          className='py-1 px-2 border border-gray-300 rounded my-3'
        />
        <input
          type='text'
          value={searchPickUpDate}
          onChange={(e) => setSearchPickUpDate(e.target.value)}
          placeholder='Search by PickUp Date'
          className='py-1 px-2 border border-gray-300 rounded my-3 mr-2'
        />
      </div>
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
                <th className='py-2 px-4 bg-gray-100 border-b'>UserId</th>
                <th className='py-2 px-4 bg-gray-100 border-b'>Driver</th>
                <th className='py-2 px-4 bg-gray-100 border-b'>Dri.Contact</th>
                <th className='py-2 px-4 bg-gray-100 border-b'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {listOfReservation
                .filter(
                  (value) =>
                    value.id.toString().includes(searchRId) &&
                    value.name.toLowerCase().includes(searchName.toLowerCase()) &&
                    value.email.toLowerCase().includes(searchEmail.toLowerCase()) &&
                    value.rDriver.toLowerCase().includes(searchDriverName.toLowerCase()) &&
                    value.nic.includes(searchNIC) &&
                    value.pDate.includes(searchPickUpDate)
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
                    <td className='py-2 px-4 border-b'>{value.UserId}</td>
                    <td className='py-2 px-4 border-b'>{value.rDriver}</td>
                    <td className='py-2 px-4 border-b'>{value.driverNum}</td>
                    <td className='py-2 px-4 border-b'>
                      <button className='text-blue-600 hover:underline mr-2' onClick={() => handleOpenModal(value.id)}>
                        Edit
                      </button>
                      <button className='text-red-600 hover:underline' onClick={() => handleDelete(value.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='relative z-50 justify-center'>
        <UpdateBookingModal rId={rId} isOpen={isModalOpen} onClose={handleCloseModal} className='z-50' />
      </div>
    </div>
  );
};
