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
import Details from "./components/mydetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/my-orders" element={<Orders />}></Route>
          <Route path="/my-details" element={<Details />}></Route>
          {/* <Route path="/cart" element={<Cart />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;