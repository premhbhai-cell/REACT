import React from "react";
import Wrapper from "./Wrapper";
import api from "../config/axios";
import { UseNewsContext } from "../context/NewsContext";

const Category = ({ className }) => {
  const { setNews } = UseNewsContext();

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const handleClick = async (e) => {
    const category = e.target.value;

    const response = await api.get(
      `/everything?q=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
    );

    setNews(response.data.articles);
  };

  return (
    <Wrapper>
      <div
        className={`max-w-full w-fit m-auto flex overflow-x-auto px-4 scrollbar-none gap-2 ${className}`}
      >
        {categories.map((category) => (
          <button
            key={category}
            value={category}
            onClick={handleClick}
            className="btn btn-primary"
          >
            {category}
          </button>
        ))}
      </div>
    </Wrapper>
  );
};

export default Category;