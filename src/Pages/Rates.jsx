import React, { useEffect, useState } from 'react'
import axios from "axios";


export const Rates = () => {

  // const vehicleData = [
  //   {
  //     vehicleType: '',
  //     vehicleNum: '',
  //     vehicleYear: '',
  //     vehicleDescription: '',
  //     vehiclePhoto: '',
  //     packageH2: '',
  //     packageH4: '',
  //     packageH8: '',
  //     excessHours: '',
  //     excessMileage: '',
  //   },
    
  // ];

  const [listOfVehicles, setListOfVehicles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/vehicles").then((response) => {
      setListOfVehicles(response.data);
    });
  }, []);

  return (

    <div className="w-full relative h-screen  flex flex-col mt-[-65px] items-center  bg-slate-200">

        <div className="w-full flex flex-col mt-[80px]">
            <p className="text-black text-center text-3xl mt-2 font-LexandExa">RATES</p>
        </div>

        <div className="max-w-[700px] w-full mx-auto bg-white my-5 rounded-xl shadow-lg overflow-x-auto md:max-w-3xl">

          <div className='md:flex'>
          
            <table className="min-w-full my-5 bg-white rounded">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-gray-100 border-b">Image</th>
                  <th className="py-2 px-4 bg-gray-100 border-b">Vehicles</th>
                  <th className="py-2 px-4 bg-gray-100 border-b">2 Hours & 30Km</th>
                  <th className="py-2 px-4 bg-gray-100 border-b">4 Hours & 40Km</th>
                  <th className="py-2 px-4 bg-gray-100 border-b">8 Hours & 80Km</th>
                  <th className="py-2 px-4 bg-gray-100 border-b">Excess Hours</th>
                  <th className="py-2 px-4 bg-gray-100 border-b">Excess Mileage</th>
                </tr>
              </thead>
              <tbody>
            {listOfVehicles.map((value, key) => (
                <tr key={value.id}>
                  <td className="py-2 px-4 border-b">
                    <img src={value.vehiclePhoto} alt={value.vehicleType} className="w-10 h-10 rounded-full" />
                  </td>
                    <td className="py-2 px-4 border-b whitespace-nowrap">{value.vehicleType}</td>
                    <td className="py-2 px-4 border-b">{value.packageH2}.00</td>
                    <td className="py-2 px-4 border-b">{value.packageH4}.00</td>
                    <td className="py-2 px-4 border-b">{value.packageH8}.00</td>
                    <td className="py-2 px-4 border-b">{value.excessHours}.00</td>
                    <td className="py-2 px-4 border-b">{value.excessMileage}.00</td>
                </tr>
            ))}
          </tbody>
        </table>
      
      </div>
    </div>

    </div>
    
  )
};