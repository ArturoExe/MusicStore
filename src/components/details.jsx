import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

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
    <div>
      <h1>Hello {user.username}, this are your details </h1>
      {currentUser.length > 0 && (
        <div>
          <h3>Email Adress</h3>
          <p>{currentUser[0].email}</p>
          <h3>Phone Number</h3>
          <p>{currentUser[0].phone}</p>
          <h3>Contry</h3>
          <p>{currentUser[0].country}</p>
          <h3>State</h3>
          <p>{currentUser[0].state}</p>
          <h3>Street</h3>
          <p>{currentUser[0].street}</p>
          <h3>Zip Code</h3>
          <p>{currentUser[0].zipcode}</p>
          <h3>Card Number</h3>
          <p>{currentUser[0].cartNumber}</p>
        </div>
      )}
      {currentUser === 0 && <p>Failed to load component</p>}
    </div>
  );
};

export default Details;
