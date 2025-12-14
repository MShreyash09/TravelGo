import { Link } from "react-router-dom";
import "../css/header.css";
import Logout from "./Logout";

export default function Header() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/destination">Destination</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {/* Show only for admin */}
        {role === "admin" && <Link to="/admin">Admin</Link>}

        {/* Login / Logout */}
        {!token && <Link to="/login">Login</Link>}
        {token && <Logout />}

        {!token && <Link to="/signup">Signup</Link>}
        

      </header>
    </>
  );
}

