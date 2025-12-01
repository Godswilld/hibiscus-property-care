import React, { useState } from "react";
import emailjs from "emailjs-com";

function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    service: ""
  });
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErr(null);
    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form,
      "YOUR_USER_ID"
    ).then(() => {
      setSent(true);
    }).catch(e => {
      setErr("Failed to send! Please try again.");
    });
  };

  if (sent) return <p>Booking submitted! We'll be in touch soon.</p>;

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
      <div>
        <label>Name:</label>
        <input name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input name="email" value={form.email} onChange={handleChange} required type="email" />
      </div>
      <div>
        <label>Preferred Date:</label>
        <input name="date" value={form.date} onChange={handleChange} required type="date" />
      </div>
      <div>
        <label>Service:</label>
        <select name="service" value={form.service} onChange={handleChange} required>
          <option value="">Select a service</option>
          <option value="Lawn Care">Lawn Care</option>
          <option value="Garden Maintenance">Garden Maintenance</option>
          <option value="Planting">Planting</option>
          <option value="Landscaping">Landscaping</option>
        </select>
      </div>
      <button type="submit" style={{ marginTop: 10, background: "#76b852", color: "white" }}>Submit</button>
      {err && <p style={{ color: "red" }}>{err}</p>}
    </form>
  );
}

export default BookingForm;