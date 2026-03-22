import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/flights">Flights</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Help */}
        <div className="footer-column">
          <h3>Help</h3>
          <Link to="/contact">FAQs</Link>
          <Link to="/contact">Support</Link>
          <Link to="/contact">Cancellations</Link>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact</h3>
          <a href="mailto:support@exploretrip.com">Email Us</a>
          <a href="tel:+16131234567">Call Center</a>
          <Link to="/contact">Live Chat</Link>
        </div>

        {/* About */}
        <div className="footer-column">
          <h3>About</h3>
          <Link to="/">Company</Link>
          <Link to="/contact">Terms</Link>
          <Link to="/contact">Privacy</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ExploreTrip. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;