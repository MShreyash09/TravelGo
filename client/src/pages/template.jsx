// src/pages/template.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./home";
import Destination from "./destination";
import DestinationDetails from "./destinationDetails";
import About from "./about";
import Contact from "./contact";
import Login from "./login";
import Signup from "./Signup";
import AdminDashboard from "./admin";

export default function Template({ isLoggedIn, userRole, setIsLoggedIn, setUserRole }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/destination/:id" element={<DestinationDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />} />
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />} />

      <Route path="/admin" element={isLoggedIn && userRole === "admin" ? <AdminDashboard /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
