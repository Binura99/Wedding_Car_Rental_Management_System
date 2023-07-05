import Axio from '../Photo/Axio.jpg'

export const Test = () => {
    return(
        
    <div className="w-full relative h-full flex flex-col mt-[-65px] items-center bg-slate-200">

        <div className="w-full flex flex-col mt-[80px]" >
            <p className="text-black text-center text-3xl mt-2 font-LexandExa">VEHICLE</p>
        </div>
        <div className="w-full h-[1px] bg-black my-3"></div>

        <div className="tracking-wide text-3xl mt-2 text-indigo-500 font-semibold">TOYOTA AXIO 2016</div>

        <div className="flex mx-auto justify-center mt-3 rounded-xl">
            <div className="md:shrink-0">
                <img className="object-cover w-1/2 h-auto mx-auto" src={Axio} alt="aaaaa"/>
            </div>
        </div>

        <div className="p-5">
              <p className="mt-2 text-slate-500">A/C, Power Steering, Radio/ USB, Auto</p>

              <button className='w-full text-white font-bold mt-7 bg-[#c4c4c4] rounded-3xl p-2 text-center flex items-center justify-center hover:bg-[#caaa88]/80 cursor-pointer'>
                Book Now
              </button>
            </div>

    </div>
        
    )
};