import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler=(e)=>{
        e.preventDefault();
    }
  return (
    <div className='text-center mt-10'>
        <p className='text-2xl font-medium text-gray-700'>Subscribe now & get 10% off</p>
        <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <form onSubmit={onSubmitHandler}className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border'>
            <input className='w-full flex-1 outline-none' type="email" placeholder='Enter your email' required/>
            <button className='bg-black text-white text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox