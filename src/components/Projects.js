import React from "react";

function Projects() {
  const projects = [
    {
      name: "Personal Finance Tracker",
      description:
        "Built a finance tracking app using FastAPI, Streamlit, and TensorFlow for analytics.",
      link: "https://github.com/yourusername/finance-tracker",
    },
    {
      name: "Portfolio Website",
      description:
        "Created a responsive portfolio site using React and Bootstrap.",
      link: "https://github.com/yourusername/portfolio-website",
    },
  ];

  return (
    <section className="mb-4">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <strong>{project.name}</strong>: {project.description}{" "}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
