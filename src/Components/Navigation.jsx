import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import logoBlack from '../Photo/Logo_Black.png'
import Menu_Logo from '../Photo/Menu_Logo.svg'
import USER from '../Photo/user.png'

export const NavBar = () => {

    // const { contextData } = useContext(AuthContext)
    const navigate = useNavigate();
    const token = localStorage.getItem('accessToken');
    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');


    const handleLogout = () => {
        // Remove the accessToken from localStorage
        localStorage.removeItem('accessToken');
    
        // Redirect to the signIn page
        navigate("/login");
      };

  
    useEffect(() => {
      if (token) {
        try {
          const user = JSON.parse(atob(token.split('.')[1])); // Decoding the JWT payload
          setName(user.name);

          //separate the first name 
          const spaceIndex = user.name.indexOf(' ');
            if (spaceIndex !== -1) {
            const firstName = user.name.substring(0, spaceIndex);
            setFirstName(firstName);
            } else {
            setFirstName(user.name);
            }
        } catch (error) {
          console.error('Error decoding the JWT payload:', error);
          // Handle any error that may occur during decoding
        }
      }
    }, [token]);
    // console.log(name);
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
                    VEHICLE 
                </li></a>

                <a href='/rates' className='w-11/12 text-black my-2 rounded-3xl p-1 text-center flex transition-all duration-200 hover:bg-[#CCB195] hover:text-white cursor-pointer justify-center items-center'> 
                <li >
                    RATES 
                </li></a>

                <a href='/bookNow' className='w-11/12 text-black whitespace-nowrap my-2 rounded-3xl p-1 text-center flex transition-all duration-200 hover:bg-[#CCB195] hover:text-white cursor-pointer justify-center items-center'> 
                <li >
                    BOOK NOW 
                </li></a>


            {token ? (

                <div className='flex flex-row'>
                    
                <a href='/dashboard' className='w-11/12 text-black my-2 rounded-3xl p-1 text-center flex cursor-pointer justify-center items-center'> 
                <li>
                    <span className='font-Lobster'>{firstName}</span>
                </li></a>

                <li  className='w-11/12 text-white my-2 rounded-3xl p-1 bg-[#CCB195] text-center flex transition-all duration-200 hover:text-black cursor-pointer justify-center items-center' onClick={handleLogout}>
                    LOGOUT 
                </li>
                </div>


            ):
            (
                <>
                <a href='/login' className='w-11/12 text-black my-2 rounded-3xl p-1 text-center flex transition-all duration-200 hover:bg-[#CCB195] hover:text-white cursor-pointer justify-center items-center'> 
                <li >
                    LOGIN 
                </li></a>
                </>
            )}


            </ul>
            
        </div>
        
    </div>
)
}