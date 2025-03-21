import "./MealsOffered.scss";
import { useNavigate } from "react-router-dom";

function MealsOffered({ meals }) {
  const navigate = useNavigate();
  return (
    <section className="meals-offered">
      <h2 className="meals-offered__title">Meals Offered</h2>
      <div className="meals-offered__grid">
        {meals.map((meal) => (
          <div key={meal.id} className="meals-offered__grid-card">
            <div className="meals-offered__grid-card-image">
              {/* <img src="/assets/images/placeholder.jpg" alt={meal.name}/> */}
            </div>
            <h3 className="meals-offered__grid-card-name">{meal.name}</h3>
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
