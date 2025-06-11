import React from "react";

function Experience() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Lloyds Banking Group",
      duration: "2021 - Present",
      description: [
        "Developed and maintained existing software. Carried out code changes for concurrent applications to meet business requirements.",
        "Deployed applications to implement automation.",
        "RTL Deployment Automation project: Designed and built Java classes for Schema Validation and Package Management, movement of files across environments with validation utilising Jenkins pipelines to automate the job.",
        "Collaborated with cross-functional teams to design scalable solutions through Hackathons.",
        "Attended and hosted Agile rituals to ensure team synergy and common quartely goals",
      ],
    },
    {
      role: "Head Online Coach",
      company: "Potenza Powerlifting",
      duration: "2020 - Present",
      description: [
        "1-2-1 coaching for athletes in the UK and abroad.",
        "Created personalized training programs based on individual needs.",
        "Provided ongoing support and feedback to athletes.",
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
