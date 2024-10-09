// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

function About() {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Us</h1>
        <p className="about-intro">
          We specialize in providing unforgettable experiences in Ethiopia, showcasing the country's breathtaking landscapes, rich cultural heritage, and unique attractions. Join us on a journey to explore Ethiopia's wonders and discover its vibrant history and traditions.
        </p>
      </section>

      <section className="about-details">
        <h2>What We Offer</h2>
        <ul>
          <li>Guided tours to historical sites like Lalibela and Aksum</li>
          <li>Adventure trips to the Simien Mountains and Danakil Depression</li>
          <li>Cultural experiences with local communities</li>
          <li>Tailored itineraries to suit your interests</li>
        </ul>
      </section>

      <section className="about-footer">
        <p>
          Whether you are looking for a relaxing retreat or an adventurous getaway, we ensure a memorable experience. Our team of experienced guides and travel experts is here to make your trip to Ethiopia truly special.
        </p>
        <Link to="/">
          <button className="back-home-button">Back to Home</button>
        </Link>
      </section>
    </div>
  );
}

export default About;
