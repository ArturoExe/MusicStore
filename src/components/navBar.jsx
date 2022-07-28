import { useRef } from "react"
import "../styles/navBar.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import CounterContext from "../context/CounterContext";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const NavBar = () => {
  const { counter } = useContext(CounterContext);
  const { user } = useContext(AuthContext);

  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  function handleNavBar(){
    if (user) {
    return(
      <header>
        <Link className="logo-bar" to="/home">
          <span className="white-letters">MUSIC</span> <span className="red-letters">CENTER</span>
        </Link>
        <nav ref={navRef}>
          <Link to="/profile/details">profile</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/cart">
            <AiOutlineShoppingCart className="cart-icon" />
            : {counter} item in your Cart
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes/>
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavBar}>
          <FaBars/>
        </button>
      </header>
    )
  } else {
    return (
      <header>
        <Link className="logo-bar" to="/home">
          <span className="white-letters">MUSIC</span> <span className="red-letters">CENTER</span>
        </Link>
        <nav ref={navRef}>
          <Link to="/login">Login</Link>

          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes/>
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavBar}>
          <FaBars/>
        </button>
      </header>
    )
  }
  }
  return(
    <div className="normal-menu">{handleNavBar()}</div>
  )
};

export default NavBar