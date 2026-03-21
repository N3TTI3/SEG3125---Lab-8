import "../styles/Navbar.css";
import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="ExploreTrip Logo" />
        <span>ExploreTrip</span>
      </div>

      <nav className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Flights</a>
        <a href="#">Hotels</a>
        <a href="#">Destinations</a>
        <a href="#">Contact</a>
      </nav>

      <button className="navbar-button">Login / Sign Up</button>
    </header>
  );
}

export default Navbar;