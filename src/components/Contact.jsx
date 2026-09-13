import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    const email = "mansisalar@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Could not copy email:", error);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-heading contact-heading">
          <p className="section-label">Contact</p>

          <h2>Let&apos;s build something useful.</h2>

          <p className="section-description">
            I&apos;m open to software development opportunities where I can
            contribute, learn, and continue building across web development
            and AI.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-content">
            <p className="contact-small">GET IN TOUCH</p>

            <h3>Have an opportunity in mind?</h3>

            <p className="contact-text">
              Feel free to reach out by email or connect with me through
              LinkedIn and GitHub.
            </p>

            <button
              type="button"
              className="contact-email"
              onClick={copyEmail}
              title="Copy email address"
            >
              mansisalar@gmail.com
            </button>
          </div>

          <div className="contact-actions">
            <button
              type="button"
              className="contact-btn contact-btn-primary"
              onClick={copyEmail}
            >
              {copied ? "Email Copied ✓" : "Copy Email"}
            </button>

            <a
              href="https://www.linkedin.com/in/mansi-salar-37916624b/"
              target="_blank"
              rel="noreferrer"
              className="contact-btn"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/Mansi06Salar"
              target="_blank"
              rel="noreferrer"
              className="contact-btn"
            >
              GitHub ↗
            </a>

            <a
              href="/Mansi%20Salar%20resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="contact-btn"
            >
              View Resume ↗
            </a>
          </div>
        </div>

        <footer className="portfolio-footer">
          <p>© 2026 Mansi Salar</p>
          <p>Built with React.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;