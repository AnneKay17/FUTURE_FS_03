import { useState } from "react";
import "./Gallery.css";

//RINGS
import ringsCover from "../../assets/rings/ringCover.png"
import ring1 from "../../assets/rings/ring1.png"
import ring2 from "../../assets/rings/ring2.png"
import ring3 from "../../assets/rings/ring3.png"
import ring4 from "../../assets/rings/ring4.png"
import ring5 from "../../assets/rings/ring5.png"
import ring6 from "../../assets/rings/ring6.png"
import ring8 from "../../assets/rings/ring8.png"
import ring9 from "../../assets/rings/ring9.png"
import ring10 from "../../assets/rings/ring10.png"
import ring11 from "../../assets/rings/ring11.png"
import ring12 from "../../assets/rings/ring12.png"
import ring13 from "../../assets/rings/ring13.png"
import ring14 from "../../assets/rings/ring14.png"
import ring15 from "../../assets/rings/ring15.png"
import ring16 from "../../assets/rings/ring16.png"
import ring17 from "../../assets/rings/ring17.png"
import ring18 from "../../assets/rings/ring18.png"
import ring19 from "../../assets/rings/ring19.png"
import ring20 from "../../assets/rings/ring20.png"
import ring21 from "../../assets/rings/ring21.png"
import ring22 from "../../assets/rings/ring22.png"
import ring23 from "../../assets/rings/ring23.png"
import ring24 from "../../assets/rings/ring24.png"
import ring25 from "../../assets/rings/ring25.png"
import ring26 from "../../assets/rings/ring26.png"
import ring27 from "../../assets/rings/ring27.png"
import ring28 from "../../assets/rings/ring28.png"
import ring29 from "../../assets/rings/ring29.png"
import ring30 from "../../assets/rings/ring30.png"
import ring31 from "../../assets/rings/ring31.png"
import ring32 from "../../assets/rings/ring32.png"
import ring33 from "../../assets/rings/ring33.png"
import ring34 from "../../assets/rings/ring34.png"
import ring35 from "../../assets/rings/ring35.png"
import ring36 from "../../assets/rings/ring36.png"
import ring37 from "../../assets/rings/ring37.png"


//BRACELETS
import braceletsCover from "../../assets/bracelets/braceletHand.png"
import brace1 from "../../assets/bracelets/brace1.png"
import brace2 from "../../assets/bracelets/brace2.png"
import brace3 from "../../assets/bracelets/brace3.png"
import brace4 from "../../assets/bracelets/brace4.png"
import brace5 from "../../assets/bracelets/brace5.png"
import brace6 from "../../assets/bracelets/brace6.png"
import brace7 from "../../assets/bracelets/brace7.png"
import brace8 from "../../assets/bracelets/brace8.png"
import brace9 from "../../assets/bracelets/brace9.png"
import brace10 from "../../assets/bracelets/brace10.png"
import brace11 from "../../assets/bracelets/brace11.png"
import brace12 from "../../assets/bracelets/brace12.png"
import brace13 from "../../assets/bracelets/brace13.png"
import brace14 from "../../assets/bracelets/brace14.png"
import brace15 from "../../assets/bracelets/brace15.png"
import brace16 from "../../assets/bracelets/brace16.png"

//NECKLACE
import necklacesCover from "../../assets/necklace/necklaceNeck.png"
import neck1 from "../../assets/necklace/neck1.png"
import neck2 from "../../assets/necklace/neck2.png"
import neck3 from "../../assets/necklace/neck3.png"
import neck4 from "../../assets/necklace/neck4.png"
import neck5 from "../../assets/necklace/neck5.png"

//EARRINGS
import earringsCover from "../../assets/earrings/earring.png"
import ear1 from "../../assets/earrings/ear1.png"
import ear2 from "../../assets/earrings/ear2.png"
import ear3 from "../../assets/earrings/ear3.png"
import ear4 from "../../assets/earrings/ear4.png"
import ear5 from "../../assets/earrings/ear5.png"
import ear6 from "../../assets/earrings/ear6.png"
import ear7 from "../../assets/earrings/ear7.png"
import ear8 from "../../assets/earrings/ear8.png"
import ear9 from "../../assets/earrings/ear9.png"
import ear10 from "../../assets/earrings/ear10.png"
import ear11 from "../../assets/earrings/ear11.png"
import ear12 from "../../assets/earrings/ear12.png"
import ear13 from "../../assets/earrings/ear13.png"

//CUSTOM ACCESSORIERS
import customCover from "../../assets/pendant/pendant1.png"
import cus1 from "../../assets/pendant/pendant2.png"
import cus3 from "../../assets/pendant/pendant4.png"
import cus4 from "../../assets/pendant/pendant5.png"
import cus5 from "../../assets/pendant/pendant6.png"
import cus6 from "../../assets/pendant/pendant7.png"
import cus7 from "../../assets/pendant/pendant8.png"
import cus9 from "../../assets/pendant/pendant10.png"
import cus10 from "../../assets/pendant/pendant11.png"
import cus11 from "../../assets/pendant/pendant12.png"
import cus12 from "../../assets/pendant/pendant13.png"
import cus13 from "../../assets/pendant/pendant14.png"
import cus14 from "../../assets/pendant/pendant15.png"
import cus15 from "../../assets/pendant/pendant16.png"
import cus16 from "../../assets/pendant/pendant17.png"
import cus17 from "../../assets/pendant/pendant18.png"
import cus18 from "../../assets/pendant/pendant19.png"


//DESINGER SELECTION
import signatureCover from "../../assets/pendant/pendant3.png"
import des1 from "../../assets/bracelets/brace5.png"
import des2 from "../../assets/necklace/jewlprod.png"
import des3 from "../../assets/rings/ring7.png"
import des4 from "../../assets/pendant/pendant9.png"
import des5 from "../../assets/pendant/pendant4.png"
import des6 from "../../assets/rings/ring33.png"



const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      name: "Rings",
      cover: ringsCover,
      images: [ringsCover, ring1, ring9, ring2, ring3, ring4, ring5, ring6, ring8,ring9,ring10, ring11,ring12,ring13,ring14,ring15,ring16,ring17,ring18,ring19,ring20,ring21,ring22,ring23,ring24,ring25,ring26,ring27,ring28,ring29,ring30,ring31,ring32,ring33,ring34,ring35,ring36,ring37],
    },
    {
      name: "Bracelets",
      cover: braceletsCover,
      images: [braceletsCover, brace1, brace2, brace3, brace4, brace5, brace6, brace7, brace8, brace9,brace10, brace11,brace12,brace13,brace14,brace15,brace16],
    },
    {
      name: "Necklaces",
      cover: necklacesCover,
      images: [necklacesCover,neck1,neck2,neck3,neck4,neck5],
    },
    {
      name: "Earrings",
      cover: earringsCover,
      images: [earringsCover, ear1,ear2, ear3, ear4, ear5, ear6, ear7,ear8,ear9,ear10,ear11,ear12,ear13],
    },
    {
      name: "Custom Accessories",
      cover: customCover,
      images: [customCover, cus1, cus3, cus4, cus5, cus6, cus7,cus9,cus10,cus11,cus12,cus13,cus14,cus15,cus16,cus17,cus18],
    },
    {
      name: "Designer Selection",
      cover: signatureCover,
      images: [signatureCover, des1, des2, des3,des4,des5,des6],
    },
  ];

  return (
    <section className="gallery-section" id="gallery">
      <p className="section-label">Gallery</p>
      <h2>Explore the Collections</h2>
      <p className="section-intro">
        Browse each category and discover pieces crafted with elegance, detail,
        and individuality.
      </p>

      <div className="gallery-grid">
        {categories.map((category, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => setSelectedCategory(category)}
          >
            <img src={category.cover} alt={category.name} />
            <div className="gallery-overlay">
              <h3>{category.name}</h3>
              <p>View Collection</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div className="modal-backdrop" onClick={() => setSelectedCategory(null)}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal"
              onClick={() => setSelectedCategory(null)}
            >
              ×
            </button>

            <h3>{selectedCategory.name}</h3>

            <div className="modal-grid">
              {selectedCategory.images.map((image, index) => (
                <img
                  src={image}
                  alt={`${selectedCategory.name} ${index + 1}`}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;