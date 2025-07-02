import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here (form validation, API call, etc.)
    console.log(formData);
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <a href='/'>
        <img src={assets.logo} className='w-24' />
      </a>
      <div className='flex flex-col border border-gray-700 rounded-2xl p-6 w-1/3'>
        <h1 className='text-3xl'>Create an account</h1>

        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-2'>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='border border-gray-800 px-3 rounded-sm'
              required
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Phone number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className='border border-gray-800 px-3 rounded-sm'
              required
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className='border border-gray-800 px-3 rounded-sm'
              required
            />
          </div>
          <input
            type='submit'
            className='border rounded-2xl w-full bg-yellow-400 mt-4'
            value="Sign Up"
          />
        </form>
        <p>By clicking the Sign Up button, you agree to our terms and conditions</p>
        <p className='w-full h-[2px] bg-[#414141]'></p>
       
          <p className=''>Already have an account?</p>
          
        <h2 className='text-xl'>Sign in</h2>
        <a href='/login'>
          <button className='border border-gray-600 w-1/2'>Log In</button>
        </a>
      </div>
    </div>
  )
}

export default Signup
