// src/components/Header.jsx
import { Link, useNavigate } from "react-router-dom";
import "../css/header.css";
import Logout from "./Logout";

export default function Header({ isLoggedIn, setIsLoggedIn, userRole, setUserRole }) {
  const navigate = useNavigate();

  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/destination">Destination</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      {userRole === "admin" && <Link to="/admin">Admin</Link>}

      {!isLoggedIn && <Link to="/login">Sign In</Link>}
      {!isLoggedIn && <Link to="/signup">Sign Up</Link>}
      {isLoggedIn && (
        <Logout setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} navigate={navigate} />
      )}
    </header>
  );
}
