import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../logo.png'; 

function PriceList() {
  return (
    <div className="pricelist-page">
      
      {/* PAPER CONTAINER (The White Flyer Box) */}
      <div className="pricelist-paper">
        
        {/* HEADER SECTION */}
        <div className="pricelist-header">
          <img src={logo} alt="Hibiscus Logo" className="pricelist-logo" />
          <h5 className="brand-subtitle">HIBISCUS PROPERTY CARE</h5>
          <h1 className="pricelist-title">PRICE LIST</h1>
          <h2 className="pricelist-sub">Subscription Garden Care Packages <br/>(Bi-Weekly)</h2>
        </div>

        {/* TOP ROW: BRONZE & SILVER */}
        <div className="tiers-row">
          
          {/* BRONZE PACKAGE */}
          <div className="tier-card bronze-tier">
            <h3 className="tier-name">Bronze</h3>
            <div className="price-group">
              <p><strong>Small (&lt;200m²)</strong> = R450pm</p>
              <p><strong>Medium (200m²-500m²)</strong> = R700pm</p>
              <p><strong>Large (500m²-1000m²)</strong> = R1700pm</p>
            </div>
            <ul className="tier-features">
              <li>Lawn Mowing</li>
              <li>Edge Trimming</li>
              <li>Basic Blow Clean</li>
            </ul>
          </div>

          {/* SILVER PACKAGE */}
          <div className="tier-card silver-tier">
            <div className="best-value-badge">Best Value</div>
            <h3 className="tier-name">Silver</h3>
            <div className="price-group">
              <p><strong>Small (&lt;200m²)</strong> = R600pm</p>
              <p><strong>Medium (200m²-500m²)</strong> = R800pm</p>
              <p><strong>Large (500m²-1000m²)</strong> = R1900pm</p>
            </div>
            <ul className="tier-features">
              <li>Lawn Mowing</li>
              <li>Edge Trimming</li>
              <li>Basic Blow Clean</li>
              <li>Detailed Weeding</li>
              <li>Hedge Bush Trimming</li>
              <li>Leaf Removal from Beds</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ROW: GOLD */}
        <div className="gold-row">
          <div className="tier-card gold-tier">
            <h3 className="tier-name">Gold</h3>
            
            <div className="gold-content">
              <div className="gold-prices">
                <p><strong>Small (&lt;200m²)</strong> = R800pm</p>
                <p><strong>Medium (200m²-500m²)</strong> = R1100pm</p>
                <p><strong>Large (500m²-1000m²)</strong> = R2400pm</p>
              </div>

              <div className="gold-features-grid">
                <ul className="tier-features">
                  <li>Lawn Mowing</li>
                  <li>Edge Trimming</li>
                  <li>Basic Blow Clean</li>
                  <li>Detailed Weeding</li>
                  <li>Hedge Bush Trimming</li>
                  <li>Leaf Removal from Beds</li>
                  <li>Plant Health Check</li>
                  <li>Fertilizer Application (Seasonal)</li>
                </ul>
                
                <ul className="tier-features premium-features">
                  <li><strong>• Mulching (Seasonal)</strong></li>
                  <li><strong>• 1 Annual Pressure Wash</strong></li>
                  <li className="special-offer">
                    <strong>• Monthly Premium Car Wash & Vacuum @R99</strong> <br/>
                    <span style={{fontSize: '0.8rem', color: '#666'}}>(R300 value)</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* FOOTER CALL TO ACTION */}
        <div className="pricelist-footer">
          <h2>Order Here:</h2>
          <div className="order-links">
             <Link to="/booking" className="order-btn">Book Now</Link>
             <p className="phone-number">📞 +27-62-910-6691</p>
          </div>
          <p className="web-link">www.hibiscuspropertycare.co.za</p>
        </div>

      </div>
    </div>
  );
}

export default PriceList;