import { useEffect, useState } from "react";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/contact", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(setContacts);
  }, []);

  const approve = async (id) => {
    await fetch(`http://localhost:5000/api/contact/approve/${id}`, {
      method: "PUT",
      headers: {
        Authorization: localStorage.getItem("token")
      }
    });

    alert("User promoted to admin");
  };

  return (
    <div>
      <h2>Contact Requests</h2>

      {contacts.map(c => (
        <div key={c._id}>
          <p>{c.name} - {c.email}</p>
          <p>Status: {c.status}</p>
          {c.status === "pending" && (
            <button onClick={() => approve(c._id)}>Grant Admin</button>
          )}
        </div>
      ))}
    </div>
  );
}
