import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__top-logo">
          <img
            src="/assets/logos/png/ethnicbite-logo-footer.png"
            alt="EthnicBite Logo"
          />
          <p>Brining authentic, traditional home flavors to all of Canada!</p>
        </div>
        <div className="footer__top-links">
          <div className="footer__top-links__mainpages">
            <h4>Main Pages</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Explore Our Chefs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer__top-links__support">
            <h4>Support & Legal</h4>
            <ul>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Customer Service</li>
            </ul>
          </div>
          <div className="footer__top-links__contact">
            <h4>Contact Details</h4>
            <p>support@ehnicbite.ca</p>
            <p>123 Maple Leaf Avenue,</p>
            <p>Halifax, Nova Scotia, B3L 2R7</p>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>Copyright &copy; 2025 EthnicBite. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
