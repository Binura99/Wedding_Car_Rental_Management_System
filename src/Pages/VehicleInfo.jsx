import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CalendarBox } from '../Components/Calendar';


export const VehicleInfo = () => {

    let { id } = useParams();
    const [vehicleObject, setVehicleObject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/vehicles/byId/${id}`).then((response) => {
        setVehicleObject(response.data);
    });
    },[id]);

  return (
    
    <div className="w-full relative h-screen flex flex-col mt-[-65px] items-center bg-slate-200">

        <div className="w-full flex flex-col mt-[80px]" >
            <p className="text-black text-center text-3xl mt-2 font-LexandExa">VEHICLE INFO</p>
        </div>

        <div className="flex justify-center mt-5 rounded-xl max-w-4xl mx-auto grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
            <div className="md:shrink-0 ">
                <img className="w-full h-64 object-cover rounded-lg md:h-72" src={vehicleObject.vehiclePhoto} alt="Luxury Vehicle"/>
            </div>
            <div className='flex flex-col'>
                <div className='flex justify-center'>
                    <p className='text-lg md:text-3xl font-semibold text-indigo-500'>{vehicleObject.vehicleType} {vehicleObject.vehicleYear}</p>
                </div>

                <div className='justify-center items-center'>
                    <CalendarBox/>
                </div>
            </div>   
        </div>

        <div className='flex flex-col justify-center'>
            <p className='text-slate-500 text-base'>Descripction - {vehicleObject.vehicleDescription}</p>
            <p className='text-slate-500 text-base'>2 Hours & 30KM - {vehicleObject.packageH2}</p>
            <p className='text-slate-500 text-base'>4 Hours & 40KM - {vehicleObject.packageH4}</p>
            <p className='text-slate-500 text-base'>8 Hours & 80KM - {vehicleObject.packageH8}</p>
            <p className='text-slate-500 text-base'>Excess Hours - {vehicleObject.excessHours}</p>
            <p className='text-slate-500 text-base'>Excess Mileage - {vehicleObject.excessMileage}</p>
        </div>

    </div>
  )
};