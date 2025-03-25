import "./CatererCard.scss";
import Email from "../../assets/icons/mail.svg";
import Phone from "../../assets/icons/phone-call.svg";

function CatererCard({ profilePicture, name, cuisine }) {
  return (
    <section className="caterer-card">
      <div className="caterer-card__container">
        <img
          className="caterer-card__container-pic"
          src={profilePicture}
          alt={name}
        />
        <div className="caterer-card__container-contact">
          <img
            src={Email}
            alt="Email Icon"
            className="caterer-card__container-contact--email"
          />
          <img
            src={Phone}
            alt="Phone Icon"
            className="caterer-card__container-contact--phone"
          />
        </div>
      </div>
      <h3 className="caterer-card__name">{name}</h3>
      <p className="caterer-card__cuisine">{cuisine}</p>
    </section>
  );
}

export default CatererCard;
