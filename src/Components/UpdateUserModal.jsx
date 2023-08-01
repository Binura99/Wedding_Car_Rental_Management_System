import axios from 'axios';
import React, { useEffect, useState } from 'react';


export const UpdateUserModal = ({ isOpen, onClose, userId }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    number: '',
    role: '',
    password: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/auth/${userId}`).then((response) => {

      setUserData({...response.data});
      console.log(response.data)
    });
  }, [userId]);

  const handleSubmit = () => {

    axios.put(`http://localhost:3001/auth/${userId}`, userData
    ).then((response) => {
        alert('User updated successfully!');
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
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value }) }
            
          />
        </div>
        
{/* 2 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
        </div>
{/* 3 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Mobile Number</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            value={userData.number}
            onChange={(e) => setUserData({ ...userData, number: e.target.value })}
          /> 
        </div>
{/* 4 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
          <select
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            value={userData.role}
            onChange={(e) => setUserData({ ...userData, role: e.target.value })}
          >
                <option ></option>
                <option value="Admin">Admin</option>
                <option value="Customer">Customer</option>
                <option value="Driver">Driver</option>
          </select>
        </div>
{/* 5 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">password</label>
          <input
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            type='password'
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
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
