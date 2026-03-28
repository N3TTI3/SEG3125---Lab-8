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
const [selectedLang, setSelectedLang] = useState(getSavedLang);
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

    // Clear existing translation cookies first
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname;

    if (code !== "en") {
      // Set the translation cookie Google Translate reads on load
      document.cookie = `googtrans=/en/${code}; path=/;`;
      document.cookie = `googtrans=/en/${code}; path=/; domain=${window.location.hostname}`;
    }

  window.location.reload();
  };

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

      <div className="navbar-right">
        {/* Custom Language Dropdown */}
        <div className="lang-selector" ref={langRef}>
          <button
            className="lang-btn"
            onClick={() => setLangOpen((prev) => !prev)}
          >
            🌐 {LANGUAGES.find((l) => l.code === selectedLang)?.label}
            <span className="navbar-user-caret">{langOpen ? "▲" : "▼"}</span>
          </button>

          {langOpen && (
            <div className="lang-dropdown">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  className={`lang-dropdown-item ${selectedLang === lang.code ? "active" : ""}`}
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
                <button className="navbar-dropdown-item" onClick={handleLogout}>
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button className="navbar-button" onClick={() => navigate("/flights")}>
            Login / Sign Up
          </button>
        )}
      </div>
    </header>
  );
}

export default Navbar;