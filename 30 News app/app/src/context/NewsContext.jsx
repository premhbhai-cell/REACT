import { createContext, useContext, useState } from "react";
import api from "../config/axios";

const NewContext = createContext();

const NewsContextProvide = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

 const fetchNews = async (query) => {
  setLoading(true);

  try {
    const response = await api.get(
      `/everything?q=${query}&apiKey=${import.meta.env.VITE_API_KEY}`
    );

    return response.data;
  } finally {
    setLoading(false);
  }
};

  const value = {
    news,
    setNews,
    fetchNews,
    loading,
  };

  return <NewContext.Provider value={value}>{children}</NewContext.Provider>;
};

const UseNewsContext = () => {
  return useContext(NewContext);
};

export { NewsContextProvide, UseNewsContext };
