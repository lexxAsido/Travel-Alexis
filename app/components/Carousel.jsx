"use client"
import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const CarouselImages = ({ slides, interval = 3000 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, interval);

      return () => clearInterval(slideInterval);
    }, [slides.length, interval]);

    return (
      <div className='flex justify-center flex-col h-[60rem]'>
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide}`}
          className='w-full min-h-[23rem] object-cover' // Ensures the image has a minimum height and is clear
        />

        <div className='flex justify-center gap-2 mt-5 p-3 items-center'>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 border rounded-full ${currentSlide === index ? 'bg-black' : 'bg-red-500'}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    );
  };

  const images = [
    'christtheredeemer.jpeg',
    'p7.jpg',
    'p12.jpg',
    'p4.jpg',
    'p5.jpg',
    'p6.jpg',
    'bg2.jpg',
    'eiffeltower3.jpg'
  ];

  return (
    <main className='bg-black'>
      <CarouselImages slides={images} interval={2000} />
    </main>
  );
}


export default Carousel;