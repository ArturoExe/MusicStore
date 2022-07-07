import React, { useEffect, useState } from "react";

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
    <div>
      <div>
        {product.map((product, index) => (
          <h2>{product.name}</h2>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
