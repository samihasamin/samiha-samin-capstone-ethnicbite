import "./HowItWorks.scss";

function HowItWorks() {
  return (
    <section className="howitworks">
      <div className="howitworks__flavor">
        {/* <img src={FlavorIcon} alt="Flavor Icon" /> */}
        <h3>Flavors That Bring Back Memories</h3>
        <p>
          Experience the comforting taste of nostalgia, crafted with love,
          warmth and tenderness.
        </p>
      </div>
      <div className="howitworks__tailor">
        {/* <img src={TailorIcon} alt="Tailor Icon" /> */}
        <h3>Tailored Just For You</h3>
        <p>
          Connect with your favorite chef for your perfect meal. From their
          kitchen to your table, it's all heart.
        </p>
      </div>
      <div className="howitworks__savor">
        {/* <img src={SavorIcon} alt="Savor Icon" /> */}
        <h3>Savor Your Tastebuds</h3>
        <p>
          Made with fresh, high-quality ingredients by our skilled home cooks.
          Ready for pickup and delivery. It's time to dig in.
        </p>
      </div>
    </section>
  );
}

export default HowItWorks;
