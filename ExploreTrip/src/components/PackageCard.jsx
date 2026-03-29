
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
    <div className="card shadow-sm h-100 border-0">
        <img 
        src={image} 
        alt={title} 
        className="card-img-top"
       style={{ height: "220px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted flex-grow-1">{description}</p>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="fw-bold text-primary">{price}</span>
          <button className="btn btn-primary"
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
