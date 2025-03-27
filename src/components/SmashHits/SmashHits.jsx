import { useEffect, useState } from "react";
import "./SmashHits.scss";
import ApiService from "../../api/ApiService";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

function SmashHits() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await ApiService.getMeals();
        setMeals(response);
      } catch (error) {
        console.error("Error loading meals:", error);
      }
    };
    fetchMeals();
  }, []);

  return (
    <section className="smash-hits">
      <div className="smash-hits__headline">
        <h3 className="smash-hits__headline-title">
          The <span>EthnicBite Experience</span> - Our Smash Hits!
        </h3>
        <p className="smash-hits__headline-description">
          Discover our most loved meals. Prepared with passion and tradition
        </p>
      </div>
      <div className="smash-hits__meals">
        <ScrollMenu>
          <div className="smash-hits__meals-chingri">
            <img src="/assets/images/chingri.jpg" alt="Chingri Malai" />
            <p>Chingri Malai Curry</p>
          </div>
          <div className="smash-hits__meals-omali">
            <img src="/assets/images/omali.jpg" alt="Omali" />
            <p>Om Ali</p>
          </div>
          <div className="smash-hits__meals-kimchi">
            <img src="/assets/images/kimchi_jjigae.jpg" alt="Kimchi Jjigae" />
            <p>Kimchi Jjigae</p>
          </div>
          <div className="smash-hits__meals-ratatouille">
            <img src="/assets/images/ratatouille.jpg" alt="Ratatouille.jpg" />
            <p>Ratatouille</p>
          </div>
          <div className="smash-hits__meals-mango">
            <img src="/assets/images/mango_rice.jpg" alt="Mango Sticky Rice" />
            <p>Mango Sticky Rice</p>
          </div>
        </ScrollMenu>
      </div>
    </section>
  );
}

export default SmashHits;
