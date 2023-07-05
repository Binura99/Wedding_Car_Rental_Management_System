import Axio from '../Photo/Axio.jpg'

export const Test = () => {
    return(
        
    <div className="w-full relative h-screen flex flex-col mt-[-65px] items-center bg-slate-200">

        <div className="w-full flex flex-col mt-[80px]" >
            <p className="text-black text-center text-3xl mt-2 font-LexandExa">VEHICLE</p>
        </div>

        <div className="flex mx-auto justify-center mt-5 rounded-xl">
            <div className="md:shrink-0">
                <img className="object-cover w-1/2 h-auto mx-auto" src={Axio} alt="aaaaa"/>
            </div>
        </div>

    </div>
        
    )
};