import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/header";

export default function DestinationDetails() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/destinations/${id}`)
      .then(res => res.json())
      .then(data => setDestination(data));
  }, [id]);

  if (!destination) return <h2>Loading...</h2>;

  return (
    <>
      <Header />

      <div style={{ padding: "30px" }}>
        <img src={destination.image} width="400" />
        <h1>{destination.name}</h1>
        <h3>{destination.country}</h3>
        <p>{destination.description}</p>
        <h2>₹{destination.price}</h2>
      </div>
    </>
  );
}
