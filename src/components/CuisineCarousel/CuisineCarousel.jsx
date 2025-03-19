import "./CuisineCarousel.scss";
import ApiService from "../../api/ApiService";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function CuisineCarousel() {
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    const fetchCuisines = async () => {
      try {
        const response = await ApiService.getCuisines();
        setCuisines(response);
      } catch (error) {
        console.error("Error fetching cuisines:", error);
      }
    };
    fetchCuisines();
  }, []);

  return (
    <section className="cuisine-carousel">
      {cuisines.map((cuisine) => (
        <Link
          to={`/caterers/${cuisine.type.toLowerCase()}`}
          key={cuisine.id}
          className="cuisine-carousel__item"
        >
          <img
            src={`/assets/icons/${cuisine.icon_url}`}
            alt={`${cuisine.name}`}
          />
        </Link>
      ))}
    </section>
  );
}

export default CuisineCarousel;
