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

  const token = localStorage.getItem("token");

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

  const handleEdit = (d) => {
    setEditId(d._id);
    setFormData({
      name: d.name,
      country: d.country,
      description: d.description,
      image: d.image,
      price: d.price
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this destination?")) return;

    await fetch(`http://localhost:5000/api/destinations/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token
      }
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
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
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
    <>
        <div style={{ padding: "30px" }}>
        <center>
          <h2>Admin – Manage Destinations</h2>
        </center>

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

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {destinations.map((d) => (
          <div key={d._id} style={{ border: "1px solid #ccc", padding: "15px", width: "250px" }}>
            <img src={d.image} alt={d.name} style={{ width: "100%" }} />
            <h3>{d.name}</h3>
            <p>{d.country}</p>
            <p>₹{d.price}</p>
            <br /><br />

            <button onClick={() => handleEdit(d)}>Update</button> <br /> <br />
            <button onClick={() => handleDelete(d._id)}>Delete</button>
          </div>
        ))}
        </div>
      </div>
    </>

    
  );
}
