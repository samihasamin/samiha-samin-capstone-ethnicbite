import "./Testimonials.scss";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__headline">
        <h2 className="testimonials__headline-title">
          Our Satisfied <span>Customers</span>
        </h2>
        <p className="testimonials__headline-subtitle">
          See what the community is saying
        </p>
      </div>
      <div className="testimonials__cards">
        <div className="testimonials__cards-first">
          <h3 className="testimonials__cards-first--title">
            Authentic Flavors
          </h3>
          <h4 className="testimonials__cards-first--name">Ayesha Rahman</h4>
          <p className="testimonials__cards-first--location">Toronto</p>
          <p className="testimonials__cards-first--review">
            EthnicBite has brought back the flavors of my childhood! The home
            chefs truly understand the essence of traditional cooking. Every
            bite reminds me of home. Highly recommend!
          </p>
          <p className="testimonials__cards-first--stars">⭐⭐⭐⭐⭐</p>
        </div>
        <div className="testimonials__cards-second">
          <h3 className="testimonials__cards-second--title">
            Home-Cooked Goodness
          </h3>
          <h4 className="testimonials__cards-second--name">David Nguyen</h4>
          <p className="testimonials__cards-second--location">Vancouver</p>
          <p className="testimonials__cards-second--review">
            Finally, a service that brings authentic, home-cooked meals to my
            doorstep! The dishes are fresh, delicious, and full of love. It's
            like eating at my grandmother's table again.
          </p>
          <p className="testimonials__cards-second--stars">⭐⭐⭐⭐⭐</p>
        </div>
        <div className="testimonials__cards-third">
          <h3 className="testimonials__cards-third--title">
            Perfect for Busy Days
          </h3>
          <h4 className="testimonials__cards-third--name">Jessica Patel</h4>
          <p className="testimonials__cards-third--location">Calgary</p>
          <p className="testimonials__cards-third--review">
            As a student, I don't always have time to cook. EthnicBite has been
            a lifesaver! The meals are healthy, flavorful, and way better than
            takeout. 10/10 would recommend.
          </p>
          <p className="testimonials__cards-third--stars">⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
