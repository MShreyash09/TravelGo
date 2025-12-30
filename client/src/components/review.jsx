import { useEffect, useState } from "react";
import "../css/review.css";

export default function Review({ destinationId }) {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/reviews/${destinationId}`)
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [destinationId]);

  const submitReview = async () => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Please login");

    const res = await fetch("http://localhost:5000/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ destinationId, rating, comment })
    });

    const data = await res.json();
    if (!res.ok) return alert(data.message);

    setComment("");
    setRating(5);

    const refreshed = await fetch(
      `http://localhost:5000/api/reviews/${destinationId}`
    );
    setReviews(await refreshed.json());
  };

  return (
    <div className="review-section">
      <h2>User Reviews</h2>

      {localStorage.getItem("role") === "user" && (
        <div className="review-form">
          <select
            value={rating}
            onChange={e => setRating(Number(e.target.value))}
          >
            {[5, 4, 3, 2, 1].map(r => (
              <option key={r} value={r}>
                {r} Stars
              </option>
            ))}
          </select>

          <textarea
            placeholder="Write your experience..."
            value={comment}
            onChange={e => setComment(e.target.value)}
          />

          <button onClick={submitReview}>Submit Review</button>
        </div>
      )}

      <div className="review-list">
        {reviews.map(r => {
          const username = r.user.email.split("@")[0];

          return (
            <div key={r._id} className="review-card">
              <div className="review-header">
                <span className="username">{username}</span>
                <span className="stars">
                  {"⭐".repeat(r.rating)}
                </span>
              </div>
              <p className="review-comment">{r.comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
