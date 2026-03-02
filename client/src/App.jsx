import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import Template from "./pages/template";
import Header from "./components/header";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [userRole, setUserRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token && role) {
      setIsLoggedIn(true);
      setUserRole(role);
    }
  }, []);

  return (
    <Router>
      <div className="app-layout">
        <Toaster position="top-center" reverseOrder={false} />

        <Header
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          userRole={userRole}
          setUserRole={setUserRole}
        />

        <main className="main-content">
          <Template
            isLoggedIn={isLoggedIn}
            userRole={userRole}
            setIsLoggedIn={setIsLoggedIn}
            setUserRole={setUserRole}
          />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
