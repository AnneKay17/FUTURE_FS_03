import './Featured.css';


import necklace from "../../assets/necklace/jewlprod.png";

import custom from "../../assets/pendant/custom.png";
import ring from "../../assets/rings/ring.png"


const Featured = () => {
  const featuredPieces = [
    {
      name: "The Timeless Ring",
      quote: "A piece made for moments that deserve to be remembered.",
      description:
        "Designed with elegance and detail, this ring captures the beauty of simplicity while carrying a lasting sense of meaning.",
      image: ring,
    },
    {
      name: "The Refined Necklace",
      quote: "Elegance that rests close to the heart.",
      description:
        "Carefully crafted with detail and refinement, this necklace is designed to elevate both everyday moments and unforgettable occasions.",
      image: necklace,
    },
    {
      name: "The Signature Custom Piece",
      quote: "Not every piece needs a category — some are made to stand apart.",
      description:
        "A unique handcrafted accessory designed with individuality in mind, perfect for anyone who values something personal and different.",
      image: custom,
    },
  ];

  return (
    <section className="featured" id="collection">
      <p className="section-label">Featured Pieces</p>
      <h2>Crafted to Be Remembered</h2>
      <p className="section-intro">
        A closer look at selected pieces that reflect the elegance, creativity,
        and detail behind Eternitee Jewels.
      </p>

      <div className="featured-showcase">
        {featuredPieces.map((piece, index) => (
          <div
            className={`showcase-row ${index % 2 !== 0 ? "reverse" : ""}`}
            key={index}
          >
            <div className="showcase-image">
              <img src={piece.image} alt={piece.name} />
            </div>

            <div className="showcase-text">
              <span>0{index + 1}</span>
              <h3>{piece.name}</h3>
              <p className="piece-quote">“{piece.quote}”</p>
              <p>{piece.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

 
export default Featured;