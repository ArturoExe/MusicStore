import "../styles/cart.css";
import Country from "./country";
import Cartprod from "./cartprod";
import { MdAlternateEmail } from "react-icons/md";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import CounterContext from "../context/CounterContext";
export const Cart = () => {
  const { cart, setCart, counter, setCounter } = useContext(CounterContext);
  const [order, setOrder] = useState(null);
  const [inputValues, setInputValues] = useState({
    email: "",
    cardnumber: "",
    name: "",
    country: "",
    street: "",
    state: "",
    zipcode: "",
  });

  function getSubtotal() {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      total = cart[i].price + total;
    }
    return total;
  }

  function getTax() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total = cart[i].price + total;
    }

    let tax = total * 0.2;
    return tax;
  }

  function getTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total = cart[i].price + total;
    }

    let tax = total * 0.2;

    total = tax + total;
    return total;
  }

  let placeOrder = async () => {
    fetch(`/api/order/place`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      customer: JSON.stringify(order),
    });
  };

  let handleChange = (value) => {
    setOrder((order) => ({ ...order, customer: value }));
    console.log("Handle Change:", order);
  };

  useEffect(() => {
    localStorage.setItem("local", JSON.stringify(cart));

    getTotal();
  }, [cart]);

  useEffect(() => {
    setCounter(cart.length);
  }, [cart]);

  function removeCart(id) {
    let newArray = [...cart];
    const index = newArray.findIndex((element) => element.id === id);
    if (index !== -1) {
      newArray.splice(index, 1);
      console.log(newArray);
      setCart(newArray);
    }
  }

  function inputHandler(e) {
    const { id, value } = e.target;
    setInputValues({ ...inputValues, [id]: value });
  }

  useEffect(() => {
    console.log(inputValues);
  }, [inputValues]);

  return (
    <div className="cart-container">
      <div className="summary-container">
        <h2>Summary Order</h2>
        <p>
          Check your item and select your shipping for a better <br />{" "}
          experience order item
        </p>

        <div>
          {cart.map((cart, index) => (
            <Cartprod key={index} cartprod={cart} handleRemove={removeCart} />
          ))}
        </div>

        <div className="shipping-container">
          <h2>Shipping</h2>
          <div className="normal-shipping">
            <label htmlFor="shipping">
              Normal Shipping
              <br />
              <span>2 - 3 weeks </span>
            </label>
            <p>Free</p>
            <input
              type="radio"
              id="shipping"
              name="shipping_dur"
              value="Normal"
            />
          </div>
          <div className="fast-shipping">
            <label htmlFor="shipping">
              Fast Shipping
              <br />
              <span>1 week </span>
            </label>
            <p>+ $30.00</p>
            <input
              type="radio"
              id="shipping"
              name="shipping_dur"
              value="Fast"
            />
          </div>
        </div>
      </div>
      <div className="payment-container">
        <h2>Payment Details</h2>
        <p>
          Complete your purchase by providing your payment <br /> detailers
          order.
        </p>
        <form className="card-info">
          <label htmlFor="email">Email Address</label>
          <br />

          <span className="at-icon">
            <MdAlternateEmail />
          </span>
          <input
            className="email-input"
            type="text"
            id="email"
            name="email"
            value={inputValues.email}
            onChange={inputHandler}
          />
          <br />

          <div className="card-detail">
            <label htmlFor="card-number">Card Detail</label>
            <br />
            <span className="card-icon">
              <BsFillCreditCard2BackFill />
            </span>
            <input
              className="card-number"
              placeholder="Card Number"
              type="text"
              id="cardnumber"
              name="card-number"
              value={inputValues.cardnumber}
              onChange={inputHandler}
            />
            <input
              className="card-expdate"
              placeholder=" MM / YY"
              type="text"
              id="card-expdate"
              name="card-expdate"
            />
            <input
              className="card-cvc"
              placeholder="   CVC"
              type="text"
              id="card-cvc"
              name="card-cvc"
            />
          </div>

          <label htmlFor="card-holder">Card Holder</label>
          <br />
          <span className="name-icon">
            <BsPerson />
          </span>
          <input
            className="cardholder-input"
            placeholder="Name"
            type="text"
            id="name"
            name="card-holder"
            value={inputValues.name}
            onChange={inputHandler}
          />
          <br />

          <div className="billing-adress-info">
            <label htmlFor="billing-address">Billing Address</label>
            <br />

            <Country
              updateCountry={inputHandler}
              inputValues={inputValues}
            ></Country>

            <input
              className="billing-address"
              placeholder="Street"
              type="text"
              id="street"
              name="billing-address"
              value={setInputValues.street}
              onChange={inputHandler}
            />
            <br />
            <input
              className="billing-state"
              placeholder="State"
              type="text"
              id="state"
              name="billing-address"
              value={inputValues.state}
              onChange={inputHandler}
            />
            <input
              className="billing-zipcode"
              placeholder="Zip Code"
              type="text"
              id="zipcode"
              name="billing-address"
              value={inputValues.zipcode}
              onChange={inputHandler}
            />
          </div>
        </form>
        <div className="totals-text">
          <h4>Subtotal</h4>
          <h4>Tax ( % 20 )</h4>
          <h4>Total</h4>
        </div>
        <div className="totals-res">
          <h4>$ {getSubtotal()}</h4>
          <h4>$ {getTax()}</h4>
          <h4>$ {getTotal()}</h4>
        </div>
        <button className="button-80">Pay ${getTotal()}</button>
      </div>
    </div>
  );
};

export default Cart;
