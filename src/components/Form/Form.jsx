import { useState } from "react";
import "./Form.scss";

function Form() {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  const stars = [1, 2, 3, 4, 5];

  return (
    <section className="form">
      <h1 className="form__title">Leave a Review</h1>
      <form className="form__fields">
        <div className="form__fields-nameinput">
          <label className="form__fields-nameinput-label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form__fields-nameinput-name"
          />
        </div>
        <div className="form__fields-commentinput">
          <label className="form__fields-commentinput-label" htmlFor="comment">
            Comment
          </label>
          <textarea
            name="comment"
            id="comment"
            className="form__fields-commentinput-comment"
          />
        </div>
        <div className="form__fields-rating">
          <label className="form__fields-rating-label">
            Please rate your experience
          </label>
          <div className="form__fields-rating-stars">
            {stars.map((star) => (
              <label key={star}>
                <input
                  type="radio"
                  value={star}
                  checked={rating === star}
                  style={{ display: "none" }}
                  onChange={() => setRating(star)}
                />
                <span
                  className={`form__star ${star <= rating ? "selected" : ""}`}
                  onClick={() => handleRating(star)}
                  role="radio"
                  aria-checked={rating === star}
                  aria-label={`${star} stars`}
                  tabIndex="0"
                >
                  ★
                </span>
              </label>
            ))}
          </div>
        </div>
      </form>
      <div className="form__button">
        <button type="submit" className="form__button-submit">
          Submit
        </button>
      </div>
    </section>
  );
}

export default Form;
