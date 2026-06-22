import './Recognition.css'
import award from "../../assets/award.webp"

const Recognition = () => {
    return (  
        <section className="recognition-section">
        <div className="recognition-content">
          <p className="about-label">Recognition</p>

          <h2>Recognized for Craftsmanship</h2>

          <p>
            Beyond creating beautiful pieces, Eternitee Jewels reflects a journey
            of skill, creativity, and dedication within the jewellery industry.
          </p>
        </div>

        <div className="recognition-image">
          <img src={award} alt="Eternitee Jewels recognition moment" />
        </div>
      </section>
    );
}
 
export default Recognition;