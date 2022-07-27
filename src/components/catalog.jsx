import React, { useEffect, useState, useContext } from "react";
import "../styles/catalog.css";
import Catalogprod from "./catalogprod";
import CounterContext from "../context/CounterContext";

const Catalog = () => {
  const [product, setProduct] = useState([]); //Catalog array
  const [incart, setIncart] = useState(() => handleLocalData());
  const { setCounter, setCart } = useContext(CounterContext);

  function handleLocalData() {
    let localData = localStorage.getItem("local");
    return localData ? JSON.parse(localData) : [];
  }

  //Adds the item to cart
  function addCart(id) {
    const temp = product.find((prd) => prd?.id === id);
    setIncart([...incart, temp]);
  }

  // Saves to local storage
  useEffect(() => {
    localStorage.setItem("local", JSON.stringify(incart));
  }, [incart]);

  // Visual help only
  useEffect(() => {
    setCounter(incart.length);
    setCart(incart);
    console.log(incart);
  }, [incart]);

  //Updates the catalog render
  useEffect(() => {
    handleLocalData();
    getProducts();
  }, []);

  let getProducts = async () => {
    let response = await fetch("/api/products/");
    let data = await response.json();
    setProduct(data);
    console.log("DATA", data);
  };

  return (
    <div className="catalog-container">
      <form action="#">
        <select name="filter" id="filter">
          <option value="filterby">Filter By</option>
          <option value="test">Test</option>
        </select>
        <select name="order" id="order">
          <option value="orderby">Order By</option>
          <option value="test">Test</option>
        </select>
        <input className="go" type="submit" value="Go" />
        <input className="clear" type="submit" value="Clear" />
      </form>

      <div>
        {product.map((product, index) => (
          <Catalogprod key={index} product={product} handleCart={addCart} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
