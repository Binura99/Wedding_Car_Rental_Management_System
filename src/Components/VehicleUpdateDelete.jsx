import React, { useEffect, useState } from 'react';
import axios from "axios";
import { UpdateVehicleModal } from './UpdateVehicleModal';
// import { useNavigate } from 'react-router-dom';

export const VehicleUpdateDelete = () => {

  const [listOfVehicles, setListOfVehicles] = useState([]);
  const [selectedId,setselectedId] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (id) => {
    setselectedId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    axios.get("http://localhost:3001/vehicles").then((response) => {
      setListOfVehicles(response.data);
      console.log(listOfVehicles)
    });
  }, []);


  const handleDelete = (id) => {

    const confirmed = window.confirm("Are you sure you want to delete this vehicle?");
    if (confirmed) {

    axios.delete(`http://localhost:3001/vehicles/${id}`)
      .then((response) => {

        setListOfVehicles((prevVehicles) =>
          prevVehicles.filter((vehicle) => vehicle.id !== id)
        );
        alert("Removed Car")
      })
    }
  };
  

  return (

    <div className='relative'>
      <div className="w-full mx-auto bg-white my-5 rounded-xl shadow-lg z-0">
        <div className='justify-center'>
          <table className="min-w-full my-5 bg-white rounded">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-100 border-b">Image</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Vehicles</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Vehicle Number</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Vehicle Option</th>
                <th className="py-2 px-4 bg-gray-100 border-b">2 Hours & 30Km</th>
                <th className="py-2 px-4 bg-gray-100 border-b">4 Hours & 40Km</th>
                <th className="py-2 px-4 bg-gray-100 border-b">8 Hours & 80Km</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Excess Hours</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Excess Mileage</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listOfVehicles.map((value, key) => (
                
                <tr key={value.id}>
                  <td className="py-2 px-4 border-b">
                    <img src={value.vehiclePhoto} alt={value.vehicleType} className="w-10 h-10 rounded-full" />
                  </td>
                  <td className="py-2 px-4 border-b whitespace-nowrap">{value.vehicleType}</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap">{value.vehicleNum}</td>
                  <td className="py-2 px-4 border-b w-48">{value.vehicleDescription}</td>
                  <td className="py-2 px-4 border-b">{value.packageH2}.00</td>
                  <td className="py-2 px-4 border-b">{value.packageH4}.00</td>
                  <td className="py-2 px-4 border-b">{value.packageH8}.00</td>
                  <td className="py-2 px-4 border-b">{value.excessHours}.00</td>
                  <td className="py-2 px-4 border-b">{value.excessMileage}.00</td>
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
          <UpdateVehicleModal selectedId={selectedId} isOpen={isModalOpen} onClose={handleCloseModal} className="z-50"/>
        </div>
    </div>
  );
};
