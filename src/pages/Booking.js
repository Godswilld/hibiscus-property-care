import React from 'react';
import '../App.css'; // Go back up one level to find CSS

function Booking() {
  return (
    <div className="booking-page">
      <div className="booking-container">
        <h1 className="section-title">Request a Quote</h1>
        <p className="section-subtitle">Tell us about your property, and we'll get back to you within 24 hours.</p>

        <form className="booking-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="john@example.com" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="(083) 555-0123" />
          </div>

          <div className="form-group">
            <label>Service Type</label>
            <select>
              <option>Lawn Maintenance</option>
              <option>Garden Design</option>
              <option>Tree Felling / Trimming</option>
              <option>Site Cleanup</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message / Details</label>
            <textarea rows="5" placeholder="Tell us about the size of the yard or specific needs..."></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Request</button>
        </form>
      </div>
    </div>
  );
}

export default Booking;