import "./cart.css";
import Country from "./country";
import Cartprod from "./cartprod";
import Paybtn from "./paybtn";

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
                        <input className="email-input" placeholder="@" type="text" id="email" name="email"/><br/>

                        <div className="card-detail">
                            <label for="card-number">Card Detail</label><br/>
                            <input className="card-number" placeholder="Number" type="text" id="card-number" name="card-number"/>
                            <input className="card-expdate" placeholder=" MM / YY" type="text" id="card-expdate" name="card-expdate"/>
                            <input className="card-cvc" placeholder="       CVC" type="text" id="card-cvc" name="card-cvc"/>
                        </div>
                        
                        <label for="card-holder">Card Holder</label><br/>
                        <input className="cardholder-input" placeholder="Name" type="text" id="card-holder" name="card-holder"/><br/>

                        <div className="billing-adress-info">
                            <label for="billing-address">Billing Address</label><br/>
                            <Country></Country>
                            <input className="billing-address" placeholder="Street" type="text" id="billing-address" name="billing-address"/><br/>
                            <input className="billing-state" placeholder="State" type="text" id="billing-address" name="billing-address"/>
                            <input className="billing-zipcode" placeholder="Zip Code" type="text" id="billing-address" name="billing-address"/>
                        </div>
                    </form>
                <div className="totals">
                    <h4>Subtotal    $</h4>
                    <h4>Tax (20%)    $</h4>
                    <h4>Total   $</h4>
                </div>
                <Paybtn></Paybtn>
            </div>
      </div>
    );
  };
  
  export default Cart;