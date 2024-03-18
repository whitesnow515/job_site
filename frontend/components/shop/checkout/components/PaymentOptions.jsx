import Router from "next/router";

const PaymentOptions = () => {
  return (
    <div className="payment-options">
      <ul>
        <li>
          <div className="radio-option radio-box">
            <input
              type="radio"
              name="payment-group"
              id="payment-2"
              defaultChecked
            />
            <label htmlFor="payment-2">
              Direct Bank Transfer
              <span className="small-text">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order won’t be
                shipped until the funds have cleared in our account.
              </span>
            </label>
          </div>
        </li>
        {/* End li */}

        <li>
          <div className="radio-option radio-box">
            <input type="radio" name="payment-group" id="payment-1" />
            <label htmlFor="payment-1">
              Check Payments
              <span className="small-text">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order won’t be
                shipped until the funds have cleared in our account.
              </span>
            </label>
          </div>
        </li>

        {/* End li */}
        <li>
          <div className="radio-option radio-box">
            <input type="radio" name="payment-group" id="payment-3" />
            <label htmlFor="payment-3">
              Cash on Delivery
              <span className="small-text">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order won’t be
                shipped until the funds have cleared in our account.
              </span>
            </label>
          </div>
        </li>

        {/* End li */}
        <li>
          <div className="radio-option radio-box">
            <input type="radio" name="payment-group" id="payment-4" />
            <label htmlFor="payment-4">
              <strong>PayPal</strong>
              <img src="/images/icons/paypal.png" alt="payment" />
            </label>
          </div>
        </li>
      </ul>
      {/* End ul */}

      <div className="btn-box">
        <button
          type="submit"
          className="theme-btn btn-style-one"
          onClick={() => Router.push("/shop/order-completed")}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PaymentOptions;
