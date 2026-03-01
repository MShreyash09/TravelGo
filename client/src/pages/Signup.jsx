// src/pages/signup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/signup.css";

export default function Signup({ setIsLoggedIn, setUserRole }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [adminSecret, setAdminSecret] = useState(""); // optional if ADMIN_SECRET required
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        role,
        adminSecret: role === "admin" ? adminSecret : undefined,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Signup failed");
      return;
    }

    // If backend returns token + user, we log them in automatically
    if (data.token && data.user) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);
      setIsLoggedIn(true);
      setUserRole(data.user.role);
      if (data.user.role === "admin") navigate("/admin");
      else navigate("/destination");
      return;
    }

    // Fallback: if just message, redirect to login
    alert("Signup successful. Please login.");
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <form className="signup-box" onSubmit={handleSignup}>
        <img src="/travelgo-logo.png" alt="logo" />
        <h2>Sign Up</h2>

        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        {role === "admin" && (
          <input type="text" placeholder="Admin Secret (if required)" value={adminSecret} onChange={(e) => setAdminSecret(e.target.value)} />
        )}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
