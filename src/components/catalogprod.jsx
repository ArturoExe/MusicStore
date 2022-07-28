import "../styles/catalogprod.css";
import Rating from "./rating";
export const Catalogprod = ({ product, handleCart }) => {
  function handleValue() {
    handleCart(product.id);
  }

  return (
    <div className="catalog-prod-container">
      <img src={product.image_url} alt="Epiphone 340v" />
      <h5>{product.name}</h5>
      <h4> Price ${product.price}</h4>
      <Rating></Rating>
      <button onClick={handleValue}>Add to Cart</button> <button>See</button>
    </div>
  );
};

export default Catalogprod;
