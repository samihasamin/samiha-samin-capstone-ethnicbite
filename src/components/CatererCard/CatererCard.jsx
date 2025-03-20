import "./CatererCard.scss";

function CatererCard({ profilePicture, name, cuisine }) {
  return (
    <section className="caterer-card">
      <img
        className="caterer-card__pic"
        src={profilePicture}
        alt={name}
        style={{
          width: "250px",
          height: "250px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <h3 className="caterer-card__name">{name}</h3>
      <p className="caterer-card__cuisine">{cuisine}</p>
      <div className="caterer-card__contact-icons">
        {/* Icons will be added here when provided */}
      </div>
    </section>
  );
}

export default CatererCard;
