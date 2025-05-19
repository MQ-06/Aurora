// Enhanced LessonCarousel with improved arrows and image scaling
import React, { useState, useEffect } from "react";

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const LessonCarousel = ({ lessons }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + lessons.length) % lessons.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % lessons.length);
  };

  if (!lessons || lessons.length === 0) return <p className="text-center">No lessons available.</p>;

  const prevIndex = (currentIndex - 1 + lessons.length) % lessons.length;
  const nextIndex = (currentIndex + 1) % lessons.length;

  const getVisibleIndices = () => {
    if (lessons.length <= 3) return lessons.map((_, i) => i);
    if (currentIndex === 0) return [0, 1, 2];
    if (currentIndex === lessons.length - 1) return [lessons.length - 3, lessons.length - 2, lessons.length - 1];
    return [currentIndex - 1, currentIndex, currentIndex + 1];
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-10 px-4">
      <div className="relative w-full flex items-center justify-center" style={{ minHeight: '600px' }}>
        <div
          className="absolute left-0 w-[40%] max-h-[70%] transform -translate-x-[60%] opacity-10 cursor-pointer flex items-center justify-center"
          onClick={goToPrevious}
        >
          <img src={`http://127.0.0.1:3000${lessons[prevIndex].image_url}`} alt={lessons[prevIndex].title || `Lesson ${prevIndex + 1}`} className="max-w-full max-h-full object-contain rounded-lg" />
        </div>

        <div className="w-[60%] h-auto z-10 flex items-center justify-center">
          <img src={`http://127.0.0.1:3000${lessons[currentIndex].image_url}`} alt={lessons[currentIndex].title || `Lesson ${currentIndex + 1}`} className="max-w-full max-h-[550px] object-contain rounded-xl shadow-xl" />
        </div>

        <div
          className="absolute right-0 w-[40%] max-h-[70%] transform translate-x-[60%] opacity-10 cursor-pointer flex items-center justify-center"
          onClick={goToNext}
        >
          <img src={`http://127.0.0.1:3000${lessons[nextIndex].image_url}`} alt={lessons[nextIndex].title || `Lesson ${nextIndex + 1}`} className="max-w-full max-h-full object-contain rounded-lg" />
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        {getVisibleIndices().map((index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-indigo-600 scale-110 ring-2 ring-indigo-300' : 'bg-gray-300 hover:bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg"
        aria-label="Previous"
      >
        <ChevronLeftIcon />
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg"
        aria-label="Next"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default LessonCarousel;
