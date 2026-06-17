import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, RefreshCw } from 'lucide-react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate submission delay
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="contact-page page-wrapper">
      <header className="contact-header animate-fade-in-up">
        <h2>Get In <span className="glow-text">Touch</span></h2>
        <p className="contact-intro-text">
          Have a project in mind, want to collaborate, or just say hello? Drop a message below!
        </p>
      </header>

      <div className="contact-layout animate-fade-in-up">
        {/* Contact info cards */}
        <div className="contact-info">
          <div className="info-item glass-card">
            <Mail className="info-icon" size={24} />
            <div className="info-text">
              <h3>Email</h3>
              <p>goyalyash317@gmail.com</p>
            </div>
          </div>

          <div className="info-item glass-card">
            <MapPin className="info-icon" size={24} />
            <div className="info-text">
              <h3>Location</h3>
              <p>Bengaluru, Karnataka</p>
            </div>
          </div>

          <div className="location-map glass-card">
            <div className="map-placeholder">
              <div className="radar-circle"></div>
              <p>Available Worldwide (Remote)</p>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="contact-form-container glass-card">
          {status === 'success' ? (
            <div className="form-success-state animate-scale-up">
              <CheckCircle2 className="success-icon" size={60} />
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I will get back to you within 24 hours.</p>
              <button onClick={() => setStatus('idle')} className="btn-primary">
                Send Another Message <RefreshCw size={16} />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..." 
                  required 
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn-primary submit-btn" 
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>Sending Message...</>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
