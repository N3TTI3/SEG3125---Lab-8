import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/home"> <img src={logo} alt="ExploreTrip Logo" /> </Link>
        <span>ExploreTrip</span>
      </div>

      <nav className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/flights">Flights</Link>
        <a href="#">Hotels</a>
        <a href="#">Destinations</a>
        <a href="#">Contact</a>
      </nav>

      <button className="navbar-button">Login / Sign Up</button>
    </header>
  );
}

export default Navbar;