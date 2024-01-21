"use client"
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import totalUsers from '../../../public/assets/images/totalUsers.png';
import totalMale from '../../../public/assets/images/totalMale.png';
import totalFemale from '../../../public/assets/images/totalFemale.png';
import totalVisitors from '../../../public/assets/images/totalVisitors.png';
import Image from 'next/image';
import './DashboardNumbers.scss'


register();

const DashboardNumbers = () => {


  return (
    <>
    <div className='main-container-num'>
    <Image className='img' height='auto' width='auto' src={totalUsers}  alt='user' />
    <Image className='img'  height='auto' width='auto'  src={totalMale}  alt='user' />
    <Image className='img'  height='auto' width='auto' src={totalFemale}  alt='user' />
    <Image className='img'  height='auto' width='auto' src={totalVisitors}  alt='user' />
    </div>
    <div className='mobile-container'>
    <div className='mobile'>
    <Image className='img' height='auto' width='auto' src={totalUsers}  alt='user' />
    <Image className='img'  height='auto' width='auto'  src={totalMale}  alt='user' />
    <Image className='img'  height='auto' width='auto' src={totalFemale}  alt='user' />
    <Image className='img'  height='auto' width='auto' src={totalVisitors}  alt='user' />
    </div>
    </div>
    
    
    </>
  );
};

export default DashboardNumbers;
