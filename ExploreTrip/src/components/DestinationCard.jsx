import "../styles/DestinationCard.css";

function DestinationCard({ city, country, image }) {
    console.log(city, image);
  return (
    <div className="destination-card">
      <div className="destination-image">
        <img src={image} alt={city} />
      </div>
      <div className="destination-info">
        <h3>{city}</h3>
        <p>{country}</p>
      </div>
    </div>
  );
}

export default DestinationCard;