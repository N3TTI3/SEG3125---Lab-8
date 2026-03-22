import "../styles/PackageCard.css";
import { useNavigate } from "react-router-dom";

function PackageCard({ title, description, price, image, destination  }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/package-details", { state: { package: {
      title,
      description,
      price,
      image,
      destination,
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
          <span className="package-price">{price}</span>
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
