import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/header";

export default function DestinationDetails() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/destinations/${id}`)
      .then(res => res.json())
      .then(data => setDestination(data))
      .catch(() => alert("Failed to load destination"));
  }, [id]);

  const handlePayment = async () => {
    if (!destination) return alert("Destination not loaded");

    const token = localStorage.getItem("token");
    if (!token) return alert("Please login to continue");

    const res = await fetch(
      "http://localhost:5000/api/payment/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          destinationId: destination._id,
          amount: destination.price
        })
      }
    );

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Payment failed");
      return;
    }

    window.location.href = data.url;
  };

  if (!destination) return <h2>Loading...</h2>;

  return (
    <>
      <Header />
      <div style={{ padding: "30px" }}>
        <img src={destination.image} width="400" alt={destination.name} />
        <h1>{destination.name}</h1>
        <h3>{destination.country}</h3>
        <p>{destination.description}</p>
        <h2>₹{destination.price}</h2>
        <button onClick={handlePayment}>Explore Country</button>
      </div>
    </>
  );
}
