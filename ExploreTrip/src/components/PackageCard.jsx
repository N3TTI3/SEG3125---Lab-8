import "../styles/PackageCard.css";
import { useNavigate } from "react-router-dom";

function PackageCard({ title, description, price, image }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/flights", { state: { package: {
      id,
      title,
      description,
      price,
      image,
    }, 
  },
 });
  };

  return (
    <div className="package-card">
      <div className="package-image">
        <img src={image} alt={title} />
      </div>

      <div className="package-info">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="package-bottom">
          <span className="package-price">${price.toLocaleString()}</span>
          <button className="details-button"
          onClick={handleClick}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
