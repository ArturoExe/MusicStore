import "../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div className="hero-container">
        <Link to="/login">
          <button className="hero-button">Get Involved!</button>
        </Link>

        <h2>Music Center</h2>
        <h4>The real deal</h4>
      </div>
      <div>
        <div className="hero-section">
          <div className="image-container">
            <a href="#">
              <img src="img\fender.png" className="overlay" alt="" />
            </a>
          </div>

          <div className="image-container">
            <a href="#">
              <img src="img\shure.jpg" className="overlay" alt="" />
            </a>
          </div>

          <div className="image-container">
            <a href="#">
              <img src="img\ibanez.png" className="overlay" alt="" />
            </a>
          </div>

          <div className="image-container">
            <a href="#" className="i">
              <img src="img\marshall.jpg" className="overlay" alt="" />
            </a>
          </div>

          <div className="image-container">
            <a href="#" className="i">
              <img src="img\schecter.jpg" className="overlay" alt="" />
            </a>
          </div>

          <div className="image-container">
            <a href="#" className="i">
              <img src="img\orange.png" className="overlay" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="about-us-container">
        <img
          src="../img/back.jpg"
          alt="this is a background"
          className="about-us-back darkner"
        />

        <div className="about-us-info">
          <img src="./img/girl-guitar.jpg"></img>
          <div>
            <h4>About Us</h4>
            <p>
              Music Center is a company specialized in the sale of musical
              instruments, audio and professional lighting and currently has 10
              branches nationwide. Consolidated company for more than 7 months
              has innovated and provided professional services to musicians,
              institutions and entertainment companies. <br />
              <br />
              Music Center is a specialized company, which sells musical
              instruments, professional audio and lighting. Currently It has 10
              stores and more than 30 years of experience providing professional
              and innovative services to musicians, institutes, colleges and
              companies. <br />
              <br />
              Since 2022, Music Center has been recognized by famous magazines
              as one of the top five best chain stores of Musical Instruments
              and Professional Audio in Latin America.
            </p>
          </div>
        </div>
      </div>

      <footer className="footer-container">
        <div className="footer-categories">
          <h3>Categories</h3>
          <ul>
            <li>Instruments</li>
            <li>Vinyls and CD's</li>
            <li>Accesories</li>
            <li>Lessons</li>
            <li>Repairs</li>
            <li>Rentals</li>
          </ul>
        </div>

        <div className="footer-intouch">
          <h3>Get in touch</h3>
          <p>
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 or call us on (+1) 96 716 6879
          </p>
        </div>

        <div className="footer-controller">
          <input type="text" placeholder="email@example.com" />
          <button>SUBSCRIBE</button>
          <div></div>
        </div>

        <p className="rights">
          Copyright ©2022 All rights reserved. This template is made with by
          memo and arturo
        </p>
      </footer>
    </div>
  );
};

export default Home;
