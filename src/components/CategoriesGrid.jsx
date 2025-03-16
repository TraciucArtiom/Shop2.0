import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import img1 from "../assets/shopcard/1.png";
import img2 from "../assets/shopcard/2.png";
import img3 from "../assets/shopcard/3.png";

const categories = [
  { title: "Комплекты", images: [img1, img2, img3] },
  { title: "Трендовые", images: [img2, img3, img1] },
  { title: "Эстетика", images: [img3, img1, img2] },
];

const CategoriesGrid = () => {
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1200) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (visibleCards < 3 && !isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (categories.length - (visibleCards - 1)));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [visibleCards, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (categories.length - (visibleCards - 1)));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (categories.length - (visibleCards - 1))) % (categories.length - (visibleCards - 1)));
  };

  return (
    <div className="flex justify-center p-5 relative overflow-hidden w-full">
      {visibleCards < 3 ? (
        <div
          className="relative w-full flex justify-center items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex transition-transform duration-700 ease-in-out transform w-full"
               style={{ transform: `translateX(-${currentIndex * 100}%)`, whiteSpace: "nowrap" }}>
            {categories.map((category, index) => (
              <div key={index} className="w-full flex-shrink-0 flex justify-center">
                <CategoryCard title={category.title} images={category.images} />
              </div>
            ))}
          </div>
          <button
            className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300 xl:hidden"
            onClick={handlePrev}
          >
            &lt;
          </button>
          <button
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300 xl:hidden"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      ) : (
        <div className="flex gap-3 w-full justify-center">
          {categories.map((category, index) => (
            <div key={index} className="w-1/3 flex justify-center">
              <CategoryCard title={category.title} images={category.images} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesGrid;
