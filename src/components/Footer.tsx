import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="newsletter">
          <h2>NEWSLETTER SIGN UP</h2>
          <div className="newsletter-form">
            <div className="email-input-container">
              <h3>GET IN TOUCH</h3>
              <form>
                <input
                  type="email"
                  placeholder="Your email"
                  className="email-input"
                />
                <button type="submit" className="subscribe-button">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-columns">
            {/* Left Column */}
            <div className="footer-column">
              <h3>AGENCY</h3>
              <p>Agency © 2019.</p>
              <p>All Rights Reserved.</p>
            </div>

            {/* Middle Column */}
            <div className="footer-column">
              <h3>ADDRESS</h3>
              <p>3899 Fusce Rd. Frederick</p>
              <p>Nebraska 20620</p>
              <p>info@agency.com</p>
              <p>+1 (234) 567-89-00</p>
            </div>

            {/* Right Column */}
            <div className="footer-column">
              <h3>MENU</h3>
              <ul>
                <li>About</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Testimonials</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="social-media">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
