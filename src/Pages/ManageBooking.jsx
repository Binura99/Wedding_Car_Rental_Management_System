import { BookingUpdateDelete } from '../Components/BookingUpdateDelete';

export const ManageBooking = () => {

  return (
    <div className='w-full fixed overflow-scroll h-full flex flex-col mt-[-65px] items-center bg-slate-200'>
        
        <div className="w-full flex flex-col mt-[80px] my-5" >
        <p className="text-black text-center text-3xl mt-2 font-LexandExa">MANAGE BOOKING</p>
        <div className="w-full h-[1px] bg-black my-3"></div>
        </div>

        
        <BookingUpdateDelete/>
        

    </div>
  )
};