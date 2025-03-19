import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__top-logo">
          <img src="/assets/logo/color-logo.svg" alt="EthnicBite Logo" />
          <p>Brining authentic, traditional home flavors to all of Canada!</p>
        </div>
        <div className="footer__top-mainpages">
          <h4>Main Pages</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Explore Our Chefs</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer__top-support">
          <h4>Support & Legal</h4>
          <li>FAQ</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
          <li>Customer Service</li>
        </div>
        <div className="footer__top-contact">
          <h4>Contact Details</h4>
          <p>support@ehnicbite.ca</p>
          <p>123 Maple Leaf Avenue,</p>
          <p>Halifax, Nova Scotia, B3L 2R7</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p>Copyright &copy; 2025 EthnicBite. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
