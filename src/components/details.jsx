import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import "../styles/profile.css";
const Details = () => {
  let { user } = useContext(AuthContext);
  let [customer, setCustomer] = useState([]);
  let [currentUser, setCurrentUser] = useState([]);

  let loadUser = () => {};

  let Customers = async () => {
    let response = await fetch("/api/customers");
    let data = await response.json();
    setCustomer(data);
  };

  useEffect(() => {
    Customers();
    setCurrentUser(
      customer.filter((customer) => customer.name !== user.user_id)
    );
  }, [customer]);

  useEffect(() => {
    loadUser();
    console.log(currentUser);
  }, []);

  return (
    <div className="profile-details">
      <h1>Hello {user.username}, this are your details </h1>
      {currentUser.length > 0 && (
        <div className="all-details">
          <div className="info">
            <h3>Email Adress</h3>
            <p>{currentUser[0].email}</p>
          </div>
          <div className="info">
            <h3>Phone Number</h3>
            <p>{currentUser[0].phone}</p>
          </div>

          <div className="info">
            <h3>Contry</h3>
            <p>{currentUser[0].country}</p>
          </div>

          <div className="info">
            <h3>State</h3>
            <p>{currentUser[0].state}</p>
          </div>
          <div className="info">
            <h3>Street</h3>
            <p>{currentUser[0].street}</p>
          </div>

          <div className="info">
            <h3>Zip Code</h3>
            <p>{currentUser[0].zipcode}</p>
          </div>

          <div className="info">
            <h3>Card Number</h3>
            <p>{currentUser[0].cartNumber}</p>
          </div>
        </div>
      )}
      {currentUser === 0 && <p>Failed to load component</p>}
    </div>
  );
};

export default Details;
