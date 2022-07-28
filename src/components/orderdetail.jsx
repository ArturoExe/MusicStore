import "../styles/orderdetail.css";

export const Orderdetail = ({ order }) => {
  return (
    <div className="orders-container">
      <div className="orders-status">
        <div className="order-info">
          <h3>Order ID: {order.id}</h3>
          <h5>Note: {order.note}</h5>
        </div>
      </div>

      <div className="delivery-status-options">
        <div className="delivery-status">
          <p>Delivery status: {order.status}</p>
          <p>Order placed on {order.date_created_on}</p>
        </div>

        <div className="order-options"></div>
      </div>
    </div>
  );
};

export default Orderdetail;
