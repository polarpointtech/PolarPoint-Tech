import React, { useState } from 'react';
import './ContactUs.scss';
import contactHero from '../assets/home1-1.png';

const services = [
  {
    name: 'Manufacturing',
    note: 'Tell us about your machining, OEM production, fabrication, or industrial supply needs.',
  },
  {
    name: 'Construction',
    note: 'Tell us about your construction project, sourcing needs, or site support requirements.',
  },
  {
    name: 'Technology',
    note: 'Tell us about your website, digital workflow, or custom system requirements.',
  },
];

function ServiceIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.4 16.5c1.7-3.1 3.7-6.5 5.1-8.1.7-.8 1.5-.3 1.1.7l-2.3 6.1c-.3.9.5 1.4 1.2.8l2.6-2.5c.7-.6 1.6-.2 1.3.7l-.4 1.2c-.3.8.4 1.4 1.1.8l1.5-1.2" />
    </svg>
  );
}

export default function ContactUs() {
  const [selectedService, setSelectedService] = useState(null);
  const selectedServiceName = selectedService?.name || '';

  return (
    <main className="contact-page">
      <section className="contact-hero" style={{ backgroundImage: `url(${contactHero})` }}>
        <div className="contact-hero-content">
          <p className="caption">CAPTION</p>
          <h1>Contact us</h1>
          <p className="hero-copy">
            Pellentesque convallis accumsan suscipit aliquet eu diam quis nulla turpis.
            In mus massa lectus laoreet sed semper bibendum id. Iaculis purus
            malesuada porttitor aliquam pulvinar.
          </p>

          <div className="service-pills" aria-label="Contact service categories">
            {services.map((service) => (
              <button
                className={selectedServiceName === service.name ? 'active' : ''}
                type="button"
                key={service.name}
                onClick={() => setSelectedService(selectedServiceName === service.name ? null : service)}
              >
                <ServiceIcon />
                {service.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <form className="figma-contact-form">
          <p className={`form-note ${selectedService ? '' : 'empty'}`}>
            {selectedService?.note || 'Inquiry category note'}
          </p>
          <input type="hidden" name="inquiryType" value={selectedServiceName} />

          <div className="form-row two">
            <label>
              <span>Contact Person</span>
              <input type="text" name="contactPerson" placeholder="Your Name" />
            </label>
            <label>
              <span>Company Name</span>
              <input type="text" name="companyName" placeholder="Your Company Name" />
            </label>
          </div>

          <div className="form-row two">
            <label className="email-field">
              <span>Email</span>
              <input type="email" name="email" placeholder="Your Email Address" />
            </label>
            <label className="phone-field">
              <span>Phone / Mobile</span>
              <input type="tel" name="phone" placeholder="02-1234-5678 / 0912-345-678" />
            </label>
          </div>

          <label className="message-field">
            <span>Message</span>
            <textarea
              name="message"
              rows="4"
              placeholder="We will collect and process your personal contact information in accordance with our Privacy Policy. With your consent, we may also send you marketing-related content."
            />
          </label>

          <div className="consent-row">
            <label>
              <input type="checkbox" />
              <span>I agree to the <a href="#">Privacy Policy</a> and consent to being contacted.</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>I would like to receive service and business updates.</span>
            </label>
          </div>

          <button className="submit-btn" type="button">Submit</button>
        </form>
      </section>
    </main>
  );
}
