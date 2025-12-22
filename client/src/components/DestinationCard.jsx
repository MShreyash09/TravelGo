import { useNavigate } from "react-router-dom";
import "../css/destinationCard.css";

export default function DestinationCard({ destination }) {
  const navigate = useNavigate();

  return (
    <div
      className="destination-card"
      onClick={() => navigate(`/destination/${destination._id}`)}
    >
      <img src={destination.image} alt={destination.name} />
      <h3>{destination.name}</h3>
    </div>
  );
}
