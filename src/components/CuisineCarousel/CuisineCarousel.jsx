import "./CuisineCarousel.scss";
import ApiService from "../../api/ApiService";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LeftArrow from "../../icons/arrow-left.svg?react";
import RightArrow from "../../icons/arrow-right.svg?react";

function CuisineCarousel() {
  const [cuisines, setCuisines] = useState([]);

  const PrevArrow = (props) => (
    <div className="custom-arrow prev" onClick={props.onClick}>
      <LeftArrow className="custom-arrow-icon" />
    </div>
  );

  const NextArrow = (props) => (
    <div className="custom-arrow next" onClick={props.onClick}>
      <RightArrow className="custom-arrow-icon" />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    arrows: true,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 3000, // desktop
        settings: {
          slidesToShow: 4,
          infinite: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 3,
          infinite: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 2,
          infinite: true,
          variableWidth: true,
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
