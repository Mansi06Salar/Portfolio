import caraHome from "../assets/projects/cara/cara_home.JPG";
import caraProduct from "../assets/projects/cara/cara_product.JPG";
import caraAdmin from "../assets/projects/cara/cara_admin.JPG";

import aiFaqHome from "../assets/projects/ai-faq/ai-faq-home.JPG";
import aiFaqUpload from "../assets/projects/ai-faq/ai-faq-upload.JPG";
import aiFaqAnswer from "../assets/projects/ai-faq/ai-faq-answer.JPG";

const caraTech = [
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "JWT",
  "bcryptjs",
  "Fetch API",
];

const caraFeatures = [
  "User registration & login",
  "JWT authentication",
  "Dynamic product catalogue",
  "Product details with size & quantity selection",
  "Shopping cart & checkout",
  "Order creation & history",
  "Stock management",
  "Role-based user/admin authorization",
  "Admin dashboard",
  "Product CRUD",
  "Order management & status updates",
  "Responsive design",
];

const aiFaqTech = [
  "Python",
  "Flask",
  "HTML",
  "CSS",
  "JavaScript",
  "Gemini 2.5 Flash",
  "Gemini Embedding 001",
  "FAISS",
  "PyPDF",
  "python-dotenv",
];

const aiFaqFeatures = [
  "PDF document upload",
  "PDF text extraction & chunking",
  "Gemini embedding generation",
  "FAISS vector storage & similarity retrieval",
  "Context-based prompt construction",
  "Document-grounded AI responses",
  "Fallback for questions outside the uploaded PDF",
  "Conversation context using the last 6 messages",
  "Chat history reset when a new PDF is uploaded",
  "Manual RAG retrieval pipeline",
];

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Featured Projects</p>

          <h2>Projects where ideas became working applications.</h2>

          <p className="section-description">
            A selection of projects where I've worked through complete
            application flows, backend functionality, and practical
            implementation decisions.
          </p>
        </div>

        {/* CARA E-COMMERCE V2 */}

        <article className="project-showcase">
          <div className="project-gallery">
            <div className="project-main-image">
              <img
                src={caraHome}
                alt="CARA E-Commerce V2 homepage"
              />
            </div>

            <div className="project-secondary-images">
              <div className="project-secondary-image">
                <img
                  src={caraProduct}
                  alt="CARA E-Commerce V2 product details page"
                />
              </div>

              <div className="project-secondary-image">
                <img
                  src={caraAdmin}
                  alt="CARA E-Commerce V2 admin dashboard"
                />
              </div>
            </div>
          </div>

          <div className="project-content">
            <div className="project-topline">
              <span className="project-number">01</span>
              <span className="project-type">
                Full-Stack Web Application
              </span>
            </div>

            <h3>CARA E-Commerce V2</h3>

            <p className="project-description">
              A full-stack e-commerce application with user authentication,
              dynamic product data, shopping cart and order workflows, stock
              management, and role-based administration.
            </p>

            <div className="project-details">
              <div className="project-detail-block">
                <h4>Key Functionality</h4>

                <ul className="project-feature-list">
                  {caraFeatures.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-detail-block">
                <h4>Tech Stack</h4>

                <div className="project-tech-list">
                  {caraTech.map((tech) => (
                    <span className="project-tech-badge" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-actions">
              <a
                href="https://github.com/Mansi06Salar/cara-ecommerce-mern"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                View on GitHub
              </a>

              <span className="project-demo-note">
                Repository &amp; screenshots
              </span>
            </div>
          </div>
        </article>

        {/* AI FAQ ASSISTANT */}

        <article className="project-showcase project-showcase-secondary">
          <div className="project-gallery">
            <div className="project-main-image">
              <img
                src={aiFaqAnswer}
                alt="AI FAQ Assistant answering a question from an uploaded PDF"
              />
            </div>

            <div className="project-secondary-images">
              <div className="project-secondary-image">
                <img
                  src={aiFaqHome}
                  alt="AI FAQ Assistant main interface"
                />
              </div>

              <div className="project-secondary-image">
                <img
                  src={aiFaqUpload}
                  alt="AI FAQ Assistant after processing an uploaded PDF"
                />
              </div>
            </div>
          </div>

          <div className="project-content">
            <div className="project-topline">
              <span className="project-number">02</span>

              <span className="project-type">
                AI / RAG Application
              </span>
            </div>

            <h3>AI FAQ Assistant</h3>

            <p className="project-description">
              A document-based question-answering application that uses a
              manually implemented retrieval-augmented generation pipeline to
              retrieve relevant PDF content and generate grounded responses
              using Gemini.
            </p>

            <div className="project-details">
              <div className="project-detail-block">
                <h4>Key Functionality</h4>

                <ul className="project-feature-list">
                  {aiFaqFeatures.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-detail-block">
                <h4>Tech Stack</h4>

                <div className="project-tech-list">
                  {aiFaqTech.map((tech) => (
                    <span className="project-tech-badge" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-actions">
              <a
                href="https://github.com/Mansi06Salar/AI-FAQ-Assistant"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                View on GitHub
              </a>

              <span className="project-demo-note">
                Repository &amp; screenshots
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;