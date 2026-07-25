const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">About</p>
          <h2>Building for the web, while exploring what AI can add.</h2>
        </div>

        <div className="about-container">
          <div className="about-card">
            <div className="about-card-item">
              <span className="about-card-label">Degree</span>
              <h3>B.Tech</h3>
              <p>Computer Science & Engineering</p>
            </div>

            <div className="about-card-divider"></div>

            <div className="about-card-item">
              <span className="about-card-label">University</span>
              <h3>JUIT, Solan</h3>
              <p>Jaypee University of Information Technology</p>
            </div>

            <div className="about-card-divider"></div>

            <div className="about-card-item">
              <span className="about-card-label">Minor</span>
              <h3>Cloud Computing</h3>
            </div>
          </div>

          <div className="about-content">
            <p>
              I'm <strong>Mansi Salar</strong>, a Computer Science & Engineering
              graduate from Jaypee University of Information Technology (JUIT),
              Solan, with a minor in Cloud Computing.
            </p>

            <p>
              My work currently focuses on full-stack web development, where
              I've built applications involving frontend interfaces, backend
              APIs, databases, authentication, and application workflows.
            </p>

            <p>
              Alongside web development, I'm developing my understanding of AI
              through hands-on projects involving retrieval-augmented
              generation, embeddings, vector search, and large language models.
              I'm continuing to strengthen both areas through practical
              projects and hands-on development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;