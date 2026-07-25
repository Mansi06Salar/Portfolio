const skillGroups = [
  {
    title: "Languages & Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Python", "Flask"],
  },
  {
    title: "Database & Authentication",
    skills: ["MongoDB", "Mongoose", "JWT", "bcryptjs"],
  },
  {
    title: "AI & RAG",
    skills: [
      "Gemini",
      "Gemini Embeddings",
      "FAISS",
      "PyPDF",
      "Retrieval-Augmented Generation",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub"],
  },
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Skills</p>
          <h2>Technologies I work with.</h2>
          <p className="section-description">
            A growing toolkit shaped by the web and AI projects I've built and
            continue to develop.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-badge" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;