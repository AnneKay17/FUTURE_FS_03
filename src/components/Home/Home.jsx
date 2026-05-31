import './Home.css'

const Home = () => {
    return (  
        <section className="hero">
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <h1>Eternitee Jewels</h1>

                <p>
                Timeless elegance, handcrafted to shine beyond every moment.
                </p>

                <div className="hero-buttons">
                <a href="#gallery" className="primary-btn">
  Explore Collection
</a>

<a href="#contact" className="secondary-btn">
  Contact Us
</a>
                </div>
            </div>
        </section>

    );
}
 
export default Home;