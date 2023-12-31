import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const MyCarousel =()=>{
<br/>
    const slides = [
        {
          url: 'https://www.shutterstock.com/image-photo/sprayer-nozzle-sprayed-cabbage-vegetable-260nw-1897146019.jpg',
        },
        {
          url: 'https://ossds.telangana.gov.in/Assets/images/slider2.png',
        },
        {
          url: 'https://www.gardeningknowhow.com/wp-content/uploads/2020/07/seed-planting.jpg',
        },
    
        {
          url: 'https://gujratpesticides.com/wp-content/uploads/2022/06/gujarat-pesticides-company-slider-01-1346x349.jpg',
        },
        {
          url: 'https://thumbs.dreamstime.com/b/young-plant-growing-sunlight-89517487.jpg',
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      useEffect(()=>{
        const timer=setTimeout(()=>{
          if(currentIndex===4){
            setCurrentIndex(0)
          }else{
            setCurrentIndex(currentIndex+1)
          }
        },5000)
        return()=>clearTimeout(timer)
      },[currentIndex])
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
    
      return (
        
        <div className='max-w-5/12 h-[580px] w-full px-0  relative group ' data-carousel="slide" data-te-carousel-init
        data-te-carousel-slide>
          
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-full  bg-center bg-cover duration-500'
          ></div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      );
    }
    

  
export default MyCarousel;