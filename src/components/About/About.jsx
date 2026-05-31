import "./About.css";
import work from "../../assets/work.png";
import himWorking from "../../assets/him-working.png";
import award from "../../assets/award.png";

const About = () => {
  return (
    <>
      <section className="about-section" id="about">
        <div className="about-images">
          <img
            src={work}
            alt="Eternitee Jewels workspace"
            className="workspace-img"
          />

          <img
            src={himWorking}
            alt="Eternitee Jewels designer crafting jewelry"
            className="crafting-img"
          />
        </div>

        <div className="about-content">
          <p className="about-label">About Eternitee</p>

          <h2>Crafting Jewelry That Lasts Beyond Trends</h2>

          <p className="about-text">
            Eternitee Jewels is built on a passion for craftsmanship, elegance,
            and timeless design. Founded by <span>Francis Nare</span>, each piece is
            carefully handcrafted to reflect individuality, confidence,
            and lasting beauty.
          </p>

          <p className="about-text">
            From custom rings to signature accessories, each creation is designed
            with attention to detail and a commitment to quality that makes every
            piece feel meaningful.
          </p>

          <button
            className="about-btn"
            onClick={() => {
              document
                .getElementById("gallery")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore More
          </button>
        </div>
      </section>

      <section className="recognition-section">
        <div className="recognition-content">
          <p className="about-label">Recognition</p>

          <h2>Recognized for Craftsmanship</h2>

          <p>
            Beyond creating beautiful pieces, Eternitee Jewels reflects a journey
            of skill, creativity, and dedication within the jewelry industry.
          </p>
        </div>

        <div className="recognition-image">
          <img src={award} alt="Eternitee Jewels recognition moment" />
        </div>
      </section>
    </>
  );
};

export default About;