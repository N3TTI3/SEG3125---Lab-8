import "../styles/PackageCard.css";

function PackageCard({ title, description, price, image }) {
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
          <button className="details-button">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
