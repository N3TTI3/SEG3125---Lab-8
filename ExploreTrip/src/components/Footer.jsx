import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>Help</h3>
          <p>FAQs</p>
          <p>Support</p>
          <p>Cancellations</p>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <p>Email Us</p>
          <p>Live Chat</p>
          <p>Call Center</p>
        </div>

        <div className="footer-column">
          <h3>About</h3>
          <p>Company</p>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 ExploreTrip. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;