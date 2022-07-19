import "./navBar.css";

const NavBar = () => {
  return (
    <nav>
      <div>
        <a href="/">MUSIC CENTER</a>
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
        <a href="cart">Cart</a>
        <a href="login">Login</a>
      </div>
    </nav>
  );
};

export default NavBar;
