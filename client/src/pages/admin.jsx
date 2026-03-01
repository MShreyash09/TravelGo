import { useState } from "react";
import '../css/admin.css';

export default function Admin() {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    description: "",
    price: "",
    duration: "",
    location: ""
  });

  const [images, setImages] = useState([]);

  // TEXT INPUT HANDLER
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // IMAGE HANDLER
  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) return alert("Unauthorized");

    const data = new FormData();

    // append text fields
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });

    // append images
    for (let i = 0; i < images.length; i++) {
      data.append("images", images[i]);
    }

    const res = await fetch("http://localhost:5000/api/destinations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: data
    });

    const result = await res.json();

    if (!res.ok) {
      alert(result.message || "Upload failed");
      return;
    }

    alert("Destination added successfully");

    // reset form
    setFormData({
      name: "",
      country: "",
      description: "",
      price: "",
      duration: "",
      location: ""
    });
    setImages([]);
  };

  return (
    <div className="admin-container">
      <h1>Add Destination</h1>

      <form onSubmit={handleSubmit} className="admin-form">

        <input name="name" placeholder="Destination Name" onChange={handleChange} />
        <input name="country" placeholder="Country" onChange={handleChange} />
        <input name="location" placeholder="Location" onChange={handleChange} />
        <input name="duration" placeholder="Duration (days)" onChange={handleChange} />
        <input name="price" placeholder="Price" type="number" onChange={handleChange} />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        {/* IMAGE UPLOAD */}
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
        />

        <button type="submit">Add Destination</button>
      </form>
    </div>
  );
}
