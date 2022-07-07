import "./home.css";
import Hero from "./hero";
import MostPopular from "./mostPopular";

export const Home = () => {
  return (
    <div>
      <Hero />
      <MostPopular></MostPopular>

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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              eveniet molestias nostrum sit recusandae vero cupiditate atque
              laudantium, explicabo amet culpa eligendi fugit facere repellat.
              Aspernatur rerum et commodi. Harum.40
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
