import "./cart.css";
import Country from "./country";
import Cartprod from "./cartprod";
import Paybtn from "./paybtn";

import { MdAlternateEmail } from "react-icons/md";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";

export const Cart = () => {
    return (
      <div className="cart-container">
            <div className="summary-container">
                <h2>Summary Order</h2>
                <p>Check your item and select your shipping for a better <br/> experience order item</p>
                    <Cartprod></Cartprod>
                    <div className="shipping-container">
                        <h2>Shipping</h2>
                        <div className="normal-shipping">
                            <label for="shipping">Normal Shipping<br/><span>2 - 3 weeks </span></label>
                            <p>Free</p><input type="radio" id="shipping" name="shipping_dur" value="Normal"/>
                        </div>
                        <div className="fast-shipping">
                            <label for="shipping">Fast Shipping<br/><span>1 week </span></label>
                            <p>+ $30.00</p><input type="radio" id="shipping" name="shipping_dur" value="Fast"/>
                        </div>
                    </div>
            </div>
            <div className="payment-container">
                <h2>Payment Details</h2>
                <p>Complete your purchase by providing your payment <br/> detailers order.</p>
                    <form className="card-info">
                        <label for="email">Email Address</label><br/>
                        
                        <span className="at-icon">< MdAlternateEmail/></span><input className="email-input" type="text" id="email" name="email"/><br/>

                        <div className="card-detail">
                        <label for="card-number">Card Detail</label><br/>
                            <span className="card-icon">< BsFillCreditCard2BackFill/></span><input className="card-number" placeholder="Card Number" type="text" id="card-number" name="card-number"/>
                            <input className="card-expdate" placeholder=" MM / YY" type="text" id="card-expdate" name="card-expdate"/>
                            <input className="card-cvc" placeholder="       CVC" type="text" id="card-cvc" name="card-cvc"/>
                        </div>
                        
                        <label for="card-holder">Card Holder</label><br/>
                            <span className="name-icon">< BsPerson/></span><input className="cardholder-input" placeholder="Name" type="text" id="card-holder" name="card-holder"/><br/>

                        <div className="billing-adress-info">
                            <label for="billing-address">Billing Address</label><br/>
                            <Country></Country>
                            <input className="billing-address" placeholder="Street" type="text" id="billing-address" name="billing-address"/><br/>
                            <input className="billing-state" placeholder="State" type="text" id="billing-address" name="billing-address"/>
                            <input className="billing-zipcode" placeholder="Zip Code" type="text" id="billing-address" name="billing-address"/>
                        </div>
                    </form>
                <div className="totals-text">
                    <h4>Subtotal</h4>
                    <h4>Tax ( % 20 )</h4>
                    <h4>Total</h4>
                </div>
                <div className="totals-res">
                    <h4>$ 1000</h4>
                    <h4>$ 200</h4>
                    <h4>$ 1200</h4>
                </div>
                <Paybtn></Paybtn>
            </div>
      </div>
    );
  };
  
  export default Cart;