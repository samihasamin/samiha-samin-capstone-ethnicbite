import "./MealsOffered.scss";
import { useNavigate } from "react-router-dom";

function MealsOffered({ meals, cartItems, setCartItems }) {
  const navigate = useNavigate();

  const handleAddCart = (meal) => {
    if (!meal.price) {
      console.log("Meal price is missing", meal);
      return;
    }
    const updatedMeal = {
      ...meal,
      image_url: `/assets/images/${meal.image_url}`,
    };
    console.log("Adding to cart:", meal);
    setCartItems([...cartItems, updatedMeal]);
  };

  return (
    <section className="meals-offered">
      <h2 className="meals-offered__title">Meals Offered</h2>
      <div className="meals-offered__grid">
        {meals.map((meal) => (
          <div key={meal.id} className="meals-offered__grid-card">
            <div className="meals-offered__grid-card-image">
              <img
                src={`/assets/images/${meal.image_url}`}
                alt={meal.name}
                onClick={() => handleAddCart(meal)}
              />
            </div>
            <h3 className="meals-offered__grid-card-name">{meal.name}</h3>
            <p className="meals-offered__grid-card-price">
              ${Number(meal.price).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
      <div className="meals-offered__actions">
        <button
          className="meals-offered__actions-order"
          onClick={() => navigate("/order")}
        >
          Place Order
        </button>
      </div>
    </section>
  );
}

export default MealsOffered;
