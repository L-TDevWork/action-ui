import React from "react";


export const ContactUsScreen: React.FC = () => {
  return (
    <div className="contact-page">
      {/* Header */}
      <section className="contact-header">
        <div className="container">
          <div className="header-text">
            <h1>Contact Us</h1>
            <p>Join your hand with us for a better life and beautiful future.</p>
          </div>
          <div className="breadcrumb">
            <a href="/">Home</a><span className=""> &gt; </span><span>Contact Us</span>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="contact-info">
        <div className="container info-grid">
          <div className="info-card">
            <i className="fa fa-map-marker"></i>
            <h3>Address</h3>
            <p>10th floor 16 Baker St, Rosebank, Johannesburg 2196</p>
          </div>
          <div className="info-card">
            <i className="fa fa-phone"></i>
            <h3>Phone Number</h3>
            <p>Telephone: 087 980 7791</p>
          </div>
          <div className="info-card">
            <i className="fa fa-envelope-o"></i>
            <h3>Email</h3>
            <p>supporters.za@actionaid.org</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container form-grid">
          <div className="form-column">
            <h2>Contact Enquiry</h2>
            <form>
              <div className="row">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
              </div>
              <div className="row">
                <input type="tel" placeholder="Phone Number" required />
                <input type="text" placeholder="City" required />
              </div>
              <textarea placeholder="Message" rows={6} required />
              <button type="submit">Send Enquiry</button>
            </form>
          </div>
          <div className="image-column">
            <img
              src="https://www.actionaid.org.za/wp-content/uploads/2019/08/contactus.png"
              alt="Contact Us"
            />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3581.52246141058!2d28.035692!3d-26.147109!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c8e659d2de3%3A0x7646c33a810e59e!2s158+Jan+Smuts+Ave%2C+Rosebank%2C+Johannesburg%2C+2196!5e0!3m2!1sen!2sza!4v1565941479752!5m2!1sen!2sza"
          loading="lazy"
          allowFullScreen
          title="Location Map"
        ></iframe>
      </section>
    </div>
  );
};
