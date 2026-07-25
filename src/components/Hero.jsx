import profilePhoto from "../assets/profile-photo.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-intro">Hi, I'm Mansi.</p>

          <h1>
            Software Developer
            <span> building for the web.</span>
          </h1>

          <p className="hero-role">
            Full-Stack Web Development <span>•</span> Exploring AI
          </p>

          <p className="hero-description">
            I build full-stack web applications and am expanding my skills in
            AI-powered systems, with a focus on learning through practical
            projects.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/Mansi06Salar"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <span>/</span>

            <a href="#linkedin">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow"></div>

          <div className="hero-image-wrapper">
            <img
              src={profilePhoto}
              alt="Mansi Salar"
              className="hero-image"
            />
          </div>

          <div className="hero-code-tag hero-code-tag-top">
            &lt;developer /&gt;
          </div>

          <div className="hero-code-tag hero-code-tag-bottom">
            React · Node · AI
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;