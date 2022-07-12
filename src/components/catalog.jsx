import React, { useEffect, useState } from "react";
import "./catalog.css";
import Catalogprod from "./catalogprod";

const Catalog = () => {
  let [product, setProduct] = useState([]);

  useEffect(() => {
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
          <Catalogprod key={index} product={product} />
        ))}
      </div>
    </div>

  );
};

export default Catalog;
