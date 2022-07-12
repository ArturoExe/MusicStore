import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./components/home";
import Cart from "./components/cart";
import Catalog from "./components/catalog";
import Login from "./components/login";
import Register from "./components/register";
import Profile from "./components/profile";
import Orders from "./components/orders";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
<<<<<<< HEAD
=======
          <Route path="/my-orders" element={<Orders />}></Route>
          {/* <Route path="/cart" element={<Cart />}></Route> */}
>>>>>>> 1b2c8ae3b94f614f202eeb2e3593a9c122e08917
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
