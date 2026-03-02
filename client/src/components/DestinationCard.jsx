import { useNavigate } from "react-router-dom";
import "../css/destinationCard.css";
import CustomButton from "./button";
import { useTranslation } from "../hooks/useTranslation";
import { API_BASE_URL } from "../api";

export default function DestinationCard({ destination }) {
  const navigate = useNavigate();

  const startingFrom = useTranslation("Starting from");
  const exploreMore = useTranslation("Explore More");
  const destName = useTranslation(destination.name);

  // Fallback to destination.image just in case old db records don't have .images array
  const imageUrl = destination.images && destination.images.length > 0
    ? `${API_BASE_URL}${destination.images[0]}`
    : destination.image;

  return (
    <div
      className="destination-card"
      onClick={() => navigate(`/destination/${destination._id}`)}
    >
      <img src={imageUrl} alt={destName} loading="lazy" />
      <h3>{destName}</h3>
      <h4 style={{ marginBottom: "15px" }}>
        {startingFrom} <br />₹{destination.price}
      </h4>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <CustomButton>{exploreMore}</CustomButton>
      </div>
    </div>
  );
}
