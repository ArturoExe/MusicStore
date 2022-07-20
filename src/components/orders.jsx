import "../styles/orders.css";
import Orderdetail from "./orderdetail";

export const Orders = () => {
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

      <Orderdetail></Orderdetail>
    </div>
  );
};

export default Orders;
