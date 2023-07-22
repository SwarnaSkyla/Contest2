import React,{useState} from "react";
import axios from "axios";
import BookList from "./Components/BookList";
import BookDetail from "./Components/BookDetail";
import Navbar from "./Components/NavBar";

const App=()=>{
    const [books,setBooks]=useState([]);
    const [selectedBook,setSelectedBook]=useState(null);
    const fetchBooks=(query)=>{
        axios
          .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
          .then((response)=>{
            if(response.data.items){
                setBooks(response.data.items);
            }
            else{
                setBooks([]);
            }
          })
          .catch((error)=>{
            console.error("Error fetching books: ",error);
          });

    };
    const handleBook=(book)=>{
        selectedBook(book);
    };

    const handleClose=()=>{
        setSelectedBook(null);
    };

    return(
        <div>
            <h1>Bookstore</h1>
            <Navbar onSearch={fetchBooks}/>
            {selectedBook?(<BookDetail book={selectedBook} onClose={handleClose}/>):(<BookList books={books} onBookClick={handleBook}/>)}
        </div>
    );

};

export default App;

// const App = () => {
//   const [books, setBooks] = useState([]);
//   const [selectedBook, setSelectedBook] = useState(null);

//   const fetchBooks = (query) => {
//     axios
//       .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
//       .then((response) => {
//         if (response.data.items) {
//           setBooks(response.data.items);
//         } else {
//           setBooks([]);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching books:", error);
//       });
//   };

//   const handleBookClick = (book) => {
//     setSelectedBook(book);
//   };

//   const handleCloseBookDetail = () => {
//     setSelectedBook(null);
//   };

//   return (
//     <div>
//       <h1>Online Bookstore</h1>
//       <Navbar onSearch={fetchBooks} />
//       {selectedBook ? (
//         <BookDetail book={selectedBook} onClose={handleCloseBookDetail} />
//       ) : (
//         <BookList books={books} onBookClick={handleBookClick} />
//       )}
//     </div>
//   );
// };

// export default App;
