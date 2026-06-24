import { useState } from "react";
import "./Gallery.css";

//RINGS
import ringsCover from "../../assets/rings/ringCover.webp"
import ring1 from "../../assets/rings/ring1.webp"
import ring2 from "../../assets/rings/ring2.webp"
import ring3 from "../../assets/rings/ring3.webp"
import ring4 from "../../assets/rings/ring4.webp"
import ring5 from "../../assets/rings/ring5.webp"
import ring8 from "../../assets/rings/ring8.webp"
import ring9 from "../../assets/rings/ring9.webp"
import ring10 from "../../assets/rings/ring10.webp"
import ring11 from "../../assets/rings/ring11.webp"
import ring12 from "../../assets/rings/ring12.webp"
import ring13 from "../../assets/rings/ring13.webp"
import ring14 from "../../assets/rings/ring14.webp"
import ring15 from "../../assets/rings/ring15.webp"
import ring16 from "../../assets/rings/ring16.webp"
import ring17 from "../../assets/rings/ring17.webp"
import ring18 from "../../assets/rings/ring18.webp"
import ring19 from "../../assets/rings/ring19.webp"
import ring20 from "../../assets/rings/ring20.webp"
import ring21 from "../../assets/rings/ring21.webp"
import ring22 from "../../assets/rings/ring22.webp"
import ring23 from "../../assets/rings/ring23.webp"
import ring24 from "../../assets/rings/ring24.webp"
import ring25 from "../../assets/rings/ring25.webp"
import ring26 from "../../assets/rings/ring26.webp"
import ring27 from "../../assets/rings/ring27.webp"
import ring28 from "../../assets/rings/ring28.webp"
import ring29 from "../../assets/rings/ring29.webp"
import ring30 from "../../assets/rings/ring30.webp"
import ring31 from "../../assets/rings/ring31.webp"
import ring32 from "../../assets/rings/ring32.webp"
import ring33 from "../../assets/rings/ring33.webp"
import ring34 from "../../assets/rings/ring34.webp"
import ring35 from "../../assets/rings/ring35.webp"
import ring36 from "../../assets/rings/ring36.webp"
import ring37 from "../../assets/rings/ring37.webp"
import ring38 from "../../assets/rings/ring38.webp"
import ring39 from "../../assets/rings/ring39.webp"
import ring40 from "../../assets/rings/ring40.webp"
import ring41 from "../../assets/rings/ring41.webp"
import ring42 from "../../assets/rings/ring42.webp"
import ring43 from "../../assets/rings/ring43.webp"
import ring44 from "../../assets/rings/ring44.webp"
import ring45 from "../../assets/rings/ring45.webp"
import ring46 from "../../assets/rings/ring46.webp"
import ring47 from "../../assets/rings/ring47.webp"
import ring48 from "../../assets/rings/ring48.webp"
import ring49 from "../../assets/rings/ring49.webp"
import ring50 from "../../assets/rings/ring50.webp"
import ring51 from "../../assets/rings/ring51.webp"
import ring52 from "../../assets/rings/ring52.webp"
import ring53 from "../../assets/rings/ring53.webp"
import ring54 from "../../assets/rings/ring54.webp"
import ring55 from "../../assets/rings/ring55.webp"
import ring56 from "../../assets/rings/ring56.webp"
import ring57 from "../../assets/rings/ring57.webp"
import ring58 from "../../assets/rings/ring58.webp"
import ring59 from "../../assets/rings/ring59.webp"
import ring60 from "../../assets/rings/ring60.webp"
import ring61 from "../../assets/rings/ring61.webp"
import ring62 from "../../assets/rings/ring62.webp"
import ring63 from "../../assets/rings/ring63.webp"
import ring64 from "../../assets/rings/ring64.webp"
import ring65 from "../../assets/rings/ring65.webp"
import ring66 from "../../assets/rings/ring66.webp"
import ring67 from "../../assets/rings/ring67.webp"
import ring68 from "../../assets/rings/ring68.webp"



//BRACELETS
import braceletsCover from "../../assets/bracelets/braceletHand.webp"
import brace1 from "../../assets/bracelets/brace1.webp"
import brace2 from "../../assets/bracelets/brace2.webp"
import brace3 from "../../assets/bracelets/brace3.webp"
import brace4 from "../../assets/bracelets/brace4.webp"
import brace5 from "../../assets/bracelets/brace5.webp"
import brace6 from "../../assets/bracelets/brace6.webp"
import brace7 from "../../assets/bracelets/brace7.webp"
import brace8 from "../../assets/bracelets/brace8.webp"
import brace9 from "../../assets/bracelets/brace9.webp"
import brace10 from "../../assets/bracelets/brace10.webp"
import brace11 from "../../assets/bracelets/brace11.webp"
import brace12 from "../../assets/bracelets/brace12.webp"
import brace13 from "../../assets/bracelets/brace13.webp"
import brace14 from "../../assets/bracelets/brace14.webp"
import brace15 from "../../assets/bracelets/brace15.webp"
import brace16 from "../../assets/bracelets/brace16.webp"

//NECKLACE
import necklacesCover from "../../assets/necklace/necklaceNeck.webp"
import neck1 from "../../assets/necklace/neck1.webp"
import neck2 from "../../assets/necklace/neck2.webp"
import neck3 from "../../assets/necklace/neck3.webp"
import neck4 from "../../assets/necklace/neck4.webp"
import neck5 from "../../assets/necklace/neck5.webp"
import neck7 from "../../assets/necklace/neck7.webp"
//EARRINGS
import earringsCover from "../../assets/earrings/earring.webp"
import ear1 from "../../assets/earrings/ear1.webp"
import ear2 from "../../assets/earrings/ear2.webp"
import ear3 from "../../assets/earrings/ear3.webp"
import ear4 from "../../assets/earrings/ear4.webp"
import ear5 from "../../assets/earrings/ear5.webp"
import ear6 from "../../assets/earrings/ear6.webp"
import ear7 from "../../assets/earrings/ear7.webp"
import ear8 from "../../assets/earrings/ear8.webp"
import ear9 from "../../assets/earrings/ear9.webp"
import ear10 from "../../assets/earrings/ear10.webp"
import ear11 from "../../assets/earrings/ear11.webp"
import ear12 from "../../assets/earrings/ear12.webp"
import ear13 from "../../assets/earrings/ear13.webp"

//CUSTOM ACCESSORIERS
import customCover from "../../assets/pendant/pendant1.webp"
import cus1 from "../../assets/pendant/pendant2.webp"
import cus3 from "../../assets/pendant/pendant4.webp"
import cus4 from "../../assets/pendant/pendant5.webp"
import cus5 from "../../assets/pendant/pendant6.webp"
import cus6 from "../../assets/pendant/pendant7.webp"
import cus7 from "../../assets/pendant/pendant8.webp"
import cus9 from "../../assets/pendant/pendant10.webp"
import cus10 from "../../assets/pendant/pendant11.webp"
import cus11 from "../../assets/pendant/pendant12.webp"
import cus12 from "../../assets/pendant/pendant13.webp"
import cus13 from "../../assets/pendant/pendant14.webp"
import cus14 from "../../assets/pendant/pendant15.webp"
import cus15 from "../../assets/pendant/pendant16.webp"
import cus16 from "../../assets/pendant/pendant17.webp"
import cus17 from "../../assets/pendant/pendant18.webp"
import cus18 from "../../assets/pendant/pendant19.webp"
import cus19 from "../../assets/pendant/pendant20.webp"
import cus20 from "../../assets/pendant/pendant21.webp"


//DESINGER SELECTION
import signatureCover from "../../assets/pendant/custom.webp"
import des1 from "../../assets/bracelets/brace5.webp"
import des2 from "../../assets/necklace/jewlprod.webp"
import des3 from "../../assets/rings/ring7.webp"
import des4 from "../../assets/pendant/pendant9.webp"
import des5 from "../../assets/pendant/pendant4.webp"
import des6 from "../../assets/rings/ring33.webp"



const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      name: "Rings",
      cover: ringsCover,
      images: [ringsCover, ring1, ring9, ring2, ring3, ring4, ring5,  ring8,ring9,ring10, ring11,ring12,ring13,ring14,ring15,ring16,ring17,ring18,ring19,ring20,ring21,ring22,ring23,ring24,ring25,ring26,ring27,ring28,ring29,ring30,ring31,ring32,ring33,ring34,ring35,ring36,ring37,ring38,ring39,ring40, ring41,ring42,ring43,ring44 ,ring45,ring46,ring47,ring48,ring49,ring50,ring51,ring52,ring53,ring54,ring55,ring56,ring57,ring58,ring59,ring60,ring61,ring62,ring63,ring64,ring65,ring66,ring67,ring68],
    },
    {
      name: "Bracelets",
      cover: braceletsCover,
      images: [braceletsCover, brace1, brace2, brace3, brace4, brace5, brace6, brace7, brace8, brace9,brace10, brace11,brace12,brace13,brace14,brace15,brace16],
    },
    {
      name: "Necklaces",
      cover: necklacesCover,
      images: [necklacesCover,neck1,neck2,neck3,neck4,neck5,neck7],
    },
    {
      name: "Earrings",
      cover: earringsCover,
      images: [earringsCover, ear1,ear2, ear3, ear4, ear5, ear6, ear7,ear8,ear9,ear10,ear11,ear12,ear13],
    },
    {
      name: "Custom Accessories",
      cover: customCover,
      images: [customCover, cus1, cus3, cus4, cus5, cus6, cus7,cus9,cus10,cus11,cus12,cus13,cus14,cus15,cus16,cus17,cus18, cus19, cus20],
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