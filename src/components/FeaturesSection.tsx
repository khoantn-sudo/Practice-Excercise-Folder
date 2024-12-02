import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <>
      <section className="features-section">
        <div className="features-header">
          <h2>OUR CORES FEATURES</h2>
          <p>
            Minuteness of the parts formed a great hindrance to my speed,
            resolved, contrary to my first intention, to make the being.
            Minuteness of the parts formed a great hindrance to my speed,
            resolved, contrary to my first intention, to make the being.
          </p>
        </div>

        <div className="features-cards">
          {/* Card 1 */}
          <div className="features-cards purple">
            <div className="icon"></div>
            <h3>WHITE LABEL</h3>
            <p>
              Minuteness of the parts formed a great hindrance to my speed,
              resolved, contrary to my first intention, to make the being.
            </p>
          </div>

          {/* Card 2 */}
          <div className="features-cards green">
            <div className="icon"></div>
            <h3>CODE EXPORT</h3>
            <p>
              Minuteness of the parts formed a great hindrance to my speed,
              resolved, contrary to my first intention, to make the being.
            </p>
          </div>
        </div>

        <div className="pagination">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
