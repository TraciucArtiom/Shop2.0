import React from "react";
import CategoryCard from "./CategoryCard";

import img1 from "../assets/shopcard/1.png";
import img2 from "../assets/shopcard/2.png";
import img3 from "../assets/shopcard/3.png";

const CategoriesGrid = () => {
  return (
    <div className="flex justify-center gap-3 p-5 overflow-x-auto">
      <CategoryCard title="Комплекты" images={[img1, img2, img3]} className="hidden lg:block" /> 
      {/* Скрываем карточку при ширине ≤ 1100px (lg:hidden) */}

      <CategoryCard title="Трендовые" images={[img2, img3, img1]} />
      <CategoryCard title="Эстетика" images={[img3, img1, img2]} />
    </div>
  );
};

export default CategoriesGrid;
