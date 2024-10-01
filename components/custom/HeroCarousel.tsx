"use client";

import image1 from '@/assets/aesehi.png';
import Image from 'next/image';
import { useEffect, useState } from "react";

const Carousel = () => {
  const images = [
    image1,
    image1,
    image1,
    image1,
    image1,
    // Add more images if needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 2 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden h-full">
      <div
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-full"
          >
            <Image src={image} alt={`Slide ${index}`} className="w-full h-full object-cover"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
