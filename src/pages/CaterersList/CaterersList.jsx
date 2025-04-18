import "./CaterersList.scss";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ApiService from "../../api/ApiService";

function CaterersList() {
  const [caterers, setCaterers] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    async function fetchCaterers() {
      try {
        const response = type
          ? await ApiService.getCaterersByCuisine(type)
          : await ApiService.getCaterers();

        setCaterers(response);
        console.log("Cuisine type from URL:", type);
      } catch (error) {
        console.error("Error fetching caterers:", error);
      }
    }
    fetchCaterers();
  }, [type]);

  return (
    <>
      <section className="caterers-list">
        <h1 className="caterers-list__title">Our Star Chefs</h1>
        <p className="caterers-list__subtitle">
          Creating The Art of Home, Shared Through Food.
        </p>
        <div className="caterers-list__search">
          <input type="text" placeholder="Search home chefs" />
        </div>
        <div className="caterers-list__grid">
          {caterers.map((caterer) => {
            console.log("Image Path:", caterer.photo_url);
            return (
              <Link key={caterer.id} to={`/caterers/${caterer.id}`}>
                <img src={caterer.photo_url} alt={caterer.name} />
                <h3>{caterer.name}</h3>
                <p>{caterer.cuisine} Food</p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default CaterersList;
