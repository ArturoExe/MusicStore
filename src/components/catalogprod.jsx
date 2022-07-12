import "./catalogprod.css";
import Rating from "./rating";

export const Catalogprod = ({ product }) => {
  return (
    <div className="catalog-prod-container">
      <img src="img/GreenEpiphone340v.png" alt="Epiphone 340v" />
      <h5>{product.name}</h5>
      <h4> Price ${product.price}</h4>
      <Rating></Rating>
      <button>Add to Cart</button> <button>See</button>
    </div>
  );
};

export default Catalogprod;
