import React, { useState } from 'react'
import { UpdateBookingModal } from './UpdateBookingModal';
import { useEffect } from 'react';
import axios from 'axios';

export const BookingUpdateDelete = () => {

    const [listOfReservation, setListOfReservation] = useState([]);
    const [rId, setRId] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (id) => {
        setRId(id);
        setIsModalOpen(true);
      };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        axios.get("http://localhost:3001/reservations").then((response) => {
        setListOfReservation(response.data);
          console.log(listOfReservation)
        });
      }, []);

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

  return (


    <div className='relative'>
      <div className="w-full mx-auto overflow-x-auto md:max-w-[1400px] bg-white my-5 rounded-xl shadow-lg z-0">
        <div className='justify-center'>
            
          <table className="min-w-full my-5 bg-white rounded">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-100 border-b">R.ID</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Name</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Email</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Package</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Vehicle</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Con.Number</th>
                <th className="py-2 px-4 bg-gray-100 border-b">NIC</th>
                <th className="py-2 px-4 bg-gray-100 border-b">From</th>
                <th className="py-2 px-4 bg-gray-100 border-b">To</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Pickup Date</th>
                <th className="py-2 px-4 bg-gray-100 border-b">P.Time</th>
                <th className="py-2 px-4 bg-gray-100 border-b">D.Time</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Message</th>
                <th className="py-2 px-4 bg-gray-100 border-b">UserId</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Driver</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Dri.Contact</th>

                <th className="py-2 px-4 bg-gray-100 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listOfReservation.map((value, key) => (
                <tr key={value.id}>
                  
                  
                  <td className="py-2 px-4 border-b">{value.id}</td>
                  <td className="py-2 px-4 border-b">{value.name}</td>
                  <td className="py-2 px-4 border-b">{value.email}</td>
                  <td className="py-2 px-4 border-b">{value.rPackage}</td>
                  <td className="py-2 px-4 border-b">{value.rVehicle}</td>
                  <td className="py-2 px-4 border-b">{value.contactNumber}</td>
                  <td className="py-2 px-4 border-b">{value.nic}</td>
                  <td className="py-2 px-4 border-b">{value.pLocation}</td>
                  <td className="py-2 px-4 border-b">{value.dLocation}</td>
                  <td className="py-2 px-4 border-b">{value.pDate}</td>
                  <td className="py-2 px-4 border-b">{value.pTime}</td>
                  <td className="py-2 px-4 border-b">{value.dTime}</td>
                  <td className="py-2 px-4 border-b">{value.message}</td>
                  <td className="py-2 px-4 border-b">{value.UserId}</td>
                  <td className="py-2 px-4 border-b">none</td>
                  <td className="py-2 px-4 border-b">none</td>

                  
                  <td className="py-2 px-4 border-b">

                    <button
                      className="text-blue-600 hover:underline mr-2"
                      onClick={() => handleOpenModal(value.id)}
                    >
                      Edit
                    </button>

                    <button
                      className="text-red-600 hover:underline"
                      onClick={() => handleDelete(value.id)}
                    >
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
          <UpdateBookingModal rId={rId} isOpen={isModalOpen} onClose={handleCloseModal} className="z-50"/>
        </div>
    </div>
  )
};