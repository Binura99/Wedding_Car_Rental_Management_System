import axios from 'axios';
import Createbg from '../Photo/Create_Account_bg.jpg';
import { useState } from 'react';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const CreateAccount = () => {

    let navigate = useNavigate();
    const [name, setName] = useState('');
    // const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    

    const account = () => {
        const data = { name: name, email: email, password: password, role: "Customer", number: " ",};
        axios.post("http://localhost:3001/auth", data).then((response) => {
          console.log(response.data);
          navigate('/login', { replace: true });
          
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
       
        // Check if the fields are empty
    if (!email || !password || !confirmPassword) {
        setErrorMessage('Please fill in all fields');
        return;
      }
  
      // Check if the password and confirm password match
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match');
        return;
      }

      if (password === confirmPassword) {
        account();
        alert("Successfully Registered")
        return;
      }
  
      // Perform registration logic here
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
  
      // Clear form fields after registration
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrorMessage('');
    };

    // const handleSubmit = (data) => {
    //     axios.post("http://localhost:3001/auth", data).then(() => {
    //     console.log(data);
    //     });
    // };

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
                        
                <form onSubmit={handleSubmit}>
                    <div className='w-full flex flex-col '>
                            {/* Name Input */}
                            <label htmlFor="Name" className="text-base font-medium text-gray-900">
                            Name
                            </label>

                            <input 
                            id='userName'
                            type='text'
                            placeholder='Name'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className='w-full text-black pay-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none'/>

                            {/* Email Input */}
                            <label htmlFor="Email" className="text-base font-medium text-gray-900">
                            Email Address
                            </label>

                            <input 
                            id='email'
                            type='email'
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='w-full text-black pay-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none'/>

                            {/* Password Input */}
                            <label htmlFor="Password" className="text-base font-medium text-gray-900">
                            Password
                            </label>

                            <input 
                            id='password'
                            type='password'
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className='w-full text-black pay-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none'/>

                            {/* New Password Input */}
                            <label htmlFor="Confirm Password" className="text-base font-medium text-gray-900">
                            Confirm Password
                            </label>

                            <input 
                            id='confirmPassword'
                            type='password'
                            placeholder='Confirm Password'
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            className='w-full text-black pay-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none'/>

                    </div>
                

                    <div className='w-full flex flex-col'>                                                                      {/*hover:bg-black/80]*/}
                    {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                        <button type='submit' className='w-full text-black font-medium my-2 bg-white border-2 border-[#CCB195] rounded-3xl p-2 text-center flex items-center justify-center transition-all duration-200 hover:bg-[#CCB195] hover:text-white cursor-pointer'>
                            CREATE AN ACCOUNT
                        </button>
                    </div>

                    </form>
                    
                    </div>
                </div>
            
        
        </div>
        
    )
};