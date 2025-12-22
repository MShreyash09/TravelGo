import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer"
import "../css/detail.css"

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

          <div className="details-page">
            <div className="details-container">

              {/* Image Section */}
              <div className="image-box">
                <img src={destination.image} alt={destination.name} />
              </div>

              {/* Info Section */}
              <div className="details">
                <h1>{destination.name}</h1>
                <h3>{destination.country}</h3>

                <div className="rating">⭐⭐⭐⭐☆ <span>(4.5 / 5)</span></div>

                <p className="meta">📍 {destination.location}</p>
                <p className="meta">🕒 {destination.duration} days</p>

                <p className="description">{destination.description}</p>

                <div className="included">
                  <h4>What’s Included</h4>
                  <ul>
                    <li>✔ Flight Tickets</li>
                    <li>✔ Hotel Accommodation</li>
                    <li>✔ Local Transportation</li>
                    <li>✔ Tour Guide</li>
                  </ul>
                </div>

                <div className="price-section">
                  <h2>₹{destination.price}</h2>
                  <button onClick={handlePayment}>Explore Country</button>
                </div>
              </div>

            </div>
          </div>

        <Footer />
    </>
  );
}
