import "./hero.css";

export const Hero = () => {
  return (
    <div>
      <div className="hero-container">
        <button className="hero-button">Get Involved</button>
        <h2>Music Center</h2>
        <h4>The real deal</h4>
        <img src="../img/about.jpg" className="hero-image"></img>
      </div>
    </div>
  );
};

export default Hero;
