import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Destination from "./pages/destination";
import About from "./pages/about";
import Contact from "./pages/contact";
import Admin from "./pages/admin";

import AdminRoute from "./routes/AdminRoute";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import DestinationDetails from "./pages/destinationDetails";





function App() {
  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/destination/:id" element={<DestinationDetails />} />
        


        {/* PROTECTED ADMIN ROUTE */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
