import React from 'react'
import UsersManage from '../Photo/management.png'
import CARS from '../Photo/Cars.png'
import CARS_REPORT from '../Photo/Car Report.png'
import BOOKING from '../Photo/ManageOrder.png'
// import CARS_REPORT from '../Photo/Car Report.png'
// import CARS_REPORT from '../Photo/Car Report.png'


export const AdminDashboard = () => {
  return (
    <div className="w-full fixed justify-center h-screen flex flex-col mt-[-65px] items-center bg-slate-200">

        <div className="w-full flex flex-col mt-[80px]" >
            <p className="text-black text-center text-3xl mt-2 font-LexandExa">ADMIN DASHBOARD</p>
        </div>
{/* 1 */}
        <div className='flex flex-col justify-center my-5'>
            <div className='my-5 flex flex-row gap-x-24'>
            {/* 1.1 */}
                    <a href='/manageUsers'>
                        <button className='items-center flex flex-col p-5 w-[200px] rounded-2xl transition-all duration-200 bg-white shadow-lg hover:bg-orange-200 cursor-pointer'>
                            <img src={UsersManage} alt="User" className='h-32' />
                            <p className='font-semibold text-center'>MANAGE USERS</p>
                        </button>
                    </a>
            {/* 1.2 */}
                    <a href='/managevehicle'>
                        <button className='items-center flex flex-col p-5 w-[200px] rounded-2xl transition-all duration-200 bg-white shadow-lg hover:bg-orange-200 cursor-pointer'>
                            <img src={CARS} alt="User" className='h-32' />
                            <p className='font-semibold text-center'>MANAGE VEHICLE</p>
                        </button>
                    </a>
            {/* 1.3 */}
                        <button className='gap-2 items-center flex flex-col p-5 w-[200px] rounded-2xl transition-all duration-200 bg-white shadow-lg hover:bg-orange-200 cursor-pointer'>
                            <img src={CARS_REPORT} alt="User" className='h-32' />
                            <p className='font-semibold text-center'>REPORTS</p>
                        </button>
            </div>
{/* 2 */}
            <div className='my-5 flex flex-row gap-x-24'>
            {/* 2.1 */}
                <a href='/manageBooking'>
                        <button className='items-center flex flex-col p-5 w-[200px] rounded-2xl transition-all duration-200 bg-white shadow-lg hover:bg-orange-200 cursor-pointer'>
                            <img src={BOOKING} alt="User" className='h-32' />
                            <p className='font-semibold text-center'>BOOKING MANAGE</p>
                        </button>
                </a>
            {/* 2.2 */}
                {/* <button className='items-center flex flex-col p-5 w-[200px] rounded-2xl transition-all duration-200 bg-white shadow-lg hover:bg-orange-200 cursor-pointer'>
                    <img src={CARS} alt="User" className='h-32' />
                    <p className='font-semibold text-center'>MANAGE VEHICLE</p>
                </button> */}
            {/* 2.3 */}
                {/* <button className='gap-2 items-center flex flex-col p-5 w-[200px] rounded-2xl transition-all duration-200 bg-white shadow-lg hover:bg-orange-200 cursor-pointer'>
                    <img src={CARS_REPORT} alt="User" className='h-28' />
                    <p className='font-semibold text-center'>REPORTS</p>
                </button> */}
            </div>
        </div>

    </div>
  )
};