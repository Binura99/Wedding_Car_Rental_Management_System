import logoBlack from '../Photo/Logo_Black.png'
import Menu_Logo from '../Photo/Menu_Logo.svg'

export const NavBar = () => {
return(
    
    <div className=' flex drop-shadow relative mt-4 rounded-xl h-fit mx-4 items-center justify-between bg-[#d8d8d8] z-50 '>
        
        {/* Left */}
        <div className='flex w-full h-full my-2 p-1 space-x-3 ml-7 gap-2'>
            <img src={Menu_Logo} alt="menulogo" className='h-6 object-contain cursor-pointer md:hidden flex hover:bg-[#c4c4c4] rounded-lg'/>
            <img src={logoBlack} alt="companylogo" className='h-6 object-contain items-center' />
        </div>

        {/* Right */}

        <div className='w-full h-full font-semibold flex'>
            
            <ul className='hidden md:flex items-center space-x-14 mr-7 '>

                <a href='/' className='w-11/12 text-black my-2 rounded-3xl p-1 text-center flex transition-all duration-200 hover:bg-[#CCB195] hover:text-white cursor-pointer justify-center items-center'>
                <li >
                    HOME 
                </li></a>

                <a href='/vehicle' className='w-11/12 text-black my-2 rounded-3xl p-1 text-center flex transition-all duration-200 hover:bg-[#CCB195] hover:text-white cursor-pointer justify-center items-center'> 
                <li >
                    VEHICE 
                </li></a>

                <a href='/rates' className='w-11/12 text-black my-2 rounded-3xl p-1 text-center flex transition-all duration-200 hover:bg-[#CCB195] hover:text-white cursor-pointer justify-center items-center'> 
                <li >
                    RATES 
                </li></a>

                <a href='/bookNow' className='w-11/12 text-black whitespace-nowrap my-2 rounded-3xl p-1 text-center flex transition-all duration-200 hover:bg-[#CCB195] hover:text-white cursor-pointer justify-center items-center'> 
                <li >
                    BOOK NOW 
                </li></a>

                <a href='/login' className='w-11/12 text-black my-2 rounded-3xl p-1 text-center flex transition-all duration-200 hover:bg-[#CCB195] hover:text-white cursor-pointer justify-center items-center'> 
                <li >
                    LOGIN 
                </li></a>
                
            </ul>
            
        </div>
        
    </div>
)
}