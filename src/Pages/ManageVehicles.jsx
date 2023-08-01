import React, { useState } from 'react';
import axios from 'axios';
import { VehicleUpdateDelete } from '../Components/VehicleUpdateDelete';

export const ManageVehicles = () => {
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleNum, setVehicleNum] = useState('');
  const [vehicleDescription, setVehicleDescription] = useState('');
  const [vehiclePhoto, setVehiclePhoto] = useState('');
  const [packageH2, setPackageH2] = useState('');
  const [packageH4, setPackageH4] = useState('');
  const [packageH8, setPackageH8] = useState('');
  const [excessHours, setExcessHours] = useState('');
  const [excessMileage, setExcessMileage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');



  const addVehicle = () =>{

    const data = {
      vehicleType: vehicleType,
      vehicleYear: vehicleYear,
      vehicleNum: vehicleNum,
      vehicleDescription: vehicleDescription,
      vehiclePhoto: vehiclePhoto,
      packageH2: packageH2,
      packageH4: packageH4,
      packageH8: packageH8,
      excessHours: excessHours,
      excessMileage: excessMileage,
    };

    axios.post("http://localhost:3001/vehicles", data)
    .then((response) => {
      console.log(response.data);
      
    })
    .catch((error) => {
      console.error(error);
      // Optionally, you can add logic here to handle errors from the server.
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    if (!vehicleType || !vehicleYear || !vehicleNum || !vehicleDescription || !vehiclePhoto || !packageH2 || !packageH4 || !packageH8
      || !excessHours || !excessMileage) {
      setErrorMessage('Please fill in all fields');
      return;
    }else{
      addVehicle();
      alert("Added")
  }

    setVehicleType('');
    setVehicleYear('');
    setVehicleNum('');
    setVehicleDescription('');
    setVehiclePhoto('');
    setPackageH2('');
    setPackageH4('');
    setPackageH8('');
    setExcessHours('');
    setExcessMileage('');
    setErrorMessage('');
  };

  return (

    <div className='w-full fixed overflow-scroll h-full flex flex-col mt-[-65px] items-center bg-slate-200'>
      <div className="w-full flex flex-col mt-[80px] my-5" >
        <p className="text-black text-center text-3xl mt-2 font-LexandExa">MANAGE VEHICLES</p>
        <div className="w-full h-[1px] bg-black my-3"></div>
      </div>

    <div className="p-4 max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
      
      <form onSubmit={handleSubmit} className="space-y-4">

        <div className='flex flex-row gap-10'>
  {/* 1 */}
        <div>
          <label htmlFor="vehicleType" className='font-bold'>Vehicle Type</label>
          <input type="text" id="vehicleType" 
          value={vehicleType} 
          onChange={(e) => setVehicleType(e.target.value)}
          className='w-full text-black pay-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
          />
        </div>
  {/* 2 */}
        <div>
          <label htmlFor="vehicleYear" className='font-bold'>Vehicle Year</label>
          <input type="text" id="vehicleYear" 
          value={vehicleYear} 
          onChange={(e) => setVehicleYear(e.target.value)}
          className='w-full text-black pay-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
          />
        </div>
  {/* 3 */}
        <div>
          <label htmlFor="vehicleNum" className='font-bold'>Vehicle Number</label>
          <input type="text" id="vehicleNum" 
          value={vehicleNum} 
          onChange={(e) => setVehicleNum(e.target.value)}
          className='w-full text-black pay-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
          />
        </div>
        </div>

{/* break */}

        <div className='flex flex-row gap-10 justify-center'>
  {/* 4 */}
        <div>
          <label htmlFor="vehicleDescription" className='font-bold'>Vehicle Details</label>
          <input type="text" id="vehicleDescription" 
          value={vehicleDescription} 
          onChange={(e) => setVehicleDescription(e.target.value)}
          className='w-full text-black pay-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
          />
        </div>
  {/* 5 */}
        <div>
          <label htmlFor="vehiclePhoto" className='font-bold'>Vehicle Photo URL</label>
          <input type="text" id="vehiclePhoto" 
          value={vehiclePhoto} 
          onChange={(e) => setVehiclePhoto(e.target.value)}
          className='w-full text-black pay-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
          />
        </div>
        </div>

{/* break */}

        <div className='flex flex-row gap-10'>
  {/* 6 */}
        <div>
          <label htmlFor="packageH2" className='font-bold'>2 Hours Package</label>
          <input type="number" id="packageH2" 
          value={packageH2} 
          onChange={(e) => setPackageH2(e.target.value)}
          className='w-full text-black pay-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
          />
        </div>
  {/* 7 */}
        <div>
          <label htmlFor="packageH4" className='font-bold'>4 Hours Package</label>
          <input type="number" id="packageH4" 
          value={packageH4} 
          onChange={(e) => setPackageH4(e.target.value)}
          className='w-full text-black pay-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
          />
        </div>
  {/* 8 */}
        <div>
          <label htmlFor="packageH8" className='font-bold'>8 Hours Package</label>
          <input type="number" id="packageH8" 
          value={packageH8} 
          onChange={(e) => setPackageH8(e.target.value)}
          className='w-full text-black pay-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
          />
        </div>
  {/* 9 */}
          <div>
          <label htmlFor="excessHours" className='font-bold'>Excess Hours</label>
          <input type="number" id="excessHours" 
          value={excessHours} 
          onChange={(e) => setExcessHours(e.target.value)}
          className='w-full text-black pay-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
          />
        </div>
  {/* 10 */}
        <div>
          <label htmlFor="vehicleType" className='font-bold'>Excess Mileage</label>
          <input type="number" id="excessMileage" 
          value={excessMileage} 
          onChange={(e) => setExcessMileage(e.target.value)}
          className='w-full text-black pay-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
          />
        </div>
        </div>      

        <div className='flex flex-col justify-center'>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Add
          </button>
        </div>
      </form>
    </div>

    <VehicleUpdateDelete/>
    </div>
  );
};
