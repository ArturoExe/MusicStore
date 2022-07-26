import React, { useEffect } from "react";
import { useState } from "react";

const Details = () => {
  let [user, setUser] = useState([null]);

  useEffect(() => {
    Customers();
  }, []);

  let Customers = async () => {
    let response = await fetch("/api/customers");
    let data = await response.json();
    console.log("DATA", data);
    setUser(data);
  };

  return (
    <div>
      <h1>Hello, im details</h1>
      <p>{user[0].email}</p>
    </div>
  );
};

export default Details;
