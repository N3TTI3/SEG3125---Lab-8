import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-5">
        <div className="row g-4">

        {/* Quick Links */}
        <div className="col-6 col-md-3">
          <h5 className="mb-3">Quick Links</h5>
          <ul className="list-unstyled">
            <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
            <li><Link to="/flights" className="text-white text-decoration-none">Flights</Link></li>
            <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div className="col-6 col-md-3">
          <h5 className="mb-3">Help</h5>
           <ul className="list-unstyled">
            <li><Link to="/contact" className="text-white text-decoration-none">FAQs</Link></li>
            <li><Link to="/contact" className="text-white text-decoration-none">Support</Link></li>
            <li><Link to="/contact" className="text-white text-decoration-none">Cancellations</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="col-6 col-md-3">
          <h5 className="mb-3">Contact</h5>
          <ul className="list-unstyled">
            <li><a href="mailto:support@exploretrip.com" className="text-white text-decoration-none">Email Us</a></li>
            <li><a href="tel:+16131234567" className="text-white text-decoration-none">Call Center</a></li>
            <li><Link to="/contact" className="text-white text-decoration-none">Live Chat</Link></li>
          </ul>
        </div>

        {/* About */}
        <div className="col-6 col-md-3">
          <h5 className="mb-3">About</h5>
          <ul className="list-unstyled">
            <li><Link to="/" className="text-white text-decoration-none">Company</Link></li>
            <li><Link to="/contact" className="text-white text-decoration-none">Terms</Link></li>
            <li><Link to="/contact" className="text-white text-decoration-none">Privacy</Link></li>
          </ul>
        </div>

      </div>
      </div>

      <div className="text-center py-3 border-top border-secondary">
        <p className="mb-0">© 2026 ExploreTrip. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;