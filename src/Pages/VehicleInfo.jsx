import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CalendarBox } from '../Components/Calendar';


export const VehicleInfo = () => {

    let { id } = useParams();
    const [vehicleObject, setVehicleObject] = useState({});
    const [vehicleName, setVehicleName] = useState('');
    const [unavailableDates, setUnavailableDates] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/vehicles/byId/${id}`).then((response) => {
        setVehicleObject(response.data);
        setVehicleName(response.data.vehicleType);

        axios.get(`http://localhost:3001/reservations?vehicle=${response.data.vehicleType}`)
        .then((res) => {
          const bookedDates = res.data.map((reservation) => reservation.pDate);
          setUnavailableDates(bookedDates);
        })
        .catch((error) => {
          console.error('Error fetching unavailable dates:', error);
        });
    });
    },[id,vehicleName]);

    

  return (
    
    <div className="w-full h-full flex flex-col mt-[-65px] items-center bg-slate-200">

        <div className="w-full flex flex-col mt-[80px]" >
            <p className="text-black text-center text-3xl mt-2 font-LexandExa">VEHICLE INFO</p>
        </div>

        <div className='flex justify-center my-5 bg-white shadow-lg w-72 rounded-lg'>
            <p className='text-3xl font-semibold text-indigo-500'>{vehicleObject.vehicleType} {vehicleObject.vehicleYear}</p>
        </div>
        {/* max-w-4xl mx-auto grid-cols-1 lg:max-w-5xl md:gap-x-20 lg:grid-cols-2 md:flex-row sm:flex-col */}
        <div className="flex justify-center md:gap-x-10 md:flex-row flex-col">
            <div className="flex justify-center md:shrink-0 ">
                <img className="w-full object-cover rounded-lg h-80" src={vehicleObject.vehiclePhoto} alt="Luxury Vehicle"/>
            </div>
    
            <div className='flex justify-center items-center'>
                <CalendarBox vehicleName={vehicleName}  unavailableDates={unavailableDates} />
            </div>

        </div>

        <div className='flex flex-col justify-center bg-white w-screen mt-5'>
            <h1 className='text-slate-500 text-2xl mt-5 text-center'><u>Option & Price</u></h1>
            <p className='text-slate-500 text-base text-center my-5'>{vehicleObject.vehicleDescription}</p>
            <p className='text-slate-500 text-base text-center'><span className='font-bold'>2 Hours & 30KM</span> - Rs.{vehicleObject.packageH2}</p>
            <p className='text-slate-500 text-base text-center'><span className='font-bold'>4 Hours & 40KM</span> - Rs.{vehicleObject.packageH4}</p>
            <p className='text-slate-500 text-base text-center'><span className='font-bold'>8 Hours & 80KM</span> - Rs.{vehicleObject.packageH8}</p>
            <p className='text-slate-500 text-base text-center'><span className='font-bold'>Excess Hours</span> - Rs.{vehicleObject.excessHours}</p>
            <p className='text-slate-500 text-base text-center mb-5'><span className='font-bold'>Excess Mileage</span> - Rs.{vehicleObject.excessMileage}</p>
        </div>

    </div>
  )
};