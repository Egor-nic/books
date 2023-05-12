import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stepPagination } from "../../shared/constants";
import { getBooks, getMoreBooks } from "./api/actions/booksAction";
import "./index.css";
import BooksCard from "./ui/booksCard/booksCard";
import SearchBooks from "./ui/searchBooks/searchBooks";

const SearchBooksPages = () => {
  const allBooks = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const getMoreBooksHalper = () => {
    let lengthBookPage = allBooks?.items?.length + stepPagination;
    dispatch(getMoreBooks(lengthBookPage));
  };

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <>
      <div className="books-search-sort">
        <SearchBooks />
      </div>
      <div className="total-page">
        <span>Total books: {allBooks.totalItems}</span>
      </div>
      <div className="container">
        <BooksCard />
      </div>
      <div className="next-page">
        <span onClick={getMoreBooksHalper}>{`More =>>`}</span>
      </div>
    </>
  );
};

export default SearchBooksPages;
