import React from "react";
import Wrapper from "./Wrapper";
import { UseNewsContext } from "../context/NewsContext";

const Navbar = () => {
  const { fetchNews, setNews } = UseNewsContext();

  const searchNews = async (e) => {
    const searchValue = e.target.value;

    if (!searchValue.trim()) return;

    const data = await fetchNews(searchValue);

    setNews(data.articles);
  };

  return (
    <Wrapper>
      <div className="navbar bg-base-200 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Prem News</a>
        </div>

        <div className="flex gap-2">
          <input
            onChange={searchNews}
            type="text"
            placeholder="Search"
            className="input w-24 md:w-auto"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
