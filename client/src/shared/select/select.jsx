import "./select.css";
import { useState } from "react";

const Select = ({ list = [], title, clickFn }) => {
  const [openSelectList, setOpenSelectList] = useState(false);

  const clickItemHalper = (item) => {
    if (item) {
      clickFn(item);
    }
    setOpenSelectList((prev) => !prev);
  };

  return (
    <div className="select-wrapper">
      <div
        className="select-title"
        onClick={() => setOpenSelectList((prev) => (prev = !prev))}
      >
        <span>{title}</span>
        <div className="select-arrow-wrapper">
          <img
            className={`arrow ${openSelectList ? "open" : "close"}`}
            src="./images/arrow.png"
            alt="select-open-icon"
          />
        </div>
      </div>
      {openSelectList && (
        <ul className="select-list">
          {list.map((categories) => (
            <li
              key={categories}
              className="select-item"
              onClick={() => clickItemHalper(categories)}
            >
              {categories}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
