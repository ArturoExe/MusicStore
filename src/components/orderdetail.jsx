import "./orderdetail.css";

export const Orderdetail = () => {
    return (
        <div className="orders-container">
            <div className="orders-status">
                <div className="order-info">
                    <h3>Rickenbacker 4001</h3>
                    <h5>Total: $2200</h5>
                </div>
                <img src="img/rickenbacker.jpg" alt="Rickenbacker 4001"/>
            </div>

            <div className="delivery-status-options">
                <div className="delivery-status">
                    <p>Delivery status: </p><p>ETA</p>
                </div>

                <div className="order-options">
                    <button >View status</button>
                    <button>Return order</button>
                    <button>Write a review</button>
                </div>
            </div>
        </div>
    );
};

export default Orderdetail;