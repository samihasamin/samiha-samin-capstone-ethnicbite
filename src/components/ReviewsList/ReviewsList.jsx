import "./ReviewsList.scss";

function ReviewsList({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return (
      <p className="reviews__empty">
        No reviews yet. Be the first to leave a review!
      </p>
    );
  }

  return (
    <section className="reviews">
      <div className="reviews__title">
        <h2 className="reviews__title-count">{reviews.length} Reviews</h2>
      </div>
      <div className="reviews__section">
        <ul className="reviews__section-list">
          {reviews.map((review, index) => (
            <li key={index} className="reviews__section-list-reviewbox">
              <div className="reviews__section-list-reviewbox-top">
                <p className="reviews__section-list-reviewbox-top-name">
                  {review.meal_seeker_name || "Anonymous"}
                </p>
                <p className="reviews__section-list-reviewbox-top-date">
                  {new Date(review.created_at).toDateString()}
                </p>
              </div>
              <div className="reviews__section-list-reviewbox-rating">
                {Array.from({ length: review.rating }, (_, i) => (
                  <span key={i} className="reviews__star">
                    ⭐
                  </span>
                ))}
              </div>
              <div className="reviews__section-list-reviewbox-review">
                <p className="reviews__section-list-reviewbox-review-text">
                  {review.review}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ReviewsList;
