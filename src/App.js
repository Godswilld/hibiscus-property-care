import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; 
import './App.css';
import logo from './logo.png'; 

/* --- IMPORTS --- */
import Home from './pages/Home';
import Booking from './pages/Booking';
import PriceList from './pages/PriceList'; // Import new page

function App() {
  return (
    <Router>
      <div className="App">
        
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="nav-container">
            <HashLink smooth to="/#home" className="logo-link">
              <img src={logo} alt="Hibiscus Property Care" className="nav-logo" />
            </HashLink>
            
            <div className="nav-links">
              <HashLink smooth to="/#home" className="nav-link">Home</HashLink>
              <HashLink smooth to="/#services" className="nav-link">Services</HashLink>
              
              {/* NEW PRICE LIST LINK */}
              <Link to="/pricelist" className="nav-link">Price List</Link>
              
              <HashLink smooth to="/#gallery" className="nav-link">Gallery</HashLink>
              <Link to="/booking" className="nav-link quote-btn-nav">Get Quote</Link>
            </div>
          </div>
        </nav>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/pricelist" element={<PriceList />} /> {/* New Route */}
        </Routes>

        {/* FOOTER */}
        <footer className="footer-section" id="contact">
          <div className="footer-content">
            <img src={logo} alt="Hibiscus Logo" className="footer-logo-img" />
            <p style={{color: '#888'}}>Making the world greener, one yard at a time.</p>
            <div className="contact-info">
              <p>📞 +27-62-910-6691</p>
              <p>📧 hello@hibiscuscare.com</p>
            </div>
            <div className="copyright">
              &copy; 2025 Hibiscus Property Care. All rights reserved.
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;