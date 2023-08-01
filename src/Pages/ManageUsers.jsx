import axios from 'axios';
import React, { useState } from 'react'
import { UserUpdateDelete } from '../Components/UserUpdateDelete';


export const ManageUsers = () => {

    const [adminData, setAdminData] = useState({
        name: '',
        email: '',
        number: '',
        role: '',
        password:'',
    });

        const [errors, setErrors] = useState({});

        const validateForm = () => {
          const newErrors = {};
      
          // Validate name
          if (adminData.name.trim() === '') {
            newErrors.name = 'Name is required';
          }
      
          if (adminData.email.trim() === '') {
            newErrors.email = 'Email is required';
          } else if (!isValidEmail(adminData.email)) {
            newErrors.email = 'Invalid email address';
          }
      
      
          if (adminData.number.trim() === '') {
            newErrors.number = 'Number is required';
          }else if (!isValidContactNumber(adminData.contactNumber)) {
            newErrors.contactNumber = 'Invalid contact number';
          }

          if (adminData.role.trim() === '') {
            newErrors.role = 'Role is required';
          }

          if (adminData.password.trim() === '') {
            newErrors.password = 'Role is required';
          }

          setErrors(newErrors);

          return Object.keys(newErrors).length === 0;
        }

        const isValidEmail = (email) => {
            // Implement your own email validation logic
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
          };
        
          const isValidContactNumber = (number) => {
            // Implement your own contact number validation logic
            return /^\d{10}$/.test(number);
          };
        
          const handleChange = (e) => {
            setAdminData({ ...adminData, [e.target.id]: e.target.value });
          };

          const adminAccount = () => {
            const data = { name: adminData.name, email: adminData.email, password: adminData.password, role: adminData.role, number: adminData.number, };
            axios.post("http://localhost:3001/auth", data).then((response) => {
              console.log(response.data);
            //   navigate('/login', { replace: true });
              
            });
          };

          const handleSubmit = (e) => {
            e.preventDefault();

            if(!adminData.name || !adminData.email || !adminData.name || !adminData.role ){
                console.log('Please fill in all fields')

            }else{
                adminAccount();
                alert("Successfully Registered")
                
            }

            if (validateForm()) {
                // Form is valid, handle submission here
                console.log('Form submitted:', adminData);
                // Reset form data
                setAdminData({
                  name: '',
                  email: '',
                  password:'',
                  role:'',
                  number: '',
                  
                });
              } else {
                // Form has errors, do not submit
                console.log('Form has errors:', errors);
              }

            };

            const handleClick = () => {
                console.log(adminData);
              };

  return (
    <div className='w-full fixed overflow-scroll h-full flex flex-col mt-[-65px] items-center bg-slate-200'>

        <div className="w-full flex flex-col mt-[80px] my-5" >
            <p className="text-black text-center text-3xl mt-2 font-LexandExa">MANAGE USERS</p>
            <div className="w-full h-[1px] bg-black my-3"></div>
        </div>
        
        <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-3 my-2 justify-center bg-white rounded-lg shadow-lg p-2">
{/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold text-base">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                className={`w-[200px] bg-[#e2e2e2] rounded outline-none outline-offset-2 my-2 h-7 ${
                  errors.name ? 'border-red-500' : ''
                }`}
                placeholder="Name"
                value={adminData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>
{/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold">
                Your Email Address
              </label>
              <input
                id="email"
                type="email"
                className={`w-[250px] bg-[#e2e2e2] rounded outline-none outline-offset-2 my-2 h-7 ${
                  errors.email ? 'border-red-500' : ''
                }`}
                placeholder="Email"
                value={adminData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
{/* Mob.Number */}
            <div className="flex flex-col">
              <label htmlFor="number" className="font-semibold">
                Mobile Number
              </label>
              <input
                id="number"
                type="text"
                className={`w-[200px] bg-[#e2e2e2] outline-none rounded outline-offset-2 my-2 h-7 ${
                  errors.number ? 'border-red-500' : ''
                }`}
                placeholder="Mobile Number"
                value={adminData.number}
                onChange={handleChange}
              />
              {errors.number && (
                <span className="text-red-500 text-sm">{errors.number}</span>
              )}
            </div>
{/* Role */}
            <div className="flex flex-col">
              <label htmlFor="role" className="font-semibold">
                Role
              </label>
              <select
                id="role"
                type="text"
                className={`w-[100pxpx] bg-[#e2e2e2] rounded outline-none outline-offset-2 my-2 h-7 ${
                  errors.role ? 'border-red-500' : ''
                }`}
                placeholder="Select Role"
                value={adminData.role}
                onChange={handleChange}
              >
                <option ></option>
                <option value="Admin">Admin</option>
                <option value="Customer">Customer</option>
                <option value="Driver">Driver</option>
              </select>
              {errors.role && (
                <span className="text-red-500 text-sm">{errors.role}</span>
              )}
            </div>
{/* Password */}
            <div className="flex flex-col">
              <label htmlFor="password" className="font-semibold">
              Password
              </label>
              <input
                id="password"
                type="password"
                className={`w-[100pxpx] bg-[#e2e2e2] rounded outline-none outline-offset-2 my-2 h-7 ${
                  errors.password ? 'border-red-500' : ''
                }`}
                placeholder="Password"
                value={adminData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password}</span>
              )}
            </div>

            <div className='flex flex-col justify-center'>

            <button
            type="submit"
            className="my-2 h-7 w-32 bg-blue-500 hover:bg-blue-400 text-white rounded mt-4"
            onClick={handleClick}
            >
                Add
            </button>
            </div>

            <div>
              
            </div>

          </div>
          </form>
          <UserUpdateDelete/>
    </div>
  )
};