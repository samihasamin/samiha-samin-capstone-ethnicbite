import "./Header.scss";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Logo from "/assets/logos/png/bowl-icon.png";

function Header({ cartItems }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__logo">
          <Link to="/">
            <img src={Logo} alt="EthnicBite Logo" />
          </Link>
        </div>

        {/* Mobile Links */}

        {menuOpen && (
          <div className="navbar__menu">
            <ul className="navbar__menu-itmes">
              <li>
                <Link
                  className="navbar__menu-items-aboutus navbar__menu-link"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="navbar__menu-items-getstarted navbar__menu-link"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started
                </Link>
              </li>
              <li>
                <Link
                  className="navbar__menu-items-cta navbar__menu-link"
                  onClick={() => setMenuOpen(false)}
                >
                  Become a Chef
                </Link>
              </li>
              <li>
                <Link
                  className="navbar__menu-items-login navbar__menu-link"
                  onClick={() => setMenuOpen(false)}
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  className="navbar__menu-items-signup navbar__menu-link"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Desktop and Tablet links */}

        <div className="navbar__links">
          <ul className="navbar__links-left">
            <li>
              <Link className="navbar__links-left-aboutus">About Us</Link>
            </li>
            <li>
              <Link className="navbar__links-left-getstarted">Get Started</Link>
            </li>
          </ul>
          <ul className="navbar__links-right">
            <li>
              <Link className="navbar__links-right-cta">Become a Chef</Link>
            </li>
            <li>
              <Link className="navbar__links-right-login">Log In</Link>
            </li>
            <li>
              <Link className="navbar__links-right-signup">Sign Up</Link>
            </li>
          </ul>
        </div>

        <div className="navbar__controls">
          <div className="navbar__controls-cart">
            <Link
              className="navbar__controls-cart-link"
              onClick={() => setMenuOpen(false)}
            >
              <FaShoppingCart size={20} />
              {cartItems.length > 0 && (
                <span className="navbar__cart-count">{cartItems.length}</span>
              )}
            </Link>
          </div>

          <button
            className="navbar__controls-hamburger"
            onClick={() => setMenuOpen((prevState) => !prevState)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
