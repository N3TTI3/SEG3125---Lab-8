import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/PackageDetails.css";

function PackageDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const packageData = location.state?.package || {
    title: "Package",
    description: "No package details available.",
    price: 0,
    image: "",
    destination: "",
  };

  return (
    <div className="package-details-page">
      <Navbar />

      <div className="package-details-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="package-details-card">
          {packageData.image && (
            <img
              src={packageData.image}
              alt={packageData.title}
              className="package-details-image"
            />
          )}

          <div className="package-details-content">
            <h1>{packageData.title}</h1>

            {packageData.destination && (
              <p className="package-destination">{packageData.destination}</p>
            )}

            <p className="package-description">{packageData.description}</p>

            <h3>What’s Included</h3>
            <ul>
              <li>Round-trip flight options</li>
              <li>Recommended hotel stays</li>
              <li>Popular attractions nearby</li>
              <li>Flexible travel planning</li>
              <li>Customer support assistance</li>
            </ul>

            <p className="package-price-large">
              Price: ${packageData.price.toLocaleString()}
            </p>

            <button
              className="book-btn"
              onClick={() =>
                navigate("/flights", {
                  state: { query: packageData.destination },
                })
              }
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PackageDetails;