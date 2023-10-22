import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Avatar } from 'flowbite-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import {FaStar} from "react-icons/fa6"

import propic from "../assets/saurabh.jpg";



// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-14'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
      <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
           <div className='space-y-6 '>
            <div className='text-amber-500 flex  gap-2'>
               <FaStar/>
               <FaStar/>
               <FaStar/>
               <FaStar/>
            </div>


            <div className='mt-7'>
               <p className='mb-5'>First of all, the store was pretty easy to find, thanks to the giant book sculpture out front. It's like a beacon of literature calling you in. Once inside, I was greeted by rows upon rows of books, stacked from floor to ceiling. It felt a bit overwhelming at first, but I guess that's what bookstores are supposed to be like.</p>
               <Avatar
               alt="avatar of Jese"
               img={propic}
               rounded
               className='w-10 mb-4'
             />
             <h5 className='text-lg font-medium'>Saurabh</h5>
             <p className='text-base'>Developer</p>
            </div>
           </div>
        </SwiperSlide>


        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
           <div className='space-y-6 '>
            <div className='text-amber-500 flex  gap-2'>
               <FaStar/>
               <FaStar/>
               <FaStar/>
               <FaStar/>
            </div>


            <div className='mt-7'>
               <p className='mb-5'>First of all, the store was pretty easy to find, thanks to the giant book sculpture out front. It's like a beacon of literature calling you in. Once inside, I was greeted by rows upon rows of books, stacked from floor to ceiling. It felt a bit overwhelming at first, but I guess that's what bookstores are supposed to be like.</p>
               <Avatar
               alt="avatar of Jese"
               img={propic}
               rounded
               className='w-10 mb-4'
             />
             <h5 className='text-lg font-medium'>Saurabh</h5>
             <p className='text-base'>Developer</p>
            </div>
           </div>
        </SwiperSlide>


        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
           <div className='space-y-6 '>
            <div className='text-amber-500 flex  gap-2'>
               <FaStar/>
               <FaStar/>
               <FaStar/>
               <FaStar/>
            </div>


            <div className='mt-7'>
               <p className='mb-5'>First of all, the store was pretty easy to find, thanks to the giant book sculpture out front. It's like a beacon of literature calling you in. Once inside, I was greeted by rows upon rows of books, stacked from floor to ceiling. It felt a bit overwhelming at first, but I guess that's what bookstores are supposed to be like.</p>
               <Avatar
               alt="avatar of Jese"
               img={propic}
               rounded
               className='w-10 mb-4'
             />
             <h5 className='text-lg font-medium'>Saurabh</h5>
             <p className='text-base'>Developer</p>
            </div>
           </div>
        </SwiperSlide>



        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
           <div className='space-y-6 '>
            <div className='text-amber-500 flex  gap-2'>
               <FaStar/>
               <FaStar/>
               <FaStar/>
               <FaStar/>
            </div>


            <div className='mt-7'>
               <p className='mb-5'>First of all, the store was pretty easy to find, thanks to the giant book sculpture out front. It's like a beacon of literature calling you in. Once inside, I was greeted by rows upon rows of books, stacked from floor to ceiling. It felt a bit overwhelming at first, but I guess that's what bookstores are supposed to be like.</p>
               <Avatar
               alt="avatar of Jese"
               img={propic}
               rounded
               className='w-10 mb-4'
             />
             <h5 className='text-lg font-medium'>Saurabh</h5>
             <p className='text-base'>Developer</p>
            </div>
           </div>
        </SwiperSlide>


        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
           <div className='space-y-6 '>
            <div className='text-amber-500 flex  gap-2'>
               <FaStar/>
               <FaStar/>
               <FaStar/>
               <FaStar/>
            </div>


            <div className='mt-7'>
               <p className='mb-5'>First of all, the store was pretty easy to find, thanks to the giant book sculpture out front. It's like a beacon of literature calling you in. Once inside, I was greeted by rows upon rows of books, stacked from floor to ceiling. It felt a bit overwhelming at first, but I guess that's what bookstores are supposed to be like.</p>
               <Avatar
               alt="avatar of Jese"
               img={propic}
               rounded
               className='w-10 mb-4'
             />
             <h5 className='text-lg font-medium'>Saurabh</h5>
             <p className='text-base'>Developer</p>
            </div>
           </div>
        </SwiperSlide>

        
      </Swiper>
      </div>
    </div>
  )
}

export default Review
