import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='flex justify-center text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At NextBuy, fashion meets convenience in a way that reflects individuality and style. Our story began with a vision to create an online space where people can express themselves through clothing without compromise. Whether you're chasing the latest trends or looking for timeless pieces, we bring together quality, affordability, and a touch of personal flair. From streetwear to ethnic collections, our curated wardrobe is designed to match every mood, occasion, and personality.</p>
          <p>Over time, we've grown into more than just an e-commerce site—we're a community of fashion-forward thinkers who value authenticity and choice. By collaborating with emerging designers and trusted labels, we ensure every piece you find here is crafted with care and purpose. We're not just selling clothes; we're helping you build a style that's entirely your own.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at NextBuy is to make fashion accessible, inclusive, and exciting for everyone. We aim to deliver a smooth and inspiring shopping experience, empowering every customer to look good, feel confident, and express who they truly are.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About