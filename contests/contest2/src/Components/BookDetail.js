import React from "react";


const BookDetail = ({ book, onClose }) => {
  const { volumeInfo } = book;

  return (
    <div className="book-detail">
      <div className="book-detail-header">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
      </div>
      <div className="book-detail-content">
        <img src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title} />
        <h2>{volumeInfo.title}</h2>
        <p>By {volumeInfo.authors.join(", ")}</p>
        <p>{volumeInfo.description}</p>
        <div className="book-links">
          <a href={volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
            Read Now
          </a>
          <a href={volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
