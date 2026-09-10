const certifications = [
  {
    issuer: "Databricks",
    title: "Academy Accreditation - Generative AI Fundamentals",
    date: "May 2025",
    validity: "Expires June 2027",
    tags: ["Generative AI", "AI Fundamentals"],
    credential:
      "https://credentials.databricks.com/a653cc7e-f005-481e-be4a-edf6e7af9c83#acc.LSW6wpIG",
    linkText: "View Credential ↗",
  },
  {
    issuer: "freeCodeCamp",
    title: "Legacy JavaScript Algorithms and Data Structures V7",
    date: "May 2026",
    tags: ["JavaScript", "Algorithms", "Data Structures"],
    credential:
      "https://www.freecodecamp.org/certification/mansi_salar/javascript-algorithms-and-data-structures",
    linkText: "View Credential ↗",
  },
  {
    issuer: "TCS iON",
    title: "TCS iON Career Edge - AI Foundation",
    date: "Sep 2026",
    tags: ["Artificial Intelligence", "Generative AI", "Prompt Engineering"],
    credential: "/TCS_AI_Foundation_Certificate.png",
    linkText: "View Certificate ↗",
  },
];

const Certifications = () => {
  return (
    <section className="certifications section" id="certifications">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Certifications</p>

          <h2>Learning backed by credentials.</h2>

          <p className="section-description">
            Selected certifications supporting my development in web
            technologies and artificial intelligence.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((certification, index) => (
            <article
              className="certification-card"
              key={certification.title}
            >
              <div className="certification-top">
                <span className="certification-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="certification-issuer">
                  {certification.issuer}
                </span>
              </div>

              <h3>{certification.title}</h3>

              <div className="certification-date">
                <span>{certification.date}</span>

                {certification.validity && (
                  <>
                    <span className="certification-dot">•</span>
                    <span>{certification.validity}</span>
                  </>
                )}
              </div>

              <div className="certification-tags">
                {certification.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a
                href={certification.credential}
                target="_blank"
                rel="noreferrer"
                className="certification-link"
              >
                {certification.linkText}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;