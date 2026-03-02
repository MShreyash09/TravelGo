import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Review from "../components/review";
import "../css/detail.css"
import { useTranslation } from "../hooks/useTranslation";
import toast from "react-hot-toast";
import { API_BASE_URL } from "../api";

export default function DestinationDetails() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  const [currentImage, setCurrentImage] = useState(0);


  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");



  useEffect(() => {
    fetch(`${API_BASE_URL}/api/destinations/${id}`)
      .then(res => res.json())
      .then(data => setDestination(data))
      .catch(() => toast.error("Failed to load destination"));
  }, [id]);


  useEffect(() => {
    fetch(`${API_BASE_URL}/api/reviews/${id}`)
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [id]);

  const submitReview = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login to add review");
      return;
    }

    await fetch(`${API_BASE_URL}/api/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        destinationId: id,
        rating,
        comment
      })
    });

    setComment("");
    setRating(5);

    // refresh reviews
    const res = await fetch(`${API_BASE_URL}/api/reviews/${id}`);
    setReviews(await res.json());
    toast.success("Review posted!");
  };



  const handlePayment = async () => {
    if (!destination) return toast.error("Destination not loaded");

    const token = localStorage.getItem("token");
    if (!token) return toast.error("Please login to continue");

    const res = await fetch(
      `${API_BASE_URL}/api/payment/create-checkout-session`,
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
      toast.error(data.message || "Payment failed");
      return;
    }

    window.location.href = data.url;
  };

  const destName = useTranslation(destination?.name || "");
  const destCountry = useTranslation(destination?.country || "");
  const destLocation = useTranslation(destination?.location || "");
  const destDesc = useTranslation(destination?.description || "");

  const daysText = useTranslation("days");
  const whatsIncludedText = useTranslation("What’s Included");
  const flightText = useTranslation("Flight Tickets");
  const hotelText = useTranslation("Hotel Accommodation");
  const transportText = useTranslation("Local Transportation");
  const guideText = useTranslation("Tour Guide");
  const exploreText = useTranslation("Explore Country");

  if (!destination) return <h2>Loading...</h2>;

  return (
    <>

      <div className="details-page">
        <div className="details-container">

          {/* Image Section */}
          <div className="image-box">
            <img
              src={destination.images && destination.images.length > 0 ? `${API_BASE_URL}${destination.images[currentImage]}` : destination.image}
              alt={destination.name}
              loading="lazy"
            />

            <div className="slider-controls">
              <button
                onClick={() =>
                  setCurrentImage(
                    currentImage === 0
                      ? destination.images.length - 1
                      : currentImage - 1
                  )
                }
              >
                ◀
              </button>

              <button
                onClick={() =>
                  setCurrentImage(
                    currentImage === destination.images.length - 1
                      ? 0
                      : currentImage + 1
                  )
                }
              >
                ▶
              </button>
            </div>
          </div>


          {/* Info Section */}
          <div className="details">
            <h1>{destName}</h1>
            <h3>{destCountry}</h3>

            <div className="rating">⭐⭐⭐⭐☆ <span>(4.5 / 5)</span></div>

            <p className="meta">📍 {destLocation}</p>
            <p className="meta">🕒 {destination.duration} {daysText}</p>

            <p className="description">{destDesc}</p>

            <div className="included">
              <h4>{whatsIncludedText}</h4>
              <ul>
                <li>✔ {flightText}</li>
                <li>✔ {hotelText}</li>
                <li>✔ {transportText}</li>
                <li>✔ {guideText}</li>
              </ul>
            </div>

            <div className="price-section">
              <h2>₹{destination.price}</h2>
              <button onClick={handlePayment}>{exploreText}</button>
            </div>
          </div>



        </div>
      </div>

      <div className="review-container">
        <Review destinationId={id} />
      </div>

    </>
  );
}
