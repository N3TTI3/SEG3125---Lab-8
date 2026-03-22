import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/Navbar.css";
import logo from "../assets/logo.jpg";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={logo} alt="ExploreTrip Logo" /></Link>
        <span>ExploreTrip</span>
      </div>

      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/flights">Flights</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {user ? (
        /* ── Logged-in: show name + dropdown ── */
        <div className="navbar-user" ref={dropdownRef}>
          <button
            className="navbar-user-btn"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <span className="navbar-user-avatar">
              {user.name.charAt(0).toUpperCase()}
            </span>
            <span className="navbar-user-name">{user.name}</span>
            <span className="navbar-user-caret">{dropdownOpen ? "▲" : "▼"}</span>
          </button>

          {dropdownOpen && (
            <div className="navbar-dropdown">
              <div className="navbar-dropdown-email">{user.email}</div>
              <hr className="navbar-dropdown-divider" />
              <button
                className="navbar-dropdown-item"
                onClick={handleLogout}
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      ) : (
        /* ── Logged-out: Login / Sign Up button ── */
        <button
          className="navbar-button"
          onClick={() => navigate("/flights")}
        >
          Login / Sign Up
        </button>
      )}
    </header>
  );
}

export default Navbar;