import React from 'react';
import './Navba.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="your-logo.png" alt="OddsMonkey" className="logo-icon" />
        <span className="logo-text">
          Odds<span className="highlight">Monkey</span>
        </span>
      </div>
      <ul className="navbar-links">
        <li className="dropdown">
          Matched Betting <span className="dropdown-arrow">▼</span>
        </li>
        <li className="dropdown">
          Betting Calculators <span className="dropdown-arrow">▼</span>
        </li>
        <li className="dropdown">
          Betting Guides <span className="dropdown-arrow">▼</span>
        </li>
        <li className="dropdown">
          Casino Matched Betting <span className="dropdown-arrow">▼</span>
        </li>
        <li className="dropdown">
          Side Hustles <span className="dropdown-arrow">▼</span>
        </li>
      </ul>
      <div className="navbar-buttons">
        <button className="free-trial">FREE Trial</button>
        <button className="login">Log In</button>
      </div>
    </nav>
  );
};

export default Navbar;
