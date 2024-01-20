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

// Register Swiper custom elements
register();

const DashboardNumbers = () => {
//   const swiperElRef = useRef(null);

//   useEffect(() => {
//     // Listen for Swiper events using addEventListener
//     swiperElRef.current.addEventListener('swiperprogress', (e) => {
//       const [swiper, progress] = e.detail;
//       console.log(e.detail)
//       console.log(progress);
//     });

//     swiperElRef.current.addEventListener('swiperslidechange', () => {
//       console.log('slide changed');
//     });
//   }, [navigator]);

  return (
    <>
    <div className='main-container-num'>
    <Image className='img' height='auto' width='auto' src={totalUsers}  alt='user' />
    <Image className='img'  height='auto' width='auto'  src={totalMale}  alt='user' />
    <Image className='img'  height='auto' width='auto' src={totalFemale}  alt='user' />
    <Image className='img'  height='auto' width='auto' src={totalVisitors}  alt='user' />
    </div>
    {/* <div className='mobile-container'>
        <Swiper
      ref={swiperElRef}
      spaceBetween={30}
      slidesPerView={1.3}
     
    >
        
       <SwiperSlide>
       <Image height='auto' src={totalUsers} width='auto' alt='user' />
       </SwiperSlide>
       <SwiperSlide>
       <Image height='auto' src={totalMale} width='auto' alt='user' />
       </SwiperSlide>
       <SwiperSlide>
       <Image height='auto' src={totalFemale} width='auto' alt='user' />
       </SwiperSlide>
       <SwiperSlide>
       <Image height='auto' src={totalVisitors} width='auto' alt='user' />
       </SwiperSlide>
     
      
    </Swiper>
    </div> */}
    
    </>
  );
};

export default DashboardNumbers;
