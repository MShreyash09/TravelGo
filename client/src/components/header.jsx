// src/components/Header.jsx
import { Link, useNavigate } from "react-router-dom";
import "../css/header.css";
import Logout from "./Logout";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

const SUPPORTED_LANGUAGES = [
  { code: "en-IN", name: "English" },
  { code: "hi-IN", name: "Hindi" },
  { code: "bn-IN", name: "Bengali" },
  { code: "te-IN", name: "Telugu" },
  { code: "ta-IN", name: "Tamil" },
  { code: "mr-IN", name: "Marathi" },
  { code: "gu-IN", name: "Gujarati" },
  { code: "kn-IN", name: "Kannada" },
  { code: "ml-IN", name: "Malayalam" },
  { code: "pa-IN", name: "Punjabi" },
  { code: "or-IN", name: "Odia" },
];

export default function Header({ isLoggedIn, setIsLoggedIn, userRole, setUserRole }) {
  const navigate = useNavigate();
  const { language, setLanguage } = useContext(LanguageContext);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  return (
    <header className="header-container">
      <Link to="/">Home</Link>
      <Link to="/destination">Destination</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      {userRole === "admin" && <Link to="/admin">Admin</Link>}

      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <i
          className="fa-solid fa-language"
          style={{ cursor: "pointer", fontSize: "1.5rem", marginLeft: "15px" }}
          onClick={() => setShowLanguageMenu(!showLanguageMenu)}
        ></i>
        {showLanguageMenu && (
          <div
            className="language-dropdown"
            style={{
              position: "absolute",
              top: "100%",
              right: 0,
              backgroundColor: "white",
              color: "black",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              borderRadius: "5px",
              marginTop: "10px",
              zIndex: 1000,
              display: "flex",
              flexDirection: "column",
              minWidth: "120px",
              overflow: "hidden",
            }}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <div
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setShowLanguageMenu(false);
                }}
                className={`lang-menu-item ${language === lang.code ? 'active' : ''}`}
                style={{
                  padding: "10px 15px",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee",
                  backgroundColor: language === lang.code ? "#f0f0f0" : "transparent",
                  fontWeight: language === lang.code ? "bold" : "normal",
                  color: "#333",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#e0e0e0";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = language === lang.code ? "#f0f0f0" : "transparent";
                }}
              >
                {lang.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {!isLoggedIn && <Link to="/login">Sign In</Link>}
      {!isLoggedIn && <Link to="/signup">Sign Up</Link>}
      {isLoggedIn && (
        <Logout setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} navigate={navigate} />
      )}
    </header>
  );
}
