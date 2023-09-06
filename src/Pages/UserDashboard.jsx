import axios from 'axios';
// import Benz from '../Photo/Benz.jpg'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export const UserDashboard = () => {

  const navigate = useNavigate();
  const [listOfReservations, setListOfReservations] = useState([]);


  const token = localStorage.getItem('accessToken');
  const [currentUserId, setCurrentUserId] = useState('');
  const [reservationId, setReservationId] = useState('');

  useEffect(() => {
    if (token) {
      try {
        const user = JSON.parse(atob(token.split('.')[1]));// Decoding the JWT payload
        setCurrentUserId(user.id);
        if(user.role ==='Admin'){
         navigate("/adminDashboard"); 
        } else if (user.role ==='Driver'){
          navigate("/driverDashboard")
        }
      } catch (error) {
        console.error('Error decoding the JWT payload:', error);
        // Handle any error that may occur during decoding
      }
    }
  }, [token, currentUserId]);


  useEffect(( ) => {
    
    axios.get(`http://localhost:3001/reservations/byUserId/${currentUserId}`).then((response) => {
      setListOfReservations(response.data);
      setReservationId(listOfReservations.id)

    });
  }, [currentUserId, reservationId]);


  const handleDelete = (reservationId) => {

    const confirmed = window.confirm("Are you sure you want to delete this reservation?");

    if (confirmed) {
    axios.delete(`http://localhost:3001/reservations/${reservationId}`)
      .then((response) => {

        // Remove the deleted reservation from the frontend state
        setListOfReservations((prevReservations) =>
          prevReservations.filter((reservation) => reservation.id !== reservationId)
        );
        alert("Removed Successfully");
      })
      .catch((error) => {
        console.error("Error deleting reservation:", error);
        alert("Failed to remove the reservation. Please try again later.");
      });
      return;
    }
  };


  return (
    <div className="w-full relative h-full flex flex-col mt-[-65px] items-center bg-slate-200">

    <div className="w-full flex flex-col mt-[80px]" >
        <p className="text-black text-center text-3xl mt-2 font-LexandExa">DASHBOARD</p>
    </div>
    
    <div className='flex justify-center my-5 bg-white shadow-lg w-28 md:w-40 rounded-lg'>
      <p className='lg:text-3xl md:text-2xl text-xl font-semibold text-indigo-500'>My Order</p>
    </div>
{/* Start */}

{listOfReservations.map((value, key) => {
  return(

    <div className="max-w-[700px] w-full mx-auto bg-white mb-3 rounded-xl shadow-lg overflow-hidden md:max-w-2xl">

    <div className="md:flex">


      <div className="p-16 w-full"> {/* vehicle model */}
        <div className="tracking-wide text-3xl text-indigo-500 font-semibold">{value.rVehicle}</div>
        <div className="tracking-wide text-xl text-indigo-500 font-semibold">CCB 1234</div>
        {/* Order Details */}
        <p className="mt-2 text-slate-500">Reservation No: <span className='font-semibold text-black'>{value.id}</span></p>
        <p className="mt-2 text-slate-500">Name: <span className='font-semibold text-black'>{value.name}</span></p>
        <p className="mt-2 text-slate-500">NIC: <span className='font-semibold text-black'>{value.nic}</span></p>
        <p className="mt-2 text-slate-500">Date: <span className='font-semibold text-black'>{value.pDate}</span></p>
        <p className="mt-2 text-slate-500">Time: <span className='font-semibold text-black'>{value.pTime}</span></p>
        <p className="mt-2 text-slate-500">Location: <span className='font-semibold text-black'>{value.pLocation} to {value.dLocation}</span></p>
        <p className="mt-2 text-slate-500">Paid: </p>
        <p className="mt-2 text-slate-500">Driver: <span className='font-semibold text-black'>{value.rDriver}</span></p>
        <p className="mt-2 text-slate-500">Driver Number: <span className='font-semibold text-black'>{value.driverNum}</span></p>
        <p className="mt-2 text-center font-semibold text-sm text-slate-500">Notice <span className='text-red-700'>*</span> - If You Want The Change Details Please Call Our Hotline</p>

        <button className='w-full text-white font-bold mt-10 bg-[#c4c4c4] rounded-3xl p-2 text-center flex items-center justify-center hover:bg-[#caaa88]/80 cursor-pointer'
        onClick={() => handleDelete(value.id)}
        >
          Cancel
        </button>
      </div>
      
    </div>
  </div>
  )
})}

    </div>
  )
};
