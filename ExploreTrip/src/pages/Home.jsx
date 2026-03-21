import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DestinationCard from "../components/DestinationCard";
import PackageCard from "../components/PackageCard";
import Footer from "../components/Footer";
import { destinations, packages } from "../data/homeData";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />

      <section className="home-section">
        <h2 className="section-title">Popular Destinations</h2>
        <div className="card-grid">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              city={destination.city}
              country={destination.country}
                image={destination.image}
            />
          ))}
        </div>
      </section>

      <section className="home-section">
        <h2 className="section-title">Featured Travel Packages</h2>
        <div className="card-grid">
          {packages.map((item) => (
            <PackageCard
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;