import "../styles/navBar.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CounterContext from "../context/CounterContext";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const NavBar = () => {
  const { counter } = useContext(CounterContext);
  const { user } = useContext(AuthContext);
  function handleNavBar() {
    if (user) {
      return (
        <>
          <Link to="/profile">profile</Link>

          <Link to="/catalog">Catalog</Link>

          <Link to="/cart">
            <AiOutlineShoppingCart className="cart-icon" />
            {counter}
            Cart
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/login">Login</Link>
        </>
      );
    }
  }

  return (
    <nav>
      <div>
        <Link to="/home">
          MUSIC <span className="red-letters">CENTER</span>
        </Link>
      </div>

      <div className="hamburguer-menu">
        <i className="fas fa-bars"></i>
      </div>

      <div className="search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search.." />
      </div>

      <div className="normal-menu">{handleNavBar()}</div>
    </nav>
  );
};

export default NavBar;
