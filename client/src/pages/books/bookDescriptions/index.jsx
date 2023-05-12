import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../../shared/card/card";
import { getOneBook } from "../api/actions/booksAction";

const BookDescriptions = () => {
  const oneBook = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const bookId = useParams();

  useEffect(() => {
    dispatch(getOneBook(bookId?.id));
  }, []);

  return (
    <Card
      bookImg={oneBook?.volumeInfo?.imageLinks?.thumbnail}
      bookTitle={oneBook?.volumeInfo?.title}
      categories={oneBook?.volumeInfo?.categories}
      authors={oneBook?.volumeInfo?.authors}
      description={oneBook?.volumeInfo?.description}
      descriptionToggle={true}
    />
  );
};

export default BookDescriptions;
