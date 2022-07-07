import React from "react";
import { Link } from "react-router-dom";

const Product = (product) => {
  return (
    <Link to={``}>
      <div className="notes-list-item">
        <h3>{product.name}</h3>
        <p>
          <span>{product.price}</span>

          {product.description}
        </p>
      </div>
    </Link>
  );
};

export default Product;
