import "./Testimonials.scss";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials__title">Our Satisfied Customers</h2>
      <p className="testimonials__subtitle">See what the community is saying</p>
      <div className="testimonials__first">
        <h3>Authentic Flavors</h3>
        <h4>Ayesha Rahman</h4>
        <p>Toronto</p>
        <p>
          EthnicBite has brought back the flavors of my childhood! The home
          chefs truly understand the essence of traditional cooking
        </p>
        <p>⭐⭐⭐⭐⭐</p>
      </div>
      <div className="testimonials__second">
        <h3>Home-Cooked Goodness</h3>
        <h4>David Nguyen</h4>
        <p>Vancouver</p>
        <p>
          Finally, a service that brings authentic, home-cooked meals to my
          doorstep! The dishes are fresh, delicious, and full of love. It's like
          eating at my grandmother's table again.
        </p>
        <p>⭐⭐⭐⭐⭐</p>
      </div>
      <div className="testimonials__third">
        <h3>Perfect for Busy Days</h3>
        <h4>Jessica Patel</h4>
        <p>Calgary</p>
        <p>
          As a student, I don't always have time to cook. EthnicBite has been a
          lifesaver! The meals are healthy, flavorful, and way better than
          takeout. 10/10 would recommend.
        </p>
        <p>⭐⭐⭐⭐⭐</p>
      </div>
    </section>
  );
}

export default Testimonials;
