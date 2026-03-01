// src/components/Logout.jsx
export default function Logout({ setIsLoggedIn, setUserRole, navigate }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    setUserRole(null);
    if (navigate) navigate("/login");
    else window.location.href = "/login";
  };

  return <button onClick={handleLogout}>Logout</button>;
}
