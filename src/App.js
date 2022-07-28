import "./styles/App.css";
import {
  Cart,
  NavBar,
  Home,
  Catalog,
  Login,
  Register,
  Profile,
  Details,
  Orders,
} from "./utils/components";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CounterContext from "./context/CounterContext";
import PrivateRoutes from "./utils/privateRoutes";
import { AuthProvider } from "./context/AuthContext";
function App() {
  const [counter, setCounter] = useState();
  const [cart, setCart] = useState([]);
  const [inputValues, setInputValues] = useState({
    email: "",
    cardnumber: "",
    phone: "",
    name: "",
    country: "",
    street: "",
    state: "",
    zipcode: "",
  });

  return (
    <div className="App">
      <CounterContext.Provider
        value={{
          counter,
          setCounter,
          cart,
          setCart,
          inputValues,
          setInputValues,
        }}
      >
        <BrowserRouter>
          <AuthProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route
                path="/cart"
                element={
                  <PrivateRoutes>
                    <Cart />
                  </PrivateRoutes>
                }
              />

              <Route
                path="/catalog"
                element={
                  <PrivateRoutes>
                    <Catalog />
                  </PrivateRoutes>
                }
              />

              <Route
                path="/profile"
                element={
                  <PrivateRoutes>
                    <Profile />
                  </PrivateRoutes>
                }
              >
                <Route
                  path="details"
                  element={
                    <PrivateRoutes>
                      <Details />
                    </PrivateRoutes>
                  }
                />

                <Route
                  path="orders"
                  element={
                    <PrivateRoutes>
                      <Orders />
                    </PrivateRoutes>
                  }
                />
              </Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
