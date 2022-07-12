import "./profile.css";

export const Profile = () => {
return (
    <div className="profile-container">
        <div className="vertical-div">
            <div className="Profile">
                <img src="./img/upload.png" alt="Profile Picture" className="profile-pic"></img>
                <p>Username</p>
            </div>
            <div className="Options">
                <div className="my-details">
                    <img src="./img/details.jpg" alt="my details"/>
                    <a href="my-details">My Details</a>
                </div>
                <div className="my-orders">
                    <img src="./img/orders.png" alt="" />
                    <a href="my-orders">My Orders</a>
                </div>
                <div className="account-settings">
                    <img src="./img/settings.png" alt="" />
                    <a href="account-settings">Account Settings</a>
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