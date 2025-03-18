import "./Header.scss";
import { Link } from "react-router-dom";
// import Logo from "../../assets/logo/svg/Color_logo_with_background.svg";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__logo">
          {/* <Link to="/">
            <img src={Logo} alt="EthnicBite Logo" />
          </Link> */}
        </div>
        <ul className="navbar__links-left">
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/getstarted">Get Started</Link>
          </li>
        </ul>
        <ul className="navbar__links-right">
          <Link to="/become-chef" className="navbar__cta">
            Become a Chef
          </Link>
          <Link to="/login">Log In</Link>
          <Link to="/signup" className="navbar__signup">
            Sign Up
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
