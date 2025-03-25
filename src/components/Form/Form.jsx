import { useState } from "react";
import "./Form.scss";
import axios from "axios";
import ApiService from "../../api/ApiService";

function Form({ catererId, setReviews }) {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState({});

  const stars = [1, 2, 3, 4, 5];

  const handleRating = (value) => {
    setRating(value);
  };

  const BASE_URL = import.meta.env.VITE_API_URL;

  const handleError = () => {
    const errorObject = {};
    if (!name) {
      errorObject.name = "Name is required!";
    }
    if (!comment) {
      errorObject.comment = "Comment is required!";
    }

    setError(errorObject);

    return Object.keys(errorObject).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      caterer_id: catererId,
      meal_seeker_name: name || "Anonymous",
      rating,
      review: comment,
    };

    const isValid = handleError();
    if (!isValid) return;

    try {
      await axios.post(`${BASE_URL}/reviews`, newReview);

      const updatedData = await ApiService.getCatererById(catererId);
      setReviews(updatedData.reviews);

      setName("");
      setComment("");
      setRating(0);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <section className="form">
      <h1 className="form__title">Leave a Review</h1>
      <form className="form__fields" onSubmit={handleSubmit}>
        <div className="form__fields-nameinput">
          <label className="form__fields-nameinput-label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className={`form__fields-nameinput-name ${
              error.name ? "error-border" : ""
            }`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error.name && <p className="form__error">{error.name}</p>}
        </div>
        <div className="form__fields-commentinput">
          <label className="form__fields-commentinput-label" htmlFor="comment">
            Comment
          </label>
          <textarea
            name="comment"
            id="comment"
            className={`form__fields-commentinput-comment ${
              error.comment ? "error-border" : ""
            }`}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          {error.comment && <p className="form__error">{error.comment}</p>}
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
        <div className="form__fields-button">
          <button type="submit" className="form__fields-button-submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
