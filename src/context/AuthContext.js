import { createContext, useState, useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import CounterContext from "./CounterContext";

const AuthContext = createContext(null);
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const { inputValues } = useContext(CounterContext);

  const history = useNavigate();
  let [loading, setLoading] = useState();

  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );

  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  let loginUser = async (e) => {
    e.preventDefault();
    console.log("form sent");
    let response = await fetch(`/api/token/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });

    let data = await response.json();
    console.log("data", data);
    console.log("response", response);

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      history("/catalog");
    } else {
      alert("something went wrong...");
    }
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    history("/login");
  };

  let updateToken = async () => {
    console.log("update token called");
    let response = await fetch(`http://127.0.0.1:8000/api/token/refresh/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        refresh: authTokens.refresh,
      }),
    });

    let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      loginUser();
    }
  };

  let placeOrder = async (e) => {
    e.preventDefault();
    console.log("Order Placed");
    let response = await fetch(`/api/place_order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: null,
        date: null,
        status: "Out for delivery",
        note: "Default note",
        customer: user.user_id,
        product: 1,
      }),
    });

    let data = await response.json();
    console.log("Order is ", data);
  };

  let setCustomer = async () => {
    console.log("Customer Set");
    let response = await fetch(`/api/customers/set`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: null,
        phone: "12321312412",
        email: inputValues.email,
        country: inputValues.country,
        street: inputValues.street,
        state: inputValues.state,
        zipcode: 92173.0,
        cartNumber: inputValues.cartnumber,
        date_created_on: null,
        name: user.user_id,
      }),
    });

    placeOrder();
    let data = await response.json();
    console.log("Customer", data);
  };

  let contextData = {
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
    authTokens: authTokens,
    placeOrder: placeOrder,
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
