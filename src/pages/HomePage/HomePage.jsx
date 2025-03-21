import "./HomePage.scss";
import HeroSection from "../../components/HeroSection/HeroSection";
import CuisineCarousel from "../../components/CuisineCarousel/CuisineCarousel";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import SmashHits from "../../components/SmashHits/SmashHits";
import DiscountBanner from "../../components/DiscountBanner/DiscountBanner";
import Testimonials from "../../components/Testimonials/Testimonials";

function HomePage() {
  return (
    <>
      <HeroSection />
      <CuisineCarousel />
      <HowItWorks />
      <SmashHits />
      <DiscountBanner />
      <Testimonials />
    </>
  );
}

export default HomePage;
