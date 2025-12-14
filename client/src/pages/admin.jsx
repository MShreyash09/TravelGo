import { useState } from "react";

export default function Admin() {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    description: "",
    image: "",
    price: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/destinations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...formData,
        price: Number(formData.price) // good practice
      })
    });

    alert("Destination Added!");

    // ✅ CLEAR FORM AFTER SUBMIT
    setFormData({
      name: "",
      country: "",
      description: "",
      image: "",
      price: ""
    });
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Admin – Add Destination</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          placeholder="Destination Name"
          onChange={handleChange}
          required
        /><br />

        <input
          name="country"
          value={formData.country}
          placeholder="Country"
          onChange={handleChange}
          required
        /><br />

        <input
          name="image"
          value={formData.image}
          placeholder="Image URL"
          onChange={handleChange}
          required
        /><br />

        <input
          name="price"
          value={formData.price}
          placeholder="Price"
          onChange={handleChange}
          required
        /><br />

        <textarea
          name="description"
          value={formData.description}
          placeholder="Description"
          onChange={handleChange}
          required
        /><br />

        <button type="submit">Add Destination</button>
      </form>
    </div>
  );
}
