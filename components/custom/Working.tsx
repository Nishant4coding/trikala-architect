import React, { useState } from "react";
import hero5 from "@/assets/hero3.png";
import Sections from "../Section";

const Working: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: hero5,
      heading: "Heading ",
      description: "Description for the first image.",
    },
    {
      image: hero5,
      heading: "Heading ",
      description: "Description for the second image.",
    },
    {
      image: hero5,
      heading: "Heading",
      description: "Description for the third image.",
    },
    {
      image: hero5,
      heading: "Heading ",
      description: "Description for the fourth image.",
    },
    {
      image: hero5,
      heading: "Heading ",
      description: "Description for the fifth image.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Sections className="max-h-screen w-full mx-auto mt-8 md:mt-16">
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-20">
        <h1 className="text-left text-6xl md:text-6xl lg:text-9xl font-custom flex-none">
          Our method of <br className="md:block hidden" /> working
        </h1>
        <span className="text-sm md:text-xl text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          dolorum nihil tempore corrupti culpa blanditiis, iusto modi nam,
          dignissimos quia enim ipsum ipsa reiciendis provident architecto sequi
          ab nisi commodi?  
        </span>
      </div>
      <div className="relative flex items-left">

        <button
          onClick={prevSlide}
          className="absolute text-2xl text-white right-16 z-10 p-2 bg-custom-lb w-12 h-12 rounded-full"
        >
          &lt;
        </button>
        <div className="flex overflow-hidden w-full justify-center mt-20 lg:gap-5 gap-2">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`relative transition-all duration-100 ease-in-out lg:h-[50vh] h-[25vh] ${
                index === currentIndex ? "w-4/5 " : "w-1/6 "
              }`}
              onClick={() => handleClick(index)}
            >
              <div className={`absolute h-full  bottom-0 left-0  bg-gradient-to-t from-black via-transparent to-transparent bg-opacity-50 text-white w-full flex lg:flex-row flex-col justify-end items-center lg:items-end  ${ currentIndex !== index ? "lg:justify-center" : "lg:justify-between"}`}>
                <h2
                  className={`font-bold p-2  ${
                    currentIndex !== index ? "transform -rotate-90 lg:rotate-0 lg:my-0 my-4" : ""
                  }`}
                >
                  {slide.heading}
                </h2>
                {index === currentIndex && (
                  <p className="text-sm p-2">{slide.description}</p>
                )}
              </div>

              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className={`h-full mx-auto transition-all duration-500 ease-in-out object-cover ${
                  index === currentIndex ? "w-full h-52" : "w-auto"
                }`}
              />
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute text-2xl right-0 z-10 p-2 bg-gray-200 rounded-full w-12 h-12"
        >
          &gt;
        </button>
      </div>
      {/* <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div> */}
      </Sections>
  );
};

export default Working;
