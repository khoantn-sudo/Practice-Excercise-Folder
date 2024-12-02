import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <header className="navbar">
        <div className="logo">AGENCY</div>

        <ul className="nav-links">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="hamburger-menu">
          <span></span>
        </div>
      </header>
    </>
  );
};

export default Header;
