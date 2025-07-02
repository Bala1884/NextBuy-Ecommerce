import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img className='mb-5 w-24' src={assets.logo} alt="" />
                <p className='w=full md:w-2/3 etxt-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis nobis libero similique, vel dolorem ratione expedita tenetur debitis provident mollitia perferendis incidunt pariatur impedit voluptate! Facilis eaque et ipsa.</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-6 text-gray-600'>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>DELIVERY</li>
                    <li>PRIVACY POLICY</li>

                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-6 text-gray-600'>
                    <li>+91-8925103647</li>
                    <li>shakthibala1884@gmail.com</li>
                </ul>
            </div>

        </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2025@ nextbuy.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer