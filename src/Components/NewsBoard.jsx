import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error("Error fetching news:", error));
  }, [category]); // ✅ Correct

  return (
    <div className="container my-4">
      <h2 className='text-center mb-4'>
        Latest <span className="badge bg-danger text-uppercase">{category}</span> News
      </h2>

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
