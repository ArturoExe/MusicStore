import "./mostPopular.css";

const MostPopular = () => {
  return (
    <div>
      <div class="hero-section">
        <div class="image-container">
          <a href="#">
            <img src="img\fender.png" class="overlay" />
          </a>
        </div>

        <div class="image-container">
          <a href="#">
            <img src="img\shure.jpg" class="overlay" />
          </a>
        </div>

        <div class="image-container">
          <a href="#">
            <img src="img\ibanez.png" class="overlay" />
          </a>
        </div>

        <div class="image-container">
          <a href="#" class="i">
            <img src="img\marshall.jpg" class="overlay" />
          </a>
        </div>

        <div class="image-container">
          <a href="#" class="i">
            <img src="img\schecter.jpg" class="overlay" />
          </a>
        </div>

        <div class="image-container">
          <a href="#" class="i">
            <img src="img\orange.png" class="overlay" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
