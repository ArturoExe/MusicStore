import "../styles/profile.css";
import { Link, Navigate } from "react-router-dom";
import { Outlet, useNavigate } from "react-router";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
export const Profile = () => {
  let { authTokens, logoutUser } = useContext(AuthContext);

  return (
    <div className="profile-container">
      <div className="vertical-div">
        <div className="Profile">
          <img
            src="./img/upload.png"
            alt="Profile Picture"
            className="profile-pic"
          ></img>
          <p>Username</p>
        </div>
        <div className="Options">
          <div className="my-details">
            <img src="./img/details.jpg" alt="my details" />
            <Link to="details">My Details</Link>
          </div>
          <div className="my-orders">
            <img src="./img/orders.png" alt="" />
            <Link to="orders">My orders</Link>
          </div>
          <div className="account-settings">
            <img src="./img/settings.png" alt="" />
            <a onClick={logoutUser}>Log-out</a>
          </div>
        </div>
      </div>

      <div className="my-details">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
