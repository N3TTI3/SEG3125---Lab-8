import { useNavigate } from "react-router-dom";
import "../styles/BackButton.css";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => {
  if (window.history.length > 1) {
    navigate(-1);
  } else {
    navigate("/");
  }
}}>
      ← Back
    </button>
  );
}

export default BackButton;