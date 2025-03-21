import "./Header.scss";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
// import Logo from "../../assets/logo/svg/Color_logo_with_background.svg";

function Header({ cartItems }) {
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
          <Link to="/cart" className="navbar__cart">
            <FaShoppingCart size={20} />
            <span className="navbar__cart-count">{cartItems.length}</span>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
