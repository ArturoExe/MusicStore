import "./mydetails.css";

export const Details = () => {
return (
    <div className="mydetails-container">
        <div className="mydetails-option">
            <h3>Profile</h3>
            <p>FirstName LastName</p>
            <p>e-Mail</p>
            <a href="">Edit Name & Email</a>
            <a href="">Change Password</a>
        </div>
        <div className="mydetails-option">
            <h3>Address Book</h3>
            <p>Shipping address</p>
            <a href="">Add New Address</a>
            <a href="">Delete Address</a>
        </div>
        <div className="mydetails-option">
            <h3>Primary Payment Method</h3>
            <p>Payment Method</p>
            <a href="">Add New Payment Method</a>
            <a href="">Delete Payment Method</a>
        </div>
    </div>
    );
};

export default Details;