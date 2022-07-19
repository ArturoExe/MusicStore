import "./profile.css";
import * as React from "react";
import { Link } from "react-router-dom";

export const Profile = () => {
return (
    <div className="profile-container">
        <div className="vertical-div">
            <div className="Profile">
                <img src="../img/upload.png" alt="Profile Picture" className="profile-pic"></img>
                <p>Username</p>
            </div>
            <div className="Options">
                <div className="my-details">
                    <img src="../img/details.jpg" alt="my details"/>
                    <Link to="/my-details">My Details</Link>
                </div>
                <div className="my-orders">
                    <img src="../img/orders.png" alt="" />
                    <Link to="/my-orders">My Orders</Link>
                </div>
                <div className="account-settings">
                    <img src="../img/settings.png" alt="" />
                    <a href="#">Log Out</a>
                </div>
            </div>
        </div>

        <div className="my-details">
            <h1>My Details</h1>
            <h3>Personal information</h3>
        </div>

    </div>
    );
};

export default Profile;