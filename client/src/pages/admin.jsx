import { useEffect, useState } from "react";

export default function Admin() {
  const [destinations, setDestinations] = useState([]);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    description: "",
    image: "",
    price: ""
  });

  const fetchDestinations = async () => {
    const res = await fetch("http://localhost:5000/api/destinations");
    const data = await res.json();
    setDestinations(data);
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = (destination) => {
    setEditId(destination._id);
    setFormData({
      name: destination.name,
      country: destination.country,
      description: destination.description,
      image: destination.image,
      price: destination.price
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this destination?");
    if (!confirmDelete) return;

    await fetch(`http://localhost:5000/api/destinations/${id}`, {
      method: "DELETE"
    });

    fetchDestinations();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = editId
      ? `http://localhost:5000/api/destinations/${editId}`
      : "http://localhost:5000/api/destinations";

    const method = editId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        price: Number(formData.price)
      })
    });

    alert(editId ? "Destination Updated!" : "Destination Added!");

    setFormData({
      name: "",
      country: "",
      description: "",
      image: "",
      price: ""
    });

    setEditId(null);
    fetchDestinations();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Admin – Manage Destinations</h2>

      {/* ADD / UPDATE FORM */}
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input name="country" value={formData.country} onChange={handleChange} placeholder="Country" required />
        <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required />
        <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
        <button type="submit">
          {editId ? "Update Destination" : "Add Destination"}
        </button>
      </form>

      <hr />

      {/* DESTINATION CARDS */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {destinations.map((d) => (
          <div
            key={d._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              width: "250px"
            }}
          >
            <img src={d.image} alt={d.name} style={{ width: "100%" }} />
            <h3>{d.name}</h3>
            <p>{d.country}</p>
            <p>₹{d.price}</p>

            <button onClick={() => handleEdit(d)}>Update</button>
            <button onClick={() => handleDelete(d._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
