import "../styles/DestinationCard.css";
import { useNavigate } from "react-router-dom";

function DestinationCard({ city, country, image }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/flights", { state: { query: city } });
    }; 
   
  return (
    <div className="destination-card"
      onClick={handleClick}
      style = {{ cursor: "pointer" }}
      >

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