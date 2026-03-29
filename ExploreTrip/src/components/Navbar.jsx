import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/Navbar.css";
import logo from "../assets/logo.jpg";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
];

// Helper to read the googtrans cookie
const getSavedLang = () => {
  const match = document.cookie.match(/googtrans=\/en\/([a-z]+)/);
  return match ? match[1] : "en";
};

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
const [selectedLang, setSelectedLang] = useState(getSavedLang());
  const dropdownRef = useRef(null);
  const langRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageSelect = (code) => {
    setSelectedLang(code);
    setLangOpen(false);

    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname;

    if (code !== "en") {
      document.cookie = `googtrans=/en/${code}; path=/;`;
      document.cookie = `googtrans=/en/${code}; path=/; domain=${window.location.hostname}`;
    }

    // Navigate to home first so the translate widget re-initializes cleanly
    window.location.href = "/";
  };

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate("/");
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
      <div className="container">
        {/* Logo */}
        <Link to="/"
        className="navbar-brand d-flex align-items-center gap-2 fw-bold">
        <img src={logo} alt="ExploreTrip Logo" style = {{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          objectFit: "cover",
        }} />
        <span>ExploreTrip</span>
      </Link>
      {/* Mobile toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Links and right side */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <div className="navbar-nav mx-auto">
              <Link to="/" className="nav-link px-3">
                Home
              </Link>
              <Link to="/flights" className="nav-link px-3">
                Flights
              </Link>
              <Link to="/contact" className="nav-link px-3">
                Contact
              </Link>
            </div>
      
        {/* Custom Language Dropdown */}
        <div className="position-relative" ref={langRef}>
          <button
            type = "button"
            className="btn btn-outline-light btn-sm d-flex align-items-center gap-2"
            onClick={() => setLangOpen((prev) => !prev)}
          >
            <span>🌐</span>
            <span>{LANGUAGES.find((l) => l.code === selectedLang)?.label}</span>
            <span>{langOpen ? "▲" : "▼"}</span>
          </button>

          {langOpen && (
            <div className="position-absolute end-0 mt-2 bg-white border rounded shadow p-2"
              style={{ zIndex: 1050, minWidth: "180px" }}>
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  className={`dropdown-item rounded ${selectedLang === lang.code ? "active" : ""}`}
                  onClick={() => handleLanguageSelect(lang.code)}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Hidden Google Translate element (still needed to power translation) */}
        <div id="google_translate_element" style={{ display: "none" }}></div>

        {user ? (
          <div className="position-relative" ref={dropdownRef}>
            <button
            type="button"
              className="btn btn-light btn-sm d-flex align-items-center gap-2"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-dark text-white"
              style={{ width: "32px", height: "32px", fontSize: "0.9rem" }}>
                {user.name.charAt(0).toUpperCase()}
              </span>
              <span>{user.name}</span>
              <span>{dropdownOpen ? "▲" : "▼"}</span>
            </button>

            {dropdownOpen && (
              <div className="position-absolute end-0 mt-2 bg-white border rounded shadow p-2"
                style={{ zIndex: 1050, minWidth: "220px" }}>

                <div className="px-3 py-2 text-muted small">{user.email}</div>
                <hr className="dropdown-divider" />
                <button type="button"
                      className="dropdown-item text-danger rounded" 
                      onClick={handleLogout}>
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button 
          type="button"
          className="btn btn-primary" 
          onClick={() => navigate("/flights")}>
            Login / Sign Up
          </button>
        )}
      </div>
    </div>
</nav>
</header>
  );
}

export default Navbar;