import "../styles/cartprod.css";

export const Cartprod = ({ cartprod, handleRemove }) => {
  function handleValue() {
    handleRemove(cartprod.id);
  }

  return (
    <div className="cart-items-container">
      <img src={cartprod.image_url} alt="Epiphone 350s" />
      <h5>{cartprod.name}</h5>
      <h4>$ {cartprod.price}</h4>
      <h4>{cartprod.description}</h4>
      <button onClick={handleValue}>Remove</button>
    </div>
  );
};

export default Cartprod;
