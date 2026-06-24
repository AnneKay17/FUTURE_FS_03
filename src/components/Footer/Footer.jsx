import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <h2>Eternitee Jewels</h2>
          <p>
            Handcrafted jewellery designed with elegance, individuality,
            and timeless beauty.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>

          <a href="#collection">Collection</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Connect</h3>

          <a
            href="https://www.instagram.com/eternitee_jewels/#"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/27660399855"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

          <p>Johannesburg, South Africa</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
  © 2026 Eternitee Jewels. All rights reserved. <br />
  <span>Website designed & developed by Karabo</span>
</p>
      </div>
    </footer>
  );
};

export default Footer;