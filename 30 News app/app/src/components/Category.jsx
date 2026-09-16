import React from "react";
import Wrapper from "./Wrapper";

const Category = ({ className }) => {
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <Wrapper>
      <div
        className={`max-w-full w-fit m-auto flex overflow-x-auto px-4 scrollbar-none gap-2 ${className}`}
      >
        {categories.map((category) => {
          return (
            <button key={category} className="btn btn-primary">
              {category}
            </button>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Category;
