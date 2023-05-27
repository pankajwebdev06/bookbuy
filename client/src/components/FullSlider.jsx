import React, { useState } from "react";

const FullSlider = () => {
  const slides = [
    {
      url: "https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_960_720.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/11/21/16/21/bed-1846251_1280.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2014/08/17/16/33/notebook-420011_1280.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlides = currentIndex === slides.length - 1;
    const newIndex = isLastSlides ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[480px] w-full m-auto pb-16 pt-1 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      {/* Left arrow */}
      <div
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-[35%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      {/* right arrow */}
      <div
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-[35%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="w-2 h-2 rounded-full text-2xl border border-black mr-2 cursor-pointer"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FullSlider;
