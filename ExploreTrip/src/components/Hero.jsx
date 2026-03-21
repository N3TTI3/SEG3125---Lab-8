import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">Find Your Next Adventure</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Where do you want to go?"
          className="search-input"
        />

        <button className="filter-button">≡</button>
        <button className="search-button">Search</button>
      </div>
    </section>
  );
}

export default Hero;