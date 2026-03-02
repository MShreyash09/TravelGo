import { useNavigate } from "react-router-dom";
import "../css/destinationCard.css";
import CustomButton from "./button";
import { useTranslation } from "../hooks/useTranslation";

export default function DestinationCard({ destination }) {
  const navigate = useNavigate();

  const startingFrom = useTranslation("Starting from");
  const exploreMore = useTranslation("Explore More");
  const destName = useTranslation(destination.name);

  return (
    <div
      className="destination-card"
      onClick={() => navigate(`/destination/${destination._id}`)}
    >
      <img src={destination.image} alt={destName} />
      <h3>{destName}</h3>
      <h4>
        {startingFrom} <br />₹{destination.price}
      </h4>
      <br />
      <center>
        <CustomButton>{exploreMore}</CustomButton>
      </center>
    </div>
  );
}
