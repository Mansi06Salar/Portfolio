const Education = () => {
  return (
    <section className="education section" id="education">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Education</p>

          <h2>Academic foundation.</h2>

          <p className="section-description">
            My academic background in computer science, complemented by a
            minor in cloud computing.
          </p>
        </div>

        <div className="education-card">
          <div className="education-period">
            <span>2022</span>
            <div className="education-line"></div>
            <span>2026</span>
          </div>

          <div className="education-main">
            <p className="education-degree-type">
              Bachelor of Technology
            </p>

            <h3>Computer Science &amp; Engineering</h3>

            <p className="education-university">
              Jaypee University of Information Technology
            </p>

            <p className="education-location">
              JUIT, Solan
            </p>
          </div>

          <div className="education-details">
            <div className="education-detail">
              <span>Minor</span>
              <strong>Cloud Computing</strong>
            </div>

            <div className="education-detail">
              <span>CGPA</span>
              <strong>7.5</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;