import "../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div>
        <div className="hero-container">
          <Link to="/register">
            <button className="hero-button">Get Involved</button>
          </Link>
          <h2>Music Center</h2>
          <h4>The real deal</h4>
          <img src="../img/about.jpg" className="hero-image" alt=""></img>
        </div>
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
          <img src="./img/girl-guitar.jpg" alt=""></img>

          <div>
            <h4>About Us</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              eveniet molestias nostrum sit recusandae vero cupiditate atque
              laudantium, explicabo amet culpa eligendi fugit facere repellat.
              Aspernatur rerum et commodi. Harum.40
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
