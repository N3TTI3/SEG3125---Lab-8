import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DestinationCard from "../components/DestinationCard";
import PackageCard from "../components/PackageCard";
import Footer from "../components/Footer";
import { destinations, packages } from "../data/HomeData";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />

       {/* Popular Destinations */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Popular Destinations</h2>

        <div className="row g-4">
          {destinations.map((destination) => (
            <div className="col-md-6 col-lg-4" key={destination.id}>
            <DestinationCard
              key={destination.id}
              id={destination.id}
              city={destination.city}
              country={destination.country}
                image={destination.image}
            />
            </div>
          ))}
        </div>
      </section>

      {/* Travel Packages */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Featured Travel Packages</h2>
        <div className="row g-4">
          {packages.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
            <PackageCard
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              destination={item.destination}
            />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;