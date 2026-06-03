import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-overlay"></div>

      <div className="contact-content">
        <p className="contact-label">Get In Touch</p>

        <h2>Bring Your Vision To Life</h2>

        <p>
          Whether you're looking for a timeless piece, a meaningful gift,
          or a custom creation, Eternitee Jewels is ready to craft something unforgettable.
        </p>

        <div className="contact-buttons">
          <a
            href="https://wa.me/27660399855"
            target="_blank"
            rel="noreferrer"
            className="contact-btn primary-contact"
          >
            WhatsApp Us
          </a>

          <a
            href="https://www.instagram.com/eternitee_jewels/#"
            target="_blank"
            rel="noreferrer"
            className="contact-btn secondary-contact"
          >
            Visit Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;