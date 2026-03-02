import { useEffect, useState } from "react";
import DestinationCard from "../components/DestinationCard";
import { useTranslation } from "../hooks/useTranslation";
import { API_BASE_URL } from "../api";

export default function Destination() {
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const title = useTranslation("Top Destinations");

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/destinations`)
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load destinations", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "40px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "2rem" }}>
        <strong>{title}</strong>
      </h2>

      <div className="destination-grid">
        {isLoading
          ? // Render 6 Skeleton cards
          Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="destination-card skeleton"
              style={{
                height: "350px",
                background: "#e0e0e0",
                borderRadius: "10px",
                animation: "pulse 1.5s infinite ease-in-out"
              }}
            ></div>
          ))
          : destinations.map((d) => (
            <DestinationCard key={d._id} destination={d} />
          ))}
      </div>
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}



