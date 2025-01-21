import React from "react";

function Projects() {
  const projects = [
    {
      name: "Personal Day2Day Task Tracker API",
      description:
        "TBC",
      link: "TBC",
    },
    {
      name: "CV JS Project",
      description:
        "Created a responsive portfolio site using React and node.js framework.",
      link: "https://github.com/gmerlerati98/cv_project",
    },
    {
      name: "Champions League History App",
      description:
        "A basic app that looks at data fetched from an API for the 2023/2024 Champions League Campaign. Mainly written in Python and utilises Flask app framework.",
      link: "https://github.com/gmerlerati98/ChampionsLeagueHistoryApp",
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
