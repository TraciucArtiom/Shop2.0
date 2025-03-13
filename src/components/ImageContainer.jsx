import React from "react";
import leftImage from "../assets/images/left.png";
import rightImage from "../assets/images/right.png";
import UltimateSale from "./UltimateSale"; // Импортируем компонент UltimateSale  

const ImageContainer = () => {
  return (
    <div className="flex items-center w-full h-full bg-white relative">
      {/* Левое изображение с уменьшением размера и смещением */}
      <img
        src={leftImage}
        alt="Left"
        className="w-[345px] h-[585px] object-cover absolute left-10 xl:left-20 2xl:left-60 z-20 rounded-lg 
        transition-all duration-300 hidden xl:block" // Прячем при ширине ≤ 1200px
      />

      {/* Контейнер с содержимым UltimateSale */}
      <UltimateSale />

      {/* Правое изображение с уменьшением размера и смещением */}
      <img
        src={rightImage}
        alt="Right"
        className="w-[345px] h-[585px] object-cover absolute right-10 xl:right-20 2xl:right-60 z-20 rounded-lg 
        transition-all duration-300 hidden xl:block" // Прячем при ширине ≤ 1200px
      />
    </div>
  );
};

export default ImageContainer;
