import LogImage from '../Photo/Login_Image.jpg';
import GIcon from '../Photo/GoogleIcon.png';

//  const colors = {
//      primary: "#060606",
//      background: "#E0E0E0",
//      disbaled: "#D9D9D9"
//  }

export const Login = () => {
    return(
        <div className="w-full h-screen flex items-start">
                    <div className="relative w-1/2 h-screen flex flex-col justify-center ">
                        <img src={LogImage} alt="img1" className='object-cover h-full w-full' />
                    </div>
                <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between '>

                    <div className='w-full flex flex-col max-w-[450px] '>              {/*  Login */}
                        <div w-full className='flex flex-col mb-5'>
                            <h3 className='text-4xl font-semibold mb-4'>Login</h3>
                            <p className='text-base mb-2'>Welcome Back! Please Enter Your Details.</p>
                        </div>
                    

                    <div className='w-full flex '>
                            {/* Email Input */}
                            <label htmlFor="email" className="text-base font-medium text-gray-900">
                            Email Address
                            </label>

                            <input 
                            type='email'
                            placeholder='Email'
                            className='w-full text-black pay-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none'/>

                            {/* Password Input */}
                            <label htmlFor="password" className="text-base font-medium text-gray-900">
                            Password
                            </label>

                            <input 
                            type='password'
                            placeholder='Password'
                            className='w-full text-black pay-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none'/>

                    </div>

                    <div className='w-full flex items-center justify-between'>
                        <div className='w-full flex'>
                            <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forget Password?</p>
                        </div>
                    </div>

                    <div className='w-full flex flex-col'>                                                                      {/*hover:bg-black/80]*/}
                        <button className='w-full text-white font-bold my-2 bg-[#CCB195] rounded-3xl p-2.5 text-center flex items-center justify-center hover:bg-[#caaa88]/80 cursor-pointer'>
                            LOG IN
                        </button>
                        <button className='w-full text-black font-medium my-2 bg-white border-2 border-[#CCB195] rounded-3xl p-2 text-center flex items-center justify-center transition-all duration-200 hover:bg-[#CCB195] hover:text-white cursor-pointer'>
                            CREATE AN ACCOUNT
                        </button>
                    </div>

                    <div className='w-full flex items-center justify-center relative py-2 my-2'>
                        <div className='w-full h-[1px] bg-black'></div>
                        <p className='text-lg absolute text-black/80 bg-[#f5f5f5]'>or</p>   {/*OR Section*/}
                    </div>

                    <div className='flex w-full items-center justify-center'>
                        <p className='text-black font-normal'>Don't You Have Account? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Create Account</span></p>
                    </div>

                    <div className='w-full text-black font-medium my-2 bg-white border-2 border-[#CCB195] rounded-3xl p-2 text-center flex items-center justify-center transition-all duration-200 hover:bg-[#CCB195]  hover:text-white cursor-pointer'>
                        <img src={GIcon} alt='Google_Image' className='h-5 mr-2'/>
                            LOGIN WITH GOOGLE ACCOUNT
                    </div>
                    </div>
                </div>
            
        
        </div>
        
    )
}