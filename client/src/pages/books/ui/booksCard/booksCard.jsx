import "./booksCard.css";
import { useSelector } from "react-redux";
import Card from "../../../../shared/card/card";

const BooksCard = () => {
  const allBooks = useSelector((state) => state.books.items);

  return (
    <div className="book-card-wrapper">
      {allBooks &&
        allBooks?.map((bookItem, i) => (
          <Card
            key={bookItem.id}
            bookImg={bookItem?.volumeInfo?.imageLinks?.thumbnail}
            bookTitle={bookItem?.volumeInfo?.title}
            categories={bookItem?.volumeInfo?.categories?.[0]}
            authors={bookItem?.volumeInfo?.authors}
            description={bookItem?.volumeInfo?.description}
            cardId={bookItem.id}
            descriptionToggle={false}
          />
        ))}
    </div>
  );
};

export default BooksCard;
