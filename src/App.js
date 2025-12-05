import React, { useState } from 'react'; // Added useState
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; 
import { FaBars, FaTimes } from 'react-icons/fa'; // Import Icons
import './App.css';
import logo from './logo.png'; 

/* --- IMPORTS --- */
import Home from './pages/Home';
import Booking from './pages/Booking';
import PriceList from './pages/PriceList'; 

function App() {
  // State to track if menu is open or closed
  const [click, setClick] = useState(false);

  // Toggle function
  const handleClick = () => setClick(!click);
  
  // Close menu when a link is clicked
  const closeMobileMenu = () => setClick(false);

  return (
    <Router>
      <div className="App">
        
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="nav-container">
            
            {/* Logo */}
            <HashLink smooth to="/#home" className="logo-link" onClick={closeMobileMenu}>
              <img src={logo} alt="Hibiscus Property Care" className="nav-logo" />
            </HashLink>
            
            {/* Mobile Menu Icon (Hamburger/X) */}
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            {/* Nav Links (Note the conditional class 'active') */}
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <HashLink smooth to="/#home" className="nav-link" onClick={closeMobileMenu}>
                  Home
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="/#services" className="nav-link" onClick={closeMobileMenu}>
                  Services
                </HashLink>
              </li>
              <li className="nav-item">
                <Link to="/pricelist" className="nav-link" onClick={closeMobileMenu}>
                  Price List
                </Link>
              </li>
              <li className="nav-item">
                <HashLink smooth to="/#gallery" className="nav-link" onClick={closeMobileMenu}>
                  Gallery
                </HashLink>
              </li>
              <li className="nav-item">
                <Link to="/booking" className="nav-link quote-btn-nav" onClick={closeMobileMenu}>
                  Get Quote
                </Link>
              </li>
            </ul>

          </div>
        </nav>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/pricelist" element={<PriceList />} />
        </Routes>

        {/* FOOTER */}
        <footer className="footer-section" id="contact">
          <div className="footer-content">
            <img src={logo} alt="Hibiscus Logo" className="footer-logo-img" />
            <p style={{color: '#888'}}>Making the world greener, one yard at a time.</p>
            <div className="contact-info">
              <p>📞 +27-62-910-6691</p>
              <p>📧 admin@hibiscuspropertycare.co.za</p>
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