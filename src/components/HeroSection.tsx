import Header from "./Header";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <>
      <header className="hero">
        <Header />

        <div className="hero-content">
          <div className="text-content">
            <h1>WE CREATE AMAZING SITES WITH EASE</h1>
            <div className="description">
              <i className="icon"></i>
              <p>A PEEP AT SOME DISTANT ORB HAS POWER TO RAISE AND PURIFY</p>
            </div>
          </div>
          <div className="image-content">
            <div className="illustration"></div>
          </div>
        </div>

        <div className="pagination">
          <button className="prevButton">&lt;</button>
          <span className="page-indicator">1 / 2</span>
          <button className="nextButton">&gt;</button>
        </div>

        <div className="section-separator"></div>
      </header>
    </>
  );
};

export default HeroSection;
