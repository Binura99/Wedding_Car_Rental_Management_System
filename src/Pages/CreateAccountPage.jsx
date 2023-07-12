import Createbg from '../Photo/Create_Account_bg.jpg';

export const CreateAccount = () => {

        

    return(
        
        <div className="w-full h-screen flex items-center justify-center fixed mt-[-64px] z-0">

                    <div className="relative w-1/2 h-screen bg-fixed hidden md:flex flex-col justify-center ">
                        <img src={Createbg} alt="create account bg" className='object-cover h-full w-full ' />
                    </div>
                    
                <div className='w-1/2 h-full flex flex-col p-40 justify-center items-center bg '>

                    <div className='w-full flex flex-col max-w-[500px] min-w-[300px] mt-[70px] '>              {/*  Login */}
                        <div className='flex flex-col w-full mb-5 whitespace-nowrap z-10'>
                            <h3 className='flex text-4xl font-semibold font-LexandExa justify-center '>CREATE YOUR</h3>
                            <h3 className='flex text-4xl font-semibold font-LexandExa justify-center mb-4 text-[#CCB195]'>ACCOUNT</h3>
                        </div>
                    

                    <div className='w-full flex flex-col '>
                            {/* Name Input */}
                            <label htmlFor="Name" className="text-base font-medium text-gray-900">
                            Name
                            </label>

                            <input 
                            type='text'
                            placeholder='Name'
                            className='w-full text-black pay-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none'/>

                            {/* Email Input */}
                            <label htmlFor="Email" className="text-base font-medium text-gray-900">
                            Email Address
                            </label>

                            <input 
                            type='email'
                            placeholder='Email'
                            className='w-full text-black pay-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none'/>

                            {/* Password Input */}
                            <label htmlFor="Password" className="text-base font-medium text-gray-900">
                            Password
                            </label>

                            <input 
                            type='password'
                            placeholder='Password'
                            className='w-full text-black pay-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none'/>

                            {/* New Password Input */}
                            <label htmlFor="Confirm Password" className="text-base font-medium text-gray-900">
                            Confirm Password
                            </label>

                            <input 
                            type='password'
                            placeholder='Confirm Password'
                            className='w-full text-black pay-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none'/>

                    </div>

                    <div className='w-full flex flex-col'>                                                                      {/*hover:bg-black/80]*/}
                        
                        <button className='w-full text-black font-medium my-2 bg-white border-2 border-[#CCB195] rounded-3xl p-2 text-center flex items-center justify-center transition-all duration-200 hover:bg-[#CCB195] hover:text-white cursor-pointer'>
                            CREATE AN ACCOUNT
                        </button>
                    </div>

                    
                    </div>
                </div>
            
        
        </div>
        
    )
};