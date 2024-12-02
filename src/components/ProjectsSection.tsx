import React from "react";
import { useState } from "react";

interface Projects {
  id: number;
  title: string;
  category: string;
  imgURL: string;
  backgroundColor: string;
}

const projects: Projects[] = [
  {
    id: 1,
    title: "CREATIVE TEMPLATE",
    category: "DESIGN",
    imgURL: "SOME LINK",
    backgroundColor: "SOME COLOR",
  },
  {
    id: 2,
    title: "AMAZING STARTUP",
    category: "BRANDING",
    imgURL: "SOME LINK",
    backgroundColor: "SOME COLOR",
  },
];

const categories = ["All", "Design", "Development", "Branding", "Products"];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  //Filter for category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <section className="projects-section">
        <div className="projects-section-header">
          <h2 className="projects-section-title">Check Our Projects</h2>
          <p className="projects-section-description">
            Minuteness of the parts formed a great hindrance to my speed,
            resolved, contrary to my first intention, to make the being.
            Minuteness of the parts formed a great hindrance to my speed,
            resolved, contrary to my first intention, to make the being.
          </p>
        </div>

        {/* Categories */}
        <div className="categories-container">
          <div className="categories-name">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-button ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              style={{ backgroundColor: project.backgroundColor }}
              className="project-card"
            >
              <img src={project.imgURL} alt={project.title} />

              <div className="project-card-info">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div>
          <button>Load More</button>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
