import { Link, useNavigate} from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.jpg";

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/"> <img src={logo} alt="ExploreTrip Logo" /> </Link>
        <span>ExploreTrip</span> 
      </div>

      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/flights">Flights</Link>
         <button onClick={() => navigate("/flights")} className="nav-link-btn">
          Hotels
        </button>
         <button onClick={() => navigate("/flights")} className="nav-link-btn">
          Destinations
        </button>

        <button onClick={() => navigate("/flights")} className="nav-link-btn">
          Contact
        </button>
      </nav>

      <button
        className="navbar-button"
        onClick={() => navigate("/flights")}
      >
        Login / Sign Up
      </button>

    </header>
  );
}

export default Navbar;