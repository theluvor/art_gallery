import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Навигация */}
        <nav className="footer-nav">
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <a href="/gallery" className="footer-nav-link">
                Картины
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="/authors" className="footer-nav-link">
                Художники
              </a>
            </li>
          </ul>
        </nav>

        {/* Копирайт по центру */}
        <div className="footer-copyright">
          <span className="copyright-text">
            Создано theluvor и Kamyshek23
          </span>
        </div>

        {/* Логотип */}
        <div className="footer-logo">
          <a href="/" className="footer-logo-link">
            <span className="footer-logo-text">ArtGallery</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;