import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function PaymentSuccess() {
  const [params] = useSearchParams();

  useEffect(() => {
    fetch("http://localhost:5000/api/payment/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        sessionId: params.get("session_id")
      })
    });
  }, []);

  return <h2>Payment Successful 🎉</h2>;
}
