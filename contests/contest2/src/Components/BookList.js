
import React from "react";

const BookList=({books,onBookClick})=>{

  
  return (
    <div>
      {books.map((book)=>(
        <div key={book.id} onClick={()=>onBookClick(book)}>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
          <h3>{book.volumeInfo.title}</h3>
          <p>{book.volumeInfo.authors.join(", ")}</p>

    </div>
      ))}
    </div>
  );
};

export default BookList;

