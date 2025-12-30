import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/signup.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

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
        role
      })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Signup failed");
      return;
    }

    alert("Signup successful. Please login.");
    navigate("/login");
  };

  return (
    <>
        <Header />
            <div className="signup-container">
              <form className="signup-box" onSubmit={handleSignup}>
                <img src="/travelgo-logo.png" alt="logo" />
                

                <h2>Sign Up</h2>

                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                {/* ROLE SELECT */}
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>

                <button type="submit">Sign Up</button>
              </form>
            </div>
        <Footer />
    </>
    
  );
}
