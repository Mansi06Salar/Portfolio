import caraHome from "../assets/projects/cara/cara_home.JPG";
import caraProduct from "../assets/projects/cara/cara_product.JPG";
import caraAdmin from "../assets/projects/cara/cara_admin.JPG";

import aiFaqHome from "../assets/projects/ai-faq/ai-faq-home.JPG";
import aiFaqUpload from "../assets/projects/ai-faq/ai-faq-upload.JPG";
import aiFaqAnswer from "../assets/projects/ai-faq/ai-faq-answer.JPG";

import flaskApiProducts from "../assets/projects/flask-api/flask-api-products.png";
import flaskApiProduct from "../assets/projects/flask-api/flask-api-product.png";
import flaskApiDelete from "../assets/projects/flask-api/flask-api-delete.png";

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

const miniTransformerTech = [
  "Python",
  "PyTorch",
  "NumPy",
  "Deep Learning",
  "Transformers",
  "NLP",
  "Pytest",
];

const miniTransformerFeatures = [
  "Token & positional embeddings",
  "Q/K/V projections",
  "Multi-head self-attention",
  "Causal masking",
  "Feed-forward network",
  "Residual connections",
  "Layer normalization",
  "Next-token prediction",
  "Backpropagation & Adam optimization",
  "Model checkpointing",
  "Greedy text generation",
  "43 automated tests",
];

const flaskApiTech = [
  "Python",
  "Flask",
  "SQLite",
  "SQL",
  "REST API",
  "JSON",
  "Requests",
];

const flaskApiFeatures = [
  "GET all products",
  "Get product by ID",
  "Create a product",
  "Update a product",
  "Delete a product",
  "SQLite database persistence",
  "Parameterized SQL queries",
  "Input validation",
  "400 Bad Request handling",
  "404 Not Found handling",
  "JSON responses",
  "HTTP status codes",
  "API testing",
];

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Featured Projects</p>

          <h2>Projects where ideas became working applications.</h2>

          <p className="section-description">
            A selection of projects where I've worked through AI systems,
            application flows, backend functionality, and practical
            implementation decisions.
          </p>
        </div>

        {/* AI FAQ ASSISTANT */}

        <article className="project-showcase">
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
              <span className="project-number">01</span>

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

        {/* MINI TRANSFORMER */}

        <article className="project-showcase project-showcase-secondary">
          <div className="project-gallery">
            <div className="project-main-image mini-transformer-visual mini-transformer-main">
              <div className="transformer-visual-content">
                <div className="transformer-label">
                  TRANSFORMER ARCHITECTURE
                </div>

                <div className="transformer-flow">
                  <span>Tokens</span>
                  <span className="transformer-arrow">→</span>
                  <span>Embeddings</span>
                  <span className="transformer-arrow">→</span>
                  <span>Self-Attention</span>
                </div>

                <div className="transformer-block">
                  <div className="transformer-block-title">
                    Multi-Head Self-Attention
                  </div>

                  <div className="transformer-qkv">
                    <span>Q</span>
                    <span>K</span>
                    <span>V</span>
                  </div>

                  <div className="transformer-small-text">
                    Causal Masking
                  </div>
                </div>

                <div className="transformer-connector">↓</div>

                <div className="transformer-block">
                  <div className="transformer-block-title">
                    Feed-Forward Network
                  </div>

                  <div className="transformer-small-text">
                    Residual + LayerNorm
                  </div>
                </div>

                <div className="transformer-connector">↓</div>

                <div className="transformer-flow transformer-output">
                  <span>Next-Token Prediction</span>
                  <span className="transformer-arrow">→</span>
                  <span>Greedy Generation</span>
                </div>
              </div>
            </div>

            <div className="project-secondary-images">
              <div className="project-secondary-image mini-transformer-visual">
                <div className="transformer-code-card">
                  <div className="transformer-label">
                    CORE COMPONENTS
                  </div>

                  <div className="transformer-code-line">
                    TokenEmbedding()
                  </div>
                  <div className="transformer-code-line">
                    PositionalEmbedding()
                  </div>
                  <div className="transformer-code-line">
                    MultiHeadAttention()
                  </div>
                  <div className="transformer-code-line">
                    FeedForward()
                  </div>
                  <div className="transformer-code-line">
                    LayerNorm()
                  </div>
                  <div className="transformer-code-line">
                    TransformerBlock()
                  </div>
                </div>
              </div>

              <div className="project-secondary-image mini-transformer-visual">
                <div className="transformer-code-card">
                  <div className="transformer-label">
                    TRAINING
                  </div>

                  <div className="transformer-metric">
                    <span>Initial loss</span>
                    <strong>~2.56</strong>
                  </div>

                  <div className="transformer-metric">
                    <span>Final loss</span>
                    <strong>0.000328</strong>
                  </div>

                  <div className="transformer-output-list">
                    <div>
                      <span>"I love"</span>
                      <strong>→ "I love AI"</strong>
                    </div>

                    <div>
                      <span>"AI is"</span>
                      <strong>→ "AI is powerful"</strong>
                    </div>

                    <div>
                      <span>"Python is"</span>
                      <strong>→ "Python is useful"</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="project-content">
            <div className="project-topline">
              <span className="project-number">02</span>

              <span className="project-type">
                Transformer / Deep Learning
              </span>
            </div>

            <h3>Mini Transformer</h3>

            <p className="project-description">
              An educational Transformer language model built with NumPy and
              PyTorch to understand the architecture and training process
              behind modern Transformer-based language models.
            </p>

            <div className="project-details">
              <div className="project-detail-block">
                <h4>Key Functionality</h4>

                <ul className="project-feature-list">
                  {miniTransformerFeatures.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-detail-block">
                <h4>Tech Stack</h4>

                <div className="project-tech-list">
                  {miniTransformerTech.map((tech) => (
                    <span className="project-tech-badge" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-actions">
              <a
                href="https://github.com/Mansi06Salar/mini-transformer"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                View on GitHub
              </a>

              <span className="project-demo-note">
                Repository &amp; training results
              </span>
            </div>
          </div>
        </article>

        {/* FLASK PRODUCT REST API */}

        <article className="project-showcase project-showcase-secondary">
          <div className="project-gallery">
            <div className="project-main-image">
              <img
                src={flaskApiProducts}
                alt="Flask Product REST API returning all products"
              />
            </div>

            <div className="project-secondary-images">
              <div className="project-secondary-image">
                <img
                  src={flaskApiProduct}
                  alt="Flask Product REST API returning a product by ID"
                />
              </div>

              <div className="project-secondary-image">
                <img
                  src={flaskApiDelete}
                  alt="Flask Product REST API delete endpoint"
                />
              </div>
            </div>
          </div>

          <div className="project-content">
            <div className="project-topline">
              <span className="project-number">03</span>

              <span className="project-type">
                Backend / REST API
              </span>
            </div>

            <h3>Flask Product REST API</h3>

            <p className="project-description">
              A Flask-based REST API for managing products with SQLite
              persistence, CRUD operations, input validation, parameterized SQL
              queries, and JSON responses.
            </p>

            <div className="project-details">
              <div className="project-detail-block">
                <h4>Key Functionality</h4>

                <ul className="project-feature-list">
                  {flaskApiFeatures.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-detail-block">
                <h4>Tech Stack</h4>

                <div className="project-tech-list">
                  {flaskApiTech.map((tech) => (
                    <span className="project-tech-badge" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-actions">
              <a
                href="https://github.com/Mansi06Salar/flask-product-rest-api"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                View on GitHub
              </a>

              <span className="project-demo-note">
                Repository &amp; API screenshots
              </span>
            </div>
          </div>
        </article>

        {/* CARA E-COMMERCE V2 */}

        <article className="project-showcase project-showcase-secondary">
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
              <span className="project-number">04</span>

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
      </div>
    </section>
  );
};

export default Projects;