import axios from 'axios';
import React, { useEffect, useState } from 'react';


export const UpdateVehicleModal = ({ isOpen, onClose,selectedId }) => {
  const [vehicleData, setVehicleData] = useState({
    vehicleType: '',
    vehicleYear: '',
    vehicleNum: '',
    vehicleDescription: '',
    vehiclePhoto: '',
    packageH2: '',
    packageH4: '',
    packageH8: '',
    excessHours: '',
    excessMileage: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/vehicles/byId/${selectedId}`).then((response) => {

      setVehicleData({...response.data});
      console.log(response.data)
    });
  }, [selectedId]);

  const handleSubmit = () => {

    axios.put(`http://localhost:3001/vehicles/${selectedId}`, vehicleData
    ).then((response) => {
        alert('Vehicle updated successfully!');
        console.log(response.data)
        onClose();
      })
      .catch((error) => {
        console.error('Error updating vehicle:', error);
      });
  };
  

  if (!isOpen) return null;

  return (
    <div className="fixed mt-[80px] inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-75"></div>
      <div className="relative bg-white p-6 rounded-lg z-10 overflow-y-auto my-auto h-full max-h-[85vh] w-[400px] ">
{/* 1 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Vehicle Type</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            value={vehicleData.vehicleType}
            onChange={(e) => setVehicleData({ ...vehicleData, vehicleType: e.target.value })}
          />
        </div>
{/* 2 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Vehicle Year</label>
          <input
            type="number"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            value={vehicleData.vehicleYear}
            onChange={(e) => setVehicleData({ ...vehicleData, vehicleYear: e.target.value })}
          />
        </div>
{/* 3 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Vehicle Number</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            value={vehicleData.vehicleNum}
            onChange={(e) => setVehicleData({ ...vehicleData, vehicleNum: e.target.value })}
          /> 
        </div>
{/* 4 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Vehicle Options</label>
          <textarea
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            value={vehicleData.vehicleDescription}
            onChange={(e) => setVehicleData({ ...vehicleData, vehicleDescription: e.target.value })}
          />
        </div>
{/* 5 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Vehicle Photo</label>
          <input
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            type='url'
            value={vehicleData.vehiclePhoto}
            onChange={(e) => setVehicleData({ ...vehicleData, vehiclePhoto: e.target.value })}
          />
        </div>
{/* 6 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Package 2 Hours</label>
          <input
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            type='number'
            value={vehicleData.packageH2}
            onChange={(e) => setVehicleData({ ...vehicleData, packageH2: e.target.value })}
          />
        </div>
{/* 7 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Package 4 Hours</label>
          <input
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            type='number'
            value={vehicleData.packageH4}
            onChange={(e) => setVehicleData({ ...vehicleData, packageH4: e.target.value })}
          />
        </div>
{/* 8 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Package 8 Hours</label>
          <input
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            type='number'
            value={vehicleData.packageH8}
            onChange={(e) => setVehicleData({ ...vehicleData, packageH8: e.target.value })}
          />
        </div>
{/* 9 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Excess Hours</label>
          <input
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            type='number'
            value={vehicleData.excessHours}
            onChange={(e) => setVehicleData({ ...vehicleData, excessHours: e.target.value })}
          />
        </div>
{/* 10 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Excess Mileage</label>
          <input
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            type='number'
            value={vehicleData.excessMileage}
            onChange={(e) => setVehicleData({ ...vehicleData, excessMileage: e.target.value })}
          />
        </div>

        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Update
          </button>

          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 ml-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
};
