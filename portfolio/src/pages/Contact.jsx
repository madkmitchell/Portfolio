// pages/Contact.jsx
import React, { useState } from 'react';
import "../styles/contact.css";


const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert("Thanks partner! I'll get back to you soon."); setForm({ name: '', email: '', message: '' }); };
  return (
    <div className="contact-page container">
      <div className="contact-header">
        <h1 className="section-title">Saddle Up & Connect</h1>
        <div className="western-divider"></div>
        <p>Looking for custom design or collaboration? Send a message.</p>
      </div>
      <div className="contact-wrapper">
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
          <textarea name="message" rows="5" placeholder="Tell me about your project..." value={form.message} onChange={handleChange} required></textarea>
          <button type="submit" className="western-btn">Send Message →</button>
        </form>
        <div className="contact-info">
          <h3>madison@westernstudios.com</h3>
          <div className="social-icons">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-behance"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
          <div className="western-address">📍 Marfa, Texas — available worldwide</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;