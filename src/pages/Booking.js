import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css';

function Booking() {
  const form = useRef();
  const [status, setStatus] = useState(''); // To show success message

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // REPLACE THESE 3 STRINGS WITH YOUR ACTUAL EMAILJS KEYS
    const SERVICE_ID = 'service_xkvco7d';
    const TEMPLATE_ID = 'template_8h51efq';
    const PUBLIC_KEY = '9f2oUOeiSIjhrxB9Z';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus('Message Sent! We will contact you shortly.');
          e.target.reset(); // Clears the form
      }, (error) => {
          console.log(error.text);
          setStatus('Failed to send. Please try again or call us.');
      });
  };

  return (
    <div className="booking-page">
      <div className="booking-container">
        <h1 className="section-title">Request a Quote</h1>
        <p className="section-subtitle">Tell us about your property, and we'll get back to you within 24 hours.</p>

        {/* The Form */}
        <form className="booking-form" ref={form} onSubmit={sendEmail}>
          
          <div className="form-group">
            <label>Full Name</label>
            {/* 'name' attribute must match {{variables}} in EmailJS template */}
            <input type="text" name="user_name" placeholder="John Doe" required />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="user_email" placeholder="john@example.com" required />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="user_phone" placeholder="(083) 555-0123" required />
          </div>

          <div className="form-group">
            <label>Service Type</label>
            <select name="service_type">
              <option value="Lawn Maintenance">Lawn Maintenance</option>
              <option value="Garden Design">Garden Design</option>
              <option value="Tree Felling">Tree Felling / Trimming</option>
              <option value="Site Cleanup">Site Cleanup</option>
              <option value="Weekly Package">Weekly Package</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message / Details</label>
            <textarea name="message" rows="5" placeholder="Tell us about the size of the yard or specific needs..."></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Request</button>
          
          {/* Success/Error Message */}
          {status && <p style={{marginTop: '15px', color: 'green', fontWeight: 'bold'}}>{status}</p>}
        </form>
      </div>
    </div>
  );
}

export default Booking;