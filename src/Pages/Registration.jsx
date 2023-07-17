import React, { useState } from 'react';
import axios from 'axios';

export function RegForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    nic: '',
    pDate: '',
    passenger: '',
    pLocation: '',
    dLocation: '',
    pTime: '',
    dTime: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
    }

    // Validate email
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    // Validate contact number
    if (formData.contactNumber.trim() === '') {
      newErrors.contactNumber = 'Contact number is required';
    } else if (!isValidContactNumber(formData.contactNumber)) {
      newErrors.contactNumber = 'Invalid contact number';
    }

    // Validate NIC number
    if (formData.nic.trim() === '') {
      newErrors.nic = 'NIC number is required';
    }

    // Validate pick-up date
    if (formData.pDate.trim() === '') {
      newErrors.pDate = 'Pick-up date is required';
    }

    // Validate passenger
    if (formData.passenger.trim() === '') {
      newErrors.passenger = 'Passenger count is required';
    }

    // Validate pick-up location
    if (formData.pLocation.trim() === '') {
      newErrors.pLocation = 'Pick-up location is required';
    }

    // Validate drop-off location
    if (formData.dLocation.trim() === '') {
      newErrors.dLocation = 'Drop-off location is required';
    }

    // Validate pick-up time
    if (formData.pTime.trim() === '') {
      newErrors.pTime = 'Pick-up time is required';
    }

    // Validate drop-off time
    if (formData.dTime.trim() === '') {
      newErrors.dTime = 'Drop-off time is required';
    }

    setErrors(newErrors);

    // Return true if there are no errors, otherwise false
    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    // Implement your own email validation logic
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidContactNumber = (contactNumber) => {
    // Implement your own contact number validation logic
    return /^\d{10}$/.test(contactNumber);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const reservation = () => {
    const data = { name: formData.name, email: formData.email, contactNumber: formData.contactNumber, nic: formData.nic, pDate: formData.pDate,
      passenger: formData.passenger, pLocation: formData.pLocation, dLocation: formData.dLocation, pTime: formData.pTime, dTime: formData.dTime,
      message: formData.message,};
    axios.post("http://localhost:3001/reservations", data).then((response) => {
      console.log(response.data);
      
      
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    reservation();

    if (validateForm()) {
      // Form is valid, handle submission here
      console.log('Form submitted:', formData);
      // Reset form data
      setFormData({
        name: '',
        email: '',
        contactNumber: '',
        nic: '',
        pDate: '',
        passenger: '',
        pLocation: '',
        dLocation: '',
        pTime: '',
        dTime: '',
        message: '',
      });
    } else {
      // Form has errors, do not submit
      console.log('Form has errors:', errors);
    }
  };

  const handleClick = () => {
    // Perform your action here
    // You can access form data from the formData object

    // Example action: Log the form data to the console
    console.log(formData);
  };

  return (
    <div className="w-full h-full flex flex-col items-start bg-slate-400 mt-[-64px]">

      <div className="w-full flex flex-col mt-[70px] ">
        <h1 className="text-black text-center text-3xl mt-3">BOOKING FORM</h1>
        <div className="w-full h-[1px] bg-black my-3"></div>
      </div>

      <div className="w-full h-full flex flex-col">
        <form onSubmit={handleSubmit}>
{/* 1 */}
          <div className="flex flex-row w-full gap-3 my-2 justify-center">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold text-base">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                className={`w-[400px] bg-[#e2e2e2] outline-none outline-offset-2 my-2 h-7 ${
                  errors.name ? 'border-red-500' : ''
                }`}
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold">
                Your Email Address
              </label>
              <input
                id="email"
                type="email"
                className={`w-[400px] bg-[#e2e2e2] outline-none outline-offset-2 my-2 h-7 ${
                  errors.email ? 'border-red-500' : ''
                }`}
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
          </div>
{/* 2 */}
          <div className="flex flex-row w-full gap-3 my-2 justify-center">
            <div className="flex flex-col">
              <label htmlFor="contactNumber" className="font-semibold text-base">
                Your Contact Number
              </label>
              <input
                id="contactNumber"
                type="text"
                className={`w-[400px] bg-[#e2e2e2] outline-none outline-offset-2 my-2 h-7 ${
                  errors.contactNumber ? 'border-red-500' : ''
                }`}
                placeholder="Number"
                value={formData.contactNumber}
                onChange={handleChange}
              />
              {errors.contactNumber && (
                <span className="text-red-500 text-sm">
                  {errors.contactNumber}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="nic" className="font-semibold">
                Your NIC Number
              </label>
              <input
                id="nic"
                type="text"
                className={`w-[400px] bg-[#e2e2e2] outline-none outline-offset-2 my-2 h-7 ${
                  errors.nic ? 'border-red-500' : ''
                }`}
                placeholder="NIC Number"
                value={formData.nic}
                onChange={handleChange}
              />
              {errors.nic && (
                <span className="text-red-500 text-sm">{errors.nic}</span>
              )}
            </div>
          </div>
{/* 3 */}
          <div className="flex flex-row w-full gap-3 my-2 justify-center">
            <div className="flex flex-col">
              <label htmlFor="pDate" className="font-semibold text-base">
                Pick-Up Date
              </label>
              <input
                id="pDate"
                type="date"
                className={`w-[400px] bg-[#e2e2e2] outline-none outline-offset-2 my-2 h-7 ${
                  errors.pDate ? 'border-red-500' : ''
                }`}
                placeholder="Select Here"
                value={formData.pDate}
                onChange={handleChange}
              />
              {errors.pDate && (
                <span className="text-red-500 text-sm">{errors.pDate}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="passenger" className="font-semibold">
                Passenger
              </label>
              <input
                id="passenger"
                type="number"
                className={`w-[400px] bg-[#e2e2e2] outline-none outline-offset-2 my-2 h-7 ${
                  errors.passenger ? 'border-red-500' : ''
                }`}
                placeholder="Please Select"
                value={formData.passenger}
                onChange={handleChange}
              />
              {errors.passenger && (
                <span className="text-red-500 text-sm">
                  {errors.passenger}
                </span>
              )}
            </div>
          </div>
{/* 4 */}
          <div className="flex flex-row w-full gap-3 my-2 justify-center">
            <div className="flex flex-col">
              <label htmlFor="pLocation" className="font-semibold text-base">
                Pick-Up Location
              </label>
              <input
                id="pLocation"
                type="text"
                className={`w-[400px] bg-[#e2e2e2] outline-none outline-offset-2 my-2 h-7 ${
                  errors.pLocation ? 'border-red-500' : ''
                }`}
                placeholder="Pick-Up Location"
                value={formData.pLocation}
                onChange={handleChange}
              />
              {errors.pLocation && (
                <span className="text-red-500 text-sm">
                  {errors.pLocation}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="dLocation" className="font-semibold">
                Drop-Off Location
              </label>
              <input
                id="dLocation"
                type="text"
                className={`w-[400px] bg-[#e2e2e2] outline-none outline-offset-2 my-2 h-7 ${
                  errors.dLocation ? 'border-red-500' : ''
                }`}
                placeholder="Drop-Off Location"
                value={formData.dLocation}
                onChange={handleChange}
              />
              {errors.dLocation && (
                <span className="text-red-500 text-sm">
                  {errors.dLocation}
                </span>
              )}
            </div>
          </div>
{/* 5 */}
          <div className="flex flex-row w-full gap-3 my-2 justify-center">
            <div className="flex flex-col">
              <label htmlFor="pTime" className="font-semibold text-base">
                Pick-Up Time
              </label>
              <input
                id="pTime"
                type="time"
                className={`w-[400px] bg-[#e2e2e2] outline-none outline-offset-2 my-2 h-7 ${
                  errors.pTime ? 'border-red-500' : ''
                }`}
                placeholder="Select Time"
                value={formData.pTime}
                onChange={handleChange}
              />
              {errors.pTime && (
                <span className="text-red-500 text-sm">{errors.pTime}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="dTime" className="font-semibold">
                Drop-Off Time
              </label>
              <input
                id="dTime"
                type="time"
                className={`w-[400px] bg-[#e2e2e2] outline-none outline-offset-2 my-2 h-7 ${
                  errors.dTime ? 'border-red-500' : ''
                }`}
                placeholder="Select Time"
                value={formData.dTime}
                onChange={handleChange}
              />
              {errors.dTime && (
                <span className="text-red-500 text-sm">{errors.dTime}</span>
              )}
            </div>
          </div>
{/* 6 */}
          <div className="flex flex-row w-full gap-3 my-2 justify-center">
            <div className="flex flex-col">
              <label htmlFor="message" className="font-semibold">
                Your Message
              </label>
              <textarea
                id="message"
                className={`w-[810px] h-[100px] bg-[#e2e2e2] outline-none outline-offset-2 my-2 ${
                  errors.message ? 'border-red-500' : ''
                }`}
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message}</span>
              )}
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
              onClick={handleClick}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
