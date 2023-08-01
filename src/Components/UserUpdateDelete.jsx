import React, { useEffect, useState } from 'react';
import axios from "axios";
import { UpdateUserModal } from './UpdateUserModal';

export const UserUpdateDelete = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState();
  const [searchRole, setSearchRole] = useState('');
  const [searchName, setSearchName] = useState('');

  const handleOpenModal = (id) => {
    setUserId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    
    axios.get("http://localhost:3001/auth").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const handleDelete = (id) => {

    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (confirmed) {

    axios.delete(`http://localhost:3001/auth/${id}`)
      .then((response) => {
        setListOfUsers((prevUsers) =>
          prevUsers.filter((user) => user.id !== id)
        );
      });
    }
  };

  const filteredUsers = listOfUsers.filter((user) => {
    const roleMatch = user.role.toLowerCase().includes(searchRole.toLowerCase());
    const nameMatch = user.name.toLowerCase().includes(searchName.toLowerCase());
    return roleMatch && nameMatch;
  });

  return (
    <div className='relative'>
      <div className="w-full mx-auto bg-white my-5 rounded-xl shadow-lg z-0">
        <div className='justify-center'>
          <div className="mb-4 flex justify-center gap-10">
            <input
              className="py-1 px-2 border border-gray-300 rounded mt-4"
              type="text"
              placeholder="Search by name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <input
              className="py-1 px-2 border border-gray-300 rounded mr-2 mt-4"
              type="text"
              placeholder="Search by role"
              value={searchRole}
              onChange={(e) => setSearchRole(e.target.value)}
            />
          </div>
          <table className="min-w-full my-5 bg-white rounded">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-100 border-b">ID</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Name</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Email</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Mob. Number</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Role</th>
                {/* <th className="py-2 px-4 bg-gray-100 border-b">Password</th> */}
                <th className="py-2 px-4 bg-gray-100 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((value, key) => (
                <tr key={value.id}>
                  <td className="py-2 px-4 border-b">{value.id}</td>
                  <td className="py-2 px-4 border-b">{value.name}</td>
                  <td className="py-2 px-4 border-b">{value.email}</td>
                  <td className="py-2 px-4 border-b">{value.number}</td>
                  <td className="py-2 px-4 border-b">{value.role}</td>
                  {/* <td className="py-2 px-4 border-b">{value.password}</td> */}
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
        <UpdateUserModal userId={userId} isOpen={isModalOpen} onClose={handleCloseModal} className="z-50" />
      </div>
    </div>
  );
};
