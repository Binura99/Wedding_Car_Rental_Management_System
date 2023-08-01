import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const UpdateBookingModal = ({ isOpen, onClose, rId }) => { 

    const [listOfVehicles, setListOfVehicles] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/vehicles").then((response) => {
          setListOfVehicles(response.data);
        });
      }, []);

    const [bookingData, setBookingData] = useState({
        id: '',
        name: '',
        email: '',
        pDate: '',
        rPackage: '',
        rVehicle: '',
        contactNumber: '',
        nic: '',
        pLocation: '',
        dLocation: '',
        pTime: '',
        dTime: '',
        message: '',
        UserId: '',
        // driver:'',
        // driverNumber:'',
      });
    
      useEffect(() => {
        axios.get(`http://localhost:3001/reservations/${rId}`).then((response) => {
    
        setBookingData({...response.data[0]});
          console.log(response.data)
        });
      }, [rId]);
    
      const handleSubmit = () => {
    
        axios.put(`http://localhost:3001/reservations/${rId}`, bookingData
        ).then((response) => {
            alert('Reservation updated successfully!');
            console.log(response.data)
            onClose();
          })
          .catch((error) => {
            console.error('Error updating reservation:', error);
          });
      };
      
    
      if (!isOpen) return null;

  return (
    <div className="fixed mt-[80px] inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-75"></div>
            <div className="relative bg-white p-6 rounded-lg z-10 overflow-y-auto my-auto h-full max-h-[85vh] w-[400px] ">

    {/* 1 */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input
                        type="text"
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                        value={bookingData.name}
                        onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                        />
                </div>
    {/* 2 */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                        type="email"
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                        value={bookingData.email}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                        />
                </div>
    {/* 3 */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Package</label>
                        <select
                        type="text"
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                        value={bookingData.rPackage}
                        onChange={(e) => setBookingData({ ...bookingData, rPackage: e.target.value })}
                        >
                            <option ></option>
                            <option value="2 Hours">2 Hours</option>
                            <option value="4 Hours">4 Hours</option>
                            <option value="8 Hours">8 Hours</option>  
                        </select>
                </div>
    {/* 4 */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Vehicle</label>
                        <select
                        id="rVehicle"
                        type="text"
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                        value={bookingData.rVehicle}
                        onChange={(e) => setBookingData({ ...bookingData, rVehicle: e.target.value })}
                        >

                            <option placeholder="Select Your Vehicle"></option>
                                {listOfVehicles.map((value, key) => (
                            <option key={value.id} value={value.vehicleType}>{value.vehicleType}</option>
                
                            ))}
                            
                        </select>
                </div>
    {/* 5 */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Contact Number</label>
                        <input
                        type="text"
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                        value={bookingData.contactNumber}
                        onChange={(e) => setBookingData({ ...bookingData, contactNumber: e.target.value })}
                        />
                </div>
    {/* 6 */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">NIC</label>
                        <input
                        type="text"
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                        value={bookingData.nic}
                        onChange={(e) => setBookingData({ ...bookingData, nic: e.target.value })}
                        />
                </div>
    {/* 6.1 */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                        <input
                        type="date"
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                        value={bookingData.pDate}
                        onChange={(e) => setBookingData({ ...bookingData, pDate: e.target.value})}
                        />
                </div>
    {/* 7 */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">From</label>
                        <input
                        type="text"
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                        value={bookingData.pLocation}
                        onChange={(e) => setBookingData({ ...bookingData, pLocation: e.target.value })}
                        />
                </div>
    {/* 8 */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">To</label>
                        <input
                        type="text"
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                        value={bookingData.dLocation}
                        onChange={(e) => setBookingData({ ...bookingData, dLocation: e.target.value })}
                        />
                </div>
    {/* 9 */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">P.Time</label>
                        <input
                        type="time"
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                        value={bookingData.pTime}
                        onChange={(e) => setBookingData({ ...bookingData, pTime: e.target.value })}
                        />
                </div>
    {/* 10 */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">D.Time</label>
                        <input
                        type="time"
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                        value={bookingData.dTime}
                        onChange={(e) => setBookingData({ ...bookingData, dTime: e.target.value })}
                        />
                </div>
    {/* 11 */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                        <input
                        type="text"
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                        value={bookingData.message}
                        onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                        />
                </div>
    {/* 12 
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Driver</label>
                        <input
                        type="text"
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                        value={bookingData.name}
                        onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                        />
                </div>
    13
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Driver Number</label>
                        <input
                        type="text"
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                        value={bookingData.name}
                        onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                        />
                </div> */}

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
    
  )
};