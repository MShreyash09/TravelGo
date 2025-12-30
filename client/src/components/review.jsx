import { useState, useEffect } from "react";

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

    if (!token) {
      alert("Please login");
      return;
    }

    const res = await fetch("http://localhost:5000/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        destinationId,  // ✅ NOW CORRECT
        rating,
        comment
      })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

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

      {reviews.map(r => (
        <div key={r._id} className="review-card">
          <strong>{r.user.email}</strong>
          <p>{"⭐".repeat(r.rating)}</p>
          <p>{r.comment}</p>
        </div>
      ))}
    </div>
  );
}
