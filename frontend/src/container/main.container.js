import { Link } from "react-router-dom";
import "./MainPage.css";

function MainPage({ token }) {
  return (
    <div className="main-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Minerswealth</h1>
          <p>Your trusted partner in Gold and Bitcoin Mining Investments</p>
          <button className="cta-button">
            <Link to={token ? "/request" : "/sign-in"}>
              {token ? "Explore Investment Options" : "Get Started"}
            </Link>
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <h2>Our Services</h2>
        <div className="services-cards">
          <div className="card">
            <h3>Gold Mining</h3>
            <p>Invest in secure gold mining operations to diversify your portfolio.</p>
          </div>
          <div className="card">
            <h3>Bitcoin Mining</h3>
            <p>Join the world of cryptocurrency with our robust bitcoin mining solutions.</p>
          </div>
          <div className="card">
            <h3>Support</h3>
            <p>Access 24/7 expert support to guide your investment journey.</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section" id="testimonials">
        <h2>What Our Investors Say</h2>
        <div className="testimonial-slider">
          {/* Placeholder for sliding cards */}
          <div className="testimonial-card">
            <p>"Minerswealth has changed my life! Gold mining investments have never been this simple."</p>
            <h5>- Alex Johnson</h5>
          </div>
          <div className="testimonial-card">
            <p>"Bitcoin mining with Minerswealth is both profitable and secure. Highly recommend!"</p>
            <h5>- Maria Perez</h5>
          </div>
          <div className="testimonial-card">
            <p>"Exceptional support and great returns. I couldn't ask for more!"</p>
            <h5>- Li Wei</h5>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <h2>About Us</h2>
        <p>At Minerswealth, we specialize in two lucrative investment options:</p>
        <ul>
          <li>
            <strong>Gold Mining:</strong> Partnering with sustainable and profitable gold mining operations to ensure secure investments.
          </li>
          <li>
            <strong>Bitcoin Mining:</strong> Cutting-edge technology to provide high returns in the cryptocurrency space.
          </li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-links">
          <Link to="#services">Services</Link>
          <Link to="#testimonials">Testimonials</Link>
          <Link to="#about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <p>&copy; 2024 Minerswealth. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainPage;
