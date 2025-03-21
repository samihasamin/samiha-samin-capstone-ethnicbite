import "./CatererProfile.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ApiService from "../../api/ApiService";
import AboutMe from "../../components/AboutMe/AboutMe";
import CatererCard from "../../components/CatererCard/CatererCard";
import MealsOffered from "../../components/MealsOffered/MealsOffered";
import Form from "../../components/Form/Form";
import ReviewsList from "../../components/ReviewsList/ReviewsList";

function CatererProfile() {
  const { id } = useParams();
  const [caterer, setCaterer] = useState(null);

  useEffect(() => {
    async function fetchCatererData() {
      try {
        const response = await ApiService.getCatererById(id);
        console.log("Fetched Caterer Data:", response);
        setCaterer(response);
      } catch (error) {
        console.error("Error fetching caterer data:", error);
      }
    }
    fetchCatererData();
  }, [id]);

  if (!caterer) return <p>Loading...</p>;

  return (
    <>
      <AboutMe bio={caterer.aboutMe?.bio} />
      <CatererCard
        profilePicture={caterer.profilePicture?.photo_url}
        name={caterer.name}
        cuisine={caterer.cuisine}
      />
      <MealsOffered meals={caterer.meals} />
      <Form />
      <ReviewsList reviews={caterer.reviews} />
    </>
  );
}

export default CatererProfile;
