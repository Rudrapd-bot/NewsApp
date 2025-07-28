import image from '../assets/news.jpg'
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card text-light bg-gradient bg-dark mb-4 shadow-lg border border-secondary rounded-4 overflow-hidden" 
         style={{ maxWidth: "100%", width: "20rem", transition: "transform 0.3s ease-in-out" }}>
      
      {/* Image */}
      <img
        src={src?src:image || "https://via.placeholder.com/360x200"}
        className="card-img-top img-fluid"
        alt="News"
        style={{ height: "200px", objectFit: "cover", borderBottom: "1px solid #444" }}
      />

      {/* Card Body */}
      <div className="card-body d-flex flex-column justify-content-between" style={{ minHeight: "220px" }}>
        <h5 className="card-title fw-semibold text-warning">{title?.slice(0, 60) || "No Title"}</h5>

        <p className="card-text text-muted small">
          {description ? description.slice(0, 100) + "..." : "No description available."}
        </p>

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline-warning rounded-pill px-3"
          >
            Read More
          </a>
          <i className="bi bi-arrow-right-circle-fill text-warning fs-5"></i>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
