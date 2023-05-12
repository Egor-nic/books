import { useNavigate } from "react-router-dom";
import "./card.css";

const Card = ({
  bookImg,
  bookTitle,
  categories,
  authors,
  description,
  descriptionToggle,
  cardId,
}) => {
  const authorsToString = authors ? authors.join(",") : "";
  const navigate = useNavigate();

  const openDescriptionBook = () => {
    if (!descriptionToggle) {
      navigate(`/book-descriptions/${cardId}`);
    }
  };
  return (
    <div className="card-wrapper">
      <div className="card card-img" onClick={openDescriptionBook}>
        <img src={bookImg} alt="card-img" />
      </div>
      <div className="card card-categories">
        <span>{categories ? categories : ""}</span>
      </div>
      <div className="card card-title">
        <span>{bookTitle ? bookTitle : ""}</span>
      </div>
      <div className="card card-authors">
        <span>{authorsToString}</span>
      </div>
      <div className="card card-description">
        <span>{descriptionToggle ? description : ""}</span>
      </div>
    </div>
  );
};

export default Card;
