import React from "react";

function Experience() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Lloyds Banking Group",
      duration: "2021 - Present",
      description: [
        "Developed and maintained existing software.",
        "Deployed applications to implement automation.",
        "Collaborated with cross-functional teams to design scalable solutions through Hackathons.",
        "Attended and hosted Agile rituals to ensure team synergy and common quartely goals",
      ],
    },
    {
      role: "Head Online Coach",
      company: "Potenza Powerlifting",
      duration: "2020 - Present",
      description: [
        "Built frontend components using React and Bootstrap.",
        "Optimized API calls for better performance.",
        "Wrote unit and integration tests to ensure code quality.",
      ],
    },
  ];

  return (
    <section className="mb-4">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-3">
          <h4>{exp.role}</h4>
          <p className="text-muted">
            {exp.company} | {exp.duration}
          </p>
          <ul>
            {exp.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
