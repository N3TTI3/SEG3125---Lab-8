import "../styles/DestinationCard.css";
import { useNavigate } from "react-router-dom";

function DestinationCard({ city, country, image }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/flights", { state: { query: city } });
    }; 
   
  return (
    <div className="card shadow-sm h-100 border-0"
      onClick={handleClick}
      style = {{ cursor: "pointer" }}
      >

      
        <img src={image} 
        alt={city}
        className ="card-img-top" 
        style= {{ height: "200px", objectFit: "cover" }}
        />
      <div className="card-body text-center">
        <h5 className="card-title mb-1">{city}</h5>
        <p className="card-text text-muted">{country}</p>
      </div>
    </div>
  );
}

export default DestinationCard;