import React from "react";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  feedback: string;
  imgURL: string;
  backgroundColor: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "HELENA BRAUER",
    company: "Apple Inc.",
    feedback:
      "What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.",
    imgURL: "SOME LINK",
    backgroundColor: "SOME COLOR",
  },
  {
    id: 2,
    name: "KAY TOTLEBEN",
    company: "Microsoft",
    feedback:
      "What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.",
    imgURL: "SOME LINK",
    backgroundColor: "SOME COLOR",
  },
];

const partnersLogos = [
  "https://via.placeholder.com/100x50?text=Atlassian", // Replace with actual logo URLs
  "https://via.placeholder.com/100x50?text=Slack",
  "https://via.placeholder.com/100x50?text=Dropbox",
  "https://via.placeholder.com/100x50?text=Shopify",
  "https://via.placeholder.com/100x50?text=Google",
];

const PartnersSection: React.FC = () => {
  return (
    <>
      <section className="partners-section">
        <div>
          <h2>WHAT OUR CLIENTS SAY</h2>
          <p>TESTIMONIALS</p>
          {/* Cards */}
          <div className="testimonials-container">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                style={{ backgroundColor: testimonial.backgroundColor }}
                className="testimonial-card"
              >
                <img src={testimonial.imgURL} alt={testimonial.name} />
                <h3>{testimonial.name}</h3>
                <p>{testimonial.company}</p>
                <p>{testimonial.feedback}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="testimonials-navigation">
            <button></button>
            <button></button>
          </div>

          {/* Partners */}
          <div className="partners">
            <div className="partners-logos">
              {partnersLogos.map((logo, index) => (
                <img key={index} src={logo} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersSection;
