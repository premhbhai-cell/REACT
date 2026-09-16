import { createContext, useContext, useState } from "react";
import api from "../config/axios";

const NewContext = createContext();

const NewsContextProvide = ({ children }) => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const response = await api.get(
      `/everything?q=bitcoin&apiKey=${import.meta.env.VITE_API_KEY}`,
    );

    return response.data;
  };

  const value = {
    news,
    setNews,
    fetchNews,
  };

  return <NewContext.Provider value={value}>{children}</NewContext.Provider>;
};

const UseNewsContext = () => {
  return useContext(NewContext);
};

export { NewsContextProvide, UseNewsContext };
