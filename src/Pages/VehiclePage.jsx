import { useNavigate } from 'react-router-dom';
// import Axio from '../Photo/Axio.jpg'
// import Benz from '../Photo/Benz.jpg'
// import BMW from '../Photo/BMW.jpg'
// import BMW318 from '../Photo/BMW318.jpg'

import axios from "axios";
import { useEffect, useState } from 'react';


export const Vehicle = () => {

  const [listOfVehicles, setListOfVehicles] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/vehicles").then((response) => {
      setListOfVehicles(response.data);
    });
  }, []);

  return (
    <div className="w-full relative h-full flex flex-col mt-[-65px] items-center bg-slate-200">

        <div className="w-full flex flex-col mt-[80px]" >
            <p className="text-black text-center text-3xl mt-2 font-LexandExa">VEHICLE</p>
        </div>

        {listOfVehicles.map((value, key) => {
          return(

          <div className="max-w-[700px] w-full mx-auto bg-white my-5 rounded-xl shadow-lg overflow-hidden md:max-w-2xl">

          <div className="md:flex">

            <div className="md:shrink-0"> {/* vehicle photo */}
              <img className="h-48 w-full object-cover md:h-full md:w-48" src={value.vehiclePhoto} alt={value.vehicleType}/>
            </div>

            <div className="p-16 w-full"> {/* vehicle model */}
              <div className="tracking-wide text-3xl text-indigo-500 font-semibold">{value.vehicleType} {value.vehicleYear}</div>
              {/* vehicle Description */}
              <p className="mt-2 text-slate-500">{value.vehicleDescription}</p>

              <button className='w-full text-white font-bold mt-10 bg-[#c4c4c4] rounded-3xl p-2 text-center flex items-center justify-center hover:bg-[#caaa88]/80 cursor-pointer'
              onClick={() => {navigate(`/vehicle/${value.id}`);
              }}>
                View Details
              </button>
            </div>
            
          </div>
        </div>
        )
        })}

    </div>
  )
};