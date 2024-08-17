import React, { useState } from "react";

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/Linen banner men.webp",
    "/images/Linen banner women.webp",
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute block w-full transition-opacity duration-700 ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        onClick={prevSlide}
      >
        <span className="bg-gray-800 text-white p-2 rounded-full">
          &lt;
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        onClick={nextSlide}
      >
        <span className="bg-gray-800 text-white p-2 rounded-full">
          &gt;
        </span>
      </button>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-300"
            }`}
            aria-current={currentIndex === index}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Banner;
