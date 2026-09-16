import React, { useEffect } from "react";
import { UseNewsContext } from "../context/NewsContext";

const News = () => {
  const { news, setNews, fetchNews } = UseNewsContext();

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews();
      setNews(data.articles);
    };

    getNews();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:px-20">
      {news.map((newsDetails, index) => {
        return <NewsCards key={index} details={newsDetails} />;
      })}
    </div>
  );
};

const NewsCards = ({ details }) => {
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure>
        <img
          className="h-52 w-full object-cover"
          src={details?.urlToImage}
          alt={details?.title || "News"}
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{details?.title}</h2>

        <p>{details?.description || "No description available."}</p>

        <div className="text-sm opacity-70">
          <p>
            <strong>Source:</strong> {details?.source?.name || "Unknown"}
          </p>

          <p>
            <strong>Author:</strong> {details?.author || "Unknown"}
          </p>
        </div>

        <div className="card-actions justify-end">
          <a
            href={details?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
