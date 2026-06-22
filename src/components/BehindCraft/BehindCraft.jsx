import './BehindCraft.css'
import craft1 from "../../assets/craft1.jpeg"
import craft2 from "../../assets/craft2.jpeg"
import craft3 from "../../assets/craft3.jpeg"

const BehindCraft = () => {
    return (  
        <section className="craft-section">
            <div className="craft-header">
                <span>THE CRAFT</span>
                <h2>Where Every Piece Begins</h2>
                <p>
                Behind every Eternitee creation is a process of patience,
                precision, and craftsmanship. Every piece is carefully
                handcrafted from the workbench to the final finish.
                </p>
            </div>

            <div className="craft-grid">
                <div className="craft-main">
                    <img src={craft1} alt="Jeweller at work" />
                </div>

                <div className="craft-content">
                    <h3>Handcrafted With Precision</h3>

                    <p>
                        Each design is shaped, refined, and finished by hand.
                        From custom commissions to restorations, every piece
                        receives individual attention and care.
                    </p>

                    <ul>
                        <li>Custom jewellery design</li>
                        <li>Handcrafted pieces</li>
                        <li>Repairs and restorations</li>
                        <li>Attention to every detail</li>
                    </ul>
                </div>

                <div className="craft-small">
                    <img src={craft2} alt="Jewellery workspace" />
                </div>

                <div className="craft-small">
                    <img src={craft3} alt="Jeweller working" />
                </div>
            </div>
        </section>

    );
}
 
export default BehindCraft;