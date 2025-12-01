import React from 'react';
import { Link } from 'react-router-dom';

/* --- UPDATED IMPORTS (Using ../ to go back up to src) --- */
import '../App.css'; 
import homeHero from '../homeHero.jpg';
import galSection from '../galSection.jpg';

function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <div 
        className="hero-container" 
        style={{ backgroundImage: `url(${homeHero})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content" id="home">
          <h1 className="hero-title">Your Space, Reimagined.</h1>
          <p className="hero-subtitle">
            Comprehensive care for your personal paradise.
          </p>
          <Link to="/booking" className="hero-btn">Get a Quote</Link>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className="services-section" id="services">
        <h2 className="section-title">Comprehensive Care</h2>
        <p className="section-subtitle">We handle the dirty work so you can enjoy the view.</p>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="card-icon">✂️</div>
            <h3 className="card-title">Lawn Maintenance</h3>
            <p className="card-desc">Precision mowing, edging, and fertilization to keep your grass greener than the neighbors.</p>
          </div>

          <div className="service-card">
            <div className="card-icon">🌿</div>
            <h3 className="card-title">Garden Design</h3>
            <p className="card-desc">Custom floral layouts and planting schemes that bloom year-round.</p>
          </div>

          <div className="service-card">
            <div className="card-icon">🧹</div>
            <h3 className="card-title">Site Cleanup</h3>
            <p className="card-desc">Rubbish removal, storm cleanup, and general site tidying for a pristine property.</p>
          </div>
        </div>
      </div>

      {/* FEATURED SECTION */}
      <div className="featured-section" id="gallery">
        <div className="featured-wrapper">
          <div className="featured-image-box">
             <img src={galSection} alt="Beautiful Garden Path" className="featured-img" />
          </div>
          <div className="featured-text-box">
            <h4 className="small-label">FEATURED PROJECT</h4>
            <h2 className="featured-title">The "Zen Oasis" Transformation</h2>
            <p className="featured-desc">
              We took a barren backyard and turned it into a lush, tranquil escape. 
              Using native plants and drought-resistant ferns, we created a sustainable 
              garden that looks incredible in every season.
            </p>
            <button className="outline-btn">View Full Gallery &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;