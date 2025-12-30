import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Destination from "./destination";
import DestinationDetails from "./destinationDetails";
import About from "./about"
import Contact from "./contact"
import Login from "./login";
import Signup from "./signup";

export default function Template() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />


      <Route path="/destination/:id" element={<DestinationDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
