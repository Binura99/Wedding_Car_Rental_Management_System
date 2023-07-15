import LogImage from '../Photo/Login_Image.jpg';
import GIcon from '../Photo/GoogleIcon.png';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Login = () => {

  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    const data = { email: email, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) { alert(response.data.error); } else {
      sessionStorage.setItem("accessToken", response.data);
      navigate('/dashboard', { replace: true });
    }
  });
};

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    
  };

  return (
    <div className="w-full h-screen flex items-center justify-center fixed mt-[-64px]">
      <div className="relative w-1/2 h-screen bg-fixed hidden md:flex flex-col justify-center">
        <img src={LogImage} alt="img1" className='object-cover h-full w-full ' />
      </div>

      <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-40 justify-center mt-[70px] items-center '>
        <div className='w-full flex flex-col max-w-[500px] min-w-[300px] '>
          <div className='flex flex-col w-full mb-5'>
            <h3 className='flex text-5xl font-semibold mb-4 font-LexandExa'>Log<span className='flex font-LexandExa text-[#CCB195]'>in</span></h3>
            <p className='text-base mb-2'>Welcome Back! Please Enter Your Details.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='w-full flex flex-col '>
              <label htmlFor="Email" className="text-base font-medium text-gray-900">
                Email Address
              </label>
              <input
                type='email'
                placeholder='Email'
                className='w-full text-black pay-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none'

                id='userEmail'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />

              <label htmlFor="Password" className="text-base font-medium text-gray-900">
                Password
              </label>
              <input
                type='password'
                placeholder='Password'
                className='w-full text-black pay-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none'

                id='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>

            <div className='w-full flex items-center justify-between'>
              <div className='w-full flex'>
                <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forget Password?</p>
              </div>
            </div>

            <div className='w-full flex flex-col'>
              <button className='w-full text-white font-bold my-2 bg-[#CCB195] rounded-3xl p-2.5 text-center flex items-center justify-center hover:bg-[#caaa88]/80 cursor-pointer'>
                LOG IN
              </button>
              
            </div>
          </form>

            <a href='/createAccount'>
              <button className='w-full text-black font-medium my-2 bg-white border-2 border-[#CCB195] rounded-3xl p-2 text-center flex items-center justify-center transition-all duration-200 hover:bg-[#CCB195] hover:text-white cursor-pointer'>
                  CREATE AN ACCOUNT
              </button>
            </a>

          <div className='w-full flex items-center justify-center relative py-2 my-2'>
            <div className='w-full h-[1px] bg-black'></div>
            <p className='text-lg absolute text-black/80 bg-[#f5f5f5]'>or</p>
          </div>

          <div className='w-full text-black font-medium my-2 bg-white border-2 border-[#CCB195] rounded-3xl p-2 text-center flex items-center justify-center transition-all duration-200 hover:bg-[#CCB195]  hover:text-white cursor-pointer'>
            <img src={GIcon} alt='Google_Image' className='h-5 mr-2' />
            LOGIN WITH GOOGLE ACCOUNT
          </div>
        </div>
      </div>
    </div>
  );
};
