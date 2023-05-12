import "./searchBooks.css";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  sortBooksList,
  sortCategoriesList,
} from "../../../../shared/constants";
import Input from "../../../../shared/input/input";
import Select from "../../../../shared/select/select";
import {
  searchBook,
  sortBooksListAction,
  sortBooksOfCategories,
} from "../../api/actions/booksAction";

const SearchBooks = () => {
  const dispatch = useDispatch();
  const [sortOfCategories, setSortOfCategories] = useState("all");
  const [sortBooksListState, setSortBooksListState] = useState("relevance");
  const [searchBookInput, setSearchBookInput] = useState("");

  const clickSortOfCategoriesHalper = (categories) => {
    setSortOfCategories(categories);
  };

  const clickSortBooksList = (param) => {
    setSortBooksListState(param);
  };

  const changeSearchBookHalper = (e) => {
    let inputValue = e.target.value;
    setSearchBookInput((prev) => (prev = inputValue));
  };

  const sendSearchBook = (e) => {
    dispatch(searchBook(searchBookInput));
  };

  const keyDownHalper = (e) => {
    const key = e.key;
    if (key === "Enter") {
      dispatch(searchBook(searchBookInput));
    }
  };

  useEffect(() => {
    dispatch(sortBooksOfCategories(sortOfCategories));
  }, [sortOfCategories]);

  useEffect(() => {
    dispatch(sortBooksListAction(sortBooksListState));
  }, [sortBooksListState]);

  return (
    <div className="search-books-wrapper">
      <div className="book-search-wrapper" onKeyDown={keyDownHalper}>
        <Input
          onChangeFunction={changeSearchBookHalper}
          value={searchBookInput}
        />
        <div className="search-books-img-wrapper" onClick={sendSearchBook}>
          <img src="./images/search-icon.png" alt="serach-icon" />
        </div>
      </div>

      <div className="book-sort">
        <Select
          list={sortCategoriesList}
          title={sortOfCategories}
          clickFn={clickSortOfCategoriesHalper}
        />
        <Select
          title={sortBooksListState}
          list={sortBooksList}
          clickFn={clickSortBooksList}
        />
      </div>
    </div>
  );
};

export default SearchBooks;
