import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Contact.css";
import BackButton from "../components/BackButton";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <div className="contact-page">
      <Navbar />
      <BackButton />

      <section className="contact-hero">
        <div className="contact-hero-content">
          <p className="contact-tag">GET IN TOUCH</p>
          <h1>Contact Us</h1>
          <p className="contact-subtitle">
            We would love to hear from you. Send us your questions, feedback,
            or travel inquiries and our team will get back to you soon.
          </p>
        </div>
      </section>

      <section className="contact-wrapper">
        <div className="contact-card contact-info">
          <h2>ExploreTrip Support</h2>
          <p className="info-text">
            Our team is here to help you with bookings, destinations, and
            general travel questions.
          </p>

          <div className="info-item">
            <span className="info-label">Email</span>
            <span>support@exploretrip.com</span>
          </div>

          <div className="info-item">
            <span className="info-label">Phone</span>
            <span>+1 (613) 123-4567</span>
          </div>

          <div className="info-item">
            <span className="info-label">Address</span>
            <span>Ottawa, Ontario, Canada</span>
          </div>

          <div className="info-item">
            <span className="info-label">Hours</span>
            <span>Monday - Friday, 9:00 AM - 6:00 PM</span>
          </div>
        </div>

        <div className="contact-card contact-form-box">
          <h2>Send a Message</h2>

          {submitted && (
            <div className="success-message">
              Your message has been sent successfully.
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Write your message here..."
              rows="7"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;