import BillingDetails from "./BillingDetails";
import OrderDetails from "./OrderDetails";
import PaymentOptions from "./PaymentOptions";

const index = () => {
  return (
    <div className="row">
      <div className="column col-lg-8 col-md-12 col-sm-12">
        {/* <!--Checkout Details--> */}
        <div className="checkout-form">
          <h3 className="title">Billing Details</h3>
          <BillingDetails />
        </div>
        {/* <!--End Billing Details--> */}
      </div>

      <div className="column col-lg-4 col-md-12 col-sm-12">
        <OrderDetails />
        {/* <!--End Order Box--> */}

        <div className="payment-box">
          <PaymentOptions />
          {/* <!--Payment Options--> */}
        </div>
        {/* <!--End Payment Box--> */}
      </div>
    </div>
  );
};

export default index;
