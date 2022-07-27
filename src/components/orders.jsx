import "../styles/orders.css";
import Orderdetail from "./orderdetail";
import { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export const Orders = () => {
  let { authTokens } = useContext(AuthContext);

  let [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  let getOrders = async () => {
    let response = await fetch("/api/cart/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });

    let data = await response.json();
    console.log("The array is ", data);
    setOrders(data);
  };

  return (
    <div className="filter-container">
      <form action="#">
        <select name="filter" id="filter">
          <option value="lastmonth">Last month</option>
          <option value="last3month">Last 3 months</option>
          <option value="last6month">Last 6 months</option>
          <option value="lastyear">Last year</option>
        </select>

        <select name="order" id="order">
          <option value="delivered">Delivered</option>
          <option value="shipped">Shipped</option>
          <option value="processing">Processing</option>
        </select>
      </form>

      <div>
        {orders.map((order) => (
          <Orderdetail key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
