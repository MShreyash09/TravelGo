// src/pages/login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import toast from "react-hot-toast";
import { API_BASE_URL } from "../api";

export default function Login({ setIsLoggedIn, setUserRole }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.message || "Login failed");
      return;
    }

    // backend returns { token, user }
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.user.role);

    // update app state so header refreshes automatically
    setIsLoggedIn(true);
    setUserRole(data.user.role);

    // navigate
    toast.success("Login successful!");
    if (data.user.role === "admin") navigate("/admin");
    else navigate("/destination");
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <img src="/travelgo-logo.png" alt="logo" />
        <h2>Welcome Back!</h2>

        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
