import "./CuisineCarousel.scss";
import ApiService from "../../api/ApiService";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CuisineCarousel() {
  const [cuisines, setCuisines] = useState([]);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

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
      <Slider {...settings} className="cuisine-carousel__slider">
        {cuisines.map((cuisine) => {
          console.log("icon:", cuisine.icon_url);
          return (
            <Link
              // to={`/caterers/${cuisine.type.toLowerCase()}`}
              key={cuisine.id}
              className="cuisine-carousel__slider-item"
            >
              <div className="cuisine-carousel__slider-item-content">
                <img
                  src={`/assets/icons/${cuisine.icon_url}`}
                  alt={cuisine.name}
                />
                <p>{cuisine.name}</p>
              </div>
            </Link>
          );
        })}
      </Slider>
    </section>
  );
}

export default CuisineCarousel;
