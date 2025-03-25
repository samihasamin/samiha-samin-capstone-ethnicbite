import "./MealsOffered.scss";
import { useNavigate } from "react-router-dom";

function MealsOffered({ meals, cartItems, setCartItems }) {
  const navigate = useNavigate();

  const handleAddCart = (meal) => {
    if (!meal.price) {
      console.log("Meal price is missing", meal);
      return;
    }
    console.log("Adding to cart:", meal);
    setCartItems([...cartItems, meal]);
  };

  return (
    <section className="meals-offered">
      <h2 className="meals-offered__title">Meals Offered</h2>
      <div className="meals-offered__grid">
        {meals.map((meal) => (
          <div key={meal.id} className="meals-offered__grid-card">
            <div className="meals-offered__grid-card-image">
              <img src={`/assets/images/${meal.image_url}`} alt={meal.name} />
            </div>
            <h3
              className="meals-offered__grid-card-name"
              onClick={() => handleAddCart(meal)}
            >
              {meal.name}
            </h3>
            <p className="meals-offered__grid-card-price">
              ${Number(meal.price).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
      <button
        className="meals-offered__buttons"
        onClick={() => navigate("/order")}
      >
        Place Order
      </button>
    </section>
  );
}

export default MealsOffered;
