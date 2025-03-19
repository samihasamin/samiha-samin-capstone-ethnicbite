import "./HeroSection.scss";
import HeroVideo from "/assets/videos/hero-section-video.mp4";

function HeroSection() {
  return (
    <section className="hero">
      <video autoPlay loop muted className="hero__video">
        <source src={HeroVideo} type="video/mp4" />
        <p>Your browser does not support the video tag</p>
      </video>
      <div className="hero__overlay">
        <div className="hero__overlay-content">
          <h1 className="hero__overlay-content-title">
            Find The Perfect <span>Home Cooked Meals</span> Near You
          </h1>
          <p className="hero__overlay-content-subtitle">
            Enjoy the taste of home, away from home.
          </p>
          <div className="hero__overlay-content-buttons">
            <button
              className="hero__overlay-content-buttons--find"
              aria-label="Find a Home Chef"
            >
              Find a Home Chef
            </button>
            <button
              className="hero__overlay-content-buttons--become"
              aria-label="Become a Home Chef"
            >
              Become a Home Chef
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
