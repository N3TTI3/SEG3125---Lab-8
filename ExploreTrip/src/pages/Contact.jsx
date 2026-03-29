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

  async function handleSubmit(e) {
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
    try {
    const response = await fetch("http://localhost:5001/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    if (!response.ok) {
      alert(data.error || "Something went wrong.");
      return;
    }


    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Server error, Failed to send message. Please try again later.");
  }
  }
  return (
    <div>
      <Navbar />
      <BackButton />

      <section className="container py-5" style={{ maxWidth: "1100px" }}>
        <div className="text-center mb-5">
          <p className="text-uppercase text-muted fw-semibold mb-2">GET IN TOUCH</p>
          <h1 className="mb-3">Contact Us</h1>
          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            We would love to hear from you. Send us your questions, feedback,
            or travel inquiries and our team will get back to you soon.
          </p>
        </div>

      <div className="row g-4 align-items-stretch">
        <div className="col-lg-6">
           <div className="card shadow-sm border-0 h-100">
            <div className="card-body p-4">
               <h2 className="h4 mb-3">ExploreTrip Support</h2>
               <p className="text-muted mb-4">
            Our team is here to help you with bookings, destinations, and
            general travel questions.
          </p>

          <div className="mb-3">
            <div className="fw-bold">Email</div>
            <div className="text-muted">support@exploretrip.com</div>
          </div>

          <div className="mb-3">
            <div className="fw-bold">Phone</div>
            <div className="text-muted">+1 (613) 123-4567</div>
          </div>

          <div className="mb-3">
            <div className="fw-bold">Address</div>
            <div className="text-muted">Ottawa, Ontario, Canada</div>
          </div>

          <div className="mb-3">
            <div className="fw-bold">Hours</div>
            <div className="text-muted">Monday - Friday, 9:00 AM - 6:00 PM</div>
          </div>
        </div>
       </div>
     </div>
  </div>

        <div className="col-lg-6">
          <div className="card shadow-sm border-0 h-100">
              <div className="card-body p-4">
                <h2  className="h4 mb-3">Send a Message</h2>

          {submitted && (
            <div className= "alert alert-success" role="alert">
              Your message has been sent successfully.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row g-3 mb-3">
              <div className="col-md-6">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              </div>

              <div className="col-md-6">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="subject"
              className="form-control"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            </div>

            <div className="mb-3">
            <textarea
              name="message"
              className="form-control"
              placeholder="Write your message here..."
              rows="7"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            </div>

            <button type="submit" className="btn btn-primary px-4 w-100">
              Send Message
            </button>
          </form>
        </div>
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;