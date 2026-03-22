import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Hero() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => { navigate("/flights", { state: { query: searchValue } }); };
  return (
    <section className="hero">
      <h1 className="hero-title">Find Your Next Adventure</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Where do you want to go?"
          className="search-input"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <button className="filter-button">≡</button>
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </section>
  );
}

export default Hero;