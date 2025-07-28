import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); // for loader or fallback
  const [error, setError] = useState(null);     // for error handling

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data.articles)) {
          throw new Error("Invalid response structure");
        }

        setArticles(data.articles);
        setError(null); // clear any past errors
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to fetch news articles.");
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-danger text-uppercase">{category}</span> News
      </h2>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      <div className="row">
        {articles.map((news, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center" key={index}>
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
