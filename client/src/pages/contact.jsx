import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/contact.css";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token") // 🔐 user must be logged in
      },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      alert("Your request has been sent to admin");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: ""
      });
    } else {
      alert("Failed to send message");
    }
  };

  return (
    <>
      <Header />

      <main>
        <h1>Contact Us</h1>
        <p>If you have any questions or need assistance, feel free to reach out to us.</p>

        <form onSubmit={handleSubmit}>

          <div className="contact-name">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="mobile">Contact Number:</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message">Message:</label><br />
            <textarea
              id="message"
              name="message"
              rows="4"
              cols="30"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </main>

      <Footer />
    </>
  );
}
