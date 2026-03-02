import { useState, useEffect } from "react";
import '../css/admin.css';
import toast from "react-hot-toast";
import { API_BASE_URL } from "../api";

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
  const [destinations, setDestinations] = useState([]);
  const [editingDestination, setEditingDestination] = useState(null);

  // Fetch destinations on mount
  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/destinations`);
      const data = await res.json();
      setDestinations(data);
    } catch (error) {
      console.error("Error fetching destinations:", error);
      toast.error("Failed to load destinations.");
    }
  };

  // TEXT INPUT HANDLER
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e) => {
    setEditingDestination({ ...editingDestination, [e.target.name]: e.target.value });
  };

  // IMAGE HANDLER
  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  // SUBMIT ADD
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) return toast.error("Unauthorized");

    const data = new FormData();

    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });

    for (let i = 0; i < images.length; i++) {
      data.append("images", images[i]);
    }

    const res = await fetch(`${API_BASE_URL}/api/destinations`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: data
    });

    const result = await res.json();

    if (!res.ok) {
      toast.error(result.message || "Upload failed");
      return;
    }

    toast.success("Destination added successfully");

    setFormData({
      name: "",
      country: "",
      description: "",
      price: "",
      duration: "",
      location: ""
    });
    setImages([]);
    fetchDestinations(); // Refresh list
  };

  // DELETE DESTINATION
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this destination?")) return;

    const token = localStorage.getItem("token");
    if (!token) return toast.error("Unauthorized");

    try {
      const res = await fetch(`${API_BASE_URL}/api/destinations/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (res.ok) {
        toast.success("Destination deleted successfully");
        fetchDestinations(); // Refresh list
      } else {
        const result = await res.json();
        toast.error(result.message || "Failed to delete");
      }
    } catch (error) {
      console.error("Error deleting:", error);
      toast.error("Error deleting destination");
    }
  };

  // EDIT DESTINATION SUBMIT
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return toast.error("Unauthorized");

    try {
      const res = await fetch(`${API_BASE_URL}/api/destinations/${editingDestination._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(editingDestination)
      });

      if (res.ok) {
        toast.success("Destination updated successfully");
        setEditingDestination(null); // Close modal
        fetchDestinations(); // Refresh list
      } else {
        const result = await res.json();
        toast.error(result.message || "Failed to update");
      }
    } catch (error) {
      console.error("Error updating:", error);
      toast.error("Error updating destination");
    }
  };

  return (
    <div className="admin-container">
      <h1>Add Destination</h1>

      <form onSubmit={handleSubmit} className="admin-form mb-5">
        <input name="name" placeholder="Destination Name" value={formData.name} onChange={handleChange} required />
        <input name="country" placeholder="Country" value={formData.country} onChange={handleChange} required />
        <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <input name="duration" placeholder="Duration (days)" value={formData.duration} onChange={handleChange} required />
        <input name="price" placeholder="Price" type="number" value={formData.price} onChange={handleChange} required />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
        />

        <button type="submit">Add Destination</button>
      </form>

      <div className="destinations-list-container">
        <h2>Manage Destinations</h2>
        {destinations.length === 0 ? (
          <p>No destinations found.</p>
        ) : (
          <div className="destinations-list">
            {destinations.map((dest) => (
              <div key={dest._id} className="destination-item">
                <div className="destination-info">
                  <h3>{dest.name}</h3>
                  <p>{dest.location}, {dest.country} - ₹{dest.price}</p>
                </div>
                <div className="destination-actions">
                  <button className="edit-btn" onClick={() => setEditingDestination(dest)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(dest._id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* EDIT MODAL */}
      {editingDestination && (
        <div className="edit-modal-overlay">
          <div className="edit-modal">
            <h2>Edit Destination</h2>
            <form onSubmit={handleEditSubmit} className="admin-form">
              <input name="name" placeholder="Destination Name" value={editingDestination.name} onChange={handleEditChange} required />
              <input name="country" placeholder="Country" value={editingDestination.country} onChange={handleEditChange} required />
              <input name="location" placeholder="Location" value={editingDestination.location} onChange={handleEditChange} required />
              <input name="duration" placeholder="Duration (days)" value={editingDestination.duration} onChange={handleEditChange} required />
              <input name="price" placeholder="Price" type="number" value={editingDestination.price} onChange={handleEditChange} required />

              <textarea
                name="description"
                placeholder="Description"
                value={editingDestination.description}
                onChange={handleEditChange}
                required
              />
              <div className="modal-actions">
                <button type="submit" className="save-btn">Save Changes</button>
                <button type="button" className="cancel-btn" onClick={() => setEditingDestination(null)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
