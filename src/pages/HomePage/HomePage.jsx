import "./HomePage.scss";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import CuisineCarousel from "../../components/CuisineCarousel/CuisineCarousel";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <CuisineCarousel />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </>
  );
}

export default HomePage;
