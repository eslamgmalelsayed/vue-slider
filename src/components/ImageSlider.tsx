import { useState } from "react";

function ImageSlider() {
  const sliderImages = [
    "https://picsum.photos/id/1/200/300",
    "https://picsum.photos/id/2/200/300",
    "https://picsum.photos/id/3/200/300",
    "https://picsum.photos/id/4/200/300",
    "https://picsum.photos/id/5/200/300",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4 justify-center items-center text-center min-h-svh w-screen">
      <p className="text-muted text-3xl">Slider Image {currentIndex + 1}</p>
      <div className="flex flex-row gap-4 justify-center items-center text-center">
        <button
          className="disabled:opacity-50 !border-0 !outline-none"
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((prevIndex) => prevIndex - 1)}
        >
          Previous
        </button>
        <div className="relative">
          {sliderImages[currentIndex] ? (
            <img
              className="w-90 h-90 object-cover rounded-lg shadow-lg"
              src={sliderImages[currentIndex]}
              loading="lazy"
              alt="slider image"
            />
          ) : (
            <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg shadow-lg w-90 h-90 opacity-0 peer-loading:opacity-100" />
          )}
        </div>
        <button
          className="disabled:opacity-50 !border-0 !outline-none"
          disabled={currentIndex === sliderImages.length - 1}
          onClick={() => setCurrentIndex((prevIndex) => prevIndex + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
