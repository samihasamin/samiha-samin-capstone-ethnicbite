import "./AboutMe.scss";

function AboutMe({ bio }) {
  return (
    <section className="about-me">
      <div className="about-me__content">
        <h2 className="about-me__content-title">About Me</h2>
        <p className="about-me__content-bio">{bio}</p>
      </div>
    </section>
  );
}

export default AboutMe;
