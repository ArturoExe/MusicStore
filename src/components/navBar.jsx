import "./navBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to="/home">
          MUSIC <span className="red-letters">CENTER</span>
        </Link>
      </div>

      <div class="hamburguer-menu">
        <i class="fas fa-bars"></i>
      </div>

      <div class="search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search.." />
      </div>

      <div class="normal-menu">
        <a href="home">Home</a>
        <a href="catalog">Catalog</a>
        <a href="cart">Cart</a>
        <a href="login">Login</a>
      </div>
    </nav>
  );
};

export default NavBar;
