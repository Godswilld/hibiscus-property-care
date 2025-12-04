import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function PriceList() {
  // State to toggle between Bi-Weekly and Weekly prices
  const [cycle, setCycle] = useState('biweekly'); // 'biweekly' or 'weekly'

  return (
    <div className="pricelist-page">
      <div className="pricelist-container">
        
        {/* HEADER */}
        <div className="pricelist-header">
          <h1 className="section-title">Service Packages</h1>
          <p className="section-subtitle">Choose the schedule that fits your garden's needs.</p>

          {/* TOGGLE SWITCH */}
          <div className="pricing-toggle">
            <button 
              className={cycle === 'biweekly' ? 'toggle-btn active' : 'toggle-btn'}
              onClick={() => setCycle('biweekly')}
            >
              Bi-Weekly (Standard)
            </button>
            <button 
              className={cycle === 'weekly' ? 'toggle-btn active' : 'toggle-btn'}
              onClick={() => setCycle('weekly')}
            >
              Weekly (Premium)
            </button>
          </div>
        </div>

        {/* --- 3-COLUMN TIERS --- */}
        <div className="pricing-grid">
          
          {/* BRONZE */}
          <div className="pricing-card">
            <div className="card-header">
              <h3>Bronze</h3>
              <p>Essential Maintenance</p>
            </div>
            <div className="price-box">
              <div className="price-row">
                <span>Small</span>
                <strong>{cycle === 'biweekly' ? 'R450' : 'R750'}</strong>
              </div>
              <div className="price-row">
                <span>Medium</span>
                <strong>{cycle === 'biweekly' ? 'R700' : 'R1150'}</strong>
              </div>
              <div className="price-row">
                <span>Large</span>
                <strong>{cycle === 'biweekly' ? 'R1700' : 'R2800'}</strong>
              </div>
              <p className="per-month">per month</p>
            </div>
            <ul className="feature-list">
              <li>✅ Lawn Mowing</li>
              <li>✅ Edge Trimming</li>
              <li>✅ Basic Blow Clean</li>
            </ul>
            <Link to="/booking" className="card-btn">Choose Bronze</Link>
          </div>

          {/* SILVER */}
          <div className="pricing-card popular">
            <div className="popular-badge">Best Value</div>
            <div className="card-header">
              <h3>Silver</h3>
              <p>Complete Care</p>
            </div>
            <div className="price-box">
              <div className="price-row">
                <span>Small</span>
                <strong>{cycle === 'biweekly' ? 'R600' : 'R1000'}</strong>
              </div>
              <div className="price-row">
                <span>Medium</span>
                <strong>{cycle === 'biweekly' ? 'R800' : 'R1450'}</strong>
              </div>
              <div className="price-row">
                <span>Large</span>
                <strong>{cycle === 'biweekly' ? 'R1900' : 'R3300'}</strong>
              </div>
              <p className="per-month">per month</p>
            </div>
            <ul className="feature-list">
              <li>✅ <strong>Everything in Bronze</strong></li>
              <li>✅ Detailed Weeding</li>
              <li>✅ Hedge / Bush Trimming</li>
              <li>✅ Leaf Removal (Beds)</li>
            </ul>
            <Link to="/booking" className="card-btn fill-btn">Choose Silver</Link>
          </div>

          {/* GOLD */}
          <div className="pricing-card">
            <div className="card-header">
              <h3>Gold</h3>
              <p>Ultimate Treatment</p>
            </div>
            <div className="price-box">
              <div className="price-row">
                <span>Small</span>
                <strong>{cycle === 'biweekly' ? 'R800' : 'R1350'}</strong>
              </div>
              <div className="price-row">
                <span>Medium</span>
                <strong>{cycle === 'biweekly' ? 'R1100' : 'R1900'}</strong>
              </div>
              <div className="price-row">
                <span>Large</span>
                <strong>{cycle === 'biweekly' ? 'R2400' : 'R4100'}</strong>
              </div>
              <p className="per-month">per month</p>
            </div>
            <ul className="feature-list">
              <li>✅ <strong>Everything in Silver</strong></li>
              <li>✅ Plant Health Check</li>
              <li>✅ Fertilizer (Seasonal)</li>
              <li>✅ Mulching (Seasonal)</li>
              <li>✨ 1 Annual Pressure Wash</li>
              <li>🚗 Car Wash & Vacuum (@R99)</li>
            </ul>
            <Link to="/booking" className="card-btn">Choose Gold</Link>
          </div>

        </div>

        {/* --- A LA CARTE SECTION --- */}
        <div className="alacarte-section">
          <h2 className="section-title">A La Carte / Once-Off</h2>
          <p className="section-subtitle">Individual services tailored to your specific needs.</p>

          <div className="table-wrapper">
            <table className="price-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Small</th>
                  <th>Medium</th>
                  <th>Large</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brush-Only Lawn Cut</td>
                  <td>R450</td>
                  <td>R750</td>
                  <td>R900</td>
                </tr>
                <tr>
                  <td>Basic Garden Maint.</td>
                  <td>R650</td>
                  <td>R850</td>
                  <td>R2000</td>
                </tr>
                <tr>
                  <td>Pressure Washing</td>
                  <td>R600</td>
                  <td>R900</td>
                  <td>R1500</td>
                </tr>
                <tr>
                  <td>Weed Control (Steam)</td>
                  <td>R300</td>
                  <td>R450</td>
                  <td>R700</td>
                </tr>
                <tr>
                  <td>Weed Control (Chemical)</td>
                  <td>R200</td>
                  <td>R300</td>
                  <td>R500</td>
                </tr>
                <tr>
                  <td>Hedge Trimming</td>
                  <td>R250</td>
                  <td>R400</td>
                  <td>R600</td>
                </tr>
                <tr>
                  <td>Deep Clean / Sanitize</td>
                  <td>R650</td>
                  <td>R850</td>
                  <td>R1100</td>
                </tr>
                <tr>
                  <td>Disc Cutter Work</td>
                  <td>QOR</td>
                  <td>QOR</td>
                  <td>QOR</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{marginTop: '20px', color: '#666', fontStyle:'italic'}}>*QOR = Quote on Request</p>
        </div>

      </div>
    </div>
  );
}

export default PriceList;