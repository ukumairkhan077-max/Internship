import Lamblogo from "../assets/lamblogo.png";
function Footer() {
  return (
    <footer id="footer">
      <div id="footer-top">
        <div className="footer-col">
          <div id="footer-logo">
            <img src={Lamblogo} alt="Lamborghini Logo" />
            <p>LAMBORGHINI</p>
          </div>
          <p className="footer-desc">
            Since 1963, we've been pushing the limits of innovation and
            performance. Our passion drives everything we do.
          </p>
        </div>

        <div className="footer-col">
          <h4>MODELS</h4>
          <a href="#">Huracan</a>
          <a href="#">Aventador</a>
          <a href="#">Revuelto</a>
          <a href="#">Urus</a>
          <a href="#">All Models</a>
        </div>

        <div className="footer-col">
          <h4>COMPANY</h4>
          <a href="#">Our Story</a>
          <a href="#">Careers</a>
          <a href="#">News & Events</a>
          <a href="#">Sustainability</a>
          <a href="#">Partners</a>
        </div>

        <div className="footer-col">
          <h4>SUPPORT</h4>
          <a href="#">Contact Us</a>
          <a href="#">FAQ</a>
          <a href="#">Service & Maintenance</a>
          <a href="#">Warranty</a>
          <a href="#">Roadside Assistance</a>
        </div>

        <div className="footer-col">
          <h4>NEWSLETTER</h4>
          <p className="footer-desc">
            Subscribe to get the latest updates and exclusive offers.
          </p>
          <div id="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button>&#10148;</button>
          </div>
        </div>
      </div>

      <div id="footer-bottom">
        <p>&copy; 2024 Automobili Lamborghini S.p.A.</p>
        <div id="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;