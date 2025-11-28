import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/" className="logo-link">
            <span className="logo-text">ArtGallery</span>
          </a>
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/gallery" className="nav-link">
                Картины
              </a>
            </li>
            <li className="nav-item">
              <a href="/authors" className="nav-link">  
                Художники
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;