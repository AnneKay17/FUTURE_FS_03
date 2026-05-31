import { useEffect, useState } from "react";
import "./Navbar.css";


const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
        if (window.scrollY < lastScrollY) {
            setShowNavbar(true);
        } else {
            setShowNavbar(false);
        }

        lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <header className={`site-header ${showNavbar ? "show" : "hide"}`}>
      <div className="top-strip">
        <div className="strip-slider">
          <p>Crafted by hand in South Africa</p>
          <p>Timeless pieces made for unforgettable moments</p>
          <p>Have a custom idea? Reach out and bring it to life</p>
        </div>
      </div>

      <nav className="navbar">
        <div className="logo">
          <h2>Eternitee Jewels</h2>
        </div>

        <ul className="nav-links">
          <li><a href="#collection">Collection</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
        </ul>

        <div className="contact-link">
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;